import { useEffect, useState } from 'react'

export default function NewsletterPage() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('pz_token')
    fetch('/api/admin/submissions', { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.json())
      .then(data => {
        if (data.ok) setItems(data.newsletter || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) return <div className="text-white/40 text-[14px]">Učitavanje...</div>

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-[24px] font-bold text-white">Newsletter pretplatnici</h1>
          <p className="text-[13px] text-white/40 mt-1">{items.length} pretplatnika</p>
        </div>
        {items.length > 0 && (
          <button
            onClick={() => {
              const csv = 'Email,Datum\n' + items.map(i => `${i.email},${i.date}`).join('\n')
              const blob = new Blob([csv], { type: 'text/csv' })
              const url = URL.createObjectURL(blob)
              const a = document.createElement('a')
              a.href = url
              a.download = 'newsletter-pretplatnici.csv'
              a.click()
            }}
            className="text-[12px] text-white/50 hover:text-white bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            📥 Eksportuj CSV
          </button>
        )}
      </div>

      <div className="bg-[#111] rounded-xl border border-white/[0.06] overflow-hidden">
        {items.length === 0 ? (
          <div className="p-12 text-center text-[13px] text-white/30">Nema pretplatnika za prikaz</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="px-5 py-3 text-[11px] text-white/40 uppercase tracking-wider font-medium w-8">#</th>
                  <th className="px-5 py-3 text-[11px] text-white/40 uppercase tracking-wider font-medium">Email</th>
                  <th className="px-5 py-3 text-[11px] text-white/40 uppercase tracking-wider font-medium">Datum prijave</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {items.map((item, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-5 py-3 text-[12px] text-white/20">{i + 1}</td>
                    <td className="px-5 py-3 text-[13px] text-white font-medium">{item.email}</td>
                    <td className="px-5 py-3 text-[12px] text-white/30">{new Date(item.date).toLocaleString('sr-RS')}</td>
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
