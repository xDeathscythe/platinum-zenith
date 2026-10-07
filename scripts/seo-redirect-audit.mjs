import fs from 'fs'
import http from 'http'
import os from 'os'
import path from 'path'
import { spawn } from 'child_process'

const root = process.cwd()
const serverEntry = path.join(root, 'server', 'index.js')
const PORT = 4311
const auditSocket = process.platform === 'win32'
  ? null
  : path.join(os.tmpdir(), `platinum-zenith-seo-${process.pid}.sock`)
const listenTarget = auditSocket || String(PORT)

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function requestServer(pathname) {
  return new Promise((resolve, reject) => {
    const req = http.request({
      ...(auditSocket ? { socketPath: auditSocket } : { hostname: '127.0.0.1', port: PORT }),
      path: pathname,
      method: 'GET',
    }, (res) => {
      res.resume()
      res.on('end', () => resolve({
        status: res.statusCode || 0,
        location: res.headers.location || '',
      }))
    })

    req.setTimeout(1500, () => req.destroy(new Error('Request timed out')))
    req.on('error', reject)
    req.end()
  })
}

async function waitForServer(proc, timeoutMs = 15000) {
  const start = Date.now()

  while (Date.now() - start < timeoutMs) {
    if (proc.exitCode !== null) throw new Error(`Server exited early with code ${proc.exitCode}`)

    try {
      const res = await requestServer('/')
      if (res.status >= 200 && res.status < 500) return
    } catch {
      // retry
    }

    await sleep(300)
  }

  throw new Error('Timed out waiting for server startup')
}

const checks = [
  { path: '/index.html', status: 301, location: '/' },
  { path: '/paketi', status: 301, location: '/cene-digitalnog-marketinga' },
  { path: '/studije-slucaja', status: 301, location: '/case-studies' },
  { path: '/google-reklame-cena/', status: 301, location: '/google-reklame-cena' },
  { path: '/Google-Reklame-Cena?utm=1', status: 301, location: '/google-reklame-cena?utm=1' },
]

const issues = []
let server

try {
  if (!fs.existsSync(serverEntry)) {
    throw new Error(`Missing server entry: ${serverEntry}`)
  }

  if (auditSocket) fs.rmSync(auditSocket, { force: true })

  server = spawn(process.execPath, [serverEntry], {
    cwd: root,
    env: {
      ...process.env,
      PORT: listenTarget,
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  })

  await waitForServer(server)

  for (const check of checks) {
    const res = await requestServer(check.path)
    const location = res.location

    if (res.status !== check.status) {
      issues.push(`${check.path}: expected status ${check.status}, got ${res.status}`)
      continue
    }

    if (check.location && location !== check.location) {
      issues.push(`${check.path}: expected location "${check.location}", got "${location}"`)
    }
  }

  // API paths must not be redirected by canonical route middleware
  const apiRes = await requestServer('/api/this-route-should-not-redirect')
  if ([301, 302, 307, 308].includes(apiRes.status)) {
    issues.push(`/api/* path should not redirect, got status ${apiRes.status}`)
  }
} catch (err) {
  issues.push(err.message)
} finally {
  if (server && server.exitCode === null) {
    server.kill('SIGTERM')
    await sleep(400)
    if (server.exitCode === null) server.kill('SIGKILL')
  }
  if (auditSocket) fs.rmSync(auditSocket, { force: true })
}

const report = {
  generatedAt: new Date().toISOString(),
  checks: checks.length + 1,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-redirect-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Redirect audit complete')
console.log(`Checks: ${report.checks}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
