import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AnimatedCharactersLoginPage from '../../components/ui/animated-characters-login-page'

export default function LoginPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('pz_token')
    if (token) navigate('/log/dashboard')
  }, [navigate])

  const handleAuthenticate = async ({ username, password }) => {
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      const data = await res.json()
      if (data.ok && data.token) {
        localStorage.setItem('pz_token', data.token)
        navigate('/log/dashboard')
        return { ok: true }
      }

      return { ok: false, error: data.error || 'Greška pri prijavi' }
    } catch {
      return { ok: false, error: 'Greška u komunikaciji sa serverom' }
    }
  }

  return (
    <AnimatedCharactersLoginPage
      onAuthenticate={handleAuthenticate}
      title="Dobrodošli nazad"
      subtitle="Prijava u Platinum Zenith backend"
    />
  )
}
