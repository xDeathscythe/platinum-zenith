import fs from 'fs'
import path from 'path'
import { serverRouteSchemas } from '../server/ogMeta.js'

const root = process.cwd()
const SITE_URL = 'https://platinumzenith.com'

const issues = []
const warnings = []

const serviceEntries = Object.entries(serverRouteSchemas || {})
  .filter(([, schema]) => schema && schema['@type'] === 'Service')

for (const [route, schema] of serviceEntries) {
  if (!schema.name) issues.push(`${route}: missing Service.name`)
  if (!schema.serviceType) issues.push(`${route}: missing Service.serviceType`)
  if (!schema.url) issues.push(`${route}: missing Service.url`)

  if (schema.url && schema.url !== `${SITE_URL}${route}`) {
    issues.push(`${route}: Service.url mismatch (expected ${SITE_URL}${route}, got ${schema.url})`)
  }

  if (!schema.areaServed) {
    issues.push(`${route}: missing Service.areaServed`)
  } else {
    const areaType = schema.areaServed['@type']
    const areaName = schema.areaServed.name
    if (!areaType || !areaName) {
      issues.push(`${route}: invalid Service.areaServed (requires @type and name)`)
    }
  }

  const provider = schema.provider
  if (!provider) {
    issues.push(`${route}: missing Service.provider`)
  } else {
    if (provider['@type'] !== 'Organization') {
      issues.push(`${route}: Service.provider must be Organization`)
    }
    if (!provider.name) issues.push(`${route}: Service.provider missing name`)
    if (!provider.url || !String(provider.url).startsWith(SITE_URL)) {
      issues.push(`${route}: Service.provider.url must start with ${SITE_URL}`)
    }
  }
}

if (serviceEntries.length < 10) {
  warnings.push(`Only ${serviceEntries.length} Service schemas found; expected broad service coverage`) 
}

const report = {
  generatedAt: new Date().toISOString(),
  serviceSchemasChecked: serviceEntries.length,
  issueCount: issues.length,
  warningCount: warnings.length,
  issues,
  warnings,
}

const reportPath = path.join(root, 'seo-service-schema-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Service schema audit complete')
console.log(`Service schemas checked: ${report.serviceSchemasChecked}`)
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
