import fs from 'fs'
import path from 'path'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()
const robotsPath = path.join(root, 'public', 'robots.txt')
const sitemapPath = path.join(root, 'public', 'sitemap.xml')
const rssPath = path.join(root, 'public', 'rss.xml')
const indexPath = path.join(root, 'index.html')

const SITE_URL = 'https://platinumzenith.com'

const issues = []

function read(file) {
  return fs.readFileSync(file, 'utf8')
}

const robots = read(robotsPath)
const sitemapXml = read(sitemapPath)
const rssXml = read(rssPath)
const indexHtml = read(indexPath)

if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) {
  issues.push('robots.txt missing sitemap declaration for https://platinumzenith.com/sitemap.xml')
}

if (!indexHtml.includes('href="https://platinumzenith.com/rss.xml"')) {
  issues.push('index.html missing RSS discovery <link rel="alternate">')
}

const sitemapLocs = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
if (sitemapLocs.some((loc) => loc.includes('/draft/'))) {
  issues.push('sitemap.xml contains /draft/ URLs (must be excluded)')
}

if (!sitemapLocs.includes(`${SITE_URL}/blog`)) {
  issues.push('sitemap.xml missing /blog index URL')
}

const publicPosts = [...new Map(
  blogPosts
    .filter((post) => post?.slug && !post?.isDraft)
    .map((post) => [post.slug, post]),
).values()]

for (const post of publicPosts) {
  const url = `${SITE_URL}/blog/${post.slug}`
  if (!sitemapLocs.includes(url)) {
    issues.push(`sitemap.xml missing blog URL: ${url}`)
  }
}

const rssLinks = [...rssXml.matchAll(/<link>([^<]+)<\/link>/g)]
  .map((m) => m[1])
  .filter((url) => url.startsWith(`${SITE_URL}/blog/`))

const uniqueRssLinks = new Set(rssLinks)
if (rssLinks.length !== uniqueRssLinks.size) {
  issues.push('rss.xml contains duplicate blog <link> items')
}

if (rssLinks.length !== publicPosts.length) {
  issues.push(`rss.xml item count mismatch (rss=${rssLinks.length}, publicPosts=${publicPosts.length})`)
}

for (const post of publicPosts) {
  const url = `${SITE_URL}/blog/${post.slug}`
  if (!uniqueRssLinks.has(url)) {
    issues.push(`rss.xml missing blog URL: ${url}`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  publicBlogPosts: publicPosts.length,
  sitemapUrls: sitemapLocs.length,
  rssItems: rssLinks.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-feed-sitemap-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Feed/Sitemap audit complete')
console.log(`Public blog posts: ${report.publicBlogPosts}`)
console.log(`Sitemap URLs: ${report.sitemapUrls}`)
console.log(`RSS items: ${report.rssItems}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
