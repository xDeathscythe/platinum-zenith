const fs = require('fs')
let c = fs.readFileSync('src/pages/blog/blogData.js', 'utf8')
c = c.replaceAll(
  '/blog/roas-po-industriji-i-platformi-facebook-google-tiktok-linkedin-2026',
  '/blog/roas-po-industriji-i-platformi-benchmark-statistika-2026'
)
c = c.replaceAll(
  '/blog/retargeting-zasto-95-posto-posetilaca-ne-kupi-iz-prve',
  '/blog/retargeting-zasto-95-posetilaca-ne-kupi'
)
fs.writeFileSync('src/pages/blog/blogData.js', c, 'utf8')
console.log('Fixed broken links')
