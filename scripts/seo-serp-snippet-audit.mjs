import fs from 'fs'
import path from 'path'
import { pageMeta } from '../src/hooks/pageMetaData.js'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()
const strict = process.argv.includes('--strict')

// Approximate pixel widths for Google desktop snippets
const TITLE_WARN_PX = 580
const TITLE_FAIL_PX = 680
const DESC_WARN_PX = 920
const DESC_FAIL_PX = 1150

function estimatePx(text = '') {
  let px = 0
  for (const ch of text) {
    if (/[ilI1'`.,:;|!]/.test(ch)) px += 3
    else if (/[fjt\[\](){}]/.test(ch)) px += 4
    else if (/[A-Z0-9]/.test(ch)) px += 8
    else if (/[mwMW@#%&]/.test(ch)) px += 10
    else if (/\s/.test(ch)) px += 3
    else px += 7
  }
  return px
}

const issues = []
const warnings = []

for (const [route, meta] of Object.entries(pageMeta)) {
  const title = (meta?.title || '').trim()
  const description = (meta?.description || '').trim()

  if (!title) {
    issues.push(`${route}: missing title`)
    continue
  }
  if (!description) {
    issues.push(`${route}: missing description`)
    continue
  }

  const titlePx = estimatePx(title)
  const descPx = estimatePx(description)

  if (titlePx > TITLE_FAIL_PX) {
    issues.push(`${route}: title too wide (${titlePx}px > ${TITLE_FAIL_PX}px)`)
  } else if (titlePx > TITLE_WARN_PX) {
    warnings.push(`${route}: title may truncate (${titlePx}px)`)
  }

  if (descPx > DESC_FAIL_PX) {
    issues.push(`${route}: description too wide (${descPx}px > ${DESC_FAIL_PX}px)`)
  } else if (descPx > DESC_WARN_PX) {
    warnings.push(`${route}: description may truncate (${descPx}px)`)
  }
}

for (const post of blogPosts.filter(Boolean)) {
  const title = (post?.title || '').trim()
  const excerpt = (post?.excerpt || '').trim()
  const slug = post?.slug || 'unknown'

  if (!title) {
    issues.push(`/blog/${slug}: missing post title`)
    continue
  }

  const titlePx = estimatePx(title)
  if (titlePx > TITLE_FAIL_PX) {
    issues.push(`/blog/${slug}: post title too wide (${titlePx}px > ${TITLE_FAIL_PX}px)`)
  } else if (titlePx > TITLE_WARN_PX) {
    warnings.push(`/blog/${slug}: post title may truncate (${titlePx}px)`)
  }

  if (excerpt) {
    const excerptPx = estimatePx(excerpt)
    if (excerptPx > DESC_FAIL_PX) {
      warnings.push(`/blog/${slug}: excerpt very wide (${excerptPx}px)`)
    }
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  pagesChecked: Object.keys(pageMeta).length,
  blogPostsChecked: blogPosts.filter(Boolean).length,
  issueCount: issues.length,
  warningCount: warnings.length,
  issues,
  warnings,
}

const reportPath = path.join(root, 'seo-serp-snippet-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('SERP snippet audit complete')
console.log(`Pages checked: ${report.pagesChecked}`)
console.log(`Blog posts checked: ${report.blogPostsChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Warnings: ${report.warningCount}`)
console.log(`Report: ${reportPath}`)
if (strict) console.log('Mode: strict (warnings fail the check)')

if (warnings.length > 0) {
  console.log('\nWarnings:')
  warnings.slice(0, 25).forEach((w) => console.log(`- ${w}`))
  if (warnings.length > 25) console.log(`... +${warnings.length - 25} more`)
}

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}

if (strict && warnings.length > 0) {
  process.exitCode = 1
}
