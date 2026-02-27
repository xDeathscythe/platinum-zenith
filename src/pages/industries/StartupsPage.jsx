import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import BottomCTA from '../../components/BottomCTA'

const heroHomeDark = `${import.meta.env.BASE_URL}hero-home-dark.webp`
const heroHomeLight = `${import.meta.env.BASE_URL}hero-home-light.webp`

/* ─── Growth Timeline ─── */
function GrowthTimeline() {
  const [month, setMonth] = useState(0)
  const months = [
    { m: 'Mesec 1', mrr: '€0', users: 0, milestone: 'MVP lansiran' },
    { m: 'Mesec 2', mrr: '€400', users: 12, milestone: 'Prvih 10 korisnika' },
    { m: 'Mesec 3', mrr: '€1,800', users: 47, milestone: 'Product-market fit signal' },
    { m: 'Mesec 4', mrr: '€4,200', users: 118, milestone: 'Paid acquisition startovan' },
    { m: 'Mesec 5', mrr: '€8,600', users: 234, milestone: 'Retention > 90%' },
    { m: 'Mesec 6', mrr: '€14,000', users: 380, milestone: 'Spreman za skaliranje' },
  ]
  useEffect(() => {
    const t = setInterval(() => setMonth(p => (p + 1) % months.length), 2500)
    return () => clearInterval(t)
  }, [])
  const d = months[month]

  return (
    <div className="theme-dark bg-panel rounded-[16px] border border-edge-2 overflow-hidden max-w-[480px] mx-auto">
      <div className="flex items-center justify-between px-5 py-3 border-b border-edge-2">
        <span className="text-[13px] text-ink-3 font-medium">Growth Tracker</span>
        <span className="text-[11px] text-ink-2">{d.m}</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={month} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="p-5">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><div className="text-[10px] text-ink-2 uppercase tracking-wider mb-1">MRR</div><div className="text-[22px] font-bold text-ink">{d.mrr}</div></div>
            <div><div className="text-[10px] text-ink-2 uppercase tracking-wider mb-1">Korisnici</div><div className="text-[22px] font-bold text-ink">{d.users}</div></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[12px] text-ink-3">{d.milestone}</span>
          </div>
          {/* Progress bar */}
          <div className="mt-4 h-1.5 bg-tint rounded-full overflow-hidden">
            <motion.div animate={{ width: `${((month + 1) / months.length) * 100}%` }} className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

const process = [
  { num: '01', title: 'Validacija i pozicioniranje', text: 'Pre nego potrošite prvi dinar na marketing, proveravamo da li imate jasan ICP, messaging koji rezonira i ponudu koju ljudi žele da kupe.' },
  { num: '02', title: 'Prvih 100 korisnika', text: 'Manual outreach, community building, founder-led sales. Kanali koji ne koštaju ali zahtevaju vreme. Tu učite šta radi a šta ne.' },
  { num: '03', title: 'Sistemizacija i paid kanali', text: 'Kad znamo šta radi, gradimo sisteme. Content koji privlači, email koji konvertuje, ads koji skaliraju. Svaki kanal sa jasnim ROI ciljem.' },
  { num: '04', title: 'Skaliranje', text: 'Dupliramo budžet na kanalima koji rade, dodajemo nove. Hiring marketing tima, postavljanje procesa, dashboardi za praćenje. Od startup-a do ozbiljne operacije.' },
]

const services = [
  { title: 'Go-to-Market Strategija', desc: 'ICP definisanje, messaging framework, kanal prioritizacija. Plan za prvih 6 meseci sa jasnim milestonovima.' },
  { title: 'Landing Pages i Branding', desc: 'Sajt koji jasno objašnjava šta radite i zašto je to bitno. Vizuelni identitet koji izgleda ozbiljno od prvog dana.' },
  { title: 'Content i Thought Leadership', desc: 'Blog, LinkedIn, case studies koji grade autoritet. Founder se pozicionira kao ekspert u nišu.' },
  { title: 'Paid Acquisition', desc: 'Google Ads, Meta, LinkedIn. Počinjemo sa malim budžetima, testiramo brzo, skaliramo samo ono što donosi rezultat.' },
]

export default function StartupsPage() {
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
            Od nule do prvih<br className="hidden md:inline" /> plaćajućih korisnika
          </h1>
          <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center mb-6 md:mb-8 max-w-[620px] mx-auto px-6 md:px-2">
            Marketing za startape koji nemaju vremena za eksperimente. Testirano, merljivo, fokusirano na rast.
          </p>
          <div className="hero-enter hero-enter-d3 flex items-center justify-center gap-2 flex-wrap px-2 mb-10">
            <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/80 transition-colors">
              Zakažite Poziv
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link to="/case-studies" className="inline-flex items-center bg-black/[0.04] text-black text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/[0.08] transition-colors">
              Case Studies
            </Link>
          </div>

          <div className="hero-enter hero-enter-d4">
            <GrowthTimeline />
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[860px] mx-auto">
          <Reveal className="mb-12">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-3">Proces</span>
            <h2 className="text-[30px] md:text-[42px] font-medium text-ink tracking-[-1px] leading-[1.15]">Od ideje do skaliranja</h2>
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
            <h2 className="text-[30px] md:text-[42px] font-medium text-ink tracking-[-1px] leading-[1.15]">Šta radimo za startape</h2>
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
            <h2 className="text-[28px] md:text-[38px] font-medium text-ink tracking-[-0.5px] mb-4">Budžet je ograničen. Zato svaki potez mora da vredi.</h2>
            <p className="text-[15px] text-ink-3 leading-[26px] mb-8 max-w-[520px] mx-auto">Besplatan poziv gde prolazimo kroz vaš trenutni status i dajemo konkretan plan za prvih 90 dana rasta.</p>
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
