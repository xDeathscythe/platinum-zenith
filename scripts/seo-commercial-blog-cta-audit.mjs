import fs from 'fs'
import path from 'path'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()

const uniquePosts = [...new Map(
  blogPosts
    .filter((post) => post?.slug && !post?.isDraft)
    .map((post) => [post.slug, post]),
).values()]

const SERVICE_LINKS = new Set([
  '/google-reklame-cena',
  '/instagram-reklame-cena',
  '/izrada-wordpress-sajta-cena',
  '/cene-digitalnog-marketinga',
  '/seo-optimizacija-cena',
  '/koliko-kosta-facebook-reklama',
  '/digitalni-marketing',
  '/drustvene-mreze',
  '/consulting',
  '/cro',
  '/web-design',
  '/kontakt',
])

function isCommercialIntent(post) {
  const hay = `${post.slug || ''} ${post.title || ''}`.toLowerCase()
  return /cena|kosta|ads|seo|marketing|wordpress|landing|lead|prodaj|klijent|budzet|reklam/.test(hay)
}

const issues = []
const checked = []

for (const post of uniquePosts.filter(isCommercialIntent)) {
  const route = `/blog/${post.slug}`
  const links = [...String(post.content || '').matchAll(/\]\((\/[^)]+)\)/g)].map((m) => m[1])
  const serviceHits = links.filter((link) => SERVICE_LINKS.has(link))
  const hasKontakt = links.includes('/kontakt')

  checked.push({
    route,
    serviceHits: serviceHits.length,
    hasKontakt,
  })

  if (serviceHits.length < 2) {
    issues.push(`${route}: expected at least 2 service/money links, found ${serviceHits.length}`)
  }

  if (!hasKontakt) {
    issues.push(`${route}: missing /kontakt CTA link`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  postsChecked: checked.length,
  issueCount: issues.length,
  checked,
  issues,
}

const reportPath = path.join(root, 'seo-commercial-blog-cta-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Commercial blog CTA audit complete')
console.log(`Posts checked: ${report.postsChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
