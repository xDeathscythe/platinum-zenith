import { Router } from 'express'
import crypto from 'crypto'
import { getDb, save } from '../db.js'

const router = Router()

function clampText(value, max = 255) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, max)
}

function normalizePath(value) {
  if (typeof value !== 'string') return '/'
  const pathOnly = value.split('?')[0].trim() || '/'
  if (!pathOnly.startsWith('/')) return `/${pathOnly}`
  return pathOnly
}

function inferContentType(path, rawType) {
  const fromPayload = clampText(rawType, 40)
  if (fromPayload) return fromPayload

  if (path.startsWith('/blog/')) return 'blog_post'
  if (path === '/blog') return 'blog_index'
  if (path.startsWith('/log')) return 'admin'
  return 'page'
}

function inferSlug(path, rawSlug) {
  const fromPayload = clampText(rawSlug, 180)
  if (fromPayload) return fromPayload
  if (!path.startsWith('/blog/')) return ''
  return clampText(path.replace('/blog/', ''), 180)
}

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim()
  }
  return req.socket?.remoteAddress || ''
}

function hashIp(ip) {
  if (!ip) return ''
  return crypto.createHash('sha256').update(ip).digest('hex').slice(0, 24)
}

router.post('/analytics/visit', async (req, res) => {
  try {
    const payload = req.body || {}
    const sessionId = clampText(payload.sessionId, 128)
    const path = normalizePath(payload.path)

    if (!sessionId) {
      return res.status(400).json({ ok: false, error: 'sessionId je obavezan' })
    }

    const db = await getDb()
    const contentType = inferContentType(path, payload.contentType)
    const slug = inferSlug(path, payload.slug)

    const referrer = clampText(payload.referrer, 500)
    const source = clampText(payload.utmSource, 120)
    const medium = clampText(payload.utmMedium, 120)
    const campaign = clampText(payload.utmCampaign, 120)
    const term = clampText(payload.utmTerm, 120)
    const content = clampText(payload.utmContent, 120)

    const userAgent = clampText(req.headers['user-agent'] || '', 500)
    const ipHash = hashIp(getClientIp(req))

    const language = clampText(payload.language, 30)
    const screenW = Number.isFinite(Number(payload.screenW)) ? Number(payload.screenW) : null
    const screenH = Number.isFinite(Number(payload.screenH)) ? Number(payload.screenH) : null
    const viewportW = Number.isFinite(Number(payload.viewportW)) ? Number(payload.viewportW) : null
    const viewportH = Number.isFinite(Number(payload.viewportH)) ? Number(payload.viewportH) : null
    const tzOffset = Number.isFinite(Number(payload.tzOffset)) ? Number(payload.tzOffset) : null

    db.run(
      `INSERT INTO page_visits (
        session_id, path, slug, content_type, referrer,
        source, medium, campaign, term, content,
        user_agent, ip_hash, language,
        screen_w, screen_h, viewport_w, viewport_h, tz_offset
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        sessionId,
        path,
        slug || null,
        contentType,
        referrer || null,
        source || null,
        medium || null,
        campaign || null,
        term || null,
        content || null,
        userAgent || null,
        ipHash || null,
        language || null,
        screenW,
        screenH,
        viewportW,
        viewportH,
        tzOffset,
      ]
    )

    save()
    return res.json({ ok: true })
  } catch (err) {
    console.error('analytics visit error:', err)
    return res.status(500).json({ ok: false, error: 'Greška pri upisu posete' })
  }
})

router.post('/analytics/event', async (req, res) => {
  try {
    const payload = req.body || {}
    const sessionId = clampText(payload.sessionId, 128)
    const path = normalizePath(payload.path)
    const eventName = clampText(payload.eventName, 80)

    if (!sessionId || !eventName) {
      return res.status(400).json({ ok: false, error: 'sessionId i eventName su obavezni' })
    }

    const db = await getDb()
    const contentType = inferContentType(path, payload.contentType)
    const slug = inferSlug(path, payload.slug)
    const eventValue = Number.isFinite(Number(payload.value)) ? Number(payload.value) : null

    const metaInput = payload.meta && typeof payload.meta === 'object' ? payload.meta : {}
    const metaJson = JSON.stringify(metaInput).slice(0, 1500)

    db.run(
      `INSERT INTO analytics_events (
        session_id, path, slug, content_type, event_name, event_value, meta_json
      ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [sessionId, path, slug || null, contentType, eventName, eventValue, metaJson]
    )

    save()
    return res.json({ ok: true })
  } catch (err) {
    console.error('analytics event error:', err)
    return res.status(500).json({ ok: false, error: 'Greška pri upisu eventa' })
  }
})

export default router
