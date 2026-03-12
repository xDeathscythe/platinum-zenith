import fs from 'fs'
import path from 'path'
import { websiteSchema } from '../src/hooks/pageMetaData.js'
import { injectOgMeta, serverWebsiteSchema } from '../server/ogMeta.js'

const root = process.cwd()
const htmlPath = path.join(root, 'index.html')
const htmlTemplate = fs.readFileSync(htmlPath, 'utf8')
const SITE_URL = 'https://platinumzenith.com'
const EXPECTED_TARGET = `${SITE_URL}/blog?search={search_term_string}`
const EXPECTED_QUERY_INPUT = 'required name=search_term_string'

function getCanonical(html) {
  return html.match(/<link\s+rel="canonical"\s+href="([^"]+)"\s*\/>/i)?.[1] || ''
}

function getOgUrl(html) {
  return html.match(/<meta\s+property="og:url"\s+content="([^"]+)"\s*\/>/i)?.[1] || ''
}

const issues = []

function compare(label, actual, expected) {
  if (actual !== expected) {
    issues.push(`${label}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual ?? 'missing')}`)
  }
}

compare('client websiteSchema.@type', websiteSchema['@type'], 'WebSite')
compare('server websiteSchema.@type', serverWebsiteSchema['@type'], 'WebSite')
compare('client websiteSchema.inLanguage', websiteSchema.inLanguage, 'sr-RS')
compare('server websiteSchema.inLanguage', serverWebsiteSchema.inLanguage, 'sr-RS')
compare('client SearchAction target', websiteSchema.potentialAction?.target, EXPECTED_TARGET)
compare('server SearchAction target', serverWebsiteSchema.potentialAction?.target, EXPECTED_TARGET)
compare('client SearchAction query-input', websiteSchema.potentialAction?.['query-input'], EXPECTED_QUERY_INPUT)
compare('server SearchAction query-input', serverWebsiteSchema.potentialAction?.['query-input'], EXPECTED_QUERY_INPUT)

const searchAliasHtml = injectOgMeta(htmlTemplate, '/blog?search=google ads')
compare('search alias canonical', getCanonical(searchAliasHtml), `${SITE_URL}/blog`)
compare('search alias og:url', getOgUrl(searchAliasHtml), `${SITE_URL}/blog`)

const rootSearchAliasHtml = injectOgMeta(htmlTemplate, '/?search=google ads')
compare('root search alias canonical', getCanonical(rootSearchAliasHtml), `${SITE_URL}/`)
compare('root search alias og:url', getOgUrl(rootSearchAliasHtml), `${SITE_URL}/`)

const report = {
  generatedAt: new Date().toISOString(),
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-website-searchaction-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Website SearchAction audit complete')
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
