import fs from 'fs'
import path from 'path'
import { startAuditServer } from './local-audit-server.mjs'

const root = process.cwd()
const sitemapPath = path.join(root, 'public', 'sitemap.xml')
const serverEntry = path.join(root, 'server', 'index.js')
const PORT = 4312

function extractSitemapPaths(xml) {
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
  const paths = []

  for (const url of urls) {
    try {
      const parsed = new URL(url)
      const pathOnly = parsed.pathname + (parsed.search || '')
      paths.push(pathOnly || '/')
    } catch {
      // ignore malformed URL entries; handled as issue later if needed
    }
  }

  return [...new Set(paths)]
}

function extractCanonical(html) {
  const m = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"\s*\/>/i)
  return m ? m[1].trim() : ''
}

const issues = []
let auditServer

try {
  if (!fs.existsSync(sitemapPath)) {
    throw new Error(`Missing sitemap file: ${sitemapPath}`)
  }

  if (!fs.existsSync(serverEntry)) {
    throw new Error(`Missing server entry: ${serverEntry}`)
  }

  const sitemapXml = fs.readFileSync(sitemapPath, 'utf8')
  const sitemapPaths = extractSitemapPaths(sitemapXml)

  if (sitemapPaths.length === 0) {
    throw new Error('No URLs found in sitemap.xml')
  }

  auditServer = await startAuditServer({ root, serverEntry, port: PORT })

  for (const routePath of sitemapPaths) {
    const res = await auditServer.request(routePath)

    if (res.status !== 200) {
      issues.push(`${routePath}: expected 200 (canonical URL in sitemap), got ${res.status}`)
      continue
    }

    const contentType = (res.headers.get('content-type') || '').toLowerCase()
    if (contentType.includes('text/html')) {
      const html = await res.text()
      const canonical = extractCanonical(html)
      const expectedCanonical = `https://platinumzenith.com${routePath}`

      if (!canonical) {
        issues.push(`${routePath}: missing canonical link in HTML response`)
      } else if (canonical !== expectedCanonical) {
        issues.push(`${routePath}: canonical mismatch (expected ${expectedCanonical}, got ${canonical})`)
      }
    }
  }

  const redirectCheck = await auditServer.request('/google-reklame-cena/')
  if (redirectCheck.status !== 301) {
    issues.push('/google-reklame-cena/ should redirect to canonical URL with 301')
  }
} catch (err) {
  issues.push(err.message)
} finally {
  if (auditServer) await auditServer.stop()
}

const report = {
  generatedAt: new Date().toISOString(),
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-sitemap-url-health-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Sitemap URL health audit complete')
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
