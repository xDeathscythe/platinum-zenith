import { Router } from 'express'
import { requireAuth } from '../auth.js'
import { getDb } from '../db.js'

const router = Router()
router.use(requireAuth)
const rows = result => (result[0]?.values || []).map(row => Object.fromEntries(result[0].columns.map((name, i) => [name, row[i]])))
const STAGES = new Set(['new', 'qualified', 'meeting', 'proposal', 'won', 'lost'])

router.get('/growth', async (req, res) => {
  const days = Math.max(1, Math.min(365, Math.floor(Number(req.query.days) || 30)))
  const db = await getDb()
  const period = `datetime('now', '-${days} days')`
  const sessions = rows(db.exec(`SELECT COUNT(*) sessions, COUNT(DISTINCT visitor_id) visitors FROM measurement_sessions WHERE created_at >= ${period}`))[0]
  const totals = rows(db.exec(`SELECT COUNT(*) pageviews FROM measured_pages WHERE created_at >= ${period}`))[0]
  const leads = rows(db.exec(`SELECT COUNT(*) leads, SUM(lead_stage = 'won') clients FROM submissions WHERE type IN ('kontakt','prijava') AND created_at >= ${period}`))[0]
  const sources = rows(db.exec(`SELECT s.source, s.medium, s.campaign, COUNT(DISTINCT s.id) sessions,
    COUNT(DISTINCT l.id) leads, COUNT(DISTINCT CASE WHEN l.lead_stage = 'won' THEN l.id END) clients
    FROM measurement_sessions s LEFT JOIN submissions l ON l.session_id = s.id AND l.type IN ('kontakt','prijava')
    WHERE s.created_at >= ${period} GROUP BY s.source,s.medium,s.campaign ORDER BY sessions DESC LIMIT 60`))
  const pages = rows(db.exec(`SELECT p.path, COUNT(*) pageviews, COUNT(DISTINCT p.session_id) sessions
    FROM measured_pages p WHERE p.created_at >= ${period} GROUP BY p.path ORDER BY pageviews DESC LIMIT 40`))
  const landingPages = rows(db.exec(`SELECT s.landing_path path, COUNT(DISTINCT s.id) sessions, COUNT(DISTINCT l.id) leads
    FROM measurement_sessions s LEFT JOIN submissions l ON l.session_id = s.id AND l.type IN ('kontakt','prijava')
    WHERE s.created_at >= ${period} GROUP BY s.landing_path ORDER BY leads DESC,sessions DESC LIMIT 30`))
  const events = rows(db.exec(`SELECT event_name, COUNT(*) count, SUM(event_value) total_value FROM measured_events
    WHERE created_at >= ${period} GROUP BY event_name ORDER BY count DESC`))
  const daily = rows(db.exec(`SELECT date(created_at) day, COUNT(*) sessions FROM measurement_sessions WHERE created_at >= ${period} GROUP BY date(created_at) ORDER BY day`))
  const recent = rows(db.exec(`SELECT s.id, s.created_at, s.source, s.medium, s.landing_path,
    (SELECT COUNT(*) FROM measured_pages p WHERE p.session_id = s.id) pageviews,
    (SELECT COUNT(*) FROM submissions l WHERE l.session_id = s.id AND l.type IN ('kontakt','prijava')) leads
    FROM measurement_sessions s WHERE s.created_at >= ${period} ORDER BY s.created_at DESC LIMIT 30`))
  const revenue = rows(db.exec(`SELECT revenue_currency currency, SUM(revenue) value, COUNT(*) clients FROM submissions WHERE lead_stage = 'won' AND closed_at >= ${period} GROUP BY revenue_currency`))
  const legacy = rows(db.exec('SELECT COUNT(*) pageviews, MIN(created_at) first_record, MAX(created_at) last_record FROM page_visits'))[0]
  const unattributed = rows(db.exec(`SELECT COUNT(*) count FROM submissions WHERE type IN ('kontakt','prijava') AND session_id IS NULL AND created_at >= ${period}`))[0].count
  res.set('Cache-Control', 'no-store').json({ days, totals: { ...totals, ...sessions, ...leads, unattributed }, sources, pages, landingPages, events, daily, recent, revenue, legacy })
})

router.get('/growth/session/:id', async (req, res) => {
  const db = await getDb()
  const session = rows(db.exec('SELECT * FROM measurement_sessions WHERE id = ?', [req.params.id]))[0]
  if (!session) return res.sendStatus(404)
  const pages = rows(db.exec('SELECT path, created_at, language, viewport_w FROM measured_pages WHERE session_id = ? ORDER BY created_at', [req.params.id]))
  const events = rows(db.exec('SELECT path, event_name, event_value, created_at FROM measured_events WHERE session_id = ? ORDER BY created_at LIMIT 500', [req.params.id]))
  res.set('Cache-Control', 'no-store').json({ session, pages, events })
})

router.get('/leads/:id/attribution', async (req, res) => {
  const db = await getDb()
  const lead = rows(db.exec(`SELECT l.id, l.lead_stage, l.revenue, l.revenue_currency, s.source, s.medium, s.campaign, s.landing_path, s.first_touch_json, s.id session_id
    FROM submissions l LEFT JOIN measurement_sessions s ON s.id = l.session_id WHERE l.id = ?`, [req.params.id]))[0]
  if (!lead) return res.sendStatus(404)
  const pages = lead.session_id ? rows(db.exec('SELECT path, created_at FROM measured_pages WHERE session_id = ? ORDER BY created_at', [lead.session_id])) : []
  res.set('Cache-Control', 'no-store').json({ lead, pages })
})

router.patch('/leads/:id', async (req, res) => {
  const { stage, revenue, currency } = req.body || {}
  if (!STAGES.has(stage) || !['EUR', 'RSD', 'USD'].includes(currency) || (revenue !== null && (!Number.isFinite(revenue) || revenue < 0 || revenue > 1e9))) return res.status(400).json({ error: 'Neispravni podaci' })
  const db = await getDb()
  if (!db.exec("SELECT id FROM submissions WHERE id = ? AND type IN ('kontakt','prijava')", [req.params.id])[0]?.values.length) return res.sendStatus(404)
  db.run(`UPDATE submissions SET lead_stage = ?, revenue = ?, revenue_currency = ?, closed_at = CASE WHEN ? = 'won' THEN COALESCE(closed_at, CURRENT_TIMESTAMP) ELSE NULL END WHERE id = ?`, [stage, revenue, currency, stage, req.params.id])
  res.json({ ok: true })
})
export default router
