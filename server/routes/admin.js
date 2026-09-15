import { Router } from 'express'
import { requireAuth } from '../auth.js'
import { getDb } from '../db.js'

const router = Router()
router.use(requireAuth)

function parseRows(result) {
  const cols = result?.[0]?.columns || []
  return (result?.[0]?.values || []).map((row) => Object.fromEntries(cols.map((c, i) => [c, row[i]])))
}

router.get('/stats', async (req, res) => {
  const db = await getDb()
  const prijave = db.exec("SELECT COUNT(*) FROM submissions WHERE type='prijava'")[0]?.values[0][0] || 0
  const kontakt = db.exec("SELECT COUNT(*) FROM submissions WHERE type='kontakt'")[0]?.values[0][0] || 0
  const newsletter = db.exec("SELECT COUNT(*) FROM submissions WHERE type='newsletter'")[0]?.values[0][0] || 0
  const emailsSent = db.exec('SELECT COUNT(*) FROM email_log')[0]?.values[0][0] || 0
  const visitsTotal = db.exec('SELECT COUNT(*) FROM measured_pages')[0]?.values[0][0] || 0
  const uniqueVisitors = db.exec('SELECT COUNT(DISTINCT visitor_id) FROM measurement_sessions')[0]?.values[0][0] || 0

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

router.get('/analytics/recent-visits', async (req, res) => {
  const db = await getDb()
  const limitRaw = Number(req.query.limit)
  const limit = Number.isFinite(limitRaw) ? Math.max(1, Math.min(200, Math.floor(limitRaw))) : 50

  const rows = db.exec(
    `SELECT id, created_at, path, slug, content_type, source, medium, campaign, referrer, session_id
     FROM measured_pages
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
