import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import BottomCTA from '../components/BottomCTA'

const heroHomeDark = `${import.meta.env.BASE_URL}hero-home-dark.webp`
const heroHomeLight = `${import.meta.env.BASE_URL}hero-home-light.webp`

/* ─── Audit Score Mockup ─── */
function AuditScore() {
  const [revealed, setRevealed] = useState(false)
  const categories = [
    { name: 'Pozicioniranje', score: 42, color: '#ef4444' },
    { name: 'Prodajni proces', score: 58, color: '#f59e0b' },
    { name: 'Marketing', score: 35, color: '#ef4444' },
    { name: 'Brending', score: 67, color: '#f59e0b' },
    { name: 'Operacije', score: 73, color: '#22c55e' },
    { name: 'Finansije', score: 81, color: '#22c55e' },
  ]
  const total = Math.round(categories.reduce((a, c) => a + c.score, 0) / categories.length)

  return (
    <div className="bg-panel rounded-[16px] border border-edge-2 overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between px-5 py-3 border-b border-edge-2">
        <span className="text-[13px] text-ink-2 font-medium">Biznis Audit</span>
        <button onClick={() => setRevealed(!revealed)} className="text-[11px] text-ink-2 hover:text-ink cursor-pointer transition-colors">
          {revealed ? 'Sakrij' : 'Otkrij rezultate'}
        </button>
      </div>
      <div className="p-5">
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
              <span className="text-[24px] font-bold text-ink">{revealed ? total : '?'}</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {categories.map((c, i) => (
            <div key={c.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[12px] text-ink-2">{c.name}</span>
                <span className="text-[12px] font-medium" style={{ color: revealed ? c.color : 'var(--ink-2)' }}>{revealed ? c.score : '·'}</span>
              </div>
              <div className="w-full h-1.5 bg-tint rounded-full overflow-hidden">
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

/* ─── Page ─── */
export default function ConsultingPage() {
  return (
    <>
      {/* ─── Hero ─── */}
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
            Poslovni partner koji<br className="hidden md:inline" /> vas razume
          </h1>

          <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center mb-6 md:mb-8 max-w-[620px] mx-auto px-6 md:px-2">
            Vršimo reviziju ukupnog poslovanja i tražimo kočnice. Čim uočimo kočnicu, pomažemo da je razbijete kako bi preduzeće nastavilo da raste.
          </p>

          <div className="hero-enter hero-enter-d3 flex items-center justify-center gap-2 flex-wrap px-2">
            <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/80 transition-colors">
              Zakažite Konsultacije
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="hero-enter hero-enter-d4 mt-10 md:mt-16">
            <div className="max-w-[600px] mx-auto">
              <AuditScore />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Areas ─── */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center mb-10">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2">Oblasti savetovanja</span>
            <h2 className="text-[32px] md:text-[46px] font-medium tracking-[-1.2px] text-ink mt-3 mb-4">Sa čime sve možemo pomoći</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Pozicioniranje', desc: 'Kako vas tržište percipira vs. gde želite biti' },
              { title: 'Prodajni proces', desc: 'Od prvog kontakta do zatvaranja, bez curenja' },
              { title: 'Marketing', desc: 'Kreiranje ili unapređenje inhouse tima' },
              { title: 'Brending', desc: 'Vizuelni identitet, poruka, pozicioniranje' },
              { title: 'Kampanje', desc: 'ROI analiza i optimizacija ad spend-a' },
              { title: 'Novi proizvodi', desc: 'Lansiranje sa go-to-market strategijom' },
              { title: 'Pricing', desc: 'Struktura cena koja maksimizira profit' },
              { title: 'Konkurencija', desc: 'Detaljna analiza i diferencijacija' },
            ].map((a, i) => (
              <Reveal key={a.title} delay={i * 40} className="bg-panel rounded-[16px] p-5 border border-edge-2 hover:border-white/[0.10] transition-all">
                <span className="text-[12px] text-ink-2 font-medium block mb-3">0{i + 1}</span>
                <div className="text-[14px] font-medium text-ink mb-1">{a.title}</div>
                <div className="text-[12px] text-ink-2 leading-relaxed">{a.desc}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-16 px-4 md:px-8 bg-panel border-y border-edge-2">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-3">Kako izgleda proces</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { phase: 'Faza 1', title: 'Biznis Audit', duration: '1-2 nedelje', items: ['Revizija ukupnog poslovanja', 'Analiza finansija i marži', 'Pregled marketing aktivnosti', 'Intervjui sa timom i klijentima'] },
              { phase: 'Faza 2', title: 'Strategija Rasta', duration: '1 nedelja', items: ['Identifikacija kočnica', 'Konkretni koraci za rast', 'Prioritizacija po impaktu', 'Timeline sa milestones'] },
              { phase: 'Faza 3', title: 'Implementacija', duration: 'Ongoing', items: ['Sprovođenje sa vašim timom', 'Nedeljni check-in pozivi', 'Prilagođavanje na osnovu podataka', 'Merenje napretka vs. ciljevi'] },
            ].map((c, i) => (
              <Reveal key={c.phase} delay={i * 80} className="bg-tint rounded-[16px] p-7 border border-edge-2">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] text-ink-2 uppercase tracking-wider font-medium">{c.phase}</span>
                  <span className="text-[11px] text-ink-2 bg-panel px-2 py-0.5 rounded-full border border-edge-2">{c.duration}</span>
                </div>
                <h3 className="text-[22px] font-medium text-ink mb-5">{c.title}</h3>
                <div className="space-y-2.5">
                  {c.items.map(item => (
                    <div key={item} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-tint-2 mt-2 flex-shrink-0" />
                      <span className="text-[13px] text-ink-2">{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Guarantee ─── */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto">
          <Reveal className="bg-panel border border-edge-2 rounded-[16px] p-7 md:p-9">
            <h3 className="text-[24px] text-ink font-medium mb-3">Partneri, ne konsultanti</h3>
            <p className="text-[15px] text-ink-2 leading-[27px] max-w-[700px]">
              Nismo agencija koja daje savete i odlazi. Ulažemo se u vaš uspeh od prvog dana do realizacije. Kad vi rastete, rastemo i mi. Zato naš interes uvek ide u istom pravcu kao vaš.
            </p>
          </Reveal>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
