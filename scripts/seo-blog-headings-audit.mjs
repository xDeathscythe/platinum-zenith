import fs from 'fs'
import path from 'path'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()

const uniquePosts = [...new Map(
  blogPosts
    .filter((post) => post?.slug)
    .map((post) => [post.slug, post]),
).values()]

const issues = []

function extractHeadingLevels(markdown = '') {
  return String(markdown)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => /^(#{2,6})\s+/.test(line))
    .map((line) => ({
      line,
      level: line.match(/^(#{2,6})\s+/)?.[1]?.length ?? 0,
    }))
}

for (const post of uniquePosts) {
  const route = post.isDraft ? `/draft/${post.slug}` : `/blog/${post.slug}`
  const headings = extractHeadingLevels(post.content || '')

  if (headings.length === 0) {
    issues.push(`${route}: no markdown headings found in blog content`)
    continue
  }

  const h2Count = headings.filter((heading) => heading.level === 2).length
  if (h2Count === 0) {
    issues.push(`${route}: missing H2 headings in blog content`)
  }

  for (let i = 1; i < headings.length; i += 1) {
    const prev = headings[i - 1]
    const curr = headings[i]

    if (curr.level > prev.level + 1) {
      issues.push(`${route}: heading jump from H${prev.level} to H${curr.level} near "${curr.line}"`)
      break
    }
  }

  const firstHeading = headings[0]
  if (firstHeading.level !== 2) {
    issues.push(`${route}: first content heading should start at H2, got H${firstHeading.level}`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  postsChecked: uniquePosts.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-blog-headings-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Blog headings audit complete')
console.log(`Posts checked: ${report.postsChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
