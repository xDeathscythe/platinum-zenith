import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import BottomCTA from '../components/BottomCTA'

const heroMktgDark = `${import.meta.env.BASE_URL}hero-mktg-dark.webp`
const heroMktgLight = `${import.meta.env.BASE_URL}hero-mktg-light.webp`

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

  useEffect(() => {
    const t = setInterval(() => setActiveChannel((p) => (p + 1) % channels.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="bg-panel rounded-[16px] border border-edge-2 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
      <div className="flex items-center justify-between px-5 py-3 border-b border-edge-2">
        <span className="text-[13px] text-ink-3 font-medium">Zenith Dashboard</span>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-ink-4" />
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

/* ─── Funnel Visualization ─────────────── */
function FunnelViz() {
  const stages = [
    { name: 'Impressions', value: '125,000', width: '100%', color: 'bg-tint' },
    { name: 'Klikovi', value: '4,375', width: '75%', color: 'bg-tint' },
    { name: 'Landing Page', value: '3,500', width: '55%', color: 'bg-tint' },
    { name: 'Leads', value: '455', width: '35%', color: 'bg-tint-2' },
    { name: 'Klijenti', value: '91', width: '20%', color: 'bg-tint-2' },
  ]
  return (
    <div className="space-y-2">
      {stages.map((s, i) => (
        <Reveal key={s.name} delay={i * 80}
          className={`${s.color} rounded-[8px] p-4 flex items-center justify-between transition-all mx-auto`}
          style={{ width: s.width }}>
          <span className="text-[13px] text-ink-3 font-medium">{s.name}</span>
          <span className="text-[14px] text-ink font-bold">{s.value}</span>
        </Reveal>
      ))}
      <div className="text-center pt-3">
        <span className="text-[13px] text-ink-2">Konverzija kroz funnel: </span>
        <span className="text-ink font-bold text-[15px]">20%</span>
      </div>
    </div>
  )
}

/* ─── Channel Detail Cards - no emoji ─── */
const channelDetails = [
  {
    name: 'Meta Ads',
    label: 'Social',
    desc: 'Facebook & Instagram oglasi sa preciznim targetiranjem. Retargeting, lookalike audiences, dinamički kreativ.',
    metrics: ['ROAS 15x prosek', 'Lookalike 2-5% publike', 'A/B test 10+ varijanti', 'Retargeting 7/30/90 dana'],
  },
  {
    name: 'Google Ads',
    label: 'Search',
    desc: 'Hvatamo korisnike u momentu pretrage, kad su spremni da kupe. Search, Shopping, Performance Max.',
    metrics: ['CPA €12 prosek', 'Quality Score 8+', 'Negativne ključne reči', 'Automated bidding'],
  },
  {
    name: 'TikTok Ads',
    label: 'Video',
    desc: 'Viralni kreativ za mlađe demografije. UGC stil oglasi koji ne izgledaju kao oglasi.',
    metrics: ['CTR 3.8% prosek', 'UGC kreativ pristup', 'Spark Ads format', 'Brzo skaliranje'],
  },
  {
    name: 'Email Automatizacija',
    label: 'Retention',
    desc: 'Automatizovani nizovi koji pretvaraju lead-ove u kupce. Welcome, nurture, abandoned cart, re-engagement.',
    metrics: ['Open rate 42%', 'Segmentacija publike', 'Drip kampanje', 'A/B subject lines'],
  },
]

/* ─── Main Page ────────────────────────── */
export default function MarketingPage() {
  return (
    <>
      {/* ─── Hero - exact homepage structure (custom text + custom center element) ─────── */}
      <section className="relative flex flex-col items-center text-center pt-[160px] md:pt-[220px] pb-[20px] px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* DARK bg */}
          <div className="absolute inset-0 only-dark"
            style={{
              backgroundImage: `url(${heroMktgDark})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              backgroundColor: '#000000',
            }}
          />
          {/* LIGHT bg */}
          <div className="absolute inset-0 only-light"
            style={{
              backgroundImage: `url(${heroMktgLight})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              backgroundColor: '#ffffff',
            }}
          />

          {/* Transition blur band */}
          <div className="absolute inset-x-0 z-[1]"
            style={{
              top: '55%',
              height: '45%',
              backdropFilter: 'blur(68px)',
              WebkitBackdropFilter: 'blur(68px)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)',
            }}
          />

          {/* Mode-specific fade overlays */}
          <div className="absolute inset-0 z-[2] only-dark"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.30) 58%, rgba(0,0,0,0.70) 74%, #000000 92%)',
            }}
          />
          <div className="absolute inset-0 z-[2] only-light"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,0.35) 58%, rgba(255,255,255,0.75) 74%, #ffffff 92%)',
            }}
          />
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
          </div>

          <div className="hero-enter hero-enter-d4 mt-10 md:mt-16">
            <div className="max-w-[1164px] mx-auto">
              <DashboardMock />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conversion diagnosis ────────────── */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-[1160px] mx-auto">
          <Reveal className="text-center mb-10">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2">Pre nego što ulažete još budžeta</span>
            <h2 className="text-[32px] md:text-[46px] font-medium tracking-[-1.2px] text-ink mt-3 mb-4">Zašto kampanje izgledaju aktivno, a prodaja stagnira</h2>
            <p className="text-[16px] text-ink-2 max-w-[760px] mx-auto leading-[27px]">
              Većina firmi ne gubi novac zato što nema saobraćaj. Gubi ga jer nema sistem koji vodi korisnika od prvog klika do kupovine.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Skupi klikovi, slab intent', text: 'Plaćate publiku koja je radoznala, ali ne i spremna da kupi.' },
              { title: 'Landing ne zatvara posao', text: 'Ponuda nije kristalno jasna i ljudi odlaze pre nego što ostave kontakt.' },
              { title: 'Nema follow-up mašine', text: 'Lead dođe, ali nema automatike koja ga pretvara u klijenta.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 60} className="bg-panel border border-edge-2 rounded-[16px] p-6">
                <h3 className="text-[20px] text-ink font-medium mb-2">{item.title}</h3>
                <p className="text-[14px] text-ink-2 leading-[24px]">{item.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-4 bg-tint border border-edge-2 rounded-[16px] p-6 md:p-8">
            <p className="text-[16px] md:text-[18px] text-ink leading-[30px] max-w-[960px]">
              Svake sekunde hiljade ljudi traže rešenje na Google-u i društvenim mrežama. Ako nemate jasan conversion sistem, taj saobraćaj hrani konkurenciju.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Funnel Section ────────────── */}
      <section className="py-20 px-4 md:px-8 bg-panel border-y border-edge-2">
        <div className="max-w-[1160px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-4">Od prvog klika do potpisanog klijenta</h2>
              <p className="text-[16px] text-ink-2 leading-[26px] mb-6">
                Naš fokus nije "još pregleda" nego stabilan priliv kvalifikovanih leadova. Svaki korak je meren, testiran i optimizovan.
              </p>
              <div className="space-y-3">
                {[
                  'Audience filtering da dobijete kupce, ne posmatrače',
                  'Landing i ponuda koji uklanjaju sumnju i dižu konverziju',
                  'Automatski follow-up u satima kada prodaja najčešće pada',
                  'Nedeljno gašenje slabih oglasa i dupliranje pobedničkih',
                ].map((t, i) => (
                  <div key={t} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-tint-2 mt-2.5 flex-shrink-0" />
                    <span className="text-[14px] text-ink-3">{t}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <FunnelViz />
          </div>
        </div>
      </section>

      {/* ─── 30-day sprint ─── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1160px] mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-[30px] md:text-[42px] font-medium tracking-[-1px] text-ink mb-3">Šta dobijate u prvih 30 dana</h2>
            <p className="text-[15px] text-ink-2 max-w-[700px] mx-auto">Jasan plan, jasna egzekucija, jasan broj.</p>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: 'Dan 1-3', title: 'Audit i mapiranje', text: 'Brza revizija kompletne akvizicije i identifikacija najvećih curenja budžeta.' },
              { step: 'Dan 4-10', title: 'Nova struktura kampanja', text: 'Postavka oglasa po intent-u i funnel fazama, bez haotičnog targetinga.' },
              { step: 'Dan 11-20', title: 'Kreativ + landing optimizacija', text: 'Kreative i stranice koje jasno vode ka upitu ili kupovini.' },
              { step: 'Dan 21-30', title: 'Skaliranje pobednika', text: 'Budžet ide samo u oglase koji donose profit, ostalo se gasi.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 70} className="bg-panel rounded-[16px] p-6 border border-edge-2">
                <div className="text-[12px] text-ink-2 mb-2 uppercase tracking-wider">{item.step}</div>
                <h3 className="text-[19px] font-medium text-ink mb-2">{item.title}</h3>
                <p className="text-[13px] text-ink-2 leading-[22px]">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Channel cards ─── */}
      <section className="py-20 px-4 md:px-8 bg-panel border-y border-edge-2">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="text-[30px] md:text-[40px] font-medium tracking-[-1px] text-ink mb-3">Kanali koji rade kao jedan sistem</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {channelDetails.map((c, i) => (
              <Reveal key={c.name} delay={i * 80}
                className="bg-panel rounded-[16px] p-7 border border-edge-2 hover:border-white/[0.10] transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] text-ink-2 bg-tint-2 px-2.5 py-1 rounded-full font-medium uppercase tracking-wider">{c.label}</span>
                  <h3 className="text-[20px] font-medium text-ink">{c.name}</h3>
                </div>
                <p className="text-[14px] text-ink-2 leading-relaxed mb-5">{c.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {c.metrics.map(m => (
                    <div key={m} className="flex items-center gap-2 text-[12px] text-ink-2">
                      <div className="w-1 h-1 rounded-full bg-tint flex-shrink-0" /> {m}
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Zenith Process - numbered ── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-4">Kako Zenith sistem radi</h2>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-3">
            {[
              { title: 'Analiza', desc: 'Istražujemo nišu, ponudu i kupca koji donosi najveći profit' },
              { title: 'Strategija', desc: 'Planiramo budžet i poruke po fazama funnel-a' },
              { title: 'Lansiranje', desc: 'Pokrećemo kampanje i brzo filtriramo šta radi' },
              { title: 'Skaliranje', desc: 'Pobedničke oglase širimo na nove publike i kanale' },
              { title: 'Optimizacija', desc: 'Nedeljni sprint i konstantno dizanje ROAS-a' },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 60}
                className="bg-tint rounded-[11px] p-5 text-center border border-edge-2 relative">
                {i < 4 && <div className="hidden md:block absolute top-1/2 -right-2 text-ink-2 text-[16px]">→</div>}
                <span className="text-[13px] text-ink-2 font-medium block mb-2">0{i + 1}</span>
                <div className="text-[14px] font-medium text-ink mb-1">{s.title}</div>
                <div className="text-[12px] text-ink-2 leading-relaxed">{s.desc}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Real Results — Social Proof ─────── */}
      <section className="py-20 px-4 md:px-8 bg-panel border-y border-edge-2">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center mb-12">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2">Rezultati iz prakse</span>
            <h2 className="text-[30px] md:text-[42px] font-medium tracking-[-1px] text-ink mt-3">Pravi brojevi, pravi klijenti</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                client: 'Focus Fizikal',
                type: 'Anti-celulit kampanja',
                highlight: '€0,96',
                highlightLabel: 'po prijavi',
                stats: ['63 prijave za €60 budžeta', '3 varijante oglasa testirane', 'Najbolji oglas: €0,78/prijava', 'Termini popunjeni za mesec'],
                accent: 'text-purple-400',
              },
              {
                client: 'Grubin Showroom',
                type: 'E-Commerce kampanje',
                highlight: '-61%',
                highlightLabel: 'cena po kupovini',
                stats: ['ROAS sa 0 na profitabilan', 'Promet 20,4M → 64,4M RSD', 'Konverzija porasla 2,12x', 'Dark Post strategija'],
                accent: 'text-emerald-400',
              },
              {
                client: 'Medifizio',
                type: 'Zdravstvo / lead gen',
                highlight: '6x',
                highlightLabel: 'rast prihoda',
                stats: ['400K → 2,4M RSD mesečno', 'Za 8 meseci saradnje', 'Direct response marketing', '#1 lokalno pozicioniranje'],
                accent: 'text-blue-400',
              },
            ].map((c, i) => (
              <Reveal key={c.client} delay={i * 60}>
                <div className="bg-tint rounded-[16px] p-6 border border-edge-2 h-full">
                  <div className="mb-4">
                    <h3 className="text-[18px] font-medium text-ink">{c.client}</h3>
                    <span className="text-[12px] text-ink-2">{c.type}</span>
                  </div>
                  <div className="mb-5">
                    <div className={`text-[36px] font-bold ${c.accent} leading-none`}>{c.highlight}</div>
                    <div className="text-[12px] text-ink-2 mt-1">{c.highlightLabel}</div>
                  </div>
                  <div className="space-y-2">
                    {c.stats.map(s => (
                      <div key={s} className="flex items-start gap-2 text-[13px] text-ink-2 leading-[20px]">
                        <span className="text-ink-4 mt-0.5 flex-shrink-0">—</span>
                        {s}
                      </div>
                    ))}
                  </div>
                  <Link to="/case-studies" className="inline-block mt-5 text-[13px] text-ink-3 hover:text-ink transition-colors">
                    Pogledaj case study →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Proof + guarantee ─────────────── */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[980px] mx-auto space-y-6">
          <div className="bg-tint rounded-[16px] border border-edge-2 p-8 md:p-10">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { value: '€500K+', label: 'Budžet pod upravljanjem' },
                { value: '15x', label: 'Prosečan ROAS' },
                { value: '450+', label: 'Kampanja optimizovano' },
                { value: '92%', label: 'Klijenata nastavlja saradnju' },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-[28px] font-bold text-ink">{s.value}</div>
                  <div className="text-[12px] text-ink-2 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <Reveal className="bg-panel border border-edge-2 rounded-[16px] p-7 md:p-9">
            <h3 className="text-[26px] text-ink font-medium mb-3">Bez magle, bez praznih obećanja</h3>
            <p className="text-[15px] text-ink-2 leading-[27px] max-w-[760px]">
              Dobijate plan, metrike i ritam izvršenja koji možete da proverite iz nedelje u nedelju. Naš cilj nije da "vrtimo oglase", nego da vam izgradimo stabilan sistem akvizicije koji radi i kad nismo online.
            </p>
          </Reveal>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
