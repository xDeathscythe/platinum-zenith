/**
 * Build-time script: extract blog slug/title/excerpt from blogData.js
 * into a small JSON file that the server can import for OG meta injection.
 * Run after vite build (or before server start).
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dir = dirname(__filename)
const root = join(__dir, '..')

const src = readFileSync(join(root, 'src/pages/blog/blogData.js'), 'utf8')

// Parse blogPosts array — extract slug, title, excerpt
const posts = []
const slugRe = /slug:\s*'([^']+)'/g
const titleRe = /title:\s*'([^']+)'/g
const excerptRe = /excerpt:\s*'([^']+)'/g

// Simpler approach: split by object boundaries
const chunks = src.split(/\{\s*\n\s*slug:/)
for (const chunk of chunks) {
  const s = chunk.match(/(?:^|\n)\s*(?:slug:\s*)?'([^']+)'/)
  const t = chunk.match(/title:\s*'([^']+)'/)
  const e = chunk.match(/excerpt:\s*'([^']+)'/)
  if (s && t) {
    posts.push({
      slug: s[1],
      title: t[1],
      excerpt: e ? e[1].slice(0, 200) : '',
    })
  }
}

const outDir = join(root, 'server')
const outFile = join(outDir, 'blogOgData.json')
writeFileSync(outFile, JSON.stringify(posts, null, 2))
console.log(`Generated ${outFile} with ${posts.length} blog posts`)
