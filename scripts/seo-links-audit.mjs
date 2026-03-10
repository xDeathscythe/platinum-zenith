import fs from 'fs'
import path from 'path'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()

const MONEY_PAGE_FILES = [
  { route: '/google-reklame-cena', file: 'src/pages/GoogleReklameCenaPage.jsx' },
  { route: '/instagram-reklame-cena', file: 'src/pages/InstagramReklameCenaPage.jsx' },
  { route: '/izrada-wordpress-sajta-cena', file: 'src/pages/IzradaWordpressSajtaCenaPage.jsx' },
]

function getMarkdownInternalLinks(text) {
  if (!text) return []
  return [...text.matchAll(/\[[^\]]+\]\((\/[^)]+)\)/g)]
    .map((m) => m[1])
    .filter((u) => u.startsWith('/'))
}

function getJsxLinks(text) {
  if (!text) return []
  return [...text.matchAll(/<Link\s+to="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((u) => u.startsWith('/'))
}

function uniq(arr) {
  return [...new Set(arr)]
}

const blogIssues = []
const blogChecks = []

for (const post of blogPosts.filter(Boolean)) {
  const links = uniq(getMarkdownInternalLinks(post.content))
  const hasNonBlogLink = links.some((u) => !u.startsWith('/blog/') && !u.startsWith('/draft/'))

  const issues = []
  if (links.length < 3) issues.push(`internal-links-lt-3 (${links.length})`)
  if (!hasNonBlogLink) issues.push('missing-non-blog-link')

  blogChecks.push({ slug: post.slug, internalLinks: links.length, hasNonBlogLink, issues })
  if (issues.length > 0) blogIssues.push({ slug: post.slug, issues })
}

const moneyIssues = []
const moneyChecks = []

for (const page of MONEY_PAGE_FILES) {
  const abs = path.join(root, page.file)
  const text = fs.readFileSync(abs, 'utf8')
  const links = uniq(getJsxLinks(text))

  const hasKontakt = links.includes('/kontakt')
  const hasBlog = links.some((u) => u.startsWith('/blog/'))

  const issues = []
  if (links.length < 3) issues.push(`internal-links-lt-3 (${links.length})`)
  if (!hasKontakt) issues.push('missing-kontakt-link')
  if (!hasBlog) issues.push('missing-blog-link')

  moneyChecks.push({ route: page.route, internalLinks: links.length, hasKontakt, hasBlog, issues })
  if (issues.length > 0) moneyIssues.push({ route: page.route, issues })
}

const report = {
  generatedAt: new Date().toISOString(),
  blogPostsChecked: blogChecks.length,
  moneyPagesChecked: moneyChecks.length,
  totalIssues: blogIssues.length + moneyIssues.length,
  blogIssues,
  moneyIssues,
}

const reportPath = path.join(root, 'seo-links-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Internal linking audit complete')
console.log(`Blog posts checked: ${report.blogPostsChecked}`)
console.log(`Money pages checked: ${report.moneyPagesChecked}`)
console.log(`Issues: ${report.totalIssues}`)
console.log(`Report: ${reportPath}`)

if (report.totalIssues > 0) {
  if (blogIssues.length > 0) {
    console.log('\nBlog issues:')
    for (const issue of blogIssues) console.log(`- ${issue.slug}: ${issue.issues.join(', ')}`)
  }
  if (moneyIssues.length > 0) {
    console.log('\nMoney page issues:')
    for (const issue of moneyIssues) console.log(`- ${issue.route}: ${issue.issues.join(', ')}`)
  }
  process.exitCode = 1
}
