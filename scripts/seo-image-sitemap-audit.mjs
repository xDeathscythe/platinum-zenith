import fs from 'fs'
import path from 'path'

const root = process.cwd()
const robotsPath = path.join(root, 'public', 'robots.txt')
const imageSitemapPath = path.join(root, 'public', 'sitemap-images.xml')

const issues = []

if (!fs.existsSync(imageSitemapPath)) {
  issues.push('Missing public/sitemap-images.xml')
} else {
  const xml = fs.readFileSync(imageSitemapPath, 'utf8')

  if (!xml.includes('xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"')) {
    issues.push('sitemap-images.xml missing image namespace')
  }

  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
  const imageLocs = [...xml.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)].map((m) => m[1].trim())

  if (locs.length === 0) issues.push('sitemap-images.xml has no <loc> entries')
  if (imageLocs.length === 0) issues.push('sitemap-images.xml has no <image:loc> entries')

  if (locs.length !== imageLocs.length) {
    issues.push(`sitemap-images.xml loc/image count mismatch (${locs.length} vs ${imageLocs.length})`)
  }

  if (locs.some((loc) => loc.includes('/draft/'))) {
    issues.push('sitemap-images.xml contains draft URLs')
  }

  for (const imageUrl of imageLocs) {
    if (!imageUrl.startsWith('https://platinumzenith.com/')) {
      issues.push(`image URL must be absolute site URL: ${imageUrl}`)
      break
    }
  }
}

if (!fs.existsSync(robotsPath)) {
  issues.push('Missing public/robots.txt')
} else {
  const robots = fs.readFileSync(robotsPath, 'utf8')
  const hasDirectImageSitemap = robots.includes('Sitemap: https://platinumzenith.com/sitemap-images.xml')
  const hasSitemapIndex = robots.includes('Sitemap: https://platinumzenith.com/sitemap-index.xml')

  if (!hasDirectImageSitemap && !hasSitemapIndex) {
    issues.push('robots.txt missing sitemap-images.xml declaration (directly or via sitemap-index.xml)')
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-image-sitemap-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Image sitemap audit complete')
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
