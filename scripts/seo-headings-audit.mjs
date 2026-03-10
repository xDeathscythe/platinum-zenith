import fs from 'fs'
import path from 'path'

const root = process.cwd()
const appPath = path.join(root, 'src', 'App.jsx')

const INTERNAL_SKIP = new Set(['/log'])

const KEY_MONEY_ROUTES = new Set([
  '/google-reklame-cena',
  '/instagram-reklame-cena',
  '/izrada-wordpress-sajta-cena',
])

function read(file) {
  return fs.readFileSync(file, 'utf8')
}

function normalizeRoute(route) {
  if (!route.startsWith('/')) return `/${route}`
  return route
}

function parseLazyImports(appText) {
  const map = new Map()
  const re = /const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\('([^']+)'\)\)/g

  for (const m of appText.matchAll(re)) {
    map.set(m[1], m[2])
  }

  return map
}

function parseRouteElements(appText) {
  return [...appText.matchAll(/<Route\s+path="([^"]+)"\s+element=\{<([A-Za-z0-9_]+)\s*\/>\}/g)]
    .map((m) => ({ route: normalizeRoute(m[1]), component: m[2] }))
    .filter((r) => !r.route.includes(':') && !r.route.includes('*') && !INTERNAL_SKIP.has(r.route))
}

function analyzeHeadingsInDefaultComponent(fileText) {
  const start = fileText.indexOf('export default function')
  if (start < 0) {
    return { error: 'default-export-not-found' }
  }

  const body = fileText.slice(start)
  const headingMatches = [...body.matchAll(/<h([1-6])\b/g)]
  const sequence = headingMatches.map((m) => Number(m[1]))

  const counts = {
    h1: sequence.filter((n) => n === 1).length,
    h2: sequence.filter((n) => n === 2).length,
    h3: sequence.filter((n) => n === 3).length,
    total: sequence.length,
  }

  if (sequence.length === 0) {
    return { sequence, counts, issues: [{ type: 'no-headings' }] }
  }

  const issues = []

  if (counts.h1 === 0) issues.push({ type: 'missing-h1' })
  if (counts.h1 > 1) issues.push({ type: 'multiple-h1', count: counts.h1 })

  const firstH1Index = sequence.indexOf(1)
  if (firstH1Index >= 0) {
    const fromH1 = sequence.slice(firstH1Index)
    for (let i = 1; i < fromH1.length; i++) {
      const prev = fromH1[i - 1]
      const curr = fromH1[i]
      if (curr > prev + 1) {
        issues.push({ type: 'heading-jump', from: prev, to: curr, at: i })
        break
      }
    }
  }

  return { sequence, counts, issues }
}

const appText = read(appPath)
const importMap = parseLazyImports(appText)
const routeElements = parseRouteElements(appText)

const checked = []
const issues = []

for (const entry of routeElements) {
  const importPath = importMap.get(entry.component)
  if (!importPath) continue
  if (importPath.includes('/admin/')) continue

  const abs = path.join(root, 'src', importPath.replace(/^\.\/pages\//, 'pages/') + '.jsx')

  if (!fs.existsSync(abs)) {
    issues.push({ route: entry.route, component: entry.component, type: 'file-not-found', file: abs })
    continue
  }

  const analysis = analyzeHeadingsInDefaultComponent(read(abs))
  checked.push({
    route: entry.route,
    component: entry.component,
    file: path.relative(root, abs),
    sequence: analysis.sequence,
    counts: analysis.counts || null,
  })

  if (analysis.error) {
    issues.push({ route: entry.route, component: entry.component, file: path.relative(root, abs), type: analysis.error })
    continue
  }

  const routeIssues = [...analysis.issues]

  if (KEY_MONEY_ROUTES.has(entry.route)) {
    if ((analysis.counts?.h2 || 0) < 2) {
      routeIssues.push({ type: 'insufficient-h2-for-money-page', minimum: 2, found: analysis.counts?.h2 || 0 })
    }
    if ((analysis.counts?.total || 0) < 4) {
      routeIssues.push({ type: 'insufficient-heading-depth-for-money-page', minimum: 4, found: analysis.counts?.total || 0 })
    }
  }

  if (routeIssues.length > 0) {
    issues.push({
      route: entry.route,
      component: entry.component,
      file: path.relative(root, abs),
      issues: routeIssues,
    })
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  routesChecked: checked.length,
  issueCount: issues.length,
  checked,
  issues,
}

const reportPath = path.join(root, 'seo-headings-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Heading hierarchy audit complete')
console.log(`Routes checked: ${report.routesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssue routes:')
  for (const issue of issues) {
    console.log(`- ${issue.route}`)
  }
  process.exitCode = 1
}
