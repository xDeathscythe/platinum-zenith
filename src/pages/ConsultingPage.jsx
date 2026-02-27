import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import BottomCTA from '../components/BottomCTA'

/* ─── Signup Modal ─── */
function SignupModal({ program, onClose }) {
  const [sent, setSent] = useState(false)

  const [sending, setSending] = useState(false)

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    setSending(true)
    const fd = new FormData(e.target)
    const d = Object.fromEntries(fd)

    try {
      const resp = await fetch('/api/prijava', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          program,
          name: d.name,
          phone: d.phone,
          email: d.email,
          company: d.company,
        })
      })
      if (!resp.ok) throw new Error('API error')
      setSent(true)
      setSending(false)
      setTimeout(() => onClose(), 2500)
    } catch {
      // Fallback to WhatsApp if API fails
      const msg = `Prijava za: ${program}\nIme: ${d.name}\nTelefon: ${d.phone}\nEmail: ${d.email}\nFirma: ${d.company}`
      window.open(`https://wa.me/381605667795?text=${encodeURIComponent(msg)}`, '_blank')
      setSent(true)
      setSending(false)
      setTimeout(() => onClose(), 2000)
    }
  }, [program, onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', duration: 0.3 }}
        className="relative bg-panel rounded-[16px] border border-edge-2 w-full max-w-[500px] max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-7 pt-7 pb-2">
          <h3 className="text-[18px] font-medium text-ink">Prijava</h3>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-tint transition-colors cursor-pointer text-ink-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
        <div className="px-7 pb-2">
          <p className="text-[13px] text-ink-2 bg-tint rounded-[8px] px-3 py-2 border border-edge-2">{program}</p>
        </div>

        {sent ? (
          <div className="px-7 py-10 text-center">
            <div className="text-[32px] mb-3">✅</div>
            <p className="text-[16px] font-medium text-ink mb-1">Prijava poslata!</p>
            <p className="text-[13px] text-ink-2">Javićemo vam se u roku od 24h.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-7 pb-7 pt-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-medium text-ink mb-1.5">Ime i prezime *</label>
                <input name="name" type="text" required placeholder="Vaše ime i prezime"
                  className="w-full h-11 px-4 rounded-[10px] bg-tint border border-edge-2 text-[14px] text-ink placeholder:text-ink-3 focus:outline-none focus:ring-2 focus:ring-black/10" />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-ink mb-1.5">Telefon *</label>
                <input name="phone" type="tel" required placeholder="+381..."
                  className="w-full h-11 px-4 rounded-[10px] bg-tint border border-edge-2 text-[14px] text-ink placeholder:text-ink-3 focus:outline-none focus:ring-2 focus:ring-black/10" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-medium text-ink mb-1.5">Email *</label>
                <input name="email" type="email" required placeholder="vas@email.com"
                  className="w-full h-11 px-4 rounded-[10px] bg-tint border border-edge-2 text-[14px] text-ink placeholder:text-ink-3 focus:outline-none focus:ring-2 focus:ring-black/10" />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-ink mb-1.5">Ime firme *</label>
                <input name="company" type="text" required placeholder="Naziv vaše firme"
                  className="w-full h-11 px-4 rounded-[10px] bg-tint border border-edge-2 text-[14px] text-ink placeholder:text-ink-3 focus:outline-none focus:ring-2 focus:ring-black/10" />
              </div>
            </div>
            <button type="submit" disabled={sending} className="w-full h-12 bg-black text-white text-[14px] font-medium rounded-[10px] hover:bg-black/80 transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
              {sending ? 'Šaljem...' : 'Pošalji prijavu'}
              {!sending && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>}
            </button>
            <p className="text-[11px] text-ink-3 text-center">Plaćanje na licu mesta ili fakturom preko firme. Prijava vas ne obavezuje.</p>
          </form>
        )}
      </motion.div>
    </motion.div>
  )
}

const heroHomeDark = `${import.meta.env.BASE_URL}hero-home-dark.webp`
const heroHomeLight = `${import.meta.env.BASE_URL}hero-home-light.webp`

/* ─── Workflow Pipeline ─── */
const workflows = [
  { area: 'Konverzija', icon: '📉', problem: '1.2%', audit: 'Web & CRO Audit', action: 'Redizajn + A/B test', result: '4.8%', resultIcon: '📈' },
  { area: 'Prodaja', icon: '😐', problem: '3 upita/mes', audit: 'Sales Audit', action: 'Novi funnel + CRM', result: '35 upita/mes', resultIcon: '🔥' },
  { area: 'Marketing', icon: '💸', problem: 'CPA €48', audit: 'Ad Account Audit', action: 'Restruktura kampanja', result: 'CPA €9.60', resultIcon: '🎯' },
  { area: 'Brending', icon: '❓', problem: 'Nema identiteta', audit: 'Brend Audit', action: 'Pozicioniranje + dizajn', result: 'Top-of-mind', resultIcon: '👑' },
  { area: 'Operacije', icon: '🐌', problem: '14 dana po poslu', audit: 'Proces Audit', action: 'Automatizacija', result: '3 dana po poslu', resultIcon: '⚡' },
]

function WorkflowPipeline() {
  const [active, setActive] = useState(0)

  useState(() => {
    const interval = setInterval(() => setActive(p => (p + 1) % workflows.length), 3000)
    return () => clearInterval(interval)
  })

  return (
    <div className="theme-dark bg-[#0a0a0a] rounded-[16px] border border-[rgba(255,255,255,0.08)] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[rgba(255,255,255,0.06)]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[13px] text-[rgba(255,255,255,0.5)] font-medium ml-2">Biznis Audit Pipeline</span>
        </div>
        <span className="text-[11px] text-[rgba(255,255,255,0.3)]">live</span>
      </div>

      {/* Pipeline stages header */}
      <div className="hidden md:grid grid-cols-4 gap-0 px-5 pt-4 pb-2">
        {['Problem uočen', 'Analiza', 'Akcija', 'Rezultat'].map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-red-500' : i === 3 ? 'bg-green-500' : 'bg-amber-500'}`} />
            <span className="text-[11px] text-[rgba(255,255,255,0.35)] uppercase tracking-wider font-medium">{s}</span>
          </div>
        ))}
      </div>

      {/* Workflow rows */}
      <div className="px-4 md:px-5 pb-5 pt-2 space-y-2">
        {workflows.map((w, i) => {
          const isActive = i === active
          return (
            <motion.div
              key={w.area}
              className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 items-center cursor-pointer rounded-[10px] px-3 py-2.5 transition-colors"
              style={{ backgroundColor: isActive ? 'rgba(255,255,255,0.04)' : 'transparent' }}
              onClick={() => setActive(i)}
              animate={{ opacity: isActive ? 1 : 0.45 }}
              transition={{ duration: 0.4 }}
            >
              {/* Problem */}
              <div className="flex items-center gap-2">
                <span className="text-[14px]">{w.icon}</span>
                <div>
                  <div className="text-[11px] text-[rgba(255,255,255,0.3)] leading-none mb-0.5 md:hidden">{w.area}</div>
                  <span className="text-[13px] font-medium text-red-400">{w.problem}</span>
                </div>
              </div>

              {/* Audit */}
              <div className="hidden md:flex items-center gap-2">
                <motion.div
                  className="h-0.5 bg-amber-500/40 rounded-full"
                  animate={{ width: isActive ? 24 : 12 }}
                  transition={{ duration: 0.6 }}
                />
                <span className="text-[12px] text-[rgba(255,255,255,0.6)]">{w.audit}</span>
              </div>

              {/* Action */}
              <div className="hidden md:flex items-center gap-2">
                <motion.div
                  className="h-0.5 bg-amber-500/40 rounded-full"
                  animate={{ width: isActive ? 24 : 12 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                />
                <span className="text-[12px] text-[rgba(255,255,255,0.6)]">{w.action}</span>
              </div>

              {/* Result */}
              <div className="flex items-center gap-2 justify-end md:justify-start">
                <motion.div
                  className="hidden md:block h-0.5 bg-green-500/40 rounded-full"
                  animate={{ width: isActive ? 24 : 12 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
                <span className="text-[14px]">{w.resultIcon}</span>
                <motion.span
                  className="text-[13px] font-bold text-green-400"
                  animate={{ scale: isActive ? [1, 1.08, 1] : 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {w.result}
                </motion.span>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom progress */}
      <div className="h-1 bg-[rgba(255,255,255,0.03)] overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-green-500"
          key={active}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 3, ease: 'linear' }}
        />
      </div>
    </div>
  )
}

/* ─── Page ─── */
export default function ConsultingPage() {
  const [modalProgram, setModalProgram] = useState(null)

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
            <div className="max-w-[1164px] mx-auto">
              <WorkflowPipeline />
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

      {/* ─── Radionice, obuke i seminari ─── */}
      <section id="radionice" className="py-20 px-4 md:px-8 bg-panel border-y border-edge-2">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-3">Edukacija</span>
            <h2 className="text-[32px] md:text-[46px] font-medium tracking-[-1.2px] text-ink mb-4">Radionice, obuke i seminari</h2>
            <p className="text-[15px] text-ink-2 leading-[26px] max-w-[600px] mx-auto">
              Praktična znanja koja možete primeniti odmah. Bez teorije koja skuplja prašinu. Plaćanje na licu mesta ili fakturom preko firme.
            </p>
          </Reveal>

          {/* Featured seminar */}
          <Reveal className="mb-6">
            <div className="relative bg-tint rounded-[16px] border border-edge-2 overflow-hidden">
              <div className="absolute top-4 right-4 bg-black text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10">
                🔥 Sledeći: 27. mart 2026
              </div>
              <div className="p-7 md:p-9">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="text-[11px] bg-amber-500/10 text-amber-600 px-2.5 py-1 rounded-full font-medium">Uživo · Zlatibor</span>
                  <span className="text-[11px] bg-tint-2 text-ink-2 px-2.5 py-1 rounded-full font-medium">3 dana</span>
                  <span className="text-[11px] bg-tint-2 text-ink-2 px-2.5 py-1 rounded-full font-medium">Svakih 2 meseca</span>
                </div>
                <h3 className="text-[22px] md:text-[28px] font-medium text-ink mb-3 leading-tight">
                  Trodnevni seminar: Napredni AI alati i primena u poslovanju i marketingu
                </h3>
                <p className="text-[15px] text-ink-2 leading-[26px] mb-5 max-w-[700px]">
                  Tri dana intenzivnog rada sa AI alatima koji menjaju način poslovanja. Od ChatGPT i automatizacije do AI u marketingu, prodaji i organizaciji. Sve što naučite, primenićete već tokom seminara na svom biznisu.
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <div className="text-[28px] md:text-[34px] font-bold text-ink">120.000 <span className="text-[16px] font-medium text-ink-2">RSD</span></div>
                </div>
                <p className="text-[13px] text-ink-3 mb-5">✅ Smeštaj i hrana uračunati u cenu seminara</p>
                <button onClick={() => setModalProgram('Trodnevni seminar: Napredni AI alati — Zlatibor, 27. mart 2026 (120.000 RSD)')}
                  className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] md:text-[14px] font-medium h-10 px-5 rounded-[40px] cursor-pointer hover:bg-black/80 transition-colors">
                  Prijavite se
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </Reveal>

          {/* Other offerings grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Reveal delay={40}>
              <div className="bg-tint rounded-[16px] border border-edge-2 p-7 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] bg-blue-500/10 text-blue-600 px-2.5 py-1 rounded-full font-medium">Uživo</span>
                  <span className="text-[11px] bg-tint-2 text-ink-2 px-2.5 py-1 rounded-full font-medium">1 dan</span>
                  <span className="text-[11px] bg-black text-white px-2.5 py-1 rounded-full font-medium">14. mart 2026</span>
                </div>
                <h3 className="text-[18px] md:text-[20px] font-medium text-ink mb-2 leading-tight">
                  Jednodnevni seminar: AI alati u digitalnom marketingu
                </h3>
                <p className="text-[14px] text-ink-2 leading-[24px] mb-4 flex-1">
                  Praktičan pregled AI alata za kreiranje sadržaja, automatizaciju kampanja, analizu podataka i optimizaciju oglasa. Donosite laptop, odlazite sa gotovim sistemom.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-[24px] font-bold text-ink">30.000 <span className="text-[14px] font-medium text-ink-2">RSD</span></div>
                  <button onClick={() => setModalProgram('Jednodnevni seminar: AI alati u digitalnom marketingu — 14. mart 2026 (30.000 RSD)')}
                    className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] font-medium h-9 px-4 rounded-[40px] cursor-pointer hover:bg-black/80 transition-colors">
                    Prijavite se
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="bg-tint rounded-[16px] border border-edge-2 p-7 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] bg-green-500/10 text-green-600 px-2.5 py-1 rounded-full font-medium">Zoom</span>
                  <span className="text-[11px] bg-tint-2 text-ink-2 px-2.5 py-1 rounded-full font-medium">Online obuka</span>
                </div>
                <h3 className="text-[18px] md:text-[20px] font-medium text-ink mb-2 leading-tight">
                  Obuka: Puštanje Meta kampanje od nule
                </h3>
                <p className="text-[14px] text-ink-2 leading-[24px] mb-4 flex-1">
                  Korak po korak kroz Facebook i Instagram Ads Manager. Od podešavanja piksela do prve kampanje koja donosi rezultate. Radimo zajedno na vašem nalogu.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-[24px] font-bold text-ink">35.000 <span className="text-[14px] font-medium text-ink-2">RSD</span></div>
                  <button onClick={() => setModalProgram('Zoom obuka: Puštanje Meta kampanje od nule (35.000 RSD)')}
                    className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] font-medium h-9 px-4 rounded-[40px] cursor-pointer hover:bg-black/80 transition-colors">
                    Prijavite se
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="bg-tint rounded-[16px] border border-edge-2 p-7 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] bg-green-500/10 text-green-600 px-2.5 py-1 rounded-full font-medium">Zoom</span>
                  <span className="text-[11px] bg-tint-2 text-ink-2 px-2.5 py-1 rounded-full font-medium">Online obuka</span>
                </div>
                <h3 className="text-[18px] md:text-[20px] font-medium text-ink mb-2 leading-tight">
                  Obuka: Personalni AI asistent na WhatsApp-u ili Telegram-u
                </h3>
                <p className="text-[14px] text-ink-2 leading-[24px] mb-4 flex-1">
                  Podešavamo vam ličnog AI asistenta koji živi u vašem WhatsApp ili Telegram nalogu. Pomaže da organizujete život, ne propustite nijedan mail i bolje rasporedite vreme.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-[24px] font-bold text-ink">24.000 <span className="text-[14px] font-medium text-ink-2">RSD</span></div>
                  <button onClick={() => setModalProgram('Zoom obuka: Personalni AI asistent WhatsApp/Telegram (24.000 RSD)')}
                    className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] font-medium h-9 px-4 rounded-[40px] cursor-pointer hover:bg-black/80 transition-colors">
                    Prijavite se
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="bg-tint rounded-[16px] border border-edge-2 p-7 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] bg-purple-500/10 text-purple-600 px-2.5 py-1 rounded-full font-medium">1 na 1</span>
                  <span className="text-[11px] bg-tint-2 text-ink-2 px-2.5 py-1 rounded-full font-medium">2h nedeljno</span>
                </div>
                <h3 className="text-[18px] md:text-[20px] font-medium text-ink mb-2 leading-tight">
                  Poslovno savetovanje 1 na 1
                </h3>
                <p className="text-[14px] text-ink-2 leading-[24px] mb-4 flex-1">
                  Dva sata nedeljno posvećena isključivo vašem biznisu. Strategija, operacije, marketing, prodaja. Direktan pristup našem iskustvu, bez filtera.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-[24px] font-bold text-ink">85.000 <span className="text-[14px] font-medium text-ink-2">RSD/mes</span></div>
                  <button onClick={() => setModalProgram('Poslovno savetovanje 1 na 1 — 2h nedeljno (85.000 RSD/mesečno)')}
                    className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] font-medium h-9 px-4 rounded-[40px] cursor-pointer hover:bg-black/80 transition-colors">
                    Prijavite se
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Signup Modal */}
      <AnimatePresence>
        {modalProgram && <SignupModal program={modalProgram} onClose={() => setModalProgram(null)} />}
      </AnimatePresence>

      <BottomCTA />
    </>
  )
}
