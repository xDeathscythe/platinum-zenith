import { SignJWT, jwtVerify } from 'jose'

function signingKey() {
  if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET must be configured')
  return new TextEncoder().encode(process.env.JWT_SECRET)
}

export async function createToken(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(signingKey())
}

export async function requireAuth(req, res, next) {
  const auth = req.headers.authorization
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  try {
    const { payload } = await jwtVerify(auth.slice(7), signingKey())
    req.user = payload
    next()
  } catch {
    return res.status(401).json({ error: 'Invalid token' })
  }
}
