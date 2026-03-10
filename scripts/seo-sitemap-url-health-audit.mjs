import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'

const root = process.cwd()
const sitemapPath = path.join(root, 'public', 'sitemap.xml')
const serverEntry = path.join(root, 'server', 'index.js')
const PORT = 4312

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function waitForServer(proc, timeoutMs = 15000) {
  const start = Date.now()

  while (Date.now() - start < timeoutMs) {
    if (proc.exitCode !== null) {
      throw new Error(`Server exited early with code ${proc.exitCode}`)
    }

    try {
      const res = await fetch(`http://localhost:${PORT}/`, { redirect: 'manual' })
      if (res.status >= 200 && res.status < 500) return
    } catch {
      // retry
    }

    await sleep(300)
  }

  throw new Error('Timed out waiting for server startup')
}

function extractSitemapPaths(xml) {
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
  const paths = []

  for (const url of urls) {
    try {
      const parsed = new URL(url)
      const pathOnly = parsed.pathname + (parsed.search || '')
      paths.push(pathOnly || '/')
    } catch {
      // ignore malformed URL entries; handled as issue later if needed
    }
  }

  return [...new Set(paths)]
}

function extractCanonical(html) {
  const m = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"\s*\/>/i)
  return m ? m[1].trim() : ''
}

const issues = []
let server

try {
  if (!fs.existsSync(sitemapPath)) {
    throw new Error(`Missing sitemap file: ${sitemapPath}`)
  }

  if (!fs.existsSync(serverEntry)) {
    throw new Error(`Missing server entry: ${serverEntry}`)
  }

  const sitemapXml = fs.readFileSync(sitemapPath, 'utf8')
  const sitemapPaths = extractSitemapPaths(sitemapXml)

  if (sitemapPaths.length === 0) {
    throw new Error('No URLs found in sitemap.xml')
  }

  server = spawn(process.execPath, [serverEntry], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(PORT),
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  })

  await waitForServer(server)

  for (const routePath of sitemapPaths) {
    const res = await fetch(`http://localhost:${PORT}${routePath}`, { redirect: 'manual' })

    if (res.status !== 200) {
      issues.push(`${routePath}: expected 200 (canonical URL in sitemap), got ${res.status}`)
      continue
    }

    const contentType = (res.headers.get('content-type') || '').toLowerCase()
    if (contentType.includes('text/html')) {
      const html = await res.text()
      const canonical = extractCanonical(html)
      const expectedCanonical = `https://platinumzenith.com${routePath}`

      if (!canonical) {
        issues.push(`${routePath}: missing canonical link in HTML response`)
      } else if (canonical !== expectedCanonical) {
        issues.push(`${routePath}: canonical mismatch (expected ${expectedCanonical}, got ${canonical})`)
      }
    }
  }

  const redirectCheck = await fetch(`http://localhost:${PORT}/google-reklame-cena/`, { redirect: 'manual' })
  if (redirectCheck.status !== 301) {
    issues.push('/google-reklame-cena/ should redirect to canonical URL with 301')
  }
} catch (err) {
  issues.push(err.message)
} finally {
  if (server && server.exitCode === null) {
    server.kill('SIGTERM')
    await sleep(400)
    if (server.exitCode === null) server.kill('SIGKILL')
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-sitemap-url-health-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Sitemap URL health audit complete')
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
