import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'

const root = process.cwd()
const serverEntry = path.join(root, 'server', 'index.js')
const PORT = 4314

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

const checks = [
  { path: '/google-reklame-cena', expected: 'index, follow' },
  { path: '/dashboard', expected: 'noindex, nofollow' },
  { path: '/prijave', expected: 'noindex, nofollow' },
  { path: '/draft/netokracija-cro-case', expected: 'noindex, nofollow' },
]

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

  for (const check of checks) {
    const res = await fetch(`http://localhost:${PORT}${check.path}`, { redirect: 'manual' })

    if (res.status !== 200) {
      issues.push(`${check.path}: expected 200, got ${res.status}`)
      continue
    }

    const value = (res.headers.get('x-robots-tag') || '').toLowerCase().trim()
    if (value !== check.expected) {
      issues.push(`${check.path}: expected X-Robots-Tag "${check.expected}", got "${value || '(missing)'}"`)
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
  checks: checks.length,
  issueCount: issues.length,
  issues,
}

const reportPath = path.join(root, 'seo-xrobots-audit-report.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8')

console.log('X-Robots-Tag audit complete')
console.log(`Checks: ${report.checks}`)
console.log(`Issues: ${report.issueCount}`)
console.log(`Report: ${reportPath}`)

if (issues.length > 0) {
  console.log('\nIssues:')
  issues.forEach((issue) => console.log(`- ${issue}`))
  process.exitCode = 1
}
