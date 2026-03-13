import fs from 'fs'
import path from 'path'

const root = process.cwd()

const PAGE_RULES = [
  {
    file: 'src/pages/MarketingAgencijaBgPage.jsx',
    label: '/marketing-agencija-beograd',
    minLinks: 8,
  },
  {
    file: 'src/pages/MarketingAgencijaZrenjaninPage.jsx',
    label: '/marketing-agencija-zrenjanin',
    minLinks: 8,
  },
  {
    file: 'src/pages/MarketingAgencijaNsPage.jsx',
    label: '/marketing-agencija-novi-sad',
    minLinks: 8,
  },
]

const PRICE_LINKS = new Set([
  '/google-reklame-cena',
  '/instagram-reklame-cena',
  '/seo-optimizacija-cena',
  '/cene-digitalnog-marketinga',
  '/izrada-wordpress-sajta-cena',
])

const issues = []
const checks = []

for (const rule of PAGE_RULES) {
  const abs = path.join(root, rule.file)
  const source = fs.readFileSync(abs, 'utf8')
  const links = [...source.matchAll(/\bto="([^"]+)"/g)].map((m) => m[1])
  const uniqueLinks = [...new Set(links)]
  const priceHits = uniqueLinks.filter((link) => PRICE_LINKS.has(link))
  const hasKontakt = uniqueLinks.includes('/kontakt')

  if (!hasKontakt) {
    issues.push(`${rule.label}: missing /kontakt CTA path`)
  }

  if (!uniqueLinks.includes('/consulting')) {
    issues.push(`${rule.label}: missing /consulting path`)
  }

  if (priceHits.length < 1) {
    issues.push(`${rule.label}: expected at least 1 price/money-page link`)
  }

  if (uniqueLinks.length < rule.minLinks) {
    issues.push(`${rule.label}: expected at least ${rule.minLinks} unique internal links, found ${uniqueLinks.length}`)
  }

  checks.push({
    label: rule.label,
    file: rule.file,
    uniqueLinks: uniqueLinks.length,
    priceHits: priceHits.length,
    hasKontakt,
  })
}

const report = {
  generatedAt: new Date().toISOString(),
  pagesChecked: PAGE_RULES.length,
  issueCount: issues.length,
  checks,
  issues,
}

const reportPath = path.join(root, 'seo-geo-pages-linking-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Geo pages linking audit complete')
console.log(`Pages checked: ${report.pagesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
