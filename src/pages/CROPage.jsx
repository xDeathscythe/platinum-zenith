import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import BottomCTA from '../components/BottomCTA'

const heroHomeDark = `${import.meta.env.BASE_URL}hero-home-dark.webp`
const heroHomeLight = `${import.meta.env.BASE_URL}hero-home-light.webp`

/* ─── Before/After Metrics ─────────────── */
function MetricsCompare() {
  const [showAfter, setShowAfter] = useState(false)
  const metrics = [
    { name: 'Stopa konverzije', before: '1.2%', after: '4.8%', change: '+300%', barBefore: 12, barAfter: 48 },
    { name: 'Bounce rate', before: '72%', after: '31%', change: '-57%', barBefore: 72, barAfter: 31 },
    { name: 'Prosečna sesija', before: '0:42', after: '3:15', change: '+364%', barBefore: 14, barAfter: 65 },
    { name: 'Stranica / sesija', before: '1.3', after: '4.2', change: '+223%', barBefore: 22, barAfter: 70 },
    { name: 'Popunjenost formi', before: '8%', after: '34%', change: '+325%', barBefore: 8, barAfter: 34 },
  ]

  return (
    <div className="bg-panel rounded-[16px] border border-edge-2 overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between px-5 py-3 border-b border-edge-2">
        <span className="text-[13px] text-ink-2 font-medium">Rezultati optimizacije</span>
        <button onClick={() => setShowAfter(!showAfter)}
          className={`text-[12px] px-3 py-1 rounded-full cursor-pointer transition-all ${showAfter ? 'bg-tint-2 text-ink' : 'bg-tint text-ink-2'}`}>
          {showAfter ? 'Posle CRO' : 'Pre CRO'}
        </button>
      </div>
      <div className="p-5 space-y-4">
        {metrics.map((m, i) => (
          <div key={m.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[13px] text-ink-2">{m.name}</span>
              <div className="flex items-center gap-2">
                <span className={`text-[13px] font-medium ${showAfter ? 'text-ink' : 'text-ink-2'}`}>
                  {showAfter ? m.after : m.before}
                </span>
                {showAfter && (
                  <motion.span initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }}
                    className="text-[11px] font-bold text-ink">{m.change}</motion.span>
                )}
              </div>
            </div>
            <div className="w-full h-2 bg-tint rounded-full overflow-hidden">
              <motion.div className="h-full rounded-full bg-ink"
                animate={{ width: showAfter ? `${m.barAfter}%` : `${m.barBefore}%` }}
                transition={{ duration: 0.8, delay: i * 0.05 }} />
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 pb-4">
        <div className="text-center py-3 bg-tint rounded-lg">
          <span className="text-[28px] font-bold text-ink">{showAfter ? '+300%' : '1.2%'}</span>
          <span className="text-[14px] text-ink-2 ml-2">{showAfter ? 'prosečno poboljšanje' : 'prosečna konverzija pre CRO'}</span>
        </div>
      </div>
    </div>
  )
}

/* ─── Page ─── */
export default function CROPage() {
  return (
    <>
      {/* ─── Hero — homepage structure ─── */}
      <section className="relative flex flex-col items-center text-center pt-[160px] md:pt-[220px] pb-[20px] px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark"
            style={{ backgroundImage: `url(${heroHomeDark})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#000000' }}
          />
          <div className="absolute inset-0 only-light"
            style={{ backgroundImage: `url(${heroHomeLight})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#ffffff' }}
          />
          <div className="absolute inset-x-0 z-[1]"
            style={{ top: '55%', height: '45%', backdropFilter: 'blur(68px)', WebkitBackdropFilter: 'blur(68px)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)' }}
          />
          <div className="absolute inset-0 z-[2] only-dark"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.30) 58%, rgba(0,0,0,0.70) 74%, #000000 92%)' }}
          />
          <div className="absolute inset-0 z-[2] only-light"
            style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,0.35) 58%, rgba(255,255,255,0.75) 74%, #ffffff 92%)' }}
          />
        </div>

        <div className="relative z-10 w-full max-w-full overflow-hidden">
          <h1 className="hero-enter hero-enter-d1 text-[32px] md:text-[62px] font-medium leading-[1.1] md:leading-[62px] tracking-[-1px] md:tracking-[-1.86px] text-black mb-4">
            Više klijenata sa<br className="hidden md:inline" /> istim budžetom
          </h1>

          <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center mb-6 md:mb-8 max-w-[620px] mx-auto px-6 md:px-2">
            CRO optimizacija pretvara vaš postojeći saobraćaj u kupce. Bez povećanja budžeta za oglase, bez čekanja na SEO rezultate.
          </p>

          <div className="hero-enter hero-enter-d3 flex items-center justify-center gap-2 flex-wrap px-2">
            <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/80 transition-colors">
              Zakažite Besplatan Audit
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="hero-enter hero-enter-d4 mt-10 md:mt-16">
            <div className="max-w-[700px] mx-auto">
              <MetricsCompare />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats bar ─── */}
      <Reveal className="py-8 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 bg-tint rounded-[11px] border border-edge-2 overflow-hidden">
            {[
              { v: '+300%', l: 'Prosečan rast konverzija' },
              { v: '-57%', l: 'Smanjenje bounce rate' },
              { v: '16+', l: 'Tačaka audita' },
              { v: '90 dana', l: 'Do prvih rezultata' },
            ].map(s => (
              <div key={s.l} className="py-6 px-4 text-center border-r last:border-r-0 border-edge-2 md:border-b-0 border-b [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r">
                <div className="text-[28px] md:text-[32px] font-bold text-ink">{s.v}</div>
                <div className="text-[12px] text-ink-2 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ─── Problem section ─── */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center mb-10">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2">Zašto konverzija ne raste</span>
            <h2 className="text-[32px] md:text-[46px] font-medium tracking-[-1.2px] text-ink mt-3 mb-4">Saobraćaj imate. Klijente nemate.</h2>
            <p className="text-[16px] text-ink-2 max-w-[700px] mx-auto leading-[27px]">
              Većina sajtova konvertuje manje od 2% posetilaca. To znači da 98 od 100 ljudi koji dođu na vaš sajt odu bez ijedne akcije.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Nejasan poziv na akciju', text: 'Posetilac stigne na sajt i ne zna šta treba da uradi. Previše opcija, nijedan jasan sledeći korak.' },
              { title: 'Spor ili nefunkcionalan sajt', text: 'Svaka sekunda kašnjenja smanjuje konverziju za 7%. Na mobilnom, situacija je još gora.' },
              { title: 'Nema testiranja', text: 'Odluke o dizajnu se donose na osnovu ukusa umesto podataka. Bez A/B testova, optimizacija je nagađanje.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 60} className="bg-panel border border-edge-2 rounded-[16px] p-6">
                <h3 className="text-[20px] text-ink font-medium mb-2">{item.title}</h3>
                <p className="text-[14px] text-ink-2 leading-[24px]">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What CRO audit covers ─── */}
      <section className="py-16 px-4 md:px-8 bg-panel border-y border-edge-2">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-3">Šta uključuje CRO audit</h2>
            <p className="text-[15px] text-ink-2 max-w-[600px] mx-auto">Pregledamo 16+ aspekata vašeg sajta i identifikujemo gde gubite klijente.</p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { category: 'UX i Navigacija', items: ['Korisničko putovanje', 'Navigaciona struktura', 'Mobile experience', 'Form UX'] },
              { category: 'Performanse', items: ['Core Web Vitals', 'Brzina učitavanja', 'Server response', 'Image optimizacija'] },
              { category: 'Konverzija', items: ['CTA vidljivost i copy', 'Trust signali', 'Social proof', 'Urgency elementi'] },
              { category: 'Testiranje', items: ['A/B test framework', 'Heatmap analiza', 'Session recordings', 'Conversion tracking'] },
            ].map((cat, ci) => (
              <Reveal key={cat.category} delay={ci * 60} className="bg-tint rounded-[16px] p-6 border border-edge-2">
                <h3 className="text-[15px] font-medium text-ink mb-4">{cat.category}</h3>
                <div className="space-y-2.5">
                  {cat.items.map(item => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-tint-2 flex-shrink-0" />
                      <span className="text-[13px] text-ink-2">{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-3">Kako CRO proces izgleda</h2>
            <p className="text-[15px] text-ink-2">Sistematičan pristup u 5 koraka. Svaki korak donosi merljivo poboljšanje.</p>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-3">
            {[
              { title: 'Audit', desc: 'Heatmape, session recordings, analiza funnel-a' },
              { title: 'Hipoteze', desc: 'Prioritetizujemo šta testiramo na osnovu potencijala' },
              { title: 'Testiranje', desc: 'A/B testovi sa statistički značajnim rezultatima' },
              { title: 'Implementacija', desc: 'Pobedničke varijante idu u produkciju' },
              { title: 'Iteracija', desc: 'Novi krug testova, konstantan rast konverzije' },
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

      {/* ─── Guarantee ─── */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto">
          <Reveal className="bg-panel border border-edge-2 rounded-[16px] p-7 md:p-9">
            <h3 className="text-[24px] text-ink font-medium mb-3">Merljivi rezultati ili besplatan audit</h3>
            <p className="text-[15px] text-ink-2 leading-[27px] max-w-[700px]">
              Ako u prvih 90 dana ne vidite poboljšanje konverzije od minimum 20%, audit je besplatan. Radimo sa podacima, ne sa obećanjima. Svaki test, svaka promena i svaki rezultat je dokumentovan i transparentan.
            </p>
          </Reveal>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
