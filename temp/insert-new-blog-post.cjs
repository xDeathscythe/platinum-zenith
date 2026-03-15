const fs = require('fs');

const path = 'C:/Users/Eventide/.openclaw/workspace-devona/projects/arcads-clone/src/pages/blog/blogData.js';
const snippetPath = 'C:/Users/Eventide/.openclaw/workspace-devona/projects/arcads-clone/temp/new-blog-post-snippet.txt';

let text = fs.readFileSync(path, 'utf8');
const snippet = fs.readFileSync(snippetPath, 'utf8');

if (text.includes("slug: 'google-ads-za-privatne-klinike-cena-leada-srbija-2026'")) {
  console.log('Snippet already inserted');
  process.exit(0);
}

const marker = 'const rawBlogPosts = [';
const idx = text.indexOf(marker);
if (idx === -1) throw new Error('Marker not found');

const lineEnd = text.indexOf('\n', idx);
if (lineEnd === -1) throw new Error('Unexpected file format');

text = text.slice(0, lineEnd + 1) + snippet + text.slice(lineEnd + 1);
fs.writeFileSync(path, text, 'utf8');

console.log('Inserted snippet');
