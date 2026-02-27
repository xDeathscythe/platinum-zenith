import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const heroHomeDark = `${import.meta.env.BASE_URL}hero-home-dark.webp`
const heroHomeLight = `${import.meta.env.BASE_URL}hero-home-light.webp`

const webPlans = [
  {
    name: 'Landing Page',
    price: '€950',
    period: 'jednokratno',
    desc: 'Jedna stranica fokusirana na konverziju. Idealna za kampanje i lansiranja.',
    features: [
      'Jedna stranica (one-pager)',
      'Responsive dizajn',
      'Kontakt forma',
      'Osnovna SEO optimizacija',
      'Hosting podešavanje',
      'Isporuka za 5-7 dana',
    ],
    featured: false,
  },
  {
    name: 'Poslovni Sajt',
    price: '€1,600',
    period: 'jednokratno',
    desc: 'Kompletan sajt za firme koje žele profesionalno online prisustvo.',
    features: [
      'Do 10 stranica',
      'Custom dizajn prema brendu',
      'Blog sekcija',
      'SEO optimizacija',
      'Google Analytics integracija',
      'SSL + brzina optimizacija',
      'Kontakt forme i mape',
      'Isporuka za 2-3 nedelje',
    ],
    featured: true,
  },
  {
    name: 'E-Commerce Prodavnica',
    price: '€2,200 — €3,500',
    period: 'u zavisnosti od obima',
    desc: 'Online prodavnica prilagođena broju proizvoda i tipu poslovanja.',
    features: [
      'WooCommerce ili custom platforma',
      'Neograničen broj stranica',
      'Sistem za plaćanje',
      'Upravljanje proizvodima',
      'Custom funkcionalnosti',
      'API integracije',
      'Obuka za korišćenje',
      'Isporuka po dogovoru',
    ],
    featured: false,
  },
]

const faqs = [
  { q: 'Kako funkcioniše Pay Per Result?', a: 'Plaćate samo kada ostvarujemo dogovorene rezultate (leadove, prodaje, zakazane termine). Nema mesečnog fiksnog troška za marketing usluge, samo setup fee na početku i naknadu po rezultatu.' },
  { q: 'Šta pokriva setup fee od €500?', a: 'Postavljanje reklamnih naloga, kreiranje kampanja, izrada kreativa, podešavanje tracking sistema, analitika i inicijalna strategija. Ovo se plaća jednom, na početku saradnje.' },
  { q: 'Da li radite sa firmama van Srbije?', a: 'Da! Radimo sa klijentima iz celog regiona. Srbija, Hrvatska, BiH, Crna Gora, ali i šire.' },
  { q: 'Koliko brzo mogu očekivati rezultate?', a: 'Za paid ads: prvih 2-4 nedelje. Za SEO i organski rast: 2-4 meseca. Za CRO: odmah po implementaciji promena.' },
  { q: 'Da li postoji minimalan budžet za reklame?', a: 'Preporučujemo minimum €500/mesec za reklamni budžet (odvojeno od naše naknade). Optimalan budžet definišemo zajedno na osnovu vaših ciljeva.' },
  { q: 'Šta ako se ne slažem sa cenama za sajt?', a: 'Svaki projekat je jedinstven. Zakažite besplatan poziv i napravićemo prilagođenu ponudu prema vašim specifičnim potrebama i budžetu.' },
]

export default function PricingPage() {
  return (
    <>
      <section className="relative flex flex-col items-center text-center pt-[160px] md:pt-[220px] pb-[40px] px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ backgroundImage: `url(${heroHomeDark})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#000000' }} />
          <div className="absolute inset-0 only-light" style={{ backgroundImage: `url(${heroHomeLight})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#ffffff' }} />
          <div className="absolute inset-x-0 z-[1]" style={{ top: '55%', height: '45%', backdropFilter: 'blur(68px)', WebkitBackdropFilter: 'blur(68px)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)' }} />
          <div className="absolute inset-0 z-[2] only-dark" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.30) 58%, rgba(0,0,0,0.70) 74%, #000000 92%)' }} />
          <div className="absolute inset-0 z-[2] only-light" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,0.35) 58%, rgba(255,255,255,0.75) 74%, #ffffff 92%)' }} />
        </div>
        <div className="relative z-10 w-full max-w-[800px] mx-auto">
          <h1 className="hero-enter hero-enter-d1 text-[32px] md:text-[62px] font-medium leading-[1.1] md:leading-[62px] tracking-[-1px] md:tracking-[-1.86px] text-black mb-4">
            Transparentne cene,<br className="hidden md:inline" /> merljivi rezultati
          </h1>
          <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center mb-6 max-w-[580px] mx-auto px-6 md:px-2">
            Fiksne cene za izradu sajtova. Pay Per Result za marketing. Bez skrivenih troškova.
          </p>
        </div>
      </section>

      {/* Web Design packages */}
      <section className="pb-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-[28px] md:text-[36px] font-medium text-ink mb-2">Izrada sajtova</h2>
            <p className="text-[15px] text-ink-3">Fiksne cene. Jasne isporuke. Uključena jedna godina podrške.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {webPlans.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`rounded-[11px] p-8 border flex flex-col ${p.featured ? 'bg-tint border-white/[0.12] scale-[1.02]' : 'bg-tint border-edge-2'}`}>
                {p.featured && <span className="text-[11px] text-emerald-400 uppercase tracking-widest font-bold mb-3">Najpopularnije</span>}
                <h3 className="text-[24px] font-medium text-ink mb-1">{p.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[40px] font-bold text-ink">{p.price}</span>
                </div>
                <span className="text-[13px] text-ink-4 mb-4">{p.period}</span>
                <p className="text-[14px] text-ink-4 leading-relaxed mb-6">{p.desc}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px] text-ink/75">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/kontakt"
                  className={`w-full h-12 rounded-[40px] inline-flex items-center justify-center text-[14px] font-medium transition-colors ${
                    p.featured ? 'bg-inv-bg text-inv-fg hover:bg-inv-bg-hover' : 'border border-edge-2 text-ink hover:bg-tint-2'
                  }`}>
                  Zatražite ponudu
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing — Pay Per Result */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-[28px] md:text-[36px] font-medium text-ink mb-2">Marketing</h2>
            <p className="text-[15px] text-ink-3">Ne naplaćujemo mesečne honorare. Plaćate po rezultatu.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[11px] border border-edge-2 bg-tint overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              {/* Left — model explanation */}
              <div className="p-8 md:p-12">
                <span className="text-[11px] text-emerald-400 uppercase tracking-widest font-bold mb-4 block">Pay Per Result</span>
                <h3 className="text-[32px] md:text-[40px] font-bold text-ink mb-2">€500</h3>
                <span className="text-[15px] text-ink-3 block mb-6">jednokratni setup fee za početak saradnje</span>
                <p className="text-[15px] text-ink-2 leading-[26px] mb-8">
                  Ceo marketing sistem radimo po modelu Pay Per Result. Nema fiksnih mesečnih honorara za upravljanje kampanjama.
                  Naplaćujemo samo kada isporučimo dogovorene rezultate.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-emerald-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-emerald-400 text-[14px] font-bold">1</span>
                    </span>
                    <div>
                      <div className="text-[15px] text-ink font-medium">Setup fee €500</div>
                      <div className="text-[13px] text-ink-3">Postavljanje naloga, kreiranje kampanja, tracking, kreativa, strategija</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-emerald-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-emerald-400 text-[14px] font-bold">2</span>
                    </span>
                    <div>
                      <div className="text-[15px] text-ink font-medium">Reklamni budžet</div>
                      <div className="text-[13px] text-ink-3">Plaćate direktno platformama (Meta, Google, TikTok). Min. preporuka €500/mesec</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-emerald-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-emerald-400 text-[14px] font-bold">3</span>
                    </span>
                    <div>
                      <div className="text-[15px] text-ink font-medium">Pay Per Result</div>
                      <div className="text-[13px] text-ink-3">Naknada samo po isporučenom rezultatu (lead, prodaja, zakazani termin)</div>
                    </div>
                  </div>
                </div>

                <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-12 px-6 rounded-[40px] hover:bg-inv-bg-hover transition-colors">
                  Zakažite besplatan poziv →
                </Link>
              </div>

              {/* Right — what's included */}
              <div className="p-8 md:p-12 border-t md:border-t-0 md:border-l border-edge-2">
                <h4 className="text-[18px] font-medium text-ink mb-6">Šta uključuje setup</h4>
                <ul className="space-y-3">
                  {[
                    'Kompletna analiza vašeg biznisa i tržišta',
                    'Kreiranje reklamnih naloga na svim platformama',
                    'Izrada prvih kampanja i kreativa',
                    'Postavljanje Facebook Pixel, Google Tag, TikTok Pixel',
                    'Podešavanje konverzionog praćenja',
                    'Landing page optimizacija (ako je potrebna)',
                    'Definisanje ciljne publike i strategije',
                    'A/B test setup za kreative',
                  ].map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px] text-ink/75">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-4 rounded-[11px] bg-tint-2 border border-edge-2">
                  <div className="text-[13px] text-ink-2 mb-1">Zašto Pay Per Result?</div>
                  <p className="text-[13px] text-ink-4 leading-relaxed">
                    Jer verujemo u rezultate, ne u fakture. Ako mi ne zarađujemo vama, ne zarađujemo ni mi.
                    To nas motiviše da damo maksimum na svakoj kampanji.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-[36px] font-medium text-ink text-center mb-12">Česta pitanja</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <motion.details key={f.q} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group bg-tint rounded-[11px] border border-edge-2 overflow-hidden">
                <summary className="px-6 py-4 text-[16px] font-medium text-ink cursor-pointer list-none flex items-center justify-between">
                  {f.q}
                  <span className="text-ink-2 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-6 pb-4 text-[15px] text-ink-2 leading-relaxed">{f.a}</div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[30px] font-medium text-ink mb-4">Spremni da počnete?</h2>
          <p className="text-[17px] text-ink-4 mb-8">Zakažite besplatan poziv i razgovarajmo o tome kako možemo pokrenuti vaš rast.</p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-12 px-6 rounded-[40px] hover:bg-inv-bg-hover transition-colors">
            Zakažite Besplatan Poziv →
          </Link>
        </div>
      </section>
    </>
  )
}
