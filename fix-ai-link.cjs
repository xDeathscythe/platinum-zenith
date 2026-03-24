const fs = require('fs');
let c = fs.readFileSync('src/pages/blog/blogData.js', 'utf8');

c = c.replace(
  '[AI automatizacija marketinga](/blog/ai-automatizacija-marketinga-prednosti-i-primena-2026)',
  '[AI alati za marketing](/blog/ai-alati-za-marketing-srbija-2026)'
);

fs.writeFileSync('src/pages/blog/blogData.js', c, 'utf8');
console.log('Fixed: AI marketing link corrected');
