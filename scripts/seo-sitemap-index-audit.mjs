import fs from 'fs'
import path from 'path'

const root = process.cwd()
const publicDir = path.join(root, 'public')
const robotsPath = path.join(publicDir, 'robots.txt')
const indexPath = path.join(publicDir, 'sitemap-index.xml')

const REQUIRED_CHILDREN = [
  'https://platinumzenith.com/sitemap.xml',
  'https://platinumzenith.com/sitemap-images.xml',
  'https://platinumzenith.com/sitemap-news.xml',
]

const issues = []

if (!fs.existsSync(indexPath)) {
  issues.push('Missing public/sitemap-index.xml')
} else {
  const xml = fs.readFileSync(indexPath, 'utf8')

  if (!xml.includes('<sitemapindex')) {
    issues.push('sitemap-index.xml missing <sitemapindex> root')
  }

  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())

  if (locs.length === 0) {
    issues.push('sitemap-index.xml has no child <loc> entries')
  }

  const uniqueLocs = new Set(locs)
  if (uniqueLocs.size !== locs.length) {
    issues.push('sitemap-index.xml has duplicate child sitemap URLs')
  }

  for (const required of REQUIRED_CHILDREN) {
    if (!uniqueLocs.has(required)) {
      issues.push(`sitemap-index.xml missing required child sitemap: ${required}`)
    }
  }
}

if (!fs.existsSync(robotsPath)) {
  issues.push('Missing public/robots.txt')
} else {
  const robots = fs.readFileSync(robotsPath, 'utf8')
  if (!robots.includes('Sitemap: https://platinumzenith.com/sitemap-index.xml')) {
    issues.push('robots.txt missing sitemap-index.xml declaration')
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-sitemap-index-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Sitemap index audit complete')
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
