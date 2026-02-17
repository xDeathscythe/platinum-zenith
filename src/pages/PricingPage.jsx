import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Starter',
    price: '€499',
    period: '/mesec',
    desc: 'Za mala preduzeća koja žele online prisustvo i prve klijente.',
    features: [
      'Izrada sajta (do 5 stranica)',
      'Osnovna SEO optimizacija',
      'Google Business profil',
      'Mesečni izveštaj',
      'Email podrška',
    ],
    cta: 'Započnite',
    featured: false,
  },
  {
    name: 'Growth',
    price: '€1,499',
    period: '/mesec',
    desc: 'Za preduzeća spremna za agresivan rast. Zenith sistem u punoj snazi.',
    features: [
      'Sve iz Starter paketa',
      'Meta & Google Ads upravljanje',
      'Landing page optimizacija',
      'Email automatizacija',
      'CRO audit (kvartalno)',
      'Nedeljni izveštaji + poziv',
      'A/B testiranje',
      'Dedikovan account manager',
    ],
    cta: 'Najpokularniji →',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Za veća preduzeća sa specifičnim potrebama i višim budžetom.',
    features: [
      'Sve iz Growth paketa',
      'Višekanalni marketing',
      'Poslovno savetovanje',
      'Brending & identitet',
      'Custom integracije',
      'Prioritetna podrška 24/7',
      'Kvartalni biznis audit',
      'Dedicated tim',
    ],
    cta: 'Kontaktirajte nas',
    featured: false,
  },
]

const faqs = [
  { q: 'Da li postoji ugovor na određeno vreme?', a: 'Preporučujemo minimum 3 meseca za vidljive rezultate, ali nema obaveznog ugovora. Verujemo da će vam rezultati biti dovoljni da ostanete.' },
  { q: 'Šta ako kampanje ne donose rezultate?', a: 'Svake nedelje analiziramo performanse. Ako nešto ne radi — menjamo pristup. U prvom mesecu postavljamo temelje, a od drugog očekujte rast.' },
  { q: 'Da li radite sa firmama van Srbije?', a: 'Da! Radimo sa klijentima iz celog regiona — Srbija, Hrvatska, BiH, Crna Gora, ali i šire.' },
  { q: 'Koliko brzo mogu očekivati rezultate?', a: 'Za paid ads: prvih 2-4 nedelje. Za SEO i organski rast: 2-4 meseca. Za CRO: odmah po implementaciji promena.' },
]

export default function PricingPage() {
  return (
    <>
      <section className="pt-[160px] pb-20 px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-[800px] mx-auto">
          <span className="text-[13px] text-white/30 uppercase tracking-widest mb-4 block">Paketi</span>
          <h1 className="text-[36px] md:text-[56px] font-medium leading-[1.1] tracking-[-1px] md:tracking-[-1.5px] text-white mb-6">
            Investirajte u predvidljiv rast
          </h1>
          <p className="text-[17px] text-white/50 leading-[28px] max-w-[580px] mx-auto">
            Transparentne cene. Bez skrivenih troškova. Plaćate za rezultate, ne za obećanja.
          </p>
        </motion.div>
      </section>

      {/* Pricing cards */}
      <section className="pb-16 md:pb-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`rounded-[11px] p-8 border flex flex-col ${p.featured ? 'bg-white/[0.06] border-white/[0.12] scale-[1.02]' : 'bg-white/[0.03] border-white/[0.04]'}`}>
              {p.featured && <span className="text-[11px] text-emerald-400 uppercase tracking-widest font-bold mb-3">Preporučujemo</span>}
              <h3 className="text-[24px] font-medium text-white mb-1">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-[40px] font-bold text-white">{p.price}</span>
                <span className="text-[15px] text-white/40">{p.period}</span>
              </div>
              <p className="text-[14px] text-white/45 leading-relaxed mb-6">{p.desc}</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] text-white/60">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/kontakt"
                className={`w-full h-12 rounded-[40px] inline-flex items-center justify-center text-[14px] font-medium transition-colors ${
                  p.featured ? 'bg-white text-black hover:bg-white/90' : 'bg-white/[0.06] text-white hover:bg-white/[0.10]'
                }`}>
                {p.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-8">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-[36px] font-medium text-white text-center mb-12">Česta pitanja</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <motion.details key={f.q} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group bg-white/[0.03] rounded-[11px] border border-white/[0.04] overflow-hidden">
                <summary className="px-6 py-4 text-[16px] font-medium text-white cursor-pointer list-none flex items-center justify-between">
                  {f.q}
                  <span className="text-white/30 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-6 pb-4 text-[15px] text-white/50 leading-relaxed">{f.a}</div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-8">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[30px] font-medium text-white mb-4">Niste sigurni koji paket vam odgovara?</h2>
          <p className="text-[17px] text-white/45 mb-8">Zakažite besplatan poziv i pomoći ćemo vam da izaberete pravo rešenje za vaš biznis.</p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 bg-white text-black text-[14px] font-medium h-12 px-6 rounded-[40px] hover:bg-white/90 transition-colors">
            Zakažite Besplatan Poziv →
          </Link>
        </div>
      </section>
    </>
  )
}
