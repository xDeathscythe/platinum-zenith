import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const services = [
  { title: 'Izrada sajtova', desc: 'Profesionalan sajt koji pretvara posetioce u kupce. Brz, mobile-first, optimizovan za Google od prvog dana.', icon: '🌐', link: '/web-design' },
  { title: 'SEO optimizacija', desc: 'Pojavite se na vrhu Google pretrage za kljucne reci koje koriste vasi klijenti u Kraljevu i Raskom okrugu.', icon: '📈', link: '/seo-optimizacija-cena' },
  { title: 'Google Ads', desc: 'Placeni oglasi sa preciznim targetiranjem na Kraljevo i okolinu. Kontrolisan budzet, merljivi rezultati od prvog dana.', icon: '🎯', link: '/google-reklame-cena' },
  { title: 'Drustvene mreze', desc: 'Strategija i oglasi na Facebook-u i Instagram-u koji privlace lokalne kupce i generisu upite za vase usluge.', icon: '📱', link: '/drustvene-mreze' },
  { title: 'CRO optimizacija', desc: 'Povecajte procenat posetilaca koji kupe ili posalju upit. Male izmene na sajtu mogu da naprave veliku razliku u prihodu.', icon: '⚡', link: '/cro' },
  { title: 'Konsalting', desc: 'Strucan savet i jasan plan za digitalni rast. Ponekad vam ne treba cela agencija, vec samo dobar plan i smernice.', icon: '💡', link: '/consulting' },
]

const reasons = [
  { title: 'Poznajemo trziste centralne Srbije', text: 'Kraljevo je administrativni i privredni centar Raskog okruga sa 125.000 stanovnika. Marketing strategija za Kraljevo mora da uzme u obzir lokalnu ekonomiju, turisticki potencijal (blizina Kopaonika) i razlike u kupovnom ponasanju u odnosu na Beograd.' },
  { title: 'Revenue share model', text: 'Za ozbiljne projekte nudimo model gde nasa zarada zavisi od vasih rezultata. Placate samo kad zaradjujete, bez rizika za vas.' },
  { title: 'Rezultati merljivi brojevima', text: 'Svaki mesec dobijate izvestaj sa konkretnim podacima: saobracaj, konverzije, prihod od kampanja. Bez praznih obecanja i nejasnih metrika.' },
  { title: 'Iskustvo sa razlicitim industrijama', text: 'Od turizma i ugostiteljstva do stomatologa i advokata. Svaka industrija ima specificne potrebe i mi ih poznajemo iz direktnog iskustva.' },
  { title: 'Sve pod jednim krovom', text: 'Sajt, SEO, oglasi, drustvene mreze, CRO. Jedna agencija umesto koordinacije vise freelancera i dobavljaca koji ne komuniciraju medjusobno.' },
]

const faqs = [
  { q: 'Zasto bih birao agenciju koja nije iz Kraljeva?', a: 'Zato sto kvalitet digitalnog marketinga ne zavisi od fizicke lokacije agencije. Rad se odvija online, rezultati su merljivi, a komunikacija funkcionise jednako dobro preko video poziva kao i uzivo. Bitno je iskustvo i rezultati, ne adresa.' },
  { q: 'Da li radite sa firmama iz Kraljeva?', a: 'Radimo sa firmama iz cele Srbije, ukljucujuci Raski okrug. Komunikacija je online, sastanci su preko video poziva, a rezultati su merljivi bez obzira na geografsku udaljenost.' },
  { q: 'Koliko kosta digitalni marketing za firmu u Kraljevu?', a: 'Zavisi od obima i potreba. Izrada sajta krece od 300 evra, mesecni SEO od 300 evra, Google Ads od 500 evra sa upravljanjem. Za detalje pogledajte nase stranice o cenama ili nas kontaktirajte za besplatnu procenu.' },
  { q: 'Da li pokrivate okolna mesta poput Vrnjacke Banje i Trstenika?', a: 'Naravno. Lokalni SEO i Google Ads kampanje mogu da ciljaju ceo Raski okrug, ukljucujuci Vrnjacku Banju, Trstenik, Raska i okolna naselja. Za turisticke biznise u Vrnjackoj Banji ovo je narocito vazno.' },
  { q: 'Koliko brzo mogu da ocekujem rezultate?', a: 'Placeni oglasi donose rezultate za par dana. SEO trazi tri do sest meseci. CRO optimizacija daje rezultate cim se implementiraju izmene, obicno za dve do cetiri nedelje.' },
  { q: 'Mogu li da dobijem besplatnu procenu?', a: 'Naravno. Javite nam se i analiziramo vas sajt, konkurenciju i trziste. Dajemo konkretne preporuke bez obaveza.' },
]

export default function MarketingAgencijaKraljevoPage() {
  usePageMeta()
  return (
    <div className="min-h-screen bg-page">
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(168,85,247,0.1) 0%, transparent 50%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(168,85,247,0.06) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Kraljevo · Srbija</span>
          <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">Marketing agencija za Kraljevo</h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[600px] mx-auto mb-8">
            Platinum Zenith pomaze firmama u Kraljevu i Raskom okrugu da rastu online. Pravimo sajtove koji prodaju, vodimo kampanje koje donose merljive rezultate i optimizujemo konverzije za lokalne biznise.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">Besplatna procena<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-ink-2 text-[14px] font-medium h-11 px-6 rounded-full border border-edge hover:bg-tint transition-colors">Pogledajte rezultate</Link>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Sta radimo za firme u Kraljevu</h2>
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

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-5">Kraljevo u brojevima</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { num: '125K+', label: 'Stanovnika' },
              { num: '305K+', label: 'Raski okrug' },
              { num: '15K+', label: 'Aktivnih firmi u okrugu' },
              { num: '68%', label: 'Pretrazuje lokalno sa telefona' },
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
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-4 text-center">Marketing kanali za biznise u Kraljevu</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed text-center mb-10 max-w-[600px] mx-auto">Kraljevo ima rastuce online trziste sa relativno malom konkurencijom u digitalnom prostoru. Firme koje prve krenu sa ozbiljnim marketingom imaju prednost koju je tesko sustici.</p>
          <div className="space-y-6">
            <div className="bg-panel rounded-[16px] border border-edge p-6">
              <h3 className="text-[17px] font-medium text-ink mb-2">Google Ads za Kraljevo i Raski okrug</h3>
              <p className="text-[14px] text-ink-2 leading-relaxed mb-3">Cena po kliku za lokalne pretrage u Kraljevu je niza nego u Beogradu. Kampanje mogu da ciljaju i okolna mesta poput Vrnjacke Banje, Trstenika i Raske. Za turisticke biznise u blizini Kopaonika, Google Ads je najbrzi put do sezonskih gostiju.</p>
              <Link to="/google-reklame-cena" className="text-[13px] text-indigo-400 hover:text-indigo-300 transition-colors">Pogledajte cene Google reklama →</Link>
            </div>
            <div className="bg-panel rounded-[16px] border border-edge p-6">
              <h3 className="text-[17px] font-medium text-ink mb-2">Lokalni SEO za vidljivost na mapi</h3>
              <p className="text-[14px] text-ink-2 leading-relaxed mb-3">Google Business profil, lokalni sadrzaj i recenzije su kljucni za svaki biznis koji zavisi od lokalnih kupaca. Vecina firmi u Kraljevu nema optimizovan profil, sto znaci brze rezultate za one koji prvi krenu.</p>
              <Link to="/seo-optimizacija-cena" className="text-[13px] text-indigo-400 hover:text-indigo-300 transition-colors">Pogledajte cene SEO optimizacije →</Link>
            </div>
            <div className="bg-panel rounded-[16px] border border-edge p-6">
              <h3 className="text-[17px] font-medium text-ink mb-2">Instagram i Facebook kampanje</h3>
              <p className="text-[14px] text-ink-2 leading-relaxed mb-3">Vizuelne kampanje za ugostiteljstvo, salone, klinike i maloprodaju. Kraljevo ima aktivnu publiku na drustvenim mrezama, a blizina Kopaonika i Vrnjacke Banje otvara mogucnosti za sezonske kampanje u turizmu.</p>
              <Link to="/instagram-reklame-cena" className="text-[13px] text-indigo-400 hover:text-indigo-300 transition-colors">Pogledajte cene Instagram reklama →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-4 text-center">Industrije koje pokrivamo u Kraljevu</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed text-center mb-10 max-w-[600px] mx-auto">Specijalizovane strategije za industrije koje dominiraju u Raskom okrugu i okolini Kopaonika.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Stomatoloske ordinacije', link: '/marketing-za-stomatologe', desc: 'Google Ads i lokalni SEO za nove pacijente' },
              { title: 'Restorani i kafici', link: '/marketing-za-restorane', desc: 'Google Business, Instagram i kampanje za rezervacije' },
              { title: 'Advokatske kancelarije', link: '/marketing-za-advokate', desc: 'SEO i Google Ads za kvalifikovane upite' },
              { title: 'Frizerski i kozmeticki saloni', link: '/marketing-za-frizerske-salone', desc: 'Instagram, booking funnel i lokalna vidljivost' },
              { title: 'Privatne klinike', link: '/marketing-za-privatne-klinike', desc: 'Kampanje za akviziciju pacijenata' },
              { title: 'Teretane i fitnes centri', link: '/marketing-za-teretane', desc: 'Instagram kampanje za nove clanove i upise' },
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
            <Link to="/marketing-agencija-kragujevac" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Kragujevac</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za Sumadiju</div>
            </Link>
            <Link to="/marketing-agencija-cacak" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Cacak</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za Moravicki okrug</div>
            </Link>
            <Link to="/marketing-agencija-nis" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Nis</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za jug Srbije</div>
            </Link>
            <Link to="/marketing-agencija-novi-sad" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Novi Sad</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing u NS</div>
            </Link>
            <Link to="/cene-digitalnog-marketinga" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene digitalnog marketinga</div>
              <div className="text-[12px] text-ink-3">Koliko kosta marketing mesecno</div>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Spremni za rast u Kraljevu?</h2>
          <p className="text-[15px] text-ink-2 mb-6">Javite nam se za besplatnu analizu vaseg biznisa i konkretne preporuke. Bez obaveza.</p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">Zakazite besplatan razgovor<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "ProfessionalService",
          "name": "Platinum Zenith - Marketing Agencija Kraljevo",
          "url": "https://platinumzenith.com/marketing-agencija-kraljevo",
          "telephone": "+381668168929",
          "email": "aleksandar@platinumzenith.com",
          "areaServed": { "@type": "City", "name": "Kraljevo" },
          "serviceType": ["Digitalni marketing", "Izrada sajtova", "SEO optimizacija", "Google Ads", "Drustvene mreze"],
          "priceRange": "$$"
        }, {
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        }, {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Pocetna", "item": "https://platinumzenith.com/" },
            { "@type": "ListItem", "position": 2, "name": "Marketing agencija Kraljevo", "item": "https://platinumzenith.com/marketing-agencija-kraljevo" }
          ]
        }]
      })}} />
    </div>
  )
}
