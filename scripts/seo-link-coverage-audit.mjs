import fs from 'fs'
import path from 'path'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()
const srcDir = path.join(root, 'src')
const appPath = path.join(root, 'src', 'App.jsx')

const INTERNAL_SKIP = new Set([
  '/',
  '/log',
  '/dashboard',
  '/prijave',
  '/poruke',
  '/newsletter',
  '/emails',
  '/analytics',
])

const PRIORITY_MIN_INBOUND = new Map([
  ['/google-reklame-cena', 3],
  ['/instagram-reklame-cena', 3],
  ['/izrada-wordpress-sajta-cena', 3],
  ['/kontakt', 5],
  ['/digitalni-marketing', 3],
  ['/web-design', 2],
  ['/consulting', 2],
])

function read(file) {
  return fs.readFileSync(file, 'utf8')
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(full)
    return full
  })
}

function normalizeRoute(route) {
  if (!route) return '/'
  const withSlash = route.startsWith('/') ? route : `/${route}`
  const noHash = withSlash.split('#')[0]
  const noQuery = noHash.split('?')[0]
  if (noQuery === '/') return '/'
  return noQuery.replace(/\/+$/, '')
}

function parseRoutes(appText) {
  const raw = [...appText.matchAll(/<Route\s+path="([^"]+)"/g)]
    .map((m) => normalizeRoute(m[1]))
    .filter((r) => !r.includes('*'))

  const out = new Set()

  for (const route of raw) {
    if (route === '/blog/:slug') {
      for (const post of blogPosts.filter((p) => p?.slug && !p?.isDraft)) {
        out.add(`/blog/${post.slug}`)
      }
      continue
    }

    if (route === '/draft/:slug') {
      for (const post of blogPosts.filter((p) => p?.slug && p?.isDraft)) {
        out.add(`/draft/${post.slug}`)
      }
      continue
    }

    if (route.includes(':')) continue
    out.add(route)
  }

  return out
}

function collectInternalLinks(files) {
  const links = []

  for (const file of files) {
    const text = read(file)

    for (const m of text.matchAll(/<Link\s+to="([^"]+)"/g)) {
      const raw = m[1]
      if (!raw.startsWith('/')) continue
      links.push(normalizeRoute(raw))
    }

    for (const m of text.matchAll(/\[[^\]]+\]\((\/[^)]+)\)/g)) {
      const raw = m[1]
      if (!raw.startsWith('/')) continue
      links.push(normalizeRoute(raw))
    }
  }

  return links
}

const appText = read(appPath)
const validRoutes = parseRoutes(appText)

const files = walk(srcDir).filter((file) => /\.(js|jsx)$/.test(file))
const links = collectInternalLinks(files)

// BlogPage renders internal links to every public blog post via map(),
// which is dynamic JSX and not visible to regex static extraction above.
for (const post of blogPosts.filter((p) => p?.slug && !p?.isDraft)) {
  links.push(`/blog/${post.slug}`)
}

const inboundCounts = new Map()
for (const link of links) {
  if (!validRoutes.has(link)) continue
  inboundCounts.set(link, (inboundCounts.get(link) || 0) + 1)
}

const warnings = []
const issues = []

for (const route of validRoutes) {
  if (INTERNAL_SKIP.has(route)) continue
  if (route.startsWith('/draft/')) continue

  const count = inboundCounts.get(route) || 0

  if (PRIORITY_MIN_INBOUND.has(route)) {
    const min = PRIORITY_MIN_INBOUND.get(route)
    if (count < min) {
      issues.push(`${route}: inbound links ${count}, expected >= ${min}`)
    }
    continue
  }

  if (count === 0) {
    warnings.push(`${route}: no inbound internal links detected`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  routesChecked: [...validRoutes].filter((r) => !INTERNAL_SKIP.has(r) && !r.startsWith('/draft/')).length,
  linksScanned: links.length,
  issueCount: issues.length,
  warningCount: warnings.length,
  issues,
  warnings,
}

const reportPath = path.join(root, 'seo-link-coverage-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Link coverage audit complete')
console.log(`Routes checked: ${report.routesChecked}`)
console.log(`Links scanned: ${report.linksScanned}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Warnings: ${report.warningCount}`)
console.log(`Report: ${reportPath}`)

if (warnings.length > 0) {
  console.log('\nWarnings:')
  warnings.slice(0, 25).forEach((w) => console.log(`- ${w}`))
  if (warnings.length > 25) console.log(`... +${warnings.length - 25} more`)
}

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
