import fs from 'fs'
import path from 'path'
import { pageMeta } from '../src/hooks/pageMetaData.js'

const root = process.cwd()

const TITLE_MIN = 35
const TITLE_MAX = 80
const DESC_MIN = 110
const DESC_MAX = 170

const entries = Object.entries(pageMeta)
const issues = []
const warnings = []

const seenTitles = new Map()
const seenDescriptions = new Map()

for (const [route, meta] of entries) {
  const title = (meta.title || '').trim()
  const description = (meta.description || '').trim()

  if (!title) issues.push(`${route}: missing title`)
  if (!description) issues.push(`${route}: missing description`)

  if (title) {
    if (seenTitles.has(title)) issues.push(`${route}: duplicate title (same as ${seenTitles.get(title)})`)
    else seenTitles.set(title, route)

    if (title.length < TITLE_MIN || title.length > TITLE_MAX) {
      warnings.push(`${route}: title length ${title.length} (target ${TITLE_MIN}-${TITLE_MAX})`)
    }
  }

  if (description) {
    if (seenDescriptions.has(description)) issues.push(`${route}: duplicate description (same as ${seenDescriptions.get(description)})`)
    else seenDescriptions.set(description, route)

    if (description.length < DESC_MIN || description.length > DESC_MAX) {
      warnings.push(`${route}: description length ${description.length} (target ${DESC_MIN}-${DESC_MAX})`)
    }
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  pagesChecked: entries.length,
  issuesCount: issues.length,
  warningsCount: warnings.length,
  issues,
  warnings,
}

const reportPath = path.join(root, 'seo-meta-quality-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Meta quality audit complete')
console.log(`Pages checked: ${report.pagesChecked}`)
console.log(`Issues: ${report.issuesCount}`)
console.log(`Warnings: ${report.warningsCount}`)
console.log(`Report: ${reportPath}`)

if (warnings.length > 0) {
  console.log('\nWarnings:')
  warnings.slice(0, 20).forEach((w) => console.log(`- ${w}`))
  if (warnings.length > 20) console.log(`... +${warnings.length - 20} more`)
}

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
