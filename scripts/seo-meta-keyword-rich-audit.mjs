import fs from 'fs'
import path from 'path'
import { pageMeta } from '../src/hooks/pageMetaData.js'

const root = process.cwd()

const PRIORITY_ROUTES = new Set([
  '/google-reklame-cena',
  '/instagram-reklame-cena',
  '/izrada-wordpress-sajta-cena',
  '/koliko-kosta-facebook-reklama',
  '/seo-optimizacija-cena',
  '/cene-izrade-sajta',
  '/cene-digitalnog-marketinga',
  '/marketing-agencija-beograd',
  '/marketing-agencija-zrenjanin',
  '/marketing-agencija-novi-sad',
  '/in-house-tim-vs-agencija',
  '/fiksna-naknada-vs-revenue-share',
  '/facebook-oglasi-ne-rade',
  '/web-shop-nema-prodaju',
  '/marketing-za-advokate',
  '/marketing-za-stomatologe',
  '/marketing-za-restorane',
])

const STOPWORDS = new Set([
  'i', 'u', 'za', 'od', 'na', 'po', 'sa', 'bez', 'kroz', 'vs', 'v', 'a', 'ili',
  'to', 'the', 'of', 'and', 'je', 'su', 'se', 'koji', 'koja', 'koje', 'kako', 'sta',
  'srbija', 'srbiji', '2026', 'cena', 'cene', 'koliko', 'kosta',
])

function normalize(text = '') {
  return text
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
    .filter((token) => token.length >= 3 && !STOPWORDS.has(token))
}

function tokenMatches(descToken, keywordToken) {
  if (descToken === keywordToken) return true
  const stemSize = 4
  const descStem = descToken.slice(0, stemSize)
  const keywordStem = keywordToken.slice(0, stemSize)
  return descToken.startsWith(keywordStem) || keywordToken.startsWith(descStem)
}

function keywordPhraseScore(descriptionTokens, keywordTokens) {
  if (keywordTokens.length === 0) return { score: 0, required: 1 }

  let score = 0
  for (const keywordToken of keywordTokens) {
    if (descriptionTokens.some((descToken) => tokenMatches(descToken, keywordToken))) {
      score += 1
    }
  }

  const required = keywordTokens.length >= 3 ? 2 : 1
  return { score, required }
}

const entries = Object.entries(pageMeta)
const issues = []
const warnings = []

for (const [route, meta] of entries) {
  const descriptionTokens = tokenize(meta.description || '')
  const keywordPhrases = String(meta.keywords || '')
    .split(',')
    .map((phrase) => tokenize(phrase))
    .filter((tokens) => tokens.length > 0)
    .slice(0, 4)

  if (keywordPhrases.length === 0) {
    const msg = `${route}: missing keywords for keyword-rich audit`
    if (PRIORITY_ROUTES.has(route)) issues.push(msg)
    else warnings.push(msg)
    continue
  }

  let passed = false
  let best = { score: 0, required: 1, phrase: [] }

  for (const phraseTokens of keywordPhrases) {
    const result = keywordPhraseScore(descriptionTokens, phraseTokens)
    if (result.score > best.score) {
      best = { ...result, phrase: phraseTokens }
    }

    if (result.score >= result.required) {
      passed = true
      break
    }
  }

  if (!passed) {
    const msg = `${route}: description not keyword-rich enough (best ${best.score}/${best.required} vs phrase "${best.phrase.join(' ')}")`
    if (PRIORITY_ROUTES.has(route)) issues.push(msg)
    else warnings.push(msg)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  pagesChecked: entries.length,
  priorityRoutes: PRIORITY_ROUTES.size,
  issuesCount: issues.length,
  warningsCount: warnings.length,
  issues,
  warnings,
}

const reportPath = path.join(root, 'seo-meta-keyword-rich-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Meta keyword-rich audit complete')
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
