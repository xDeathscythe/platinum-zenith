import fs from 'fs'
import path from 'path'
import { blogPosts } from '../src/pages/blog/blogData.js'
import { injectOgMeta } from '../server/ogMeta.js'

const root = process.cwd()
const blogPagePath = path.join(root, 'src', 'pages', 'blog', 'BlogPostPage.jsx')
const htmlPath = path.join(root, 'index.html')
const htmlTemplate = fs.readFileSync(htmlPath, 'utf8')
const SITE_URL = 'https://platinumzenith.com'

function isIsoDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value)
}

function hasToken(text, token) {
  return text.includes(token)
}

function extractJsonLdById(html, id) {
  const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const re = new RegExp(`<script\\s+id="${escaped}"[^>]*>([\\s\\S]*?)<\\/script>`, 'i')
  const m = html.match(re)
  if (!m) return null

  try {
    return JSON.parse(m[1])
  } catch {
    return null
  }
}

const posts = blogPosts.filter(Boolean)
const publicPosts = posts.filter((p) => p?.slug && !p?.isDraft)
const draftPosts = posts.filter((p) => p?.slug && p?.isDraft)

const issues = []
const slugSet = new Set()

for (const post of posts) {
  const prefix = `post:${post.slug || 'unknown'}`

  if (!post.slug) issues.push(`${prefix}: missing slug`)
  if (!post.title) issues.push(`${prefix}: missing title`)
  if (!post.excerpt) issues.push(`${prefix}: missing excerpt`)
  if (!post.category) issues.push(`${prefix}: missing category`)
  if (!post.readTime) issues.push(`${prefix}: missing readTime`)
  if (!post.content) issues.push(`${prefix}: missing content`)

  if (post.slug) {
    if (slugSet.has(post.slug)) issues.push(`${prefix}: duplicate slug`)
    slugSet.add(post.slug)
  }

  if (!post.date) {
    issues.push(`${prefix}: missing date`)
  } else if (!isIsoDate(post.date)) {
    issues.push(`${prefix}: invalid date format (${post.date})`)
  }
}

const blogPageText = fs.readFileSync(blogPagePath, 'utf8')
const requiredTokens = [
  "'@type': 'BlogPosting'",
  'datePublished: post.date',
  'dateModified: post.date',
  "'@type': 'Person'",
  "name: 'Aleksandar Nenadović'",
  'url: `https://platinumzenith.com/blog/${post.slug}`',
  'mainEntityOfPage',
  "inLanguage: 'sr-RS'",
]

for (const token of requiredTokens) {
  if (!hasToken(blogPageText, token)) {
    issues.push(`BlogPostPage.jsx: missing token -> ${token}`)
  }
}

for (const post of publicPosts) {
  const route = `/blog/${post.slug}`
  const expectedUrl = `${SITE_URL}${route}`
  const rendered = injectOgMeta(htmlTemplate, route)
  const article = extractJsonLdById(rendered, 'ld-article-server')

  if (!article) {
    issues.push(`${route}: missing/invalid ld-article-server`)
    continue
  }

  if (!['Article', 'BlogPosting'].includes(article['@type'])) {
    issues.push(`${route}: ld-article-server must be Article or BlogPosting (got ${article['@type'] || 'missing'})`)
  }

  if (article.headline !== post.title) {
    issues.push(`${route}: article headline mismatch`)
  }

  if (!article.description || String(article.description).trim().length < 20) {
    issues.push(`${route}: article description is missing/too short`)
  }

  if (article.url !== expectedUrl) {
    issues.push(`${route}: article.url mismatch (expected ${expectedUrl}, got ${article.url || 'missing'})`)
  }

  if (article.mainEntityOfPage?.['@id'] !== expectedUrl) {
    issues.push(`${route}: mainEntityOfPage.@id mismatch (expected ${expectedUrl}, got ${article.mainEntityOfPage?.['@id'] || 'missing'})`)
  }

  if (article.inLanguage !== 'sr-RS') {
    issues.push(`${route}: inLanguage must be sr-RS (got ${article.inLanguage || 'missing'})`)
  }

  if (article.author?.['@type'] !== 'Person') {
    issues.push(`${route}: author.@type must be Person`)
  }

  if (!article.author?.name) {
    issues.push(`${route}: author.name is missing`)
  }

  if (article.publisher?.['@type'] !== 'Organization') {
    issues.push(`${route}: publisher.@type must be Organization`)
  }

  if (!article.publisher?.name) {
    issues.push(`${route}: publisher.name is missing`)
  }

  if (post.date && article.datePublished !== post.date) {
    issues.push(`${route}: datePublished mismatch (expected ${post.date}, got ${article.datePublished || 'missing'})`)
  }

  if (post.date && article.dateModified !== post.date) {
    issues.push(`${route}: dateModified mismatch (expected ${post.date}, got ${article.dateModified || 'missing'})`)
  }

  if (post.category && article.articleSection !== post.category) {
    issues.push(`${route}: articleSection mismatch (expected ${post.category}, got ${article.articleSection || 'missing'})`)
  }

  const image = Array.isArray(article.image) ? article.image[0] : article.image
  if (!image || !String(image).startsWith(`${SITE_URL}/`)) {
    issues.push(`${route}: article image must be an absolute site URL`)
  }
}

for (const post of draftPosts) {
  const route = `/draft/${post.slug}`
  const rendered = injectOgMeta(htmlTemplate, route)
  const article = extractJsonLdById(rendered, 'ld-article-server')

  if (article) {
    issues.push(`${route}: draft route must not include ld-article-server`) 
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  blogPostsChecked: posts.length,
  publicPostsChecked: publicPosts.length,
  draftPostsChecked: draftPosts.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-blog-schema-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Blog schema audit complete')
console.log(`Blog posts checked: ${report.blogPostsChecked}`)
console.log(`Public posts checked: ${report.publicPostsChecked}`)
console.log(`Draft posts checked: ${report.draftPostsChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
