import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

/* ─── Formatiranje ─── */
const fmt = (n) => new Intl.NumberFormat('sr-RS').format(Math.round(n))
const fmtEur = (n) => `€${fmt(n)}`

/* ─── ROI Kalkulator Page ─── */
export default function ROICalculatorPage() {
  usePageMeta()

  const [budget, setBudget] = useState(1000)
  const [convRate, setConvRate] = useState(2.5)
  const [avgOrder, setAvgOrder] = useState(80)
  const [visitors, setVisitors] = useState(5000)
  const [margin, setMargin] = useState(40)

  const results = useMemo(() => {
    const customers = Math.round(visitors * (convRate / 100))
    const revenue = customers * avgOrder
    const grossProfit = revenue * (margin / 100)
    const netProfit = grossProfit - budget
    const roi = budget > 0 ? ((netProfit / budget) * 100) : 0
    const costPerCustomer = customers > 0 ? budget / customers : 0
    const revenuePerEuro = budget > 0 ? revenue / budget : 0

    return { customers, revenue, grossProfit, netProfit, roi, costPerCustomer, revenuePerEuro }
  }, [budget, convRate, avgOrder, visitors, margin])

  const roiColor = results.roi >= 200 ? '#22c55e' : results.roi >= 50 ? '#eab308' : '#ef4444'

  return (
    <div className="min-h-screen bg-page">
      {/* Hero */}
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(168,85,247,0.1) 0%, transparent 50%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(168,85,247,0.06) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Besplatan Alat</span>
          <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">
            ROI Kalkulator za Marketing
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[600px] mx-auto">
            Izračunajte povrat investicije za vaš marketing budžet. Unesite podatke o vašem biznisu i saznajte koliko vam marketing zaista donosi.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">

          {/* Input Side */}
          <div className="bg-panel rounded-[20px] border border-edge p-6 md:p-8">
            <h2 className="text-[20px] font-medium text-ink mb-8">Parametri vašeg biznisa</h2>

            <div className="space-y-7">
              <SliderInput
                label="Mesečni marketing budžet"
                value={budget}
                onChange={setBudget}
                min={100}
                max={20000}
                step={100}
                format={fmtEur}
              />
              <SliderInput
                label="Mesečni posetioci sajta"
                value={visitors}
                onChange={setVisitors}
                min={500}
                max={100000}
                step={500}
                format={fmt}
              />
              <SliderInput
                label="Stopa konverzije"
                value={convRate}
                onChange={setConvRate}
                min={0.5}
                max={15}
                step={0.1}
                format={(v) => `${v.toFixed(1)}%`}
                hint="Procenat posetilaca koji postanu kupci"
              />
              <SliderInput
                label="Prosečna vrednost narudžbine"
                value={avgOrder}
                onChange={setAvgOrder}
                min={10}
                max={5000}
                step={10}
                format={fmtEur}
              />
              <SliderInput
                label="Profitna marža"
                value={margin}
                onChange={setMargin}
                min={5}
                max={90}
                step={1}
                format={(v) => `${v}%`}
                hint="Procenat prihoda koji ostaje kao profit"
              />
            </div>

            {/* Benchmarks */}
            <div className="mt-8 pt-6 border-t border-edge">
              <p className="text-[12px] text-ink-4 uppercase tracking-widest mb-3">Prosečne vrednosti po industriji</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: 'E-commerce', conv: '2-3%', aov: '€60-120' },
                  { label: 'B2B usluge', conv: '3-5%', aov: '€500-5000' },
                  { label: 'SaaS', conv: '3-7%', aov: '€30-200/m' },
                  { label: 'Lokalni biznis', conv: '5-10%', aov: '€20-80' },
                ].map(b => (
                  <div key={b.label} className="bg-tint rounded-lg p-3">
                    <div className="text-[11px] text-ink-3 font-medium mb-1">{b.label}</div>
                    <div className="text-[12px] text-ink-2">Conv: {b.conv}</div>
                    <div className="text-[12px] text-ink-2">AOV: {b.aov}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results Side */}
          <div className="space-y-5">
            {/* ROI Hero Card */}
            <div className="bg-panel rounded-[20px] border border-edge p-6 text-center">
              <p className="text-[12px] text-ink-4 uppercase tracking-widest mb-2">Povrat investicije (ROI)</p>
              <div className="text-[56px] md:text-[72px] font-bold leading-none" style={{ color: roiColor }}>
                {results.roi > 0 ? '+' : ''}{fmt(results.roi)}%
              </div>
              <p className="text-[13px] text-ink-3 mt-2">
                {results.roi >= 200 ? 'Odličan ROI' : results.roi >= 50 ? 'Solidan ROI' : results.roi > 0 ? 'Nizak ROI' : 'Negativan ROI'}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              <MetricCard label="Mesečni prihod" value={fmtEur(results.revenue)} />
              <MetricCard label="Bruto profit" value={fmtEur(results.grossProfit)} />
              <MetricCard label="Neto profit" value={fmtEur(results.netProfit)} highlight={results.netProfit > 0} />
              <MetricCard label="Novih kupaca" value={fmt(results.customers)} />
              <MetricCard label="Cena po kupcu" value={fmtEur(results.costPerCustomer)} />
              <MetricCard label="Prihod po €1" value={`€${results.revenuePerEuro.toFixed(1)}`} />
            </div>

            {/* CTA */}
            <div className="bg-panel rounded-[20px] border border-edge p-6 text-center">
              <p className="text-[14px] text-ink-2 mb-4">
                Želite da poboljšate ove brojke?
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors"
              >
                Zakažite besplatne konsultacije
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <p className="text-[12px] text-ink-4 mt-3">
                Bez obaveza. Analiziramo vaš biznis i predlažemo konkretne korake.
              </p>
            </div>
          </div>
        </div>

        {/* SEO Content Below Calculator */}
        <div className="max-w-[760px] mx-auto mt-16 md:mt-24">
          <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-6">Kako koristiti ROI kalkulator</h2>
          <div className="text-[15px] md:text-[16px] text-ink-2 leading-relaxed space-y-4">
            <p>
              ROI (Return on Investment) predstavlja odnos između profita i uloženog novca u marketing. Formula je jednostavna: ROI = ((Profit - Ulaganje) / Ulaganje) × 100%.
            </p>
            <p>
              Na primer, ako uložite €1.000 mesečno u digitalni marketing i generišete €4.000 prihoda sa 40% profitne marže, vaš neto profit je €600, a ROI iznosi 60%.
            </p>
            <p>
              Kalkulator iznad uzima u obzir pet parametara: vaš marketing budžet, broj posetilaca sajta, stopu konverzije, prosečnu vrednost narudžbine i profitnu maržu. Na osnovu tih podataka izračunava koliko novih kupaca možete očekivati, koliki prihod generišete i koliki je vaš stvarni povrat investicije.
            </p>
            <h3 className="text-[18px] font-medium text-ink pt-4">Šta je dobar ROI za marketing?</h3>
            <p>
              Generalno, ROI od 100% ili više znači da vaš marketing zarađuje više nego što troši. ROI od 200%+ smatra se odličnim rezultatom. Međutim, "dobar" ROI zavisi od industrije, faze poslovanja i tipa marketinga koji koristite.
            </p>
            <h3 className="text-[18px] font-medium text-ink pt-4">Kako poboljšati marketing ROI?</h3>
            <p>
              Tri načina da povećate ROI: (1) povećajte stopu konverzije kroz CRO optimizaciju sajta, (2) povećajte prosečnu vrednost narudžbine kroz upsell i cross-sell strategije, i (3) smanjite cenu po korisniku kroz bolji targeting i kvalitetnije oglase.
            </p>
          </div>

          {/* Internal Links */}
          <div className="mt-10 pt-8 border-t border-edge">
            <p className="text-[12px] text-ink-4 uppercase tracking-widest mb-4">Povezane usluge</p>
            <div className="flex flex-wrap gap-3">
              {[
                { to: '/digitalni-marketing', label: 'Digitalni Marketing' },
                { to: '/cro', label: 'CRO Optimizacija' },
                { to: '/consulting', label: 'Poslovno Savetovanje' },
                { to: '/web-design', label: 'Web Dizajn' },
              ].map(l => (
                <Link key={l.to} to={l.to} className="text-[13px] text-ink-3 bg-tint px-4 py-2 rounded-full hover:bg-tint-2 hover:text-ink-2 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ─── Slider Input Component ─── */
function SliderInput({ label, value, onChange, min, max, step, format, hint }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-[14px] text-ink font-medium">{label}</label>
        <span className="text-[15px] text-ink font-semibold tabular-nums">{format(value)}</span>
      </div>
      {hint && <p className="text-[12px] text-ink-4 mb-2">{hint}</p>}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-tint-2 rounded-full appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
          [&::-webkit-slider-thumb]:bg-ink [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer
          [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:bg-ink
          [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
      />
    </div>
  )
}

/* ─── Metric Card Component ─── */
function MetricCard({ label, value, highlight }) {
  return (
    <div className="bg-panel rounded-[14px] border border-edge p-4">
      <div className="text-[11px] text-ink-4 uppercase tracking-wider mb-1">{label}</div>
      <div className={`text-[18px] font-semibold ${highlight ? 'text-emerald-500' : 'text-ink'}`}>{value}</div>
    </div>
  )
}
