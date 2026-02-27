import { Router } from 'express'
import nodemailer from 'nodemailer'
import db from '../db.js'

const router = Router()

router.post('/kontakt', async (req, res) => {
  const { name, email, company, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ error: 'Ime, email i poruka su obavezni' })

  const isNewsletter = message === 'Newsletter prijava sa footer-a'
  const type = isNewsletter ? 'newsletter' : 'kontakt'

  // Save to DB
  const stmt = db.prepare('INSERT INTO submissions (type, name, email, company, message) VALUES (?, ?, ?, ?, ?)')
  const result = stmt.run(type, name, email, company || '', message)
  const submissionId = result.lastInsertRowid

  if (isNewsletter) return res.json({ ok: true })

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com', port: 465, secure: true,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  })

  try {
    const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#111;border-bottom:2px solid #000;padding-bottom:10px">Nova poruka sa sajta</h2>
        <table style="width:100%;border-collapse:collapse;margin-top:16px">
          <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0;font-weight:bold;color:#555;width:120px">Ime:</td><td style="padding:10px 0;color:#111">${name}</td></tr>
          <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0;font-weight:bold;color:#555">Email:</td><td style="padding:10px 0;color:#111"><a href="mailto:${email}">${email}</a></td></tr>
          ${company ? `<tr style="border-bottom:1px solid #eee"><td style="padding:10px 0;font-weight:bold;color:#555">Firma:</td><td style="padding:10px 0;color:#111">${company}</td></tr>` : ''}
          <tr><td style="padding:10px 0;font-weight:bold;color:#555;vertical-align:top">Poruka:</td><td style="padding:10px 0;color:#111;white-space:pre-wrap">${message}</td></tr>
        </table>
        <p style="margin-top:20px;font-size:12px;color:#999">Poslato sa platinumzenith.com</p>
      </div>`

    await transporter.sendMail({ from: `"Platinum Zenith" <${process.env.SMTP_USER}>`, to: 'alnen96@gmail.com, aleksandar@platinumzenith.com', replyTo: email, subject: `Nova poruka: ${name}${company ? ` (${company})` : ''}`, html: htmlBody })
    db.prepare('INSERT INTO email_log (recipient, subject, type, submission_id) VALUES (?, ?, ?, ?)').run('alnen96@gmail.com', `Nova poruka: ${name}`, 'notification', submissionId)

    await transporter.sendMail({ from: `"Platinum Zenith" <${process.env.SMTP_USER}>`, to: email, subject: 'Primili smo vašu poruku - Platinum Zenith',
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto"><h2 style="color:#111">Hvala na poruci, ${name.split(' ')[0]}!</h2><p style="color:#333;line-height:1.6">Primili smo vašu poruku i javićemo vam se u roku od 24h.</p><br><p style="color:#555">Platinum Zenith tim</p><p style="color:#999;font-size:12px">+381 66 816 8929 · aleksandar@platinumzenith.com</p></div>` })
    db.prepare('INSERT INTO email_log (recipient, subject, type, submission_id) VALUES (?, ?, ?, ?)').run(email, 'Primili smo vašu poruku', 'confirmation', submissionId)

    return res.json({ ok: true })
  } catch (err) {
    console.error('SMTP error:', err)
    return res.status(500).json({ error: 'Greška pri slanju' })
  }
})

export default router
