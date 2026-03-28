import fs from 'fs'
import path from 'path'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()
const assetsDir = path.join(root, 'dist', 'assets')

function bytesToKb(bytes) {
  return Number((bytes / 1024).toFixed(2))
}

if (!fs.existsSync(assetsDir)) {
  console.error('dist/assets not found. Run build before performance budget audit.')
  process.exit(1)
}

const files = fs.readdirSync(assetsDir)
const jsFiles = files.filter((f) => f.endsWith('.js'))

const stats = jsFiles.map((file) => {
  const abs = path.join(assetsDir, file)
  const size = fs.statSync(abs).size
  return { file, size, sizeKb: bytesToKb(size) }
})

function findChunk(prefixes) {
  const list = Array.isArray(prefixes) ? prefixes : [prefixes]
  return stats.find((s) => list.some((prefix) => s.file.startsWith(prefix)))
}

const publicBlogCount = [...new Map(
  blogPosts
    .filter((post) => post?.slug && !post?.isDraft)
    .map((post) => [post.slug, post]),
).values()].length

// Keep blogData budget proportional to number of public posts
// (historical baseline: ~330KB for ~60 posts).
const blogDataBudgetKb = Math.max(330, Math.round(publicBlogCount * 5.5))

const budgets = [
  { label: 'index chunk', prefix: 'index-', maxKb: 70 },
  { label: 'vendor-react chunk', prefix: 'vendor-react-', maxKb: 210 },
  { label: 'vendor-router chunk', prefix: 'vendor-router-', maxKb: 85 },
  { label: 'vendor-motion chunk', prefix: 'vendor-motion-', maxKb: 140 },
  { label: 'blogData chunk', prefixes: ['blogData-', 'blogDataIndex-', 'blogIndexData-'], maxKb: blogDataBudgetKb },
]

const issues = []
const checks = []

for (const budget of budgets) {
  const chunk = findChunk(budget.prefixes ?? budget.prefix)
  if (!chunk) {
    const expected = Array.isArray(budget.prefixes) ? budget.prefixes.join(' | ') : `${budget.prefix}*.js`
    issues.push(`Missing chunk for ${budget.label} (${expected})`)
    continue
  }

  checks.push({
    label: budget.label,
    file: chunk.file,
    sizeKb: chunk.sizeKb,
    maxKb: budget.maxKb,
  })

  if (chunk.sizeKb > budget.maxKb) {
    issues.push(`${budget.label} exceeded budget: ${chunk.sizeKb}KB > ${budget.maxKb}KB (${chunk.file})`)
  }
}

const criticalPrefixes = ['index-', 'vendor-react-', 'vendor-router-', 'vendor-motion-']
const criticalChunks = stats.filter((s) => criticalPrefixes.some((prefix) => s.file.startsWith(prefix)))
const criticalTotalKb = bytesToKb(criticalChunks.reduce((sum, item) => sum + item.size, 0))
const criticalBudgetKb = 460

if (criticalChunks.length < criticalPrefixes.length) {
  issues.push('Critical chunk set incomplete (index/vendor-react/vendor-router/vendor-motion).')
}

if (criticalTotalKb > criticalBudgetKb) {
  issues.push(`Critical JS total exceeded budget: ${criticalTotalKb}KB > ${criticalBudgetKb}KB`)
}

const report = {
  generatedAt: new Date().toISOString(),
  jsChunkCount: stats.length,
  publicBlogCount,
  blogDataBudgetKb,
  criticalTotalKb,
  criticalBudgetKb,
  checks,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-performance-budget-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Performance budget audit complete')
console.log(`JS chunks: ${report.jsChunkCount}`)
console.log(`Critical total: ${criticalTotalKb}KB / ${criticalBudgetKb}KB`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
