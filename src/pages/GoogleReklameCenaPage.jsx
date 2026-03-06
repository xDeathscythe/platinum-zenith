import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const budgetTiers = [
  {
    name: 'Početni test',
    budget: '300 - 700€/mes',
    desc: 'Za firme koje prvi put ulaze u Google Ads. Fokus je na Search kampanjama za ključne upite sa visokim intentom.',
    results: ['200-600 klikova mesečno', 'Jasna slika CPC po ključnim rečima', 'Test 2-3 ponude i landing stranice', 'Dovoljno za lokalne i nišne usluge'],
    forWhom: 'Mali biznisi i lokalne usluge',
  },
  {
    name: 'Stabilan rast',
    budget: '700 - 2.000€/mes',
    desc: 'Za firme koje žele stabilan priliv upita i bolju predvidljivost troška po leadu kroz kontinuiranu optimizaciju.',
    results: ['600-2.500 klikova mesečno', 'Search + remarketing', 'A/B test oglasa i landing stranica', 'Optimizacija po lead kvalitetu'],
    forWhom: 'B2B usluge, ordinacije, e-commerce',
  },
  {
    name: 'Agresivna akvizicija',
    budget: '2.000 - 6.000€/mes',
    desc: 'Za firme koje žele da osvoje veći udeo tržišta. Kombinacija Search, Performance Max i skaliranje pobedničkih kampanja.',
    results: ['2.500-10.000+ klikova', 'Više funnel kampanja po intentu', 'Dnevna optimizacija bid-ova', 'Napredna atribucija konverzija'],
    forWhom: 'Srednje i veće firme sa jasnim unit economics',
  },
  {
    name: 'Enterprise',
    budget: '6.000€+/mes',
    desc: 'Za ozbiljne sisteme, više tržišta i veliki obim pretrage. Dediciran tim i profit-orijentisano skaliranje.',
    results: ['Nacionalni i regionalni doseg', 'Multi-account struktura kampanja', 'Custom dashboard i cohort analiza', 'Skaliranje po profitabilnosti, ne po vanity metrikama'],
    forWhom: 'Brendovi i kompanije sa većim prodajnim timom',
  },
]

const costBreakdown = [
  {
    item: 'Budžet za klikove (Google)',
    desc: 'Ovo je novac koji ide direktno Google-u za prikaz i klik. Iznos zavisi od konkurencije, kvaliteta oglasa i landing stranice.',
  },
  {
    item: 'Upravljanje kampanjama (agencija)',
    desc: 'Naknada za research ključnih reči, postavku, optimizaciju i izveštavanje. Najčešće fiksno 250-900€/mes ili procenat budžeta.',
  },
  {
    item: 'Kreativa i copy',
    desc: 'Tekstualni oglasi, extension-i, asseti za Performance Max i test varijante ponuda. Kvalitet copy-ja direktno utiče na CPC i konverzije.',
  },
  {
    item: 'Landing stranice i tracking',
    desc: 'Ako landing ne konvertuje, plaćate skupe klikove bez rezultata. Tracking (GA4 + konverzije) mora biti čist da biste znali šta radi.',
  },
]

const metrics = [
  {
    metric: 'CPC (Search) u Srbiji',
    srbija: '0,10 - 1,20€',
    note: 'Nišne B2B usluge i pravne/medicinske oblasti su skuplje. Lokalni upiti često imaju povoljniji klik.',
  },
  {
    metric: 'CTR (Search)',
    srbija: '4% - 12%',
    note: 'Viši CTR obično znači bolju relevantnost oglasa i nižu cenu klika kroz Quality Score efekat.',
  },
  {
    metric: 'CPA (lead)',
    srbija: '8 - 60€',
    note: 'Raspon je širok jer zavisi od vrednosti usluge, konkurencije i kvaliteta prodajnog procesa nakon upita.',
  },
  {
    metric: 'ROAS / ROI',
    srbija: '3x - 10x',
    note: 'Za stabilne naloge cilj je profitabilan rast, ne samo više klikova. Bitna je marža po usluzi/proizvodu.',
  },
]

const mistakes = [
  {
    title: 'Gađanje preširokih ključnih reči',
    text: 'Ako targetirate široke, informativne upite bez jasnog intenta kupovine, dobijate mnogo klikova i malo upita. Fokus treba da bude na commercial intent terminima.',
  },
  {
    title: 'Bez negativnih ključnih reči',
    text: 'Bez negativnih keyword-a oglasi se prikazuju na nerelevantnim upitima. To najbrže diže trošak i spušta kvalitet leadova.',
  },
  {
    title: 'Jedan oglas za sve usluge',
    text: 'Svaka usluga treba svoj ad group i poruku. Kada sve strpate u jedan oglas, relevatnost pada i CPC raste.',
  },
  {
    title: 'Loša landing stranica',
    text: 'Google može dovesti kvalitetan klik, ali ako landing nema jasnu ponudu i CTA, konverzija pada i kampanja izgleda kao da ne radi.',
  },
  {
    title: 'Optimizacija samo po ceni klika',
    text: 'Nizak CPC ne znači dobar rezultat. Fokus mora biti na ceni kvalifikovanog leada i konačnom profitu, ne samo na jeftinom saobraćaju.',
  },
]

const faqs = [
  {
    q: 'Koliki je minimalan budžet za Google Ads?',
    a: 'Praktični minimum je oko 300€ mesečno za klikove, plus upravljanje. Ispod toga je teško prikupiti dovoljno podataka za ozbiljnu optimizaciju.',
  },
  {
    q: 'Da li je Google Ads bolji od Facebook oglasa?',
    a: 'Google hvata postojeću potražnju (ljudi koji aktivno traže rešenje), dok Facebook češće kreira potražnju. Za većinu firmi najbolje radi kombinacija oba kanala.',
  },
  {
    q: 'Koliko brzo se vide rezultati?',
    a: 'Prvi klikovi i upiti dolaze brzo, često u prvih nekoliko dana. Za stabilne brojke i kvalitetnu optimizaciju obično je potrebno 3-6 nedelja.',
  },
  {
    q: 'Šta najviše utiče na cenu klika?',
    a: 'Konkurencija za ključnu reč, kvalitet oglasa, relevatnost landing stranice i istorija naloga. Dobar Quality Score može osetno smanjiti CPC.',
  },
  {
    q: 'Da li mogu sam da vodim kampanje?',
    a: 'Možete, ali bez jasne strukture i trackinga često dolazi do rasipanja budžeta. Ako vodite kampanje sami, krenite sa uskim setom ključnih reči i jasnim ciljem konverzije.',
  },
]

export default function GoogleReklameCenaPage() {
  usePageMeta()

  return (
    <div className="min-h-screen bg-page">
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(59,130,246,0.16) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(99,102,241,0.12) 0%, transparent 50%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(59,130,246,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(99,102,241,0.06) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 max-w-[820px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Google Ads vodič</span>
          <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">
            Koliko koštaju Google reklame u Srbiji 2026?
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[640px] mx-auto">
            Realni budžeti, cena klika, česte greške i šta možete očekivati po fazama rasta. Bez nerealnih obećanja i bez skrivanja troškova.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Budžeti po fazama</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {budgetTiers.map(t => (
              <div key={t.name} className="bg-panel rounded-[20px] border border-edge p-6 md:p-8 flex flex-col min-h-[340px]">
                <div className="text-[12px] text-ink-4 uppercase tracking-widest mb-2">{t.forWhom}</div>
                <h3 className="text-[22px] font-medium text-ink mb-1">{t.name}</h3>
                <div className="text-[28px] md:text-[32px] font-bold text-ink mb-4">{t.budget}</div>
                <p className="text-[14px] text-ink-2 leading-relaxed mb-5">{t.desc}</p>
                <ul className="space-y-2 mt-auto">
                  {t.results.map(r => (
                    <li key={r} className="flex items-start gap-2 text-[13px] text-ink-2">
                      <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-4 text-center">Šta ulazi u ukupni trošak?</h2>
          <p className="text-[15px] text-ink-3 text-center mb-10 max-w-[600px] mx-auto">
            Kada čujete cenu Google Ads kampanje, važno je da razlikujete budžet za klikove i operativni rad na kampanjama.
          </p>
          <div className="space-y-5">
            {costBreakdown.map(c => (
              <div key={c.item} className="bg-panel rounded-[16px] border border-edge p-5 md:p-6">
                <h3 className="text-[16px] font-medium text-ink mb-2">{c.item}</h3>
                <p className="text-[14px] text-ink-2 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-4 text-center">Benchmark za srpsko tržište</h2>
          <p className="text-[15px] text-ink-3 text-center mb-10 max-w-[620px] mx-auto">
            Rasponi ispod su orijentacioni i pomažu da procenite da li vaš nalog radi zdravo ili ima prostora za optimizaciju.
          </p>
          <div className="space-y-4">
            {metrics.map(m => (
              <div key={m.metric} className="bg-panel rounded-[16px] border border-edge p-5 md:p-6 flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-[260px] flex-shrink-0">
                  <div className="text-[15px] font-medium text-ink">{m.metric}</div>
                  <div className="text-[20px] font-bold text-ink mt-1">{m.srbija}</div>
                </div>
                <p className="text-[14px] text-ink-2 leading-relaxed">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">5 grešaka koje dižu trošak</h2>
          <div className="space-y-8">
            {mistakes.map((m, i) => (
              <div key={m.title}>
                <h3 className="text-[17px] font-medium text-ink mb-2">
                  <span className="text-ink-4 mr-2">{i + 1}.</span>{m.title}
                </h3>
                <p className="text-[15px] text-ink-2 leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Česta pitanja</h2>
          <div className="space-y-5">
            {faqs.map(f => (
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

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[22px] font-medium text-ink mb-6 text-center">Povezane stranice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/koliko-kosta-facebook-reklama" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Facebook reklame cena</div>
              <div className="text-[12px] text-ink-3">Uporedi Meta i Google troškove</div>
            </Link>
            <Link to="/seo-optimizacija-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">SEO optimizacija cena</div>
              <div className="text-[12px] text-ink-3">Organski rast i dugoročni troškovi</div>
            </Link>
            <Link to="/cene-digitalnog-marketinga" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene digitalnog marketinga</div>
              <div className="text-[12px] text-ink-3">Kompletan cenovni vodič</div>
            </Link>
            <Link to="/blog/google-ads-cena-po-kliku-srbija-2026" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Google Ads CPC po niši</div>
              <div className="text-[12px] text-ink-3">Realni rasponi po industriji 2026</div>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Želite procenu budžeta za vaš Google Ads?</h2>
          <p className="text-[15px] text-ink-2 mb-6">
            Pošaljite nam osnovne informacije o ponudi i tržištu. Dobićete realan raspon budžeta, očekivani trošak po leadu i plan test faze.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors"
          >
            Zakažite besplatne konsultacije
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </div>
  )
}
