import { useEffect, useState } from 'react'

export default function PrijavePage() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('pz_token')
    fetch('/api/admin/submissions', { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.json())
      .then(data => {
        if (data.ok) setItems(data.prijave || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) return <div className="text-white/40 text-[14px]">Učitavanje...</div>

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-[24px] font-bold text-white">Prijave za seminare</h1>
          <p className="text-[13px] text-white/40 mt-1">{items.length} prijava ukupno</p>
        </div>
      </div>

      <div className="bg-[#111] rounded-xl border border-white/[0.06] overflow-hidden">
        {items.length === 0 ? (
          <div className="p-12 text-center text-[13px] text-white/30">Nema prijava za prikaz</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="px-5 py-3 text-[11px] text-white/40 uppercase tracking-wider font-medium">Ime</th>
                  <th className="px-5 py-3 text-[11px] text-white/40 uppercase tracking-wider font-medium">Email</th>
                  <th className="px-5 py-3 text-[11px] text-white/40 uppercase tracking-wider font-medium">Telefon</th>
                  <th className="px-5 py-3 text-[11px] text-white/40 uppercase tracking-wider font-medium">Firma</th>
                  <th className="px-5 py-3 text-[11px] text-white/40 uppercase tracking-wider font-medium">Program</th>
                  <th className="px-5 py-3 text-[11px] text-white/40 uppercase tracking-wider font-medium">Datum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {items.map((item, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-5 py-3 text-[13px] text-white font-medium">{item.name}</td>
                    <td className="px-5 py-3 text-[13px] text-white/70"><a href={`mailto:${item.email}`} className="hover:text-white">{item.email}</a></td>
                    <td className="px-5 py-3 text-[13px] text-white/70"><a href={`tel:${item.phone}`} className="hover:text-white">{item.phone}</a></td>
                    <td className="px-5 py-3 text-[13px] text-white/70">{item.company}</td>
                    <td className="px-5 py-3"><span className="text-[11px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full">{item.program}</span></td>
                    <td className="px-5 py-3 text-[12px] text-white/30">{new Date(item.created_at).toLocaleString('sr-RS')}</td>
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
