import fs from 'fs'
import path from 'path'

const root = process.cwd()
const robotsPath = path.join(root, 'public', 'robots.txt')

const requiredLines = [
  'User-agent: *',
  'Allow: /',
  'Disallow: /draft/',
  'Disallow: /dashboard',
  'Disallow: /prijave',
  'Disallow: /poruke',
  'Disallow: /newsletter',
  'Disallow: /emails',
  'Disallow: /analytics',
  'Disallow: /log',
  'Sitemap: https://platinumzenith.com/sitemap-index.xml',
]

const issues = []

if (!fs.existsSync(robotsPath)) {
  issues.push('Missing public/robots.txt')
} else {
  const raw = fs.readFileSync(robotsPath, 'utf8')
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)

  for (const req of requiredLines) {
    if (!lines.includes(req)) {
      issues.push(`Missing robots.txt directive: ${req}`)
    }
  }

  // Ensure no duplicate lines for required directives
  for (const req of requiredLines) {
    const count = lines.filter((line) => line === req).length
    if (count > 1) {
      issues.push(`Duplicate robots.txt directive (${count}x): ${req}`)
    }
  }

  const disallowLines = lines.filter((line) => line.toLowerCase().startsWith('disallow:'))
  if (disallowLines.length < 7) {
    issues.push(`Expected at least 7 Disallow directives, got ${disallowLines.length}`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-robots-txt-directives-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Robots.txt directives audit complete')
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  for (const issue of issues) console.log(`- ${issue}`)
  process.exitCode = 1
}
