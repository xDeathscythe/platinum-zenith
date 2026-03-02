import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { existsSync, readFileSync } from 'fs'
import { injectOgMeta } from './ogMeta.js'

// Load .env from project root (not CWD)
const __filename = fileURLToPath(import.meta.url)
const __serverDir = dirname(__filename)
dotenv.config({ path: join(__serverDir, '..', '.env') })

import authRoutes from './routes/auth.js'
import prijavaRoutes from './routes/prijava.js'
import kontaktRoutes from './routes/kontakt.js'
import adminRoutes from './routes/admin.js'

const __dirname = __serverDir
const PORT = process.env.PORT || 3000
const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// API routes FIRST
app.use('/api', authRoutes)
app.use('/api', prijavaRoutes)
app.use('/api', kontaktRoutes)
app.use('/api/admin', adminRoutes)

// SEO: strip trailing slash (301 redirect) — prevents duplicate canonical URLs
app.use((req, res, next) => {
  if (req.path !== '/' && req.path.endsWith('/') && !req.path.startsWith('/api')) {
    const clean = req.path.replace(/\/+$/, '') + (req.search || '')
    return res.redirect(301, clean)
  }
  next()
})

// Static files AFTER API — with aggressive cache headers
const distPath = join(__dirname, '..', 'dist')

// Force cache headers — both Cache-Control AND Expires (Hostinger nginx compatibility)
const ONE_YEAR = 31536000
app.use((req, res, next) => {
  const url = req.path.toLowerCase()
  const farFuture = new Date(Date.now() + ONE_YEAR * 1000).toUTCString()

  if (url.startsWith('/assets/')) {
    // Hashed build assets (safe immutable cache)
    res.set('Cache-Control', `public, max-age=${ONE_YEAR}, immutable`)
    res.set('Expires', farFuture)
    res.set('Vary', 'Accept-Encoding')
  } else if (url.match(/\.(woff2?|ttf|eot)$/)) {
    // Fonts rarely change
    res.set('Cache-Control', `public, max-age=${ONE_YEAR}, immutable`)
    res.set('Expires', farFuture)
  } else if (url.match(/\.(webp|jpg|jpeg|png|gif|svg|ico)$/)) {
    // Root/public images are not content-hashed -> avoid immutable to prevent stale files
    const THIRTY_DAYS = 2592000
    res.set('Cache-Control', `public, max-age=${THIRTY_DAYS}`)
    res.set('Expires', new Date(Date.now() + THIRTY_DAYS * 1000).toUTCString())
  } else if (url.endsWith('.js') || url.endsWith('.css')) {
    res.set('Cache-Control', 'public, max-age=604800')
    res.set('Expires', new Date(Date.now() + 604800 * 1000).toUTCString())
  } else if (url.endsWith('.html') || url === '/') {
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    res.set('Pragma', 'no-cache')
    res.set('Expires', '0')
  }
  next()
})

// Serve precompressed Brotli assets when available (faster critical path)
app.use((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') return next()
  const ae = req.headers['accept-encoding'] || ''
  if (!ae.includes('br')) return next()

  const url = req.path.toLowerCase()
  const isAsset = url.startsWith('/assets/') && (url.endsWith('.js') || url.endsWith('.css'))
  if (!isAsset) return next()

  const rel = req.path.replace(/^\/+/, '')
  const brFile = join(distPath, `${rel}.br`)
  if (!existsSync(brFile)) return next()

  res.setHeader('Content-Encoding', 'br')
  res.setHeader('Vary', 'Accept-Encoding')
  if (url.endsWith('.js')) res.setHeader('Content-Type', 'application/javascript; charset=UTF-8')
  if (url.endsWith('.css')) res.setHeader('Content-Type', 'text/css; charset=UTF-8')

  req.url = `${req.url}.br`
  next()
})

app.use('/assets', express.static(join(distPath, 'assets'), { maxAge: ONE_YEAR * 1000, immutable: true }))
app.use(express.static(distPath, { maxAge: ONE_YEAR * 1000 }))

// Read HTML template once at startup (cached in memory)
const indexHtmlPath = join(distPath, 'index.html')
let indexHtmlTemplate = ''
try {
  indexHtmlTemplate = readFileSync(indexHtmlPath, 'utf-8')
} catch {
  console.warn('⚠️ dist/index.html not found — SPA fallback will fail until build runs')
}

// SPA fallback LAST — inject per-route OG meta for social media crawlers
app.use((req, res) => {
  if (!indexHtmlTemplate) {
    return res.status(500).send('Build not found. Run npm run build first.')
  }
  const html = injectOgMeta(indexHtmlTemplate, req.path)
  res.setHeader('Content-Type', 'text/html; charset=UTF-8')
  res.send(html)
})

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err)
  res.status(500).json({ error: 'Internal server error' })
})

// Catch unhandled rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err)
})
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err)
})

app.listen(PORT, () => {
  console.log(`🚀 Platinum Zenith server running on port ${PORT}`)
  console.log(`   Frontend: http://localhost:${PORT}`)
  console.log(`   Admin:    http://localhost:${PORT}/log`)
  console.log(`   API:      http://localhost:${PORT}/api`)
  console.log(`   ENV check: ADMIN_USER=${process.env.ADMIN_USER ? '✅' : '❌'} SMTP_USER=${process.env.SMTP_USER ? '✅' : '❌'} JWT=${process.env.JWT_SECRET ? '✅' : '❌'}`)
})
