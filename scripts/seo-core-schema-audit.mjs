import fs from 'fs'
import path from 'path'
import { injectOgMeta } from '../server/ogMeta.js'

const root = process.cwd()
const htmlPath = path.join(root, 'index.html')
const htmlTemplate = fs.readFileSync(htmlPath, 'utf8')

function extractJsonLdById(html, id) {
  const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const re = new RegExp(`<script\\s+id="${escaped}"[^>]*>([\\s\\S]*?)<\\/script>`, 'i')
  const match = html.match(re)
  if (!match) return null
  try {
    return JSON.parse(match[1])
  } catch {
    return null
  }
}

const checks = [
  { route: '/', expectWebsite: true },
  { route: '/kontakt', expectWebsite: false },
]

const issues = []

for (const check of checks) {
  const rendered = injectOgMeta(htmlTemplate, check.route)

  const org = extractJsonLdById(rendered, 'ld-org-server')
  const localBusiness = extractJsonLdById(rendered, 'ld-local-business-server')
  const website = extractJsonLdById(rendered, 'ld-website-server')

  if (!org) {
    issues.push(`${check.route}: missing/invalid ld-org-server`)
  } else {
    if (org['@type'] !== 'Organization') issues.push(`${check.route}: ld-org-server must be Organization`)
    if (!org.url || !String(org.url).startsWith('https://platinumzenith.com')) {
      issues.push(`${check.route}: ld-org-server missing canonical url`)
    }
    if (!org.email) issues.push(`${check.route}: ld-org-server missing email`)
    if (!org.telephone) issues.push(`${check.route}: ld-org-server missing telephone`)

    const orgContacts = Array.isArray(org.contactPoint) ? org.contactPoint : []
    if (orgContacts.length === 0) {
      issues.push(`${check.route}: ld-org-server missing contactPoint[]`)
    } else {
      const primary = orgContacts[0] || {}
      if (primary['@type'] !== 'ContactPoint') issues.push(`${check.route}: org contactPoint must be ContactPoint`)
      if (!primary.contactType) issues.push(`${check.route}: org contactPoint missing contactType`)
      if (!primary.email) issues.push(`${check.route}: org contactPoint missing email`)
      if (!primary.telephone) issues.push(`${check.route}: org contactPoint missing telephone`)
      if (!primary.url || !String(primary.url).startsWith('https://platinumzenith.com')) {
        issues.push(`${check.route}: org contactPoint URL must be canonical site URL`)
      }
    }
  }

  if (!localBusiness) {
    issues.push(`${check.route}: missing/invalid ld-local-business-server`)
  } else {
    if (localBusiness['@type'] !== 'LocalBusiness') issues.push(`${check.route}: ld-local-business-server must be LocalBusiness`)
    if (!localBusiness.url || !String(localBusiness.url).startsWith('https://platinumzenith.com')) {
      issues.push(`${check.route}: ld-local-business-server missing canonical url`)
    }

    const lbContact = localBusiness.contactPoint || {}
    if (!lbContact || lbContact['@type'] !== 'ContactPoint') {
      issues.push(`${check.route}: ld-local-business-server missing ContactPoint`) 
    } else {
      if (!lbContact.contactType) issues.push(`${check.route}: localBusiness contactPoint missing contactType`)
      if (!lbContact.email) issues.push(`${check.route}: localBusiness contactPoint missing email`)
      if (!lbContact.telephone) issues.push(`${check.route}: localBusiness contactPoint missing telephone`)
    }
  }

  if (check.expectWebsite) {
    if (!website) {
      issues.push(`${check.route}: missing/invalid ld-website-server`)
    } else {
      if (website['@type'] !== 'WebSite') issues.push(`${check.route}: ld-website-server must be WebSite`)
      const action = website.potentialAction
      if (!action || action['@type'] !== 'SearchAction') {
        issues.push(`${check.route}: ld-website-server missing SearchAction`)
      } else {
        const target = String(action.target || '')
        const queryInput = String(action['query-input'] || '')
        if (!target.includes('/blog?search={search_term_string}')) {
          issues.push(`${check.route}: SearchAction target mismatch (${target})`)
        }
        if (!queryInput.includes('search_term_string')) {
          issues.push(`${check.route}: SearchAction query-input missing search_term_string`)
        }
      }
    }
  } else if (website) {
    issues.push(`${check.route}: ld-website-server should exist only on homepage`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  checks: checks.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-core-schema-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Core schema audit complete')
console.log(`Checks: ${report.checks}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  for (const issue of issues) console.log(`- ${issue}`)
  process.exitCode = 1
}
