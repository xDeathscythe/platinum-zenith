import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'

const root = process.cwd()
const serverEntry = path.join(root, 'server', 'index.js')
const PORT = 4313
const SEO_FILES = ['/sitemap.xml', '/rss.xml', '/robots.txt']

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function waitForServer(proc, timeoutMs = 15000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    if (proc.exitCode !== null) throw new Error(`Server exited early with code ${proc.exitCode}`)

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

const issues = []
let server

try {
  if (!fs.existsSync(serverEntry)) {
    throw new Error(`Missing server entry: ${serverEntry}`)
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

  for (const file of SEO_FILES) {
    const first = await fetch(`http://localhost:${PORT}${file}`, { redirect: 'manual' })
    if (first.status !== 200) {
      issues.push(`${file}: expected initial 200, got ${first.status}`)
      continue
    }

    const lastModified = first.headers.get('last-modified')
    if (!lastModified) {
      issues.push(`${file}: missing Last-Modified header`)
      continue
    }

    const cacheControl = (first.headers.get('cache-control') || '').toLowerCase()
    if (!cacheControl.includes('must-revalidate')) {
      issues.push(`${file}: cache-control should include must-revalidate (got "${cacheControl}")`)
    }

    const second = await fetch(`http://localhost:${PORT}${file}`, {
      redirect: 'manual',
      headers: {
        'if-modified-since': lastModified,
      },
    })

    if (second.status !== 304) {
      issues.push(`${file}: expected 304 on If-Modified-Since revalidation, got ${second.status}`)
    }
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
  filesChecked: SEO_FILES.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-file-revalidation-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('SEO file revalidation audit complete')
console.log(`Files checked: ${report.filesChecked}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
