import { spawnSync } from 'node:child_process'
import path from 'node:path'

const root = process.cwd()

const phaseArg = process.argv.find((arg) => arg.startsWith('--phase='))
const phase = phaseArg ? phaseArg.split('=')[1] : 'all' // all | prebuild | postbuild

const checks = [
  { name: 'Route/OG/meta consistency', script: 'scripts/seo-audit.mjs' },
  { name: 'Route metadata hygiene (no stale route keys)', script: 'scripts/seo-route-hygiene-audit.mjs' },
  { name: 'Canonical + og:url', script: 'scripts/seo-canonical-audit.mjs' },
  { name: 'Canonical + hreflang consistency', script: 'scripts/seo-hreflang-audit.mjs' },
  { name: 'SEO redirects and legacy URL canonicalization', script: 'scripts/seo-redirect-audit.mjs', phase: 'postbuild' },
  { name: 'SEO file cache policy', script: 'scripts/seo-cache-policy-audit.mjs', phase: 'postbuild' },
  { name: 'SEO file revalidation (Last-Modified/304)', script: 'scripts/seo-file-revalidation-audit.mjs', phase: 'postbuild' },
  { name: 'X-Robots-Tag header policy', script: 'scripts/seo-xrobots-audit.mjs', phase: 'postbuild' },
  { name: 'Robots index/noindex policy', script: 'scripts/seo-robots-audit.mjs' },
  { name: 'Heading hierarchy', script: 'scripts/seo-headings-audit.mjs' },
  { name: 'Image attributes', script: 'scripts/seo-image-audit.mjs' },
  { name: 'Image alt-text quality', script: 'scripts/seo-alt-quality-audit.mjs' },
  { name: 'Internal linking', script: 'scripts/seo-links-audit.mjs' },
  { name: 'Internal link integrity (no broken internal URLs)', script: 'scripts/seo-internal-link-integrity-audit.mjs' },
  { name: 'Internal link coverage (priority pages)', script: 'scripts/seo-link-coverage-audit.mjs' },
  { name: 'Feed/Sitemap consistency', script: 'scripts/seo-feed-sitemap-audit.mjs' },
  { name: 'Image sitemap integrity', script: 'scripts/seo-image-sitemap-audit.mjs' },
  { name: 'News sitemap integrity', script: 'scripts/seo-news-sitemap-audit.mjs' },
  { name: 'Sitemap index integrity', script: 'scripts/seo-sitemap-index-audit.mjs' },
  { name: 'Sitemap URL health (every URL resolves canonical 200)', script: 'scripts/seo-sitemap-url-health-audit.mjs', phase: 'postbuild' },
  { name: 'Server-side schema injection', script: 'scripts/seo-server-schema-audit.mjs' },
  { name: 'Breadcrumb coverage (all public routes)', script: 'scripts/seo-breadcrumb-coverage-audit.mjs' },
  { name: 'JSON-LD syntax validity (all routes)', script: 'scripts/seo-jsonld-validity-audit.mjs' },
  { name: 'Open Graph image consistency', script: 'scripts/seo-og-image-audit.mjs' },
  { name: 'Open Graph/Twitter social meta consistency', script: 'scripts/seo-social-meta-audit.mjs' },
  { name: 'Article Open Graph fields (published/modified/section)', script: 'scripts/seo-article-og-audit.mjs' },
  { name: 'Blog article schema', script: 'scripts/seo-blog-schema-audit.mjs' },
  { name: 'Meta title/description quality', script: 'scripts/seo-meta-quality-audit.mjs', args: ['--strict'] },
  { name: 'Meta uniqueness (near-duplicate detection)', script: 'scripts/seo-meta-uniqueness-audit.mjs' },
  { name: 'SERP snippet width budget', script: 'scripts/seo-serp-snippet-audit.mjs', args: ['--strict'] },
  { name: 'Meta intent keyword coverage', script: 'scripts/seo-meta-intent-audit.mjs' },
  { name: 'Money page landing QA', script: 'scripts/seo-landing-qa.mjs' },
]

let hasFailure = false

const selectedChecks = checks.filter((check) => {
  const checkPhase = check.phase || 'prebuild'
  if (phase === 'all') return true
  return checkPhase === phase || checkPhase === 'all'
})

if (!['all', 'prebuild', 'postbuild'].includes(phase)) {
  console.error(`Unknown phase: ${phase}. Use --phase=all|prebuild|postbuild`)
  process.exit(1)
}

console.log(`SEO check phase: ${phase} (${selectedChecks.length} checks)`)

for (const check of selectedChecks) {
  const fullPath = path.join(root, check.script)
  const args = [fullPath, ...(check.args || [])]
  console.log(`\n▶ ${check.name}`)

  const result = spawnSync(process.execPath, args, {
    stdio: 'inherit',
    env: process.env,
  })

  if (result.status !== 0) {
    hasFailure = true
    console.error(`✗ Failed: ${check.name}`)
  } else {
    console.log(`✓ Passed: ${check.name}`)
  }
}

if (hasFailure) {
  console.error('\nSEO check suite failed. Inspect reports above and fix issues.')
  process.exit(1)
}

console.log('\nAll SEO checks passed ✅')
