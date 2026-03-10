import fs from 'fs'
import path from 'path'
import { injectOgMeta } from '../server/ogMeta.js'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()
const appPath = path.join(root, 'src', 'App.jsx')
const htmlPath = path.join(root, 'index.html')

const SITE_URL = 'https://platinumzenith.com'

function read(file) {
  return fs.readFileSync(file, 'utf8')
}

function parseStaticRoutes(appText) {
  return [...appText.matchAll(/<Route\s+path="([^"]+)"/g)]
    .map((m) => {
      const raw = m[1]
      return raw.startsWith('/') ? raw : `/${raw}`
    })
    .filter((route) => !route.includes(':') && !route.includes('*'))
}

function extractMeta(html, pattern) {
  const m = html.match(pattern)
  return m ? m[1] : ''
}

const appText = read(appPath)
const htmlTemplate = read(htmlPath)

const staticRoutes = parseStaticRoutes(appText)
const routes = new Set(staticRoutes)

const firstPublicPost = blogPosts.find((p) => p?.slug && !p?.isDraft)
if (firstPublicPost) routes.add(`/blog/${firstPublicPost.slug}`)

const firstDraftPost = blogPosts.find((p) => p?.slug && p?.isDraft)
if (firstDraftPost) routes.add(`/draft/${firstDraftPost.slug}`)

const expectedCustomImage = {
  '/google-reklame-cena': `${SITE_URL}/pz-og.jpg`,
  '/instagram-reklame-cena': `${SITE_URL}/pz-og.jpg`,
  '/izrada-wordpress-sajta-cena': `${SITE_URL}/pz-og.jpg`,
}

const issues = []

for (const route of routes) {
  const out = injectOgMeta(htmlTemplate, route)

  const ogImage = extractMeta(out, /<meta\s+property="og:image"\s+content="([^"]+)"\s*\/>/i)
  const ogImageAlt = extractMeta(out, /<meta\s+property="og:image:alt"\s+content="([^"]+)"\s*\/>/i)
  const twImage = extractMeta(out, /<meta\s+name="twitter:image"\s+content="([^"]+)"\s*\/>/i)

  if (!ogImage) issues.push(`${route}: missing og:image`)
  if (!twImage) issues.push(`${route}: missing twitter:image`)
  if (!ogImageAlt) issues.push(`${route}: missing og:image:alt`)

  if (ogImage && !ogImage.startsWith(`${SITE_URL}/`)) {
    issues.push(`${route}: og:image must be absolute site URL (${ogImage})`)
  }

  if (twImage && !twImage.startsWith(`${SITE_URL}/`)) {
    issues.push(`${route}: twitter:image must be absolute site URL (${twImage})`)
  }

  if (ogImage && twImage && ogImage !== twImage) {
    issues.push(`${route}: twitter:image differs from og:image`)
  }

  if (expectedCustomImage[route] && ogImage !== expectedCustomImage[route]) {
    issues.push(`${route}: expected custom og:image ${expectedCustomImage[route]}, got ${ogImage}`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  checkedRoutes: routes.size,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-og-image-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('OG image audit complete')
console.log(`Routes checked: ${report.checkedRoutes}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
