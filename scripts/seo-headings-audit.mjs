import fs from 'fs'
import path from 'path'

const root = process.cwd()
const appPath = path.join(root, 'src', 'App.jsx')

const INTERNAL_SKIP = new Set(['/log'])

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

  if (sequence.length === 0) {
    return { sequence, issues: [{ type: 'no-headings' }] }
  }

  const issues = []
  const h1Count = sequence.filter((n) => n === 1).length

  if (h1Count === 0) issues.push({ type: 'missing-h1' })
  if (h1Count > 1) issues.push({ type: 'multiple-h1', count: h1Count })

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

  return { sequence, issues }
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
  checked.push({ route: entry.route, component: entry.component, file: path.relative(root, abs), sequence: analysis.sequence })

  if (analysis.error) {
    issues.push({ route: entry.route, component: entry.component, file: path.relative(root, abs), type: analysis.error })
    continue
  }

  if (analysis.issues.length > 0) {
    issues.push({
      route: entry.route,
      component: entry.component,
      file: path.relative(root, abs),
      issues: analysis.issues,
    })
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  routesChecked: checked.length,
  issueCount: issues.length,
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
}
