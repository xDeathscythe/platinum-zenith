import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import BottomCTA from '../components/BottomCTA'

/* ─── Interactive Heatmap Mock ─────────── */
function HeatmapMock() {
  return (
    <div className="bg-[#0c0c0c] rounded-[11px] border border-white/[0.08] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
        <span className="text-[13px] text-white/50 font-medium">Heatmap analiza</span>
        <div className="flex gap-2">
          {['Klikovi', 'Scroll', 'Pokreti'].map(t => (
            <span key={t} className="text-[11px] text-white/20 hover:text-white/40 cursor-pointer transition-colors">{t}</span>
          ))}
        </div>
      </div>
      <div className="relative h-[300px] p-4">
        {/* Page mockup */}
        <div className="w-full h-full bg-white/[0.02] rounded-lg relative overflow-hidden">
          {/* Header */}
          <div className="h-8 bg-white/[0.03] border-b border-white/[0.04] flex items-center px-3">
            <div className="w-16 h-2 bg-white/10 rounded" />
            <div className="ml-auto flex gap-2">
              <div className="w-8 h-2 bg-white/5 rounded" />
              <div className="w-8 h-2 bg-white/5 rounded" />
            </div>
          </div>

          {/* Heatmap blobs */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-red-500/30 blur-xl" />
          <div className="absolute top-20 left-1/3 w-20 h-20 rounded-full bg-yellow-500/20 blur-lg" />
          <div className="absolute top-40 right-1/4 w-16 h-16 rounded-full bg-orange-500/15 blur-lg" />
          <div className="absolute bottom-16 left-1/4 w-24 h-24 rounded-full bg-red-600/20 blur-xl" />

          {/* Content elements */}
          <div className="absolute top-14 left-1/2 -translate-x-1/2 text-center">
            <div className="w-40 h-3 bg-white/15 rounded mb-2 mx-auto" />
            <div className="w-28 h-2 bg-white/8 rounded mx-auto" />
          </div>
          <div className="absolute top-32 left-1/2 -translate-x-1/2">
            <div className="w-24 h-6 bg-white/20 rounded-full" />
          </div>

          {/* Click markers */}
          {[[45, 30], [52, 42], [30, 55], [68, 35], [55, 70], [40, 82]].map(([x, y], i) => (
            <motion.div key={i}
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.15 }}
              className="absolute w-3 h-3 rounded-full border-2 border-red-400"
              style={{ left: `${x}%`, top: `${y}%`, backgroundColor: 'rgba(239,68,68,0.3)' }} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Before/After Metrics ─────────────── */
function MetricsCompare() {
  const [showAfter, setShowAfter] = useState(false)
  const metrics = [
    { name: 'Stopa konverzije', before: '1.2%', after: '4.8%', change: '+300%', barBefore: 12, barAfter: 48 },
    { name: 'Bounce rate', before: '72%', after: '31%', change: '-57%', barBefore: 72, barAfter: 31, inverted: true },
    { name: 'Avg. session', before: '0:42', after: '3:15', change: '+364%', barBefore: 14, barAfter: 65 },
    { name: 'Pages / session', before: '1.3', after: '4.2', change: '+223%', barBefore: 22, barAfter: 70 },
    { name: 'Form completion', before: '8%', after: '34%', change: '+325%', barBefore: 8, barAfter: 34 },
  ]

  return (
    <div className="bg-[#0c0c0c] rounded-[11px] border border-white/[0.08] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
        <span className="text-[13px] text-white/50 font-medium">Rezultati optimizacije</span>
        <button onClick={() => setShowAfter(!showAfter)}
          className={`text-[12px] px-3 py-1 rounded-full cursor-pointer transition-all ${showAfter ? 'bg-emerald-400/10 text-emerald-400' : 'bg-white/[0.06] text-white/40'}`}>
          {showAfter ? '✓ Posle CRO' : 'Pre CRO'}
        </button>
      </div>
      <div className="p-5 space-y-4">
        {metrics.map((m, i) => (
          <div key={m.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[13px] text-white/50">{m.name}</span>
              <div className="flex items-center gap-2">
                <span className={`text-[13px] font-medium ${showAfter ? 'text-emerald-400' : 'text-white/40'}`}>
                  {showAfter ? m.after : m.before}
                </span>
                {showAfter && (
                  <motion.span initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }}
                    className={`text-[11px] font-bold ${m.inverted ? 'text-emerald-400' : 'text-emerald-400'}`}>{m.change}</motion.span>
                )}
              </div>
            </div>
            <div className="w-full h-2 bg-white/[0.04] rounded-full overflow-hidden">
              <motion.div className="h-full rounded-full"
                animate={{
                  width: showAfter ? `${m.barAfter}%` : `${m.barBefore}%`,
                  backgroundColor: showAfter ? (m.inverted ? '#22c55e' : '#22c55e') : (m.inverted ? '#ef4444' : '#ef4444'),
                }}
                transition={{ duration: 0.8, delay: i * 0.05 }} />
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 pb-4">
        <div className="text-center py-3 bg-white/[0.02] rounded-lg">
          <span className="text-[28px] font-bold text-emerald-400">{showAfter ? '+300%' : '—'}</span>
          <span className="text-[14px] text-white/30 ml-2">prosečno poboljšanje</span>
        </div>
      </div>
    </div>
  )
}

/* ─── Audit Checklist ──────────────────── */
const auditItems = [
  { category: 'UX & Navigacija', items: ['Korisničko putovanje', 'Navigaciona struktura', 'Mobile experience', 'Form UX audit'] },
  { category: 'Performanse', items: ['Core Web Vitals', 'Brzina učitavanja', 'Server response time', 'Image optimizacija'] },
  { category: 'Konverzija', items: ['CTA vidljivost i copy', 'Trust signali', 'Social proof', 'Urgency/scarcity elementi'] },
  { category: 'Testiranje', items: ['A/B test framework', 'Heatmap postavljanje', 'Session recordings', 'Conversion tracking'] },
]

export default function CROPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────── */}
      <section className="pt-[120px] md:pt-[160px] pb-12 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-[12px] text-emerald-400/60 uppercase tracking-widest mb-3 block font-medium">CRO Optimizacija</span>
            <h1 className="text-[36px] md:text-[52px] font-medium leading-[1.08] tracking-[-1.5px] text-white mb-5">
              Više klijenata
              <span className="block text-white/40">isti budžet</span>
            </h1>
            <p className="text-[16px] text-white/50 leading-[26px] mb-8 max-w-[480px]">
              Čak i ako platite Googlu da vas prikazuje prve, bez CRO nećete dobiti klijente koje tražite. Mi optimizujemo svaki korak — od landing page-a do checkout-a.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-white text-black text-[14px] font-medium h-11 px-6 rounded-[40px] hover:bg-white/90 transition-colors">
                Zakažite Audit →
              </Link>
              <Link to="/case-studies" className="inline-flex items-center text-[14px] text-white/50 font-medium hover:text-white transition-colors">
                Pogledajte rezultate →
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <HeatmapMock />
          </motion.div>
        </div>
      </section>

      {/* ─── Before/After ─────────────── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-white mb-4">Prosečni rezultati</h2>
            <p className="text-[16px] text-white/45 leading-[26px] mb-6">
              Kliknite dugme da vidite razliku pre i posle naše CRO optimizacije. Ovo su prosečni rezultati naših klijenata.
            </p>
            <div className="space-y-3">
              {['Heatmap & session recording analiza', 'A/B testiranje 10+ varijanti', 'Copy i CTA optimizacija', 'Mobile-first pristup'].map((t, i) => (
                <motion.div key={t} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-2.5">
                  <span className="text-emerald-400 mt-0.5 text-[14px]">✓</span>
                  <span className="text-[14px] text-white/55">{t}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <MetricsCompare />
          </motion.div>
        </div>
      </section>

      {/* ─── Audit Checklist ──────────── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-white mb-4">Šta uključuje CRO audit</h2>
            <p className="text-[16px] text-white/40 max-w-[500px] mx-auto">Detaljno pregledamo 16+ aspekata vašeg sajta i identifikujemo prilike za rast.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {auditItems.map((cat, ci) => (
              <motion.div key={cat.category} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.1 }}
                className="bg-white/[0.02] rounded-[11px] p-6 border border-white/[0.04]">
                <h3 className="text-[15px] font-medium text-white mb-4">{cat.category}</h3>
                <div className="space-y-2">
                  {cat.items.map(item => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/40" />
                      <span className="text-[13px] text-white/45">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
