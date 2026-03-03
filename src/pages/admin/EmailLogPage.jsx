import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminFetch, isUnauthorizedError } from '../../lib/adminApi'

export default function EmailLogPage() {
  const navigate = useNavigate()
  const [emails, setEmails] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let alive = true

    ;(async () => {
      try {
        const data = await adminFetch('/api/admin/emails', { onUnauthorized: () => navigate('/log') })
        if (!alive) return
        setEmails(data.emails || [])
      } catch (err) {
        if (!alive) return
        if (!isUnauthorizedError(err)) setError(err.message || 'Greška pri učitavanju email loga')
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
        <h1 className="text-[24px] font-bold text-white">Email Log</h1>
        <p className="text-[13px] text-white/40 mt-1">{emails.length} emailova poslato</p>
      </div>

      <div className="bg-[#111] rounded-xl border border-white/[0.06] overflow-hidden">
        {emails.length === 0 ? (
          <div className="p-12 text-center text-[13px] text-white/30">Nema poslatih emailova</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="px-5 py-3 text-[11px] text-white/40 uppercase tracking-wider font-medium">Primalac</th>
                  <th className="px-5 py-3 text-[11px] text-white/40 uppercase tracking-wider font-medium">Predmet</th>
                  <th className="px-5 py-3 text-[11px] text-white/40 uppercase tracking-wider font-medium">Tip</th>
                  <th className="px-5 py-3 text-[11px] text-white/40 uppercase tracking-wider font-medium">Datum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {emails.map((e, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-5 py-3 text-[13px] text-white">{e.recipient}</td>
                    <td className="px-5 py-3 text-[13px] text-white/70">{e.subject}</td>
                    <td className="px-5 py-3">
                      <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                        e.type === 'notification' ? 'bg-blue-500/10 text-blue-400' : 'bg-green-500/10 text-green-400'
                      }`}>{e.type === 'notification' ? 'Obaveštenje' : 'Potvrda'}</span>
                    </td>
                    <td className="px-5 py-3 text-[12px] text-white/30">{new Date(e.created_at).toLocaleString('sr-RS')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
