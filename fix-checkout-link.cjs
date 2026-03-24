const fs = require('fs');
let c = fs.readFileSync('src/pages/blog/blogData.js', 'utf8');
c = c.replace(
  '/blog/checkout-optimizacija-konverzija-napustena-korpa-statistika-2026',
  '/blog/checkout-optimizacija-statistika-konverzija-forme-placanje-2026'
);
fs.writeFileSync('src/pages/blog/blogData.js', c, 'utf8');
console.log('Fixed checkout link');
