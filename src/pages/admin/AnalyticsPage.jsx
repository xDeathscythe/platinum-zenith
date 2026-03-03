import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminFetch, isUnauthorizedError } from '../../lib/adminApi'

const PERIODS = [7, 30, 90]

function Card({ label, value, helper }) {
  return (
    <div className="bg-[#111] rounded-xl border border-white/[0.06] p-5">
      <div className="text-[12px] text-white/40 uppercase tracking-wider">{label}</div>
      <div className="text-[30px] font-bold text-white mt-2">{value}</div>
      {helper ? <div className="text-[12px] text-white/35 mt-1">{helper}</div> : null}
    </div>
  )
}

function TopTable({ title, rows, showSlug = false }) {
  return (
    <div className="bg-[#111] rounded-xl border border-white/[0.06] overflow-hidden">
      <div className="px-5 py-3 border-b border-white/[0.06]">
        <h2 className="text-[14px] font-medium text-white">{title}</h2>
      </div>
      {rows.length === 0 ? (
        <div className="p-6 text-[13px] text-white/35">Nema podataka za izabrani period.</div>
      ) : (
        <div className="divide-y divide-white/[0.04]">
          {rows.map((row, idx) => (
            <div key={`${row.path || row.slug}-${idx}`} className="px-5 py-3 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="text-[13px] text-white truncate">{showSlug ? row.slug || row.path : row.path}</div>
                {showSlug ? <div className="text-[11px] text-white/35 truncate">{row.path}</div> : null}
              </div>
              <div className="text-right shrink-0">
                <div className="text-[13px] text-white font-medium">{row.visits}</div>
                <div className="text-[11px] text-white/35">unique {row.unique_visitors}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function AnalyticsPage() {
  const navigate = useNavigate()
  const [days, setDays] = useState(30)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [data, setData] = useState(null)

  useEffect(() => {
    let alive = true
    setLoading(true)
    setError('')

    ;(async () => {
      try {
        const res = await adminFetch(`/api/admin/analytics/overview?days=${days}`, {
          onUnauthorized: () => navigate('/log'),
        })
        if (!alive) return
        setData(res)
      } catch (err) {
        if (!alive) return
        if (!isUnauthorizedError(err)) setError(err.message || 'Greška pri učitavanju analitike')
      } finally {
        if (alive) setLoading(false)
      }
    })()

    return () => {
      alive = false
    }
  }, [days, navigate])

  const maxDailyVisits = useMemo(() => {
    if (!data?.daily?.length) return 1
    return Math.max(...data.daily.map((d) => Number(d.visits) || 0), 1)
  }, [data])

  if (loading) return <div className="text-[14px] text-white/40">Učitavanje analitike...</div>
  if (error) return <div className="text-[14px] text-red-400">{error}</div>

  const totals = data?.totals || {}

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-[24px] font-bold text-white">Visit Analytics</h1>
          <p className="text-[13px] text-white/40 mt-1">Posete po stranicama i blogovima</p>
        </div>
        <div className="flex items-center gap-2 bg-[#111] border border-white/[0.06] rounded-lg p-1">
          {PERIODS.map((n) => (
            <button
              key={n}
              onClick={() => setDays(n)}
              className={`px-3 py-1.5 text-[12px] rounded-md cursor-pointer transition-colors ${
                days === n ? 'bg-white text-black' : 'text-white/60 hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              {n} dana
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card label="Ukupno poseta" value={totals.total_visits || 0} />
        <Card label="Unique session" value={totals.unique_visitors || 0} />
        <Card label="Page posete" value={totals.page_visits || 0} />
        <Card label="Blog posete" value={totals.blog_post_visits || 0} />
      </div>

      <div className="bg-[#111] rounded-xl border border-white/[0.06] overflow-hidden mb-6">
        <div className="px-5 py-3 border-b border-white/[0.06]">
          <h2 className="text-[14px] font-medium text-white">Dnevni trend</h2>
        </div>
        {data?.daily?.length ? (
          <div className="p-4 space-y-2">
            {data.daily.map((d) => {
              const visits = Number(d.visits) || 0
              const pct = Math.max(4, Math.round((visits / maxDailyVisits) * 100))
              return (
                <div key={d.day} className="grid grid-cols-[90px_1fr_60px] items-center gap-3">
                  <div className="text-[11px] text-white/40">{d.day}</div>
                  <div className="h-2 rounded bg-white/[0.06] overflow-hidden">
                    <div className="h-full bg-blue-400" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="text-[12px] text-white text-right">{visits}</div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="p-6 text-[13px] text-white/35">Nema podataka.</div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <TopTable title="Top stranice" rows={data?.topPages || []} />
        <TopTable title="Top blog postovi" rows={data?.topBlogPosts || []} showSlug />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#111] rounded-xl border border-white/[0.06] overflow-hidden">
          <div className="px-5 py-3 border-b border-white/[0.06]">
            <h2 className="text-[14px] font-medium text-white">Source breakdown</h2>
          </div>
          {data?.sourceBreakdown?.length ? (
            <div className="divide-y divide-white/[0.04]">
              {data.sourceBreakdown.map((s, i) => (
                <div key={`${s.source}-${i}`} className="px-5 py-3 flex items-center justify-between">
                  <div className="text-[13px] text-white/70">{s.source}</div>
                  <div className="text-[13px] text-white">{s.visits}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-[13px] text-white/35">Nema source podataka.</div>
          )}
        </div>

        <div className="bg-[#111] rounded-xl border border-white/[0.06] overflow-hidden">
          <div className="px-5 py-3 border-b border-white/[0.06]">
            <h2 className="text-[14px] font-medium text-white">Event summary</h2>
          </div>
          {data?.eventSummary?.length ? (
            <div className="divide-y divide-white/[0.04]">
              {data.eventSummary.map((e, i) => (
                <div key={`${e.event_name}-${i}`} className="px-5 py-3 flex items-center justify-between">
                  <div className="text-[13px] text-white/70">{e.event_name}</div>
                  <div className="text-right">
                    <div className="text-[13px] text-white">{e.count}</div>
                    {e.avg_value !== null && e.avg_value !== undefined ? (
                      <div className="text-[11px] text-white/35">avg {Number(e.avg_value).toFixed(1)}</div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-[13px] text-white/35">Nema event podataka.</div>
          )}
        </div>
      </div>
    </div>
  )
}
