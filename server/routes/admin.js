import { Router } from 'express'
import { requireAuth } from '../auth.js'
import { getDb } from '../db.js'

const router = Router()
router.use(requireAuth)

router.get('/stats', async (req, res) => {
  const db = await getDb()
  const prijave = db.exec("SELECT COUNT(*) FROM submissions WHERE type='prijava'")[0]?.values[0][0] || 0
  const kontakt = db.exec("SELECT COUNT(*) FROM submissions WHERE type='kontakt'")[0]?.values[0][0] || 0
  const newsletter = db.exec("SELECT COUNT(*) FROM submissions WHERE type='newsletter'")[0]?.values[0][0] || 0
  const emailsSent = db.exec("SELECT COUNT(*) FROM email_log")[0]?.values[0][0] || 0

  const recentRows = db.exec("SELECT * FROM submissions ORDER BY created_at DESC LIMIT 5")
  const cols = recentRows[0]?.columns || []
  const recent = (recentRows[0]?.values || []).map(row => Object.fromEntries(cols.map((c, i) => [c, row[i]])))

  res.json({ ok: true, stats: { prijave, kontakt, newsletter, emailsSent, total: prijave + kontakt + newsletter }, recent })
})

router.get('/submissions', async (req, res) => {
  const db = await getDb()
  const parse = (type) => {
    const r = db.exec(`SELECT * FROM submissions WHERE type='${type}' ORDER BY created_at DESC`)
    const cols = r[0]?.columns || []
    return (r[0]?.values || []).map(row => Object.fromEntries(cols.map((c, i) => [c, row[i]])))
  }
  res.json({ ok: true, prijave: parse('prijava'), kontakt: parse('kontakt'), newsletter: parse('newsletter') })
})

router.get('/emails', async (req, res) => {
  const db = await getDb()
  const r = db.exec("SELECT * FROM email_log ORDER BY created_at DESC LIMIT 100")
  const cols = r[0]?.columns || []
  const emails = (r[0]?.values || []).map(row => Object.fromEntries(cols.map((c, i) => [c, row[i]])))
  res.json({ ok: true, emails, total: emails.length })
})

export default router
