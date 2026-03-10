import fs from 'fs'
import path from 'path'

const root = process.cwd()
const srcDir = path.join(root, 'src')

const GENERIC_ALT_VALUES = new Set([
  'image',
  'slika',
  'photo',
  'picture',
  'img',
  'logo',
])

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(full)
    return full
  })
}

function lineForOffset(text, offset) {
  let line = 1
  for (let i = 0; i < offset; i += 1) {
    if (text[i] === '\n') line += 1
  }
  return line
}

function getAltFromTag(tag) {
  const quoted = tag.match(/\balt\s*=\s*"([^"]*)"/)
  if (quoted) return quoted[1]

  const singleQuoted = tag.match(/\balt\s*=\s*'([^']*)'/)
  if (singleQuoted) return singleQuoted[1]

  return null
}

const files = walk(srcDir).filter((file) => /\.(js|jsx)$/.test(file))
const issues = []
let imagesChecked = 0

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8')
  const tags = [...text.matchAll(/<img\b[\s\S]*?>/g)]

  for (const match of tags) {
    imagesChecked += 1
    const tag = match[0]
    const line = lineForOffset(text, match.index ?? 0)
    const alt = getAltFromTag(tag)

    if (alt === null) continue // handled by existing image-attribute audit

    const normalized = alt.trim().toLowerCase()
    const wordCount = alt.trim().split(/\s+/).filter(Boolean).length

    if (!normalized) {
      issues.push(`${path.relative(root, file)}:${line} empty alt text`)
      continue
    }

    if (GENERIC_ALT_VALUES.has(normalized)) {
      issues.push(`${path.relative(root, file)}:${line} generic alt text ("${alt}")`)
      continue
    }

    if (wordCount < 2 && alt.trim().length < 10) {
      issues.push(`${path.relative(root, file)}:${line} alt text too short ("${alt}")`)
    }
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  filesScanned: files.length,
  imagesChecked,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-alt-quality-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Alt quality audit complete')
console.log(`Files scanned: ${report.filesScanned}`)
console.log(`Images checked: ${report.imagesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
