import fs from 'fs'
import path from 'path'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()
const blogPagePath = path.join(root, 'src', 'pages', 'blog', 'BlogPostPage.jsx')

function isIsoDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value)
}

function hasToken(text, token) {
  return text.includes(token)
}

const posts = blogPosts.filter(Boolean)
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

const report = {
  generatedAt: new Date().toISOString(),
  blogPostsChecked: posts.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-blog-schema-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Blog schema audit complete')
console.log(`Blog posts checked: ${report.blogPostsChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
