import fs from 'fs'
import path from 'path'
import { injectOgMeta } from '../server/ogMeta.js'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()
const appPath = path.join(root, 'src', 'App.jsx')
const htmlPath = path.join(root, 'index.html')

const INTERNAL_NOINDEX_PATHS = [
  '/dashboard',
  '/prijave',
  '/poruke',
  '/newsletter',
  '/emails',
  '/analytics',
]
const INTERNAL_NOINDEX_SET = new Set(INTERNAL_NOINDEX_PATHS)

function read(file) {
  return fs.readFileSync(file, 'utf8')
}

function parseStaticRoutes(appText) {
  return [...appText.matchAll(/<Route\s+path="([^"]+)"/g)]
    .map((m) => m[1])
    .map((r) => (r.startsWith('/') ? r : `/${r}`))
    .filter((route) => !route.includes('*') && !route.includes(':'))
    .filter((route) => route !== '/log' && !INTERNAL_NOINDEX_SET.has(route))
}

function extractRobots(html) {
  const m = html.match(/<meta\s+name="robots"\s+content="([^"]+)"\s*\/>/i)
  return (m?.[1] || '').toLowerCase()
}

const appText = read(appPath)
const htmlTemplate = read(htmlPath)

const publicRoutes = parseStaticRoutes(appText)
const samplePublicBlog = blogPosts.find((p) => p?.slug && !p?.isDraft)
const sampleDraftBlog = blogPosts.find((p) => p?.slug && p?.isDraft)

if (samplePublicBlog) publicRoutes.push(`/blog/${samplePublicBlog.slug}`)
if (sampleDraftBlog) publicRoutes.push(`/draft/${sampleDraftBlog.slug}`)

const issues = []

for (const route of publicRoutes) {
  const out = injectOgMeta(htmlTemplate, route)
  const robots = extractRobots(out)

  if (route.startsWith('/draft/')) {
    if (!robots.includes('noindex') || !robots.includes('nofollow')) {
      issues.push(`${route}: expected noindex,nofollow; got "${robots}"`)
    }
    continue
  }

  if (robots.includes('noindex')) {
    issues.push(`${route}: public route should be indexable; got "${robots}"`)
  }
}

for (const route of INTERNAL_NOINDEX_PATHS) {
  const out = injectOgMeta(htmlTemplate, route)
  const robots = extractRobots(out)
  if (!robots.includes('noindex') || !robots.includes('nofollow')) {
    issues.push(`${route}: internal route should be noindex,nofollow; got "${robots}"`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  publicRoutesChecked: publicRoutes.length,
  internalRoutesChecked: INTERNAL_NOINDEX_PATHS.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-robots-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Robots audit complete')
console.log(`Public routes checked: ${report.publicRoutesChecked}`)
console.log(`Internal routes checked: ${report.internalRoutesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
