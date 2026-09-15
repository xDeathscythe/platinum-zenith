import { attachLead } from '../measurement.js'
import { Router } from 'express'
import nodemailer from 'nodemailer'
import { getDb } from '../db.js'

const router = Router()

const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_MAX_PER_WINDOW = 3
const MIN_SECONDS_BETWEEN_CONTACT_SUBMISSIONS = 20

const submissionRateMap = new Map()

function normalizeText(value) {
  return String(value || '').replace(/\s+/g, ' ').trim()
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function extractClientIp(req) {
  const forwarded = String(req.headers['x-forwarded-for'] || '')
    .split(',')[0]
    .trim()
  return forwarded || req.ip || 'unknown'
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)
}

function markRateAndCheckLimit(key) {
  const now = Date.now()
  const record = submissionRateMap.get(key) || { hits: [], lastAt: 0 }
  record.hits = record.hits.filter((ts) => now - ts <= RATE_WINDOW_MS)

  const tooFrequent = record.lastAt && (now - record.lastAt < MIN_SECONDS_BETWEEN_CONTACT_SUBMISSIONS * 1000)
  record.hits.push(now)
  record.lastAt = now
  submissionRateMap.set(key, record)

  const overWindowLimit = record.hits.length > RATE_MAX_PER_WINDOW
  return tooFrequent || overWindowLimit
}

function storeSubmission(db, type, name, email, company, message) {
  return db.run('INSERT INTO submissions (type, name, email, company, message) VALUES (?, ?, ?, ?, ?)', [
    type,
    name,
    email,
    company || '',
    message,
  ]).lastInsertRowid
}

router.post('/kontakt', async (req, res) => {
  const rawName = req.body?.name
  const rawEmail = req.body?.email
  const rawCompany = req.body?.company
  const rawMessage = req.body?.message
  const rawWebsite = req.body?.website
  const rawFormTs = Number(req.body?.formTs || 0)

  const name = normalizeText(rawName)
  const email = normalizeText(rawEmail).toLowerCase()
  const company = normalizeText(rawCompany)
  const message = String(rawMessage || '').trim()
  const website = normalizeText(rawWebsite)

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Ime, email i poruka su obavezni' })
  }

  const isNewsletter = req.body?.formType === 'newsletter'
  const db = await getDb()

  if (isNewsletter) {
    await storeSubmission(db, 'newsletter', name, email, company, message)
    return res.json({ ok: true })
  }

  const clientIp = extractClientIp(req)
  const clientKey = `${clientIp}|${email}`

  const looksSpam = (
    website.length > 0
    || !isValidEmail(email)
    || name.length < 2
    || name.length > 80
    || message.length < 8
    || message.length > 3000
    || (rawFormTs > 0 && Date.now() - rawFormTs < 2500)
  )

  if (looksSpam) {
    await storeSubmission(db, 'spam', name, email, company, message)
    // Return generic success to avoid bot feedback loops
    return res.json({ ok: true })
  }

  if (markRateAndCheckLimit(clientKey)) {
    await storeSubmission(db, 'spam-rate-limit', name, email, company, message)
    return res.status(429).json({ error: 'Previše zahteva. Pokušajte ponovo za par minuta.' })
  }

  const leadId = storeSubmission(db, 'kontakt', name, email, company, message)
  attachLead(db, leadId, req.body.attribution)

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  })

  try {
    const submissionId = leadId

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeCompany = escapeHtml(company)
    const safeMessage = escapeHtml(message)

    const htmlBody = `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto"><h2 style="color:#111;border-bottom:2px solid #000;padding-bottom:10px">Nova poruka sa sajta</h2><table style="width:100%;border-collapse:collapse;margin-top:16px"><tr style="border-bottom:1px solid #eee"><td style="padding:10px 0;font-weight:bold;color:#555;width:120px">Ime:</td><td style="padding:10px 0;color:#111">${safeName}</td></tr><tr style="border-bottom:1px solid #eee"><td style="padding:10px 0;font-weight:bold;color:#555">Email:</td><td style="padding:10px 0;color:#111"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>${safeCompany ? `<tr style="border-bottom:1px solid #eee"><td style="padding:10px 0;font-weight:bold;color:#555">Firma:</td><td style="padding:10px 0;color:#111">${safeCompany}</td></tr>` : ''}<tr><td style="padding:10px 0;font-weight:bold;color:#555;vertical-align:top">Poruka:</td><td style="padding:10px 0;color:#111;white-space:pre-wrap">${safeMessage}</td></tr></table><p style="margin-top:20px;font-size:12px;color:#999">Poslato sa platinumzenith.com</p></div>`

    await transporter.sendMail({
      from: `"Platinum Zenith" <${process.env.SMTP_USER}>`,
      to: 'alnen96@gmail.com, aleksandar@platinumzenith.com',
      replyTo: email,
      subject: `Nova poruka: ${name}${company ? ` (${company})` : ''}`,
      html: htmlBody,
    })
    db.run('INSERT INTO email_log (recipient, subject, type, submission_id) VALUES (?, ?, ?, ?)', [
      'alnen96@gmail.com',
      `Nova poruka: ${name}`,
      'notification',
      submissionId,
    ])

    await transporter.sendMail({
      from: `"Platinum Zenith" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Primili smo vašu poruku - Platinum Zenith',
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto"><h2 style="color:#111">Hvala na poruci, ${escapeHtml(name.split(' ')[0])}!</h2><p style="color:#333;line-height:1.6">Primili smo vašu poruku i javićemo vam se u roku od 24h.</p><br><p style="color:#555">Platinum Zenith tim</p><p style="color:#999;font-size:12px">+381 66 816 8929 · aleksandar@platinumzenith.com</p></div>`,
    })
    db.run('INSERT INTO email_log (recipient, subject, type, submission_id) VALUES (?, ?, ?, ?)', [
      email,
      'Primili smo vašu poruku',
      'confirmation',
      submissionId,
    ])

    return res.json({ ok: true, leadId })
  } catch (err) {
    console.error('SMTP error:', err)
    return res.json({ ok: true, leadId, notificationSent: false })
  }
})

export default router
