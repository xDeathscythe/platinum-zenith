import fs from 'fs'
import path from 'path'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()
const rssPath = path.join(root, 'public', 'rss.xml')
const sitemapPath = path.join(root, 'public', 'sitemap.xml')
const SITE_URL = 'https://platinumzenith.com'

const rssXml = fs.readFileSync(rssPath, 'utf8')
const sitemapXml = fs.readFileSync(sitemapPath, 'utf8')

const publicPosts = [...new Map(
  blogPosts
    .filter((post) => post?.slug && !post?.isDraft)
    .map((post) => [post.slug, post]),
).values()]

function toRfc2822(date) {
  const parsed = new Date(`${date}T00:00:00Z`)
  return parsed.toUTCString()
}

function extractRssItems(xml) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((match) => {
    const item = match[1]
    const link = item.match(/<link>([^<]+)<\/link>/)?.[1] || ''
    const pubDate = item.match(/<pubDate>([^<]+)<\/pubDate>/)?.[1] || ''
    return { link, pubDate }
  })
}

function extractSitemapEntries(xml) {
  return [...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map((match) => ({
    loc: match[1],
    lastmod: match[2],
  }))
}

const rssItems = extractRssItems(rssXml)
const sitemapEntries = extractSitemapEntries(sitemapXml)

const rssByUrl = new Map(rssItems.map((item) => [item.link, item]))
const sitemapByUrl = new Map(sitemapEntries.map((item) => [item.loc, item]))

const issues = []

for (const post of publicPosts) {
  const url = `${SITE_URL}/blog/${post.slug}`
  const expectedPubDate = toRfc2822(post.date)
  const expectedLastmod = post.date

  const rssItem = rssByUrl.get(url)
  if (!rssItem) {
    issues.push(`${url}: missing RSS item`)
  } else if (rssItem.pubDate !== expectedPubDate) {
    issues.push(`${url}: RSS pubDate mismatch (expected ${expectedPubDate}, got ${rssItem.pubDate || 'missing'})`)
  }

  const sitemapItem = sitemapByUrl.get(url)
  if (!sitemapItem) {
    issues.push(`${url}: missing sitemap entry`)
  } else if (sitemapItem.lastmod !== expectedLastmod) {
    issues.push(`${url}: sitemap lastmod mismatch (expected ${expectedLastmod}, got ${sitemapItem.lastmod || 'missing'})`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  publicPostsChecked: publicPosts.length,
  rssItemsChecked: rssItems.length,
  sitemapEntriesChecked: sitemapEntries.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-blog-feed-freshness-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Blog feed freshness audit complete')
console.log(`Public posts checked: ${report.publicPostsChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
