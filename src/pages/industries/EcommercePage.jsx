import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import BottomCTA from '../../components/BottomCTA'

const heroHomeDark = `${import.meta.env.BASE_URL}hero-home-dark.webp`
const heroHomeLight = `${import.meta.env.BASE_URL}hero-home-light.webp`

/* ─── Live Metrics Ticker ─── */
function MetricsTicker() {
  const [idx, setIdx] = useState(0)
  const rows = [
    { product: 'Grubin papuče Classic', orders: 847, revenue: '€12,400', conv: '4.2%', trend: '+18%' },
    { product: 'Poklon kutija tartufi', orders: 312, revenue: '€28,600', conv: '6.1%', trend: '+34%' },
    { product: 'Kožne sandale Premium', orders: 523, revenue: '€15,690', conv: '3.8%', trend: '+12%' },
    { product: 'Tartufi svež 100g', orders: 198, revenue: '€9,900', conv: '5.5%', trend: '+41%' },
  ]
  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % rows.length), 3500)
    return () => clearInterval(t)
  }, [])
  const r = rows[idx]

  return (
    <div className="theme-dark bg-panel rounded-[16px] border border-edge-2 overflow-hidden max-w-[540px] mx-auto">
      <div className="flex items-center justify-between px-5 py-3 border-b border-edge-2">
        <span className="text-[13px] text-ink-3 font-medium">E-Commerce Dashboard</span>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] text-ink-2">Live</span>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="p-5">
          <div className="text-[14px] font-medium text-ink mb-4">{r.product}</div>
          <div className="grid grid-cols-4 gap-3">
            <div><div className="text-[10px] text-ink-2 uppercase tracking-wider mb-1">Narudžbe</div><div className="text-[18px] font-bold text-ink">{r.orders}</div></div>
            <div><div className="text-[10px] text-ink-2 uppercase tracking-wider mb-1">Prihod</div><div className="text-[18px] font-bold text-ink">{r.revenue}</div></div>
            <div><div className="text-[10px] text-ink-2 uppercase tracking-wider mb-1">Konverzija</div><div className="text-[18px] font-bold text-ink">{r.conv}</div></div>
            <div><div className="text-[10px] text-ink-2 uppercase tracking-wider mb-1">Trend</div><div className="text-[18px] font-bold text-emerald-400">{r.trend}</div></div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

const process = [
  { num: '01', title: 'Audit prodavnice', text: 'Prolazimo kroz vaš sajt, checkout flow, analitiku i kampanje. Tražimo gde gubite kupce i gde je najlakši dobitak.' },
  { num: '02', title: 'Optimizacija konverzije', text: 'Popravljamo product pages, checkout, mobile experience. Svaka promena se testira. Cilj je da od istog saobraćaja dobijete više kupovina.' },
  { num: '03', title: 'Kampanje koje prodaju', text: 'Meta Ads, Google Shopping, retargeting, email automatizacije. Svaki kanal ima jasnu ulogu u funnel-u, svaki dinar se prati.' },
  { num: '04', title: 'Skaliranje pobednika', text: 'Kad nađemo formulu koja radi, skaliramo budžet postepeno. Pratimo ROAS, CPA i margin da znamo tačno koliko možemo da rastemo.' },
]

const services = [
  { title: 'Shopify i WooCommerce', desc: 'Gradimo i optimizujemo prodavnice koje su brze, mobilne i napravljene za konverziju. Od product pages do checkout-a.' },
  { title: 'Meta i Google Ads', desc: 'Kampanje sa targetiranjem kupaca koji su spremni da kupe. Katalozi, Shopping ads, retargeting, lookalike audiences.' },
  { title: 'CRO za E-Commerce', desc: 'A/B testiranje, checkout optimizacija, trust signals. Povećavamo konverziju bez povećanja budžeta za oglase.' },
  { title: 'Email i Retention', desc: 'Welcome sekvence, abandoned cart, post-purchase flows. Automatizovane poruke koje vraćaju kupce i dižu lifetime value.' },
]

export default function EcommercePage() {
  const [openStep, setOpenStep] = useState(null)

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex flex-col items-center text-center pt-[160px] md:pt-[220px] pb-[60px] px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ backgroundImage: `url(${heroHomeDark})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#000000' }} />
          <div className="absolute inset-0 only-light" style={{ backgroundImage: `url(${heroHomeLight})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#ffffff' }} />
          <div className="absolute inset-x-0 z-[1]" style={{ top: '64vh', height: '52vh', backdropFilter: 'blur(68px)', WebkitBackdropFilter: 'blur(68px)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)' }} />
          <div className="absolute inset-0 z-[2] only-dark" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 46%, rgba(0,0,0,0.26) 62%, rgba(0,0,0,0.60) 76%, rgba(0,0,0,0.88) 90%, #000000 100%)' }} />
          <div className="absolute inset-0 z-[2] only-light" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 46%, rgba(255,255,255,0.30) 62%, rgba(255,255,255,0.64) 76%, rgba(255,255,255,0.90) 90%, #ffffff 100%)' }} />
        </div>

        <div className="relative z-10 w-full max-w-full overflow-hidden">
          <h1 className="hero-enter hero-enter-d1 text-[32px] md:text-[62px] font-medium leading-[1.1] md:leading-[62px] tracking-[-1px] md:tracking-[-1.86px] text-black mb-4">
            E-Commerce koji<br className="hidden md:inline" /> prodaje dok vi spavate
          </h1>
          <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center mb-6 md:mb-8 max-w-[620px] mx-auto px-6 md:px-2">
            Optimizovane prodavnice sa kampanjama koje prate svaki dinar. Od prvog klika do ponovljene kupovine.
          </p>
          <div className="hero-enter hero-enter-d3 flex items-center justify-center gap-2 flex-wrap px-2 mb-10">
            <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/80 transition-colors">
              Zakažite Analizu
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link to="/case-studies" className="inline-flex items-center bg-black/[0.04] text-black text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/[0.08] transition-colors">
              Case Studies
            </Link>
          </div>

          <div className="hero-enter hero-enter-d4">
            <MetricsTicker />
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[860px] mx-auto">
          <Reveal className="mb-12">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-3">Proces</span>
            <h2 className="text-[30px] md:text-[42px] font-medium text-ink tracking-[-1px] leading-[1.15]">Kako povećavamo vašu prodaju</h2>
          </Reveal>
          <div className="space-y-2">
            {process.map((s, i) => (
              <Reveal key={s.num} delay={i * 50}>
                <button onClick={() => setOpenStep(openStep === i ? null : i)} className="w-full text-left bg-panel rounded-[14px] border border-edge-2 overflow-hidden cursor-pointer transition-colors hover:border-edge-3">
                  <div className="flex items-center gap-4 p-5">
                    <span className="text-[13px] text-ink-2 font-mono w-6">{s.num}</span>
                    <span className="text-[15px] font-medium text-ink flex-1">{s.title}</span>
                    <svg className={`w-4 h-4 text-ink-2 transition-transform ${openStep === i ? 'rotate-45' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                  </div>
                  <AnimatePresence>
                    {openStep === i && (
                      <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                        <p className="px-5 pb-5 pl-[52px] text-[14px] text-ink-3 leading-[24px]">{s.text}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1164px] mx-auto">
          <Reveal className="text-center mb-12">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-3">Usluge</span>
            <h2 className="text-[30px] md:text-[42px] font-medium text-ink tracking-[-1px] leading-[1.15]">Sve za vaš online shop</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="bg-panel rounded-[14px] border border-edge-2 p-6 md:p-7 h-full">
                  <h3 className="text-[17px] font-medium text-ink mb-2">{s.title}</h3>
                  <p className="text-[14px] text-ink-3 leading-[24px]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[740px] mx-auto text-center">
          <Reveal>
            <h2 className="text-[28px] md:text-[38px] font-medium text-ink tracking-[-0.5px] mb-4">Vaša prodavnica može bolje</h2>
            <p className="text-[15px] text-ink-3 leading-[26px] mb-8 max-w-[520px] mx-auto">Besplatna analiza vašeg shop-a. Pokazujemo gde gubite kupce i šta treba popraviti. Bez obaveza.</p>
            <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-[40px] hover:bg-inv-bg-hover transition-colors">
              Zakažite Besplatnu Analizu →
            </Link>
          </Reveal>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
