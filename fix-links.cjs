const fs = require('fs');
let c = fs.readFileSync('src/pages/blog/blogData.js', 'utf8');

const slug = 'zadrzavanje-kupaca-retention-rate-churn-lojalnost-statistika-2026';
const slugIdx = c.indexOf(slug);
const contentStart = c.indexOf('content: `', slugIdx);
const contentEnd = c.indexOf('`,', contentStart + 10);

let blogContent = c.substring(contentStart + 10, contentEnd);

// Convert HTML <a href="/path">text</a> to markdown [text](/path)
blogContent = blogContent.replace(/<a href="([^"]+)">([^<]+)<\/a>/g, '[$2]($1)');

c = c.substring(0, contentStart + 10) + blogContent + c.substring(contentEnd);

fs.writeFileSync('src/pages/blog/blogData.js', c, 'utf8');

// Verify
const verify = fs.readFileSync('src/pages/blog/blogData.js', 'utf8');
const vSlug = verify.indexOf(slug);
const vContent = verify.substring(verify.indexOf('content: `', vSlug) + 10, verify.indexOf('`,', verify.indexOf('content: `', vSlug) + 10));
const mdLinks = [...vContent.matchAll(/\]\(([^)]+)\)/g)].map(m => m[1]);
const internal = mdLinks.filter(l => l.startsWith('/'));
console.log('Internal links found:', internal.length, internal);
