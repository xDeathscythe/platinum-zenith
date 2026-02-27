import { SignJWT, jwtVerify } from 'jose'

const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'pz-admin-secret-2026')

export async function createToken(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(secret)
}

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, secret)
    return payload
  } catch {
    return null
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { username, password } = req.body || {}

  const validUser = process.env.ADMIN_USER || 'admin'
  const validPass = process.env.ADMIN_PASS || 'admin'

  if (username === validUser && password === validPass) {
    const token = await createToken({ user: username, role: 'admin' })
    return res.status(200).json({ ok: true, token })
  }

  return res.status(401).json({ error: 'Pogrešno korisničko ime ili lozinka' })
}
