import { getRedis } from './_db.js'
import { requireAuth } from './_auth.js'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') return res.status(200).end()

  const user = await requireAuth(req, res)
  if (!user) return

  const redis = getRedis()
  if (!redis) return res.status(200).json({ ok: true, prijave: [], kontakt: [], newsletter: [], total: 0, dbConnected: false })

  try {
    const prijave = (await redis.lrange('submissions:prijave', 0, -1) || []).map(i => typeof i === 'string' ? JSON.parse(i) : i)
    const kontakt = (await redis.lrange('submissions:kontakt', 0, -1) || []).map(i => typeof i === 'string' ? JSON.parse(i) : i)
    const newsletter = (await redis.lrange('submissions:newsletter', 0, -1) || []).map(i => typeof i === 'string' ? JSON.parse(i) : i)

    return res.status(200).json({ ok: true, prijave, kontakt, newsletter, total: prijave.length + kontakt.length + newsletter.length, dbConnected: true })
  } catch (err) {
    console.error('Redis read error:', err)
    return res.status(500).json({ error: 'Database error' })
  }
}
