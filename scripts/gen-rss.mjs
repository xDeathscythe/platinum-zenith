import fs from 'fs'
import path from 'path'
import { blogIndexPosts } from '../src/pages/blog/blogIndexData.js'

const SITE_URL = 'https://platinumzenith.com'

function escapeXml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function toRfc2822(dateValue) {
  const date = new Date(dateValue)
  if (Number.isNaN(date.getTime())) return new Date().toUTCString()
  return date.toUTCString()
}

const publicPosts = [...new Map(
  blogIndexPosts
    .filter((post) => post?.slug && !post?.isDraft)
    .map((post) => [post.slug, post]),
).values()]

const sortedPosts = publicPosts
  .sort((a, b) => new Date(b.date) - new Date(a.date))

const latestDate = sortedPosts[0]?.date ? toRfc2822(sortedPosts[0].date) : new Date().toUTCString()

const itemsXml = sortedPosts
  .map((post) => {
    const url = `${SITE_URL}/blog/${post.slug}`
    const title = escapeXml(post.title || 'Platinum Zenith Blog')
    const description = escapeXml(post.excerpt || '')
    const category = escapeXml(post.category || 'Marketing')
    const pubDate = toRfc2822(post.date)

    return [
      '    <item>',
      `      <title>${title}</title>`,
      `      <link>${url}</link>`,
      `      <guid isPermaLink="true">${url}</guid>`,
      `      <pubDate>${pubDate}</pubDate>`,
      `      <category>${category}</category>`,
      `      <description>${description}</description>`,
      '    </item>',
    ].join('\n')
  })
  .join('\n')

const rssXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
  '  <channel>',
  '    <title>Platinum Zenith Blog</title>',
  '    <link>https://platinumzenith.com/blog</link>',
  '    <description>Praktični saveti o marketingu, prodaji i rastu biznisa.</description>',
  '    <language>sr-rs</language>',
  `    <lastBuildDate>${latestDate}</lastBuildDate>`,
  '    <atom:link href="https://platinumzenith.com/rss.xml" rel="self" type="application/rss+xml" />',
  itemsXml,
  '  </channel>',
  '</rss>',
  '',
].join('\n')

const outPath = path.join(process.cwd(), 'public', 'rss.xml')
fs.writeFileSync(outPath, rssXml, 'utf8')

console.log(`Generated RSS feed: ${outPath}`)
console.log(`Items: ${sortedPosts.length}`)
