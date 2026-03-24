const fs = require('fs');
let c = fs.readFileSync('src/pages/blog/blogData.js', 'utf8');

// Find the retention blog content and convert HTML headings to markdown
const slug = 'zadrzavanje-kupaca-retention-rate-churn-lojalnost-statistika-2026';
const slugIdx = c.indexOf(slug);
if (slugIdx === -1) { console.log('Slug not found!'); process.exit(1); }

// Find the content backtick section for this blog
const contentStart = c.indexOf('content: `', slugIdx);
const contentEnd = c.indexOf('`,', contentStart + 10);

if (contentStart === -1 || contentEnd === -1) { console.log('Content bounds not found!'); process.exit(1); }

let blogContent = c.substring(contentStart + 10, contentEnd);

// Replace <h2>...</h2> with ## ... format
blogContent = blogContent.replace(/<h2>(.*?)<\/h2>/g, '\n## $1\n');
blogContent = blogContent.replace(/<h3>(.*?)<\/h3>/g, '\n### $1\n');

c = c.substring(0, contentStart + 10) + blogContent + c.substring(contentEnd);

fs.writeFileSync('src/pages/blog/blogData.js', c, 'utf8');
console.log('Fixed: HTML headings converted to markdown ##');
