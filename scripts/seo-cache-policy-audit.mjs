import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'

const root = process.cwd()
const distAssets = path.join(root, 'dist', 'assets')
const serverEntry = path.join(root, 'server', 'index.js')
const PORT = 4310

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

  throw new Error('Timed out waiting for local server')
}

function assert(condition, message, issues) {
  if (!condition) issues.push(message)
}

const issues = []
let server

try {
  if (!fs.existsSync(serverEntry)) {
    throw new Error(`Missing server entry: ${serverEntry}`)
  }

  if (!fs.existsSync(distAssets)) {
    throw new Error('dist/assets missing. Run build first.')
  }

  const assetJs = fs.readdirSync(distAssets).find((f) => f.endsWith('.js'))
  if (!assetJs) {
    throw new Error('No JS asset found in dist/assets')
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

  const checks = [
    { path: '/sitemap.xml', expect: ['max-age=900', 'must-revalidate'] },
    { path: '/rss.xml', expect: ['max-age=900', 'must-revalidate'] },
    { path: '/robots.txt', expect: ['max-age=900', 'must-revalidate'] },
    { path: `/assets/${assetJs}`, expect: ['max-age=31536000', 'immutable'] },
    { path: '/', expect: ['no-cache', 'no-store', 'must-revalidate'] },
  ]

  for (const check of checks) {
    const res = await fetch(`http://localhost:${PORT}${check.path}`, { redirect: 'manual' })
    const cacheControl = (res.headers.get('cache-control') || '').toLowerCase()

    for (const expected of check.expect) {
      assert(
        cacheControl.includes(expected.toLowerCase()),
        `${check.path}: cache-control missing "${expected}" (got: "${cacheControl}")`,
        issues,
      )
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
  port: PORT,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-cache-policy-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('Cache policy audit complete')
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
