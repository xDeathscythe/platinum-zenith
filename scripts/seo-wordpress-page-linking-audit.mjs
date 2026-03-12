import fs from 'fs'
import path from 'path'

const root = process.cwd()
const pagePath = path.join(root, 'src', 'pages', 'IzradaWordpressSajtaCenaPage.jsx')
const source = fs.readFileSync(pagePath, 'utf8')

const REQUIRED_LINKS = [
  '/google-reklame-cena',
  '/instagram-reklame-cena',
  '/web-design',
  '/cro',
  '/cene-digitalnog-marketinga',
  '/consulting',
  '/kontakt',
]

const issues = []

for (const target of REQUIRED_LINKS) {
  if (!source.includes(`to="${target}"`)) {
    issues.push(`missing required WordPress money-page link to ${target}`)
  }
}

const totalLinks = [...source.matchAll(/\bto="([^"]+)"/g)].length
if (totalLinks < 10) {
  issues.push(`expected at least 10 internal links on IzradaWordpressSajtaCenaPage, found ${totalLinks}`)
}

const report = {
  generatedAt: new Date().toISOString(),
  requiredLinks: REQUIRED_LINKS.length,
  totalLinks,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-wordpress-page-linking-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('WordPress money-page linking audit complete')
console.log(`Required links checked: ${report.requiredLinks}`)
console.log(`Total internal links found: ${report.totalLinks}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
