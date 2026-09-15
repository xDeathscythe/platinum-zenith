import { useEffect, useState } from 'react'
import { adminFetch } from '../../lib/adminApi'

const stages = { new: 'Nov upit', qualified: 'Kvalifikovan', meeting: 'Sastanak', proposal: 'Ponuda', won: 'Klijent', lost: 'Nije ugovoreno' }
export default function LeadAttribution({ id }) {
  const [data, setData] = useState(null)
  const [message, setMessage] = useState('')
  useEffect(() => {
    let alive = true
    adminFetch(`/api/admin/leads/${id}/attribution`).then(value => { if (alive) setData(value) }).catch(error => { if (alive) setMessage(error.message) })
    return () => { alive = false }
  }, [id])
  if (!data) return <p className="text-sm mt-4">{message || 'Učitavanje izvora upita...'}</p>
  const { lead, pages } = data
  const first = lead.first_touch_json ? JSON.parse(lead.first_touch_json) : null
  const update = (field, value) => setData({ ...data, lead: { ...lead, [field]: value } })
  const submit = async (event) => {
    event.preventDefault()
    try {
      await adminFetch(`/api/admin/leads/${id}`, { method: 'PATCH', body: JSON.stringify({ stage: lead.lead_stage, revenue: lead.revenue === '' || lead.revenue === null ? null : Number(lead.revenue), currency: lead.revenue_currency }) })
      setMessage('Sačuvano.')
    } catch (error) { setMessage(error.message) }
  }
  return <div className="mt-5 border-t border-white/10 pt-4 text-sm space-y-3">
    <p><strong>Izvor upita:</strong> {lead.source ? `${lead.source} / ${lead.medium}` : 'Nije izmeren (stariji upit ili bez pristanka)'} {lead.campaign && `· ${lead.campaign}`}</p>
    {first && <p><strong>Prvi dolazak:</strong> {first.source} / {first.medium} · {first.landingPath}</p>}
    {!!pages.length && <div><strong>Put do upita</strong><ol className="list-decimal pl-5 mt-2 text-white/60">{pages.map((page, i) => <li key={i}>{page.path} <span className="text-xs">{page.created_at} UTC</span></li>)}</ol></div>}
    <form onSubmit={submit} className="flex flex-wrap gap-3 items-end">
      <label>Status<select className="block bg-[#171717] border border-white/20 rounded p-2" value={lead.lead_stage} onChange={e => update('lead_stage', e.target.value)}>{Object.entries(stages).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
      <label>Ugovorena vrednost<input type="number" min="0" step="0.01" className="block w-36 bg-[#171717] border border-white/20 rounded p-2" value={lead.revenue ?? ''} onChange={e => update('revenue', e.target.value)} /></label>
      <label>Valuta<select className="block bg-[#171717] border border-white/20 rounded p-2" value={lead.revenue_currency} onChange={e => update('revenue_currency', e.target.value)}>{['EUR', 'RSD', 'USD'].map(c => <option key={c}>{c}</option>)}</select></label>
      <button className="bg-white text-black rounded px-4 py-2">Sačuvaj</button>
    </form>
    <p role="status">{message}</p>
  </div>
}
