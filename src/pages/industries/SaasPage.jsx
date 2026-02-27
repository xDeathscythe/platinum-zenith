import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import BottomCTA from '../../components/BottomCTA'

const heroHomeDark = `${import.meta.env.BASE_URL}hero-home-dark.webp`
const heroHomeLight = `${import.meta.env.BASE_URL}hero-home-light.webp`

/* ─── SaaS Funnel Visual ─── */
function FunnelVisual() {
  const [stage, setStage] = useState(0)
  const stages = [
    { name: 'Awareness', visitors: '12,400', color: '#3b82f6' },
    { name: 'Trial Signup', visitors: '1,860', color: '#8b5cf6' },
    { name: 'Activation', visitors: '1,116', color: '#f59e0b' },
    { name: 'Paid', visitors: '502', color: '#10b981' },
    { name: 'Retained', visitors: '427', color: '#06b6d4' },
  ]
  useEffect(() => {
    const t = setInterval(() => setStage(p => (p + 1) % stages.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="theme-dark bg-panel rounded-[16px] border border-edge-2 overflow-hidden max-w-[540px] mx-auto">
      <div className="flex items-center justify-between px-5 py-3 border-b border-edge-2">
        <span className="text-[13px] text-ink-3 font-medium">SaaS Funnel</span>
        <span className="text-[11px] text-ink-2">mesečni pregled</span>
      </div>
      <div className="p-5 space-y-2">
        {stages.map((s, i) => {
          const width = [100, 75, 55, 35, 28][i]
          return (
            <motion.div key={s.name} animate={{ opacity: i <= stage ? 1 : 0.3 }} className="flex items-center gap-3">
              <span className="text-[11px] text-ink-2 w-[80px] text-right">{s.name}</span>
              <div className="flex-1 h-7 bg-tint rounded-md overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: i <= stage ? `${width}%` : '0%' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="h-full rounded-md"
                  style={{ backgroundColor: s.color }}
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] text-ink font-medium">{s.visitors}</span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

const process = [
  { num: '01', title: 'Positioning i messaging', text: 'Definišemo ko je vaš idealan kupac, šta ih boli i zašto ste vi odgovor. Bez jasnog pozicioniranja, nijedan kanal ne funkcioniše kako treba.' },
  { num: '02', title: 'Acquisition kanali', text: 'SEO, content marketing, paid ads, LinkedIn outreach. Biramo kanale koji imaju smisla za vaš ICP i budžet. Svaki kanal ima jasan ROI cilj.' },
  { num: '03', title: 'Onboarding i aktivacija', text: 'Popravljamo put od signup-a do "aha" momenta. Email sekvence, in-app poruke, milestone notifikacije. Cilj: brže do vrednosti.' },
  { num: '04', title: 'Retention i expansion', text: 'Smanjujemo churn, povećavamo LTV. Customer success kampanje, upsell taktike, NPS praćenje. Zadržan korisnik je najjeftiniji korisnik.' },
]

const services = [
  { title: 'Landing Pages i Website', desc: 'Stranice koje jasno komuniciraju vrednost i pretvaraju posetioce u trial korisnike. Fokus na clarity, ne na efekte.' },
  { title: 'Content i SEO', desc: 'Blog postovi, case studies, whitepapers koji privlače decision-makere. Organski saobraćaj koji raste svaki mesec.' },
  { title: 'Paid Acquisition', desc: 'Google Ads, LinkedIn Lead Gen, Meta retargeting. Kampanje targetirane na ljude sa visokom kupovnom namerom.' },
  { title: 'Email i Lifecycle', desc: 'Welcome sekvence, onboarding drip-ovi, churn prevention, win-back kampanje. Automatizovane poruke za svaku fazu.' },
]

export default function SaasPage() {
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
            SaaS marketing koji<br className="hidden md:inline" /> zapravo skalira
          </h1>
          <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center mb-6 md:mb-8 max-w-[620px] mx-auto px-6 md:px-2">
            Od prvih trial korisnika do stabilnog MRR rasta. Popravljamo ceo funnel, ne samo vrh.
          </p>
          <div className="hero-enter hero-enter-d3 flex items-center justify-center gap-2 flex-wrap px-2 mb-10">
            <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/80 transition-colors">
              Zakažite Demo Call
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link to="/case-studies" className="inline-flex items-center bg-black/[0.04] text-black text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/[0.08] transition-colors">
              Case Studies
            </Link>
          </div>

          <div className="hero-enter hero-enter-d4">
            <FunnelVisual />
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[860px] mx-auto">
          <Reveal className="mb-12">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-3">Proces</span>
            <h2 className="text-[30px] md:text-[42px] font-medium text-ink tracking-[-1px] leading-[1.15]">Od signup-a do plaćanja</h2>
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
            <h2 className="text-[30px] md:text-[42px] font-medium text-ink tracking-[-1px] leading-[1.15]">Kako pomažemo SaaS kompanijama</h2>
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
            <h2 className="text-[28px] md:text-[38px] font-medium text-ink tracking-[-0.5px] mb-4">Rast nije pitanje sreće</h2>
            <p className="text-[15px] text-ink-3 leading-[26px] mb-8 max-w-[520px] mx-auto">Besplatan poziv gde prolazimo kroz vaš funnel i pokazujemo gde su najveći gubici. Bez obaveza, bez prodajnog pritiska.</p>
            <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-[40px] hover:bg-inv-bg-hover transition-colors">
              Zakažite Besplatan Poziv →
            </Link>
          </Reveal>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
