import { Router } from 'express'
import { requireAuth } from '../auth.js'
import { getDb } from '../db.js'

const router = Router()
router.use(requireAuth)

function parseRows(result) {
  const cols = result?.[0]?.columns || []
  return (result?.[0]?.values || []).map((row) => Object.fromEntries(cols.map((c, i) => [c, row[i]])))
}

function parseDays(value) {
  const n = Number(value)
  if (!Number.isFinite(n)) return 30
  return Math.max(1, Math.min(365, Math.floor(n)))
}

router.get('/stats', async (req, res) => {
  const db = await getDb()
  const prijave = db.exec("SELECT COUNT(*) FROM submissions WHERE type='prijava'")[0]?.values[0][0] || 0
  const kontakt = db.exec("SELECT COUNT(*) FROM submissions WHERE type='kontakt'")[0]?.values[0][0] || 0
  const newsletter = db.exec("SELECT COUNT(*) FROM submissions WHERE type='newsletter'")[0]?.values[0][0] || 0
  const emailsSent = db.exec('SELECT COUNT(*) FROM email_log')[0]?.values[0][0] || 0
  const visitsTotal = db.exec('SELECT COUNT(*) FROM page_visits')[0]?.values[0][0] || 0
  const uniqueVisitors = db.exec('SELECT COUNT(DISTINCT session_id) FROM page_visits')[0]?.values[0][0] || 0

  const recentRows = db.exec('SELECT * FROM submissions ORDER BY created_at DESC LIMIT 5')
  const recent = parseRows(recentRows)

  res.json({
    ok: true,
    stats: {
      prijave,
      kontakt,
      newsletter,
      emailsSent,
      visitsTotal,
      uniqueVisitors,
      total: prijave + kontakt + newsletter,
    },
    recent,
  })
})

router.get('/analytics/overview', async (req, res) => {
  const db = await getDb()
  const days = parseDays(req.query.days)

  const totals = db.exec(
    `SELECT
      COUNT(*) as total_visits,
      COUNT(DISTINCT session_id) as unique_visitors,
      SUM(CASE WHEN content_type = 'blog_post' THEN 1 ELSE 0 END) as blog_post_visits,
      SUM(CASE WHEN content_type IN ('page', 'blog_index') THEN 1 ELSE 0 END) as page_visits
    FROM page_visits
    WHERE created_at >= datetime('now', '-${days} days')`
  )

  const topPages = db.exec(
    `SELECT path, COUNT(*) as visits, COUNT(DISTINCT session_id) as unique_visitors
     FROM page_visits
     WHERE created_at >= datetime('now', '-${days} days')
       AND content_type IN ('page', 'blog_index')
     GROUP BY path
     ORDER BY visits DESC
     LIMIT 15`
  )

  const topBlogPosts = db.exec(
    `SELECT slug, path, COUNT(*) as visits, COUNT(DISTINCT session_id) as unique_visitors
     FROM page_visits
     WHERE created_at >= datetime('now', '-${days} days')
       AND content_type = 'blog_post'
     GROUP BY slug, path
     ORDER BY visits DESC
     LIMIT 15`
  )

  const daily = db.exec(
    `SELECT DATE(created_at) as day,
            COUNT(*) as visits,
            COUNT(DISTINCT session_id) as unique_visitors,
            SUM(CASE WHEN content_type = 'blog_post' THEN 1 ELSE 0 END) as blog_post_visits,
            SUM(CASE WHEN content_type IN ('page', 'blog_index') THEN 1 ELSE 0 END) as page_visits
     FROM page_visits
     WHERE created_at >= datetime('now', '-${days} days')
     GROUP BY DATE(created_at)
     ORDER BY day ASC`
  )

  const sourceBreakdown = db.exec(
    `SELECT
      COALESCE(NULLIF(source, ''), 'direct') as source,
      COUNT(*) as visits
     FROM page_visits
     WHERE created_at >= datetime('now', '-${days} days')
     GROUP BY COALESCE(NULLIF(source, ''), 'direct')
     ORDER BY visits DESC
     LIMIT 12`
  )

  const eventSummary = db.exec(
    `SELECT
      event_name,
      COUNT(*) as count,
      AVG(event_value) as avg_value
     FROM analytics_events
     WHERE created_at >= datetime('now', '-${days} days')
     GROUP BY event_name
     ORDER BY count DESC
     LIMIT 20`
  )

  res.json({
    ok: true,
    days,
    totals: parseRows(totals)[0] || {
      total_visits: 0,
      unique_visitors: 0,
      blog_post_visits: 0,
      page_visits: 0,
    },
    topPages: parseRows(topPages),
    topBlogPosts: parseRows(topBlogPosts),
    daily: parseRows(daily),
    sourceBreakdown: parseRows(sourceBreakdown),
    eventSummary: parseRows(eventSummary),
  })
})

router.get('/analytics/recent-visits', async (req, res) => {
  const db = await getDb()
  const limitRaw = Number(req.query.limit)
  const limit = Number.isFinite(limitRaw) ? Math.max(1, Math.min(200, Math.floor(limitRaw))) : 50

  const rows = db.exec(
    `SELECT id, created_at, path, slug, content_type, source, medium, campaign, referrer, session_id
     FROM page_visits
     ORDER BY created_at DESC
     LIMIT ${limit}`
  )

  res.json({ ok: true, visits: parseRows(rows) })
})

router.get('/submissions', async (req, res) => {
  const db = await getDb()
  const parse = (type) => {
    const r = db.exec(`SELECT * FROM submissions WHERE type='${type}' ORDER BY created_at DESC`)
    return parseRows(r)
  }
  res.json({ ok: true, prijave: parse('prijava'), kontakt: parse('kontakt'), newsletter: parse('newsletter') })
})

router.get('/emails', async (req, res) => {
  const db = await getDb()
  const r = db.exec('SELECT * FROM email_log ORDER BY created_at DESC LIMIT 100')
  const emails = parseRows(r)
  res.json({ ok: true, emails, total: emails.length })
})

export default router
