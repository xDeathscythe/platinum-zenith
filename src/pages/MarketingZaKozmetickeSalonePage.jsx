import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  {
    icon: '01',
    title: 'Klijent bira po utisku, ne po struci',
    desc: 'Medicinsku kozmetiku, tretmane lica ili klasicne manikire ljudi biraju na osnovu vizuelnog utiska, recenzija i brzine odgovora. Ako vas profil ne izgleda profesionalno, neko drugi zakazuje umesto vas.',
  },
  {
    icon: '02',
    title: 'Lokalna blizina presuduje',
    desc: 'Vecina klijenata trazi salon u svom kraju. Google mapa, radno vreme, fotografije prostora i ocene odlucuju da li ce vas uopste razmotriti ili kliknuti na sledeci rezultat.',
  },
  {
    icon: '03',
    title: 'Instagram donosi paznju, ali ne uvek i termin',
    desc: 'Reels sa tretmanima mogu da dobiju hiljade pregleda, ali bez jasnog poziva na zakazivanje i kratkog puta do potvrde, poruke ostaju bez termina.',
  },
  {
    icon: '04',
    title: 'Prazni termini znace gubitak prihoda',
    desc: 'Rupe u rasporedu se ne pune same od sebe. Bez sistema koji popunjava slobodne slotove na vreme, salon radi ispod kapaciteta i gubi prihod koji je mogao da ostvari.',
  },
  {
    icon: '05',
    title: 'Previse kanala, premalo sistema',
    desc: 'Upiti stizu kroz Instagram DM, WhatsApp, Viber, pozive i komentare. Bez jednog mesta gde se sve prati, lead se izgubi pre nego sto odgovorite.',
  },
  {
    icon: '06',
    title: 'Vrednost klijenta zavisi od usluge',
    desc: 'Obicni manikir, hijaluron, laserski tretman i trajna depilacija nemaju istu marzu. Dobar marketing ne juri samo klikove, nego tretmane koji nose zdrav profit i vracaju klijenta.',
  },
]

const playbook = [
  {
    title: 'Google Business i lokalni SEO za klijente sa jakom namerom',
    desc: 'Kada neko trazi kozmeticki salon u svom gradu, morate biti vidljivi odmah. U tom trenutku mapa, recenzije i jasna ponuda cesto zatvaraju odluku pre bilo kakvog sajta.',
    items: [
      'Kompletan Google Business profil sa uslugama, cenama i fotografijama',
      'Lokalni SEO sadrzaj za grad, naselje i tretmane koji se traze',
      'Sistem za prikupljanje recenzija koje grade poverenje kod novih klijenata',
      'CTA za poziv, poruku ili online zakazivanje direktno iz pretrage',
    ],
  },
  {
    title: 'Instagram koji zakazuje, ne samo impresionira',
    desc: 'Kozmeticki salon prirodno zivi na vizuelnim mrezama, ali rezultat dolazi tek kada kreativa i ponuda vode ka potvrdjenom terminu, ne ka praznom lajku.',
    items: [
      'Before-after Reels i karuseli za tretmane sa jakim vizuelnim efektom',
      'Ponude za dane i sate koje treba hitno popuniti',
      'Posebne kampanje za premium usluge sa vecom marzom',
      'Retargeting za ljude koji su pogledali profil ali nisu zakazali',
    ],
  },
  {
    title: 'Sajt ili landing koji skida trenje do zakazivanja',
    desc: 'Klijent ne sme da pogadja sta radite, koliko ste ozbiljni i kako se zakazuje. Stranica mora da skrati put od interesovanja do potvrdjenog termina.',
    items: [
      'Jasno prikazane usluge sa cenama, opisom i trajanjem tretmana',
      'Fotografije rada i prostora koje deluju autenticno',
      'Booking CTA iznad prevoja na mobilnom ekranu',
      'Trust elementi: recenzije, sertifikati, lokacija i iskustvo tima',
    ],
  },
  {
    title: 'Kampanje po usluzi i marzi, ne jedna reklama za sve',
    desc: 'Klasicni manikir, laserska depilacija, hijaluron i anti-age tretman ne traze istu poruku ni isti budzet. Profit raste kada ih odvojite po marzi i nameri klijenta.',
    items: [
      'Odvojene kampanje za high-ticket tretmane i usluge koje pune raspored',
      'Sezonske ponude za praznike, leto, maturske i svadbene sezone',
      'Pracenje cene termina po usluzi, ne samo po kampanji',
      'Prebacivanje budzeta na tretmane sa najboljim odnosom troska i prihoda',
    ],
  },
]

const firstMonth = [
  {
    title: 'Nedelja 1',
    text: 'Analiza salona, lokacije, recenzija, Instagrama, nacina zakazivanja i usluga koje nose najbolju marzu. Tu biramo sta ide prvo.',
  },
  {
    title: 'Nedelja 2',
    text: 'Postavljamo lokalne signale, booking CTA, kreativu za glavne usluge i osnovni tracking za pozive, poruke i zakazivanja.',
  },
  {
    title: 'Nedelja 3',
    text: 'Gasimo ono sto lepo izgleda, a ne zakazuje. Menjamo poruke, publike, termine i landing elemente koji koce konverziju.',
  },
  {
    title: 'Nedelja 4',
    text: 'Sirimo budzet na tretmane i dane koji daju najbolji povrat, pa pravimo plan za sledecih 60 dana rasta.',
  },
]

const faqs = [
  {
    q: 'Da li su za kozmeticki salon vazniji Instagram ili Google?',
    a: 'Oba kanala imaju razlicitu ulogu. Google hvata ljude koji sada traze tretman u svom gradu, dok Instagram gradi zelju, poverenje i vraca ljude koji jos razmisljaju. Vecina salona profitira kad oba kanala rade zajedno.',
  },
  {
    q: 'Koliko brzo salon moze da vidi vise zakazivanja?',
    a: 'Ako su ponuda, booking put i lokalni signal dobro postavljeni, prvi kvalitetni upiti mogu da stignu vec u prvoj nedelji. Realnija slika o ceni termina i kvalitetu klijenta obicno se vidi kroz 3 do 6 nedelja.',
  },
  {
    q: 'Da li salonu treba sajt ako vec ima jak Instagram profil?',
    a: 'Najcesce da. Instagram je odlican za paznju, ali sajt ili landing pomaze klijentu da brzo vidi cene, usluge, lokaciju, recenzije i jasan sledeci korak bez lutanja kroz DM poruke.',
  },
  {
    q: 'Koje tretmane prvo reklamirate?',
    a: 'To zavisi od cilja i kapaciteta salona, ali cesto prvo guramo tretmane koji imaju dobru marzu, jak vizuelni efekat i veci lifetime value. Poenta nije da reklamiramo sve, nego ono sto najzdravije puni kalendar.',
  },
  {
    q: 'Koliki budzet treba za pocetak?',
    a: 'Za Google Ads u kozmetici, realan start je 250 do 500 evra mesecno za ad spend, plus fee za vodjenje kampanje. Za Instagram, slican raspon moze da donese prve rezultate ako je kreativa i ponuda dobro postavljena.',
  },
]

const relatedLinks = [
  {
    to: '/instagram-reklame-cena',
    title: 'Instagram reklame cena',
    desc: 'Benchmark za Meta budzet, CPC i CPA pre nego sto krenete da punite DM ili booking formu.',
  },
  {
    to: '/google-reklame-cena',
    title: 'Google reklame cena',
    desc: 'Ako zelite da uhvatite lokalni intent kada neko trazi salon ili tretman odmah sada.',
  },
  {
    to: '/seo-optimizacija-cena',
    title: 'SEO optimizacija cena',
    desc: 'Za salone koji hoce stabilniji organski priliv kroz mapu, lokalne usluge i branded pretrage.',
  },
  {
    to: '/izrada-wordpress-sajta-cena',
    title: 'Izrada WordPress sajta cena',
    desc: 'Ako vam trenutni sajt ili landing koci zakazivanja, ovde je realan okvir ulaganja.',
  },
  {
    to: '/drustvene-mreze',
    title: 'Drustvene mreze',
    desc: 'Siri pregled contenta, community rada i placenih kampanja za brendove na drustvenim mrezama.',
  },
  {
    to: '/blog/instagram-reklame-za-kozmeticke-salone-cena-termina-srbija-2026',
    title: 'Instagram reklame za kozmeticke salone',
    desc: 'Detaljan vodic: koliko kosta Instagram reklama za kozmeticki salon, koji budzet ima smisla i kako meriti popunjenost kalendara.',
  },
  {
    to: '/blog/google-ads-za-kozmeticki-salon-cena-termina-srbija-2026',
    title: 'Google Ads za kozmeticke salone',
    desc: 'Koliko kostaju Google reklame za salon, koji budzet ima smisla i kako da dovedete klijente koji vec traze vas tip tretmana.',
  },
  {
    to: '/blog/seo-za-kozmeticke-salone-cena-srbija-2026',
    title: 'SEO za kozmeticke salone',
    desc: 'Cena lokalnog SEO-a za kozmeticke salone, sta ulazi u optimizaciju i kako meriti rezultat kroz zakazane termine.',
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
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Industrija - kozmeticki saloni</span>
          <h1 className="text-[30px] md:text-[50px] font-medium leading-[1.08] tracking-[-1px] text-ink mb-5">
            Marketing za kozmeticke salone
            <br />
            <span className="text-ink-2">koji puni kalendar vrednim terminima</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[700px] mx-auto mb-8">
            Kozmeticki salon ne raste zato sto objavljuje vise slika tretmana. Raste kada napravi lokalnu vidljivost, jasnu zelju za konkretnom uslugom i kratak put do zakazivanja. Pravimo sistem koji donosi vise termina i manji trosak po klijentu.
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
            Ako vec testirate Meta kampanje, pogledajte i <Link to="/instagram-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Instagram reklame cena</Link>. Ako sajt ne zakazuje, koristan je i vodic za <Link to="/izrada-wordpress-sajta-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">izradu WordPress sajta</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Zasto je marketing za kozmeticki salon drugaciji</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[660px] mx-auto">
            Ovde ne pobedjuje salon sa najjacim budzetom. Pobedjuje onaj koji deluje najpouzdanije, najblize i najlakse za zakazivanje bas kada klijent pozeli tretman.
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
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Sta najcesce radi za kozmeticki salon</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[670px] mx-auto">
            Krecemo od kanala i usluga koji realno mogu da dignu broj zakazivanja. Ne pravimo aktivnost radi aktivnosti, nego marketing koji puni kalendar pravim tretmanima.
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
        <div className="max-w-[920px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <div className="max-w-[720px] mx-auto text-center mb-8">
            <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-3">Prvih 30 dana bez prazne price</h2>
            <p className="text-[15px] text-ink-2 leading-relaxed">
              Cilj prvog meseca nije da salon samo izgleda aktivnije na mrezi. Cilj je da brzo vidimo koji tretmani, termini i kanali daju najbolji odnos troska i zakazivanja.
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
            Ako zelite siri pregled ulaganja po kanalu, pogledajte i <Link to="/google-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Google reklame cena</Link>, <Link to="/instagram-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Instagram reklame cena</Link> i <Link to="/seo-optimizacija-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">SEO optimizacija cena</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[780px] mx-auto bg-gradient-to-br from-pink-500/[0.10] to-purple-500/[0.08] rounded-[20px] border border-pink-500/[0.14] p-6 md:p-8 text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-3">Hocete da vidimo gde salon trenutno gubi termine?</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed max-w-[620px] mx-auto mb-5">
            Pregledamo Google profil, Instagram, sajt, ponudu i nacin zakazivanja. Dobijate konkretan spisak sledecih koraka za vise termina i manje praznih slotova.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
              Zakazite analizu
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
          <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-8 text-center">Srodne teme za kozmeticke salone</h2>
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
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Cesto postavljana pitanja</h2>
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
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Dobar salon zasluzuje da ga klijenti lakse pronadju i zakazuju</h2>
          <p className="text-[15px] text-ink-2 mb-6">
            Ako hocete vise termina bez bacanja budzeta na prazne klikove, javite se. Slozicemo plan za vas grad, tip usluge i kapacitet tima.
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
