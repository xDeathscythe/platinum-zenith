import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import RelatedBlogPosts from '../components/RelatedBlogPosts'
import { blogIndexPosts } from './blog/blogIndexData'

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

const managementPricing = [
  {
    model: 'Freelance / mikro tim',
    fee: '150 - 300€/mes',
    bestFor: 'Mali lokalni biznisi sa manjim brojem kampanja i jednostavnom ponudom.',
    caution: 'Često ne uključuje dubinsku optimizaciju landinga, CRO i naprednu analitiku.',
  },
  {
    model: 'Specijalizovana agencija',
    fee: '250 - 700€/mes',
    bestFor: 'Firme koje žele redovnu optimizaciju, testiranje oglasa i jasne KPI izveštaje.',
    caution: 'Obavezno proveriti šta ulazi u fee (tracking setup, search terms, creative testovi).',
  },
  {
    model: 'Enterprise upravljanje',
    fee: '700€+ / mes ili % budžeta',
    bestFor: 'Veći budžeti, više tržišta i timovi kojima treba profit-orijentisano skaliranje.',
    caution: 'Ako nema plana eksperimenata i ownership-a nad nalogom, visoka cena ne znači kvalitet.',
  },
]

const managementFeeModels = [
  {
    model: 'Fiksna mesečna naknada',
    fee: '250 - 900€/mes',
    bestFor: 'Biznise koji žele stabilan trošak i jasnu podelu odgovornosti po sprintu.',
    caution: 'Ako scope nije precizno definisan, deo optimizacija lako ostane van dogovora.',
  },
  {
    model: 'Procenat od medijskog budžeta',
    fee: '8% - 15% budžeta',
    bestFor: 'Naloge sa velikim budžetom i brzim tempom skaliranja kroz više kampanja.',
    caution: 'Bez performance guardrail-a agencija može biti motivisana na veći spend umesto bolji profit.',
  },
  {
    model: 'Hibrid (fiksno + procenat)',
    fee: '200 - 500€ + 5% - 10%',
    bestFor: 'Kompanije koje žele baznu operativu plus dodatni rad kada kampanje ubrzano rastu.',
    caution: 'Potrebna je jasna granica šta ulazi u bazu, a šta ulazi u varijabilni deo.',
  },
  {
    model: 'Performance bonus (CPA/ROAS target)',
    fee: 'Fiksno + bonus po rezultatu',
    bestFor: 'Timove koji imaju čist tracking i mogu da prate profit po kanalu, ne samo broj leadova.',
    caution: 'Ako CRM i atribucija nisu čisti, lako dolazi do spora oko toga šta je stvarno “rezultat”.',
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

const intentBenchmarks = [
  {
    intent: 'Brend upiti (ime firme/proizvoda)',
    cpc: '0,06 - 0,22€',
    cpa: '4 - 18€',
    conversionRate: '12% - 28%',
    note: 'Najjeftiniji klikovi i najviši intent, ali samo ako postoji dovoljno pretrage brenda i dobra reputacija.',
  },
  {
    intent: 'Komercijalni non-brand upiti',
    cpc: '0,35 - 1,60€',
    cpa: '12 - 65€',
    conversionRate: '4% - 14%',
    note: 'Glavni izvor novih leadova. Ovde se najviše isplati rad na search terms higijeni i landing relevantnosti.',
  },
  {
    intent: 'Visokovredni / urgent upiti',
    cpc: '1,10 - 3,40€',
    cpa: '35 - 160€',
    conversionRate: '3% - 9%',
    note: 'Klik je skuplji zbog konkurencije, ali lead može imati znatno veću vrednost i brži povrat investicije.',
  },
]

const industryBenchmarks = [
  {
    niche: 'Lokalne usluge (servisi, saloni, ordinacije)',
    cpc: '0,10 - 0,45€',
    cpa: '8 - 25€',
    budget: '300 - 900€/mes',
    note: 'Najbolje rade upiti sa lokacijom + jasnim CTA (“pozovite”, “zakažite”, “pošaljite upit”).',
  },
  {
    niche: 'B2B usluge i konsulting',
    cpc: '0,35 - 1,20€',
    cpa: '20 - 60€',
    budget: '700 - 2.500€/mes',
    note: 'Manje klikova, ali viša vrednost leada. Fokus na kvalitet SQL-a, ne na volumen.',
  },
  {
    niche: 'E-commerce (search intent proizvodi)',
    cpc: '0,20 - 0,80€',
    cpa: '6 - 30€',
    budget: '800 - 4.000€/mes',
    note: 'Cena akvizicije mora biti vezana za maržu i prosečnu vrednost porudžbine.',
  },
  {
    niche: 'Pravne/finansijske niše',
    cpc: '0,80 - 2,80€',
    cpa: '35 - 120€',
    budget: '1.200 - 5.000€/mes',
    note: 'Konkurencija je visoka, pa landing kvalitet i trust elementi odlučuju profitabilnost.',
  },
]

const cityBenchmarks = [
  {
    city: 'Beograd',
    cpc: '0,35 - 1,80€',
    cpa: '15 - 90€',
    budget: '900 - 3.500€/mes',
    note: 'Najveća konkurencija i najveći volumen pretrage. Bez dobrog quality score-a i jasnog lead funnel-a CPC brzo raste.',
    route: '/marketing-agencija-beograd',
    routeLabel: 'Marketing agencija Beograd',
  },
  {
    city: 'Novi Sad',
    cpc: '0,22 - 1,10€',
    cpa: '12 - 55€',
    budget: '600 - 2.100€/mes',
    note: 'Stabilan odnos volumena i konkurencije. Dobar fit za firme koje žele predvidljiv lead flow bez enterprise troška.',
    route: '/marketing-agencija-novi-sad',
    routeLabel: 'Marketing agencija Novi Sad',
  },
  {
    city: 'Zrenjanin i manji gradovi',
    cpc: '0,12 - 0,65€',
    cpa: '8 - 35€',
    budget: '300 - 1.200€/mes',
    note: 'Niži CPC, ali i manji obim pretrage. Ključ je uska lokalna struktura kampanja i brza obrada upita.',
    route: '/marketing-agencija-zrenjanin',
    routeLabel: 'Marketing agencija Zrenjanin',
  },
]

const budgetPlannerSteps = [
  'Definiši prosečnu vrednost jednog klijenta (ili porudžbine).',
  'Odredi maksimalni prihvatljiv CPA koji i dalje ostavlja zdravu maržu.',
  'Izračunaj koliko lead-ova/kupovina treba mesečno za target prihoda.',
  'Budžet postavi tako da u prvih 30 dana dobiješ dovoljno podataka za optimizaciju (minimum 200-400 klikova).',
]

const readinessWarnings = [
  {
    title: 'Marža vam je tanka i svaki klik boli',
    text: 'Ako prodajete proizvod ili uslugu sa niskom maržom, Google Ads može vrlo brzo da pojede profit. U toj situaciji prvo treba izračunati realan maksimalni CPA, pa tek onda paliti kampanju.',
    route: '/cene-digitalnog-marketinga',
    routeLabel: 'Pogledajte kako da složite ukupan marketing budžet',
  },
  {
    title: 'Landing stranica još ne zatvara dovoljno dobro',
    text: 'Ako klik šaljete na spor homepage ili stranicu bez jasne ponude, Google neće biti problem. Problem će biti konverzija. Tada prvo treba srediti stranicu, tracking i CTA.',
    route: '/izrada-wordpress-sajta-cena',
    routeLabel: 'Proverite šta ulazi u dobru prodajnu stranicu',
  },
  {
    title: 'Nema ko da obradi lead u roku od 5 do 15 minuta',
    text: 'Google Ads dovodi ljude koji već traže rešenje. Ako odgovor stigne sutra, pola vrednosti ste već izgubili. Pre lansiranja rešite proces odgovora, skriptu za prodaju i ownership nad leadovima.',
    route: '/consulting',
    routeLabel: 'Sredite funnel i prodajni proces pre skaliranja',
  },
  {
    title: 'Kupac još nije u fazi aktivne pretrage',
    text: 'Za neke ponude ljudi prvo moraju da vide problem, pa tek onda da traže rešenje. U tom slučaju Google Ads nije dovoljan sam. Potreban je i kanal koji gradi pažnju i potražnju.',
    route: '/instagram-reklame-cena',
    routeLabel: 'Uporedite kada više smisla ima Instagram kanal',
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
    q: 'Koliko koštaju Google reklame za malu firmu u Srbiji?',
    a: 'Za većinu lokalnih usluga realan start je 300-900€ mesečno za mediju, uz dodatnu cenu upravljanja kampanjom. Tačan iznos zavisi od konkurencije i vrednosti jednog klijenta.',
  },
  {
    q: 'Kako da znam da li mi je cena Google oglasa održiva?',
    a: 'Posmatrajte cenu kvalifikovanog leada (CPA) u odnosu na prosečnu maržu po klijentu. Ako lead košta manje od onoga što vam ostaje kao profit, kampanja je održiva i može da se skalira.',
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
  {
    q: 'Koliko košta vođenje Google Ads kampanja bez medijskog budžeta?',
    a: 'Za većinu firmi u Srbiji vođenje kampanja je najčešće 250-700€ mesečno. Tačan fee zavisi od broja kampanja, obima testiranja i nivoa analitike koji vam je potreban.',
  },
  {
    q: 'Da li budžet treba povećavati odmah ili postepeno?',
    a: 'U praksi je sigurnije postepeno skaliranje (20-30% na 7-10 dana) kada kampanja drži stabilan CPA. Naglo podizanje budžeta često remeti delivery i diže cenu leada.',
  },
  {
    q: 'Da li Google Ads ima smisla za B2B sa manjim obimom pretrage?',
    a: 'Da, ako su ključne reči usko vezane za komercijalni intent i ako pratite kvalitet leadova, ne samo broj formi. Kod B2B-a je često važniji profit po klijentu nego volumen klikova.',
  },
]

const relatedPosts = [
  'google-ads-cena-po-kliku-srbija-2026',
  'vodjenje-google-ads-kampanja-cena-srbija-2026',
  'koliko-brzo-google-ads-donosi-prve-klijente-srbija-2026',
]
  .map((slug) => blogIndexPosts.find((post) => post.slug === slug))
  .filter(Boolean)

const nicheGoogleAdsGuides = blogIndexPosts
  .filter((post) => post.slug.startsWith('google-ads-za-') && !post.isDraft)
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 24)

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
          <p className="text-[14px] text-ink-3 leading-relaxed text-center mb-8 max-w-[700px] mx-auto">
            Ako pokušavate da uklopite cenu oglasa sa ostatkom funnel-a, pogledajte i{' '}
            <Link to="/izrada-wordpress-sajta-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
              izradu WordPress sajta
            </Link>{' '}
            i{' '}
            <Link to="/cro" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
              CRO optimizaciju
            </Link>,
            jer trošak klika retko rešava problem sam za sebe.
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
        <div className="max-w-[920px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-4 text-center">Vođenje Google Ads kampanja — cena upravljanja</h2>
          <p className="text-[15px] text-ink-3 text-center mb-10 max-w-[700px] mx-auto">
            Pored medijskog budžeta, ključna stavka je cena vođenja kampanja. Rasponi ispod su realni za srpsko tržište u 2026. i pomažu da procenite da li je ponuda održiva.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {managementPricing.map(item => (
              <div key={item.model} className="bg-panel rounded-[16px] border border-edge p-5 md:p-6">
                <div className="text-[12px] uppercase tracking-widest text-ink-4 mb-2">Model saradnje</div>
                <h3 className="text-[18px] font-medium text-ink mb-2">{item.model}</h3>
                <div className="text-[24px] font-bold text-ink mb-3">{item.fee}</div>
                <p className="text-[13px] text-ink-2 leading-relaxed mb-3">{item.bestFor}</p>
                <p className="text-[12px] text-ink-3 leading-relaxed">⚠️ {item.caution}</p>
              </div>
            ))}
          </div>

          <p className="text-[14px] text-ink-3 leading-relaxed mt-8 text-center max-w-[700px] mx-auto">
            Ako želite dodatni benchmark za planiranje budžeta, pročitajte i
            {' '}
            <Link to="/blog/google-ads-cena-po-kliku-srbija-2026" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
              Google Ads cena po kliku u Srbiji 2026
            </Link>.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[980px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 id="modeli-naplate-google-ads" className="text-[24px] md:text-[30px] font-medium text-ink mb-4 text-center">Modeli naplate vođenja Google Ads kampanja</h2>
          <p className="text-[15px] text-ink-3 text-center mb-8 max-w-[780px] mx-auto">
            Pored raspona cena, važan je i model naplate. Dobar model štiti profit, usklađuje očekivanja i sprečava da rast budžeta automatski znači i rast troška bez rezultata.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {managementFeeModels.map((item) => (
              <div key={item.model} className="rounded-[14px] border border-edge bg-page/40 p-5 md:p-6">
                <h3 className="text-[16px] font-medium text-ink mb-2">{item.model}</h3>
                <div className="text-[20px] font-semibold text-ink mb-3">{item.fee}</div>
                <p className="text-[13px] text-ink-2 leading-relaxed mb-3">{item.bestFor}</p>
                <p className="text-[12px] text-ink-3 leading-relaxed">⚠️ {item.caution}</p>
              </div>
            ))}
          </div>

          <p className="text-[14px] text-ink-3 leading-relaxed mt-8 text-center max-w-[760px] mx-auto">
            Ako niste sigurni da li vam više odgovara fiksna naknada, procenat ili hibrid, uporedite modele na{' '}
            <Link to="/fiksna-naknada-vs-revenue-share" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
              vodiču fiksna naknada vs revenue share
            </Link>{' '}
            i pošaljite nam strukturu ponude kroz{' '}
            <Link to="/kontakt" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
              kontakt formu
            </Link>{' '}
            za brzu validaciju pre potpisa.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-4 text-center">Benchmark za srpsko tržište</h2>
          <p className="text-[15px] text-ink-3 text-center mb-10 max-w-[620px] mx-auto">
            Rasponi ispod su orijentacioni i pomažu da procenite da li vaš nalog radi zdravo ili ima prostora za optimizaciju.
          </p>
          <p className="text-[14px] text-ink-3 leading-relaxed text-center mb-8 max-w-[720px] mx-auto">
            Ako vam brojke izgledaju dobro na nivou CPC-a, a leadovi su i dalje slabi, sledeći korak je obično{' '}
            <Link to="/facebook-oglasi-ne-rade" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
              dijagnostika kampanja koje ne daju rezultat
            </Link>{' '}
            ili direktan{' '}
            <Link to="/consulting" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
              konsultantski pregled budžeta i funnel-a
            </Link>.
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
        <div className="max-w-[980px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 id="cpc-po-intentu" className="text-[24px] md:text-[30px] font-medium text-ink mb-4 text-center">Google Ads cena po kliku po intentu</h2>
          <p className="text-[15px] text-ink-3 text-center mb-8 max-w-[780px] mx-auto">
            Ista industrija može imati potpuno drugačiji CPC ako se menja intent ključne reči. Zato je korisno da odvojite brend, komercijalne i urgent upite već u startu.
          </p>

          <div className="space-y-4">
            {intentBenchmarks.map((item) => (
              <div key={item.intent} className="rounded-[14px] border border-edge bg-page/40 p-5 md:p-6">
                <h3 className="text-[16px] font-medium text-ink mb-4">{item.intent}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-ink-4 mb-1">CPC</div>
                    <div className="text-[15px] font-semibold text-ink">{item.cpc}</div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-ink-4 mb-1">CPA</div>
                    <div className="text-[15px] font-semibold text-ink">{item.cpa}</div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-ink-4 mb-1">CVR</div>
                    <div className="text-[15px] font-semibold text-ink">{item.conversionRate}</div>
                  </div>
                </div>
                <p className="text-[13px] text-ink-2 leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>

          <p className="text-[14px] text-ink-3 leading-relaxed mt-8 text-center max-w-[760px] mx-auto">
            Za detaljniji raspon po industriji, pročitajte i{' '}
            <Link to="/blog/google-ads-cena-po-kliku-srbija-2026" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
              Google Ads cena po kliku u Srbiji 2026
            </Link>{' '}
            i uporedite ga sa vašim realnim search terms izveštajem.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[980px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-4 text-center">Google reklame cena po niši (Srbija 2026)</h2>
          <p className="text-[15px] text-ink-3 text-center mb-10 max-w-[760px] mx-auto">
            Ako tražite koliko realno koštaju Google reklame za vašu industriju, okvir ispod daje prosečne raspone po niši. Koristite ga za prvi budžet plan, pa zatim optimizujte po stvarnim podacima.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industryBenchmarks.map(item => (
              <div key={item.niche} className="bg-panel rounded-[16px] border border-edge p-5 md:p-6">
                <h3 className="text-[16px] font-medium text-ink mb-4">{item.niche}</h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-ink-4 mb-1">CPC</div>
                    <div className="text-[14px] font-semibold text-ink">{item.cpc}</div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-ink-4 mb-1">CPA</div>
                    <div className="text-[14px] font-semibold text-ink">{item.cpa}</div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-ink-4 mb-1">Budžet</div>
                    <div className="text-[14px] font-semibold text-ink">{item.budget}</div>
                  </div>
                </div>
                <p className="text-[13px] text-ink-2 leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[980px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-4 text-center">Google reklame cena po gradu (Srbija)</h2>
          <p className="text-[15px] text-ink-3 text-center mb-10 max-w-[760px] mx-auto">
            Isti tip kampanje može imati različit trošak u zavisnosti od grada i konkurencije. Ovi rasponi pomažu da realnije postavite očekivanja pre lansiranja.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cityBenchmarks.map((item) => (
              <div key={item.city} className="bg-panel rounded-[16px] border border-edge p-5 md:p-6">
                <h3 className="text-[17px] font-medium text-ink mb-4">{item.city}</h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-ink-4 mb-1">CPC</div>
                    <div className="text-[14px] font-semibold text-ink">{item.cpc}</div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-ink-4 mb-1">CPA</div>
                    <div className="text-[14px] font-semibold text-ink">{item.cpa}</div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-ink-4 mb-1">Budžet</div>
                    <div className="text-[14px] font-semibold text-ink">{item.budget}</div>
                  </div>
                </div>
                <p className="text-[13px] text-ink-2 leading-relaxed mb-4">{item.note}</p>
                <Link to={item.route} className="text-[13px] text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
                  Pogledajte vodič: {item.routeLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 id="vrednost-klijenta" className="text-[24px] md:text-[30px] font-medium text-ink mb-4 text-center">Kako da izračunate budžet bez nagađanja</h2>
          <p className="text-[15px] text-ink-3 text-center mb-8 max-w-[620px] mx-auto">
            Najbrži način da izbegnete bacanje budžeta je da Google Ads cenu povežete sa maržom, a ne samo sa cenom klika.
          </p>

          <div className="bg-panel rounded-[16px] border border-edge p-6 md:p-7">
            <span id="maksimalni-cpa" className="block h-0 overflow-hidden" aria-hidden="true" />
            <span id="broj-leadova" className="block h-0 overflow-hidden" aria-hidden="true" />
            <span id="test-budžet-google" className="block h-0 overflow-hidden" aria-hidden="true" />
            <ol className="space-y-3">
              {budgetPlannerSteps.map((step, idx) => (
                <li key={step} className="flex items-start gap-3 text-[14px] text-ink-2 leading-relaxed">
                  <span className="h-6 w-6 rounded-full bg-ink/10 text-ink text-[12px] font-semibold flex items-center justify-center flex-shrink-0">{idx + 1}</span>
                  {step}
                </li>
              ))}
            </ol>

            <p className="text-[14px] text-ink-3 leading-relaxed mt-6">
              Za širi plan po kanalima, pogledajte i{' '}
              <Link to="/cene-digitalnog-marketinga" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
                cene digitalnog marketinga
              </Link>{' '}
              i{' '}
              <Link to="/instagram-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
                Instagram reklame cena
              </Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[980px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-4 text-center">Kada Google Ads ne treba da bude prvi potez</h2>
          <p className="text-[15px] text-ink-3 text-center mb-8 max-w-[760px] mx-auto">
            Google Ads hvata postojeću potražnju. Ako osnova nije sređena, klikovi samo brže pokažu gde sistem puca. Zato vredi proveriti četiri stvari pre nego što povećate budžet.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {readinessWarnings.map((item) => (
              <div key={item.title} className="rounded-[14px] border border-edge bg-page/40 p-5 md:p-6">
                <h3 className="text-[16px] font-medium text-ink mb-3">{item.title}</h3>
                <p className="text-[14px] text-ink-2 leading-relaxed mb-4">{item.text}</p>
                <Link to={item.route} className="text-[13px] text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
                  {item.routeLabel}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-[14px] text-ink-3 leading-relaxed mt-8 text-center max-w-[760px] mx-auto">
            Ako želite da proverite da li je problem u budžetu, poruci ili stranici na koju šaljete saobraćaj, pošaljite nam URL kroz{' '}
            <Link to="/kontakt" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
              kontakt formu
            </Link>{' '}
            i vratićemo vam iskren okvir šta prvo treba srediti.
          </p>
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
          <p className="text-[14px] text-ink-3 leading-relaxed text-center mt-10 max-w-[720px] mx-auto">
            Ako vam se trošak diže jer landing ne zatvara dovoljno dobro, pogledajte i{' '}
            <Link to="/web-shop-nema-prodaju" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
              zašto sajt ili shop ne konvertuje
            </Link>{' '}
            pre nego što samo povećate budžet.
          </p>
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

      <section className="px-4 md:px-8 pb-10 md:pb-14">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4 text-center">Šta rešavamo posle budžeta</h2>
          <p className="text-[15px] text-ink-3 text-center mb-8 max-w-[700px] mx-auto">
            Kada postavimo okvir za Google Ads cenu, sledeći korak je da se usklade funnel, konverzija i profit. Zato ove usluge najčešće idu zajedno.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/digitalni-marketing" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Digitalni marketing sistem</div>
              <div className="text-[12px] text-ink-3">Search + Meta + retargeting u jednom planu</div>
            </Link>
            <Link to="/cro" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">CRO optimizacija</div>
              <div className="text-[12px] text-ink-3">Spuštanje cene leada kroz bolju konverziju stranice</div>
            </Link>
            <Link to="/consulting" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Konsalting i plan skaliranja</div>
              <div className="text-[12px] text-ink-3">Jasan model budžeta, KPI-jeva i sledećih eksperimenata</div>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-6 text-center">Povezane stranice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <Link to="/koliko-kosta-facebook-reklama" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Facebook reklame cena</div>
              <div className="text-[12px] text-ink-3">Uporedi Meta i Google troškove</div>
            </Link>
            <Link to="/blog/google-ads-cena-po-kliku-srbija-2026" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Google Ads CPC po niši</div>
              <div className="text-[12px] text-ink-3">Realni rasponi po industriji u Srbiji</div>
            </Link>
            <Link to="/instagram-reklame-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Instagram reklame cena</div>
              <div className="text-[12px] text-ink-3">Uporedi social i search budžete</div>
            </Link>
            <Link to="/izrada-wordpress-sajta-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Izrada WordPress sajta cena</div>
              <div className="text-[12px] text-ink-3">Uklopi budžet oglasa sa budžetom sajta</div>
            </Link>
            <Link to="/cene-digitalnog-marketinga" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene digitalnog marketinga</div>
              <div className="text-[12px] text-ink-3">Uporedi Google sa ukupnim marketinškim troškom</div>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-12 md:pb-16">
        <div className="max-w-[980px] mx-auto">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4 text-center">Google Ads vodiči po nišama</h2>
          <p className="text-[14px] text-ink-3 leading-relaxed text-center mb-8 max-w-[760px] mx-auto">
            Ako želite preciznije procene za konkretnu industriju, otvorite relevantan vodič ispod. Ove strane su vezane direktno za cenu leada, budžet po niši i tipične greške u setup-u kampanje.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {nicheGoogleAdsGuides.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors"
              >
                <div className="text-[14px] font-medium text-ink mb-2 line-clamp-2">{post.title}</div>
                <div className="text-[12px] text-ink-3 line-clamp-3">{post.excerpt}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedBlogPosts
        posts={relatedPosts}
        heading="Vodiči koji pomažu da Google Ads budžet donese više kvalifikovanih upita"
      />

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


    </div>
  )
}
