import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import BottomCTA from '../components/BottomCTA'

/* ─── Audit Score Mockup ───────────────── */
function AuditScore() {
  const [revealed, setRevealed] = useState(false)
  const categories = [
    { name: 'Pozicioniranje', score: 42, max: 100, color: '#ef4444' },
    { name: 'Prodajni proces', score: 58, max: 100, color: '#f59e0b' },
    { name: 'Marketing', score: 35, max: 100, color: '#ef4444' },
    { name: 'Brending', score: 67, max: 100, color: '#f59e0b' },
    { name: 'Operacije', score: 73, max: 100, color: '#22c55e' },
    { name: 'Finansije', score: 81, max: 100, color: '#22c55e' },
  ]
  const total = Math.round(categories.reduce((a, c) => a + c.score, 0) / categories.length)

  return (
    <div className="bg-[#0c0c0c] rounded-[11px] border border-white/[0.08] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
        <span className="text-[13px] text-white/50 font-medium">Biznis Audit</span>
        <button onClick={() => setRevealed(!revealed)} className="text-[11px] text-emerald-400/60 hover:text-emerald-400 cursor-pointer transition-colors">
          {revealed ? 'Sakrij' : 'Otkrij rezultate'}
        </button>
      </div>

      <div className="p-5">
        {/* Overall score */}
        <div className="flex items-center justify-center mb-6">
          <div className="relative w-24 h-24">
            <svg viewBox="0 0 100 100" className="transform -rotate-90">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
              <motion.circle cx="50" cy="50" r="42" fill="none" strokeWidth="8" strokeLinecap="round"
                stroke={total < 50 ? '#ef4444' : total < 70 ? '#f59e0b' : '#22c55e'}
                strokeDasharray={`${2 * Math.PI * 42}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                animate={{ strokeDashoffset: revealed ? 2 * Math.PI * 42 * (1 - total / 100) : 2 * Math.PI * 42 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[24px] font-bold text-white">{revealed ? total : '?'}</span>
            </div>
          </div>
        </div>

        {/* Category bars */}
        <div className="space-y-3">
          {categories.map((c, i) => (
            <div key={c.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[12px] text-white/45">{c.name}</span>
                <span className="text-[12px] font-medium" style={{ color: revealed ? c.color : 'rgba(255,255,255,0.2)' }}>{revealed ? c.score : '—'}</span>
              </div>
              <div className="w-full h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                <motion.div className="h-full rounded-full"
                  style={{ backgroundColor: c.color }}
                  initial={{ width: 0 }}
                  animate={{ width: revealed ? `${c.score}%` : '0%' }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Areas grid ───────────────────────── */
const areas = [
  { icon: '🎯', title: 'Pozicioniranje', desc: 'Kako vas tržište percipira vs. gde želite biti' },
  { icon: '💰', title: 'Prodajni proces', desc: 'Od prvog kontakta do zatvaranja — bez curenja' },
  { icon: '📣', title: 'Marketing tim', desc: 'Kreiranje ili unapređenje inhouse tima' },
  { icon: '✦', title: 'Brending', desc: 'Vizuelni identitet, poruka, pozicioniranje' },
  { icon: '📊', title: 'Kampanje', desc: 'ROI analiza i optimizacija ad spend-a' },
  { icon: '🚀', title: 'Novi proizvodi', desc: 'Lansiranje sa strategijom i go-to-market planom' },
  { icon: '💲', title: 'Pricing', desc: 'Struktura cena koja maksimizira profit' },
  { icon: '🔎', title: 'Konkurencija', desc: 'Detaljna analiza i diferencijacija' },
]

/* ─── Process cards ────────────────────── */
const processCards = [
  { phase: 'Faza 1', title: 'Biznis Audit', duration: '1-2 nedelje', items: ['Revizija ukupnog poslovanja', 'Analiza finansija i marži', 'Pregled marketing aktivnosti', 'Intervjui sa timom i klijentima'], color: 'border-blue-500/20' },
  { phase: 'Faza 2', title: 'Strategija Rasta', duration: '1 nedelja', items: ['Definisanje kočnica u biznisu', 'Konkretni koraci za prevazilaženje', 'Prioritizacija po impaktu', 'Timeline sa milestones'], color: 'border-purple-500/20' },
  { phase: 'Faza 3', title: 'Implementacija', duration: 'Ongoing', items: ['Sprovođenje plana sa vašim timom', 'Nedeljni check-in pozivi', 'Prilagođavanje na osnovu podataka', 'Merenje napretka vs. ciljevi'], color: 'border-emerald-500/20' },
]

export default function ConsultingPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────── */}
      <section className="pt-[120px] md:pt-[160px] pb-12 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-[12px] text-emerald-400/60 uppercase tracking-widest mb-3 block font-medium">Poslovno Savetovanje</span>
            <h1 className="text-[36px] md:text-[52px] font-medium leading-[1.08] tracking-[-1.5px] text-white mb-5">
              Partner koji
              <span className="block text-white/40">vas razume</span>
            </h1>
            <p className="text-[16px] text-white/50 leading-[26px] mb-8 max-w-[480px]">
              Sa svakim klijentom vršimo reviziju ukupnog poslovanja i tražimo kočnice. Čim uočimo kočnicu, pomažemo da je razbijete kako bi preduzeće nastavilo da raste.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-white text-black text-[14px] font-medium h-11 px-6 rounded-[40px] hover:bg-white/90 transition-colors">
                Zakažite Konsultacije →
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <AuditScore />
          </motion.div>
        </div>
      </section>

      {/* ─── Areas ────────────────────── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-white mb-4">Sa čime sve možemo pomoći</h2>
            <p className="text-[16px] text-white/40 max-w-[500px] mx-auto">Neke od stvari koje analiziramo i unapređujemo u vašem biznisu.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {areas.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white/[0.03] rounded-[11px] p-5 border border-white/[0.04] hover:bg-white/[0.06] hover:border-white/[0.08] transition-all group cursor-default">
                <span className="text-2xl block mb-2 group-hover:scale-110 transition-transform">{a.icon}</span>
                <div className="text-[14px] font-medium text-white mb-1">{a.title}</div>
                <div className="text-[12px] text-white/35 leading-relaxed">{a.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ──────────────────── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-white mb-4">Kako izgleda proces</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {processCards.map((c, i) => (
              <motion.div key={c.phase} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className={`bg-white/[0.02] rounded-[11px] p-7 border ${c.color}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] text-white/25 uppercase tracking-wider font-medium">{c.phase}</span>
                  <span className="text-[11px] text-emerald-400/50 bg-emerald-400/[0.06] px-2 py-0.5 rounded-full">{c.duration}</span>
                </div>
                <h3 className="text-[22px] font-medium text-white mb-5">{c.title}</h3>
                <ul className="space-y-2.5">
                  {c.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-white/50">
                      <span className="text-emerald-400/60 mt-0.5">→</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quote ────────────────────── */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[700px] mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="bg-white/[0.02] rounded-[11px] p-10 border border-white/[0.06]">
            <div className="text-[32px] text-white/10 mb-4">"</div>
            <p className="text-[18px] text-white/70 leading-[30px] italic mb-4">
              Nismo samo konsultanti. Mi smo partneri koji se ulaže u vaš uspeh — jer kad vi rastete, rastemo i mi.
            </p>
            <span className="text-[13px] text-white/30">— Platinum Zenith Tim</span>
          </motion.div>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
