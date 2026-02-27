import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import BottomCTA from '../../components/BottomCTA'

const heroHomeDark = `{import.meta.env.BASE_URL}hero-home-dark.webp`
const heroHomeLight = `{import.meta.env.BASE_URL}hero-home-light.webp`

const challenges = [
  { issue: 'Visok trošak po kupcu', solution: 'Optimizovane kampanje sa nižim CPA' },
  { issue: 'Napuštene korpe (70%+ rate)', solution: 'Retargeting i email automatizacija' },
  { issue: 'Nizak prosečan račun', solution: 'Upsell, cross-sell, bundles' },
  { issue: 'Loša konverzija na sajtu', solution: 'CRO audit i A/B testiranje' },
  { issue: 'Nema povratnih kupaca', solution: 'Retention kampanje i loyalty program' },
  { issue: 'Sezonalnost prodaje', solution: 'Diversifikacija i evergreen proizvodi' },
]

const services = [
  {
    title: 'Shopify i E-Commerce Sajtovi',
    desc: 'Brzi, mobilni, optimizovani za prodaju. Integrisani sa svim potrebnim alatima.',
    features: ['Responzivan dizajn', 'Optimizovana brzina', 'Payment gateway integracija', 'Inventory management']
  },
  {
    title: 'Meta i Google Shopping Ads',
    desc: 'Kampanje koje ciljaju kupce sa visokom namerom. ROAS 4x+ je standard.',
    features: ['Facebook/Instagram katalozi', 'Google Shopping feed', 'Dynamic retargeting', 'Lookalike audiences']
  },
  {
    title: 'CRO za E-Commerce',
    desc: 'Povećavamo konverziju bez dodatnog troška za saobraćaj. 30-80% rast je moguć.',
    features: ['Checkout optimizacija', 'Product page testiranje', 'Trust badge placement', 'Urgency i scarcity taktike']
  },
  {
    title: 'Email i SMS Marketing',
    desc: 'Automatizovane poruke koje vraćaju kupce i povećavaju lifetime value.',
    features: ['Welcome serije', 'Cart abandonment', 'Post-purchase flows', 'Segmentacija po ponašanju']
  },
]

const results = [
  { metric: '4.2x', label: 'Prosečan ROAS' },
  { metric: '38%', label: 'Rast konverzije' },
  { metric: '2.7x', label: 'Više repeat kupaca' },
  { metric: '€180K', label: 'Dodatni prihod (6 mes.)' },
]

export default function EcommercePage() {
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
          <h1 className="hero-enter hero-enter-d1 text-[32px] md:text-[62px] font-medium leading-[1.1] md:leading-[62px] tracking-[-1px] md:tracking-[-1.86px] text-black mb-4">E-Commerce koji prodaje dok vi spavate</h1>
          <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center max-w-[620px] mx-auto px-6 md:px-2">Optimizovane prodavnice sa konverzijom koja raste iz meseca u mesec.</p>
        </div>
      </section>
      <section className="pb-12 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[900px] mx-auto text-center hero-enter hero-enter-d1">
            <span className="text-[12px] text-ink-4 uppercase tracking-widest mb-3 block font-medium">E-Commerce</span>
            <h1 className="text-[36px] md:text-[52px] font-medium leading-[1.08] tracking-[-1.5px] text-ink mb-5">
              Od skromnog
              <span className="block text-ink-3">do profitabilnog shop-a</span>
            </h1>
            <p className="text-[16px] text-ink-4 leading-[26px] mb-8 max-w-[600px] mx-auto">
              Većina e-commerce brendova gubi novac na oglaševanju ili ima sjajan saobraćaj koji ne kupuje. Mi popravljamo oba problema.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-[40px] hover:bg-inv-bg-hover transition-colors">
                Zakažite Analizu →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {results.map((r) => (
                <div key={r.label} className="bg-panel rounded-[16px] p-6 border border-edge-2 text-center">
                  <div className="text-[32px] md:text-[42px] font-medium text-ink mb-1">{r.metric}</div>
                  <div className="text-[13px] text-ink-4">{r.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="mb-14">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-4">Problemi koje rešavamo</h2>
            <p className="text-[16px] text-ink-4 max-w-[500px]">E-commerce izazovi sa kojima se susreću naši klijenti i kako ih prevaziđemo.</p>
          </Reveal>
          <div className="space-y-3">
            {challenges.map((c, i) => (
              <Reveal key={c.issue} delay={i * 60}>
                <div className="bg-panel rounded-[16px] p-5 md:p-6 border border-edge-2 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-tint flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[11px] text-ink-4 font-medium">{i + 1}</span>
                    </div>
                    <div className="text-[14px] md:text-[15px] font-medium text-ink">{c.issue}</div>
                  </div>
                  <div className="text-[13px] text-ink-4 md:text-right pl-9 md:pl-0">→ {c.solution}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 md:px-8 bg-tint">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="mb-14 text-center">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-4">Šta nudimo za e-commerce</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}
                className="bg-panel rounded-[16px] p-7 border border-edge-2">
                <h3 className="text-[20px] font-medium text-ink mb-2">{s.title}</h3>
                <p className="text-[13px] text-ink-4 mb-5 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-ink-4">
                      <div className="w-1 h-1 rounded-full bg-tint mt-2 flex-shrink-0" /> {f}
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
              E-commerce nije samo o saobraćaju. Pravi profit dolazi kad optimizujete svaki korak, od oglasa do checkout-a.
            </p>
            <span className="text-[13px] text-ink/25">Platinum Zenith Tim</span>
          </Reveal>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
