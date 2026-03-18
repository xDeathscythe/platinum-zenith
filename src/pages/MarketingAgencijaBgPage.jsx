import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const services = [
  { title: 'Izrada sajtova', desc: 'Custom dizajn koji konvertuje posetioce u kupce. PageSpeed 95+, mobile-first, SEO od prvog dana.', icon: '🌐', link: '/web-design' },
  { title: 'SEO optimizacija', desc: 'Rangiranje na Google-u za pretrage koje vaši kupci koriste. Lokalni i nacionalni SEO.', icon: '📈', link: '/seo-optimizacija-cena' },
  { title: 'Google Ads', desc: 'Plaćeni oglasi sa preciznim targetiranjem. Svaki dinar uložen mora da se vrati kroz prodaju.', icon: '🎯', link: '/digitalni-marketing' },
  { title: 'Društvene mreže', desc: 'Strategija, sadržaj i oglasi na Facebook-u i Instagram-u sa fokusom na rezultate.', icon: '📱', link: '/drustvene-mreze' },
  { title: 'CRO optimizacija', desc: 'Pretvaramo posetioce u kupce. Male izmene na sajtu mogu značiti veliku razliku u prihodu.', icon: '⚡', link: '/cro' },
  { title: 'Konsalting', desc: 'Stručan savet i jasan plan. Ne morate da angažujete agenciju za sve.', icon: '💡', link: '/consulting' },
]

const bgReasons = [
  { title: 'Razumemo beogradsko tržište', text: 'Beograd je najkonkurentnije tržište u Srbiji. Preko 60% online kupovine u zemlji dolazi iz prestonice. Znamo kako da se probijete kroz buku.' },
  { title: 'Revenue share model', text: 'Za ozbiljne projekte nudimo model gde naša zarada zavisi od vaših rezultata. Nema rizika za vas jer plaćate samo kad zarađujete.' },
  { title: 'Rezultati merljivi brojevima', text: 'Svaki mesec dobijate izveštaj sa konkretnim podacima. Saobraćaj, konverzije, prihod od kampanja. Ne prodajemo maglu.' },
  { title: 'Iskustvo sa raznim industrijama', text: 'Od e-commerce-a i SaaS-a do restorana i stomatologa. Svaka industrija ima svoje specifičnosti i mi ih poznajemo.' },
  { title: 'Sve na jednom mestu', text: 'Sajt, SEO, oglasi, mreže, CRO. Nema potrebe da koordinišete više agencija i freelancera.' },
]

const faqs = [
  { q: 'Zašto bih birao agenciju iz Zrenjanina za posao u Beogradu?', a: 'Zato što lokacija agencije ne određuje kvalitet rada. Digitalni marketing se radi online. Naši rezultati govore sami za sebe, a cene su konkurentnije od beogradskih agencija.' },
  { q: 'Da li imate klijente u Beogradu?', a: 'Da. Radimo sa firmama iz cele Srbije. Komunikacija je online, sastanci preko video poziva, a rezultati su merljivi bez obzira na geografsku udaljenost.' },
  { q: 'Koliko košta digitalni marketing za firmu u Beogradu?', a: 'Zavisi od obima. Izrada sajta kreće od 300€, mesečni SEO od 300€, Google Ads od 500€ (budžet + upravljanje). Za detalje pogledajte naše stranice o cenama.' },
  { q: 'Koliko brzo mogu da očekujem rezultate?', a: 'Plaćeni oglasi donose rezultate za par dana. SEO traži 3-6 meseci. CRO optimizacija daje rezultate čim se implementiraju izmene, obično za 2-4 nedelje.' },
  { q: 'Mogu li da dobijem besplatnu procenu?', a: 'Apsolutno. Javite nam se i analiziramo vaš sajt, konkurenciju i tržište. Dajemo konkretne preporuke bez obaveza.' },
]

export default function MarketingAgencijaBgPage() {
  usePageMeta()
  return (
    <div className="min-h-screen bg-page">
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(168,85,247,0.1) 0%, transparent 50%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(168,85,247,0.06) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Beograd · Srbija</span>
          <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">Marketing agencija za Beograd</h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[600px] mx-auto mb-8">
            Platinum Zenith pomaže firmama u Beogradu da rastu online. Pravimo sajtove koji prodaju, vodimo kampanje koje donose merljive rezultate i optimizujemo konverzije.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">Besplatna procena<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-ink-2 text-[14px] font-medium h-11 px-6 rounded-full border border-edge hover:bg-tint transition-colors">Pogledajte rezultate</Link>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Šta radimo za firme u Beogradu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(s => (
              <Link key={s.title} to={s.link} className="bg-panel rounded-[20px] border border-edge p-6 flex flex-col hover:border-ink-4 transition-colors group">
                <span className="text-[28px] mb-3">{s.icon}</span>
                <h3 className="text-[17px] font-medium text-ink mb-2">{s.title}</h3>
                <p className="text-[14px] text-ink-2 leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Zašto Platinum Zenith?</h2>
          <div className="space-y-8">
            {bgReasons.map((r, i) => (
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

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-5">Beograd u brojevima</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { num: '1.7M', label: 'Stanovnika' },
              { num: '60%+', label: 'Online kupovine u Srbiji' },
              { num: '85%', label: 'Koristi telefon za pretragu' },
              { num: '3x', label: 'Veća konkurencija nego u ostatku Srbije' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-[24px] md:text-[28px] font-bold text-ink">{s.num}</div>
                <div className="text-[12px] text-ink-3">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Često postavljana pitanja</h2>
          <div className="space-y-5">
            {faqs.map(f => (
              <details key={f.q} className="group bg-panel rounded-[14px] border border-edge">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-[15px] font-medium text-ink">{f.q}<svg className="w-4 h-4 text-ink-3 transition-transform group-open:rotate-180 flex-shrink-0 ml-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg></summary>
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
            <Link to="/marketing-agencija-novi-sad" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Novi Sad</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing u NS</div>
            </Link>
            <Link to="/marketing-agencija-nis" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Nis</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za jug Srbije</div>
            </Link>
            <Link to="/marketing-agencija-kragujevac" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Kragujevac</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za Sumadiju</div>
            </Link>
            <Link to="/marketing-agencija-zrenjanin" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Zrenjanin</div>
              <div className="text-[12px] text-ink-3">Lokalna agencija za Banat</div>
            </Link>
            <Link to="/marketing-agencija-subotica" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Subotica</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za severnu Vojvodinu</div>
            </Link>
            <Link to="/marketing-agencija-pancevo" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Pancevo</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za juzni Banat</div>
            </Link>
            <Link to="/marketing-agencija-cacak" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Cacak</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za Moravicki okrug</div>
            </Link>
            <Link to="/cene-digitalnog-marketinga" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene digitalnog marketinga</div>
              <div className="text-[12px] text-ink-3">Koliko košta marketing mesečno</div>
            </Link>
            <Link to="/consulting" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing konsulting</div>
              <div className="text-[12px] text-ink-3">1:1 plan rasta i prioriteti za BG tržište</div>
            </Link>
            <Link to="/google-reklame-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Google reklame cena</div>
              <div className="text-[12px] text-ink-3">Procena budžeta za lokalnu akviziciju u BG</div>
            </Link>
            <Link to="/instagram-reklame-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Instagram reklame cena</div>
              <div className="text-[12px] text-ink-3">Vizualni kanal za lokalni reach u BG</div>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Spremni za rast u Beogradu?</h2>
          <p className="text-[15px] text-ink-2 mb-6">Javite nam se za besplatnu analizu vašeg biznisa i konkretne preporuke. Bez obaveza.</p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">Zakažite besplatan razgovor<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "ProfessionalService",
          "name": "Platinum Zenith - Marketing Agencija Beograd",
          "url": "https://platinumzenith.com/marketing-agencija-beograd",
          "telephone": "+381668168929",
          "email": "aleksandar@platinumzenith.com",
          "areaServed": { "@type": "City", "name": "Beograd" },
          "serviceType": ["Digitalni marketing", "Izrada sajtova", "SEO optimizacija", "Google Ads", "Društvene mreže"],
          "priceRange": "$$"
        }, {
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        }, {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Početna", "item": "https://platinumzenith.com/" },
            { "@type": "ListItem", "position": 2, "name": "Marketing agencija Beograd", "item": "https://platinumzenith.com/marketing-agencija-beograd" }
          ]
        }]
      })}} />
    </div>
  )
}
