import fs from 'fs'
import path from 'path'
import { injectOgMeta } from '../server/ogMeta.js'

const root = process.cwd()
const htmlPath = path.join(root, 'index.html')
const htmlTemplate = fs.readFileSync(htmlPath, 'utf8')

const tests = [
  { route: '/this-route-does-not-exist-12345', shouldNoIndex: true },
  { route: '/google-reklame-cena', shouldNoIndex: false },
]

function extractRobots(html) {
  const m = html.match(/<meta\s+name="robots"\s+content="([^"]+)"\s*\/>/i)
  return (m?.[1] || '').toLowerCase()
}

const issues = []

for (const test of tests) {
  const rendered = injectOgMeta(htmlTemplate, test.route)
  const robots = extractRobots(rendered)

  if (!robots) {
    issues.push(`${test.route}: missing robots meta`)
    continue
  }

  const hasNoIndex = robots.includes('noindex')
  if (test.shouldNoIndex && !hasNoIndex) {
    issues.push(`${test.route}: expected noindex robots for unknown route, got "${robots}"`)
  }

  if (!test.shouldNoIndex && hasNoIndex) {
    issues.push(`${test.route}: expected indexable robots for known route, got "${robots}"`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  checks: tests.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-unknown-route-noindex-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Unknown route noindex audit complete')
console.log(`Checks: ${report.checks}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  for (const issue of issues) console.log(`- ${issue}`)
  process.exitCode = 1
}
