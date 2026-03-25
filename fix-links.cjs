const fs = require('fs')
let c = fs.readFileSync('src/pages/blog/blogData.js', 'utf8')
c = c.replaceAll(
  '/blog/koliko-zapravo-zaradjuje-email-marketing-roi-statistika-2026',
  '/blog/koliko-zapravo-zaradjuje-email-marketing-roi-po-industriji-2026'
)
fs.writeFileSync('src/pages/blog/blogData.js', c, 'utf8')
console.log('Fixed')
