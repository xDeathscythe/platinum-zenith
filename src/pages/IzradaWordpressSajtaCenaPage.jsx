import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import RelatedBlogPosts from '../components/RelatedBlogPosts'
import { blogIndexPosts } from './blog/blogIndexData'

const tiers = [
  {
    name: 'Start WordPress sajt',
    price: '400 - 900€',
    desc: 'Jednostavan WordPress sajt za firme koje žele jasan online nastup i dobru osnovu za SEO.',
    includes: ['Do 6 stranica', 'Premium tema + prilagođavanje', 'Kontakt forma', 'Osnovni on-page SEO', 'Brzina i sigurnost osnovno podešavanje'],
    forWhom: 'Preduzetnici, lokalne usluge, mali biznisi',
  },
  {
    name: 'Poslovni WordPress',
    price: '900 - 2.200€',
    desc: 'WordPress sa custom sekcijama, boljom strukturom sadržaja i fokusom na lead generation.',
    includes: ['Do 15 stranica', 'Custom sekcije i layout', 'Blog + kategorije', 'Napredni SEO setup', 'GA4 + event tracking'],
    forWhom: 'Srednje firme i agencije',
  },
  {
    name: 'WordPress + WooCommerce',
    price: '1.600 - 4.500€',
    desc: 'Online prodavnica na WordPress-u sa WooCommerce-om, optimizovana za brzinu i prodaju.',
    includes: ['WooCommerce setup', 'Katalog proizvoda', 'Checkout i plaćanje', 'Automatski emailovi', 'SEO za kategorije i proizvode'],
    forWhom: 'E-commerce i brendovi sa fizičkim proizvodima',
  },
  {
    name: 'Custom WordPress sistem',
    price: '3.500 - 9.000+€',
    desc: 'Napredna WordPress rešenja sa integracijama, posebnim workflow-ima i zahtevnijim funkcionalnostima.',
    includes: ['Custom plugin logika', 'API integracije', 'Više user uloga', 'Napredna keš strategija', 'Tehnička podrška po dogovoru'],
    forWhom: 'Veći sistemi i ozbiljni projekti',
  },
]

const pricingModels = [
  {
    name: 'Fiksna projektna cena',
    range: '400 - 4.500 EUR',
    description: 'Najcesci model kada je scope jasan: znas ukupnu cenu, rok i tacno šta ulazi u isporuku.',
  },
  {
    name: 'Milestone naplata (40/40/20)',
    range: '900 - 9.000 EUR',
    description: 'Plaćanje kroz faze (start, staging, launch) daje bolju kontrolu rizika za obe strane.',
  },
  {
    name: 'Time & material',
    range: '25 - 60 EUR/sat',
    description: 'Model za kompleksnije projekte sa promenljivim scope-om i cestim iteracijama tokom razvoja.',
  },
  {
    name: 'Launch + mesecni retainer',
    range: '350 - 1.200 EUR/mes',
    description: 'Kombinacija inicijalne izrade i kontinuiranog maintenance/CRO rada kada sajt treba stalno da raste.',
  },
]

const deliveryTimelines = [
  {
    project: 'Start WordPress sajt',
    timeline: '1 - 2 nedelje',
    note: 'Do 6 stranica, bez kompleksnih integracija.',
  },
  {
    project: 'Poslovni WordPress',
    timeline: '2 - 5 nedelja',
    note: 'Više sekcija, blog, tracking i detaljniji sadržaj.',
  },
  {
    project: 'WordPress + WooCommerce',
    timeline: '4 - 8 nedelja',
    note: 'Katalog, checkout, plaćanja i QA kroz realne kupovine.',
  },
  {
    project: 'Custom WordPress sistem',
    timeline: '6 - 12 nedelja',
    note: 'API integracije, posebni workflow-i i zahtevniji deployment plan.',
  },
]

const businessTypeBenchmarks = [
  {
    segment: 'Lokalne usluge (ordinacije, saloni, servisi)',
    launchRange: '700 - 1.800€',
    monthlyRange: '180 - 600€ / mes',
    focus: 'Brz sajt, lokalni SEO i jasna forma za upite.',
  },
  {
    segment: 'B2B lead generation',
    launchRange: '1.200 - 3.200€',
    monthlyRange: '250 - 900€ / mes',
    focus: 'Case studies, CRM forme i precizan tracking leadova.',
  },
  {
    segment: 'WooCommerce retail i niche shopovi',
    launchRange: '1.800 - 5.000€',
    monthlyRange: '350 - 1.400€ / mes',
    focus: 'Katalog, checkout optimizacija i performance pod opterecenjem.',
  },
  {
    segment: 'Multi-location i franšizni sistemi',
    launchRange: '2.500 - 7.000€',
    monthlyRange: '500 - 1.800€ / mes',
    focus: 'Više lokacija, napredne forme i centralizovan sadržaj.',
  },
]

const factors = [
  {
    title: 'Template ili custom dizajn',
    text: 'Template ubrzava izradu i spušta cenu. Custom dizajn traži više vremena ali daje jači brend utisak i bolju kontrolu nad konverzijom.',
  },
  {
    title: 'Broj i složenost stranica',
    text: 'Pet kratkih stranica i pet detaljnih prodajnih stranica nisu isti posao. Svaka sekcija utiče na procenu vremena i cene.',
  },
  {
    title: 'Plugin ekosistem',
    text: 'WordPress je moćan jer ima plugin-ove, ali previše plugin-ova pravi spor i nestabilan sajt. Dobra arhitektura znači manje konflikata i niži maintenance.',
  },
  {
    title: 'SEO i struktura sadržaja',
    text: 'Ako želite organski saobraćaj, bitno je da od starta rešimo URL strukturu, interne linkove, tehnički SEO i brzinu učitavanja.',
  },
  {
    title: 'Brzina i hosting',
    text: 'WordPress može biti brz, ali samo uz dobar hosting, keš i optimizaciju slika. Loš setup često napravi spor sajt i skupe revizije kasnije.',
  },
  {
    title: 'Sigurnost i backup politika',
    text: 'Bez jasnog backup plana i sigurnosnog sloja rizikujete prekid rada ili gubitak podataka. To mora biti deo početnog dogovora.',
  },
]

const recurringCosts = [
  {
    item: 'Domen + hosting',
    monthly: '8 - 35€',
    yearly: '100 - 420€',
    note: 'Deljeni hosting je jeftiniji, ali ozbiljniji sajtovi najčešće traže managed VPS ili cloud plan.',
  },
  {
    item: 'Premium plugin licence',
    monthly: '5 - 40€',
    yearly: '60 - 480€',
    note: 'SEO, security i performance alati često imaju godišnje licence koje treba unapred planirati.',
  },
  {
    item: 'Maintenance (update + backup + monitoring)',
    monthly: '50 - 200€',
    yearly: '600 - 2.400€',
    note: 'Redovan maintenance je ključan da sajt ostane bezbedan, brz i kompatibilan sa novim verzijama plugin-ova.',
  },
  {
    item: 'Content i CRO iteracije',
    monthly: '120 - 500€',
    yearly: '1.440 - 6.000€',
    note: 'Posle launch-a najviše vrednosti dolazi iz iteracija headline-a, CTA elemenata i landing sekcija.',
  },
]

const maintenanceTiers = [
  {
    name: 'Basic Care',
    range: '70 - 120€ / mes',
    description: 'Za manje poslovne sajtove kojima su prioritet redovni update-i, backup i uptime monitoring.',
  },
  {
    name: 'Growth Care',
    range: '150 - 350€ / mes',
    description: 'Za lead-gen sajtove gde uz maintenance ulaze tehnički SEO check-ovi i manje CRO iteracije.',
  },
  {
    name: 'E-commerce Care',
    range: '250 - 650€ / mes',
    description: 'Za WooCommerce projekte sa kontrolom checkout toka, performansi i hitnim intervencijama.',
  },
  {
    name: 'SLA + Dev sprint',
    range: '500 - 1.200€ / mes',
    description: 'Za biznise kojima je sajt direktan prihod i potreban je prioritetni razvojni slot.',
  },
]

const handoverDeliverables = [
  'Admin pristupi i vlasnistvo nad svim nalozima',
  'Backup + restore procedura koju tim može da prati',
  'Lista plugin licenci i datuma obnove',
  'GA4/GTM mapa dogadjaja i konverzija',
  'Kratko editor uputstvo za izmene sadržaja',
  '90-dnevni backlog prioriteta posle launch-a',
]

const quoteSteps = [
  {
    title: 'Discovery i scope dokument',
    text: 'Definišemo cilj sajta, tip stranica, funkcionalnosti i sadržaj koji postoji ili treba tek da se napravi.',
  },
  {
    title: 'Jednokratni trošak izrade',
    text: 'Ponuda sadrži dizajn + development + QA + launch, sa jasnim rasponom i bez skrivenih stavki.',
  },
  {
    title: 'Mesečni operativni trošak',
    text: 'Posebno se prikazuje hosting, licence, maintenance i eventualni growth backlog (SEO/CRO iteracije).',
  },
  {
    title: 'Roadmap za 90 dana',
    text: 'Uz sajt dobijate i prioritetni plan koji definiše šta prvo donosi brži rast upita i bolji ROI.',
  },
]

const quoteRedFlags = [
  {
    title: 'Ponuda je samo brojka bez razbijenog scope-a',
    text: 'Ako ne vidiš šta ulazi u cenu po stavkama, vrlo verovatno ćeš kasnije doplaćivati “sitnice” koje uopšte nisu sitnice. Dobra WordPress ponuda mora jasno da odvoji dizajn, development, QA, launch i post-launch obaveze.',
    route: '/consulting',
    routeLabel: 'Kako da proveriš da li je ponuda zdravo složena',
  },
  {
    title: 'Niko ne pominje staging, backup i ownership pristupa',
    text: 'To je jedna od najskupljih rupa. Kada projekat krene po zlu, tek tada svi shvate koliko vredi staging, backup i jasan vlasnik naloga. Ako to nije u ponudi, rizik nije mali nego ogroman.',
    route: '/blog/odrzavanje-wordpress-sajta-cena-srbija-2026',
    routeLabel: 'Šta održavanje stvarno mora da pokrije',
  },
  {
    title: 'Cena deluje nisko jer su SEO, tracking i sadržaj ostavljeni za posle',
    text: 'Mnogo “jeftinih” sajtova ispadne skupo tek posle launch-a, kada krene doplata za SEO strukturu, forme, event tracking i dorade koje su morale da budu planirane od početka.',
    route: '/seo-optimizacija-cena',
    routeLabel: 'Pogledaj šta nastaje kada SEO ostane van početnog plana',
  },
  {
    title: 'Nema plana šta sajt radi kada krene saobraćaj',
    text: 'Sajt bez post-launch plana često ostane lep PDF na internetu. Ako u ponudi ne postoji bar osnovna priča o akviziciji, konverziji i sledećim iteracijama, cena nije realna nego nepotpuna.',
    route: '/google-reklame-cena',
    routeLabel: 'Kako se sajt uklapa sa budžetom za akviziciju',
  },
]

const mistakes = [
  {
    title: 'Kupovina najjeftinije ponude',
    text: 'Jeftin WordPress sajt često izgleda dobro na prvi pogled, ali kasnije traži puno popravki. Na kraju platite više nego da je urađen kvalitetno od početka.',
  },
  {
    title: 'Previše plugin-ova bez plana',
    text: 'Svaki plugin dodaje težinu i potencijalne konflikte. Bolje je imati manje, proverenih rešenja nego dvadeset nasumičnih dodataka.',
  },
  {
    title: 'Nema staging okruženja',
    text: 'Izmene direktno na live sajtu često izazovu kvarove. Staging štiti prod i skraćuje vreme oporavka kada nešto pođe po zlu.',
  },
  {
    title: 'Ignorisanje mobilnog UX-a',
    text: 'Većina korisnika dolazi sa telefona. Ako mobilni UX nije čist, gubite upite čak i kada imate dobar saobraćaj.',
  },
  {
    title: 'Nedefinisan maintenance',
    text: 'WordPress traži redovan update i proveru kompatibilnosti. Ako to nije dogovoreno unapred, posle nekoliko meseci nastaje tehnički dug.',
  },
]

const faqs = [
  {
    q: 'Koliko traje izrada WordPress sajta?',
    a: 'Start sajt obično 1-2 nedelje, poslovni 2-5 nedelja, a WooCommerce projekti 4-8 nedelja u zavisnosti od obima.',
  },
  {
    q: 'Da li WordPress može da bude brz?',
    a: 'Da. Uz dobar hosting, kvalitetan theme setup, optimizovane slike i keš strategiju WordPress može imati vrlo dobar PageSpeed.',
  },
  {
    q: 'Da li mogu sam da menjam sadržaj?',
    a: 'Da, to je jedna od glavnih prednosti WordPress-a. Nakon isporuke dobijate kratko uputstvo za osnovne izmene.',
  },
  {
    q: 'Koliko košta održavanje WordPress sajta?',
    a: 'Zavisi od obima, ali osnovno održavanje je najčešće 50-200€ mesečno. U to ulaze update-i, backup i osnovni sigurnosni monitoring.',
  },
  {
    q: 'WordPress ili custom development?',
    a: 'Ako želite bržu isporuku i fleksibilan CMS, WordPress je često bolji izbor. Za specifične sisteme sa posebnom logikom nekad je bolji custom pristup.',
  },
  {
    q: 'Da li su domen, hosting i licence uključeni u cenu izrade?',
    a: 'Najčešće se vode kao posebne stavke. Zdrava ponuda ih jasno razdvaja na jednokratni trošak izrade i mesečni operativni trošak.',
  },
  {
    q: 'Koji su najčešći skriveni troškovi WordPress projekta?',
    a: 'Najčešće su to premium licence, hitne intervencije bez maintenance plana i kasne UX/SEO dorade. Zato je važno da roadmap i održavanje budu deo dogovora od starta.',
  },
]

const relatedPosts = [
  'izrada-wordpress-sajta-cena-po-tipu-biznisa-srbija-2026',
  'cena-održavanja-wordpress-sajta-srbija-2026',
  'izrada-landing-stranice-cena-rokovi-šta-ulazi-u-cenu',
]
  .map((slug) => blogIndexPosts.find((post) => post.slug === slug))
  .filter(Boolean)

export default function IzradaWordpressSajtaCenaPage() {
  usePageMeta()

  return (
    <div className="min-h-screen bg-page">
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(16,185,129,0.1) 0%, transparent 50%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(59,130,246,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(16,185,129,0.06) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 max-w-[820px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">WordPress vodič kroz cene</span>
          <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">
            Koliko košta izrada WordPress sajta u Srbiji 2026?
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[640px] mx-auto">
            Realne cene po tipovima projekta, šta ulazi u cenu i gde firme najčešće izgube budžet bez potrebe.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 id="project-tiers" className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Paketi po fazama i potrebama</h2>
          <p className="text-[14px] text-ink-3 leading-relaxed text-center mb-8 max-w-[760px] mx-auto">
            Ako planiraš i budžet za akviziciju odmah posle launch-a, pogledaj i{' '}
            <Link to="/google-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
              Google reklame cenu
            </Link>{' '}
            i{' '}
            <Link to="/instagram-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
              Instagram reklame cenu
            </Link>,
            jer realna cena sajta ima smisla tek kada znaš kako ćeš dovoditi saobraćaj na njega.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {tiers.map(t => (
              <div key={t.name} className="bg-panel rounded-[20px] border border-edge p-6 md:p-8 flex flex-col min-h-[340px]">
                <div className="text-[12px] text-ink-4 uppercase tracking-widest mb-2">{t.forWhom}</div>
                <h3 className="text-[22px] font-medium text-ink mb-1">{t.name}</h3>
                <div className="text-[28px] md:text-[32px] font-bold text-ink mb-4">{t.price}</div>
                <p className="text-[14px] text-ink-2 leading-relaxed mb-5">{t.desc}</p>
                <ul className="space-y-2 mt-auto">
                  {t.includes.map(item => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-ink-2">
                      <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[980px] mx-auto">
          <h2 id="pricing-models" className="text-[24px] md:text-[32px] font-medium text-ink mb-6 text-center">Modeli naplate WordPress projekta</h2>
          <p className="text-[14px] text-ink-3 leading-relaxed text-center mb-8 max-w-[760px] mx-auto">
            Dve ponude sa istom "finalnom cenom" mogu imati potpuno drugaciji rizik i obim. Zato je vazno da pre ugovaranja jasno znas i model naplate, ne samo brojku na ponudi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pricingModels.map((model) => (
              <div key={model.name} className="bg-panel rounded-[16px] border border-edge p-5 md:p-6">
                <div className="text-[12px] uppercase tracking-wider text-ink-4 mb-2">{model.range}</div>
                <h3 className="text-[18px] font-medium text-ink mb-2">{model.name}</h3>
                <p className="text-[14px] text-ink-2 leading-relaxed">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[980px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 id="delivery-timelines" className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Tipicni rokovi izrade po obimu projekta</h2>
          <p className="text-[14px] text-ink-3 leading-relaxed mb-6 max-w-[820px]">
            Najveci problem kod WordPress ponuda je "rok po osecaju". Ovi rasponi sluze kao realan benchmark da lakse prepoznas da li je plan isporuke odrziv.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliveryTimelines.map((item) => (
              <div key={item.project} className="rounded-[14px] border border-edge bg-bg p-4">
                <div className="text-[12px] uppercase tracking-wider text-ink-4 mb-2">{item.timeline}</div>
                <h3 className="text-[16px] font-medium text-ink mb-1">{item.project}</h3>
                <p className="text-[13px] text-ink-2 leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[980px] mx-auto">
          <h2 id="business-type-benchmarks" className="text-[24px] md:text-[32px] font-medium text-ink mb-6 text-center">Raspon cene po tipu biznisa</h2>
          <p className="text-[14px] text-ink-3 leading-relaxed text-center mb-8 max-w-[780px] mx-auto">
            Ovi benchmark rasponi pomažu da proceniš da li je ponuda realna za tvoj model prodaje. Ako radiš lokalni servisni biznis,
            uporedi i sa{' '}
            <Link to="/marketing-za-stomatologe" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
              lokalnim lead-gen pristupom
            </Link>{' '}
            ili sa{' '}
            <Link to="/cene-digitalnog-marketinga" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
              kompletnim budžetom digitalnog marketinga
            </Link>{' '}
            da ne planiraš sajt izolovano od akvizicije.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {businessTypeBenchmarks.map((benchmark) => (
              <div key={benchmark.segment} className="bg-panel rounded-[16px] border border-edge p-5 md:p-6">
                <h3 className="text-[17px] font-medium text-ink mb-3">{benchmark.segment}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div className="rounded-[10px] border border-edge/70 bg-bg px-3 py-2">
                    <div className="text-[11px] uppercase tracking-wider text-ink-4 mb-1">Launch</div>
                    <div className="text-[14px] font-medium text-ink">{benchmark.launchRange}</div>
                  </div>
                  <div className="rounded-[10px] border border-edge/70 bg-bg px-3 py-2">
                    <div className="text-[11px] uppercase tracking-wider text-ink-4 mb-1">Operativno</div>
                    <div className="text-[14px] font-medium text-ink">{benchmark.monthlyRange}</div>
                  </div>
                </div>
                <p className="text-[13px] text-ink-2 leading-relaxed">{benchmark.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 id="cost-drivers" className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Od cega zavisi cena WordPress sajta?</h2>
          <div className="space-y-8">
            {factors.map(f => (
              <div key={f.title}>
                <h3 className="text-[17px] font-medium text-ink mb-2">{f.title}</h3>
                <p className="text-[15px] text-ink-2 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
          <p className="text-[14px] text-ink-3 leading-relaxed text-center mt-10 max-w-[760px] mx-auto">
            Ako cena deluje korektno, a i dalje nisi siguran da li će sajt dovoljno dobro prodavati, sledeći logičan korak su{' '}
            <Link to="/web-design" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
              web design i UX
            </Link>{' '}
            i{' '}
            <Link to="/cro" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
              CRO optimizacija
            </Link>,
            jer se tu najčešće odlučuje da li će isti budžet doneti više upita ili samo lepši layout.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[980px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 id="recurring-costs" className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Koliko kosta WordPress sajt mesecno nakon izrade?</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed mb-6">
            Većina firmi planira samo početni trošak izrade, a preskoči operativni deo koji direktno utiče na stabilnost i rast sajta.
            Zato pre ugovaranja gledajte i ukupni godišnji trošak vlasništva (TCO), ne samo cenu launch-a.
          </p>
          <p className="text-[14px] text-ink-3 leading-relaxed mb-6 max-w-[820px]">
            Kada se TCO spoji sa planom akvizicije i sadržaja, mnogo je lakše proceniti pravi ROI. Zato ima smisla uporediti ga i sa{' '}
            <Link to="/cene-digitalnog-marketinga" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
              cenama digitalnog marketinga
            </Link>{' '}
            i sa{' '}
            <Link to="/consulting" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
              konsultantskim planom prioriteta
            </Link>{' '}
            za prvih 90 dana posle launch-a.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="border-b border-edge">
                  <th className="py-3 pr-4 text-[12px] uppercase tracking-wider text-ink-4">Stavka</th>
                  <th className="py-3 pr-4 text-[12px] uppercase tracking-wider text-ink-4">Mesečno</th>
                  <th className="py-3 pr-4 text-[12px] uppercase tracking-wider text-ink-4">Godišnje</th>
                  <th className="py-3 text-[12px] uppercase tracking-wider text-ink-4">Napomena</th>
                </tr>
              </thead>
              <tbody>
                {recurringCosts.map((row) => (
                  <tr key={row.item} className="border-b border-edge/70 last:border-0 align-top">
                    <td className="py-4 pr-4 text-[14px] font-medium text-ink">{row.item}</td>
                    <td className="py-4 pr-4 text-[14px] text-ink-2">{row.monthly}</td>
                    <td className="py-4 pr-4 text-[14px] text-ink-2">{row.yearly}</td>
                    <td className="py-4 text-[13px] text-ink-3 leading-relaxed">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[980px] mx-auto">
          <h2 id="maintenance-tiers" className="text-[24px] md:text-[32px] font-medium text-ink mb-6 text-center">Paketi održavanja posle launch-a</h2>
          <p className="text-[14px] text-ink-3 leading-relaxed text-center mb-8 max-w-[760px] mx-auto">
            Kada sajt pocne da donosi upite ili prodaju, maintenance više nije "tehnički trošak" nego osiguranje prihoda. Ovi rasponi pomazu da izaberes nivo podrške prema riziku koji nosi tvoj biznis model.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {maintenanceTiers.map((tier) => (
              <div key={tier.name} className="bg-panel rounded-[16px] border border-edge p-5 md:p-6">
                <div className="text-[12px] uppercase tracking-wider text-ink-4 mb-2">{tier.range}</div>
                <h3 className="text-[18px] font-medium text-ink mb-2">{tier.name}</h3>
                <p className="text-[14px] text-ink-2 leading-relaxed">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 id="howto-transparent-offer" className="text-[22px] md:text-[30px] font-medium text-ink mb-8 text-center">Kako izgleda transparentna WordPress ponuda</h2>
          <span id="tip-sajta" className="block h-0 overflow-hidden" aria-hidden="true" />
          <span id="scope-funkcionalnosti" className="block h-0 overflow-hidden" aria-hidden="true" />
          <span id="tco-plan" className="block h-0 overflow-hidden" aria-hidden="true" />
          <span id="post-launch-plan" className="block h-0 overflow-hidden" aria-hidden="true" />
          <div className="space-y-6">
            {quoteSteps.map((step, index) => (
              <div key={step.title} className="bg-panel rounded-[16px] border border-edge p-5 md:p-6">
                <h3 className="text-[16px] md:text-[17px] font-medium text-ink mb-2">
                  <span className="text-ink-4 mr-2">{index + 1}.</span>
                  {step.title}
                </h3>
                <p className="text-[14px] text-ink-2 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[980px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-4 text-center">Kako da prepoznaš nerealno jeftinu WordPress ponudu</h2>
          <p className="text-[15px] text-ink-3 text-center mb-8 max-w-[760px] mx-auto">
            Niska cifra sama po sebi nije problem. Problem je kada je ponuda niska zato što su važne stvari prećutane, izbačene ili gurnute za kasnije. Tada tek posle launch-a kreće pravo plaćanje.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quoteRedFlags.map((item) => (
              <div key={item.title} className="rounded-[14px] border border-edge bg-bg p-5 md:p-6">
                <h3 className="text-[16px] font-medium text-ink mb-3">{item.title}</h3>
                <p className="text-[14px] text-ink-2 leading-relaxed mb-4">{item.text}</p>
                <Link to={item.route} className="text-[13px] text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
                  {item.routeLabel}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-[14px] text-ink-3 leading-relaxed mt-8 text-center max-w-[760px] mx-auto">
            Ako već imaš ponudu na stolu i nisi siguran da li je realna ili će te kasnije udariti kroz dorade, licence i maintenance, pošalji je kroz{' '}
            <Link to="/kontakt" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
              kontakt formu
            </Link>{' '}
            i reći ćemo ti šta je stvarno uključeno, a šta verovatno tek dolazi na naplatu.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 id="handover-deliverables" className="text-[22px] md:text-[28px] font-medium text-ink mb-5">Šta mora da bude deo handover-a</h2>
          <p className="text-[14px] text-ink-3 leading-relaxed mb-5">
            Ako ove stavke nisu eksplicitno predate, maintenance obicno postaje skuplji vec u prvih 60 dana. Traži ih kao deo finalne isporuke.
          </p>
          <ul className="space-y-3">
            {handoverDeliverables.map((item, index) => (
              <li key={item} className="rounded-[12px] border border-edge/70 bg-bg px-4 py-3 text-[14px] text-ink-2 leading-relaxed flex items-start gap-3">
                <span className="text-ink-4 text-[12px] mt-[2px]">{index + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 id="common-mistakes" className="text-[22px] md:text-[26px] font-medium text-ink mb-5">Najčešće greške pri izboru izvođača</h2>
          <div className="space-y-6">
            {mistakes.map((m, i) => (
              <div key={m.title}>
                <h3 className="text-[16px] font-medium text-ink mb-2"><span className="text-ink-4 mr-2">{i + 1}.</span>{m.title}</h3>
                <p className="text-[14px] text-ink-2 leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 id="faq" className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Česta pitanja</h2>
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

      <section className="px-4 md:px-8 pb-10 md:pb-14">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4 text-center">Šta ide uz izradu WordPress sajta</h2>
          <p className="text-[15px] text-ink-3 text-center mb-8 max-w-[700px] mx-auto">
            Cena izrade sajta ima smisla tek kada je povežemo sa akvizicijom, konverzijom i održivim rastom. Ove usluge najčešće donose najveći ROI posle lansiranja.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/web-design" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Web design i UX</div>
              <div className="text-[12px] text-ink-3">Struktura stranice koja vodi korisnika ka upitu</div>
            </Link>
            <Link to="/digitalni-marketing" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Digitalni marketing</div>
              <div className="text-[12px] text-ink-3">Kvalitetan saobraćaj da novi sajt ne ostane „prazan“</div>
            </Link>
            <Link to="/cro" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">CRO optimizacija</div>
              <div className="text-[12px] text-ink-3">Iteracije koje povećavaju procenat konverzije</div>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[980px] mx-auto">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-4 text-center">Povezane stranice i naredni koraci</h2>
          <p className="text-[14px] md:text-[15px] text-ink-3 text-center max-w-[760px] mx-auto mb-8 leading-relaxed">
            Sama izrada sajta je tek početak. Ako želite da WordPress projekat stvarno donosi upite, prodaju i stabilan rast,
            obično se odmah otvaraju i pitanja SEO-a, održavanja, landing stranica i budžeta za akviziciju.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <Link to="/seo-optimizacija-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">SEO optimizacija cena</div>
              <div className="text-[12px] text-ink-3">Šta posle izrade sajta donosi organski saobraćaj</div>
            </Link>
            <Link to="/google-reklame-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Google reklame cena</div>
              <div className="text-[12px] text-ink-3">Kako planirati budžet za upite odmah posle lansiranja</div>
            </Link>
            <Link to="/instagram-reklame-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Instagram reklame cena</div>
              <div className="text-[12px] text-ink-3">Ako vam je vizuelni kanal važan za prodaju ili leadove</div>
            </Link>
            <Link to="/cene-digitalnog-marketinga" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene digitalnog marketinga</div>
              <div className="text-[12px] text-ink-3">Šira slika kada sajt povezujete sa rastom</div>
            </Link>
            <Link to="/blog/kako-napraviti-landing-stranicu-koja-konvertuje" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Landing stranica koja konvertuje</div>
              <div className="text-[12px] text-ink-3">Kad vam treba jedna prodajna strana, ne ceo sajt</div>
            </Link>
            <Link to="/cene-izrade-sajta" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene izrade sajta</div>
              <div className="text-[12px] text-ink-3">Širi pregled po tipovima i obimu projekta</div>
            </Link>
            <Link to="/blog/odrzavanje-wordpress-sajta-cena-srbija-2026" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Održavanje WordPress sajta</div>
              <div className="text-[12px] text-ink-3">Koliko realno koštaju update-i, backup i sigurnost</div>
            </Link>
            <Link to="/blog/woocommerce-sajt-cena-srbija-2026" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">WooCommerce sajt cena</div>
              <div className="text-[12px] text-ink-3">Ako vam treba web shop, ne običan prezentacioni sajt</div>
            </Link>
            <Link to="/blog/izrada-landing-stranice-cena-rokovi-sta-ulazi-u-cenu" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cena landing stranice</div>
              <div className="text-[12px] text-ink-3">Kada vam treba stranica za kampanju, ne ceo sajt</div>
            </Link>
          </div>
        </div>
      </section>

      <RelatedBlogPosts
        posts={relatedPosts}
        heading="WordPress vodiči koji pomažu da sajt bude isplativiji i lakši za održavanje"
      />

      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[620px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Želiš tačnu procenu za WordPress projekat?</h2>
          <p className="text-[15px] text-ink-2 mb-6">
            Pošalji nam šta ti treba i dobićeš jasan raspon cene, rok i predlog strukture sajta bez obaveze.
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


    </div>
  )
}
