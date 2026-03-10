import fs from 'fs'
import path from 'path'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()
const appPath = path.join(root, 'src', 'App.jsx')
const srcPath = path.join(root, 'src')

function read(file) {
  return fs.readFileSync(file, 'utf8')
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(full)
    return full
  })
}

function normalizeRoute(route) {
  if (!route) return '/'
  const withSlash = route.startsWith('/') ? route : `/${route}`
  const noHash = withSlash.split('#')[0]
  const noQuery = noHash.split('?')[0]
  if (noQuery === '/') return '/'
  return noQuery.replace(/\/+$/, '')
}

function parseAppRoutes(appText) {
  const routes = [...appText.matchAll(/<Route\s+path="([^"]+)"/g)]
    .map((m) => normalizeRoute(m[1]))
    .filter((r) => !r.includes('*'))

  const staticRoutes = new Set()
  for (const route of routes) {
    if (!route.includes(':')) staticRoutes.add(route)
  }

  // Expand dynamic blog routes from blogData slugs
  if (routes.includes('/blog/:slug')) {
    for (const post of blogPosts.filter((p) => p?.slug && !p?.isDraft)) {
      staticRoutes.add(`/blog/${post.slug}`)
    }
  }

  if (routes.includes('/draft/:slug')) {
    for (const post of blogPosts.filter((p) => p?.slug && p?.isDraft)) {
      staticRoutes.add(`/draft/${post.slug}`)
    }
  }

  return staticRoutes
}

function collectInternalLinks(files) {
  const links = []

  for (const file of files) {
    const text = read(file)

    // JSX links: <Link to="/...">
    for (const m of text.matchAll(/<Link\s+to="([^"]+)"/g)) {
      const raw = m[1]
      if (!raw.startsWith('/')) continue
      links.push({ from: path.relative(root, file), raw, route: normalizeRoute(raw), kind: 'jsx' })
    }

    // Markdown links in blog content: [text](/...)
    for (const m of text.matchAll(/\[[^\]]+\]\((\/[^)]+)\)/g)) {
      const raw = m[1]
      if (!raw.startsWith('/')) continue
      links.push({ from: path.relative(root, file), raw, route: normalizeRoute(raw), kind: 'markdown' })
    }
  }

  return links
}

const appText = read(appPath)
const validRoutes = parseAppRoutes(appText)

const files = walk(srcPath).filter((f) => /\.(js|jsx)$/.test(f))
const internalLinks = collectInternalLinks(files)

const issues = []
for (const link of internalLinks) {
  if (!validRoutes.has(link.route)) {
    issues.push(`${link.from}: broken ${link.kind} internal link ${link.raw}`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  validRoutes: validRoutes.size,
  linksChecked: internalLinks.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-internal-link-integrity-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Internal link integrity audit complete')
console.log(`Valid routes: ${report.validRoutes}`)
console.log(`Links checked: ${report.linksChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nBroken links:')
  issues.slice(0, 100).forEach((issue) => console.log(`- ${issue}`))
  if (issues.length > 100) console.log(`... +${issues.length - 100} more`)
  process.exitCode = 1
}
