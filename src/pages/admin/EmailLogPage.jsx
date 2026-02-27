import { useEffect, useState } from 'react'

export default function EmailLogPage() {
  const [emailsSent, setEmailsSent] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('pz_token')
    fetch('/api/admin/stats', { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.json())
      .then(data => {
        if (data.ok) setEmailsSent(data.stats?.emailsSent || 0)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) return <div className="text-white/40 text-[14px]">Učitavanje...</div>

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-[24px] font-bold text-white">Email Log</h1>
        <p className="text-[13px] text-white/40 mt-1">Praćenje svih poslatih emailova</p>
      </div>

      <div className="bg-[#111] rounded-xl border border-white/[0.06] p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-[24px]">📤</div>
          <div>
            <div className="text-[32px] font-bold text-white">{emailsSent}</div>
            <div className="text-[13px] text-white/40">emailova poslato ukupno</div>
          </div>
        </div>
        <div className="border-t border-white/[0.06] pt-4">
          <p className="text-[13px] text-white/30 leading-relaxed">
            Svaki put kad se pošalje email (potvrda prijave, odgovor na poruku), brojač se povećava.
            Detaljan log sa sadržajem emailova biće dostupan u sledećoj verziji.
          </p>
        </div>
      </div>

      {/* Future: detailed email log with content, status, timestamps */}
      <div className="mt-6 bg-[#111] rounded-xl border border-white/[0.06] border-dashed p-8 text-center">
        <div className="text-[24px] mb-2">🚧</div>
        <p className="text-[14px] text-white/50 font-medium mb-1">Detaljan Email Log</p>
        <p className="text-[12px] text-white/25">Uskoro: sadržaj emailova, status isporuke, open tracking, integracija sa mailing platformama</p>
      </div>
    </div>
  )
}
