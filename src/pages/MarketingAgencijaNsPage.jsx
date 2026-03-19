import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const services = [
  { title: 'Izrada sajtova', desc: 'Sajtovi koji privlače klijente i pretvaraju ih u kupce. PageSpeed 95+, prilagođeni telefonu, optimizovani za pretragu od prvog dana.', icon: '🌐', link: '/web-design' },
  { title: 'SEO optimizacija', desc: 'Pojavljujete se na Google-u kad Novosađani traže vaše usluge. Lokalni SEO, Google Business profil, sadržaj koji rangira.', icon: '📈', link: '/seo-optimizacija-cena' },
  { title: 'Google i Meta Ads', desc: 'Targetirani oglasi za Novi Sad i okolinu. Merimo svaki dinar i optimizujemo dok ne postignemo profitabilnu cenu po upitu.', icon: '🎯', link: '/digitalni-marketing' },
  { title: 'Društvene mreže', desc: 'Sadržaj i kampanje na Instagram-u, Facebook-u i TikToku prilagođeni novosadskoj publici i lokalnim trendovima.', icon: '📱', link: '/drustvene-mreze' },
  { title: 'CRO optimizacija', desc: 'Više upita i prodaja sa istim brojem posetilaca. Analiziramo ponašanje korisnika i menjamo ono što ne konvertuje.', icon: '⚡', link: '/cro' },
  { title: 'Konsalting', desc: 'Sat vremena konkretnog razgovora vredi više od mesec dana nagađanja. Plan, prioriteti, budžet.', icon: '💡', link: '/consulting' },
]

const nsReasons = [
  { title: 'Poznajemo novosadsko tržište', text: 'Novi Sad ima specifičnu dinamiku. Grad raste brzo, IT sektor je jak, ali mnoge lokalne firme još nemaju ozbiljno online prisustvo. To je prilika za vas.' },
  { title: 'Revenue share model', text: 'Za ozbiljne projekte nudimo model gde plaćate procenat od rezultata. Naša zarada zavisi od vašeg uspeha, što znači da smo motivisani da kampanje zaista donose novac.' },
  { title: 'Merljivi rezultati, ne obećanja', text: 'Svaki mesec dobijate izveštaj sa brojevima. Koliko ljudi je došlo na sajt, koliko je poslalo upit, koliko ste zaradili od kampanja. Bez magije, bez misterije.' },
  { title: 'Iskustvo sa različitim industrijama', text: 'Radili smo sa e-commerce brendovima, stomatološkim ordinacijama, advokatima, restoranima i IT firmama. Svaka industrija traži drugačiji pristup i mi to znamo.' },
  { title: 'Kompletna usluga', text: 'Sajt, SEO, oglasi, društvene mreže, CRO. Ne morate da angažujete pet različitih ljudi i onda igrate koordinatora. Sve radimo mi.' },
]

const faqs = [
  { q: 'Da li imate kancelariju u Novom Sadu?', a: 'Naša baza je u Zrenjaninu, ali radimo sa firmama iz celog Vojvodine i Srbije. Digitalni marketing se radi online. Sastanke držimo preko video poziva, a rezultati su isti bilo da smo u istoj zgradi ili u drugom gradu.' },
  { q: 'Koliko košta marketing za firmu u Novom Sadu?', a: 'Izrada sajta kreće od 300€. Mesečni SEO od 200€. Upravljanje Google Ads kampanjama od 200€ plus budžet za oglase. Za kompletan mesečni paket (sajt, mreže, oglasi) računajte na 500-2.000€ zavisno od obima.' },
  { q: 'Koliko brzo se vide rezultati?', a: 'Google Ads donosi prve klikove i upite za par dana. SEO optimizacija zahteva 3-6 meseci da se pozicionirate za konkurentne termine. Društvene mreže traže minimum 3 meseca konzistentnog rada pre nego što vidite uticaj na prodaju.' },
  { q: 'Da li radite sa malim firmama?', a: 'Da. Imamo pakete koji počinju od 300€ mesečno. Bolje je početi sa manjim budžetom i rastiti postepeno nego čekati da imate 5.000€ za marketing. Rano prisustvo na Google-u donosi dugoročnu prednost.' },
  { q: 'Kako izgleda saradnja?', a: 'Počinjemo besplatnim razgovorom gde analiziramo vaš biznis i konkurenciju. Predložimo plan i budžet. Ako se dogovorimo, krećemo sa radom i šaljemo vam izveštaje svake dve nedelje ili mesečno.' },
]

export default function MarketingAgencijaNsPage() {
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
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Novi Sad · Vojvodina</span>
          <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">
            Marketing agencija za Novi Sad
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[600px] mx-auto mb-8">
            Pomažemo firmama u Novom Sadu da privuku više klijenata online. Sajtovi koji konvertuju, kampanje koje donose rezultate, strategija prilagođena vašem budžetu.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
              Besplatna procena
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-ink-2 text-[14px] font-medium h-11 px-6 rounded-full border border-edge hover:bg-tint transition-colors">
              Pogledajte rezultate
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Šta radimo za firme u Novom Sadu</h2>
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

      {/* Why us */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Zašto Platinum Zenith?</h2>
          <div className="space-y-8">
            {nsReasons.map((r, i) => (
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

      {/* Novi Sad stats */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-5">Novi Sad u brojevima</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { num: '400K+', label: 'Stanovnika sa okolinom' },
              { num: '2.', label: 'Grad po kupovnoj moći u Srbiji' },
              { num: '20K+', label: 'Aktivnih firmi' },
              { num: '70%+', label: 'Traži usluge na Google-u' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-[24px] md:text-[28px] font-bold text-ink">{s.num}</div>
                <div className="text-[12px] text-ink-3">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-6 text-center">Marketing u Novom Sadu: šta treba znati</h2>
          <div className="text-[15px] text-ink-2 leading-relaxed space-y-4">
            <p>
              Novi Sad je specifičan grad za marketing. IT sektor je jak, kupovna moć raste, ali velika većina lokalnih firmi se još oslanja na preporuke i usmenu propagandu. To znači da firme koje ulažu u online marketing imaju ogromnu prednost jer konkurencija za većinu lokalnih pretraga još nije jaka.
            </p>
            <p>
              Primer: ako ste stomatolog u Novom Sadu i pojavite se prvi na Google-u za "stomatolog Novi Sad", dobijate 200-500 pretraga mesečno od ljudi koji aktivno traže stomatologa. Za "elektricar Novi Sad" to je 300-800 pretraga. Svaka od tih pretraga je potencijalni klijent koji je spreman da plati.
            </p>
            <p>
              Lokalni SEO u Novom Sadu je trenutno jeftiniji nego u Beogradu jer je konkurencija manja. Ali to se menja kako sve više firmi shvata koliko je online vidljivost bitna. Bolje je početi sad dok je cena pozicioniranja niža.
            </p>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[22px] font-medium text-ink mb-6 text-center">Povezane stranice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            <Link to="/cene-digitalnog-marketinga" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene marketinga</div>
              <div className="text-[12px] text-ink-3">Koliko košta marketing u Srbiji</div>
            </Link>
            <Link to="/marketing-agencija-beograd" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing za Beograd</div>
              <div className="text-[12px] text-ink-3">Geo landing za BG</div>
            </Link>
            <Link to="/marketing-agencija-nis" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing za Nis</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za jug Srbije</div>
            </Link>
            <Link to="/marketing-agencija-kragujevac" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing za Kragujevac</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za Sumadiju</div>
            </Link>
            <Link to="/marketing-agencija-subotica" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing za Suboticu</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za severnu Vojvodinu</div>
            </Link>
            <Link to="/marketing-agencija-pancevo" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing za Pancevo</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za juzni Banat</div>
            </Link>
            <Link to="/marketing-agencija-cacak" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing za Cacak</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za Moravicki okrug</div>
            </Link>
            <Link to="/marketing-agencija-kraljevo" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing za Kraljevo</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za Raski okrug</div>
            </Link>
            <Link to="/marketing-agencija-krusevac" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing za Krusevac</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za Rasinski okrug</div>
            </Link>
            <Link to="/marketing-agencija-leskovac" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing za Leskovac</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za Jablanicki okrug</div>
            </Link>
            <Link to="/marketing-agencija-uzice" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing za Uzice</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za Zlatiborski okrug</div>
            </Link>
            <Link to="/marketing-agencija-valjevo" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing za Valjevo</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za Kolubarski okrug</div>
            </Link>
            <Link to="/marketing-agencija-sabac" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Sabac</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za Macvanski okrug</div>
            </Link>
            <Link to="/marketing-agencija-smederevo" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing agencija Smederevo</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za Podunavski okrug</div>
            </Link>
            <Link to="/marketing-agencija-novi-pazar" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing za Novi Pazar</div>
              <div className="text-[12px] text-ink-3">Digitalni marketing za Raski okrug</div>
            </Link>
            <Link to="/agencija-vs-freelancer" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Agencija vs freelancer</div>
              <div className="text-[12px] text-ink-3">Kako da izaberete</div>
            </Link>
            <Link to="/consulting" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Marketing konsulting</div>
              <div className="text-[12px] text-ink-3">1:1 plan rasta i prioriteti za NS tržište</div>
            </Link>
            <Link to="/google-reklame-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Google reklame cena</div>
              <div className="text-[12px] text-ink-3">Procena budžeta za lokalnu akviziciju u NS</div>
            </Link>
            <Link to="/instagram-reklame-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Instagram reklame cena</div>
              <div className="text-[12px] text-ink-3">Vizualni kanal za lokalni reach u NS</div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* CTA */}
      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Spremni za rast u Novom Sadu?</h2>
          <p className="text-[15px] text-ink-2 mb-6">
            Javite nam se za besplatnu analizu vašeg biznisa. Pogledamo vaš sajt, konkurenciju i kažemo vam šta se isplati raditi. Bez obaveza.
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

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "ProfessionalService",
          "name": "Platinum Zenith - Marketing Agencija Novi Sad",
          "url": "https://platinumzenith.com/marketing-agencija-novi-sad",
          "telephone": "+381668168929",
          "email": "aleksandar@platinumzenith.com",
          "areaServed": { "@type": "City", "name": "Novi Sad" },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Zrenjanin",
            "addressRegion": "Vojvodina",
            "addressCountry": "RS"
          },
          "serviceType": ["Digitalni marketing", "Izrada sajtova", "SEO optimizacija", "Google Ads", "Društvene mreže"],
          "priceRange": "$$"
        }, {
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        }, {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Početna", "item": "https://platinumzenith.com/" },
            { "@type": "ListItem", "position": 2, "name": "Marketing agencija Novi Sad", "item": "https://platinumzenith.com/marketing-agencija-novi-sad" }
          ]
        }]
      })}} />
    </div>
  )
}
