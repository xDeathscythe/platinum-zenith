import fs from 'fs'
import path from 'path'
import { injectOgMeta } from '../server/ogMeta.js'

const root = process.cwd()
const htmlPath = path.join(root, 'index.html')
const htmlTemplate = fs.readFileSync(htmlPath, 'utf8')
const SITE_URL = 'https://platinumzenith.com'

const REQUIRED_ROUTES = {
  '/google-reklame-cena': {
    minSteps: 4,
    expectedName: 'Kako da izračunate budžet za Google Ads bez nagađanja',
  },
}

function extractJsonLdById(html, id) {
  const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const re = new RegExp(`<script\\s+id="${escapedId}"[^>]*>([\\s\\S]*?)<\\/script>`, 'i')
  const m = html.match(re)
  if (!m) return null
  try {
    return JSON.parse(m[1])
  } catch {
    return null
  }
}

const issues = []

for (const [route, rule] of Object.entries(REQUIRED_ROUTES)) {
  const rendered = injectOgMeta(htmlTemplate, route)
  const howTo = extractJsonLdById(rendered, 'ld-howto-server')
  const expectedUrl = `${SITE_URL}${route}`

  if (!howTo) {
    issues.push(`${route}: missing or invalid ld-howto-server JSON`)
    continue
  }

  if (howTo['@type'] !== 'HowTo') {
    issues.push(`${route}: ld-howto-server must be HowTo (got ${howTo['@type'] || 'missing'})`)
  }

  if (howTo.name !== rule.expectedName) {
    issues.push(`${route}: unexpected HowTo name`)
  }

  if (howTo.inLanguage !== 'sr-RS') {
    issues.push(`${route}: inLanguage must be sr-RS`)
  }

  if (howTo.url !== expectedUrl) {
    issues.push(`${route}: HowTo url mismatch (expected ${expectedUrl}, got ${howTo.url || 'missing'})`)
  }

  const steps = Array.isArray(howTo.step) ? howTo.step : []
  if (steps.length < rule.minSteps) {
    issues.push(`${route}: expected at least ${rule.minSteps} HowTo steps, got ${steps.length}`)
    continue
  }

  for (let i = 0; i < steps.length; i += 1) {
    const step = steps[i] || {}
    const pos = i + 1

    if (step['@type'] !== 'HowToStep') {
      issues.push(`${route}: step #${pos} must be HowToStep`)
    }
    if (step.position !== pos) {
      issues.push(`${route}: step #${pos} has wrong position (${step.position})`)
    }
    if (!step.name || String(step.name).trim().length < 10) {
      issues.push(`${route}: step #${pos} missing/short name`)
    }
    if (!step.text || String(step.text).trim().length < 40) {
      issues.push(`${route}: step #${pos} missing/short text`)
    }
    if (!step.url || !String(step.url).startsWith(`${expectedUrl}#korak-`)) {
      issues.push(`${route}: step #${pos} invalid URL (${step.url || 'missing'})`)
    }
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  routesChecked: Object.keys(REQUIRED_ROUTES).length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-howto-schema-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('HowTo schema audit complete')
console.log(`Routes checked: ${report.routesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
