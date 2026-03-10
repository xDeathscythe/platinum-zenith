import fs from 'fs'
import path from 'path'
import { injectOgMeta } from '../server/ogMeta.js'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()
const appPath = path.join(root, 'src', 'App.jsx')
const htmlPath = path.join(root, 'index.html')
const SITE_URL = 'https://platinumzenith.com'

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

function extractJsonLdById(html, id) {
  const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const re = new RegExp(`<script\\s+id="${escaped}"[^>]*>([\\s\\S]*?)<\\/script>`, 'i')
  const m = html.match(re)
  if (!m) return null
  try {
    return JSON.parse(m[1])
  } catch {
    return null
  }
}

function extractCanonical(html) {
  const m = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"\s*\/>/i)
  return m ? m[1] : ''
}

function toAbsoluteSiteUrl(value) {
  if (!value || typeof value !== 'string') return ''
  if (value === SITE_URL) return `${SITE_URL}/`
  if (value.startsWith(`${SITE_URL}/`)) return value
  if (value === '/') return `${SITE_URL}/`
  if (value.startsWith('/')) return `${SITE_URL}${value}`
  return ''
}

const appText = read(appPath)
const htmlTemplate = read(htmlPath)
const routes = parseRoutes(appText)

const issues = []
let checked = 0

for (const route of routes) {
  if (route === '/') continue
  if (INTERNAL_SKIP.has(route)) continue

  const rendered = injectOgMeta(htmlTemplate, route)
  const canonical = extractCanonical(rendered)
  const breadcrumb = extractJsonLdById(rendered, 'ld-breadcrumb-server')
  checked += 1

  if (!breadcrumb) {
    issues.push(`${route}: missing or invalid ld-breadcrumb-server JSON`)
    continue
  }

  if (breadcrumb['@type'] !== 'BreadcrumbList') {
    issues.push(`${route}: ld-breadcrumb-server must be BreadcrumbList`)
  }

  const items = Array.isArray(breadcrumb.itemListElement) ? breadcrumb.itemListElement : []
  if (items.length < 2) {
    issues.push(`${route}: breadcrumb must contain at least 2 ListItem entries`)
    continue
  }

  const urls = new Set()

  for (let i = 0; i < items.length; i += 1) {
    const item = items[i] || {}
    const expectedPos = i + 1

    if (item['@type'] !== 'ListItem') {
      issues.push(`${route}: breadcrumb item #${expectedPos} must be ListItem`)
    }

    if (item.position !== expectedPos) {
      issues.push(`${route}: breadcrumb item #${expectedPos} has wrong position (${item.position})`)
    }

    if (!item.name || !String(item.name).trim()) {
      issues.push(`${route}: breadcrumb item #${expectedPos} missing name`)
    }

    const normalizedItemUrl = toAbsoluteSiteUrl(item.item)
    if (!normalizedItemUrl) {
      issues.push(`${route}: breadcrumb item #${expectedPos} must contain site URL (absolute or root-relative)`)
      continue
    }

    if (urls.has(normalizedItemUrl)) {
      issues.push(`${route}: breadcrumb contains duplicate URL ${normalizedItemUrl}`)
    }
    urls.add(normalizedItemUrl)
  }

  const firstUrl = toAbsoluteSiteUrl(items[0]?.item || '')
  const lastUrl = toAbsoluteSiteUrl(items[items.length - 1]?.item || '')
  const canonicalUrl = toAbsoluteSiteUrl(canonical)

  if (firstUrl !== `${SITE_URL}/`) {
    issues.push(`${route}: breadcrumb must start at homepage (${SITE_URL}/)`)
  }

  if (canonicalUrl && lastUrl !== canonicalUrl) {
    issues.push(`${route}: last breadcrumb URL must match canonical (${canonicalUrl}), got ${lastUrl}`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  routesChecked: checked,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-breadcrumb-quality-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Breadcrumb quality audit complete')
console.log(`Routes checked: ${report.routesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
