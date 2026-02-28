import { Router } from 'express'
import nodemailer from 'nodemailer'
import { getDb, save } from '../db.js'

const router = Router()

router.post('/prijava', async (req, res) => {
  const { program, name, phone, email, company } = req.body || {}
  if (!program || !name || !phone || !email || !company) {
    return res.status(400).json({ error: 'Sva polja su obavezna' })
  }

  const db = await getDb()
  db.run('INSERT INTO submissions (type, name, email, phone, company, program) VALUES (?, ?, ?, ?, ?, ?)', ['prijava', name, email, phone, company, program])
  const submissionId = db.exec('SELECT last_insert_rowid()')[0].values[0][0]
  save()

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com', port: 465, secure: true,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  })

  const htmlBody = `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto"><h2 style="color:#111;border-bottom:2px solid #000;padding-bottom:10px">Nova prijava sa sajta</h2><table style="width:100%;border-collapse:collapse;margin-top:16px"><tr style="border-bottom:1px solid #eee"><td style="padding:10px 0;font-weight:bold;color:#555;width:140px">Program:</td><td style="padding:10px 0;color:#111">${program}</td></tr><tr style="border-bottom:1px solid #eee"><td style="padding:10px 0;font-weight:bold;color:#555">Ime:</td><td style="padding:10px 0;color:#111">${name}</td></tr><tr style="border-bottom:1px solid #eee"><td style="padding:10px 0;font-weight:bold;color:#555">Telefon:</td><td style="padding:10px 0;color:#111"><a href="tel:${phone}">${phone}</a></td></tr><tr style="border-bottom:1px solid #eee"><td style="padding:10px 0;font-weight:bold;color:#555">Email:</td><td style="padding:10px 0;color:#111"><a href="mailto:${email}">${email}</a></td></tr><tr><td style="padding:10px 0;font-weight:bold;color:#555">Firma:</td><td style="padding:10px 0;color:#111">${company}</td></tr></table><p style="margin-top:20px;font-size:12px;color:#999">Poslato sa platinumzenith.com</p></div>`

  try {
    await transporter.sendMail({ from: `"Platinum Zenith" <${process.env.SMTP_USER}>`, to: 'alnen96@gmail.com, aleksandar@platinumzenith.com', subject: `Nova prijava: ${program}`, html: htmlBody })
    db.run('INSERT INTO email_log (recipient, subject, type, submission_id) VALUES (?, ?, ?, ?)', ['alnen96@gmail.com', `Nova prijava: ${program}`, 'notification', submissionId])

    await transporter.sendMail({ from: `"Platinum Zenith" <${process.env.SMTP_USER}>`, to: email, subject: 'Primili smo vašu prijavu - Platinum Zenith',
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto"><h2 style="color:#111">Hvala na prijavi, ${name.split(' ')[0]}!</h2><p style="color:#333;line-height:1.6">Primili smo vašu prijavu za: <strong>${program}</strong></p><p style="color:#333;line-height:1.6">Javićemo vam se u roku od 24h.</p><br><p style="color:#555">Platinum Zenith tim</p><p style="color:#999;font-size:12px">+381 66 816 8929 · aleksandar@platinumzenith.com</p></div>` })
    db.run('INSERT INTO email_log (recipient, subject, type, submission_id) VALUES (?, ?, ?, ?)', [email, 'Primili smo vašu prijavu', 'confirmation', submissionId])
    save()

    return res.json({ ok: true, message: 'Prijava uspešno poslata' })
  } catch (err) {
    console.error('SMTP error:', err)
    return res.status(500).json({ error: 'Greška pri slanju.' })
  }
})

export default router
