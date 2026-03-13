import fs from 'fs'
import path from 'path'
import { pageMeta } from '../src/hooks/pageMetaData.js'
import { ogMeta, injectOgMeta } from '../server/ogMeta.js'

const root = process.cwd()
const htmlPath = path.join(root, 'index.html')
const htmlTemplate = fs.readFileSync(htmlPath, 'utf8')

const ROUTE_RULES = {
  '/marketing-agencija-beograd': {
    city: 'beograd',
    channelHints: ['seo', 'google ads', 'meta', 'digitalni marketing'],
  },
  '/marketing-agencija-zrenjanin': {
    city: 'zrenjanin',
    channelHints: ['seo', 'google ads', 'drustvene', 'digitalni marketing'],
  },
  '/marketing-agencija-novi-sad': {
    city: 'novi sad',
    channelHints: ['seo', 'google ads', 'meta', 'digitalni marketing'],
  },
}

function normalize(text = '') {
  return String(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function extract(html, pattern) {
  return html.match(pattern)?.[1] || ''
}

const issues = []

for (const [route, rule] of Object.entries(ROUTE_RULES)) {
  const meta = pageMeta[route]
  const og = ogMeta[route]
  const rendered = injectOgMeta(htmlTemplate, route)

  if (!meta) {
    issues.push(`${route}: missing pageMeta entry`)
    continue
  }
  if (!og) {
    issues.push(`${route}: missing ogMeta entry`)
    continue
  }

  const title = normalize(meta.title)
  const description = normalize(meta.description)
  const ogTitle = normalize(og.title)
  const ogDescription = normalize(og.description)
  const renderedOgTitle = normalize(extract(rendered, /<meta\s+property="og:title"\s+content="([^"]+)"\s*\/>/i))
  const renderedOgDescription = normalize(extract(rendered, /<meta\s+property="og:description"\s+content="([^"]+)"\s*\/>/i))
  const renderedDescription = normalize(extract(rendered, /<meta\s+name="description"\s+content="([^"]+)"\s*\/>/i))

  const candidates = [
    [`pageMeta.title`, title],
    [`pageMeta.description`, description],
    [`ogMeta.title`, ogTitle],
    [`ogMeta.description`, ogDescription],
    [`rendered og:title`, renderedOgTitle],
    [`rendered og:description`, renderedOgDescription],
    [`rendered meta description`, renderedDescription],
  ]

  for (const [label, value] of candidates) {
    if (!value.includes(rule.city)) {
      issues.push(`${route}: ${label} missing city token "${rule.city}"`)
    }

    if (!rule.channelHints.some((hint) => value.includes(normalize(hint)))) {
      issues.push(`${route}: ${label} missing core service/channel intent`)
    }
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  routesChecked: Object.keys(ROUTE_RULES).length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-geo-intent-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Geo intent audit complete')
console.log(`Routes checked: ${report.routesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
