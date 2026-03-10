import fs from 'fs'
import path from 'path'
import { injectOgMeta } from '../server/ogMeta.js'

const root = process.cwd()
const htmlPath = path.join(root, 'index.html')
const htmlTemplate = fs.readFileSync(htmlPath, 'utf8')

const checks = [
  {
    route: '/',
    expect: { breadcrumb: false, faq: false, article: false, blogListing: false, noindex: false },
  },
  {
    route: '/kontakt',
    expect: { breadcrumb: true, faq: false, article: false, blogListing: false, noindex: false },
  },
  {
    route: '/blog',
    expect: { breadcrumb: true, faq: false, article: false, blogListing: true, noindex: false },
  },
  {
    route: '/google-reklame-cena',
    expect: { breadcrumb: true, faq: true, article: false, blogListing: false, routeSchema: false, noindex: false },
  },
  {
    route: '/alati/roi-kalkulator',
    expect: { breadcrumb: true, faq: false, article: false, blogListing: false, routeSchema: true, noindex: false },
  },
  {
    route: '/case-studies',
    expect: { breadcrumb: true, faq: false, article: false, blogListing: false, routeSchema: true, noindex: false },
  },
  {
    route: '/digitalni-marketing',
    expect: { breadcrumb: true, faq: false, article: false, blogListing: false, routeSchema: true, noindex: false },
  },
  {
    route: '/web-design',
    expect: { breadcrumb: true, faq: false, article: false, blogListing: false, routeSchema: true, noindex: false },
  },
  {
    route: '/consulting',
    expect: { breadcrumb: true, faq: false, article: false, blogListing: false, routeSchema: true, noindex: false },
  },
  {
    route: '/drustvene-mreze',
    expect: { breadcrumb: true, faq: false, article: false, blogListing: false, routeSchema: true, noindex: false },
  },
  {
    route: '/instagram-reklame-cena',
    expect: { breadcrumb: true, faq: true, article: false, blogListing: false, noindex: false },
  },
  {
    route: '/izrada-wordpress-sajta-cena',
    expect: { breadcrumb: true, faq: true, article: false, blogListing: false, noindex: false },
  },
  {
    route: '/marketing-za-advokate',
    expect: { breadcrumb: true, faq: true, article: false, blogListing: false, noindex: false },
  },
  {
    route: '/marketing-za-stomatologe',
    expect: { breadcrumb: true, faq: true, article: false, blogListing: false, noindex: false },
  },
  {
    route: '/marketing-za-restorane',
    expect: { breadcrumb: true, faq: true, article: false, blogListing: false, routeSchema: false, noindex: false },
  },
  {
    route: '/marketing-agencija-beograd',
    expect: { breadcrumb: true, faq: true, article: false, blogListing: false, routeSchema: false, noindex: false },
  },
  {
    route: '/marketing-agencija-zrenjanin',
    expect: { breadcrumb: true, faq: true, article: false, blogListing: false, routeSchema: false, noindex: false },
  },
  {
    route: '/marketing-agencija-novi-sad',
    expect: { breadcrumb: true, faq: true, article: false, blogListing: false, routeSchema: false, noindex: false },
  },
  {
    route: '/in-house-tim-vs-agencija',
    expect: { breadcrumb: true, faq: true, article: false, blogListing: false, routeSchema: false, noindex: false },
  },
  {
    route: '/fiksna-naknada-vs-revenue-share',
    expect: { breadcrumb: true, faq: true, article: false, blogListing: false, noindex: false },
  },
  {
    route: '/seo-optimizacija-cena',
    expect: { breadcrumb: true, faq: true, article: false, blogListing: false, routeSchema: false, noindex: false },
  },
  {
    route: '/cene-izrade-sajta',
    expect: { breadcrumb: true, faq: true, article: false, blogListing: false, routeSchema: false, noindex: false },
  },
  {
    route: '/cene-digitalnog-marketinga',
    expect: { breadcrumb: true, faq: true, article: false, blogListing: false, routeSchema: false, noindex: false },
  },
  {
    route: '/koliko-kosta-facebook-reklama',
    expect: { breadcrumb: true, faq: true, article: false, blogListing: false, routeSchema: false, noindex: false },
  },
  {
    route: '/blog/google-ads-cena-po-kliku-srbija-2026',
    expect: { breadcrumb: true, faq: false, article: true, blogListing: false, noindex: false },
  },
  {
    route: '/draft/netokracija-cro-case',
    expect: { breadcrumb: true, faq: false, article: false, blogListing: false, noindex: true },
  },
]

function hasSchema(out, id) {
  return out.includes(`id="${id}"`)
}

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

function robotsNoindex(out) {
  const m = out.match(/<meta\s+name="robots"\s+content="([^"]+)"\s*\/>/i)
  if (!m) return false
  return m[1].toLowerCase().includes('noindex')
}

const issues = []

for (const item of checks) {
  const out = injectOgMeta(htmlTemplate, item.route)

  const actual = {
    breadcrumb: hasSchema(out, 'ld-breadcrumb-server'),
    faq: hasSchema(out, 'ld-faq-server'),
    article: hasSchema(out, 'ld-article-server'),
    blogListing: hasSchema(out, 'ld-blog-list-server'),
    routeSchema: hasSchema(out, 'ld-route-schema-server'),
    org: hasSchema(out, 'ld-org-server'),
    localBusiness: hasSchema(out, 'ld-local-business-server'),
    website: hasSchema(out, 'ld-website-server'),
    noindex: robotsNoindex(out),
  }

  for (const [key, expected] of Object.entries(item.expect)) {
    if (actual[key] !== expected) {
      issues.push(`${item.route}: expected ${key}=${expected}, got ${actual[key]}`)
    }
  }

  if (!actual.org) {
    issues.push(`${item.route}: missing ld-org-server`)
  }

  if (!actual.localBusiness) {
    issues.push(`${item.route}: missing ld-local-business-server`)
  }

  if (item.route === '/' && !actual.website) {
    issues.push(`${item.route}: missing ld-website-server`)
  }

  if (item.route !== '/' && actual.website) {
    issues.push(`${item.route}: ld-website-server should only exist on homepage`)
  }

  if (actual.article) {
    const article = extractJsonLdById(out, 'ld-article-server')
    if (!article) {
      issues.push(`${item.route}: ld-article-server is not valid JSON`)
    } else {
      const image = Array.isArray(article.image) ? article.image[0] : article.image
      if (!image || typeof image !== 'string') {
        issues.push(`${item.route}: article schema missing image field`)
      } else if (!image.startsWith('https://platinumzenith.com/')) {
        issues.push(`${item.route}: article schema image must be absolute site URL (${image})`)
      }

      const publisherLogo = article?.publisher?.logo?.url
      if (!publisherLogo || typeof publisherLogo !== 'string') {
        issues.push(`${item.route}: article schema missing publisher.logo.url`)
      }
    }
  }

  if (actual.routeSchema) {
    const routeSchema = extractJsonLdById(out, 'ld-route-schema-server')
    if (!routeSchema) {
      issues.push(`${item.route}: ld-route-schema-server is not valid JSON`)
    } else {
      const routeSchemaExpectations = {
        '/alati/roi-kalkulator': { type: 'SoftwareApplication', url: 'https://platinumzenith.com/alati/roi-kalkulator' },
        '/case-studies': { type: 'CollectionPage', url: 'https://platinumzenith.com/case-studies' },
        '/digitalni-marketing': { type: 'Service', url: 'https://platinumzenith.com/digitalni-marketing' },
        '/web-design': { type: 'Service', url: 'https://platinumzenith.com/web-design' },
        '/consulting': { type: 'Service', url: 'https://platinumzenith.com/consulting' },
        '/drustvene-mreze': { type: 'Service', url: 'https://platinumzenith.com/drustvene-mreze' },
      }

      const expected = routeSchemaExpectations[item.route]
      if (expected) {
        if (routeSchema['@type'] !== expected.type) {
          issues.push(`${item.route}: expected ${expected.type} route schema`)
        }
        if (routeSchema.url !== expected.url) {
          issues.push(`${item.route}: route schema URL mismatch (${routeSchema.url})`)
        }
      }

      if (item.route === '/case-studies') {
        const list = routeSchema?.mainEntity?.itemListElement
        if (!Array.isArray(list) || list.length < 3) {
          issues.push(`${item.route}: route schema should contain at least 3 case-study list items`)
        }
      }
    }
  }

  // Ensure no duplicate server schema ids per route
  for (const id of ['ld-org-server', 'ld-local-business-server', 'ld-website-server', 'ld-route-schema-server', 'ld-breadcrumb-server', 'ld-faq-server', 'ld-article-server', 'ld-blog-list-server']) {
    const count = (out.match(new RegExp(`id="${id}"`, 'g')) || []).length
    if (count > 1) issues.push(`${item.route}: duplicate ${id} (${count})`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  checkedRoutes: checks.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-server-schema-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Server schema audit complete')
console.log(`Routes checked: ${report.checkedRoutes}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
