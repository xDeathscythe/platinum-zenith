import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BottomCTA from '../components/BottomCTA'

/* ─── Live Dashboard Mockup ────────────── */
function DashboardMock() {
  const [activeChannel, setActiveChannel] = useState(0)
  const channels = [
    { name: 'Meta Ads', spend: '€2,400', revenue: '€36,000', roas: '15x', cpa: '€14', leads: 171, status: 'active', color: '#1877f2' },
    { name: 'Google Ads', spend: '€1,800', revenue: '€27,000', roas: '15x', cpa: '€12', leads: 150, status: 'active', color: '#34a853' },
    { name: 'TikTok Ads', spend: '€900', revenue: '€13,500', roas: '15x', cpa: '€18', leads: 50, status: 'scaling', color: '#ff004f' },
    { name: 'Email', spend: '€0', revenue: '€4,200', roas: '∞', cpa: '€0', leads: 84, status: 'automated', color: '#f59e0b' },
  ]
  const ch = channels[activeChannel]

  // Auto-rotate
  useEffect(() => {
    const t = setInterval(() => setActiveChannel(p => (p + 1) % channels.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="bg-[#0c0c0c] rounded-[11px] border border-white/[0.08] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
        <span className="text-[13px] text-white/50 font-medium">Zenith Dashboard</span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] text-emerald-400/60">Live</span>
        </div>
      </div>

      {/* Channel tabs */}
      <div className="flex border-b border-white/[0.06]">
        {channels.map((c, i) => (
          <button key={c.name} onClick={() => setActiveChannel(i)}
            className={`flex-1 py-2.5 text-[12px] font-medium transition-all cursor-pointer relative ${i === activeChannel ? 'text-white' : 'text-white/30 hover:text-white/50'}`}>
            {c.name}
            {i === activeChannel && <motion.div layoutId="chTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
          </button>
        ))}
      </div>

      {/* Metrics */}
      <AnimatePresence mode="wait">
        <motion.div key={activeChannel} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-5">
          <div className="grid grid-cols-3 gap-4 mb-5">
            <div>
              <div className="text-[11px] text-white/25 uppercase tracking-wider mb-1">Spend</div>
              <div className="text-[22px] font-bold text-white">{ch.spend}</div>
            </div>
            <div>
              <div className="text-[11px] text-white/25 uppercase tracking-wider mb-1">Revenue</div>
              <div className="text-[22px] font-bold text-emerald-400">{ch.revenue}</div>
            </div>
            <div>
              <div className="text-[11px] text-white/25 uppercase tracking-wider mb-1">ROAS</div>
              <div className="text-[22px] font-bold text-white">{ch.roas}</div>
            </div>
          </div>

          {/* Mini chart */}
          <div className="h-[80px] flex items-end gap-1 mb-4">
            {Array.from({length: 14}, (_, i) => {
              const h = 20 + Math.random() * 60
              return (
                <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.03 }}
                  className="flex-1 rounded-t-sm" style={{ backgroundColor: ch.color, opacity: 0.3 + (i / 14) * 0.7 }} />
              )
            })}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-[12px]"><span className="text-white/30">CPA:</span> <span className="text-white font-medium">{ch.cpa}</span></div>
              <div className="text-[12px]"><span className="text-white/30">Leads:</span> <span className="text-white font-medium">{ch.leads}</span></div>
            </div>
            <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
              ch.status === 'active' ? 'bg-emerald-400/10 text-emerald-400' :
              ch.status === 'scaling' ? 'bg-blue-400/10 text-blue-400' :
              'bg-amber-400/10 text-amber-400'
            }`}>{ch.status}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

/* ─── Funnel Visualization ─────────────── */
function FunnelViz() {
  const stages = [
    { name: 'Impressions', value: '125,000', width: '100%', color: 'bg-white/[0.08]' },
    { name: 'Klikovi', value: '4,375', width: '75%', color: 'bg-white/[0.10]' },
    { name: 'Landing Page', value: '3,500', width: '55%', color: 'bg-blue-500/20' },
    { name: 'Leads', value: '455', width: '35%', color: 'bg-purple-500/20' },
    { name: 'Klijenti', value: '91', width: '20%', color: 'bg-emerald-500/20' },
  ]
  return (
    <div className="space-y-2">
      {stages.map((s, i) => (
        <motion.div key={s.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
          className={`${s.color} rounded-[8px] p-4 flex items-center justify-between transition-all mx-auto`}
          style={{ width: s.width }}>
          <span className="text-[13px] text-white/60 font-medium">{s.name}</span>
          <span className="text-[14px] text-white font-bold">{s.value}</span>
        </motion.div>
      ))}
      <div className="text-center pt-3">
        <span className="text-[13px] text-white/30">Konverzija kroz funnel: </span>
        <span className="text-emerald-400 font-bold text-[15px]">20%</span>
      </div>
    </div>
  )
}

/* ─── Channel Detail Cards ─────────────── */
const channelDetails = [
  {
    name: 'Meta Ads',
    icon: '📱',
    gradient: 'from-blue-600/20 to-blue-900/5',
    desc: 'Facebook & Instagram oglasi sa preciznim targetiranjem. Retargeting, lookalike audiences, dinamički kreativ.',
    metrics: ['ROAS 15x prosek', 'Lookalike 2-5% publike', 'A/B test 10+ varijanti', 'Retargeting 7/30/90 dana'],
  },
  {
    name: 'Google Ads',
    icon: '🔍',
    gradient: 'from-green-600/20 to-green-900/5',
    desc: 'Hvatamo korisnike u momentu pretrage — kad su spremni da kupe. Search, Shopping, Performance Max.',
    metrics: ['CPA €12 prosek', 'Quality Score 8+', 'Negativne ključne reči', 'Automated bidding'],
  },
  {
    name: 'TikTok Ads',
    icon: '🎵',
    gradient: 'from-pink-600/20 to-pink-900/5',
    desc: 'Viralni kreativ za mlađe demografije. UGC stil oglasi koji ne izgledaju kao oglasi.',
    metrics: ['CTR 3.8% prosek', 'UGC kreativ pristup', 'Spark Ads format', 'Brzo skaliranje'],
  },
  {
    name: 'Email Automatizacija',
    icon: '✉️',
    gradient: 'from-amber-600/20 to-amber-900/5',
    desc: 'Automatizovani nizovi koji pretvaraju lead-ove u kupce. Welcome, nurture, abandoned cart, re-engagement.',
    metrics: ['Open rate 42%', 'Segmentacija publike', 'Drip kampanje', 'A/B subject lines'],
  },
]

/* ─── Main Page ────────────────────────── */
export default function MarketingPage() {
  return (
    <>
      {/* ─── Hero — split layout ─────── */}
      <section className="pt-[120px] md:pt-[160px] pb-12 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-[12px] text-emerald-400/60 uppercase tracking-widest mb-3 block font-medium">Digitalni Marketing</span>
            <h1 className="text-[36px] md:text-[52px] font-medium leading-[1.08] tracking-[-1.5px] text-white mb-5">
              Zenith sistem
              <span className="block text-white/40">akvizicije klijenata</span>
            </h1>
            <p className="text-[16px] text-white/50 leading-[26px] mb-8 max-w-[480px]">
              Razvili smo dokazan i predvidljiv način da visoko-kvalifikovani prospekti dođu u vaš biznis. Sistem koji dramatično povećava broj klijenata spremnih da kupe.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-white text-black text-[14px] font-medium h-11 px-6 rounded-[40px] hover:bg-white/90 transition-colors">
                Zakažite Konsultacije →
              </Link>
              <Link to="/paketi" className="inline-flex items-center text-[14px] text-white/50 font-medium hover:text-white transition-colors">
                Pogledajte pakete →
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <DashboardMock />
          </motion.div>
        </div>
      </section>

      {/* ─── Funnel Section ────────────── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-white mb-4">Od impresije do klijenta</h2>
                <p className="text-[16px] text-white/45 leading-[26px] mb-6">
                  Svaki korak u funnel-u je optimizovan. Ne bacamo novac na saobraćaj koji ne konvertuje — svaki €1 uložen u oglase mora doneti merljiv povratak.
                </p>
                <div className="space-y-3">
                  {['Precizno targetiranje — samo kvalifikovani prospekti', 'Optimizovani landing page-evi za konverziju', 'Automatizovani follow-up za svaki lead', 'Nedeljni A/B testovi i skaliranje pobednika'].map((t, i) => (
                    <motion.div key={t} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-2.5">
                      <span className="text-emerald-400 mt-0.5 text-[14px]">✓</span>
                      <span className="text-[14px] text-white/55">{t}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            <FunnelViz />
          </div>
        </div>
      </section>

      {/* ─── Channel Cards ────────────── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-white mb-4">Kanali koje koristimo</h2>
            <p className="text-[16px] text-white/40 max-w-[500px] mx-auto">Svaki kanal ima svoju ulogu u sistemu. Zajedno donose predvidljive rezultate.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {channelDetails.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-br ${c.gradient} rounded-[11px] p-7 border border-white/[0.05] hover:border-white/[0.10] transition-colors group`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{c.icon}</span>
                  <h3 className="text-[20px] font-medium text-white">{c.name}</h3>
                </div>
                <p className="text-[14px] text-white/50 leading-relaxed mb-5">{c.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {c.metrics.map(m => (
                    <div key={m} className="flex items-center gap-2 text-[12px] text-white/40">
                      <span className="text-emerald-400/60">•</span> {m}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Zenith Process ────────────── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-white mb-4">Kako Zenith sistem radi</h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-3">
            {[
              { num: '1', title: 'Analiza', icon: '🔍', desc: 'Istražujemo vašu nišu i idealnog kupca' },
              { num: '2', title: 'Strategija', icon: '🎯', desc: 'Kreiramo kampanje za svaki kanal' },
              { num: '3', title: 'Lansiranje', icon: '🚀', desc: 'A/B testiramo do optimalnog rezultata' },
              { num: '4', title: 'Skaliranje', icon: '📈', desc: 'Ulažemo više u kampanje koje rade' },
              { num: '5', title: 'Optimizacija', icon: '⚡', desc: 'Nedeljni izveštaji i konstantno poboljšanje' },
            ].map((s, i) => (
              <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white/[0.03] rounded-[11px] p-5 text-center border border-white/[0.04] relative">
                {i < 4 && <div className="hidden md:block absolute top-1/2 -right-2 text-white/10 text-[16px]">→</div>}
                <span className="text-2xl block mb-2">{s.icon}</span>
                <div className="text-[14px] font-medium text-white mb-1">{s.title}</div>
                <div className="text-[12px] text-white/35 leading-relaxed">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Social proof ─────────────── */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-white/[0.02] rounded-[11px] border border-white/[0.06] p-8 md:p-10">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { value: '€500K+', label: 'Ad spend pod upravljanjem' },
                { value: '15x', label: 'Prosečan ROAS' },
                { value: '450+', label: 'Kampanja pokrenuto' },
                { value: '92%', label: 'Klijenata obnavlja ugovor' },
              ].map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <div className="text-[28px] font-bold text-white">{s.value}</div>
                  <div className="text-[12px] text-white/30 mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
