import fs from 'fs'
import path from 'path'
import { injectOgMeta } from '../server/ogMeta.js'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()
const htmlPath = path.join(root, 'index.html')
const htmlTemplate = fs.readFileSync(htmlPath, 'utf8')
const SITE_URL = 'https://platinumzenith.com'

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

function isIsoDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(String(value || ''))
}

function parseLocalDate(value) {
  const d = new Date(`${value}T00:00:00+01:00`)
  return Number.isNaN(d.getTime()) ? NaN : d.getTime()
}

const out = injectOgMeta(htmlTemplate, '/blog')
const schema = extractJsonLdById(out, 'ld-blog-list-server')

const issues = []

if (!schema) {
  issues.push('/blog: missing or invalid ld-blog-list-server JSON')
} else {
  if (schema['@type'] !== 'Blog') {
    issues.push(`/blog: ld-blog-list-server must be Blog (got ${schema['@type'] || 'missing'})`)
  }

  if (schema.url !== `${SITE_URL}/blog`) {
    issues.push(`/blog: Blog.url mismatch (expected ${SITE_URL}/blog, got ${schema.url || 'missing'})`)
  }

  if (schema.inLanguage !== 'sr-RS') {
    issues.push(`/blog: Blog.inLanguage must be sr-RS (got ${schema.inLanguage || 'missing'})`)
  }

  const posts = Array.isArray(schema.blogPost) ? schema.blogPost : []
  if (posts.length === 0) {
    issues.push('/blog: blogPost array is empty')
  }
  if (posts.length > 30) {
    issues.push(`/blog: blogPost array exceeds 30 entries (${posts.length})`)
  }

  const seenUrls = new Set()
  const seenSlugs = new Set()
  const datedEntries = []

  for (let i = 0; i < posts.length; i += 1) {
    const item = posts[i] || {}
    const idx = i + 1

    if (item['@type'] !== 'BlogPosting') {
      issues.push(`/blog: blogPost #${idx} must be BlogPosting`)
    }

    if (!item.headline || String(item.headline).trim().length < 12) {
      issues.push(`/blog: blogPost #${idx} missing/short headline`)
    }

    if (!item.url || !String(item.url).startsWith(`${SITE_URL}/blog/`)) {
      issues.push(`/blog: blogPost #${idx} has invalid URL (${item.url || 'missing'})`)
    } else {
      if (item.url.includes('/draft/')) {
        issues.push(`/blog: blogPost #${idx} URL references draft path (${item.url})`)
      }

      if (seenUrls.has(item.url)) {
        issues.push(`/blog: duplicate blogPost URL (${item.url})`)
      }
      seenUrls.add(item.url)

      const slug = item.url.replace(`${SITE_URL}/blog/`, '')
      if (seenSlugs.has(slug)) {
        issues.push(`/blog: duplicate blogPost slug (${slug})`)
      }
      seenSlugs.add(slug)
    }

    if (item.author?.['@type'] !== 'Person' || !item.author?.name) {
      issues.push(`/blog: blogPost #${idx} missing valid author Person`)
    }

    if (item.datePublished && !isIsoDate(item.datePublished)) {
      issues.push(`/blog: blogPost #${idx} invalid datePublished (${item.datePublished})`)
    }
    if (item.dateModified && !isIsoDate(item.dateModified)) {
      issues.push(`/blog: blogPost #${idx} invalid dateModified (${item.dateModified})`)
    }
    if (item.datePublished && item.dateModified && item.datePublished !== item.dateModified) {
      issues.push(`/blog: blogPost #${idx} datePublished/dateModified mismatch`)
    }

    if (item.datePublished && isIsoDate(item.datePublished)) {
      datedEntries.push({ idx, ts: parseLocalDate(item.datePublished), date: item.datePublished })
    }
  }

  for (let i = 1; i < datedEntries.length; i += 1) {
    if (datedEntries[i].ts > datedEntries[i - 1].ts) {
      issues.push(`/blog: blogPost date order is not descending near positions ${datedEntries[i - 1].idx} and ${datedEntries[i].idx}`)
      break
    }
  }

  const publicPostsBySlug = new Map(
    [...new Map(
      blogPosts
        .filter((post) => post?.slug && !post?.isDraft)
        .map((post) => [post.slug, post]),
    ).values()].map((post) => [post.slug, post]),
  )

  const actualSlugs = posts
    .map((item) => String(item?.url || ''))
    .filter((url) => url.startsWith(`${SITE_URL}/blog/`))
    .map((url) => url.replace(`${SITE_URL}/blog/`, ''))

  if (actualSlugs.length === 0) {
    issues.push('/blog: blog listing schema has no valid /blog/<slug> URLs')
  }

  for (const slug of actualSlugs) {
    if (!publicPostsBySlug.has(slug)) {
      issues.push(`/blog: schema includes slug that is not a public blog post (${slug})`)
    }
  }

  const includedDateTimestamps = actualSlugs
    .map((slug) => parseLocalDate(publicPostsBySlug.get(slug)?.date || ''))
    .filter((ts) => !Number.isNaN(ts))

  if (includedDateTimestamps.length > 0) {
    const oldestIncluded = Math.min(...includedDateTimestamps)

    const missingNewerPosts = [...publicPostsBySlug.values()].filter((post) => {
      if (actualSlugs.includes(post.slug)) return false
      const ts = parseLocalDate(post.date || '')
      if (Number.isNaN(ts)) return false
      return ts > oldestIncluded
    })

    if (missingNewerPosts.length > 0) {
      issues.push(`/blog: listing schema is missing newer public posts (example: ${missingNewerPosts[0].slug})`)
    }
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-blog-listing-schema-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Blog listing schema audit complete')
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
