import fs from 'fs'
import path from 'path'
import { injectOgMeta } from '../server/ogMeta.js'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()
const htmlPath = path.join(root, 'index.html')
const htmlTemplate = fs.readFileSync(htmlPath, 'utf8')
const SITE_URL = 'https://platinumzenith.com'

function getMetaByProperty(html, propertyName) {
  const escaped = propertyName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const re = new RegExp(`<meta\\s+property="${escaped}"\\s+content="([^"]*)"\\s*\\/>`, 'i')
  const m = html.match(re)
  return m ? m[1] : null
}

function getMetaByName(html, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const re = new RegExp(`<meta\\s+name="${escaped}"\\s+content="([^"]*)"\\s*\\/>`, 'i')
  const m = html.match(re)
  return m ? m[1] : null
}

function getCanonical(html) {
  const m = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"\s*\/>/i)
  return m ? m[1] : null
}

function isExpectedArticleDateIso(value) {
  return /^\d{4}-\d{2}-\d{2}T00:00:00\+01:00$/.test(value)
}

const publicPosts = blogPosts.filter((p) => p?.slug && !p?.isDraft)
const draftPosts = blogPosts.filter((p) => p?.slug && p?.isDraft)

const checks = [
  { route: '/kontakt', kind: 'non-article' },
  ...publicPosts.map((p) => ({ route: `/blog/${p.slug}`, kind: 'public-blog' })),
  ...draftPosts.map((p) => ({ route: `/draft/${p.slug}`, kind: 'draft-blog' })),
]

const issues = []

for (const check of checks) {
  const rendered = injectOgMeta(htmlTemplate, check.route)

  const canonical = getCanonical(rendered)
  const ogUrl = getMetaByProperty(rendered, 'og:url')
  const ogType = getMetaByProperty(rendered, 'og:type')

  const published = getMetaByProperty(rendered, 'article:published_time')
  const modified = getMetaByProperty(rendered, 'article:modified_time')
  const section = getMetaByProperty(rendered, 'article:section')
  const robots = (getMetaByName(rendered, 'robots') || '').toLowerCase()

  const expectedUrl = `${SITE_URL}${check.route}`

  if (canonical !== expectedUrl) {
    issues.push(`${check.route}: canonical mismatch (expected ${expectedUrl}, got ${canonical || 'missing'})`)
  }

  if (ogUrl !== expectedUrl) {
    issues.push(`${check.route}: og:url mismatch (expected ${expectedUrl}, got ${ogUrl || 'missing'})`)
  }

  if (check.kind === 'public-blog') {
    if (ogType !== 'article') {
      issues.push(`${check.route}: public blog must have og:type=article (got ${ogType || 'missing'})`)
    }

    if (!published || !modified || !section) {
      issues.push(`${check.route}: public blog missing article:* meta values`)
    } else {
      if (!isExpectedArticleDateIso(published)) {
        issues.push(`${check.route}: article:published_time invalid format (${published})`)
      }
      if (!isExpectedArticleDateIso(modified)) {
        issues.push(`${check.route}: article:modified_time invalid format (${modified})`)
      }
      if (published !== modified) {
        issues.push(`${check.route}: published/modified mismatch (${published} vs ${modified})`)
      }
    }

    if (robots.includes('noindex')) {
      issues.push(`${check.route}: public blog should be indexable (got robots="${robots}")`)
    }
  }

  if (check.kind === 'draft-blog') {
    if (ogType !== 'article') {
      issues.push(`${check.route}: draft blog must keep og:type=article (got ${ogType || 'missing'})`)
    }

    if ((published || modified || section)) {
      issues.push(`${check.route}: draft blog should not expose populated article:* fields`)
    }

    if (!robots.includes('noindex')) {
      issues.push(`${check.route}: draft blog must be noindex (got robots="${robots}")`)
    }
  }

  if (check.kind === 'non-article') {
    if (ogType !== 'website') {
      issues.push(`${check.route}: non-article route must have og:type=website (got ${ogType || 'missing'})`)
    }

    if ((published || modified || section)) {
      issues.push(`${check.route}: non-article route should have empty article:* fields`)
    }

    if (robots.includes('noindex')) {
      issues.push(`${check.route}: non-article public route should be indexable (got robots="${robots}")`)
    }
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  checks: checks.length,
  publicBlogRoutes: publicPosts.length,
  draftRoutes: draftPosts.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-article-og-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Article Open Graph audit complete')
console.log(`Checks: ${report.checks}`)
console.log(`Public blog routes: ${report.publicBlogRoutes}`)
console.log(`Draft routes: ${report.draftRoutes}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
