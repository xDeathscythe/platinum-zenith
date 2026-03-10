import { spawnSync } from 'node:child_process'
import path from 'node:path'

const root = process.cwd()

const checks = [
  { name: 'Route/OG/meta consistency', script: 'scripts/seo-audit.mjs' },
  { name: 'Canonical + og:url', script: 'scripts/seo-canonical-audit.mjs' },
  { name: 'Heading hierarchy', script: 'scripts/seo-headings-audit.mjs' },
  { name: 'Image attributes', script: 'scripts/seo-image-audit.mjs' },
  { name: 'Internal linking', script: 'scripts/seo-links-audit.mjs' },
  { name: 'Blog article schema', script: 'scripts/seo-blog-schema-audit.mjs' },
  { name: 'Meta title/description quality', script: 'scripts/seo-meta-quality-audit.mjs' },
  { name: 'Money page landing QA', script: 'scripts/seo-landing-qa.mjs' },
]

let hasFailure = false

for (const check of checks) {
  const fullPath = path.join(root, check.script)
  console.log(`\n▶ ${check.name}`)

  const result = spawnSync(process.execPath, [fullPath], {
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
