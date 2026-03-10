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
      const sampleDraft = blogPosts.find((p) => p?.slug && p?.isDraft)
      if (sampleDraft?.slug) out.add(`/draft/${sampleDraft.slug}`)
      continue
    }

    if (route.includes(':')) continue
    out.add(route)
  }

  return [...out]
}

function extractHref(html, regex) {
  const m = html.match(regex)
  return m ? m[1] : ''
}

const appText = read(appPath)
const htmlTemplate = read(htmlPath)
const routes = parseRoutes(appText)

const issues = []

for (const route of routes) {
  const rendered = injectOgMeta(htmlTemplate, route)
  const canonical = extractHref(rendered, /<link\s+rel="canonical"\s+href="([^"]+)"\s*\/>/i)
  const hreflangSr = extractHref(rendered, /<link\s+rel="alternate"\s+hreflang="sr-RS"\s+href="([^"]+)"\s*\/>/i)
  const hreflangDefault = extractHref(rendered, /<link\s+rel="alternate"\s+hreflang="x-default"\s+href="([^"]+)"\s*\/>/i)

  if (!canonical) issues.push(`${route}: missing canonical link`)
  if (!hreflangSr) issues.push(`${route}: missing hreflang sr-RS`)
  if (!hreflangDefault) issues.push(`${route}: missing hreflang x-default`)

  if (canonical && hreflangSr && canonical !== hreflangSr) {
    issues.push(`${route}: hreflang sr-RS does not match canonical`)
  }

  if (canonical && hreflangDefault && canonical !== hreflangDefault) {
    issues.push(`${route}: hreflang x-default does not match canonical`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  routesChecked: routes.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-hreflang-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Hreflang audit complete')
console.log(`Routes checked: ${report.routesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
