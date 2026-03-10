import fs from 'fs'
import path from 'path'
import { pageMeta, pageSchemas } from '../src/hooks/pageMetaData.js'
import { ogMeta } from '../server/ogMeta.js'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()
const appPath = path.join(root, 'src', 'App.jsx')

const LEGACY_REDIRECTS = new Map([
  ['/paketi', '/cene-digitalnog-marketinga'],
  ['/studije-slucaja', '/case-studies'],
])

function read(file) {
  return fs.readFileSync(file, 'utf8')
}

function normalizeRoute(route) {
  if (!route) return '/'
  const withSlash = route.startsWith('/') ? route : `/${route}`
  const noQuery = withSlash.split('?')[0]
  const noHash = noQuery.split('#')[0]
  if (noHash === '/') return '/'
  return noHash.replace(/\/+$/, '')
}

function parseAppRoutes(appText) {
  const raw = [...appText.matchAll(/<Route\s+path="([^"]+)"/g)]
    .map((m) => normalizeRoute(m[1]))
    .filter(Boolean)

  const staticRoutes = new Set()
  const dynamicPatterns = []

  for (const route of raw) {
    if (route.includes('*')) continue
    if (route.includes(':')) {
      dynamicPatterns.push(route)
      continue
    }
    staticRoutes.add(route)
  }

  // Expand known dynamic routes so audits can validate concrete meta paths
  if (dynamicPatterns.includes('/blog/:slug')) {
    for (const post of blogPosts.filter((p) => p?.slug && !p?.isDraft)) {
      staticRoutes.add(`/blog/${post.slug}`)
    }
  }

  if (dynamicPatterns.includes('/draft/:slug')) {
    for (const post of blogPosts.filter((p) => p?.slug && p?.isDraft)) {
      staticRoutes.add(`/draft/${post.slug}`)
    }
  }

  return { staticRoutes, dynamicPatterns }
}

function dynamicMatch(route, patterns) {
  for (const pattern of patterns) {
    const regex = new RegExp(`^${pattern.replace(/:[^/]+/g, '[^/]+')}$`)
    if (regex.test(route)) return true
  }
  return false
}

const appText = read(appPath)
const { staticRoutes, dynamicPatterns } = parseAppRoutes(appText)

const maps = [
  { name: 'pageMeta', routes: Object.keys(pageMeta).map(normalizeRoute) },
  { name: 'pageSchemas', routes: Object.keys(pageSchemas).map(normalizeRoute) },
  { name: 'ogMeta', routes: Object.keys(ogMeta).map(normalizeRoute) },
]

const issues = []

for (const map of maps) {
  for (const route of map.routes) {
    const isValidStatic = staticRoutes.has(route)
    const isDynamicConcrete = dynamicMatch(route, dynamicPatterns)

    if (!isValidStatic && !isDynamicConcrete) {
      issues.push(`${map.name}: stale route key ${route} (not present in App routes)`)
    }

    if (LEGACY_REDIRECTS.has(route)) {
      issues.push(`${map.name}: route ${route} should not have metadata because it is legacy-redirected`) 
    }
  }
}

for (const [legacySource, target] of LEGACY_REDIRECTS.entries()) {
  if (!staticRoutes.has(target)) {
    issues.push(`legacy redirect target missing in app routes: ${legacySource} -> ${target}`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  staticRouteCount: staticRoutes.size,
  dynamicPatternCount: dynamicPatterns.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-route-hygiene-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Route hygiene audit complete')
console.log(`Static routes: ${report.staticRouteCount}`)
console.log(`Dynamic patterns: ${report.dynamicPatternCount}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
