import { Router } from 'express'
import { createToken } from '../auth.js'

const router = Router()

router.post('/auth', async (req, res) => {
  const { username, password } = req.body || {}
  const validUser = process.env.ADMIN_USER || 'admin'
  const validPass = process.env.ADMIN_PASS || 'admin'

  if (username === validUser && password === validPass) {
    const token = await createToken({ user: username, role: 'admin' })
    return res.json({ ok: true, token })
  }
  return res.status(401).json({ error: 'Pogrešno korisničko ime ili lozinka' })
})

export default router
