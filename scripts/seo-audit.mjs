import fs from 'fs'
import path from 'path'
import { pageMeta as pageMetaObject } from '../src/hooks/pageMetaData.js'
import { ogMeta as ogMetaObject } from '../server/ogMeta.js'

const root = process.cwd()
const appPath = path.join(root, 'src', 'App.jsx')
const ogMetaPath = path.join(root, 'server', 'ogMeta.js')
const shouldFix = process.argv.includes('--fix')

const INTERNAL_SKIP = new Set([
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

function getRoutes(appText) {
  return [...appText.matchAll(/<Route path="([^"]+)"/g)]
    .map((m) => {
      const raw = m[1]
      return raw.startsWith('/') ? raw : `/${raw}`
    })
    .filter((p) => !p.includes(':') && !p.includes('*') && !p.startsWith('/log'))
}

function mapFromObject(obj) {
  return new Map(Object.entries(obj || {}))
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function escapeSingleQuotes(str) {
  return str.replace(/'/g, "\\'")
}

function applyFixes(ogMetaText, pageMeta, routesToFix) {
  let out = ogMetaText

  for (const route of routesToFix) {
    const meta = pageMeta.get(route)
    if (!meta) continue

    const escapedRoute = escapeRegex(route)
    const title = escapeSingleQuotes(meta.title)
    const description = escapeSingleQuotes(meta.description)

    const titleRe = new RegExp(`('${escapedRoute}'\\s*:\\s*\\{[\\s\\S]*?title:\\s*')([^']*)(')`, 'm')
    const descRe = new RegExp(`('${escapedRoute}'\\s*:\\s*\\{[\\s\\S]*?description:\\s*')([^']*)(')`, 'm')

    out = out.replace(titleRe, `$1${title}$3`)
    out = out.replace(descRe, `$1${description}$3`)
  }

  return out
}

function buildSummary() {
  const appText = read(appPath)

  const routes = getRoutes(appText)
  const pageMeta = mapFromObject(pageMetaObject)
  const ogMeta = mapFromObject(ogMetaObject)

  const missingOgRoutes = routes.filter((r) => !INTERNAL_SKIP.has(r) && !ogMeta.has(r))

  const metaVsOgDiffs = []
  for (const [route, meta] of pageMeta.entries()) {
    if (!ogMeta.has(route)) continue
    const og = ogMeta.get(route)
    if (meta.title !== og.title || meta.description !== og.description) {
      metaVsOgDiffs.push(route)
    }
  }

  return {
    routes,
    pageMeta,
    ogMeta,
    summary: {
      generatedAt: new Date().toISOString(),
      routeCount: routes.length,
      pageMetaCount: pageMeta.size,
      ogMetaCount: ogMeta.size,
      missingOgRoutes,
      metaVsOgDiffs,
      fixApplied: false,
      fixedCount: 0,
    },
  }
}

let { pageMeta, summary } = buildSummary()

if (shouldFix && summary.metaVsOgDiffs.length > 0) {
  const ogMetaText = read(ogMetaPath)
  const fixedText = applyFixes(ogMetaText, pageMeta, summary.metaVsOgDiffs)
  fs.writeFileSync(ogMetaPath, fixedText, 'utf8')

  const rebuilt = buildSummary()
  summary = rebuilt.summary
  summary.fixApplied = true
  summary.fixedCount = summary.metaVsOgDiffs.length
}

const reportPath = path.join(root, 'seo-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(summary, null, 2), 'utf8')

console.log('SEO audit complete')
console.log(`Routes: ${summary.routeCount}`)
console.log(`Missing OG routes: ${summary.missingOgRoutes.length}`)
console.log(`Meta/OG mismatches: ${summary.metaVsOgDiffs.length}`)
if (summary.fixApplied) {
  console.log(`Fix mode: applied (remaining mismatches: ${summary.metaVsOgDiffs.length})`)
}
console.log(`Report: ${reportPath}`)

if (summary.missingOgRoutes.length > 0) {
  console.log('\nMissing OG routes:')
  summary.missingOgRoutes.forEach((r) => console.log(`- ${r}`))
}
if (summary.metaVsOgDiffs.length > 0) {
  console.log('\nMeta/OG mismatches:')
  summary.metaVsOgDiffs.forEach((r) => console.log(`- ${r}`))
}
