/**
 * Build-time script: extract public blog metadata from blog data/index
 * into a compact JSON file that server-side OG + Article schema injection can use.
 * Run after vite build (or before server start).
 */
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { blogPosts } from '../src/pages/blog/blogData.js'
import { blogIndexPosts } from '../src/pages/blog/blogIndexData.js'

const __filename = fileURLToPath(import.meta.url)
const __dir = dirname(__filename)
const root = join(__dir, '..')

const publicIndexPosts = [...new Map(
  blogIndexPosts
    .filter((post) => post?.slug && !post?.isDraft)
    .map((post) => [post.slug, post]),
).values()]

const ogImageBySlug = new Map(
  blogPosts
    .filter((post) => post?.slug && !post?.isDraft)
    .map((post) => [post.slug, post.ogImage || null]),
)

const posts = publicIndexPosts
  .sort((a, b) => a.slug.localeCompare(b.slug))
  .map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: (post.excerpt || '').slice(0, 200),
    date: post.date || null,
    category: post.category || null,
    author: 'Aleksandar Nenadović',
    ogImage: ogImageBySlug.get(post.slug) || null,
  }))

const outDir = join(root, 'server')
const outFile = join(outDir, 'blogOgData.json')
writeFileSync(outFile, JSON.stringify(posts, null, 2))
console.log(`Generated ${outFile} with ${posts.length} public blog posts`)
