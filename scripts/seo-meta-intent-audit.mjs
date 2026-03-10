import fs from 'fs'
import path from 'path'
import { pageMeta } from '../src/hooks/pageMetaData.js'

const root = process.cwd()

const TARGET_RULES = {
  '/google-reklame-cena': {
    mustContainAll: ['google'],
    mustContainAny: ['cena', 'cene'],
    shouldContainAny: ['cpc', 'klik', 'budzet', 'lead'],
  },
  '/instagram-reklame-cena': {
    mustContainAll: ['instagram'],
    mustContainAny: ['cena', 'cene'],
    shouldContainAny: ['cpc', 'cpm', 'budzet', 'oglasa'],
  },
  '/koliko-kosta-facebook-reklama': {
    mustContainAll: ['facebook'],
    mustContainAny: ['cena', 'oglasa', 'reklama'],
    shouldContainAny: ['instagram', 'cpc', 'budzet', 'srbiji'],
  },
  '/izrada-wordpress-sajta-cena': {
    mustContainAll: ['wordpress', 'cena'],
    mustContainAny: ['woocommerce', 'sajta', 'rokovi', 'troskove'],
  },
  '/cene-izrade-sajta': {
    mustContainAll: ['cene', 'izrade sajta'],
    mustContainAny: ['srbiji', '2026', 'web', 'troskova'],
  },
  '/cene-digitalnog-marketinga': {
    mustContainAll: ['cene', 'digitalnog marketinga'],
    mustContainAny: ['seo', 'google ads', 'paketi', 'troskove'],
  },
  '/seo-optimizacija-cena': {
    mustContainAll: ['seo', 'cene'],
    mustContainAny: ['optimizacije', 'srbiji', 'paketi', 'pozicija'],
  },
  '/marketing-agencija-beograd': {
    mustContainAll: ['beograd'],
    mustContainAny: ['seo', 'google ads', 'meta ads', 'upite'],
  },
  '/marketing-agencija-zrenjanin': {
    mustContainAll: ['zrenjaninu'],
    mustContainAny: ['seo', 'google ads', 'upita', 'prodaja'],
  },
  '/marketing-agencija-novi-sad': {
    mustContainAll: ['novi sad'],
    mustContainAny: ['seo', 'google ads', 'meta', 'upita'],
  },
  '/facebook-oglasi-ne-rade': {
    mustContainAll: ['facebook oglasi'],
    mustContainAny: ['rezultate', 'gresaka', 'popravku'],
  },
  '/web-shop-nema-prodaju': {
    mustContainAll: ['web shop', 'prodaju'],
    mustContainAny: ['razloga', 'resenja', 'konverzije'],
  },
  '/in-house-tim-vs-agencija': {
    mustContainAll: ['in house', 'agencija'],
    mustContainAny: ['troskovima', 'izbor', 'modela'],
  },
  '/fiksna-naknada-vs-revenue-share': {
    mustContainAll: ['fiksna naknada', 'revenue share'],
    mustContainAny: ['modela', 'naplate', 'profitabilniji'],
  },
  '/marketing-za-advokate': {
    mustContainAll: ['advokatske', 'srbiji'],
    mustContainAny: ['seo', 'google ads', 'upite', 'klijenata'],
  },
  '/marketing-za-stomatologe': {
    mustContainAll: ['stomatoloske', 'ordinacije'],
    mustContainAny: ['google ads', 'lokalni seo', 'pacijentima', 'prihod'],
  },
  '/marketing-za-restorane': {
    mustContainAll: ['restorane', 'srbiji'],
    mustContainAny: ['google business', 'rezervacije', 'porudzbine', 'stolova'],
  },
}

function normalize(value = '') {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const issues = []
const warnings = []
const checked = []

for (const [route, rule] of Object.entries(TARGET_RULES)) {
  const meta = pageMeta[route]

  if (!meta) {
    issues.push(`${route}: missing pageMeta entry`)
    continue
  }

  const description = normalize(meta.description || '')
  if (!description) {
    issues.push(`${route}: missing meta description`)
    continue
  }

  const mustContainAll = (rule.mustContainAll || []).map(normalize)
  const mustContainAny = (rule.mustContainAny || []).map(normalize)

  const missingAll = mustContainAll.filter((term) => !description.includes(term))
  if (missingAll.length > 0) {
    issues.push(`${route}: missing required terms (${missingAll.join(', ')})`)
  }

  if (mustContainAny.length > 0) {
    const hasAny = mustContainAny.some((term) => description.includes(term))
    if (!hasAny) {
      issues.push(`${route}: missing intent terms (expected any of: ${mustContainAny.join(', ')})`)
    }
  }

  const shouldContainAny = (rule.shouldContainAny || []).map(normalize)
  if (shouldContainAny.length > 0) {
    const hasRecommended = shouldContainAny.some((term) => description.includes(term))
    if (!hasRecommended) {
      warnings.push(`${route}: missing recommended terms (any of: ${shouldContainAny.join(', ')})`)
    }
  }

  checked.push(route)
}

const report = {
  generatedAt: new Date().toISOString(),
  checkedRoutes: checked.length,
  issueCount: issues.length,
  warningCount: warnings.length,
  issues,
  warnings,
}

const reportPath = path.join(root, 'seo-meta-intent-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Meta intent audit complete')
console.log(`Routes checked: ${report.checkedRoutes}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Warnings: ${report.warningCount}`)
console.log(`Report: ${reportPath}`)

if (warnings.length > 0) {
  console.log('\nWarnings:')
  warnings.forEach((warning) => console.log(`- ${warning}`))
}

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
