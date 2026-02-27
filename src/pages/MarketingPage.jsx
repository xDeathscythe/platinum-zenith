import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import BottomCTA from '../components/BottomCTA'

const heroMktgDark = `${import.meta.env.BASE_URL}hero-mktg-dark.webp`
const heroMktgLight = `${import.meta.env.BASE_URL}hero-mktg-light.webp`

/* ─── Dashboard Mockup ─── */
function DashboardMock() {
  const [activeChannel, setActiveChannel] = useState(0)
  const channels = [
    { name: 'Meta Ads', spend: '€2,400', revenue: '€36,000', roas: '15x', cpa: '€14', leads: 171, status: 'active', color: '#1877f2' },
    { name: 'Google Ads', spend: '€1,800', revenue: '€27,000', roas: '15x', cpa: '€12', leads: 150, status: 'active', color: '#34a853' },
    { name: 'TikTok Ads', spend: '€900', revenue: '€13,500', roas: '15x', cpa: '€18', leads: 50, status: 'scaling', color: '#ff004f' },
    { name: 'Email', spend: '€0', revenue: '€4,200', roas: '∞', cpa: '€0', leads: 84, status: 'automated', color: '#f59e0b' },
  ]
  const ch = channels[activeChannel]

  useEffect(() => {
    const t = setInterval(() => setActiveChannel((p) => (p + 1) % channels.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="theme-dark bg-panel rounded-[16px] border border-edge-2 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-edge-2">
        <span className="text-[13px] text-ink-3 font-medium">Zenith Dashboard</span>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] text-ink-2">Live</span>
        </div>
      </div>

      <div className="flex border-b border-edge-2">
        {channels.map((c, i) => (
          <button
            key={c.name}
            onClick={() => setActiveChannel(i)}
            className={`flex-1 py-2.5 text-[12px] font-medium transition-all cursor-pointer relative ${
              i === activeChannel ? 'text-ink' : 'text-ink-2 hover:text-ink-3'
            }`}
          >
            {c.name}
            {i === activeChannel && <motion.div layoutId="chTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-ink-3" />}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={activeChannel} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-5">
          <div className="grid grid-cols-3 gap-4 mb-5">
            <div>
              <div className="text-[11px] text-ink-2 uppercase tracking-wider mb-1">Spend</div>
              <div className="text-[22px] font-bold text-ink">{ch.spend}</div>
            </div>
            <div>
              <div className="text-[11px] text-ink-2 uppercase tracking-wider mb-1">Revenue</div>
              <div className="text-[22px] font-bold text-ink">{ch.revenue}</div>
            </div>
            <div>
              <div className="text-[11px] text-ink-2 uppercase tracking-wider mb-1">ROAS</div>
              <div className="text-[22px] font-bold text-ink">{ch.roas}</div>
            </div>
          </div>

          <div className="h-[80px] flex items-end gap-1 mb-4">
            {Array.from({ length: 14 }, (_, i) => {
              const h = 20 + Math.random() * 60
              return (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.03 }}
                  className="flex-1 rounded-t-sm"
                  style={{ backgroundColor: ch.color, opacity: 0.3 + (i / 14) * 0.7 }}
                />
              )
            })}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-[12px]"><span className="text-ink-2">CPA:</span> <span className="text-ink font-medium">{ch.cpa}</span></div>
              <div className="text-[12px]"><span className="text-ink-2">Leads:</span> <span className="text-ink font-medium">{ch.leads}</span></div>
            </div>
            <span className="text-[11px] px-2 py-0.5 rounded-full font-medium bg-tint text-ink-2">{ch.status}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

/* ─── Main Page ─── */
export default function MarketingPage() {
  const [openStep, setOpenStep] = useState(null)

  const process = [
    {
      num: '01',
      title: 'Analiza i audit',
      text: 'Prolazimo kroz vaše brojke, kampanje i konkurenciju. Identifikujemo gde curi budžet i gde postoji neiskorišćen potencijal. Ovo radimo pre bilo kakvog troška na oglase.',
    },
    {
      num: '02',
      title: 'Strategija i struktura kampanja',
      text: 'Postavljamo kampanje po fazama: hvatamo ljude koji aktivno traže vaš proizvod, retargetiramo one koji su pokazali interes, i skaliramo ono što donosi profit. Svaki kanal ima jasnu ulogu.',
    },
    {
      num: '03',
      title: 'Kreativ i landing optimizacija',
      text: 'Testiramo više varijanti oglasa i stranica istovremeno. Pratimo koji kreativ konvertuje, koji naslov zaustavlja skrolovanje, koja ponuda zatvara posao. Bez pretpostavki, samo podaci.',
    },
    {
      num: '04',
      title: 'Skaliranje i optimizacija',
      text: 'Budžet ide u oglase koji donose profit. Ostalo se gasi. Svake nedelje pregledamo performanse, gasimo slabe, dupliramo pobednike. Vi u svakom trenutku vidite iste podatke koje vidimo mi.',
    },
  ]

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex flex-col items-center text-center pt-[160px] md:pt-[220px] pb-[60px] px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ backgroundImage: `url(${heroMktgDark})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#000000' }} />
          <div className="absolute inset-0 only-light" style={{ backgroundImage: `url(${heroMktgLight})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#ffffff' }} />
          <div className="absolute inset-x-0 z-[1]" style={{ top: '64vh', height: '52vh', backdropFilter: 'blur(68px)', WebkitBackdropFilter: 'blur(68px)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)' }} />
          <div className="absolute inset-0 z-[2] only-dark" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 46%, rgba(0,0,0,0.26) 62%, rgba(0,0,0,0.60) 76%, rgba(0,0,0,0.88) 90%, #000000 100%)' }} />
          <div className="absolute inset-0 z-[2] only-light" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 46%, rgba(255,255,255,0.30) 62%, rgba(255,255,255,0.64) 76%, rgba(255,255,255,0.90) 90%, #ffffff 100%)' }} />
        </div>

        <div className="relative z-10 w-full max-w-full overflow-hidden">
          <h1 className="hero-enter hero-enter-d1 text-[32px] md:text-[62px] font-medium leading-[1.1] md:leading-[62px] tracking-[-1px] md:tracking-[-1.86px] text-black mb-4">
            Marketing platforma za<br className="hidden md:inline" /> rapidan rast vašeg<br className="hidden md:inline" /> biznisa
          </h1>

          <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center mb-6 md:mb-8 max-w-[620px] mx-auto px-6 md:px-2">
            Kroz alate digitalnog marketinga, brending i konsalting pomažemo preduzećima da ostvare brz rast. Zenith sistem čini vođenje biznisa lakšim, sigurnijim, predvidljivijim i manje stresnim.
          </p>

          <div className="hero-enter hero-enter-d3 flex items-center justify-center gap-2 flex-wrap px-2">
            <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/80 transition-colors">
              Zakažite Konsultacije
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link to="/case-studies" className="inline-flex items-center bg-black/[0.04] text-black text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/[0.08] transition-colors">
              Pogledajte rezultate
            </Link>
          </div>

          <div className="hero-enter hero-enter-d4 mt-16 md:mt-32">
            <div className="max-w-[1164px] mx-auto">
              <DashboardMock />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem ─── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[740px] mx-auto">
          <Reveal>
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-6">Problem koji rešavamo</span>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={40}>
              <p className="text-[16px] md:text-[18px] text-ink leading-[28px] md:leading-[32px]">
                Većina firmi ne gubi novac zato što nema saobraćaj na sajtu. Gubi ga jer nema sistem koji vodi korisnika od prvog klika do kupovine.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-[16px] md:text-[18px] text-ink-2 leading-[28px] md:leading-[32px]">
                Plaćate klikove od ljudi koji su radoznali, ali ne i spremni da kupe. Landing stranica ne objašnjava jasno zašto bi neko izabrao vas. Lead dođe, ali nema automatike koja ga pretvara u klijenta. Na kraju meseca imate trošak, imate izveštaj, ali nemate nove kupce.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[16px] md:text-[18px] text-ink leading-[28px] md:leading-[32px]">
                Mi to rešavamo tako što ne vodimo samo kampanje, nego gradimo ceo sistem akvizicije. Od prvog kontakta do potpisanog klijenta, svaki korak je meren i optimizovan.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="py-12 px-4 md:px-8 bg-panel border-y border-edge-2">
        <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '64,4M', label: 'RSD prometa', sub: 'Grubin 2025' },
            { value: '6x', label: 'Rast prihoda', sub: 'Medifizio za 8 meseci' },
            { value: '€0,96', label: 'Po prijavi', sub: 'Focus Fizikal' },
            { value: '15x', label: 'Prosečan ROAS', sub: 'na kampanjama' },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 50} className="text-center">
              <div className="text-[36px] md:text-[44px] font-bold text-ink leading-none">{s.value}</div>
              <div className="text-[13px] text-ink font-medium mt-2">{s.label}</div>
              <div className="text-[11px] text-ink-2 mt-0.5">{s.sub}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto">
          <Reveal className="mb-12">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-3">Kako radimo</span>
            <h2 className="text-[30px] md:text-[42px] font-medium text-ink tracking-[-1px] leading-[1.15]">
              Od analize do rezultata<br className="hidden md:inline" /> u četiri koraka
            </h2>
          </Reveal>

          <div className="space-y-3">
            {process.map((item, i) => {
              const isOpen = openStep === i
              return (
                <Reveal key={item.num} delay={i * 40}>
                  <motion.div
                    className="border border-edge-2 rounded-[11px] overflow-hidden cursor-pointer bg-tint hover:bg-panel transition-colors"
                    onClick={() => setOpenStep(isOpen ? null : i)}
                  >
                    <div className="flex items-center gap-4 p-5">
                      <span className="text-[13px] text-ink-2 font-mono font-medium w-6 flex-shrink-0">{item.num}</span>
                      <h3 className="text-[16px] md:text-[18px] font-medium text-ink flex-1">{item.title}</h3>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-[20px] text-ink-2 flex-shrink-0"
                      >
                        +
                      </motion.span>
                    </div>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 pl-[52px] text-[14px] text-ink-2 leading-[25px]">
                        {item.text}
                      </p>
                    </motion.div>
                  </motion.div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Channels ─── */}
      <section className="py-20 px-4 md:px-8 bg-panel border-y border-edge-2">
        <div className="max-w-[900px] mx-auto">
          <Reveal className="mb-12">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-3">Kanali</span>
            <h2 className="text-[30px] md:text-[42px] font-medium text-ink tracking-[-1px] leading-[1.15]">
              Svaki kanal ima jasnu ulogu<br className="hidden md:inline" /> u vašem rastu
            </h2>
          </Reveal>

          <div className="space-y-6">
            {[
              { name: 'Meta Ads', desc: 'Facebook i Instagram oglasi sa preciznim targetiranjem. Retargeting, lookalike audiences, A/B testiranje kreativa. Za firme koje žele stabilan priliv upita sa društvenih mreža.' },
              { name: 'Google Ads', desc: 'Hvatamo korisnike u momentu pretrage, kad su spremni da kupe. Search, Shopping, Performance Max. Najbrži put do kupca koji aktivno traži vaš proizvod ili uslugu.' },
              { name: 'TikTok Ads', desc: 'UGC stil oglasi koji ne izgledaju kao oglasi. Za brendove koji ciljaju mlađu demografiju i žele viralni potencijal uz kontrolisane troškove.' },
              { name: 'Email automatizacija', desc: 'Automatizovani nizovi koji pretvaraju kontakte u kupce. Welcome sekvence, abandoned cart, re-engagement. Jednom postavljeno, radi non-stop bez dodatnog budžeta.' },
            ].map((ch, i) => (
              <Reveal key={ch.name} delay={i * 40}>
                <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6">
                  <span className="text-[15px] md:text-[17px] font-medium text-ink md:w-[200px] flex-shrink-0">{ch.name}</span>
                  <p className="text-[14px] md:text-[15px] text-ink-2 leading-[25px]">{ch.desc}</p>
                </div>
                {i < 3 && <div className="h-px bg-edge-2 mt-6" />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Social Proof Gallery ─── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1164px] mx-auto">
          <Reveal className="text-center mb-12">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-3">Iz prakse</span>
            <h2 className="text-[30px] md:text-[42px] font-medium text-ink tracking-[-1px] leading-[1.15]">
              Pravi brojevi, pravi klijenti
            </h2>
          </Reveal>

          {/* Image grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            {[
              'medifizio-01.webp', 'focus-01.webp', 'pz-01.webp', 'medifizio-03.webp',
              'focus-03.webp', 'pz-05.webp', 'medifizio-06.webp', 'focus-04.webp',
              'pz-09.webp', 'medifizio-07.webp', 'case-focus-fizikal.webp', 'pz-13.webp',
            ].map((img, i) => (
              <Reveal key={img} delay={i * 30}>
                <div className="rounded-[11px] overflow-hidden border border-edge-2">
                  <img
                    src={`${import.meta.env.BASE_URL}${img}`}
                    alt=""
                    className="w-full aspect-[4/5] object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Results text */}
          <div className="max-w-[740px] mx-auto space-y-8">
            {[
              { client: 'Grubin Showroom', result: 'Sa 20,4M na 64,4M RSD godišnjeg prometa. Cena po kupovini pala za 61%. Konverzija porasla 2,12 puta.', link: '/case-studies' },
              { client: 'Ordinacija Medifizio', result: 'Sa 400.000 na 2,4M RSD mesečnog prometa za 8 meseci. Direct response marketing i lokalno pozicioniranje na prvo mesto.', link: '/case-studies' },
              { client: 'Focus Fizikal', result: '63 prijave za samo €60 budžeta. Cena po prijavi €0,96. Termini popunjeni za ceo mesec unapred.', link: '/case-studies' },
            ].map((item, i) => (
              <Reveal key={item.client} delay={i * 60}>
                <div>
                  <h3 className="text-[17px] font-medium text-ink mb-2">{item.client}</h3>
                  <p className="text-[15px] text-ink-2 leading-[26px] mb-2">{item.result}</p>
                  <Link to={item.link} className="text-[13px] text-ink-3 hover:text-ink transition-colors">Pogledaj case study →</Link>
                </div>
                {i < 2 && <div className="h-px bg-edge-2 mt-8" />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
