import fs from 'fs'
import path from 'path'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()
const issues = []

const COMMERICIAL_ROUTES = new Set([
  '/kontakt',
  '/consulting',
  '/drustvene-mreze',
  '/seo-optimizacija',
  '/digitalni-marketing',
  '/web-design',
  '/cro',
  '/cene-izrade-sajta',
  '/agencija-vs-freelancer',
  '/marketing-agencija-zrenjanin',
  '/cene-digitalnog-marketinga',
  '/seo-optimizacija-cena',
  '/koliko-kosta-facebook-reklama',
  '/marketing-agencija-beograd',
  '/marketing-agencija-novi-sad',
  '/facebook-oglasi-ne-rade',
  '/web-shop-nema-prodaju',
  '/fiksna-naknada-vs-revenue-share',
  '/in-house-tim-vs-agencija',
  '/marketing-za-restorane',
  '/marketing-za-stomatologe',
  '/marketing-za-advokate',
  '/google-reklame-cena',
  '/instagram-reklame-cena',
  '/izrada-wordpress-sajta-cena'
])

let checked = 0;

for (const post of blogPosts) {
  if (post.isDraft) continue;
  checked++;
  const content = post.content || ''
  
  const links = [...content.matchAll(/\]\(([^)]+)\)/g)].map(m => m[1])
  const internalLinks = links.filter(l => l.startsWith('/'))
  
  if (internalLinks.length < 2) {
    issues.push(`${post.slug}: expected at least 2 internal links, found ${internalLinks.length}`)
  }
  
  const commercialLinks = internalLinks.filter(l => COMMERICIAL_ROUTES.has(l) || l.startsWith('/kontakt'))
  
  if (commercialLinks.length === 0) {
    issues.push(`${post.slug}: missing commercial/service CTA link (e.g. /kontakt)`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  postsChecked: checked,
  issueCount: issues.length,
  issues
}

const reportPath = path.join(root, 'seo-blog-crosslinking-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Blog crosslinking audit complete')
console.log(`Posts checked: ${report.postsChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
