const fs = require('fs');
let c = fs.readFileSync('src/pages/blog/blogData.js', 'utf8');

// Fix broken route: /usluge/digitalni-marketing -> /digitalni-marketing
c = c.replace(
  '[strategije digitalnog marketinga](/usluge/digitalni-marketing)',
  '[strategije digitalnog marketinga](/digitalni-marketing)'
);

// Fix broken blog slug
c = c.replace(
  '[statistike o email marketing ROI-u](/blog/email-marketing-roi-statistika-po-industriji-2026)',
  '[statistike o email marketing ROI-u](/blog/koliko-zapravo-zaradjuje-email-marketing-roi-po-industriji-2026)'
);

fs.writeFileSync('src/pages/blog/blogData.js', c, 'utf8');
console.log('Fixed: broken routes corrected');

// Verify
const v = fs.readFileSync('src/pages/blog/blogData.js', 'utf8');
const slug = 'zadrzavanje-kupaca';
const si = v.indexOf(slug);
const chunk = v.substring(si - 50, si + 3000);
const mdLinks = [...chunk.matchAll(/\]\(([^)]+)\)/g)].map(m => m[1]);
console.log('Links:', mdLinks.filter(l => l.startsWith('/')));
