import fs from 'fs'
import path from 'path'

const root = process.cwd()
const sitemapPath = path.join(root, 'public', 'sitemap.xml')
const SITE_URL = 'https://platinumzenith.com'

const EXPECTED = {
  '/blog': { priority: '0.8', changefreq: 'weekly' },
  '/google-reklame-cena': { priority: '0.9', changefreq: 'monthly' },
  '/instagram-reklame-cena': { priority: '0.9', changefreq: 'monthly' },
  '/izrada-wordpress-sajta-cena': { priority: '0.9', changefreq: 'monthly' },
  '/marketing-agencija-beograd': { priority: '0.9', changefreq: 'monthly' },
  '/marketing-agencija-zrenjanin': { priority: '0.9', changefreq: 'monthly' },
  '/marketing-agencija-novi-sad': { priority: '0.9', changefreq: 'monthly' },
  '/facebook-oglasi-ne-rade': { priority: '0.9', changefreq: 'monthly' },
  '/web-shop-nema-prodaju': { priority: '0.9', changefreq: 'monthly' },
}

if (!fs.existsSync(sitemapPath)) {
  console.error('Missing public/sitemap.xml')
  process.exit(1)
}

const xml = fs.readFileSync(sitemapPath, 'utf8')

const entries = [...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>\s*<changefreq>([^<]+)<\/changefreq>\s*<priority>([^<]+)<\/priority>\s*<\/url>/g)]
  .map((m) => ({
    loc: m[1],
    lastmod: m[2],
    changefreq: m[3],
    priority: m[4],
  }))

const byPath = new Map()
for (const entry of entries) {
  if (!entry.loc.startsWith(SITE_URL)) continue
  const route = entry.loc.replace(SITE_URL, '') || '/'
  byPath.set(route, entry)
}

const issues = []

for (const [route, expected] of Object.entries(EXPECTED)) {
  const found = byPath.get(route)

  if (!found) {
    issues.push(`${route}: missing from sitemap.xml`)
    continue
  }

  if (found.priority !== expected.priority) {
    issues.push(`${route}: expected priority ${expected.priority}, got ${found.priority}`)
  }

  if (found.changefreq !== expected.changefreq) {
    issues.push(`${route}: expected changefreq ${expected.changefreq}, got ${found.changefreq}`)
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(found.lastmod)) {
    issues.push(`${route}: invalid lastmod format (${found.lastmod})`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  expectedRoutes: Object.keys(EXPECTED).length,
  sitemapUrls: entries.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-sitemap-priority-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Sitemap priority audit complete')
console.log(`Expected routes checked: ${report.expectedRoutes}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
