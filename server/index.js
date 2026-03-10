import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { existsSync, readFileSync, statSync } from 'fs'
import { brotliCompressSync, gzipSync, constants as zlibConstants } from 'zlib'
import { injectOgMeta } from './ogMeta.js'

// Load .env from project root (not CWD)
const __filename = fileURLToPath(import.meta.url)
const __serverDir = dirname(__filename)
dotenv.config({ path: join(__serverDir, '..', '.env') })

import authRoutes from './routes/auth.js'
import prijavaRoutes from './routes/prijava.js'
import kontaktRoutes from './routes/kontakt.js'
import adminRoutes from './routes/admin.js'
import analyticsRoutes from './routes/analytics.js'

const __dirname = __serverDir
const PORT = process.env.PORT || 3000
const app = express()

const CANONICAL_HOST = 'platinumzenith.com'
const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1'])

app.set('trust proxy', true)

// Middleware
app.use(cors())
app.use(express.json())

// Canonical host/protocol redirect for SEO (keep localhost untouched)
app.use((req, res, next) => {
  const forwardedHostRaw = req.headers['x-forwarded-host']
  const hostRaw = Array.isArray(forwardedHostRaw)
    ? forwardedHostRaw[0]
    : (forwardedHostRaw || req.headers.host || '')

  const host = String(hostRaw)
    .split(',')[0]
    .trim()
    .toLowerCase()
    .replace(/:\d+$/, '')

  if (!host || LOCAL_HOSTS.has(host)) return next()

  const forwardedProtoRaw = req.headers['x-forwarded-proto']
  const protoRaw = Array.isArray(forwardedProtoRaw)
    ? forwardedProtoRaw[0]
    : (forwardedProtoRaw || req.protocol || 'http')

  const proto = String(protoRaw).split(',')[0].trim().toLowerCase()
  const normalizedHost = host.startsWith('www.') ? host.slice(4) : host

  const shouldRedirectHost = normalizedHost !== CANONICAL_HOST || host.startsWith('www.')
  const shouldRedirectProto = proto !== 'https'

  if (shouldRedirectHost || shouldRedirectProto) {
    return res.redirect(301, `https://${CANONICAL_HOST}${req.originalUrl}`)
  }

  next()
})

// API routes FIRST
app.use('/api', authRoutes)
app.use('/api', prijavaRoutes)
app.use('/api', kontaktRoutes)
app.use('/api', analyticsRoutes)
app.use('/api/admin', adminRoutes)

// SEO canonical redirects — prevent duplicate URLs
const LEGACY_REDIRECTS = new Map([
  ['/paketi', '/cene-digitalnog-marketinga'],
  ['/studije-slucaja', '/case-studies'],
])

const INTERNAL_NOINDEX_PATHS = new Set([
  '/dashboard',
  '/prijave',
  '/poruke',
  '/newsletter',
  '/emails',
  '/analytics',
  '/log',
])

function normalizePathForSeo(pathname = '/') {
  const clean = String(pathname || '/').split('?')[0].split('#')[0].toLowerCase()
  if (clean === '/') return '/'
  return clean.replace(/\/+$/, '') || '/'
}

function shouldNoIndexPath(pathname = '/') {
  const clean = normalizePathForSeo(pathname)
  return clean.startsWith('/draft/') || INTERNAL_NOINDEX_PATHS.has(clean)
}

app.use((req, res, next) => {
  if (req.path === '/index.html') {
    const query = req.originalUrl.includes('?') ? req.originalUrl.slice(req.originalUrl.indexOf('?')) : ''
    return res.redirect(301, `/${query}`)
  }

  const legacyTarget = LEGACY_REDIRECTS.get(req.path)
  if (legacyTarget) {
    const query = req.originalUrl.includes('?') ? req.originalUrl.slice(req.originalUrl.indexOf('?')) : ''
    return res.redirect(301, `${legacyTarget}${query}`)
  }

  const [pathname, query = ''] = req.originalUrl.split('?')
  const isApiRoute = req.path.startsWith('/api')
  const isAssetLike = pathname.startsWith('/assets/') || /\.[a-z0-9]+$/i.test(pathname)

  if (!isApiRoute && !isAssetLike) {
    let normalizedPath = pathname.replace(/\/+/g, '/')
    if (normalizedPath !== '/' && normalizedPath.endsWith('/')) {
      normalizedPath = normalizedPath.replace(/\/+$/, '')
    }
    if (!normalizedPath) normalizedPath = '/'

    const lowerPath = normalizedPath.toLowerCase()

    if (pathname !== normalizedPath || pathname !== lowerPath) {
      const target = lowerPath + (query ? `?${query}` : '')
      return res.redirect(301, target)
    }
  }

  if (req.path !== '/' && req.path.endsWith('/') && !req.path.startsWith('/api')) {
    const clean = pathname.replace(/\/+$/, '') + (query ? `?${query}` : '')
    return res.redirect(301, clean)
  }

  next()
})

// Static files AFTER API — with aggressive cache headers
const distPath = join(__dirname, '..', 'dist')

// Always serve SEO machine files with short cache so updates propagate quickly
const ONE_YEAR = 31536000
const SEO_FRESH_MAX_AGE = 900 // 15 min
const SEO_FRESH_ROUTES = new Set(['/sitemap.xml', '/rss.xml', '/robots.txt'])
app.get(['/sitemap.xml', '/rss.xml', '/robots.txt'], (req, res, next) => {
  const filePath = join(distPath, req.path)
  if (!existsSync(filePath)) return next()

  const fileStats = statSync(filePath)
  const fileMtimeMs = Math.floor(fileStats.mtimeMs / 1000) * 1000
  const lastModified = new Date(fileMtimeMs).toUTCString()
  const ifModifiedSince = req.headers['if-modified-since']

  const shortExpiry = new Date(Date.now() + SEO_FRESH_MAX_AGE * 1000).toUTCString()
  res.set('Cache-Control', `public, max-age=${SEO_FRESH_MAX_AGE}, must-revalidate`)
  res.set('Expires', shortExpiry)
  res.set('Last-Modified', lastModified)
  res.set('Vary', 'Accept-Encoding')

  if (ifModifiedSince) {
    const since = new Date(ifModifiedSince)
    if (!Number.isNaN(since.getTime()) && since.getTime() >= fileMtimeMs) {
      return res.status(304).end()
    }
  }

  res.sendFile(filePath)
})

// Force cache headers — both Cache-Control AND Expires (Hostinger nginx compatibility)
app.use((req, res, next) => {
  const url = req.path.toLowerCase()
  const farFuture = new Date(Date.now() + ONE_YEAR * 1000).toUTCString()

  if (SEO_FRESH_ROUTES.has(url)) {
    const shortExpiry = new Date(Date.now() + SEO_FRESH_MAX_AGE * 1000).toUTCString()
    res.set('Cache-Control', `public, max-age=${SEO_FRESH_MAX_AGE}, must-revalidate`)
    res.set('Expires', shortExpiry)
  } else if (url.startsWith('/assets/')) {
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
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.setHeader('Pragma', 'no-cache')
  res.setHeader('Expires', '0')
  res.setHeader('Surrogate-Control', 'no-store')
  res.setHeader('X-Robots-Tag', shouldNoIndexPath(req.path) ? 'noindex, nofollow' : 'index, follow')

  const acceptEncoding = String(req.headers['accept-encoding'] || '').toLowerCase()
  const htmlBuffer = Buffer.from(html)

  // Dynamic HTML compression for faster TTFB/content download on real traffic
  if (acceptEncoding.includes('br')) {
    const compressed = brotliCompressSync(htmlBuffer, {
      params: {
        [zlibConstants.BROTLI_PARAM_QUALITY]: 5,
      },
    })
    res.setHeader('Content-Encoding', 'br')
    res.setHeader('Vary', 'Accept-Encoding')
    return res.send(compressed)
  }

  if (acceptEncoding.includes('gzip')) {
    const compressed = gzipSync(htmlBuffer, { level: 6 })
    res.setHeader('Content-Encoding', 'gzip')
    res.setHeader('Vary', 'Accept-Encoding')
    return res.send(compressed)
  }

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
