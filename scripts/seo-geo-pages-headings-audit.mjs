import fs from 'fs'
import path from 'path'

const root = process.cwd()

const PAGE_RULES = [
  {
    file: 'src/pages/MarketingAgencijaBgPage.jsx',
    route: '/marketing-agencija-beograd',
    cityTokens: ['beograd'],
    serviceTokens: ['marketing agencija', 'digitalni marketing'],
    minH2: 2,
  },
  {
    file: 'src/pages/MarketingAgencijaZrenjaninPage.jsx',
    route: '/marketing-agencija-zrenjanin',
    cityTokens: ['zrenjanin', 'zrenjaninu'],
    serviceTokens: ['marketing agencija', 'digitalni marketing'],
    minH2: 2,
  },
  {
    file: 'src/pages/MarketingAgencijaNsPage.jsx',
    route: '/marketing-agencija-novi-sad',
    cityTokens: ['novi sad'],
    serviceTokens: ['marketing agencija', 'digitalni marketing'],
    minH2: 2,
  },
]

function normalize(text = '') {
  return String(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function extractHeadings(source, level) {
  const re = new RegExp(`<h${level}[^>]*>([\\s\\S]*?)<\\/h${level}>`, 'g')
  return [...source.matchAll(re)]
    .map((m) => m[1].replace(/<[^>]+>/g, ' '))
    .map((text) => normalize(text))
    .filter(Boolean)
}

const issues = []
const checks = []

for (const rule of PAGE_RULES) {
  const abs = path.join(root, rule.file)
  const source = fs.readFileSync(abs, 'utf8')

  const h1s = extractHeadings(source, 1)
  const h2s = extractHeadings(source, 2)

  if (h1s.length !== 1) {
    issues.push(`${rule.route}: expected exactly 1 H1, found ${h1s.length}`)
  }

  const h1 = h1s[0] || ''

  if (!rule.cityTokens.some((token) => h1.includes(token))) {
    issues.push(`${rule.route}: H1 missing city token (${rule.cityTokens.join(' / ')})`)
  }

  if (!rule.serviceTokens.some((token) => h1.includes(token))) {
    issues.push(`${rule.route}: H1 missing core service token`)
  }

  if (h2s.length < rule.minH2) {
    issues.push(`${rule.route}: expected at least ${rule.minH2} H2 headings, found ${h2s.length}`)
  }

  const headingCorpus = [h1, ...h2s].join(' ')
  if (!rule.cityTokens.some((token) => headingCorpus.includes(token))) {
    issues.push(`${rule.route}: heading layer missing city signal beyond meta tags`)
  }

  checks.push({
    route: rule.route,
    h1Count: h1s.length,
    h2Count: h2s.length,
    h1,
  })
}

const report = {
  generatedAt: new Date().toISOString(),
  pagesChecked: PAGE_RULES.length,
  issueCount: issues.length,
  checks,
  issues,
}

const reportPath = path.join(root, 'seo-geo-pages-headings-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Geo pages headings audit complete')
console.log(`Pages checked: ${report.pagesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
