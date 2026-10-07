import fs from 'fs'
import http from 'http'
import os from 'os'
import path from 'path'
import { spawn } from 'child_process'
import { once } from 'events'

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function startAuditServer({ root, serverEntry, port, timeoutMs = 15000 }) {
  const socketPath = process.platform === 'win32'
    ? null
    : path.join(os.tmpdir(), `platinum-zenith-seo-${process.pid}-${port}.sock`)
  const listenTarget = socketPath || String(port)

  if (socketPath) fs.rmSync(socketPath, { force: true })

  const proc = spawn(process.execPath, [serverEntry], {
    cwd: root,
    env: {
      ...process.env,
      PORT: listenTarget,
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  })

  const request = (pathname, { headers = {} } = {}) => new Promise((resolve, reject) => {
    const req = http.request({
      ...(socketPath ? { socketPath } : { hostname: '127.0.0.1', port }),
      path: pathname,
      method: 'GET',
      headers,
    }, (res) => {
      const chunks = []
      res.on('data', (chunk) => chunks.push(chunk))
      res.on('end', () => resolve({
        status: res.statusCode || 0,
        headers: {
          get(name) {
            const value = res.headers[String(name).toLowerCase()]
            return Array.isArray(value) ? value.join(', ') : (value || null)
          },
        },
        text: async () => Buffer.concat(chunks).toString('utf8'),
      }))
    })

    req.setTimeout(1500, () => req.destroy(new Error('Request timed out')))
    req.on('error', reject)
    req.end()
  })

  const stop = async () => {
    if (proc.exitCode === null) {
      proc.kill('SIGTERM')
      await Promise.race([once(proc, 'exit'), sleep(400)])
      if (proc.exitCode === null) {
        proc.kill('SIGKILL')
        await Promise.race([once(proc, 'exit'), sleep(400)])
      }
    }
    if (socketPath) fs.rmSync(socketPath, { force: true })
  }

  const startedAt = Date.now()
  try {
    while (Date.now() - startedAt < timeoutMs) {
      if (proc.exitCode !== null) throw new Error(`Server exited early with code ${proc.exitCode}`)

      try {
        const response = await request('/')
        if (response.status >= 200 && response.status < 500) {
          return { request, stop }
        }
      } catch {
        // Retry until the server is accepting requests.
      }

      await sleep(300)
    }

    throw new Error('Timed out waiting for server startup')
  } catch (error) {
    await stop()
    throw error
  }
}
