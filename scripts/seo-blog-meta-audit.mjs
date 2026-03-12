import fs from 'fs'
import path from 'path'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()
const strict = process.argv.includes('--strict')

const TITLE_MIN = 35
const TITLE_MAX = 95
const DESC_MIN = 110
const DESC_MAX = 180

const uniquePosts = [...new Map(
  blogPosts
    .filter((post) => post?.slug)
    .map((post) => [post.slug, post]),
).values()]

const issues = []
const warnings = []

const seenTitles = new Map()
const seenDescriptions = new Map()

for (const post of uniquePosts) {
  const route = post.isDraft ? `/draft/${post.slug}` : `/blog/${post.slug}`
  const title = String(post.title || '').trim()
  const description = String(post.excerpt || '').trim()

  if (!title) issues.push(`${route}: missing blog title`)
  if (!description) issues.push(`${route}: missing blog excerpt/description`)

  if (title) {
    if (seenTitles.has(title)) issues.push(`${route}: duplicate blog title (same as ${seenTitles.get(title)})`)
    else seenTitles.set(title, route)

    if (title.length < TITLE_MIN || title.length > TITLE_MAX) {
      warnings.push(`${route}: blog title length ${title.length} (target ${TITLE_MIN}-${TITLE_MAX})`)
    }
  }

  if (description) {
    if (seenDescriptions.has(description)) issues.push(`${route}: duplicate blog excerpt (same as ${seenDescriptions.get(description)})`)
    else seenDescriptions.set(description, route)

    if (description.length < DESC_MIN || description.length > DESC_MAX) {
      warnings.push(`${route}: blog excerpt length ${description.length} (target ${DESC_MIN}-${DESC_MAX})`)
    }

    if (!/[\.!?]$/.test(description)) {
      warnings.push(`${route}: blog excerpt should end with sentence punctuation`)
    }
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  postsChecked: uniquePosts.length,
  publicPostsChecked: uniquePosts.filter((post) => !post.isDraft).length,
  draftPostsChecked: uniquePosts.filter((post) => post.isDraft).length,
  issuesCount: issues.length,
  warningsCount: warnings.length,
  issues,
  warnings,
}

const reportPath = path.join(root, 'seo-blog-meta-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Blog meta audit complete')
console.log(`Posts checked: ${report.postsChecked}`)
console.log(`Issues: ${report.issuesCount}`)
console.log(`Warnings: ${report.warningsCount}`)
console.log(`Report: ${reportPath}`)
if (strict) console.log('Mode: strict (warnings fail the check)')

if (warnings.length > 0) {
  console.log('\nWarnings:')
  warnings.slice(0, 20).forEach((warning) => console.log(`- ${warning}`))
  if (warnings.length > 20) console.log(`... +${warnings.length - 20} more`)
}

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}

if (strict && warnings.length > 0) {
  process.exitCode = 1
}
