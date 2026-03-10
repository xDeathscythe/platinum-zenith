import fs from 'fs'
import path from 'path'
import { pageMeta } from '../src/hooks/pageMetaData.js'
import { injectOgMeta } from '../server/ogMeta.js'

const root = process.cwd()
const appPath = path.join(root, 'src', 'App.jsx')
const indexPath = path.join(root, 'index.html')
const sitemapPath = path.join(root, 'public', 'sitemap.xml')

const TARGET_ROUTES = [
  '/google-reklame-cena',
  '/instagram-reklame-cena',
  '/izrada-wordpress-sajta-cena',
]

function read(file) {
  return fs.readFileSync(file, 'utf8')
}

function parseLazyImports(appText) {
  const map = new Map()
  const re = /const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\('([^']+)'\)\)/g
  for (const m of appText.matchAll(re)) {
    map.set(m[1], m[2])
  }
  return map
}

function parseRouteComponents(appText) {
  const map = new Map()
  const re = /<Route\s+path="([^"]+)"\s+element=\{<([A-Za-z0-9_]+)\s*\/>\}/g
  for (const m of appText.matchAll(re)) {
    map.set(m[1], m[2])
  }
  return map
}

function resolveComponentFile(componentName, importMap) {
  const importPath = importMap.get(componentName)
  if (!importPath) return null
  if (!importPath.startsWith('./pages/')) return null
  return path.join(root, 'src', importPath.replace('./', '') + '.jsx')
}

function getInternalLinks(fileText) {
  return [...fileText.matchAll(/<Link\s+to="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((to) => to.startsWith('/'))
}

function hasJsonLdWith(text, schemaType) {
  return text.includes(`'@type': '${schemaType}'`) || text.includes(`\"@type\":\"${schemaType}\"`) || text.includes(`\"@type\": \"${schemaType}\"`)
}

const appText = read(appPath)
const indexHtml = read(indexPath)
const sitemapXml = read(sitemapPath)

const importMap = parseLazyImports(appText)
const routeComponents = parseRouteComponents(appText)

const checks = []

for (const route of TARGET_ROUTES) {
  const componentName = routeComponents.get(route)
  const componentFile = componentName ? resolveComponentFile(componentName, importMap) : null

  const issues = []

  if (!componentName) {
    issues.push('route-missing-in-app')
  }

  if (!componentFile || !fs.existsSync(componentFile)) {
    issues.push('component-file-missing')
  }

  if (!pageMeta[route]) {
    issues.push('page-meta-missing')
  }

  const rendered = injectOgMeta(indexHtml, route)
  if (!rendered.includes(`content="https://platinumzenith.com${route}"`)) {
    issues.push('og-or-canonical-not-injected')
  }

  if (!sitemapXml.includes(`<loc>https://platinumzenith.com${route}</loc>`)) {
    issues.push('route-missing-in-sitemap')
  }

  if (componentFile && fs.existsSync(componentFile)) {
    const fileText = read(componentFile)
    const links = getInternalLinks(fileText)
    const uniqueLinks = [...new Set(links)]

    if (uniqueLinks.length < 3) {
      issues.push(`internal-links-lt-3 (${uniqueLinks.length})`)
    }

    if (!uniqueLinks.includes('/kontakt')) {
      issues.push('missing-kontakt-cta')
    }

    if (!hasJsonLdWith(fileText, 'FAQPage')) {
      issues.push('faq-jsonld-missing')
    }

    if (!hasJsonLdWith(fileText, 'BreadcrumbList')) {
      issues.push('breadcrumb-jsonld-missing')
    }

    checks.push({
      route,
      component: componentName,
      file: path.relative(root, componentFile),
      uniqueInternalLinks: uniqueLinks.length,
      hasKontakt: uniqueLinks.includes('/kontakt'),
      issues,
    })
  } else {
    checks.push({
      route,
      component: componentName ?? null,
      file: componentFile ? path.relative(root, componentFile) : null,
      uniqueInternalLinks: 0,
      hasKontakt: false,
      issues,
    })
  }
}

const failing = checks.filter((c) => c.issues.length > 0)

const report = {
  generatedAt: new Date().toISOString(),
  targets: TARGET_ROUTES.length,
  failing: failing.length,
  checks,
}

const reportPath = path.join(root, 'seo-landing-qa-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Landing QA complete')
console.log(`Targets: ${report.targets}`)
console.log(`Failing: ${report.failing}`)
console.log(`Report: ${reportPath}`)

if (failing.length > 0) {
  console.log('\nFailures:')
  for (const item of failing) {
    console.log(`- ${item.route}: ${item.issues.join(', ')}`)
  }
  process.exitCode = 1
}
