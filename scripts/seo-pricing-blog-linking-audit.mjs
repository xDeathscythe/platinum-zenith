import fs from 'fs'
import path from 'path'
import { blogPosts } from '../src/pages/blog/blogData.js'

const root = process.cwd()

const TARGET_SLUGS = [
  'koliko-kosta-los-marketing',
  'izrada-landing-stranice-cena-rokovi-sta-ulazi-u-cenu',
  'google-ads-cena-po-kliku-srbija-2026',
  'izrada-wordpress-sajta-cena-po-tipu-biznisa-srbija-2026',
  'cena-odrzavanja-wordpress-sajta-srbija-2026',
  'vodjenje-drustvenih-mreza-cena-srbija-2026',
]

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

const issues = []

for (const slug of TARGET_SLUGS) {
  const post = blogPosts.find((item) => item?.slug === slug && !item?.isDraft)
  if (!post) {
    issues.push(`${slug}: missing public blog post`)
    continue
  }

  const links = [...String(post.content || '').matchAll(/\]\((\/[^)]+)\)/g)].map((m) => m[1])
  const serviceHits = links.filter((link) => SERVICE_LINKS.has(link))

  if (!links.includes('/kontakt')) {
    issues.push(`${slug}: missing /kontakt CTA link`)
  }

  if (serviceHits.length < 3) {
    issues.push(`${slug}: expected at least 3 service/money links, found ${serviceHits.length}`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  postsChecked: TARGET_SLUGS.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-pricing-blog-linking-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Pricing blog linking audit complete')
console.log(`Posts checked: ${report.postsChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
