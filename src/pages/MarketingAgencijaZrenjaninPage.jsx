import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const services = [
  {
    title: 'Izrada sajtova',
    desc: 'Od poslovnih prezentacija do web shopova. Custom dizajn prilagodjen vašem brendu, optimizovan za brzinu i mobilne uredjaje.',
    icon: '🌐',
    link: '/web-dizajn',
  },
  {
    title: 'SEO optimizacija',
    desc: 'Rangiranje na Google-u za ključne reči koje vaši kupci zaista pretražuju. Lokalna i nacionalna optimizacija.',
    icon: '📈',
    link: '/seo-optimizacija',
  },
  {
    title: 'Društvene mreže',
    desc: 'Strategija, sadržaj i oglasi na Facebook-u i Instagram-u. Fokus na konkretne rezultate, ne samo lajkove.',
    icon: '📱',
    link: '/drustvene-mreze',
  },
  {
    title: 'Google Ads',
    desc: 'Plaćeni oglasi sa preciznim targetiranjem. Svaki dinar uložen u reklamu treba da se vrati kroz prodaju.',
    icon: '🎯',
    link: '/digitalni-marketing',
  },
  {
    title: 'CRO optimizacija',
    desc: 'Pretvaramo vaše posetioce u kupce. Male izmene na sajtu mogu značiti veliku razliku u prihodu.',
    icon: '⚡',
    link: '/cro-optimizacija',
  },
  {
    title: 'Konsalting',
    desc: 'Ne morate da angažujete agenciju za sve. Ponekad vam treba samo stručan savet i jasan plan.',
    icon: '💡',
    link: '/konsalting',
  },
]

const reasons = [
  {
    title: 'Poznajemo lokalno tržište',
    text: 'Sedište nam je u Zrenjaninu. Razumemo kako funkcionišu firme u Banatu i Vojvodini. Znamo ko su vaši kupci i kako razmišljaju.',
  },
  {
    title: 'Rezultati se mere brojevima',
    text: 'Broj posetilaca, stopa konverzije, prihod od kampanje. Svaki mesec dobijate izveštaj sa konkretnim brojkama, ne opšte priče o brendingu.',
  },
  {
    title: 'Revenue share model',
    text: 'Za ozbiljne projekte nudimo model gde zarađujemo samo ako vi zarađujete. Naš profit je direktno vezan za vaš rast.',
  },
  {
    title: 'Brza komunikacija',
    text: 'Nismo agencija iz Beograda koja odgovara za 3 dana. Lokalni smo, dostupni smo i reagujemo brzo.',
  },
  {
    title: 'Sve na jednom mestu',
    text: 'Sajt, SEO, oglasi, društvene mreže. Nema potrebe da koordinišete 4 različita freelancera.',
  },
]

const localFaqs = [
  { q: 'Da li radite samo sa firmama iz Zrenjanina?', a: 'Ne. Radimo sa klijentima iz cele Srbije i regiona. Ali kao firma iz Zrenjanina, posebno dobro poznajemo lokalno tržište Vojvodine.' },
  { q: 'Koliko košta saradnja sa agencijom?', a: 'Zavisi od obima posla. Izrada sajta kreće od 300€, mesečni marketing od 500€. Za ozbiljne projekte nudimo revenue share model bez fiksnih troškova.' },
  { q: 'Koliko brzo mogu da očekujem rezultate?', a: 'Plaćeni oglasi donose rezultate za par dana. SEO optimizacija traži 3-6 meseci za ozbiljnije pomake. Kombinacija oba daje najbolje rezultate.' },
  { q: 'Mogu li da vidim primere vašeg rada?', a: 'Naravno. Pogledajte naše studije slučaja gde detaljno opisujemo šta smo radili i kakve rezultate smo postigli.' },
  { q: 'Šta ako već imam sajt ali ne donosi rezultate?', a: 'Radimo besplatnu analizu vašeg sajta i kažemo vam konkretno šta ne valja i šta bi trebalo popraviti. Bez obaveza.' },
]

export default function MarketingAgencijaZrenjaninPage() {
  usePageMeta()

  return (
    <div className="min-h-screen bg-page">
      {/* Hero */}
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(168,85,247,0.1) 0%, transparent 50%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(168,85,247,0.06) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Zrenjanin · Vojvodina · Srbija</span>
          <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">
            Marketing agencija u Zrenjaninu
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[600px] mx-auto mb-8">
            Platinum Zenith je agencija za digitalni marketing sa sedištem u Zrenjaninu. Pravimo sajtove koji prodaju, vodimo kampanje koje donose rezultate i pomažemo firmama da rastu online.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
              Besplatne konsultacije
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-ink-2 text-[14px] font-medium h-11 px-6 rounded-full border border-edge hover:bg-tint transition-colors">
              Pogledajte rezultate
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Šta radimo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(s => (
              <Link key={s.title} to={s.link} className="bg-panel rounded-[20px] border border-edge p-6 flex flex-col hover:border-ink-4 transition-colors group">
                <span className="text-[28px] mb-3">{s.icon}</span>
                <h3 className="text-[17px] font-medium text-ink mb-2 group-hover:text-ink transition-colors">{s.title}</h3>
                <p className="text-[14px] text-ink-2 leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Zašto Platinum Zenith?</h2>
          <div className="space-y-8">
            {reasons.map((r, i) => (
              <div key={r.title} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-tint flex items-center justify-center text-[13px] font-medium text-ink-2">{i + 1}</div>
                <div>
                  <h3 className="text-[17px] font-medium text-ink mb-1">{r.title}</h3>
                  <p className="text-[15px] text-ink-2 leading-relaxed">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Info */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-5">O nama</h2>
          <div className="text-[15px] text-ink-2 leading-relaxed space-y-4">
            <p>
              Platinum Zenith je ogranak firme Platinum Truffles DOO Zrenjanin. Osim digitalnog marketinga, bavimo se i proizvodnjom i distribucijom svežih tartufa, tako da razumemo šta znači voditi pravi biznis sa pravim troškovima.
            </p>
            <p>
              To nas razlikuje od agencija koje su radile samo u marketingu. Znamo kako izgleda P&L, šta znači cash flow i zašto je svaki dinar uložen u reklamu investicija koja mora da se vrati.
            </p>
            <p>
              Naša adresa je Ruže Šulman 19, 23000 Zrenjanin. Možete nas pozvati na <a href="tel:+381668168929" className="text-ink underline">+381 66 816 8929</a> ili pisati na <a href="mailto:aleksandar@platinumzenith.com" className="text-ink underline">aleksandar@platinumzenith.com</a>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Često postavljana pitanja</h2>
          <div className="space-y-5">
            {localFaqs.map(f => (
              <details key={f.q} className="group bg-panel rounded-[14px] border border-edge">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-[15px] font-medium text-ink">
                  {f.q}
                  <svg className="w-4 h-4 text-ink-3 transition-transform group-open:rotate-180 flex-shrink-0 ml-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </summary>
                <div className="px-5 pb-5 text-[14px] text-ink-2 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[22px] font-medium text-ink mb-6 text-center">Povezane stranice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            <Link to="/marketing-agencija-beograd" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Beograd</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing u BG</div>
            </Link>
            <Link to="/marketing-agencija-novi-sad" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Novi Sad</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing u NS</div>
            </Link>
            <Link to="/cene-digitalnog-marketinga" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene digitalnog marketinga</div>
              <div className="text-[12px] text-ink-3">Koliko košta marketing mesečno</div>
            </Link>
            <Link to="/blog/kako-izabrati-pravu-marketing-agenciju" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Kako izabrati agenciju</div>
              <div className="text-[12px] text-ink-3">7 znakova za pravi izbor partnera</div>
            </Link>
            <Link to="/google-reklame-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Google reklame cena</div>
              <div className="text-[12px] text-ink-3">Procena budžeta za lokalnu akviziciju</div>
            </Link>
            <Link to="/instagram-reklame-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Instagram reklame cena</div>
              <div className="text-[12px] text-ink-3">Uporedite trošak vizualnog kanala</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Spremni da pokrenete digitalni marketing?</h2>
          <p className="text-[15px] text-ink-2 mb-6">
            Javite nam se za besplatnu analizu vašeg trenutnog stanja i konkretne preporuke. Bez obaveza.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors"
          >
            Zakažite besplatan razgovor
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      {/* JSON-LD: LocalBusiness + FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://platinumzenith.com/#organization",
            "name": "Platinum Zenith",
            "alternateName": "Platinum Truffles DOO Zrenjanin",
            "url": "https://platinumzenith.com",
            "telephone": "+381668168929",
            "email": "aleksandar@platinumzenith.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ruže Šulman 19",
              "addressLocality": "Zrenjanin",
              "postalCode": "23000",
              "addressCountry": "RS"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 45.3816,
              "longitude": 20.3899
            },
            "areaServed": [
              { "@type": "City", "name": "Zrenjanin" },
              { "@type": "State", "name": "Vojvodina" },
              { "@type": "Country", "name": "Srbija" }
            ],
            "serviceType": ["Digitalni marketing", "Izrada sajtova", "SEO optimizacija", "Društvene mreže", "Google Ads"],
            "priceRange": "$$"
          },
          {
            "@type": "FAQPage",
            "mainEntity": localFaqs.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Početna", "item": "https://platinumzenith.com/" },
              { "@type": "ListItem", "position": 2, "name": "Marketing agencija Zrenjanin", "item": "https://platinumzenith.com/marketing-agencija-zrenjanin" }
            ]
          }
        ]
      })}} />
    </div>
  )
}
