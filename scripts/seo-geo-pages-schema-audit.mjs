import fs from 'fs'
import path from 'path'
import { injectOgMeta } from '../server/ogMeta.js'

const root = process.cwd()
const htmlPath = path.join(root, 'index.html')
const htmlTemplate = fs.readFileSync(htmlPath, 'utf8')
const SITE_URL = 'https://platinumzenith.com'

const ROUTES = [
  '/marketing-agencija-beograd',
  '/marketing-agencija-zrenjanin',
  '/marketing-agencija-novi-sad',
]

function hasScript(html, id) {
  return new RegExp(`<script\\s+id="${id}"`, 'i').test(html)
}

function extract(html, pattern) {
  return html.match(pattern)?.[1] || ''
}

const issues = []

for (const route of ROUTES) {
  const rendered = injectOgMeta(htmlTemplate, route)
  const expectedUrl = `${SITE_URL}${route}`

  const canonical = extract(rendered, /<link\s+rel="canonical"\s+href="([^"]+)"\s*\/>/i)
  const ogUrl = extract(rendered, /<meta\s+property="og:url"\s+content="([^"]+)"\s*\/>/i)
  const robots = extract(rendered, /<meta\s+name="robots"\s+content="([^"]+)"\s*\/>/i).toLowerCase()

  if (!hasScript(rendered, 'ld-route-schema-server')) {
    issues.push(`${route}: missing ld-route-schema-server`)
  }
  if (!hasScript(rendered, 'ld-faq-server')) {
    issues.push(`${route}: missing ld-faq-server`)
  }
  if (!hasScript(rendered, 'ld-breadcrumb-server')) {
    issues.push(`${route}: missing ld-breadcrumb-server`)
  }

  if (canonical !== expectedUrl) {
    issues.push(`${route}: canonical mismatch (expected ${expectedUrl}, got ${canonical || 'missing'})`)
  }
  if (ogUrl !== expectedUrl) {
    issues.push(`${route}: og:url mismatch (expected ${expectedUrl}, got ${ogUrl || 'missing'})`)
  }
  if (robots.includes('noindex')) {
    issues.push(`${route}: geo landing page should be indexable (robots=${robots})`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  routesChecked: ROUTES.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-geo-pages-schema-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Geo pages schema audit complete')
console.log(`Routes checked: ${report.routesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
