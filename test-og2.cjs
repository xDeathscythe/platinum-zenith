const { injectOgMeta } = require('./server/ogMeta.js')
const fs = require('fs')
const html = fs.readFileSync('index.html', 'utf8')
const out = injectOgMeta(html, '/blog/drustvene-mreze-statistika-korisnici-engagement-vreme-ad-spend-2026')

// Use same regex as audit
const ogDesc = out.match(/<meta\s+property="og:description"\s+content="([^"]+)"\s*\/>/i)
console.log('Audit regex og:desc:', ogDesc ? ogDesc[1].substring(0, 80) : 'NOT FOUND')

const twDesc = out.match(/<meta\s+name="twitter:description"\s+content="([^"]+)"\s*\/>/i)
console.log('Audit regex tw:desc:', twDesc ? twDesc[1].substring(0, 80) : 'NOT FOUND')

// Print raw OG section
const start = out.indexOf('og:description')
if (start >= 0) console.log('Raw OG section:', out.substring(start - 30, start + 200))
else console.log('og:description not in output at all')
