import { jwtVerify } from 'jose'

const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'pz-admin-secret-2026')

export async function requireAuth(req, res) {
  const auth = req.headers.authorization
  if (!auth || !auth.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized' })
    return null
  }
  try {
    const { payload } = await jwtVerify(auth.slice(7), secret)
    return payload
  } catch {
    res.status(401).json({ error: 'Invalid token' })
    return null
  }
}
