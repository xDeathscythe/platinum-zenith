import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import BottomCTA from '../../components/BottomCTA'

const heroHomeDark = `${import.meta.env.BASE_URL}hero-home-dark.webp`
const heroHomeLight = `${import.meta.env.BASE_URL}hero-home-light.webp`

/* ─── Google Search Simulator ─── */
function SearchSimulator() {
  const [query, setQuery] = useState(0)
  const searches = [
    { q: 'stomatolog blizu mene', result: 'Ordinacija Medifizio', rating: '4.9', reviews: '127', pos: '#1' },
    { q: 'fizikalna terapija Novi Sad', result: 'Focus Fizikal', rating: '5.0', reviews: '84', pos: '#1' },
    { q: 'frizer centar Beograd', result: 'Studio M Hair', rating: '4.8', reviews: '203', pos: '#2' },
    { q: 'auto servis Zrenjanin', result: 'MotoFix Garage', rating: '4.7', reviews: '91', pos: '#1' },
  ]
  useEffect(() => {
    const t = setInterval(() => setQuery(p => (p + 1) % searches.length), 3500)
    return () => clearInterval(t)
  }, [])
  const s = searches[query]

  return (
    <div className="theme-dark bg-panel rounded-[16px] border border-edge-2 overflow-hidden max-w-[480px] mx-auto">
      <div className="px-5 py-3 border-b border-edge-2">
        <div className="flex items-center gap-2 bg-tint rounded-full px-4 py-2">
          <svg className="w-4 h-4 text-ink-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <AnimatePresence mode="wait">
            <motion.span key={query} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[13px] text-ink">{s.q}</motion.span>
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={query} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="p-5">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="text-[15px] font-medium text-ink">{s.result}</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[12px] text-yellow-400">{'★'.repeat(5)}</span>
                <span className="text-[12px] text-ink-2">{s.rating} ({s.reviews} recenzija)</span>
              </div>
            </div>
            <span className="text-[11px] font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">{s.pos}</span>
          </div>
          <div className="text-[12px] text-ink-2 mt-3">Otvoreno · 2 km od vas · Besplatno parkiranje</div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

const process = [
  { num: '01', title: 'Lokalna analiza', text: 'Mapiramo vašu okolinu: ko su vam konkurenti, šta ljudi traže, gde ste nevidljivi. Gledamo Google profil, sajt, recenzije, socijalne mreže.' },
  { num: '02', title: 'Google profil i SEO', text: 'Optimizujemo Google Business Profile da se pojavljujete u "blizu mene" pretragama. Lokalni SEO, recenzije, foto i video sadržaj.' },
  { num: '03', title: 'Kampanje za pozive i rezervacije', text: 'Google Ads i Meta kampanje targetirane na ljude u vašoj okolini. Cilj: poziv, poruka ili rezervacija, ne klikovi bez poente.' },
  { num: '04', title: 'Praćenje i rast', text: 'Svaki poziv, svaka poruka, svaka rezervacija se prati. Znate tačno koliko košta jedan novi klijent i koliko zarađujete od kampanja.' },
]

const industries = [
  'Stomatološke ordinacije', 'Frizerski saloni', 'Fitnes centri', 'Restorani i kafići',
  'Auto servisi', 'Advokatske kancelarije', 'Kozmetički saloni', 'Fizioterapija',
]

const services = [
  { title: 'Google Business Profile', desc: 'Pojavljujete se kad neko traži vaš tip usluge u blizini. Optimizovan profil sa recenzijama i svežim sadržajem.' },
  { title: 'Lokalni Google Ads', desc: 'Kampanje koje se prikazuju ljudima u krugu od 5-15km. Plaćate samo za pozive i posete sajtu, ne za impresije.' },
  { title: 'Social Media Prisustvo', desc: 'Profili na Instagram-u i Facebook-u koji grade poverenje kod lokalnih kupaca. Redovan sadržaj, odgovaranje, interakcija.' },
  { title: 'Sajt Optimizacija', desc: 'Brz, mobilan sajt sa jasnim pozivom na akciju. Telefon, mapa, radno vreme, online zakazivanje.' },
]

export default function LocalBusinessPage() {
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
            Kad neko traži uslugu<br className="hidden md:inline" /> u vašem gradu, da li<br className="hidden md:inline" /> vas pronađe?
          </h1>
          <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center mb-6 md:mb-8 max-w-[620px] mx-auto px-6 md:px-2">
            Lokalni marketing koji donosi pozive, poruke i rezervacije od ljudi koji su spremni da plate.
          </p>
          <div className="hero-enter hero-enter-d3 flex items-center justify-center gap-2 flex-wrap px-2 mb-10">
            <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/80 transition-colors">
              Zakažite Konsultacije
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link to="/case-studies" className="inline-flex items-center bg-black/[0.04] text-black text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/[0.08] transition-colors">
              Case Studies
            </Link>
          </div>

          <div className="hero-enter hero-enter-d4">
            <SearchSimulator />
          </div>
        </div>
      </section>

      {/* ─── Industries Cloud ─── */}
      <section className="py-14 px-4 md:px-8">
        <div className="max-w-[860px] mx-auto">
          <Reveal className="text-center">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-5">Radimo sa</span>
            <div className="flex flex-wrap justify-center gap-2">
              {industries.map((ind, i) => (
                <span key={ind} className="text-[13px] text-ink-3 bg-tint px-4 py-2 rounded-full border border-edge-2">{ind}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[860px] mx-auto">
          <Reveal className="mb-12">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-3">Proces</span>
            <h2 className="text-[30px] md:text-[42px] font-medium text-ink tracking-[-1px] leading-[1.15]">Od nevidljivog do prvog izbora</h2>
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
            <h2 className="text-[30px] md:text-[42px] font-medium text-ink tracking-[-1px] leading-[1.15]">Kako vam pomažemo</h2>
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
            <h2 className="text-[28px] md:text-[38px] font-medium text-ink tracking-[-0.5px] mb-4">Vaši budući klijenti vas traže upravo sad</h2>
            <p className="text-[15px] text-ink-3 leading-[26px] mb-8 max-w-[520px] mx-auto">Besplatna analiza vaše lokalne vidljivosti. Pokazujemo gde se pojavljujete, gde ne, i šta da popravite prvo.</p>
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
