const fs = require('fs');
let c = fs.readFileSync('src/pages/blog/blogData.js', 'utf8');
const search = "  {\n    slug: 'zasto-vas-sajt-ne-prodaje-sta-promeniti',";
const start = c.indexOf(search);
if (start !== -1) {
  const end = c.indexOf('  },\n', start) + 5;
  c = c.slice(0, start) + c.slice(end);
  
  c = c.replace(/\[ne prodaje i odbija kupce\]\(\/zasto-vas-sajt-ne-prodaje-sta-promeniti\)/g, '[ne prodaje i odbija kupce](/blog/zasto-vas-sajt-ne-prodaje)');
  
  fs.writeFileSync('src/pages/blog/blogData.js', c);
  console.log('Removed second duplicate post and fixed link.');
} else {
  console.log('Duplicate not found.');
}
