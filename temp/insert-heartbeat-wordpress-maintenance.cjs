const fs = require('fs')

const path = 'src/pages/blog/blogData.js'
const snippetPath = 'temp/new-blog-post-snippet-heartbeat-20260315-wordpress-maintenance.txt'

let text = fs.readFileSync(path, 'utf8')
const snippet = fs.readFileSync(snippetPath, 'utf8')

if (text.includes("slug: 'odrzavanje-wordpress-sajta-cena-srbija-2026'")) {
  console.log('already inserted')
  process.exit(0)
}

const marker = 'const rawBlogPosts = ['
const idx = text.indexOf(marker)
if (idx === -1) throw new Error('Marker not found')

const lineEnd = text.indexOf('\n', idx)
if (lineEnd === -1) throw new Error('Unexpected file format')

text = text.slice(0, lineEnd + 1) + snippet + text.slice(lineEnd + 1)
fs.writeFileSync(path, text, 'utf8')
console.log('Inserted snippet')
