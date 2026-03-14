import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const root = process.cwd()
const sitemapPath = path.join(root, 'public', 'sitemap.xml')
const SITE_URL = 'https://platinumzenith.com'

const ROUTE_FILE_MAP = {
  '/google-reklame-cena': 'src/pages/GoogleReklameCenaPage.jsx',
  '/instagram-reklame-cena': 'src/pages/InstagramReklameCenaPage.jsx',
  '/izrada-wordpress-sajta-cena': 'src/pages/IzradaWordpressSajtaCenaPage.jsx',
  '/cene-izrade-sajta': 'src/pages/CeneIzradeSajtaPage.jsx',
  '/cene-digitalnog-marketinga': 'src/pages/CeneDigitalnogMarketingaPage.jsx',
  '/seo-optimizacija-cena': 'src/pages/SeoOptimizacijaCenaPage.jsx',
  '/koliko-kosta-facebook-reklama': 'src/pages/KolikoKostaFacebookReklamaPage.jsx',
  '/marketing-agencija-beograd': 'src/pages/MarketingAgencijaBgPage.jsx',
  '/marketing-agencija-zrenjanin': 'src/pages/MarketingAgencijaZrenjaninPage.jsx',
  '/marketing-agencija-novi-sad': 'src/pages/MarketingAgencijaNsPage.jsx',
  '/agencija-vs-freelancer': 'src/pages/AgencijaVsFreelancerPage.jsx',
  '/in-house-tim-vs-agencija': 'src/pages/InHouseVsAgencijaPage.jsx',
  '/fiksna-naknada-vs-revenue-share': 'src/pages/FiksnaNaknadaVsRevenueSharePage.jsx',
}

const sitemapXml = fs.readFileSync(sitemapPath, 'utf8')
const issues = []
const checks = []

function getSitemapLastmod(route) {
  const pattern = new RegExp(`<loc>${SITE_URL}${route}</loc>\\s*<lastmod>([^<]+)</lastmod>`, 'i')
  return sitemapXml.match(pattern)?.[1] || ''
}

function getGitLastCommitDate(file) {
  try {
    return execSync(`git log -1 --format=%cs -- "${file}"`, {
      cwd: root,
      stdio: ['ignore', 'pipe', 'ignore'],
      encoding: 'utf8',
    }).trim()
  } catch {
    return ''
  }
}

for (const [route, file] of Object.entries(ROUTE_FILE_MAP)) {
  const sitemapLastmod = getSitemapLastmod(route)
  const gitLastmod = getGitLastCommitDate(file)

  if (!sitemapLastmod) {
    issues.push(`${route}: missing sitemap lastmod entry`)
    continue
  }

  if (!gitLastmod) {
    issues.push(`${route}: missing git last commit date for ${file}`)
    continue
  }

  checks.push({ route, file, sitemapLastmod, gitLastmod })

  if (sitemapLastmod < gitLastmod) {
    issues.push(`${route}: sitemap lastmod ${sitemapLastmod} is older than latest page commit ${gitLastmod}`)
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  routesChecked: Object.keys(ROUTE_FILE_MAP).length,
  issueCount: issues.length,
  checks,
  issues,
}

const reportPath = path.join(root, 'seo-sitemap-freshness-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Sitemap freshness audit complete')
console.log(`Routes checked: ${report.routesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
