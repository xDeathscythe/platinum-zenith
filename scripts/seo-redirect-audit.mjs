import fs from 'fs'
import path from 'path'
import { startAuditServer } from './local-audit-server.mjs'

const root = process.cwd()
const serverEntry = path.join(root, 'server', 'index.js')
const PORT = 4311

const checks = [
  { path: '/index.html', status: 301, location: '/' },
  { path: '/paketi', status: 301, location: '/cene-digitalnog-marketinga' },
  { path: '/studije-slucaja', status: 301, location: '/case-studies' },
  { path: '/google-reklame-cena/', status: 301, location: '/google-reklame-cena' },
  { path: '/Google-Reklame-Cena?utm=1', status: 301, location: '/google-reklame-cena?utm=1' },
]

const issues = []
let auditServer

try {
  if (!fs.existsSync(serverEntry)) {
    throw new Error(`Missing server entry: ${serverEntry}`)
  }

  auditServer = await startAuditServer({ root, serverEntry, port: PORT })

  for (const check of checks) {
    const res = await auditServer.request(check.path)
    const location = res.headers.get('location') || ''

    if (res.status !== check.status) {
      issues.push(`${check.path}: expected status ${check.status}, got ${res.status}`)
      continue
    }

    if (check.location && location !== check.location) {
      issues.push(`${check.path}: expected location "${check.location}", got "${location}"`)
    }
  }

  // API paths must not be redirected by canonical route middleware
  const apiRes = await auditServer.request('/api/this-route-should-not-redirect')
  if ([301, 302, 307, 308].includes(apiRes.status)) {
    issues.push(`/api/* path should not redirect, got status ${apiRes.status}`)
  }
} catch (err) {
  issues.push(err.message)
} finally {
  if (auditServer) await auditServer.stop()
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
