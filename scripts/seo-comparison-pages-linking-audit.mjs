import fs from 'fs'
import path from 'path'

const root = process.cwd()

const PAGE_RULES = [
  {
    file: 'src/pages/AgencijaVsFreelancerPage.jsx',
    label: '/agencija-vs-freelancer',
    minLinks: 8,
    required: ['/kontakt', '/consulting', '/cene-izrade-sajta', '/cene-digitalnog-marketinga'],
  },
  {
    file: 'src/pages/InHouseVsAgencijaPage.jsx',
    label: '/in-house-tim-vs-agencija',
    minLinks: 10,
    required: ['/kontakt', '/consulting', '/cene-digitalnog-marketinga', '/google-reklame-cena'],
  },
  {
    file: 'src/pages/FiksnaNaknadaVsRevenueSharePage.jsx',
    label: '/fiksna-naknada-vs-revenue-share',
    minLinks: 10,
    required: ['/kontakt', '/consulting', '/cene-digitalnog-marketinga', '/google-reklame-cena', '/instagram-reklame-cena'],
  },
]

const issues = []
const checks = []

for (const rule of PAGE_RULES) {
  const abs = path.join(root, rule.file)
  const source = fs.readFileSync(abs, 'utf8')
  const links = [...source.matchAll(/\bto="([^"]+)"/g)].map((m) => m[1])

  for (const target of rule.required) {
    if (!links.includes(target)) {
      issues.push(`${rule.label}: missing required comparison-page link to ${target}`)
    }
  }

  if (links.length < rule.minLinks) {
    issues.push(`${rule.label}: expected at least ${rule.minLinks} internal links, found ${links.length}`)
  }

  checks.push({
    label: rule.label,
    file: rule.file,
    totalLinks: links.length,
    requiredLinks: rule.required.length,
  })
}

const report = {
  generatedAt: new Date().toISOString(),
  pagesChecked: PAGE_RULES.length,
  issueCount: issues.length,
  checks,
  issues,
}

const reportPath = path.join(root, 'seo-comparison-pages-linking-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Comparison pages linking audit complete')
console.log(`Pages checked: ${report.pagesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
