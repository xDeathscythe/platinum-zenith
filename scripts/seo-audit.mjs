import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'
import { pageMeta as pageMetaObject } from '../src/hooks/pageMetaData.js'

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

function escapeSingleQuotes(str) {
  return str.replace(/'/g, "\\'")
}

function replaceMetaInRouteBlock(block, title, description) {
  let out = block
  out = out.replace(/title:\s*'((?:\\'|[^'])*)'/, `title: '${title}'`)
  out = out.replace(/description:\s*'((?:\\'|[^'])*)'/, `description: '${description}'`)
  return out
}

function findRouteObjectEnd(text, objectStart) {
  let depth = 0
  for (let i = objectStart; i < text.length; i += 1) {
    const ch = text[i]
    if (ch === '{') depth += 1
    if (ch === '}') {
      depth -= 1
      if (depth === 0) return i
    }
  }
  return -1
}

function applyFixes(ogMetaText, pageMeta, routesToFix) {
  let out = ogMetaText
  let fixedCount = 0

  for (const route of routesToFix) {
    const meta = pageMeta.get(route)
    if (!meta) continue

    const marker = `'${route}': {`
    const start = out.indexOf(marker)
    if (start === -1) continue

    const objectStart = out.indexOf('{', start)
    if (objectStart === -1) continue

    const objectEnd = findRouteObjectEnd(out, objectStart)
    if (objectEnd === -1) continue

    const title = escapeSingleQuotes(meta.title)
    const description = escapeSingleQuotes(meta.description)

    const originalBlock = out.slice(start, objectEnd + 1)
    const fixedBlock = replaceMetaInRouteBlock(originalBlock, title, description)

    if (originalBlock !== fixedBlock) {
      out = `${out.slice(0, start)}${fixedBlock}${out.slice(objectEnd + 1)}`
      fixedCount += 1
    }
  }

  return { text: out, fixedCount }
}

async function loadOgMetaFromFile() {
  const fileUrl = pathToFileURL(ogMetaPath).href
  const mod = await import(`${fileUrl}?t=${Date.now()}`)
  return mod.ogMeta || {}
}

async function buildSummary() {
  const appText = read(appPath)
  const routes = getRoutes(appText)
  const pageMeta = mapFromObject(pageMetaObject)
  const ogMeta = mapFromObject(await loadOgMetaFromFile())

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
    pageMeta,
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

async function main() {
  let { pageMeta, summary } = await buildSummary()

  if (shouldFix && summary.metaVsOgDiffs.length > 0) {
    const ogMetaText = read(ogMetaPath)
    const fixed = applyFixes(ogMetaText, pageMeta, summary.metaVsOgDiffs)

    if (fixed.text !== ogMetaText) {
      fs.writeFileSync(ogMetaPath, fixed.text, 'utf8')
    }

    const rebuilt = await buildSummary()
    summary = rebuilt.summary
    summary.fixApplied = true
    summary.fixedCount = fixed.fixedCount
  }

  const reportPath = path.join(root, 'seo-audit-report.json')
  fs.writeFileSync(reportPath, JSON.stringify(summary, null, 2), 'utf8')

  console.log('SEO audit complete')
  console.log(`Routes: ${summary.routeCount}`)
  console.log(`Missing OG routes: ${summary.missingOgRoutes.length}`)
  console.log(`Meta/OG mismatches: ${summary.metaVsOgDiffs.length}`)
  if (summary.fixApplied) {
    console.log(`Fix mode: applied (fixed routes: ${summary.fixedCount}, remaining mismatches: ${summary.metaVsOgDiffs.length})`)
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
}

await main()
