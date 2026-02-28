import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

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

// Static files AFTER API
const distPath = join(__dirname, '..', 'dist')
app.use(express.static(distPath))

// SPA fallback LAST
app.use((req, res) => {
  res.sendFile(join(distPath, 'index.html'))
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
