import { Router } from 'express'
import { getDb } from '../db.js'
import { cleanPath, text, validId, ensureSession } from '../measurement.js'

const router = Router()
const EVENTS = new Set(['active_time', 'scroll_depth', 'contact_click', 'phone_click', 'email_click', 'outbound_click', 'form_start', 'form_error', 'generate_lead', 'booking_open'])

router.get('/analytics/config', (req, res) => {
  res.set('Cache-Control', 'no-store').json({
    gaId: /^G-[A-Z0-9]+$/.test(process.env.GA_MEASUREMENT_ID || '') ? process.env.GA_MEASUREMENT_ID : null,
    clarityId: /^[a-z0-9]+$/.test(process.env.CLARITY_PROJECT_ID || '') ? process.env.CLARITY_PROJECT_ID : null,
  })
})

router.post('/analytics/visit', async (req, res) => {
  try {
    const p = req.body || {}
    if (!validId(p.pageId) || !validId(p.sessionId) || !validId(p.visitorId)) return res.status(400).json({ error: 'Invalid measurement identifiers' })
    const path = cleanPath(p.path)
    if (path.startsWith('/log')) return res.sendStatus(204)
    const db = await getDb()
    ensureSession(db, p)
    db.run(`INSERT OR IGNORE INTO measured_pages (id, session_id, path, content_type, language, viewport_w)
      VALUES (?, ?, ?, ?, ?, ?)`, [p.pageId, p.sessionId, path, path.startsWith('/blog/') ? 'blog_post' : 'page', text(p.language, 30), Math.max(0, Math.min(20000, Number(p.viewportW) || 0))])
    res.json({ ok: true })
  } catch (err) { console.error('Measurement write failed', err); res.status(500).json({ error: 'Measurement unavailable' }) }
})

router.post('/analytics/event', async (req, res) => {
  try {
    const p = req.body || {}
    if (!validId(p.sessionId) || !EVENTS.has(p.eventName)) return res.status(400).json({ error: 'Invalid event' })
    const db = await getDb()
    ensureSession(db, p)
    const meta = {}
    for (const key of ['pageId', 'from_path', 'destination_host', 'form_id', 'threshold']) {
      if (p.meta?.[key] !== undefined) meta[key] = text(String(p.meta[key]), 200)
    }
    const value = p.value === null || p.value === undefined ? null : Math.max(0, Math.min(3600, Number(p.value) || 0))
    db.run(`INSERT INTO measured_events (session_id, path, event_name, event_value, meta_json) VALUES (?, ?, ?, ?, ?)`,
      [p.sessionId, cleanPath(p.path), p.eventName, value, JSON.stringify(meta)])
    res.json({ ok: true })
  } catch (err) { console.error('Event write failed', err); res.status(500).json({ error: 'Measurement unavailable' }) }
})

export default router
import process from 'node:process'
