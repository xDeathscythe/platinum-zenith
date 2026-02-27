import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
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
      } else {
        setError(data.error || 'Greška pri prijavi')
      }
    } catch {
      setError('Greška u komunikaciji sa serverom')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-[380px]">
        <div className="text-center mb-8">
          <h1 className="text-[24px] font-bold text-white tracking-tight">PLATINUM ZENITH</h1>
          <p className="text-[13px] text-white/40 mt-1">Admin Panel</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#111] rounded-2xl border border-white/[0.06] p-6 space-y-4">
          <div>
            <label className="block text-[12px] text-white/50 uppercase tracking-wider mb-1.5">Korisničko ime</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-10 px-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
              placeholder="admin"
              autoFocus
            />
          </div>
          <div>
            <label className="block text-[12px] text-white/50 uppercase tracking-wider mb-1.5">Lozinka</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-10 px-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-[13px] text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-10 bg-white text-black text-[14px] font-medium rounded-lg hover:bg-white/90 transition-colors cursor-pointer disabled:opacity-50"
          >
            {loading ? 'Prijava...' : 'Prijavi se'}
          </button>
        </form>

        <p className="text-center text-[11px] text-white/20 mt-6">platinumzenith.com</p>
      </div>
    </div>
  )
}
