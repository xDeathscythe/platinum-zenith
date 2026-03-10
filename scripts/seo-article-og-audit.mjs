import fs from 'fs'
import path from 'path'
import { injectOgMeta } from '../server/ogMeta.js'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()
const htmlPath = path.join(root, 'index.html')
const htmlTemplate = fs.readFileSync(htmlPath, 'utf8')

const sampleBlog = blogPosts.find((p) => p?.slug && !p?.isDraft)
const sampleDraft = blogPosts.find((p) => p?.slug && p?.isDraft)

const checks = [
  { route: '/kontakt', expectArticleMeta: false },
  ...(sampleBlog ? [{ route: `/blog/${sampleBlog.slug}`, expectArticleMeta: true }] : []),
  ...(sampleDraft ? [{ route: `/draft/${sampleDraft.slug}`, expectArticleMeta: false }] : []),
]

function getMeta(html, propertyName) {
  const escaped = propertyName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const re = new RegExp(`<meta\\s+property="${escaped}"\\s+content="([^"]*)"\\s*\\/>`, 'i')
  const m = html.match(re)
  return m ? m[1] : null
}

const issues = []

for (const check of checks) {
  const rendered = injectOgMeta(htmlTemplate, check.route)
  const published = getMeta(rendered, 'article:published_time')
  const modified = getMeta(rendered, 'article:modified_time')
  const section = getMeta(rendered, 'article:section')

  if (published === null || modified === null || section === null) {
    issues.push(`${check.route}: missing one of article Open Graph meta tags`)
    continue
  }

  if (check.expectArticleMeta) {
    if (!published || !modified || !section) {
      issues.push(`${check.route}: expected populated article:* meta fields`)
    }
  } else {
    if (published || modified || section) {
      issues.push(`${check.route}: non-article route should have empty article:* meta fields`)
    }
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  checks: checks.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-article-og-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Article Open Graph audit complete')
console.log(`Checks: ${report.checks}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
