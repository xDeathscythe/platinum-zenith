import fs from 'fs'
import path from 'path'

const root = process.cwd()

const ROUTE_FILES = {
  '/google-reklame-cena': 'src/pages/GoogleReklameCenaPage.jsx',
  '/instagram-reklame-cena': 'src/pages/InstagramReklameCenaPage.jsx',
  '/izrada-wordpress-sajta-cena': 'src/pages/IzradaWordpressSajtaCenaPage.jsx',
}

const REQUIRED_LINKS = {
  '/google-reklame-cena': ['/instagram-reklame-cena', '/izrada-wordpress-sajta-cena'],
  '/instagram-reklame-cena': ['/google-reklame-cena', '/izrada-wordpress-sajta-cena'],
  '/izrada-wordpress-sajta-cena': ['/google-reklame-cena', '/instagram-reklame-cena'],
}

const issues = []

function extractLinks(source) {
  return new Set([...source.matchAll(/\bto="([^"]+)"/g)].map((m) => m[1]))
}

for (const [route, relPath] of Object.entries(ROUTE_FILES)) {
  const absPath = path.join(root, relPath)
  if (!fs.existsSync(absPath)) {
    issues.push(`${route}: missing file ${relPath}`)
    continue
  }

  const source = fs.readFileSync(absPath, 'utf8')
  const links = extractLinks(source)
  const required = REQUIRED_LINKS[route] || []

  for (const target of required) {
    if (!links.has(target)) {
      issues.push(`${route}: missing required money-cluster link to ${target}`)
    }
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  routesChecked: Object.keys(ROUTE_FILES).length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-money-cluster-linking-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Money page cluster internal-link audit complete')
console.log(`Routes checked: ${report.routesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
