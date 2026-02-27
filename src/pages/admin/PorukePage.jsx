import { useEffect, useState } from 'react'

export default function PorukePage() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('pz_token')
    fetch('/api/admin/submissions', { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.json())
      .then(data => {
        if (data.ok) setItems(data.kontakt || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) return <div className="text-white/40 text-[14px]">Učitavanje...</div>

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-[24px] font-bold text-white">Poruke sa kontakt forme</h1>
        <p className="text-[13px] text-white/40 mt-1">{items.length} poruka ukupno</p>
      </div>

      <div className="space-y-2">
        {items.length === 0 ? (
          <div className="bg-[#111] rounded-xl border border-white/[0.06] p-12 text-center text-[13px] text-white/30">Nema poruka za prikaz</div>
        ) : (
          items.map((item, i) => (
            <div key={i} className="bg-[#111] rounded-xl border border-white/[0.06] overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full text-left px-5 py-4 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-[14px]">💬</div>
                  <div>
                    <div className="text-[13px] font-medium text-white">{item.name}{item.company ? ` · ${item.company}` : ''}</div>
                    <div className="text-[12px] text-white/40">{item.email}</div>
                  </div>
                </div>
                <div className="text-[11px] text-white/20">{new Date(item.date).toLocaleString('sr-RS')}</div>
              </button>
              {expanded === i && (
                <div className="px-5 pb-4 pt-0 border-t border-white/[0.04]">
                  <p className="text-[13px] text-white/70 leading-relaxed whitespace-pre-wrap mt-3">{item.message}</p>
                  <div className="flex gap-2 mt-4">
                    <a href={`mailto:${item.email}`} className="text-[12px] text-blue-400 hover:text-blue-300 transition-colors">Odgovori →</a>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
