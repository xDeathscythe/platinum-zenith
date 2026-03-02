/**
 * Post-build script: makes CSS non-render-blocking
 * 1. Adds <link rel="preload" as="style"> for early download
 * 2. Changes stylesheet to async load via media="print" onload trick
 * 3. Adds <noscript> fallback
 */
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const htmlPath = join(__dirname, '..', 'dist', 'index.html')

let html = readFileSync(htmlPath, 'utf-8')

// Find CSS link tags: <link rel="stylesheet" ... href="/assets/index-XXX.css">
const cssLinkRegex = /<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/g
let match
const replacements = []

while ((match = cssLinkRegex.exec(html)) !== null) {
  const fullTag = match[0]
  const href = match[1]

  const preload = `<link rel="preload" as="style" href="${href}" />`
  const asyncLink = `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'" />`
  const noscript = `<noscript><link rel="stylesheet" href="${href}" /></noscript>`

  replacements.push({
    original: fullTag,
    replacement: `${preload}\n    ${asyncLink}\n    ${noscript}`,
  })
}

if (replacements.length === 0) {
  // Try crossorigin variant
  const cssLinkRegex2 = /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)"[^>]*>/g
  while ((match = cssLinkRegex2.exec(html)) !== null) {
    const fullTag = match[0]
    const href = match[1]

    const preload = `<link rel="preload" as="style" href="${href}" crossorigin />`
    const asyncLink = `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'" crossorigin />`
    const noscript = `<noscript><link rel="stylesheet" href="${href}" /></noscript>`

    replacements.push({
      original: fullTag,
      replacement: `${preload}\n    ${asyncLink}\n    ${noscript}`,
    })
  }
}

for (const r of replacements) {
  html = html.replace(r.original, r.replacement)
}

writeFileSync(htmlPath, html)
console.log(`✅ Fixed ${replacements.length} CSS link(s) → async loading`)
