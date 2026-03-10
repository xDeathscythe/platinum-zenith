import fs from 'fs'
import path from 'path'

const root = process.cwd()
const appPath = path.join(root, 'src', 'App.jsx')
const pageMetaPath = path.join(root, 'src', 'hooks', 'pageMetaData.js')
const ogMetaPath = path.join(root, 'server', 'ogMeta.js')

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

function parseMetaMap(text) {
  const map = new Map()
  const re = /\n\s*'([^']+)'\s*:\s*\{\s*title:\s*'([^']*)',\s*description:\s*'([^']*)'/g
  for (const m of text.matchAll(re)) {
    map.set(m[1], {
      title: m[2],
      description: m[3],
    })
  }
  return map
}

function parseOgMap(text) {
  const map = new Map()
  const re = /\n\s*'([^']+)'\s*:\s*\{[\s\S]*?title:\s*'([^']*)',[\s\S]*?description:\s*'([^']*)'/g
  for (const m of text.matchAll(re)) {
    map.set(m[1], {
      title: m[2],
      description: m[3],
    })
  }
  return map
}

const appText = read(appPath)
const pageMetaText = read(pageMetaPath)
const ogMetaText = read(ogMetaPath)

const routes = getRoutes(appText)
const pageMeta = parseMetaMap(pageMetaText)
const ogMeta = parseOgMap(ogMetaText)

const missingOgRoutes = routes.filter((r) => !INTERNAL_SKIP.has(r) && !ogMeta.has(r))

const metaVsOgDiffs = []
for (const [route, meta] of pageMeta.entries()) {
  if (!ogMeta.has(route)) continue
  const og = ogMeta.get(route)
  if (meta.title !== og.title || meta.description !== og.description) {
    metaVsOgDiffs.push(route)
  }
}

const summary = {
  generatedAt: new Date().toISOString(),
  routeCount: routes.length,
  pageMetaCount: pageMeta.size,
  ogMetaCount: ogMeta.size,
  missingOgRoutes,
  metaVsOgDiffs,
}

const reportPath = path.join(root, 'seo-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(summary, null, 2), 'utf8')

console.log('SEO audit complete')
console.log(`Routes: ${summary.routeCount}`)
console.log(`Missing OG routes: ${summary.missingOgRoutes.length}`)
console.log(`Meta/OG mismatches: ${summary.metaVsOgDiffs.length}`)
console.log(`Report: ${reportPath}`)

if (summary.missingOgRoutes.length > 0) {
  console.log('\nMissing OG routes:')
  summary.missingOgRoutes.forEach((r) => console.log(`- ${r}`))
}
if (summary.metaVsOgDiffs.length > 0) {
  console.log('\nMeta/OG mismatches:')
  summary.metaVsOgDiffs.forEach((r) => console.log(`- ${r}`))
}
