import fs from 'fs'
import path from 'path'
import { pageMeta } from '../src/hooks/pageMetaData.js'

const root = process.cwd()

const STOPWORDS = new Set([
  'i', 'u', 'na', 'za', 'od', 'do', 'sa', 'po', 'je', 'su', 'se', 'da', 'koji', 'koja', 'koje',
  'kroz', 'bez', 'uz', 'a', 'ili', 'o', 'kao', 'iz', 'vs', '2026', 'platinum', 'zenith',
])

const ALLOW_HIGH_SIMILARITY_PREFIXES = [
  '/marketing-agencija-',
  '/marketing-za-',
  '/industrije/',
]

function normalize(text = '') {
  return String(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function tokenize(text = '') {
  return normalize(text)
    .split(' ')
    .filter((t) => t && !STOPWORDS.has(t))
}

function jaccard(a, b) {
  const A = new Set(a)
  const B = new Set(b)
  const intersection = [...A].filter((x) => B.has(x)).length
  const union = new Set([...A, ...B]).size
  return union === 0 ? 0 : intersection / union
}

function shouldAllowSimilarity(routeA, routeB) {
  return ALLOW_HIGH_SIMILARITY_PREFIXES.some((prefix) => routeA.startsWith(prefix) && routeB.startsWith(prefix))
}

const entries = Object.entries(pageMeta)
const issues = []
const warnings = []

const exactTitleMap = new Map()
const exactDescMap = new Map()

for (const [route, meta] of entries) {
  const titleNorm = normalize(meta.title || '')
  const descNorm = normalize(meta.description || '')

  if (!titleNorm) {
    issues.push(`${route}: missing title`)
  } else if (exactTitleMap.has(titleNorm)) {
    issues.push(`${route}: exact duplicate title with ${exactTitleMap.get(titleNorm)}`)
  } else {
    exactTitleMap.set(titleNorm, route)
  }

  if (!descNorm) {
    issues.push(`${route}: missing description`)
  } else if (exactDescMap.has(descNorm)) {
    issues.push(`${route}: exact duplicate description with ${exactDescMap.get(descNorm)}`)
  } else {
    exactDescMap.set(descNorm, route)
  }
}

for (let i = 0; i < entries.length; i += 1) {
  const [routeA, metaA] = entries[i]
  const titleA = tokenize(metaA.title || '')
  const descA = tokenize(metaA.description || '')

  for (let j = i + 1; j < entries.length; j += 1) {
    const [routeB, metaB] = entries[j]
    const titleB = tokenize(metaB.title || '')
    const descB = tokenize(metaB.description || '')

    const titleSim = jaccard(titleA, titleB)
    const descSim = jaccard(descA, descB)

    const allowHigh = shouldAllowSimilarity(routeA, routeB)

    if (!allowHigh && titleSim >= 0.86) {
      warnings.push(`high title similarity ${routeA} ↔ ${routeB} (${titleSim.toFixed(2)})`)
    }

    if (!allowHigh && descSim >= 0.82) {
      warnings.push(`high description similarity ${routeA} ↔ ${routeB} (${descSim.toFixed(2)})`)
    }

    if (!allowHigh && titleSim >= 0.94 && descSim >= 0.90) {
      issues.push(`near-duplicate meta pair ${routeA} ↔ ${routeB} (title ${titleSim.toFixed(2)}, desc ${descSim.toFixed(2)})`)
    }
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  pagesChecked: entries.length,
  issueCount: issues.length,
  warningCount: warnings.length,
  issues,
  warnings,
}

const reportPath = path.join(root, 'seo-meta-uniqueness-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Meta uniqueness audit complete')
console.log(`Pages checked: ${report.pagesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Warnings: ${report.warningCount}`)
console.log(`Report: ${reportPath}`)

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
