import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { render } from '../.prerender-runtime/entry-server.js'
import { injectOgMeta } from '../server/ogMeta.js'
import { blogPosts } from '../src/pages/blog/blogData.js'

const template = await readFile('dist/index.html', 'utf8')
const sitemap = await readFile('dist/sitemap.xml', 'utf8')
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname)
const posts = new Map(blogPosts.filter(post => !post.isDraft).map(post => ['/blog/' + post.slug, { slug: post.slug, content: post.content }]))
await mkdir('dist/prerender', { recursive: true })
const manifest = {}
for (const path of paths) {
  const initialContent = posts.get(path) || null
  const body = await render(path, initialContent)
  if (!/<h1[\s>]/.test(body)) throw new Error(`No rendered H1: ${path}`)
  const data = JSON.stringify(initialContent).replaceAll('<', '\\u003c')
  const html = injectOgMeta(template, path).replace('<div id="root"></div>', () => `<div id="root" data-prerendered="true">${body}</div><script id="initial-content" type="application/json">${data}</script>`)
  const file = createHash('sha256').update(path).digest('hex').slice(0, 24) + '.html'
  await writeFile('dist/prerender/' + file, html)
  manifest[path] = file
}
await writeFile('dist/prerender-manifest.json', JSON.stringify(manifest))
console.log(`Prerendered ${paths.length} public pages with complete HTML.`)
