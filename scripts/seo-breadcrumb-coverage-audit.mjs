import fs from 'fs'
import path from 'path'
import { injectOgMeta } from '../server/ogMeta.js'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()
const appPath = path.join(root, 'src', 'App.jsx')
const htmlPath = path.join(root, 'index.html')

const INTERNAL_SKIP = new Set([
  '/log',
  '/dashboard',
  '/prijave',
  '/poruke',
  '/newsletter',
  '/emails',
  '/analytics',
])

function read(file) {
  return fs.readFileSync(file, 'utf8')
}

function parseRoutes(appText) {
  const rawRoutes = [...appText.matchAll(/<Route\s+path="([^"]+)"/g)]
    .map((m) => m[1])
    .map((r) => (r.startsWith('/') ? r : `/${r}`))

  const out = new Set()

  for (const route of rawRoutes) {
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

const appText = read(appPath)
const htmlTemplate = read(htmlPath)
const routes = parseRoutes(appText)

const issues = []
let checked = 0

for (const route of routes) {
  if (route === '/') continue
  if (INTERNAL_SKIP.has(route)) continue

  const out = injectOgMeta(htmlTemplate, route)
  checked += 1

  const hasBreadcrumb = out.includes('id="ld-breadcrumb-server"')
  if (!hasBreadcrumb) {
    issues.push(`${route}: missing ld-breadcrumb-server`) 
    continue
  }

  const matches = out.match(/id="ld-breadcrumb-server"/g) || []
  if (matches.length > 1) {
    issues.push(`${route}: duplicate ld-breadcrumb-server (${matches.length})`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  routesChecked: checked,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-breadcrumb-coverage-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Breadcrumb coverage audit complete')
console.log(`Routes checked: ${report.routesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
