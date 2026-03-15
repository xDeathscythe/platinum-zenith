const fs = require('fs')

const file = 'src/pages/blog/blogData.js'
const snippetPath = 'temp/new-blog-post-snippet-heartbeat-20260314-vrtici.txt'
const slugNeedle = "slug: 'google-ads-za-privatne-vrtice-cena-upisa-srbija-2026'"

let text = fs.readFileSync(file, 'utf8')
if (text.includes(slugNeedle)) {
  console.log('already')
  process.exit(0)
}

const snippet = fs.readFileSync(snippetPath, 'utf8')
const marker = 'const rawBlogPosts = ['
const idx = text.indexOf(marker)
if (idx === -1) throw new Error('marker not found')
const lineEnd = text.indexOf('\n', idx)
if (lineEnd === -1) throw new Error('unexpected format')

text = text.slice(0, lineEnd + 1) + snippet + text.slice(lineEnd + 1)
fs.writeFileSync(file, text)
console.log('inserted')
