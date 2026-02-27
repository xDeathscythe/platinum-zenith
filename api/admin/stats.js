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
  if (!redis) {
    return res.status(200).json({
      ok: true,
      stats: { prijave: 0, kontakt: 0, newsletter: 0, emailsSent: 0, total: 0 },
      recent: [],
      dbConnected: false,
    })
  }

  try {
    const prijaveCount = await redis.llen('submissions:prijave') || 0
    const kontaktCount = await redis.llen('submissions:kontakt') || 0
    const newsletterCount = await redis.llen('submissions:newsletter') || 0
    const emailsSent = await redis.get('stats:emails_sent') || 0

    const recentPrijave = (await redis.lrange('submissions:prijave', 0, 4) || []).map(i => typeof i === 'string' ? JSON.parse(i) : i)
    const recentKontakt = (await redis.lrange('submissions:kontakt', 0, 4) || []).map(i => typeof i === 'string' ? JSON.parse(i) : i)

    return res.status(200).json({
      ok: true,
      stats: { prijave: prijaveCount, kontakt: kontaktCount, newsletter: newsletterCount, emailsSent, total: prijaveCount + kontaktCount + newsletterCount },
      recent: [...recentPrijave, ...recentKontakt].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5),
      dbConnected: true,
    })
  } catch (err) {
    console.error('Redis error:', err)
    return res.status(500).json({ error: 'Database error' })
  }
}
