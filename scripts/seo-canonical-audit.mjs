import fs from 'fs'
import path from 'path'
import { injectOgMeta } from '../server/ogMeta.js'
import { blogPosts } from '../src/pages/blog/blogData.js'

const SITE_URL = 'https://platinumzenith.com'
const root = process.cwd()

const appPath = path.join(root, 'src', 'App.jsx')
const htmlPath = path.join(root, 'index.html')

function read(file) {
  return fs.readFileSync(file, 'utf8')
}

function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/'
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
}

function extractRoutes(appText) {
  const routes = [...appText.matchAll(/<Route path="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((p) => p.startsWith('/') && !p.includes('*'))

  const staticRoutes = routes.filter((p) => !p.includes(':'))
  const out = new Set(staticRoutes.map(normalizePath))

  const firstBlog = blogPosts.find((p) => p?.slug)
  if (routes.includes('/blog/:slug') && firstBlog?.slug) out.add(`/blog/${firstBlog.slug}`)
  if (routes.includes('/draft/:slug') && firstBlog?.slug) out.add(`/draft/${firstBlog.slug}`)

  return [...out]
}

function extractTagValue(html, regex) {
  const m = html.match(regex)
  return m ? m[1] : null
}

const appText = read(appPath)
const htmlTemplate = read(htmlPath)
const routes = extractRoutes(appText)

const issues = []

function checkRendered(routeLabel, expected, rendered) {
  const canonical = extractTagValue(rendered, /<link\s+rel="canonical"\s+href="([^"]+)"\s*\/>/i)
  const ogUrl = extractTagValue(rendered, /<meta\s+property="og:url"\s+content="([^"]+)"\s*\/>/i)

  if (!canonical) {
    issues.push({ route: routeLabel, type: 'missing-canonical' })
    return
  }

  if (!ogUrl) {
    issues.push({ route: routeLabel, type: 'missing-og-url' })
    return
  }

  if (canonical !== expected) {
    issues.push({ route: routeLabel, type: 'canonical-mismatch', expected, actual: canonical })
  }

  if (ogUrl !== expected) {
    issues.push({ route: routeLabel, type: 'og-url-mismatch', expected, actual: ogUrl })
  }

  if (canonical !== ogUrl) {
    issues.push({ route: routeLabel, type: 'canonical-ogurl-mismatch', canonical, ogUrl })
  }
}

for (const route of routes) {
  const normalized = normalizePath(route)
  const expected = `${SITE_URL}${normalized === '/' ? '/' : normalized}`

  // Canonical check for normalized route
  checkRendered(normalized, expected, injectOgMeta(htmlTemplate, normalized))

  // Canonical normalization check for trailing slash alias (non-root)
  if (normalized !== '/') {
    const slashAlias = `${normalized}/`
    checkRendered(slashAlias, expected, injectOgMeta(htmlTemplate, slashAlias))
  }
}

const aliasChecks = routes.filter((r) => normalizePath(r) !== '/').length
const report = {
  generatedAt: new Date().toISOString(),
  routeCount: routes.length,
  aliasChecks,
  totalChecks: routes.length + aliasChecks,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-canonical-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Canonical audit complete')
console.log(`Routes checked: ${report.routeCount}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  for (const issue of issues) {
    console.log(`- ${issue.route}: ${issue.type}`)
  }
  process.exitCode = 1
}
