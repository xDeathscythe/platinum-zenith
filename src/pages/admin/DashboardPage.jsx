import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminFetch, isUnauthorizedError } from '../../lib/adminApi'

function StatCard({ label, value, icon }) {
  return (
    <div className="bg-[#111] rounded-xl border border-white/[0.06] p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[12px] text-white/40 uppercase tracking-wider">{label}</span>
        <span className="text-[20px]">{icon}</span>
      </div>
      <div className="text-[32px] font-bold text-white">{value}</div>
    </div>
  )
}

export default function DashboardPage() {
  const navigate = useNavigate()
  const [stats, setStats] = useState(null)
  const [recent, setRecent] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let alive = true

    ;(async () => {
      try {
        const data = await adminFetch('/api/admin/stats', { onUnauthorized: () => navigate('/log') })
        if (!alive) return
        setStats(data.stats)
        setRecent(data.recent || [])
      } catch (err) {
        if (!alive) return
        if (!isUnauthorizedError(err)) setError(err.message || 'Greška pri učitavanju statistike')
      } finally {
        if (alive) setLoading(false)
      }
    })()

    return () => {
      alive = false
    }
  }, [navigate])

  if (loading) return <div className="text-white/40 text-[14px]">Učitavanje...</div>
  if (error) return <div className="text-red-400 text-[14px]">{error}</div>

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-[24px] font-bold text-white">Dashboard</h1>
        <p className="text-[13px] text-white/40 mt-1">Pregled aktivnosti na sajtu</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <StatCard label="Prijave" value={stats?.prijave || 0} icon="📋" />
        <StatCard label="Poruke" value={stats?.kontakt || 0} icon="💬" />
        <StatCard label="Newsletter" value={stats?.newsletter || 0} icon="📧" />
        <StatCard label="Emailovi poslati" value={stats?.emailsSent || 0} icon="📤" />
        <StatCard label="Posete" value={stats?.visitsTotal || 0} icon="📈" />
        <StatCard label="Unique" value={stats?.uniqueVisitors || 0} icon="🧭" />
      </div>

      <div className="bg-[#111] rounded-xl border border-white/[0.06] overflow-hidden">
        <div className="px-5 py-3 border-b border-white/[0.06]">
          <h2 className="text-[14px] font-medium text-white">Poslednje aktivnosti</h2>
        </div>
        {recent.length === 0 ? (
          <div className="p-8 text-center text-[13px] text-white/30">Nema aktivnosti za prikaz</div>
        ) : (
          <div className="divide-y divide-white/[0.04]">
            {recent.map((item, i) => (
              <div key={i} className="px-5 py-3 flex items-center justify-between">
                <div>
                  <div className="text-[13px] font-medium text-white">{item.name}</div>
                  <div className="text-[12px] text-white/40">{item.email} {item.program ? `· ${item.program}` : ''}</div>
                </div>
                <div className="text-right">
                  <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                    item.type === 'prijava' ? 'bg-blue-500/10 text-blue-400' :
                    item.type === 'newsletter' ? 'bg-green-500/10 text-green-400' :
                    'bg-amber-500/10 text-amber-400'
                  }`}>{item.type}</span>
                  <div className="text-[11px] text-white/20 mt-1">{new Date(item.created_at || item.date).toLocaleDateString('sr-RS')}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
