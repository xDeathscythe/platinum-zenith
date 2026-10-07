import fs from 'fs'
import path from 'path'
import { startAuditServer } from './local-audit-server.mjs'

const root = process.cwd()
const distAssets = path.join(root, 'dist', 'assets')
const serverEntry = path.join(root, 'server', 'index.js')
const PORT = 4310

function assert(condition, message, issues) {
  if (!condition) issues.push(message)
}

const issues = []
let auditServer

try {
  if (!fs.existsSync(serverEntry)) {
    throw new Error(`Missing server entry: ${serverEntry}`)
  }

  if (!fs.existsSync(distAssets)) {
    throw new Error('dist/assets missing. Run build first.')
  }

  const assetJs = fs.readdirSync(distAssets).find((f) => f.endsWith('.js'))
  if (!assetJs) {
    throw new Error('No JS asset found in dist/assets')
  }

  auditServer = await startAuditServer({ root, serverEntry, port: PORT })

  const checks = [
    { path: '/sitemap.xml', expect: ['max-age=900', 'must-revalidate'] },
    { path: '/rss.xml', expect: ['max-age=900', 'must-revalidate'] },
    { path: '/robots.txt', expect: ['max-age=900', 'must-revalidate'] },
    { path: `/assets/${assetJs}`, expect: ['max-age=31536000', 'immutable'] },
    { path: '/', expect: ['no-cache', 'no-store', 'must-revalidate'] },
  ]

  for (const check of checks) {
    const res = await auditServer.request(check.path)
    const cacheControl = (res.headers.get('cache-control') || '').toLowerCase()

    for (const expected of check.expect) {
      assert(
        cacheControl.includes(expected.toLowerCase()),
        `${check.path}: cache-control missing "${expected}" (got: "${cacheControl}")`,
        issues,
      )
    }
  }
} catch (err) {
  issues.push(err.message)
} finally {
  if (auditServer) await auditServer.stop()
}

const report = {
  generatedAt: new Date().toISOString(),
  port: PORT,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-cache-policy-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Cache policy audit complete')
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
