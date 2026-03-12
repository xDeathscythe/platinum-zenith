import fs from 'fs'
import path from 'path'

const root = process.cwd()
const pagePath = path.join(root, 'src', 'pages', 'GoogleReklameCenaPage.jsx')
const source = fs.readFileSync(pagePath, 'utf8')

const REQUIRED_LINKS = [
  '/izrada-wordpress-sajta-cena',
  '/cro',
  '/facebook-oglasi-ne-rade',
  '/consulting',
  '/web-shop-nema-prodaju',
  '/cene-digitalnog-marketinga',
  '/instagram-reklame-cena',
  '/kontakt',
]

const issues = []

for (const target of REQUIRED_LINKS) {
  if (!source.includes(`to="${target}"`)) {
    issues.push(`missing required Google Ads money-page link to ${target}`)
  }
}

const totalLinks = [...source.matchAll(/\bto="([^"]+)"/g)].length
if (totalLinks < 10) {
  issues.push(`expected at least 10 internal links on GoogleReklameCenaPage, found ${totalLinks}`)
}

const report = {
  generatedAt: new Date().toISOString(),
  requiredLinks: REQUIRED_LINKS.length,
  totalLinks,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-google-ads-page-linking-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Google Ads money-page linking audit complete')
console.log(`Required links checked: ${report.requiredLinks}`)
console.log(`Total internal links found: ${report.totalLinks}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
