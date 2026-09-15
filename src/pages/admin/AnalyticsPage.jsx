import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminFetch } from '../../lib/adminApi'

const eventLabels = { active_time: 'Aktivno vreme', scroll_depth: 'Dubina čitanja', contact_click: 'Klik na kontakt', phone_click: 'Klik na telefon', email_click: 'Klik na email', outbound_click: 'Spoljni link', form_start: 'Početak forme', form_error: 'Greška forme', generate_lead: 'Potvrda prijema upita', booking_open: 'Otvaranje kalendara' }

function Table({ title, columns, rows, onRow }) {
  return <section className="bg-[#111] rounded-xl border border-white/10 overflow-hidden"><h2 className="p-4 font-medium">{title}</h2><div className="overflow-x-auto"><table className="w-full text-sm text-left"><thead className="text-white/50"><tr>{columns.map(([key, label]) => <th className="p-3 font-normal" key={key}>{label}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={row.id || i} className="border-t border-white/5">{columns.map(([key], index) => <td className="p-3 break-words max-w-xs" key={key}>{onRow && index === 0 ? <button className="underline text-blue-300 text-left" onClick={() => onRow(row)}>{row[key]}</button> : row[key] ?? '—'}</td>)}</tr>)}</tbody></table>{!rows.length && <p className="p-4 text-white/40">Još nema podataka za ovaj period.</p>}</div></section>
}
function csv(rows) {
  const keys = Object.keys(rows[0] || {})
  const escape = value => '"' + String(value ?? '').replace(/^[=+@-]/, "'$&").replaceAll('"', '""') + '"'
  const blob = new Blob(['\uFEFF' + [keys, ...rows.map(row => keys.map(key => row[key]))].map(row => row.map(escape).join(',')).join('\r\n')], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a'); a.href = url; a.download = 'platinum-zenith-izvori.csv'; a.click(); URL.revokeObjectURL(url)
}

export default function AnalyticsPage() {
  const navigate = useNavigate()
  const [days, setDays] = useState(30)
  const [data, setData] = useState(null)
  const [detail, setDetail] = useState(null)
  const [error, setError] = useState('')
  useEffect(() => {
    let alive = true
    adminFetch(`/api/admin/growth?days=${days}`, { onUnauthorized: () => navigate('/log') }).then(result => { if (alive) { setData(result); setError('') } }).catch(err => { if (alive) setError(err.message) })
    return () => { alive = false }
  }, [days, navigate])
  const inspect = async row => {
    try { setDetail(await adminFetch(`/api/admin/growth/session/${row.id}`)) } catch (err) { setError(err.message) }
  }
  if (!data) return <p>{error || 'Učitavanje analitike...'}</p>
  const maxDaily = Math.max(1, ...data.daily.map(day => day.sessions))
  return <div className="text-white space-y-6">
    <header className="flex flex-wrap justify-between gap-4"><div><h1 className="text-2xl font-semibold">Posete, upiti i klijenti</h1><p className="text-sm text-white/50 mt-1">Praćenje uz pristanak. Vremena u izveštaju su UTC.</p></div><label>Period<select className="block bg-[#171717] border border-white/20 p-2 rounded" value={days} onChange={e => setDays(Number(e.target.value))}>{[7,30,90,365].map(n => <option value={n} key={n}>{n} dana</option>)}</select></label></header>
    {error && <p role="alert" className="text-red-300">{error}</p>}
    <div className="grid grid-cols-2 xl:grid-cols-5 gap-3">{[['sessions','Sesije'],['visitors','Pregledači'],['pageviews','Pregledi stranica'],['leads','Upiti'],['clients','Klijenti iz upita']].map(([key,label]) => <div className="bg-[#111] rounded-xl border border-white/10 p-4" key={key}><p className="text-sm text-white/50">{label}</p><p className="text-3xl mt-2">{data.totals[key] || 0}</p></div>)}</div>
    <p className="text-sm text-white/50">Sesija počinje novim dolaskom nakon 30 minuta neaktivnosti. Pregledači nisu isto što i osobe. Upiti obuhvataju i {data.totals.unattributed} bez izmerenog izvora.</p>
    <section className="rounded-xl border border-white/10 p-4"><h2 className="font-medium mb-3">Dnevni dolasci</h2>{data.daily.length ? data.daily.map(day => <div key={day.day} className="flex gap-3 items-center text-xs mb-2"><span className="w-20 shrink-0">{day.day}</span><div className="flex-1"><div className="bg-blue-400 h-2 rounded" style={{width:`${day.sessions/maxDaily*100}%`}} /></div><span>{day.sessions}</span></div>) : <p className="text-sm text-white/40">Podaci će se pojaviti nakon prvih prihvaćenih analitičkih sesija.</p>}</section>
    <div className="flex flex-wrap gap-4 text-sm"><a className="underline" href="https://search.google.com/search-console?resource_id=sc-domain%3Aplatinumzenith.com" target="_blank" rel="noreferrer">Google upiti i pozicije</a><a className="underline" href="https://analytics.google.com/" target="_blank" rel="noreferrer">Google Analytics: kanali i lokacije</a><a className="underline" href="https://clarity.microsoft.com/projects/view/yilacvvgl0/dashboard" target="_blank" rel="noreferrer">Clarity: snimci i mape klikova</a><button className="underline" onClick={() => csv(data.sources)}>Preuzmi izvore (CSV)</button></div>
    <Table title="Izvori dolazaka i pripadajući upiti" columns={[["source","Izvor"],["medium","Medijum"],["campaign","Kampanja"],["sessions","Sesije"],["leads","Upiti"],["clients","Klijenti"]]} rows={data.sources}/>
    <p className="text-xs text-white/40">Tabela izvora prati sesije započete u izabranom periodu i upite povezane sa njima. Ukupni upiti iznad prate datum prijema, pa se zbirovi mogu razlikovati. Bez UTM oznaka prikazujemo stvarni domen preporuke.</p>
    <Table title="Ulazne stranice koje dovode upite" columns={[["path","Ulazna stranica"],["sessions","Sesije"],["leads","Upiti"]]} rows={data.landingPages}/>
    <Table title="Šta posetioci gledaju" columns={[["path","Stranica"],["pageviews","Pregledi"],["sessions","Sesije"]]} rows={data.pages}/>
    <Table title="Interakcije" columns={[["label","Događaj"],["count","Broj"],["seconds","Sekunde"]]} rows={data.events.map(event => ({ ...event, label: eventLabels[event.event_name] || event.event_name, seconds: event.event_name === 'active_time' ? event.total_value : '—' }))}/>
    <p className="text-xs text-white/40">Aktivno vreme meri vreme sa vidljivom stranicom. Klik na telefon i otvaranje kalendara nisu potvrđeni pozivi ili sastanci. Upiti i klijenti se broje iz primljenih obrazaca i njihovog ručno potvrđenog statusa.</p>
    <Table title="Ugovorena vrednost po datumu dobijanja klijenta" columns={[["currency","Valuta"],["value","Vrednost"],["clients","Klijenti"]]} rows={data.revenue}/>
    <Table title="Poslednje sesije (kliknite datum za put kroz sajt)" columns={[["created_at","Dolazak"],["source","Izvor"],["landing_path","Ulazna stranica"],["pageviews","Pregledi"],["leads","Upiti"]]} rows={data.recent} onRow={inspect}/>
    {detail && <section className="border border-blue-400/40 rounded-xl p-4 space-y-4"><div className="flex justify-between"><h2>Put kroz sajt: {detail.session.source}</h2><button onClick={() => setDetail(null)}>Zatvori</button></div><Table title="Stranice" columns={[["created_at","Vreme"],["path","Stranica"],["language","Jezik"],["viewport_w","Širina uređaja"]]} rows={detail.pages}/><Table title="Interakcije u sesiji" columns={[["created_at","Vreme"],["event_name","Događaj"],["path","Stranica"],["event_value","Vrednost"]]} rows={detail.events.map(event => ({ ...event, event_name: eventLabels[event.event_name] || event.event_name }))}/></section>}
    <p className="text-xs text-white/40">Sačuvana stara evidencija: {data.legacy.pageviews} pregleda ({data.legacy.first_record || 'nema zapisa'} do {data.legacy.last_record || 'nema zapisa'}). Stari izvori i sesije nisu sabrani sa novim merenjem jer nisu uporedivi.</p>
  </div>
}
