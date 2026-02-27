import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import BottomCTA from '../../components/BottomCTA'

const heroHomeDark = `{import.meta.env.BASE_URL}hero-home-dark.webp`
const heroHomeLight = `{import.meta.env.BASE_URL}hero-home-light.webp`

const stats = [
  { value: '€12K', label: 'Prosečan MRR rast (6 mes.)' },
  { value: '68%', label: 'Smanjenje CAC' },
  { value: '3 meseca', label: 'Do product-market fit' },
  { value: '4.8x', label: 'ROI na marketing spend' },
]

const phases = [
  {
    phase: 'Pre-Launch',
    goal: 'Validacija ideje i priprema tržišta',
    tactics: [
      'Landing page sa waitlist',
      'MVP testiranje sa early adopters',
      'Definisanje ICP (Ideal Customer Profile)',
      'Community building (Discord, Slack, email)'
    ]
  },
  {
    phase: 'Launch',
    goal: 'Prvi kupci i brzo učenje',
    tactics: [
      'Product Hunt i Hacker News kampanje',
      'Influencer outreach i PR',
      'Paid ads sa malim budžetom',
      'Direktan outreach ka target kompanijama'
    ]
  },
  {
    phase: 'Growth',
    goal: 'Skaliranje kanala sa pozitivnim ROI',
    tactics: [
      'Content marketing i SEO strategija',
      'Performance ads (Google, Meta, LinkedIn)',
      'Referral program i viral loops',
      'Partnerships i integracije'
    ]
  },
  {
    phase: 'Scale',
    goal: 'Automatizacija i ekspanzija',
    tactics: [
      'Marketing automation stack',
      'Account-based marketing (ABM)',
      'Retention i upsell kampanje',
      'Internacionalna ekspanzija'
    ]
  },
]

const challenges = [
  { problem: 'Nema budžeta za marketing', solution: 'Fokus na organic i guerilla taktike' },
  { problem: 'Nema product-market fit', solution: 'Testiranje i brza iteracija sa feedback' },
  { problem: 'Ne znaju gde je publika', solution: 'Customer development intervjui' },
  { problem: 'Previše kanala, ništa ne radi', solution: 'Focus na 1-2 kanala i doubling down' },
  { problem: 'Spor onboarding, visok churn', solution: 'Simplifikacija i guided setup' },
]

const services = [
  {
    title: 'Go-to-Market Strategija',
    desc: 'Plan kako da uđete na tržište, ko su prvi kupci i kako do njih doći.',
    deliverables: ['ICP i buyer persona', 'Positioning i messaging', 'Kanal prioritizacija', '90-dana action plan']
  },
  {
    title: 'MVP Landing Page',
    desc: 'Brz, jasan, conversion-fokusiran sajt koji validuje interes.',
    deliverables: ['Hero dizajn sa jasnom vrednošću', 'Waitlist ili early access signup', 'Social proof i trust signals', 'Analytics i heat mapping']
  },
  {
    title: 'Growth Hacking',
    desc: 'Kreativne, low-budget taktike za brzi rast.',
    deliverables: ['Viral loops i incentivi', 'Community building strategija', 'PR i media outreach', 'Product Hunt priprema']
  },
  {
    title: 'Performance Marketing',
    desc: 'Paid ads sa kontrolom troškova i fokusiranim testiranjem.',
    deliverables: ['Meta i LinkedIn ads', 'Google Search kampanje', 'Retargeting i lookalikes', 'Weekly optimizacija']
  },
]

export default function StartupsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center text-center pt-[160px] md:pt-[220px] pb-[40px] px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ backgroundImage: `url(${heroHomeDark})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#000000' }} />
          <div className="absolute inset-0 only-light" style={{ backgroundImage: `url(${heroHomeLight})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#ffffff' }} />
          <div className="absolute inset-x-0 z-[1]" style={{ top: '55%', height: '45%', backdropFilter: 'blur(68px)', WebkitBackdropFilter: 'blur(68px)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)' }} />
          <div className="absolute inset-0 z-[2] only-dark" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.30) 58%, rgba(0,0,0,0.70) 74%, #000000 92%)' }} />
          <div className="absolute inset-0 z-[2] only-light" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,0.35) 58%, rgba(255,255,255,0.75) 74%, #ffffff 92%)' }} />
        </div>
        <div className="relative z-10 w-full max-w-[800px] mx-auto">
          <h1 className="hero-enter hero-enter-d1 text-[32px] md:text-[62px] font-medium leading-[1.1] md:leading-[62px] tracking-[-1px] md:tracking-[-1.86px] text-black mb-4">Od ideje do prvih klijenata</h1>
          <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center max-w-[620px] mx-auto px-6 md:px-2">Lansiramo vas brzo, pametno i sa fokusom na rast.</p>
        </div>
      </section>
      <section className="pb-12 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[900px] mx-auto text-center hero-enter hero-enter-d1">
            <span className="text-[12px] text-ink-4 uppercase tracking-widest mb-3 block font-medium">Startapovi</span>
            <h1 className="text-[36px] md:text-[52px] font-medium leading-[1.08] tracking-[-1.5px] text-ink mb-5">
              Od ideje
              <span className="block text-ink-3">do prvih klijenata</span>
            </h1>
            <p className="text-[16px] text-ink-4 leading-[26px] mb-8 max-w-[600px] mx-auto">
              Većina startapova ima odličan proizvod ali ne znaju kako da ga prodaju. Mi radimo go-to-market strategiju i dovodimo prve kupce.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-[40px] hover:bg-inv-bg-hover transition-colors">
                Zakažite Strategy Call →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-panel rounded-[16px] p-6 border border-edge-2 text-center">
                  <div className="text-[32px] md:text-[42px] font-medium text-ink mb-1">{s.value}</div>
                  <div className="text-[13px] text-ink-4">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Phases */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="mb-14">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-4">Faze startap rasta</h2>
            <p className="text-[16px] text-ink-4 max-w-[500px]">Svaka faza zahteva drugačiju strategiju. Mi prilagođavamo pristup gde god da ste.</p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {phases.map((p, i) => (
              <Reveal key={p.phase} delay={i * 100}
                className="bg-panel rounded-[16px] p-7 border border-edge-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-tint flex items-center justify-center flex-shrink-0">
                    <span className="text-[12px] text-ink-4 font-medium">{i + 1}</span>
                  </div>
                  <div>
                    <div className="text-[18px] font-medium text-ink">{p.phase}</div>
                    <div className="text-[12px] text-ink-4">{p.goal}</div>
                  </div>
                </div>
                <ul className="space-y-2 pl-11">
                  {p.tactics.map(tactic => (
                    <li key={tactic} className="flex items-start gap-2 text-[13px] text-ink-4">
                      <div className="w-1 h-1 rounded-full bg-tint mt-2 flex-shrink-0" /> {tactic}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 px-4 md:px-8 bg-tint">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="mb-14">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-4">Tipični startup problemi</h2>
            <p className="text-[16px] text-ink-4 max-w-[500px]">I kako ih rešavamo.</p>
          </Reveal>
          <div className="space-y-3">
            {challenges.map((c, i) => (
              <Reveal key={c.problem} delay={i * 60}>
                <div className="bg-panel rounded-[16px] p-5 md:p-6 border border-edge-2 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="text-[14px] md:text-[15px] font-medium text-ink">❌ {c.problem}</div>
                  <div className="text-[13px] text-ink-4 md:text-right">✓ {c.solution}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="mb-14 text-center">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-4">Kako pomažemo startapovima</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}
                className="bg-panel rounded-[16px] p-7 border border-edge-2">
                <h3 className="text-[20px] font-medium text-ink mb-2">{s.title}</h3>
                <p className="text-[13px] text-ink-4 mb-5 leading-relaxed">{s.desc}</p>
                <div className="space-y-1.5">
                  {s.deliverables.map(d => (
                    <div key={d} className="flex items-start gap-2 text-[13px] text-ink-4">
                      <div className="w-1 h-1 rounded-full bg-tint mt-2 flex-shrink-0" /> {d}
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[700px] mx-auto text-center">
          <Reveal className="bg-tint rounded-[16px] p-10 border border-edge-2">
            <div className="text-[48px] text-ink/[0.06] mb-4 font-serif">"</div>
            <p className="text-[18px] text-ink-3 leading-[30px] italic mb-4">
              Startup uspeh nije sreća. To je jasno pozicioniranje, brza validacija i fokusirano testiranje kanala dok ne pronađete šta radi.
            </p>
            <span className="text-[13px] text-ink/25">Platinum Zenith Tim</span>
          </Reveal>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
