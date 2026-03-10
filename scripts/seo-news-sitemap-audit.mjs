import fs from 'fs'
import path from 'path'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()
const publicDir = path.join(root, 'public')
const robotsPath = path.join(publicDir, 'robots.txt')
const newsSitemapPath = path.join(publicDir, 'sitemap-news.xml')
const indexPath = path.join(publicDir, 'sitemap-index.xml')

const NOW = new Date()
const NEWS_WINDOW_MS = 2 * 24 * 60 * 60 * 1000

function parsePostDate(dateStr) {
  if (!dateStr) return null
  const d = new Date(`${dateStr}T00:00:00+01:00`)
  if (Number.isNaN(d.getTime())) return null
  return d
}

const issues = []

if (!fs.existsSync(newsSitemapPath)) {
  issues.push('Missing public/sitemap-news.xml')
} else {
  const xml = fs.readFileSync(newsSitemapPath, 'utf8')

  if (!xml.includes('xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"')) {
    issues.push('sitemap-news.xml missing news namespace')
  }

  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
  const titles = [...xml.matchAll(/<news:title>([^<]+)<\/news:title>/g)].map((m) => m[1].trim())
  const dates = [...xml.matchAll(/<news:publication_date>([^<]+)<\/news:publication_date>/g)].map((m) => m[1].trim())

  if (locs.length > 1000) {
    issues.push(`sitemap-news.xml has too many entries (${locs.length} > 1000)`)
  }

  if (!(locs.length === titles.length && titles.length === dates.length)) {
    issues.push('sitemap-news.xml entries mismatch between loc/title/publication_date tags')
  }

  const slugSet = new Set(
    blogPosts
      .filter((p) => p?.slug && !p?.isDraft)
      .map((p) => p.slug),
  )

  for (let i = 0; i < locs.length; i += 1) {
    const loc = locs[i]
    if (!loc.startsWith('https://platinumzenith.com/blog/')) {
      issues.push(`news entry has non-blog URL: ${loc}`)
      continue
    }

    const slug = loc.replace('https://platinumzenith.com/blog/', '')
    if (!slugSet.has(slug)) {
      issues.push(`news entry references unknown slug: ${slug}`)
    }

    const parsedDate = new Date(dates[i] || '')
    if (Number.isNaN(parsedDate.getTime())) {
      issues.push(`news entry has invalid publication_date for ${slug}`)
      continue
    }

    const age = NOW.getTime() - parsedDate.getTime()
    if (age > NEWS_WINDOW_MS) {
      issues.push(`news entry older than 2 days: ${slug}`)
    }
  }
}

if (fs.existsSync(indexPath)) {
  const indexXml = fs.readFileSync(indexPath, 'utf8')
  if (!indexXml.includes('https://platinumzenith.com/sitemap-news.xml')) {
    issues.push('sitemap-index.xml missing sitemap-news.xml child entry')
  }
} else {
  issues.push('Missing public/sitemap-index.xml')
}

if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf8')
  const hasIndex = robots.includes('Sitemap: https://platinumzenith.com/sitemap-index.xml')
  const hasDirectNews = robots.includes('Sitemap: https://platinumzenith.com/sitemap-news.xml')
  if (!hasIndex && !hasDirectNews) {
    issues.push('robots.txt missing sitemap-news.xml declaration (directly or via sitemap-index.xml)')
  }
} else {
  issues.push('Missing public/robots.txt')
}

const report = {
  generatedAt: new Date().toISOString(),
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-news-sitemap-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('News sitemap audit complete')
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
