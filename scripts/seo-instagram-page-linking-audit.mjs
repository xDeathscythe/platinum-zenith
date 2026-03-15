import fs from 'fs'
import path from 'path'

const root = process.cwd()
const pagePath = path.join(root, 'src', 'pages', 'InstagramReklameCenaPage.jsx')
const source = fs.readFileSync(pagePath, 'utf8')

const REQUIRED_LINKS = [
  '/google-reklame-cena',
  '/izrada-wordpress-sajta-cena',
  '/cene-digitalnog-marketinga',
  '/cro',
  '/consulting',
  '/facebook-oglasi-ne-rade',
  '/kontakt',
]

const issues = []

for (const target of REQUIRED_LINKS) {
  if (!source.includes(`to="${target}"`)) {
    issues.push(`missing required Instagram money-page link to ${target}`)
  }
}

const totalLinks = [...source.matchAll(/\bto="([^"]+)"/g)].length
if (totalLinks < 12) {
  issues.push(`expected at least 12 internal links on InstagramReklameCenaPage, found ${totalLinks}`)
}

const report = {
  generatedAt: new Date().toISOString(),
  requiredLinks: REQUIRED_LINKS.length,
  totalLinks,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-instagram-page-linking-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Instagram money-page linking audit complete')
console.log(`Required links checked: ${report.requiredLinks}`)
console.log(`Total internal links found: ${report.totalLinks}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
