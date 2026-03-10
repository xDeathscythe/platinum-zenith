import fs from 'fs'
import path from 'path'
import { pageMeta } from '../src/hooks/pageMetaData.js'
import { blogPosts } from '../src/pages/blog/blogData.js'

const SITE_URL = 'https://platinumzenith.com'
const today = new Date().toISOString().slice(0, 10)

const root = process.cwd()
const appPath = path.join(root, 'src', 'App.jsx')

const INTERNAL_EXCLUDE = new Set([
  '/dashboard',
  '/prijave',
  '/poruke',
  '/newsletter',
  '/emails',
  '/analytics',
  '/log',
])

const LEGAL_PATHS = new Set([
  '/uslovi-koriscenja',
  '/uslovi-kupovine',
  '/nacin-placanja',
  '/dostava',
  '/politika-privatnosti',
])

const HIGH_PRIORITY_PATHS = new Set([
  '/web-design',
  '/digitalni-marketing',
  '/consulting',
  '/cro',
  '/drustvene-mreze',
  '/marketing-agencija-beograd',
  '/seo-optimizacija-cena',
  '/marketing-agencija-zrenjanin',
  '/cene-izrade-sajta',
  '/agencija-vs-freelancer',
  '/cene-digitalnog-marketinga',
  '/marketing-agencija-novi-sad',
  '/koliko-kosta-facebook-reklama',
  '/google-reklame-cena',
  '/instagram-reklame-cena',
  '/izrada-wordpress-sajta-cena',
  '/marketing-za-advokate',
  '/marketing-za-stomatologe',
  '/marketing-za-restorane',
  '/in-house-tim-vs-agencija',
  '/fiksna-naknada-vs-revenue-share',
  '/facebook-oglasi-ne-rade',
  '/web-shop-nema-prodaju',
])

function xmlEscape(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function normalize(pathname) {
  if (!pathname) return '/'
  if (pathname === '/') return '/'
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
}

function getPriority(pathname, isBlogPost = false) {
  if (pathname === '/') return '1.0'
  if (pathname === '/blog') return '0.8'
  if (LEGAL_PATHS.has(pathname)) return pathname === '/uslovi-koriscenja' || pathname === '/politika-privatnosti' ? '0.3' : '0.4'
  if (isBlogPost) return '0.7'
  if (HIGH_PRIORITY_PATHS.has(pathname)) return '0.9'
  if (pathname.startsWith('/industrije/')) return '0.7'
  if (pathname.startsWith('/alati/')) return '0.8'
  return '0.7'
}

function getChangefreq(pathname, isBlogPost = false) {
  if (pathname === '/') return 'weekly'
  if (pathname === '/blog') return 'weekly'
  if (LEGAL_PATHS.has(pathname)) return 'yearly'
  if (isBlogPost) return 'monthly'
  return 'monthly'
}

function createUrl(loc, lastmod, changefreq, priority) {
  return `  <url><loc>${xmlEscape(loc)}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`
}

function parseComponentImportMap(appText) {
  const map = new Map()

  const lazyRe = /const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\('([^']+)'\)\)/g
  for (const match of appText.matchAll(lazyRe)) {
    map.set(match[1], match[2])
  }

  const staticRe = /import\s+(\w+)\s+from\s+'([^']+)'/g
  for (const match of appText.matchAll(staticRe)) {
    map.set(match[1], match[2])
  }

  return map
}

function parseRouteComponentMap(appText) {
  const map = new Map()
  const routeRe = /<Route\s+path="([^"]+)"\s+element=\{<([A-Za-z0-9_]+)\s*\/>\}/g

  for (const match of appText.matchAll(routeRe)) {
    const route = normalize(match[1].startsWith('/') ? match[1] : `/${match[1]}`)
    const componentName = match[2]
    if (!route.includes(':') && !route.includes('*')) {
      map.set(route, componentName)
    }
  }

  return map
}

function resolveComponentFile(importPath) {
  if (!importPath || !importPath.startsWith('./')) return null

  const rel = importPath.replace(/^\.\//, '')
  const candidates = [
    path.join(root, 'src', `${rel}.jsx`),
    path.join(root, 'src', `${rel}.js`),
  ]

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate
  }

  return null
}

function toDateOnlyFromMtime(filePath) {
  if (!filePath) return today
  try {
    const mtime = fs.statSync(filePath).mtime
    return mtime.toISOString().slice(0, 10)
  } catch {
    return today
  }
}

function buildStaticRouteLastmodMap() {
  const appText = fs.readFileSync(appPath, 'utf8')
  const importMap = parseComponentImportMap(appText)
  const routeComponentMap = parseRouteComponentMap(appText)

  const routeLastmodMap = new Map()
  for (const [route, componentName] of routeComponentMap.entries()) {
    const importPath = importMap.get(componentName)
    const filePath = resolveComponentFile(importPath)
    routeLastmodMap.set(route, toDateOnlyFromMtime(filePath))
  }

  return routeLastmodMap
}

const routeLastmodMap = buildStaticRouteLastmodMap()

const staticRoutes = Object.keys(pageMeta)
  .map(normalize)
  .filter((route) => !INTERNAL_EXCLUDE.has(route) && !route.startsWith('/draft/'))

const uniqueStaticRoutes = [...new Set(staticRoutes)]

const staticUrls = uniqueStaticRoutes
  .sort((a, b) => a.localeCompare(b))
  .map((route) => createUrl(
    `${SITE_URL}${route === '/' ? '' : route}`,
    routeLastmodMap.get(route) || today,
    getChangefreq(route),
    getPriority(route),
  ))

const uniqueBlogPosts = [...new Map(
  blogPosts
    .filter((post) => post?.slug && !post?.isDraft)
    .map((post) => [post.slug, post]),
).values()]

const blogUrls = uniqueBlogPosts
  .sort((a, b) => a.slug.localeCompare(b.slug))
  .map((post) => {
    const lastmod = /^\d{4}-\d{2}-\d{2}$/.test(post.date) ? post.date : today
    return createUrl(
      `${SITE_URL}/blog/${post.slug}`,
      lastmod,
      getChangefreq('/blog/:slug', true),
      getPriority('/blog/:slug', true),
    )
  })

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  '  <!-- Auto-generated by scripts/gen-sitemap.mjs -->',
  `  <!-- Static routes: ${staticUrls.length} -->`,
  ...staticUrls,
  `  <!-- Blog posts: ${blogUrls.length} -->`,
  ...blogUrls,
  '</urlset>',
  '',
].join('\n')

const outPath = path.join(process.cwd(), 'public', 'sitemap.xml')
fs.writeFileSync(outPath, xml, 'utf8')

console.log(`Generated sitemap: ${outPath}`)
console.log(`Static routes: ${staticUrls.length}`)
console.log(`Blog posts: ${blogUrls.length}`)
console.log(`Total URLs: ${staticUrls.length + blogUrls.length}`)