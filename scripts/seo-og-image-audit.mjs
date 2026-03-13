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

function toPublicAssetPath(siteUrl) {
  if (!siteUrl || !siteUrl.startsWith(`${SITE_URL}/`)) return ''
  const relative = siteUrl.replace(SITE_URL, '')
  return path.join(root, 'public', relative.replace(/^\//, ''))
}

const appText = read(appPath)
const htmlTemplate = read(htmlPath)

const staticRoutes = parseStaticRoutes(appText)
const routes = new Set(staticRoutes)

const uniquePublicPosts = [...new Map(
  blogPosts
    .filter((post) => post?.slug && !post?.isDraft)
    .map((post) => [post.slug, post]),
).values()]

const uniqueDraftPosts = [...new Map(
  blogPosts
    .filter((post) => post?.slug && post?.isDraft)
    .map((post) => [post.slug, post]),
).values()]

for (const post of uniquePublicPosts) routes.add(`/blog/${post.slug}`)
for (const post of uniqueDraftPosts) routes.add(`/draft/${post.slug}`)

const expectedCustomImage = {
  '/google-reklame-cena': `${SITE_URL}/pz-og.jpg`,
  '/instagram-reklame-cena': `${SITE_URL}/pz-og.jpg`,
  '/izrada-wordpress-sajta-cena': `${SITE_URL}/pz-og.jpg`,
  '/koliko-kosta-facebook-reklama': `${SITE_URL}/pz-og.jpg`,
  '/seo-optimizacija-cena': `${SITE_URL}/pz-og.jpg`,
  '/cene-izrade-sajta': `${SITE_URL}/pz-og.jpg`,
  '/cene-digitalnog-marketinga': `${SITE_URL}/pz-og.jpg`,
  '/marketing-agencija-beograd': `${SITE_URL}/pz-og.jpg`,
  '/marketing-agencija-zrenjanin': `${SITE_URL}/pz-og.jpg`,
  '/marketing-agencija-novi-sad': `${SITE_URL}/pz-og.jpg`,
  '/facebook-oglasi-ne-rade': `${SITE_URL}/pz-og.jpg`,
  '/web-shop-nema-prodaju': `${SITE_URL}/pz-og.jpg`,
}

const expectedCustomAlt = {
  '/google-reklame-cena': 'Google reklame cena u Srbiji 2026 - vodič Platinum Zenith',
  '/instagram-reklame-cena': 'Instagram reklame cena u Srbiji 2026 - vodič Platinum Zenith',
  '/izrada-wordpress-sajta-cena': 'Izrada WordPress sajta cena u Srbiji 2026 - vodič Platinum Zenith',
  '/koliko-kosta-facebook-reklama': 'Koliko košta Facebook reklama u Srbiji - vodič kroz troškove',
  '/seo-optimizacija-cena': 'SEO optimizacija cena u Srbiji 2026 - vodič kroz pakete',
  '/cene-izrade-sajta': 'Koliko košta izrada sajta u Srbiji - cenovni vodič 2026',
  '/cene-digitalnog-marketinga': 'Cene digitalnog marketinga u Srbiji 2026 - pregled usluga',
  '/marketing-agencija-beograd': 'Marketing agencija Beograd - SEO i oglasi za rast upita',
  '/marketing-agencija-zrenjanin': 'Marketing agencija Zrenjanin - lokalni rast kroz SEO i oglase',
  '/marketing-agencija-novi-sad': 'Marketing agencija Novi Sad - SEO i PPC za stabilan rast',
  '/facebook-oglasi-ne-rade': 'Facebook oglasi ne rade - 6 razloga i plan popravke kampanje',
  '/web-shop-nema-prodaju': 'Web shop nema prodaju - dijagnostika i koraci za rast konverzije',
}

const issues = []

for (const route of routes) {
  const out = injectOgMeta(htmlTemplate, route)

  const ogImage = extractMeta(out, /<meta\s+property="og:image"\s+content="([^"]+)"\s*\/>/i)
  const ogImageAlt = extractMeta(out, /<meta\s+property="og:image:alt"\s+content="([^"]+)"\s*\/>/i)
  const twImage = extractMeta(out, /<meta\s+name="twitter:image"\s+content="([^"]+)"\s*\/>/i)
  const twImageAlt = extractMeta(out, /<meta\s+name="twitter:image:alt"\s+content="([^"]+)"\s*\/>/i)

  if (!ogImage) issues.push(`${route}: missing og:image`)
  if (!twImage) issues.push(`${route}: missing twitter:image`)
  if (!ogImageAlt) issues.push(`${route}: missing og:image:alt`)
  if (!twImageAlt) issues.push(`${route}: missing twitter:image:alt`)

  if (ogImage && !ogImage.startsWith(`${SITE_URL}/`)) {
    issues.push(`${route}: og:image must be absolute site URL (${ogImage})`)
  }

  if (twImage && !twImage.startsWith(`${SITE_URL}/`)) {
    issues.push(`${route}: twitter:image must be absolute site URL (${twImage})`)
  }

  if (ogImage && twImage && ogImage !== twImage) {
    issues.push(`${route}: twitter:image differs from og:image`)
  }

  if (ogImageAlt && twImageAlt && ogImageAlt !== twImageAlt) {
    issues.push(`${route}: twitter:image:alt differs from og:image:alt`)
  }

  if (expectedCustomImage[route] && ogImage !== expectedCustomImage[route]) {
    issues.push(`${route}: expected custom og:image ${expectedCustomImage[route]}, got ${ogImage}`)
  }

  if (expectedCustomAlt[route] && ogImageAlt !== expectedCustomAlt[route]) {
    issues.push(`${route}: expected custom og:image:alt "${expectedCustomAlt[route]}", got "${ogImageAlt}"`)
  }

  if (ogImage) {
    const publicAsset = toPublicAssetPath(ogImage)
    if (!publicAsset || !fs.existsSync(publicAsset)) {
      issues.push(`${route}: og:image points to missing public asset (${ogImage})`)
    }
  }

  if (twImage) {
    const publicAsset = toPublicAssetPath(twImage)
    if (!publicAsset || !fs.existsSync(publicAsset)) {
      issues.push(`${route}: twitter:image points to missing public asset (${twImage})`)
    }
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
