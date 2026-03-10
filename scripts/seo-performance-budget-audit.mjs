import fs from 'fs'
import path from 'path'

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

function findChunk(prefix) {
  return stats.find((s) => s.file.startsWith(prefix))
}

const budgets = [
  { label: 'index chunk', prefix: 'index-', maxKb: 70 },
  { label: 'vendor-react chunk', prefix: 'vendor-react-', maxKb: 260 },
  { label: 'vendor-motion chunk', prefix: 'vendor-motion-', maxKb: 140 },
  { label: 'blogData chunk', prefix: 'blogData-', maxKb: 330 },
]

const issues = []
const checks = []

for (const budget of budgets) {
  const chunk = findChunk(budget.prefix)
  if (!chunk) {
    issues.push(`Missing chunk for ${budget.label} (${budget.prefix}*.js)`)
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

const criticalPrefixes = ['index-', 'vendor-react-', 'vendor-motion-']
const criticalChunks = stats.filter((s) => criticalPrefixes.some((prefix) => s.file.startsWith(prefix)))
const criticalTotalKb = bytesToKb(criticalChunks.reduce((sum, item) => sum + item.size, 0))
const criticalBudgetKb = 460

if (criticalChunks.length < criticalPrefixes.length) {
  issues.push('Critical chunk set incomplete (index/vendor-react/vendor-motion).')
}

if (criticalTotalKb > criticalBudgetKb) {
  issues.push(`Critical JS total exceeded budget: ${criticalTotalKb}KB > ${criticalBudgetKb}KB`)
}

const report = {
  generatedAt: new Date().toISOString(),
  jsChunkCount: stats.length,
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
