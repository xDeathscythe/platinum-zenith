import fs from 'fs'
import path from 'path'
import { startAuditServer } from './local-audit-server.mjs'

const root = process.cwd()
const serverEntry = path.join(root, 'server', 'index.js')
const PORT = 4313
const SEO_FILES = ['/sitemap.xml', '/rss.xml', '/robots.txt']

const issues = []
let auditServer

try {
  if (!fs.existsSync(serverEntry)) {
    throw new Error(`Missing server entry: ${serverEntry}`)
  }

  auditServer = await startAuditServer({ root, serverEntry, port: PORT })

  for (const file of SEO_FILES) {
    const first = await auditServer.request(file)
    if (first.status !== 200) {
      issues.push(`${file}: expected initial 200, got ${first.status}`)
      continue
    }

    const lastModified = first.headers.get('last-modified')
    if (!lastModified) {
      issues.push(`${file}: missing Last-Modified header`)
      continue
    }

    const cacheControl = (first.headers.get('cache-control') || '').toLowerCase()
    if (!cacheControl.includes('must-revalidate')) {
      issues.push(`${file}: cache-control should include must-revalidate (got "${cacheControl}")`)
    }

    const second = await auditServer.request(file, {
      headers: {
        'if-modified-since': lastModified,
      },
    })

    if (second.status !== 304) {
      issues.push(`${file}: expected 304 on If-Modified-Since revalidation, got ${second.status}`)
    }
  }
} catch (err) {
  issues.push(err.message)
} finally {
  if (auditServer) await auditServer.stop()
}

const report = {
  generatedAt: new Date().toISOString(),
  filesChecked: SEO_FILES.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-file-revalidation-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('SEO file revalidation audit complete')
console.log(`Files checked: ${report.filesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
