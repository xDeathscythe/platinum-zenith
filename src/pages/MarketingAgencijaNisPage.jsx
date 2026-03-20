import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const services = [
  { title: 'Izrada sajtova', desc: 'Custom dizajn koji konvertuje posetioce u kupce. PageSpeed 95+, mobile-first, SEO od prvog dana.', icon: '🌐', link: '/web-design' },
  { title: 'SEO optimizacija', desc: 'Rangiranje na Google-u za pretrage koje vasi kupci koriste. Lokalni i nacionalni SEO.', icon: '📈', link: '/seo-optimizacija-cena' },
  { title: 'Google Ads', desc: 'Placeni oglasi sa preciznim targetiranjem. Svaki dinar ulozen mora da se vrati kroz prodaju.', icon: '🎯', link: '/google-reklame-cena' },
  { title: 'Drustvene mreze', desc: 'Strategija, sadrzaj i oglasi na Facebook-u i Instagram-u sa fokusom na rezultate.', icon: '📱', link: '/drustvene-mreze' },
  { title: 'CRO optimizacija', desc: 'Pretvaramo posetioce u kupce. Male izmene na sajtu mogu znaciti veliku razliku u prihodu.', icon: '⚡', link: '/cro' },
  { title: 'Konsalting', desc: 'Strucan savet i jasan plan. Ne morate da angazujete agenciju za sve.', icon: '💡', link: '/consulting' },
]

const nisReasons = [
  { title: 'Poznajemo trziste juga Srbije', text: 'Nis i okolina imaju specificnu ekonomsku dinamiku, jaku industrijsku bazu i rastuce usluzne sektore. Marketing koji radi u Beogradu nije copy-paste za jug. Prilagodjavamo strategiju lokalnom kontekstu.' },
  { title: 'Revenue share model', text: 'Za ozbiljne projekte nudimo model gde nasa zarada zavisi od vasih rezultata. Nema rizika za vas jer placate samo kad zaradjujete.' },
  { title: 'Rezultati merljivi brojevima', text: 'Svaki mesec dobijate izvestaj sa konkretnim podacima. Saobracaj, konverzije, prihod od kampanja. Ne prodajemo maglu.' },
  { title: 'Iskustvo sa lokalnim biznisima', text: 'Od restorana i stomatologa do advokata i kozmetickih salona. Svaka industrija ima svoje specificnosti i mi ih poznajemo.' },
  { title: 'Sve na jednom mestu', text: 'Sajt, SEO, oglasi, mreze, CRO. Nema potrebe da koordinisite vise agencija i freelancera.' },
]

const faqs = [
  { q: 'Zasto bih birao agenciju koja nije iz Nisa?', a: 'Zato sto lokacija agencije ne odredjuje kvalitet rada. Digitalni marketing se radi online. Nasi rezultati govore sami za sebe, a fokus na rezultate, ne na blizinu kancelarije, donosi bolji ROI.' },
  { q: 'Da li imate klijente u Nisu?', a: 'Radimo sa firmama iz cele Srbije, ukljucujuci jug. Komunikacija je online, sastanci preko video poziva, a rezultati su merljivi bez obzira na geografsku udaljenost.' },
  { q: 'Koliko kosta digitalni marketing za firmu u Nisu?', a: 'Zavisi od obima. Izrada sajta krece od 300 evra, mesecni SEO od 300 evra, Google Ads od 500 evra (budzet plus upravljanje). Za detalje pogledajte nase stranice o cenama ili nas kontaktirajte.' },
  { q: 'Koliko brzo mogu da ocekujem rezultate?', a: 'Placeni oglasi donose rezultate za par dana. SEO trazi tri do sest meseci. CRO optimizacija daje rezultate cim se implementiraju izmene, obicno za dve do cetiri nedelje.' },
  { q: 'Mogu li da dobijem besplatnu procenu?', a: 'Apsolutno. Javite nam se i analiziramo vas sajt, konkurenciju i trziste. Dajemo konkretne preporuke bez obaveza.' },
  { q: 'Koja je razlika izmedju lokalnog i nacionalnog SEO-a?', a: 'Lokalni SEO cilja pretrage sa geografskom namerom, na primer stomatoloska ordinacija Nis ili advokat Nis. Nacionalni SEO pokriva sire pretrage bez lokacije. Za vecinu lokalnih biznisa u Nisu, lokalni SEO donosi brze i relevantnije rezultate.' },
]

export default function MarketingAgencijaNisPage() {
  usePageMeta()
  return (
    <div className="min-h-screen bg-page">
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(168,85,247,0.1) 0%, transparent 50%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(168,85,247,0.06) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Nis · Srbija</span>
          <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">Marketing agencija za Nis</h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[600px] mx-auto mb-8">
            Platinum Zenith pomaze firmama u Nisu i na jugu Srbije da rastu online. Pravimo sajtove koji prodaju, vodimo kampanje koje donose merljive rezultate i optimizujemo konverzije.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">Besplatna procena<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-ink-2 text-[14px] font-medium h-11 px-6 rounded-full border border-edge hover:bg-tint transition-colors">Pogledajte rezultate</Link>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Sta radimo za firme u Nisu</h2>
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
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Zasto Platinum Zenith?</h2>
          <div className="space-y-8">
            {nisReasons.map((r, i) => (
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
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-5">Nis u brojevima</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { num: '260K+', label: 'Stanovnika' },
              { num: '3.', label: 'Najveci grad u Srbiji' },
              { num: '40K+', label: 'Aktivnih firmi u okrugu' },
              { num: '70%', label: 'Pretrazuje lokalno sa telefona' },
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
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-4 text-center">Marketing kanali za lokalne biznise u Nisu</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed text-center mb-10 max-w-[600px] mx-auto">Vecina firmi na jugu Srbije ne koristi digitalne kanale sistematski. To znaci da je konkurencija u online prostoru manja nego u Beogradu, a cena akvizicije klijenta niza.</p>
          <div className="space-y-6">
            <div className="bg-panel rounded-[16px] border border-edge p-6">
              <h3 className="text-[17px] font-medium text-ink mb-2">Google Ads za Nis i okolinu</h3>
              <p className="text-[14px] text-ink-2 leading-relaxed mb-3">CPC za lokalne pretrage u Nisu je obicno dva do tri puta nizi nego u Beogradu za iste usluge. To znaci vise klikova za isti budzet i brze pokrivanje investicije.</p>
              <Link to="/google-reklame-cena" className="text-[13px] text-indigo-400 hover:text-indigo-300 transition-colors">Pogledajte cene Google reklama →</Link>
            </div>
            <div className="bg-panel rounded-[16px] border border-edge p-6">
              <h3 className="text-[17px] font-medium text-ink mb-2">Lokalni SEO za vidljivost na mapi</h3>
              <p className="text-[14px] text-ink-2 leading-relaxed mb-3">Google Business profil, lokalni sadrzaj i recenzije su temelj za svaki biznis koji zavisi od klijenata iz grada. Vecina niskih firmi nema optimizovan profil, sto otvara prostor za brze rezultate.</p>
              <Link to="/seo-optimizacija-cena" className="text-[13px] text-indigo-400 hover:text-indigo-300 transition-colors">Pogledajte cene SEO optimizacije →</Link>
            </div>
            <div className="bg-panel rounded-[16px] border border-edge p-6">
              <h3 className="text-[17px] font-medium text-ink mb-2">Instagram i Facebook kampanje</h3>
              <p className="text-[14px] text-ink-2 leading-relaxed mb-3">Vizuelne kampanje za restorane, salone, klinike i maloprodaju rade izuzetno dobro na jugu Srbije gde je angazovanje na drustvenim mrezama natprosecno.</p>
              <Link to="/instagram-reklame-cena" className="text-[13px] text-indigo-400 hover:text-indigo-300 transition-colors">Pogledajte cene Instagram reklama →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-4 text-center">Industrije koje pokrivamo u Nisu</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed text-center mb-10 max-w-[600px] mx-auto">Imamo specijalizovane strategije za industrije koje dominiraju u Nisu i na jugu Srbije.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Stomatoloske ordinacije', link: '/marketing-za-stomatologe', desc: 'Google Ads i lokalni SEO za nove pacijente' },
              { title: 'Restorani i kafici', link: '/marketing-za-restorane', desc: 'Google Business, Instagram i kampanje za rezervacije' },
              { title: 'Advokatske kancelarije', link: '/marketing-za-advokate', desc: 'SEO i Google Ads za kvalifikovane upite' },
              { title: 'Frizerski i kozmeticki saloni', link: '/marketing-za-frizerske-salone', desc: 'Instagram, booking funnel i lokalna vidljivost' },
              { title: 'Privatne klinike', link: '/marketing-za-privatne-klinike', desc: 'Google Ads po specijalizaciji i remarketing' },
              { title: 'Teretane i fitnes', link: '/marketing-za-teretane', desc: 'Kampanje za upis i retencija clanova' },
            ].map(ind => (
              <Link key={ind.title} to={ind.link} className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
                <div className="text-[15px] font-medium text-ink mb-1">{ind.title}</div>
                <div className="text-[13px] text-ink-3">{ind.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Cesto postavljana pitanja</h2>
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

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[22px] font-medium text-ink mb-6 text-center">Povezane stranice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/marketing-agencija-beograd" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Beograd</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing u BG</div>
            </Link>
            <Link to="/marketing-agencija-novi-sad" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Novi Sad</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing u NS</div>
            </Link>
            <Link to="/marketing-agencija-kragujevac" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Kragujevac</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za Sumadiju</div>
            </Link>
            <Link to="/marketing-agencija-zrenjanin" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Zrenjanin</div>
              <div className="text-[12px] text-ink-3">Lokalna agencija za Banat</div>
            </Link>
            <Link to="/marketing-agencija-leskovac" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Leskovac</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za Jablanicki okrug</div>
            </Link>
            <Link to="/marketing-agencija-vranje" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Vranje</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za Pcinski okrug</div>
            </Link>
            <Link to="/cene-digitalnog-marketinga" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene digitalnog marketinga</div>
              <div className="text-[12px] text-ink-3">Koliko kosta marketing mesecno</div>
            </Link>
            <Link to="/cene-izrade-sajta" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene izrade sajta</div>
              <div className="text-[12px] text-ink-3">Koliko kosta sajt u Srbiji</div>
            </Link>
            <Link to="/consulting" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing konsulting</div>
              <div className="text-[12px] text-ink-3">1:1 plan rasta za vas biznis</div>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Spremni za rast u Nisu?</h2>
          <p className="text-[15px] text-ink-2 mb-6">Javite nam se za besplatnu analizu vaseg biznisa i konkretne preporuke. Bez obaveza.</p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">Zakazite besplatan razgovor<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "ProfessionalService",
          "name": "Platinum Zenith - Marketing Agencija Nis",
          "url": "https://platinumzenith.com/marketing-agencija-nis",
          "telephone": "+381668168929",
          "email": "aleksandar@platinumzenith.com",
          "areaServed": { "@type": "City", "name": "Nis" },
          "serviceType": ["Digitalni marketing", "Izrada sajtova", "SEO optimizacija", "Google Ads", "Drustvene mreze"],
          "priceRange": "$$"
        }, {
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        }, {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Pocetna", "item": "https://platinumzenith.com/" },
            { "@type": "ListItem", "position": 2, "name": "Marketing agencija Nis", "item": "https://platinumzenith.com/marketing-agencija-nis" }
          ]
        }]
      })}} />
    </div>
  )
}
