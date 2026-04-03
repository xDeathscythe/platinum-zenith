import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  {
    icon: '01',
    title: 'Klijent bira po utisku, ne po struci',
    desc: 'Medicinsku kozmetiku, tretmane lica ili klasične manikire ljudi biraju na osnovu vizuelnog utiska, recenzija i brzine odgovora. Ako vas profil ne izgleda profesionalno, neko drugi zakazuje umesto vas.',
  },
  {
    icon: '02',
    title: 'Lokalna blizina presuduje',
    desc: 'Većina klijenata traži salon u svom kraju. Google mapa, radno vreme, fotografije prostora i ocene odlučuju da li će vas uopšte razmotriti ili kliknuti na sledeći rezultat.',
  },
  {
    icon: '03',
    title: 'Instagram donosi pažnju, ali ne uvek i termin',
    desc: 'Reels sa tretmanima mogu da dobiju hiljade pregleda, ali bez jasnog poziva na zakazivanje i kratkog puta do potvrde, poruke ostaju bez termina.',
  },
  {
    icon: '04',
    title: 'Prazni termini znače gubitak prihoda',
    desc: 'Rupe u rasporedu se ne pune same od sebe. Bez sistema koji popunjava slobodne slotove na vreme, salon radi ispod kapaciteta i gubi prihod koji je mogao da ostvari.',
  },
  {
    icon: '05',
    title: 'Previše kanala, premalo sistema',
    desc: 'Upiti stižu kroz Instagram DM, WhatsApp, Viber, pozive i komentare. Bez jednog mesta gde se sve prati, lead se izgubi pre nego što odgovorite.',
  },
  {
    icon: '06',
    title: 'Vrednost klijenta zavisi od usluge',
    desc: 'Obicni manikir, hijaluron, laserski tretman i trajna depilacija nemaju istu maržu. Dobar marketing ne juri samo klikove, nego tretmane koji nose zdrav profit i vraćaju klijenta.',
  },
]

const playbook = [
  {
    title: 'Google Business i lokalni SEO za klijente sa jakom namerom',
    desc: 'Kada neko traži kozmetički salon u svom gradu, morate biti vidljivi odmah. U tom trenutku mapa, recenzije i jasna ponuda često zatvaraju odluku pre bilo kakvog sajta.',
    items: [
      'Kompletan Google Business profil sa uslugama, cenama i fotografijama',
      'Lokalni SEO sadržaj za grad, naselje i tretmane koji se traže',
      'Sistem za prikupljanje recenzija koje grade poverenje kod novih klijenata',
      'CTA za poziv, poruku ili online zakazivanje direktno iz pretrage',
    ],
  },
  {
    title: 'Instagram koji zakazuje, ne samo impresionira',
    desc: 'Kozmetički salon prirodno živi na vizuelnim mrežama, ali rezultat dolazi tek kada kreativa i ponuda vode ka potvrđenom terminu, ne ka praznom lajku.',
    items: [
      'Before-after Reels i karuseli za tretmane sa jakim vizuelnim efektom',
      'Ponude za dane i sate koje treba hitno popuniti',
      'Posebne kampanje za premium usluge sa većom maržom',
      'Retargeting za ljude koji su pogledali profil ali nisu zakazali',
    ],
  },
  {
    title: 'Sajt ili landing koji skida trenje do zakazivanja',
    desc: 'Klijent ne sme da pogađa šta radite, koliko ste ozbiljni i kako se zakazuje. Stranica mora da skrati put od interesovanja do potvrdjenog termina.',
    items: [
      'Jasno prikazane usluge sa cenama, opisom i trajanjem tretmana',
      'Fotografije rada i prostora koje deluju autentično',
      'Booking CTA iznad prevoja na mobilnom ekranu',
      'Trust elementi: recenzije, sertifikati, lokacija i iskustvo tima',
    ],
  },
  {
    title: 'Kampanje po usluzi i marži, ne jedna reklama za sve',
    desc: 'Klasicni manikir, laserska depilacija, hijaluron i anti-age tretman ne traže istu poruku ni isti budžet. Profit raste kada ih odvojite po marži i nameri klijenta.',
    items: [
      'Odvojene kampanje za high-ticket tretmane i usluge koje pune raspored',
      'Sezonske ponude za praznike, leto, maturske i svadbene sezone',
      'Praćenje cene termina po usluzi, ne samo po kampanji',
      'Prebacivanje budžeta na tretmane sa najboljim odnosom troška i prihoda',
    ],
  },
]

const firstMonth = [
  {
    title: 'Nedelja 1',
    text: 'Analiza salona, lokacije, recenzija, Instagrama, načina zakazivanja i usluga koje nose najbolju maržu. Tu biramo šta ide prvo.',
  },
  {
    title: 'Nedelja 2',
    text: 'Postavljamo lokalne signale, booking CTA, kreativu za glavne usluge i osnovni tracking za pozive, poruke i zakazivanja.',
  },
  {
    title: 'Nedelja 3',
    text: 'Gasimo ono što lepo izgleda, a ne zakazuje. Menjamo poruke, publike, termine i landing elemente koji koče konverziju.',
  },
  {
    title: 'Nedelja 4',
    text: 'Širimo budžet na tretmane i dane koji daju najbolji povrat, pa pravimo plan za sledećih 60 dana rasta.',
  },
]

const salonModes = [
  {
    title: 'Salon koji hoće više premium tretmana',
    text: 'Ako su vam fokus hijaluron, anti-age, laser ili tretmani sa jačom maržom, nije dovoljno da imate lep Instagram. Potrebni su bolja selekcija publike, više poverenja i poruka koja klijentu odmah objašnjava zašto baš taj tretman i baš kod vas.',
    route: '/instagram-reklame-cena',
    routeLabel: 'Kako Meta budžet izgleda kada jurite kvalitetniji termin, ne samo više poruka',
  },
  {
    title: 'Salon koji mora da popuni prazne slotove ove nedelje',
    text: 'Ovde nije poenta dugoročni reach nego brza rezervacija. Kampanja mora da gura konkretne dane, sate i tretmane koji trenutno stoje prazni. Ako sve reklamirate isto, marketing deluje aktivno, a raspored ostaje neujednačen.',
    route: '/google-reklame-cena',
    routeLabel: 'Kada lokalna pretraga zatvara bolje od još jednog opšteg oglasa',
  },
  {
    title: 'Salon koji tek gradi lokalno poverenje',
    text: 'Ako vas ljudi još ne znaju dovoljno, prerano je da se ponašate kao veliki beauty brend. Tada prvo dižete recenzije, Google profil, lokalne signale i jasan dokaz da tretmani izgledaju ozbiljno i bezbedno, ne samo lepo na Reels-u.',
    route: '/industrije/lokalni-biznisi',
    routeLabel: 'Šta lokalni biznis mora da sredi pre jačih kampanja',
  },
  {
    title: 'Salon koji ima promet, ali nema zdrav sistem zakazivanja',
    text: 'Neki saloni imaju dosta upita, ali sve i dalje zavisi od DM poruka, improvizacije i toga da li će neko odmah odgovoriti. Tada problem nije samo marketing, nego to što nema jasnog puta od interesovanja do potvrde termina i povratka klijenta.',
    route: '/cene-digitalnog-marketinga',
    routeLabel: 'Kako da marketing pratite po rezultatu, ne po aktivnosti',
  },
]

const faqs = [
  {
    q: 'Da li su za kozmetički salon važniji Instagram ili Google?',
    a: 'Oba kanala imaju različitu ulogu. Google hvata ljude koji sada traže tretman u svom gradu, dok Instagram gradi želju, poverenje i vraća ljude koji još razmišljaju. Većina salona profitira kad oba kanala rade zajedno.',
  },
  {
    q: 'Koliko brzo salon može da vidi više zakazivanja?',
    a: 'Ako su ponuda, booking put i lokalni signal dobro postavljeni, prvi kvalitetni upiti mogu da stignu već u prvoj nedelji. Realnija slika o ceni termina i kvalitetu klijenta obično se vidi kroz 3 do 6 nedelja.',
  },
  {
    q: 'Da li salonu treba sajt ako već ima jak Instagram profil?',
    a: 'Najčešće da. Instagram je odličan za pažnju, ali sajt ili landing pomaže klijentu da brzo vidi cene, usluge, lokaciju, recenzije i jasan sledeći korak bez lutanja kroz DM poruke.',
  },
  {
    q: 'Koje tretmane prvo reklamirate?',
    a: 'To zavisi od cilja i kapaciteta salona, ali često prvo guramo tretmane koji imaju dobru maržu, jak vizuelni efekat i veći lifetime value. Poenta nije da reklamiramo sve, nego ono što najzdravije puni kalendar.',
  },
  {
    q: 'Koliki budžet treba za početak?',
    a: 'Za Google Ads u kozmetici, realan start je 250 do 500 evra mesecno za ad spend, plus fee za vodjenje kampanje. Za Instagram, sličan raspon može da donese prve rezultate ako je kreativa i ponuda dobro postavljena.',
  },
]

const relatedLinks = [
  {
    to: '/instagram-reklame-cena',
    title: 'Instagram reklame cena',
    desc: 'Benchmark za Meta budžet, CPC i CPA pre nego što krenete da punite DM ili booking formu.',
  },
  {
    to: '/google-reklame-cena',
    title: 'Google reklame cena',
    desc: 'Ako želite da uhvatite lokalni intent kada neko traži salon ili tretman odmah sada.',
  },
  {
    to: '/seo-optimizacija-cena',
    title: 'SEO optimizacija cena',
    desc: 'Za salone koji hoće stabilniji organski priliv kroz mapu, lokalne usluge i branded pretrage.',
  },
  {
    to: '/izrada-wordpress-sajta-cena',
    title: 'Izrada WordPress sajta cena',
    desc: 'Ako vam trenutni sajt ili landing koci zakazivanja, ovde je realan okvir ulaganja.',
  },
  {
    to: '/društvene-mreže',
    title: 'Društvene mreže',
    desc: 'Siri pregled contenta, community rada i placenih kampanja za brendove na društvenim mrežama.',
  },
  {
    to: '/blog/instagram-reklame-za-kozmeticke-salone-cena-termina-srbija-2026',
    title: 'Instagram reklame za kozmetičke salone',
    desc: 'Detaljan vodič: koliko košta Instagram reklama za kozmetički salon, koji budžet ima smisla i kako meriti popunjenost kalendara.',
  },
  {
    to: '/blog/google-ads-za-kozmeticki-salon-cena-termina-srbija-2026',
    title: 'Google Ads za kozmetičke salone',
    desc: 'Koliko koštaju Google reklame za salon, koji budžet ima smisla i kako da dovedete klijente koji već traže vas tip tretmana.',
  },
  {
    to: '/blog/seo-za-kozmeticke-salone-cena-srbija-2026',
    title: 'SEO za kozmetičke salone',
    desc: 'Cena lokalnog SEO-a za kozmetičke salone, šta ulazi u optimizaciju i kako meriti rezultat kroz zakazane termine.',
  },
]

export default function MarketingZaKozmetickeSalonePage() {
  usePageMeta()

  return (
    <div className="min-h-screen bg-page">
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 22% 20%, rgba(236,72,153,0.16) 0%, transparent 48%), radial-gradient(ellipse at 78% 78%, rgba(168,85,247,0.10) 0%, transparent 52%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 22% 20%, rgba(236,72,153,0.08) 0%, transparent 48%), radial-gradient(ellipse at 78% 78%, rgba(168,85,247,0.06) 0%, transparent 52%)' }} />
        </div>
        <div className="relative z-10 max-w-[860px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Industrija - kozmetički saloni</span>
          <h1 className="text-[30px] md:text-[50px] font-medium leading-[1.08] tracking-[-1px] text-ink mb-5">
            Marketing za kozmetičke salone
            <br />
            <span className="text-ink-2">koji puni kalendar vrednim terminima</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[700px] mx-auto mb-8">
            Kozmetički salon ne raste zato što objavljuje više slika tretmana. Raste kada napravi lokalnu vidljivost, jasnu želju za konkretnom uslugom i kratak put do zakazivanja. Pravimo sistem koji donosi više termina i manji trošak po klijentu.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
              Besplatna analiza salona
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="#plan" className="inline-flex items-center gap-2 text-ink-2 text-[14px] font-medium h-11 px-6 rounded-full border border-edge hover:bg-tint transition-colors">
              Pogledajte plan
            </a>
          </div>
          <p className="text-[13px] text-ink-3 mt-5 max-w-[650px] mx-auto">
            Ako već testirate Meta kampanje, pogledajte i <Link to="/instagram-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Instagram reklame cena</Link>. Ako sajt ne zakazuje, koristan je i vodič za <Link to="/izrada-wordpress-sajta-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">izradu WordPress sajta</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Zašto je marketing za kozmetički salon drugačiji</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[660px] mx-auto">
            Ovde ne pobeđuje salon sa najjačim budžetom. Pobeđuje onaj koji deluje najpouzdanije, najbliže i najlakše za zakazivanje baš kada klijent poželi tretman.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {challenges.map((item) => (
              <div key={item.title} className="bg-panel rounded-[20px] border border-edge p-6">
                <span className="text-[28px] mb-3 block">{item.icon}</span>
                <h3 className="text-[17px] font-medium text-ink mb-2">{item.title}</h3>
                <p className="text-[14px] text-ink-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plan" className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[920px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Šta najčešće radi za kozmetički salon</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[670px] mx-auto">
            Krećemo od kanala i usluga koji realno mogu da dignu broj zakazivanja. Ne pravimo aktivnost radi aktivnosti, nego marketing koji puni kalendar pravim tretmanima.
          </p>
          <div className="space-y-6">
            {playbook.map((block) => (
              <div key={block.title} className="bg-panel rounded-[20px] border border-edge p-6 md:p-8">
                <h3 className="text-[20px] font-medium text-ink mb-3">{block.title}</h3>
                <p className="text-[15px] text-ink-2 leading-relaxed mb-4">{block.desc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <svg className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      <span className="text-[14px] text-ink-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[980px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <div className="max-w-[760px] mx-auto text-center mb-8">
            <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-3">Šta radi za salon koji hoće više termina, ali i bolju vrstu termina</h2>
            <p className="text-[15px] text-ink-2 leading-relaxed">
              Nije svaki kozmetički salon u istoj fazi. Nekome trebaju premium tretmani, nekome popuna praznih slotova, a nekome tek lokalno poverenje. Kad to ne odvojite, marketing lako sklizne u objave i kampanje koje lepo izgledaju, a ne rešavaju pravi problem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {salonModes.map((item) => (
              <div key={item.title} className="rounded-[16px] border border-edge bg-page p-5 md:p-6">
                <h3 className="text-[18px] font-medium text-ink mb-3">{item.title}</h3>
                <p className="text-[14px] text-ink-2 leading-relaxed mb-4">{item.text}</p>
                <Link to={item.route} className="text-[13px] text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
                  {item.routeLabel}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-[14px] text-ink-3 leading-relaxed mt-8 text-center max-w-[760px] mx-auto">
            Ako niste sigurni da li salon prvo treba da diže premium usluge, da puni prazne slotove ili da sredi lokalno poverenje, pošaljite nam kratak opis kroz <Link to="/kontakt" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">kontakt formu</Link> i reći ćemo vam odakle ima smisla krenuti.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[920px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <div className="max-w-[720px] mx-auto text-center mb-8">
            <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-3">Prvih 30 dana bez prazne priče</h2>
            <p className="text-[15px] text-ink-2 leading-relaxed">
              Cilj prvog meseca nije da salon samo izgleda aktivnije na mreži. Cilj je da brzo vidimo koji tretmani, termini i kanali daju najbolji odnos troška i zakazivanja.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {firstMonth.map((step) => (
              <div key={step.title} className="rounded-[16px] border border-edge bg-page p-5">
                <div className="text-[12px] uppercase tracking-[0.18em] text-ink-3 mb-2">{step.title}</div>
                <p className="text-[14px] text-ink-2 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
          <p className="text-[14px] text-ink-3 leading-relaxed mt-6 text-center max-w-[700px] mx-auto">
            Ako želite širi pregled ulaganja po kanalu, pogledajte i <Link to="/google-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Google reklame cena</Link>, <Link to="/instagram-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Instagram reklame cena</Link> i <Link to="/seo-optimizacija-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">SEO optimizacija cena</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[780px] mx-auto bg-gradient-to-br from-pink-500/[0.10] to-purple-500/[0.08] rounded-[20px] border border-pink-500/[0.14] p-6 md:p-8 text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-3">Hoćete da vidimo gde salon trenutno gubi termine?</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed max-w-[620px] mx-auto mb-5">
            Pregledamo Google profil, Instagram, sajt, ponudu i način zakazivanja. Dobijate konkretan spisak sledećih koraka za više termina i manje praznih slotova.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
              Zakažite analizu
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/cene-digitalnog-marketinga" className="inline-flex items-center gap-2 text-ink-2 text-[14px] font-medium h-11 px-6 rounded-full border border-edge hover:bg-tint transition-colors">
              Pogledajte cenovni okvir
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-8 text-center">Srodne teme za kozmetičke salone</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedLinks.map((item) => (
              <Link key={item.to} to={item.to} className="bg-panel rounded-[18px] border border-edge p-5 hover:border-ink-4 transition-colors">
                <div className="text-[16px] font-medium text-ink mb-2">{item.title}</div>
                <p className="text-[14px] text-ink-2 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-3 text-[13px]">
            <Link to="/marketing-za-frizerske-salone" className="text-ink-3 hover:text-ink transition-colors">Marketing za frizerske salone</Link>
            <Link to="/marketing-za-stomatologe" className="text-ink-3 hover:text-ink transition-colors">Marketing za stomatologe</Link>
            <Link to="/marketing-za-restorane" className="text-ink-3 hover:text-ink transition-colors">Marketing za restorane</Link>
            <Link to="/marketing-za-nekretnine" className="text-ink-3 hover:text-ink transition-colors">Marketing za nekretnine</Link>
            <Link to="/industrije/lokalni-biznisi" className="text-ink-3 hover:text-ink transition-colors">Lokalni biznisi</Link>
            <Link to="/digitalni-marketing" className="text-ink-3 hover:text-ink transition-colors">Digitalni marketing</Link>
          </div>
        </div>
      </section>

      <section id="faq" className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Često postavljana pitanja</h2>
          <div className="space-y-5">
            {faqs.map((item) => (
              <details key={item.q} className="group bg-panel rounded-[14px] border border-edge">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-[15px] font-medium text-ink">
                  {item.q}
                  <svg className="w-4 h-4 text-ink-3 transition-transform group-open:rotate-180 flex-shrink-0 ml-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </summary>
                <div className="px-5 pb-5 text-[14px] text-ink-2 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[620px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Dobar salon zaslužuje da ga klijenti lakše pronađu i zakazuju</h2>
          <p className="text-[15px] text-ink-2 mb-6">
            Ako hoćete više termina bez bacanja budžeta na prazne klikove, javite se. Složićemo plan za vas grad, tip usluge i kapacitet tima.
          </p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
            Kontaktirajte nas
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
