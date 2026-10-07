import fs from 'fs'
import path from 'path'
import { startAuditServer } from './local-audit-server.mjs'

const root = process.cwd()
const serverEntry = path.join(root, 'server', 'index.js')
const PORT = 4314

const checks = [
  { path: '/google-reklame-cena', expected: 'index, follow' },
  { path: '/dashboard', expected: 'noindex, nofollow' },
  { path: '/prijave', expected: 'noindex, nofollow' },
  { path: '/draft/netokracija-cro-case', expected: 'noindex, nofollow' },
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

    if (res.status !== 200) {
      issues.push(`${check.path}: expected 200, got ${res.status}`)
      continue
    }

    const value = (res.headers.get('x-robots-tag') || '').toLowerCase().trim()
    if (value !== check.expected) {
      issues.push(`${check.path}: expected X-Robots-Tag "${check.expected}", got "${value || '(missing)'}"`)
    }
  }
} catch (err) {
  issues.push(err.message)
} finally {
  if (auditServer) await auditServer.stop()
}

const report = {
  generatedAt: new Date().toISOString(),
  checks: checks.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-xrobots-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('X-Robots-Tag audit complete')
console.log(`Checks: ${report.checks}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
