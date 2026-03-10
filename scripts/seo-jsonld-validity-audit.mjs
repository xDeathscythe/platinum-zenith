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

function extractJsonLdScripts(html) {
  return [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
    .map((m) => m[1].trim())
    .filter(Boolean)
}

function hasContext(payload) {
  if (payload && typeof payload === 'object' && payload['@context']) return true
  return false
}

function hasTypeLike(payload) {
  if (!payload || typeof payload !== 'object') return false
  if (payload['@type']) return true
  if (Array.isArray(payload['@graph']) && payload['@graph'].some((node) => node && typeof node === 'object' && node['@type'])) return true
  return false
}

const appText = read(appPath)
const htmlTemplate = read(htmlPath)
const routes = parseRoutes(appText)

const issues = []
let scriptsChecked = 0

for (const route of routes) {
  const rendered = injectOgMeta(htmlTemplate, route)
  const blocks = extractJsonLdScripts(rendered)

  if (blocks.length === 0) {
    issues.push(`${route}: no application/ld+json blocks found`)
    continue
  }

  for (const [idx, raw] of blocks.entries()) {
    scriptsChecked += 1

    let parsed
    try {
      parsed = JSON.parse(raw)
    } catch (err) {
      issues.push(`${route}: invalid JSON-LD block #${idx + 1} (${err.message})`)
      continue
    }

    if (!hasContext(parsed)) {
      issues.push(`${route}: JSON-LD block #${idx + 1} missing @context`)
    }

    if (!hasTypeLike(parsed)) {
      issues.push(`${route}: JSON-LD block #${idx + 1} missing @type/@graph types`)
    }
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  routesChecked: routes.length,
  scriptsChecked,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-jsonld-validity-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('JSON-LD validity audit complete')
console.log(`Routes checked: ${report.routesChecked}`)
console.log(`Scripts checked: ${report.scriptsChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
