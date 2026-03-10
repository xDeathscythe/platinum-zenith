import fs from 'fs'
import path from 'path'

const root = process.cwd()
const assetsDir = path.join(root, 'dist', 'assets')

if (!fs.existsSync(assetsDir)) {
  console.error('dist/assets not found. Run build before compression budget audit.')
  process.exit(1)
}

function bytesToKb(bytes) {
  return Number((bytes / 1024).toFixed(2))
}

const files = fs.readdirSync(assetsDir)
const compressed = files.filter((f) => f.endsWith('.br'))

const stats = compressed.map((file) => {
  const abs = path.join(assetsDir, file)
  const size = fs.statSync(abs).size
  return { file, sizeKb: bytesToKb(size) }
})

function findChunk(prefix) {
  return stats.find((s) => s.file.startsWith(prefix))
}

const budgets = [
  { label: 'index JS (brotli)', prefix: 'index-', suffix: '.js.br', maxKb: 15 },
  { label: 'vendor-react JS (brotli)', prefix: 'vendor-react-', suffix: '.js.br', maxKb: 70 },
  { label: 'vendor-motion JS (brotli)', prefix: 'vendor-motion-', suffix: '.js.br', maxKb: 36 },
  { label: 'blogData JS (brotli)', prefix: 'blogData-', suffix: '.js.br', maxKb: 100 },
  { label: 'main CSS (brotli)', prefix: 'index-', suffix: '.css.br', maxKb: 15 },
]

const issues = []
const checks = []

for (const budget of budgets) {
  const chunk = stats.find((s) => s.file.startsWith(budget.prefix) && s.file.endsWith(budget.suffix))
  if (!chunk) {
    issues.push(`Missing compressed chunk for ${budget.label} (${budget.prefix}*${budget.suffix})`)
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

const report = {
  generatedAt: new Date().toISOString(),
  compressedChunkCount: stats.length,
  checks,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-compression-budget-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Compression budget audit complete')
console.log(`Compressed chunks scanned: ${report.compressedChunkCount}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
