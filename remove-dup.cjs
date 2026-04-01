const fs = require('fs');
let c = fs.readFileSync('src/pages/blog/blogData.js', 'utf8');
const search = "  {\n    slug: 'facebook-vs-instagram-oglasi-gde-je-publika',";
const start = c.indexOf(search);
if (start !== -1) {
  const end = c.indexOf('  },\n', start) + 5;
  c = c.slice(0, start) + c.slice(end);
  
  // also fix the broken internal link from the "los-marketing" post
  c = c.replace(/\[Facebook i Instagram oglasima\]\(\/facebook-vs-instagram-oglasi-gde-je-publika\)/g, '[Facebook i Instagram oglasima](/blog/facebook-vs-instagram-oglasi-gde-je-vasa-publika)');
  
  fs.writeFileSync('src/pages/blog/blogData.js', c);
  console.log('Removed duplicate post and fixed link.');
} else {
  console.log('Duplicate not found.');
}
