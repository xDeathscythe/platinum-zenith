import fs from 'fs'
import path from 'path'

const root = process.cwd()
const srcDir = path.join(root, 'src')

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(full)
    return full
  })
}

function lineForOffset(text, offset) {
  let line = 1
  for (let i = 0; i < offset; i++) if (text[i] === '\n') line += 1
  return line
}

const files = walk(srcDir).filter((f) => /\.(jsx|js)$/.test(f))
const issues = []
let scannedImages = 0

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8')
  const matches = [...text.matchAll(/<img\b[\s\S]*?>/g)]

  for (const m of matches) {
    scannedImages += 1
    const tag = m[0]
    const line = lineForOffset(text, m.index ?? 0)

    const checks = {
      alt: /\balt=/.test(tag),
      width: /\bwidth=/.test(tag),
      height: /\bheight=/.test(tag),
      loading: /\bloading=/.test(tag),
      decoding: /\bdecoding=/.test(tag),
    }

    const failed = Object.entries(checks)
      .filter(([, ok]) => !ok)
      .map(([name]) => name)

    if (failed.length > 0) {
      issues.push({
        file: path.relative(root, file),
        line,
        missing: failed,
      })
    }
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  filesScanned: files.length,
  imagesScanned: scannedImages,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-image-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Image SEO audit complete')
console.log(`Files scanned: ${report.filesScanned}`)
console.log(`Images scanned: ${report.imagesScanned}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nMissing attributes:')
  for (const issue of issues) {
    console.log(`- ${issue.file}:${issue.line} -> ${issue.missing.join(', ')}`)
  }
  process.exitCode = 1
}
