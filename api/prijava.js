import nodemailer from 'nodemailer'
import { getRedis } from './admin/_db.js'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { program, name, phone, email, company } = req.body || {}
  if (!program || !name || !phone || !email || !company) {
    return res.status(400).json({ error: 'Sva polja su obavezna' })
  }

  // Save to Redis (optional)
  const redis = getRedis()
  if (redis) {
    try {
      await redis.lpush('submissions:prijave', JSON.stringify({ type: 'prijava', program, name, phone, email, company, date: new Date().toISOString() }))
    } catch (e) { console.error('Redis save error:', e) }
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com', port: 465, secure: true,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  })

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#111;border-bottom:2px solid #000;padding-bottom:10px">Nova prijava sa sajta</h2>
      <table style="width:100%;border-collapse:collapse;margin-top:16px">
        <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0;font-weight:bold;color:#555;width:140px">Program:</td><td style="padding:10px 0;color:#111">${program}</td></tr>
        <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0;font-weight:bold;color:#555">Ime:</td><td style="padding:10px 0;color:#111">${name}</td></tr>
        <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0;font-weight:bold;color:#555">Telefon:</td><td style="padding:10px 0;color:#111"><a href="tel:${phone}">${phone}</a></td></tr>
        <tr style="border-bottom:1px solid #eee"><td style="padding:10px 0;font-weight:bold;color:#555">Email:</td><td style="padding:10px 0;color:#111"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:10px 0;font-weight:bold;color:#555">Firma:</td><td style="padding:10px 0;color:#111">${company}</td></tr>
      </table>
      <p style="margin-top:20px;font-size:12px;color:#999">Poslato sa platinumzenith.com</p>
    </div>`

  try {
    await transporter.sendMail({ from: `"Platinum Zenith" <${process.env.SMTP_USER}>`, to: 'alnen96@gmail.com, aleksandar@platinumzenith.com', subject: `Nova prijava: ${program}`, html: htmlBody })
    await transporter.sendMail({ from: `"Platinum Zenith" <${process.env.SMTP_USER}>`, to: email, subject: 'Primili smo vašu prijavu - Platinum Zenith',
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto"><h2 style="color:#111">Hvala na prijavi, ${name.split(' ')[0]}!</h2><p style="color:#333;line-height:1.6">Primili smo vašu prijavu za: <strong>${program}</strong></p><p style="color:#333;line-height:1.6">Javićemo vam se u roku od 24h sa svim detaljima.</p><br><p style="color:#555">Platinum Zenith tim</p><p style="color:#999;font-size:12px">+381 66 816 8929 · aleksandar@platinumzenith.com</p></div>` })
    if (redis) try { await redis.incr('stats:emails_sent') } catch {}
    return res.status(200).json({ ok: true, message: 'Prijava uspešno poslata' })
  } catch (err) {
    console.error('SMTP error:', err)
    return res.status(500).json({ error: 'Greška pri slanju. Pokušajte ponovo.' })
  }
}
