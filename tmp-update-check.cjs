const fs = require('fs');
let c = fs.readFileSync('scripts/seo-check.mjs', 'utf8');
c = c.replace(
  "  { name: 'Pricing blog internal linking', script: 'scripts/seo-pricing-blog-linking-audit.mjs' },",
  "  { name: 'Pricing blog internal linking', script: 'scripts/seo-pricing-blog-linking-audit.mjs' },\n  { name: 'Blog post cross-linking (commercial CTA)', script: 'scripts/seo-blog-crosslinking-audit.mjs' },"
);
fs.writeFileSync('scripts/seo-check.mjs', c);
