import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import BottomCTA from '../../components/BottomCTA'

const heroHomeDark = `{import.meta.env.BASE_URL}hero-home-dark.webp`
const heroHomeLight = `{import.meta.env.BASE_URL}hero-home-light.webp`

const metrics = [
  { value: '€4.20', label: 'Trošak po MQL' },
  { value: '22%', label: 'Trial to paid konverzija' },
  { value: '3.2x', label: 'LTV povećanje' },
  { value: '68 dana', label: 'Prosečan payback period' },
]

const challenges = [
  { problem: 'Skup lead acquisition', fix: 'Inbound content + SEO strategija' },
  { problem: 'Nizak trial to paid rate', fix: 'Onboarding optimizacija i email nurture' },
  { problem: 'Visok churn rate', fix: 'Customer success program i retention kampanje' },
  { problem: 'Dug sales cycle', fix: 'Lead scoring i personalizovani follow-up' },
  { problem: 'Nejasno pozicioniranje', fix: 'Messaging framework i ICP definisanje' },
]

const services = [
  {
    title: 'SaaS Website Dizajn',
    desc: 'Landing page koji jasno komunicira vrednost, smanjuje friction i ubrzava trial signup.',
    items: ['Above-fold clarity', 'Feature-benefit framework', 'Social proof i testimonials', 'Demo i trial CTA optimizacija']
  },
  {
    title: 'Inbound i Content Marketing',
    desc: 'Sadržaj koji educira, gradi autoritet i dovodi kvalifikovane lead-ove organskim putem.',
    items: ['SEO blog strategija', 'Lead magnet kreiranje', 'Case studies i whitepapers', 'Email drip campaigns']
  },
  {
    title: 'PPC i Paid Social',
    desc: 'Targetirane kampanje koje privlače decision-makere sa visokom intent-om.',
    items: ['Google Search Ads', 'LinkedIn Lead Gen', 'Retargeting za trial korisnika', 'Account-based marketing (ABM)']
  },
  {
    title: 'Onboarding i Retention',
    desc: 'Sistemi koji transformišu trial korisnika u plaćajuće klijente i smanjuju odliv.',
    items: ['Welcome email sekvence', 'In-app messaging', 'Milestone celebrations', 'Churn prevention campaigns']
  },
]

const funnelStages = [
  { stage: 'Awareness', goal: 'Privući pravu publiku', tactics: 'SEO, content, paid ads' },
  { stage: 'Consideration', goal: 'Educirati i izgraditi poverenje', tactics: 'Case studies, demo, webinari' },
  { stage: 'Trial', goal: 'Brz onboarding, "aha" momenat', tactics: 'Email, in-app tours, support' },
  { stage: 'Conversion', goal: 'Trial → Paid prelazak', tactics: 'Personalizovane ponude, urgency' },
  { stage: 'Retention', goal: 'Smanjiti churn, povećati LTV', tactics: 'Success check-ins, upsells' },
]

export default function SaasPage() {
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
          <h1 className="hero-enter hero-enter-d1 text-[32px] md:text-[62px] font-medium leading-[1.1] md:leading-[62px] tracking-[-1px] md:tracking-[-1.86px] text-black mb-4">SaaS marketing koji skalira</h1>
          <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center max-w-[620px] mx-auto px-6 md:px-2">Vi�e trial korisnika, bolji onboarding, manji churn.</p>
        </div>
      </section>
      <section className="pb-12 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[900px] mx-auto text-center hero-enter hero-enter-d1">
            <span className="text-[12px] text-ink-4 uppercase tracking-widest mb-3 block font-medium">SaaS Marketing</span>
            <h1 className="text-[36px] md:text-[52px] font-medium leading-[1.08] tracking-[-1.5px] text-ink mb-5">
              Od trial korisnika
              <span className="block text-ink-3">do plaćajućih klijenata</span>
            </h1>
            <p className="text-[16px] text-ink-4 leading-[26px] mb-8 max-w-[600px] mx-auto">
              Većina SaaS kompanija dovodi saobraćaj ali gubi novac na lošoj konverziji i visokom churn-u. Mi popravljamo ceo funnel.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-[40px] hover:bg-inv-bg-hover transition-colors">
                Zakažite Demo Call →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="bg-panel rounded-[16px] p-6 border border-edge-2 text-center">
                  <div className="text-[32px] md:text-[42px] font-medium text-ink mb-1">{m.value}</div>
                  <div className="text-[13px] text-ink-4">{m.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Funnel Stages */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="mb-14">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-4">SaaS funnel koji funkcioniše</h2>
            <p className="text-[16px] text-ink-4 max-w-[500px]">Svaka faza zahteva drugačiji pristup. Mi optimizujemo sve.</p>
          </Reveal>
          <div className="space-y-3">
            {funnelStages.map((f, i) => (
              <Reveal key={f.stage} delay={i * 60}>
                <div className="bg-panel rounded-[16px] p-5 md:p-6 border border-edge-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                    <div className="flex items-center gap-3 md:w-[140px]">
                      <div className="w-7 h-7 rounded-full bg-tint flex items-center justify-center flex-shrink-0">
                        <span className="text-[11px] text-ink-4 font-medium">{i + 1}</span>
                      </div>
                      <div className="text-[14px] font-medium text-ink">{f.stage}</div>
                    </div>
                    <div className="flex-1 text-[13px] text-ink-4 pl-10 md:pl-0">{f.goal}</div>
                    <div className="text-[12px] text-ink-5 bg-tint px-3 py-1 rounded-full md:w-fit pl-10 md:pl-3">{f.tactics}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 px-4 md:px-8 bg-tint">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="mb-14">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-4">Tipični SaaS problemi</h2>
            <p className="text-[16px] text-ink-4 max-w-[500px]">I kako ih rešavamo za naše klijente.</p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {challenges.map((c, i) => (
              <Reveal key={c.problem} delay={i * 80}
                className="bg-panel rounded-[16px] p-6 border border-edge-2">
                <div className="text-[15px] font-medium text-ink mb-2">❌ {c.problem}</div>
                <div className="text-[13px] text-ink-4">✓ {c.fix}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="mb-14 text-center">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-4">Kako vam pomažemo</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}
                className="bg-panel rounded-[16px] p-7 border border-edge-2">
                <h3 className="text-[20px] font-medium text-ink mb-2">{s.title}</h3>
                <p className="text-[13px] text-ink-4 mb-5 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-ink-4">
                      <div className="w-1 h-1 rounded-full bg-tint mt-2 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
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
              SaaS rast nije misterija. Trebate jasan positioning, efektivan funnel i sisteme koji zadržavaju klijente.
            </p>
            <span className="text-[13px] text-ink/25">Platinum Zenith Tim</span>
          </Reveal>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
