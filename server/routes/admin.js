import { Router } from 'express'
import { requireAuth } from '../auth.js'
import db from '../db.js'

const router = Router()

// All admin routes require auth
router.use(requireAuth)

// Dashboard stats
router.get('/stats', (req, res) => {
  const prijave = db.prepare('SELECT COUNT(*) as count FROM submissions WHERE type = ?').get('prijava').count
  const kontakt = db.prepare('SELECT COUNT(*) as count FROM submissions WHERE type = ?').get('kontakt').count
  const newsletter = db.prepare('SELECT COUNT(*) as count FROM submissions WHERE type = ?').get('newsletter').count
  const emailsSent = db.prepare('SELECT COUNT(*) as count FROM email_log').get().count

  const recent = db.prepare('SELECT * FROM submissions ORDER BY created_at DESC LIMIT 5').all()

  res.json({
    ok: true,
    stats: { prijave, kontakt, newsletter, emailsSent, total: prijave + kontakt + newsletter },
    recent,
  })
})

// All submissions by type
router.get('/submissions', (req, res) => {
  const prijave = db.prepare('SELECT * FROM submissions WHERE type = ? ORDER BY created_at DESC').all('prijava')
  const kontakt = db.prepare('SELECT * FROM submissions WHERE type = ? ORDER BY created_at DESC').all('kontakt')
  const newsletter = db.prepare('SELECT * FROM submissions WHERE type = ? ORDER BY created_at DESC').all('newsletter')

  res.json({ ok: true, prijave, kontakt, newsletter, total: prijave.length + kontakt.length + newsletter.length })
})

// Email log
router.get('/emails', (req, res) => {
  const emails = db.prepare(`
    SELECT e.*, s.name as sender_name, s.email as sender_email
    FROM email_log e
    LEFT JOIN submissions s ON e.submission_id = s.id
    ORDER BY e.created_at DESC
    LIMIT 100
  `).all()

  res.json({ ok: true, emails, total: emails.length })
})

export default router
