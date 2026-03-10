import fs from 'fs'
import path from 'path'
import { injectOgMeta } from '../server/ogMeta.js'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()
const appPath = path.join(root, 'src', 'App.jsx')
const htmlPath = path.join(root, 'index.html')

function read(file) {
  return fs.readFileSync(file, 'utf8')
}

const INTERNAL_SKIP = new Set(['/log', '/dashboard', '/prijave', '/poruke', '/newsletter', '/emails', '/analytics'])

function parseRoutes(appText) {
  const routes = [...appText.matchAll(/<Route\s+path="([^"]+)"/g)]
    .map((m) => m[1])
    .map((r) => (r.startsWith('/') ? r : `/${r}`))

  const out = new Set()

  for (const route of routes) {
    if (route.includes('*')) continue

    if (route === '/blog/:slug') {
      const sample = blogPosts.find((p) => p?.slug && !p?.isDraft)
      if (sample?.slug) out.add(`/blog/${sample.slug}`)
      continue
    }

    if (route === '/draft/:slug') {
      const draft = blogPosts.find((p) => p?.slug && p?.isDraft)
      if (draft?.slug) out.add(`/draft/${draft.slug}`)
      continue
    }

    if (route.includes(':')) continue
    if (INTERNAL_SKIP.has(route)) continue
    out.add(route)
  }

  return [...out]
}

function extractMeta(html, regex) {
  const m = html.match(regex)
  return m ? m[1].trim() : ''
}

const appText = read(appPath)
const htmlTemplate = read(htmlPath)
const routes = parseRoutes(appText)

const issues = []
const warnings = []

for (const route of routes) {
  const out = injectOgMeta(htmlTemplate, route)

  const ogTitle = extractMeta(out, /<meta\s+property="og:title"\s+content="([^"]+)"\s*\/>/i)
  const ogDesc = extractMeta(out, /<meta\s+property="og:description"\s+content="([^"]+)"\s*\/>/i)
  const twTitle = extractMeta(out, /<meta\s+name="twitter:title"\s+content="([^"]+)"\s*\/>/i)
  const twDesc = extractMeta(out, /<meta\s+name="twitter:description"\s+content="([^"]+)"\s*\/>/i)
  const twCard = extractMeta(out, /<meta\s+name="twitter:card"\s+content="([^"]+)"\s*\/>/i)

  if (!ogTitle) issues.push(`${route}: missing og:title`)
  if (!ogDesc) issues.push(`${route}: missing og:description`)
  if (!twTitle) issues.push(`${route}: missing twitter:title`)
  if (!twDesc) issues.push(`${route}: missing twitter:description`)
  if (!twCard) issues.push(`${route}: missing twitter:card`)

  if (ogTitle && twTitle && ogTitle !== twTitle) {
    issues.push(`${route}: twitter:title differs from og:title`)
  }

  if (ogDesc && twDesc && ogDesc !== twDesc) {
    issues.push(`${route}: twitter:description differs from og:description`)
  }

  if (twCard && twCard !== 'summary_large_image') {
    warnings.push(`${route}: twitter:card expected summary_large_image, got ${twCard}`)
  }

  if (ogTitle && (ogTitle.length < 20 || ogTitle.length > 95)) {
    warnings.push(`${route}: og:title length ${ogTitle.length} outside 20-95`) 
  }

  if (ogDesc && (ogDesc.length < 70 || ogDesc.length > 220)) {
    warnings.push(`${route}: og:description length ${ogDesc.length} outside 70-220`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  routesChecked: routes.length,
  issueCount: issues.length,
  warningCount: warnings.length,
  issues,
  warnings,
}

const reportPath = path.join(root, 'seo-social-meta-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Social meta audit complete')
console.log(`Routes checked: ${report.routesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Warnings: ${report.warningCount}`)
console.log(`Report: ${reportPath}`)

if (warnings.length > 0) {
  console.log('\nWarnings:')
  warnings.slice(0, 30).forEach((w) => console.log(`- ${w}`))
  if (warnings.length > 30) console.log(`... +${warnings.length - 30} more`)
}

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
