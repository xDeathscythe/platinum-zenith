import fs from 'fs'
import path from 'path'
import {
  orgSchema,
  localBusinessSchema,
  websiteSchema,
} from '../src/hooks/pageMetaData.js'
import {
  serverOrgSchema,
  serverLocalBusinessSchema,
  serverWebsiteSchema,
} from '../server/ogMeta.js'

const root = process.cwd()
const issues = []

function firstContact(schema) {
  if (!schema?.contactPoint) return null
  return Array.isArray(schema.contactPoint) ? schema.contactPoint[0] : schema.contactPoint
}

function compare(label, a, b, pathName) {
  const av = a ?? 'missing'
  const bv = b ?? 'missing'
  if (JSON.stringify(av) !== JSON.stringify(bv)) {
    issues.push(`${label}: mismatch at ${pathName} (client=${JSON.stringify(av)}, server=${JSON.stringify(bv)})`)
  }
}

compare('Organization', orgSchema['@type'], serverOrgSchema['@type'], '@type')
compare('Organization', orgSchema['@id'], serverOrgSchema['@id'], '@id')
compare('Organization', orgSchema.name, serverOrgSchema.name, 'name')
compare('Organization', orgSchema.url, serverOrgSchema.url, 'url')
compare('Organization', orgSchema.logo, serverOrgSchema.logo, 'logo')
compare('Organization', orgSchema.email, serverOrgSchema.email, 'email')
compare('Organization', orgSchema.telephone, serverOrgSchema.telephone, 'telephone')
compare('Organization', orgSchema.areaServed?.name, serverOrgSchema.areaServed?.name, 'areaServed.name')
compare('Organization', firstContact(orgSchema)?.contactType, firstContact(serverOrgSchema)?.contactType, 'contactPoint.contactType')
compare('Organization', firstContact(orgSchema)?.email, firstContact(serverOrgSchema)?.email, 'contactPoint.email')
compare('Organization', firstContact(orgSchema)?.telephone, firstContact(serverOrgSchema)?.telephone, 'contactPoint.telephone')
compare('Organization', firstContact(orgSchema)?.url, firstContact(serverOrgSchema)?.url, 'contactPoint.url')
compare('Organization', firstContact(orgSchema)?.availableLanguage, firstContact(serverOrgSchema)?.availableLanguage, 'contactPoint.availableLanguage')

compare('LocalBusiness', localBusinessSchema['@type'], serverLocalBusinessSchema['@type'], '@type')
compare('LocalBusiness', localBusinessSchema['@id'], serverLocalBusinessSchema['@id'], '@id')
compare('LocalBusiness', localBusinessSchema.name, serverLocalBusinessSchema.name, 'name')
compare('LocalBusiness', localBusinessSchema.url, serverLocalBusinessSchema.url, 'url')
compare('LocalBusiness', localBusinessSchema.image, serverLocalBusinessSchema.image, 'image')
compare('LocalBusiness', localBusinessSchema.email, serverLocalBusinessSchema.email, 'email')
compare('LocalBusiness', localBusinessSchema.telephone, serverLocalBusinessSchema.telephone, 'telephone')
compare('LocalBusiness', localBusinessSchema.priceRange, serverLocalBusinessSchema.priceRange, 'priceRange')
compare('LocalBusiness', localBusinessSchema.address?.streetAddress, serverLocalBusinessSchema.address?.streetAddress, 'address.streetAddress')
compare('LocalBusiness', localBusinessSchema.address?.addressLocality, serverLocalBusinessSchema.address?.addressLocality, 'address.addressLocality')
compare('LocalBusiness', localBusinessSchema.address?.postalCode, serverLocalBusinessSchema.address?.postalCode, 'address.postalCode')
compare('LocalBusiness', localBusinessSchema.address?.addressCountry, serverLocalBusinessSchema.address?.addressCountry, 'address.addressCountry')
compare('LocalBusiness', localBusinessSchema.areaServed?.name, serverLocalBusinessSchema.areaServed?.name, 'areaServed.name')
compare('LocalBusiness', localBusinessSchema.parentOrganization?.['@id'], serverLocalBusinessSchema.parentOrganization?.['@id'], 'parentOrganization.@id')
compare('LocalBusiness', localBusinessSchema.geo?.latitude, serverLocalBusinessSchema.geo?.latitude, 'geo.latitude')
compare('LocalBusiness', localBusinessSchema.geo?.longitude, serverLocalBusinessSchema.geo?.longitude, 'geo.longitude')
compare('LocalBusiness', firstContact(localBusinessSchema)?.contactType, firstContact(serverLocalBusinessSchema)?.contactType, 'contactPoint.contactType')
compare('LocalBusiness', firstContact(localBusinessSchema)?.email, firstContact(serverLocalBusinessSchema)?.email, 'contactPoint.email')
compare('LocalBusiness', firstContact(localBusinessSchema)?.telephone, firstContact(serverLocalBusinessSchema)?.telephone, 'contactPoint.telephone')
compare('LocalBusiness', firstContact(localBusinessSchema)?.url, firstContact(serverLocalBusinessSchema)?.url, 'contactPoint.url')
compare('LocalBusiness', firstContact(localBusinessSchema)?.availableLanguage, firstContact(serverLocalBusinessSchema)?.availableLanguage, 'contactPoint.availableLanguage')

compare('WebSite', websiteSchema['@type'], serverWebsiteSchema['@type'], '@type')
compare('WebSite', websiteSchema.name, serverWebsiteSchema.name, 'name')
compare('WebSite', websiteSchema.url, serverWebsiteSchema.url, 'url')
compare('WebSite', websiteSchema.inLanguage, serverWebsiteSchema.inLanguage, 'inLanguage')
compare('WebSite', websiteSchema.potentialAction?.['@type'], serverWebsiteSchema.potentialAction?.['@type'], 'potentialAction.@type')
compare('WebSite', websiteSchema.potentialAction?.target, serverWebsiteSchema.potentialAction?.target, 'potentialAction.target')
compare('WebSite', websiteSchema.potentialAction?.['query-input'], serverWebsiteSchema.potentialAction?.['query-input'], 'potentialAction.query-input')

const report = {
  generatedAt: new Date().toISOString(),
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-core-schema-parity-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Core schema parity audit complete')
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
