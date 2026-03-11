import fs from 'fs'
import path from 'path'
import { injectOgMeta } from '../server/ogMeta.js'

const root = process.cwd()
const htmlPath = path.join(root, 'index.html')
const htmlTemplate = fs.readFileSync(htmlPath, 'utf8')

const REQUIRED_FAQ_ROUTES = [
  '/faq',
  '/google-reklame-cena',
  '/instagram-reklame-cena',
  '/izrada-wordpress-sajta-cena',
  '/marketing-za-advokate',
  '/marketing-za-stomatologe',
  '/marketing-za-restorane',
  '/marketing-agencija-beograd',
  '/marketing-agencija-zrenjanin',
  '/marketing-agencija-novi-sad',
  '/in-house-tim-vs-agencija',
  '/fiksna-naknada-vs-revenue-share',
  '/seo-optimizacija-cena',
  '/cene-izrade-sajta',
  '/cene-digitalnog-marketinga',
  '/koliko-kosta-facebook-reklama',
  '/facebook-oglasi-ne-rade',
  '/web-shop-nema-prodaju',
]

function extractJsonLdById(out, id) {
  const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const re = new RegExp(`<script\\s+id="${escapedId}"[^>]*>([\\s\\S]*?)<\\/script>`, 'i')
  const m = out.match(re)
  if (!m) return null

  try {
    return JSON.parse(m[1])
  } catch {
    return null
  }
}

const issues = []
const warnings = []

for (const route of REQUIRED_FAQ_ROUTES) {
  const out = injectOgMeta(htmlTemplate, route)
  const faq = extractJsonLdById(out, 'ld-faq-server')

  if (!faq) {
    issues.push(`${route}: missing or invalid ld-faq-server JSON`) 
    continue
  }

  if (faq['@type'] !== 'FAQPage') {
    issues.push(`${route}: ld-faq-server must be FAQPage (got ${faq['@type'] || 'missing'})`)
  }

  const entries = Array.isArray(faq.mainEntity) ? faq.mainEntity : []
  if (entries.length < 2) {
    issues.push(`${route}: FAQ must contain at least 2 questions (found ${entries.length})`)
    continue
  }

  const normalizedQuestions = new Set()

  for (let i = 0; i < entries.length; i += 1) {
    const item = entries[i] || {}
    const idx = i + 1

    if (item['@type'] !== 'Question') {
      issues.push(`${route}: FAQ item #${idx} must be Question`)
      continue
    }

    const q = String(item.name || '').trim()
    if (!q) {
      issues.push(`${route}: FAQ item #${idx} missing question text`)
    } else {
      const norm = q.toLowerCase().replace(/\s+/g, ' ')
      if (normalizedQuestions.has(norm)) {
        issues.push(`${route}: duplicate FAQ question "${q}"`)
      }
      normalizedQuestions.add(norm)

      if (q.length < 12) {
        warnings.push(`${route}: very short FAQ question #${idx} (${q.length} chars)`) 
      }
      if (!q.includes('?')) {
        warnings.push(`${route}: FAQ question #${idx} has no question mark`) 
      }
    }

    const answer = item.acceptedAnswer || {}
    if (answer['@type'] !== 'Answer') {
      issues.push(`${route}: FAQ item #${idx} acceptedAnswer must be Answer`)
      continue
    }

    const answerText = String(answer.text || '').trim()
    if (!answerText) {
      issues.push(`${route}: FAQ item #${idx} missing answer text`)
      continue
    }

    if (answerText.length < 30) {
      warnings.push(`${route}: very short FAQ answer #${idx} (${answerText.length} chars)`) 
    }
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  routesChecked: REQUIRED_FAQ_ROUTES.length,
  issueCount: issues.length,
  warningCount: warnings.length,
  issues,
  warnings,
}

const reportPath = path.join(root, 'seo-faq-schema-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('FAQ schema audit complete')
console.log(`Routes checked: ${report.routesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Warnings: ${report.warningCount}`)
console.log(`Report: ${reportPath}`)

if (warnings.length > 0) {
  console.log('\nWarnings:')
  warnings.slice(0, 20).forEach((warning) => console.log(`- ${warning}`))
  if (warnings.length > 20) console.log(`... +${warnings.length - 20} more`)
}

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
