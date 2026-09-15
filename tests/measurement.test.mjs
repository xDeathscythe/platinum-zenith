import { test, after } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { spawn } from 'node:child_process'
import express from 'express'
import { DatabaseSync } from 'node:sqlite'
import nodemailer from 'nodemailer'

process.env.PZ_DATA_DIR = mkdtempSync(join(tmpdir(), 'pz-measurement-'))
process.env.JWT_SECRET = 'isolated-test-key-never-used-in-production'
// Existing sql.js files are ordinary SQLite files. Preserve existing rows on migration.
const legacy = new DatabaseSync(join(process.env.PZ_DATA_DIR, 'pz.db'))
legacy.exec("CREATE TABLE submissions (id INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT NOT NULL, name TEXT, email TEXT, phone TEXT, company TEXT, program TEXT, message TEXT, created_at TEXT DEFAULT CURRENT_TIMESTAMP); INSERT INTO submissions(type,name) VALUES ('kontakt','Existing lead')")
legacy.close()
nodemailer.createTransport = () => ({ sendMail: async () => { throw new Error('Test mail deliberately unavailable') } })
const { getDb } = await import('../server/db.js')
const { createToken } = await import('../server/auth.js')
const app = express()
app.use(express.json())
app.use('/api', (await import('../server/routes/analytics.js')).default)
app.use('/api', (await import('../server/routes/kontakt.js')).default)
app.use('/api', (await import('../server/routes/prijava.js')).default)
app.use('/api/admin', (await import('../server/routes/growth.js')).default)
const server = app.listen(0, '127.0.0.1')
await new Promise(resolve => server.once('listening', resolve))
after(() => server.close())
const base = `http://127.0.0.1:${server.address().port}/api`
const token = await createToken({ admin: true })
const post = (path, data) => fetch(base + path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
const auth = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
const attribution = { sessionId: crypto.randomUUID(), visitorId: crypto.randomUUID(), arrival: { source: 'chatgpt.com', medium: 'referral', landingPath: '/marketing-za-frizerske-salone' }, firstTouch: { source: 'google.com', medium: 'referral', landingPath: '/seo-agencija' } }

test('migration, deduplication, source attribution and accepted leads survive mail failure', async () => {
  const db = await getDb()
  assert.equal(db.exec('SELECT name FROM submissions WHERE id=1')[0].values[0][0], 'Existing lead')
  const page = { ...attribution, pageId: crypto.randomUUID(), path: '/marketing-za-frizerske-salone?email=private', language: 'ja-JP', viewportW: 390 }
  assert.equal((await post('/analytics/visit', page)).status, 200)
  assert.equal((await post('/analytics/visit', page)).status, 200)
  assert.equal(db.exec('SELECT COUNT(*) FROM measured_pages')[0].values[0][0], 1)
  assert.equal(db.exec('SELECT path FROM measured_pages')[0].values[0][0], '/marketing-za-frizerske-salone')
  assert.equal((await post('/analytics/event', { ...attribution, path: '/kontakt', eventName: 'form_start', meta: { form_id: 'contact', email: 'must-not-be-stored' } })).status, 200)
  assert.ok(!db.exec('SELECT meta_json FROM measured_events')[0].values[0][0].includes('must-not'))
  assert.equal((await post('/analytics/visit', { ...page, pageId: 'invalid' })).status, 400)
  const contact = await (await post('/kontakt', { name: '山田 太郎', email: 'test-contact@example.com', company: '会社', message: 'サービスについて相談したいです。', attribution })).json()
  assert.equal(contact.ok, true)
  assert.equal(contact.notificationSent, false)
  assert.ok(contact.leadId)
  const signup = await (await post('/prijava', { name: 'أحمد حسن', email: 'test-signup@example.com', phone: '+381000000', company: 'شركة', program: 'Consulting', attribution })).json()
  assert.ok(signup.leadId > contact.leadId)
  assert.equal(signup.notificationSent, false)
  assert.equal(db.exec('SELECT session_id FROM submissions WHERE id=?', [contact.leadId])[0].values[0][0], attribution.sessionId)
  assert.equal((await fetch(base + '/admin/growth')).status, 401)
  const patched = await fetch(base + `/admin/leads/${contact.leadId}`, { method: 'PATCH', headers: auth, body: JSON.stringify({ stage: 'won', revenue: 700, currency: 'EUR' }) })
  assert.equal(patched.status, 200)
  const report = await (await fetch(base + '/admin/growth', { headers: auth })).json()
  assert.equal(report.totals.leads, 3)
  assert.equal(report.totals.clients, 1)
  assert.equal(report.sources[0].source, 'chatgpt.com')
  assert.equal(report.sources[0].leads, 2)
  assert.equal(report.revenue[0].value, 700)
  assert.equal(report.totals.unattributed, 1)
})

test('two server workers write without overwriting each other', async () => {
  const code = `import {getDb} from './server/db.js'; const db=await getDb(); for(let i=0;i<30;i++) db.run("INSERT INTO measured_events(session_id,path,event_name) VALUES (?,'/','form_start')",[process.argv[1]]);`
  const worker = id => new Promise((resolve, reject) => {
    const child = spawn(process.execPath, ['--input-type=module', '-e', code, id], { env: process.env, stdio: ['ignore', 'ignore', 'pipe'] })
    let stderr = ''; child.stderr.on('data', value => { stderr += value })
    child.on('error', reject); child.on('exit', code => code === 0 ? resolve() : reject(new Error(stderr)))
  })
  await Promise.all([worker('worker-a'), worker('worker-b')])
  const db = await getDb()
  assert.equal(db.exec("SELECT COUNT(*) FROM measured_events WHERE session_id IN ('worker-a','worker-b')")[0].values[0][0], 60)
})
