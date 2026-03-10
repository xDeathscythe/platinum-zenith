import fs from 'fs'
import path from 'path'
import { pageMeta } from '../src/hooks/pageMetaData.js'
import { ogMeta, serverRouteSchemas } from '../server/ogMeta.js'

const root = process.cwd()
const appPath = path.join(root, 'src', 'App.jsx')

const INTERNAL_NOINDEX = new Set([
  '/dashboard',
  '/prijave',
  '/poruke',
  '/newsletter',
  '/emails',
  '/analytics',
  '/log',
])

const REQUIRED_SCHEMA_ROUTES = [
  '/digitalni-marketing',
  '/web-design',
  '/consulting',
  '/cro',
  '/drustvene-mreze',
  '/google-reklame-cena',
  '/instagram-reklame-cena',
  '/izrada-wordpress-sajta-cena',
  '/marketing-agencija-beograd',
  '/marketing-agencija-zrenjanin',
  '/marketing-agencija-novi-sad',
  '/marketing-za-advokate',
  '/marketing-za-stomatologe',
  '/marketing-za-restorane',
  '/in-house-tim-vs-agencija',
  '/fiksna-naknada-vs-revenue-share',
  '/seo-optimizacija-cena',
  '/cene-izrade-sajta',
  '/cene-digitalnog-marketinga',
  '/koliko-kosta-facebook-reklama',
  '/facebook-oglasi-ne-rade',
  '/case-studies',
  '/alati/roi-kalkulator',
]

function normalizeRoute(route = '/') {
  if (!route) return '/'
  if (route === '/') return '/'
  return route.endsWith('/') ? route.slice(0, -1) : route
}

function parseStaticRoutes(appText) {
  return new Set(
    [...appText.matchAll(/<Route\s+path="([^"]+)"/g)]
      .map((m) => (m[1].startsWith('/') ? m[1] : `/${m[1]}`))
      .map(normalizeRoute)
      .filter((route) => !route.includes('*') && !route.includes(':')),
  )
}

const appText = fs.readFileSync(appPath, 'utf8')
const staticRoutes = parseStaticRoutes(appText)
const schemaRoutes = Object.keys(serverRouteSchemas).map(normalizeRoute)

const issues = []
const warnings = []

for (const route of schemaRoutes) {
  if (!staticRoutes.has(route)) {
    issues.push(`serverRouteSchemas contains non-existent app route: ${route}`)
  }

  if (INTERNAL_NOINDEX.has(route) || route.startsWith('/draft/')) {
    issues.push(`serverRouteSchemas should not include noindex/internal route: ${route}`)
  }

  if (!pageMeta[route]) {
    issues.push(`serverRouteSchemas route missing pageMeta entry: ${route}`)
  }

  if (!ogMeta[route]) {
    warnings.push(`serverRouteSchemas route missing explicit ogMeta entry: ${route}`)
  }
}

for (const route of REQUIRED_SCHEMA_ROUTES) {
  if (!schemaRoutes.includes(route)) {
    issues.push(`missing required server route schema for: ${route}`)
  }
}

const duplicates = schemaRoutes.filter((route, idx) => schemaRoutes.indexOf(route) !== idx)
if (duplicates.length > 0) {
  for (const route of [...new Set(duplicates)]) {
    issues.push(`duplicate server route schema key: ${route}`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  schemaRoutesChecked: schemaRoutes.length,
  requiredRoutes: REQUIRED_SCHEMA_ROUTES.length,
  issueCount: issues.length,
  warningCount: warnings.length,
  issues,
  warnings,
}

const reportPath = path.join(root, 'seo-route-schema-hygiene-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Route schema hygiene audit complete')
console.log(`Schema routes checked: ${report.schemaRoutesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Warnings: ${report.warningCount}`)
console.log(`Report: ${reportPath}`)

if (warnings.length > 0) {
  console.log('\nWarnings:')
  warnings.forEach((warning) => console.log(`- ${warning}`))
}

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
