import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

import authRoutes from './routes/auth.js'
import prijavaRoutes from './routes/prijava.js'
import kontaktRoutes from './routes/kontakt.js'
import adminRoutes from './routes/admin.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
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

app.listen(PORT, () => {
  console.log(`🚀 Platinum Zenith server running on port ${PORT}`)
  console.log(`   Frontend: http://localhost:${PORT}`)
  console.log(`   Admin:    http://localhost:${PORT}/log`)
  console.log(`   API:      http://localhost:${PORT}/api`)
})
