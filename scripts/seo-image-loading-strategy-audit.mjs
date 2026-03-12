import fs from 'fs'
import path from 'path'

const root = process.cwd()
const srcDir = path.join(root, 'src')

const EAGER_ALLOWLIST = new Map([
  ['src/components/Navbar.jsx', { maxEager: 1, allowHighPriority: true }],
  ['src/components/ui/animated-characters-login-page.jsx', { maxEager: 2, allowHighPriority: false }],
])

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(full)
    return full
  })
}

function getLiteralAttr(tag, attr) {
  const doubleQuoted = tag.match(new RegExp(`\\b${attr}\\s*=\\s*"([^"]*)"`))
  if (doubleQuoted) return doubleQuoted[1]

  const singleQuoted = tag.match(new RegExp(`\\b${attr}\\s*=\\s*'([^']*)'`))
  if (singleQuoted) return singleQuoted[1]

  return null
}

const files = walk(srcDir).filter((file) => /\.(js|jsx)$/.test(file))
const issues = []
const checks = []

for (const file of files) {
  const rel = path.relative(root, file).replace(/\\/g, '/')
  const text = fs.readFileSync(file, 'utf8')
  const tags = [...text.matchAll(/<img\b[\s\S]*?>/g)]

  let eagerCount = 0
  let highCount = 0

  for (const match of tags) {
    const tag = match[0]
    const loading = getLiteralAttr(tag, 'loading')
    const decoding = getLiteralAttr(tag, 'decoding')
    const fetchPriority = getLiteralAttr(tag, 'fetchPriority')

    if (loading === 'eager') eagerCount += 1
    if (fetchPriority === 'high') highCount += 1

    if (loading === 'lazy' && fetchPriority === 'high') {
      issues.push(`${rel}: image cannot be loading=lazy and fetchPriority=high at the same time`)
    }

    if (loading === 'lazy' && decoding === 'sync') {
      issues.push(`${rel}: lazy image should not use decoding=sync`)
    }

    if (fetchPriority === 'high' && loading && loading !== 'eager') {
      issues.push(`${rel}: fetchPriority=high requires loading=eager`)
    }
  }

  const allow = EAGER_ALLOWLIST.get(rel)
  const maxEager = allow?.maxEager ?? 0
  const allowHighPriority = allow?.allowHighPriority ?? false

  if (eagerCount > maxEager) {
    issues.push(`${rel}: found ${eagerCount} eager images, allowed ${maxEager}`)
  }

  if (!allowHighPriority && highCount > 0) {
    issues.push(`${rel}: fetchPriority=high is not allowed here (found ${highCount})`)
  }

  if (allowHighPriority && highCount > 1) {
    issues.push(`${rel}: only one fetchPriority=high image is allowed (found ${highCount})`)
  }

  if (tags.length > 0) {
    checks.push({
      file: rel,
      images: tags.length,
      eagerCount,
      highCount,
      maxEager,
      allowHighPriority,
    })
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  filesChecked: checks.length,
  issueCount: issues.length,
  checks,
  issues,
}

const reportPath = path.join(root, 'seo-image-loading-strategy-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Image loading strategy audit complete')
console.log(`Files checked: ${report.filesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
