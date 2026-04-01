import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  {
    icon: '01',
    title: 'Klijent bira salon brzo',
    desc: 'Kod salona prvi utisak presudi za par sekundi. Ako profil, ocene i radovi ne ulivaju poverenje, termin odlazi drugom salonu pre nego sto vas neko uopste kontaktira.',
  },
  {
    icon: '02',
    title: 'Lokalna pretraga puni kalendar',
    desc: 'Ljudi najcesce traze salon blizu stana ili posla. Google mapa, radno vreme, recenzije i fotografije cesto vrede vise od bilo kakvog generickog oglasa.',
  },
  {
    icon: '03',
    title: 'Instagram mora da zakazuje',
    desc: 'Reels, before-after i atmosfera salona mogu da dignu broj poruka, ali samo ako vode ka jasnoj rezervaciji, ne ka beskrajnom dopisivanju bez termina.',
  },
  {
    icon: '04',
    title: 'Prazni termini jedu prihod',
    desc: 'Problem nije samo broj novih klijenata. Problem su rupe u rasporedu koje se ne popune na vreme, pa stolica ostane prazna iako salon deluje zauzeto na mrezi.',
  },
  {
    icon: '05',
    title: 'DM haos ubija konverziju',
    desc: 'Kad upiti stizu kroz Instagram, WhatsApp i pozive bez jasnog toka, vruc lead lako propadne. Marketing mora da skrati put od interesovanja do rezervacije.',
  },
  {
    icon: '06',
    title: 'Najvredniji je povratak klijenta',
    desc: 'Balayage, keratin, musko sisanje i bridal termin nemaju istu vrednost. Dobar salon ne juri samo klikove, nego usluge i ritam dolazaka koji nose zdrav promet.',
  },
]

const playbook = [
  {
    title: 'Google Business i lokalni SEO za upite sa jakom namerom',
    desc: 'Kad neko trazi frizerski salon u svom kraju, morate biti vidljivi odmah. Tada mapa, ocene i jasna ponuda cesto zatvaraju odluku pre sajta.',
    items: [
      'Sredjen Google Business profil sa uslugama, fotografijama i jasnim signalima cene',
      'Lokalni SEO copy za grad, naselje i tretmane koji se stvarno traze',
      'Plan za recenzije koje grade poverenje kod novih klijenata',
      'Jasan CTA za poziv, poruku ili online rezervaciju',
    ],
  },
  {
    title: 'Instagram i Reels koji pune termine, ne samo reach',
    desc: 'Kod salona je vizuelni kanal prirodan, ali rezultat dolazi tek kada kreativa i ponuda vode ka rezervaciji konkretnog tretmana.',
    items: [
      'Reels i before-after format za usluge sa jakim wow efektom',
      'Ponude za dane i sate koje treba popuniti',
      'Posebne poruke za premium tretmane i brze rezervacije',
      'Retargeting za ljude koji su gledali profil, sajt ili poslali poruku bez zakazivanja',
    ],
  },
  {
    title: 'Landing ili sajt koji skida trenje do rezervacije',
    desc: 'Salon ne sme da tera klijenta da pogadja sta radite, koliko ste ozbiljni i kako se zakazuje. Stranica mora da skrati put od inspiracije do termina.',
    items: [
      'Jasno istaknute usluge, stil salona i tip klijenata kojima se obracate',
      'Fotografije rada i prostora koje deluju stvarno, ne stock',
      'Booking CTA iznad prevoja na mobilnom telefonu',
      'Trust elementi: recenzije, lokacija, iskustvo i atmosfera',
    ],
  },
  {
    title: 'Kampanje po usluzi, ne jedna reklama za sve',
    desc: 'Musko sisanje, balayage, farbanje, keratin i bridal hair ne traze istu poruku ni isti budzet. Profit raste kada ih odvojite po intentu i marzi.',
    items: [
      'Odvojene kampanje za high-ticket tretmane i usluge koje pune raspored',
      'Sezonske ponude za mature, vencanja, leto i praznike',
      'Pracenje cene rezervacije po usluzi, ne samo po kampanji',
      'Prebacivanje budzeta na tretmane koji daju najbolji odnos troska i prihoda',
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
    text: 'Postavljamo lokalne signale, booking CTA, kreativu za glavne usluge i osnovni tracking za pozive, poruke i rezervacije.',
  },
  {
    title: 'Nedelja 3',
    text: 'Gasimo ono sto lepo izgleda, a ne zakazuje. Menjamo poruke, publike, termine i landing elemente koji koce rezervaciju.',
  },
  {
    title: 'Nedelja 4',
    text: 'Sirimo budzet na tretmane i dane koji daju najbolji povrat, pa pravimo plan za sledecih 60 dana rasta.',
  },
]

const salonModes = [
  {
    title: 'Salon koji hoce vise premium termina',
    text: 'Ako vam je cilj balayage, keratin, bridal ili druge usluge sa jacom marzom, marketing mora da filtrira publiku, a ne da samo pravi veci broj poruka. Tu rade bolja kreativa, jaci trust elementi i precizniji CTA nego kod generickog "zakazi termin" pristupa.',
    route: '/instagram-reklame-cena',
    routeLabel: 'Kako izgleda Meta budzet kada hocete kvalitetniji termin, ne samo veci reach',
  },
  {
    title: 'Salon koji zeli da popuni prazne rupe u rasporedu',
    text: 'Ovde poenta nije dugorocni brending nego brz odgovor. Kampanja mora da gura konkretne sate, dane i usluge koje trenutno zjape prazne. Ako to ne radite odvojeno, marketing moze lepo da izgleda, a kalendar i dalje ostane neujednacen.',
    route: '/google-reklame-cena',
    routeLabel: 'Kad lokalna pretraga ima vise smisla od jos jednog opsteg oglasa',
  },
  {
    title: 'Salon koji tek gradi lokalnu reputaciju',
    text: 'Ako vas ljudi jos ne znaju dovoljno, nije pametno odmah se ponasati kao da ste vec brend broj jedan. Tada prvo dizete poverenje kroz recenzije, Google profil, lokalne signale i sadrzaj koji pokazuje kako radite i kome stvarno odgovarate.',
    route: '/industrije/lokalni-biznisi',
    routeLabel: 'Sta radi za lokalne biznise pre nego sto ozbiljnije pojacaju spend',
  },
  {
    title: 'Salon koji ima promet, ali nema zdrav sistem',
    text: 'Neki saloni imaju promet, ali sve i dalje zavisi od improvizacije u DM-u, od jedne osobe i od toga da li ce neko odmah odgovoriti. Tada problem nije samo marketing. Problem je sto nema jasnog puta od interesovanja do rezervacije i povratka klijenta.',
    route: '/cene-digitalnog-marketinga',
    routeLabel: 'Kako da marketing paket pratite po rezultatu, a ne po aktivnosti',
  },
]

const faqs = [
  {
    q: 'Da li su za frizerski salon vazniji Instagram ili Google?',
    a: 'Oba kanala imaju smisla, ali rade razlicit posao. Google hvata ljude koji sada traze salon, dok Instagram gradi zelju, poverenje i vraca ljude koji jos razmisljaju.',
  },
  {
    q: 'Koliko brzo salon moze da vidi vise rezervacija?',
    a: 'Ako su ponuda, booking put i lokalni signal dobro postavljeni, prvi kvalitetni upiti mogu da stignu brzo. Realnija slika o ceni rezervacije i kvalitetu klijenta obicno se vidi kroz prve 3 do 6 nedelja.',
  },
  {
    q: 'Da li salonu treba sajt ako vec ima aktivan Instagram?',
    a: 'Vrlo cesto da. Instagram je dobar za paznju, ali sajt ili landing pomaze da klijent brzo vidi usluge, lokaciju, recenzije i jasan sledeci korak bez lutanja kroz DM poruke.',
  },
  {
    q: 'Koje usluge najcesce prve gurate kod salona?',
    a: 'To zavisi od cilja i kapaciteta, ali cesto prvo guramo tretmane koji imaju dobru marzu, jak vizuelni efekat i veci lifetime value. Poenta nije da reklamiramo sve, nego ono sto najzdravije puni kalendar.',
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
    desc: 'Ako zelite da uhvatite lokalni intent kada neko trazi salon odmah sada.',
  },
  {
    to: '/seo-optimizacija-cena',
    title: 'SEO optimizacija cena',
    desc: 'Za salone koji hoce stabilniji organski priliv kroz mapu, lokalne usluge i branded pretrage.',
  },
  {
    to: '/izrada-wordpress-sajta-cena',
    title: 'Izrada WordPress sajta cena',
    desc: 'Ako vam trenutni sajt ili landing koci rezervacije, ovde je realan okvir ulaganja.',
  },
  {
    to: '/drustvene-mreze',
    title: 'Drustvene mreze',
    desc: 'Siri pregled contenta, community rada i placenih kampanja za brendove koji zive na drustvenim mrezama.',
  },
  {
    to: '/blog/instagram-marketing-za-frizerske-salone-srbija-2026',
    title: 'Instagram marketing za frizerske salone',
    desc: 'Detaljan vodic: koji formati donose zakazivanja, koliki budzet, kako meriti popunjenost rasporeda.',
  },
  {
    to: '/blog/google-ads-za-frizerske-salone-cena-srbija-2026',
    title: 'Google Ads za frizerske salone',
    desc: 'Koliko kostaju Google reklame za salon, koji budzet ima smisla i kako da dovedete klijente koji vec traze vas tip usluge.',
  },
  {
    to: '/blog/seo-za-frizerske-salone-cena-srbija-2026',
    title: 'SEO za frizerske salone',
    desc: 'Koliko kosta SEO za salon, zasto lokalni SEO dominira i kako meriti rezultat kroz zakazane termine.',
  },
]

export default function MarketingZaFrizerskeSalonePage() {
  usePageMeta()

  return (
    <div className="min-h-screen bg-page">
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 22% 20%, rgba(244,114,182,0.16) 0%, transparent 48%), radial-gradient(ellipse at 78% 78%, rgba(251,191,36,0.10) 0%, transparent 52%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 22% 20%, rgba(244,114,182,0.08) 0%, transparent 48%), radial-gradient(ellipse at 78% 78%, rgba(251,191,36,0.06) 0%, transparent 52%)' }} />
        </div>
        <div className="relative z-10 max-w-[860px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Industrija - frizerski saloni</span>
          <h1 className="text-[30px] md:text-[50px] font-medium leading-[1.08] tracking-[-1px] text-ink mb-5">
            Marketing za frizerske salone
            <br />
            <span className="text-ink-2">koji puni kalendar pravim terminima</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[700px] mx-auto mb-8">
            Salon ne raste zato sto objavljuje vise slika. Raste kada pravi lokalnu vidljivost, jasnu zelju i brz put do rezervacije. Pravimo sistem koji donosi vise rezervacija i manje praznih rupa u rasporedu.
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
            Ako vec testirate Meta kampanje, pogledajte i <Link to="/instagram-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Instagram reklame cena</Link>. Ako booking put puca posle klika, koristan je i vodic za <Link to="/izrada-wordpress-sajta-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">izradu WordPress sajta</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Zasto je marketing za salon drugaciji</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[660px] mx-auto">
            Ovde ne pobedjuje onaj ko najvise objavljuje. Pobedjuje salon koji deluje najpozeljnije, najblize i najlakse za zakazivanje bas kada klijent pozeli promenu.
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
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Sta najcesce radi za frizerski salon</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[670px] mx-auto">
            Krecemo od kanala i usluga koji realno mogu da dignu broj rezervacija. Ne pravimo aktivnost radi aktivnosti, nego marketing koji puni stolicu.
          </p>
          <div className="space-y-6">
            {playbook.map((block) => (
              <div key={block.title} className="bg-panel rounded-[20px] border border-edge p-6 md:p-8">
                <h3 className="text-[20px] font-medium text-ink mb-3">{block.title}</h3>
                <p className="text-[15px] text-ink-2 leading-relaxed mb-4">{block.desc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <svg className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
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
            <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-3">Sta radi za salon koji hoce termine, ne samo pratioce</h2>
            <p className="text-[15px] text-ink-2 leading-relaxed">
              Nije svaki salon u istoj fazi. Nekome trebaju premium tretmani, nekome popuna praznih rupa, a nekome tek gradjenje lokalnog poverenja. Kada to ne odvojite, marketing lako sklizne u objave i kampanje koje lepo izgledaju, ali ne resavaju pravi problem.
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
            Ako niste sigurni da li salon prvo treba da dize premium usluge, da puni rupe u rasporedu ili da sredi lokalno poverenje, posaljite nam kratak opis kroz <Link to="/kontakt" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">kontakt formu</Link> i reci cemo vam odakle ima smisla krenuti.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[920px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <div className="max-w-[720px] mx-auto text-center mb-8">
            <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-3">Prvih 30 dana bez prazne price</h2>
            <p className="text-[15px] text-ink-2 leading-relaxed">
              Cilj prvog meseca nije da salon samo izgleda aktivnije. Cilj je da brzo vidimo koji tretmani, termini i kanali daju najbolji odnos troska i rezervacije.
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
        <div className="max-w-[780px] mx-auto bg-gradient-to-br from-rose-500/[0.10] to-amber-500/[0.08] rounded-[20px] border border-rose-500/[0.14] p-6 md:p-8 text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-3">Hocete da vidimo gde salon trenutno gubi rezervacije?</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed max-w-[620px] mx-auto mb-5">
            Pregledamo Google profil, Instagram, sajt, ponudu i nacin zakazivanja. Dobijate konkretan spisak sledecih koraka za vise termina i manje lutanja.
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
          <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-8 text-center">Srodne teme za frizerske salone</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedLinks.map((item) => (
              <Link key={item.to} to={item.to} className="bg-panel rounded-[18px] border border-edge p-5 hover:border-ink-4 transition-colors">
                <div className="text-[16px] font-medium text-ink mb-2">{item.title}</div>
                <p className="text-[14px] text-ink-2 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-3 text-[13px]">
            <Link to="/marketing-za-stomatologe" className="text-ink-3 hover:text-ink transition-colors">Marketing za stomatologe</Link>
            <Link to="/marketing-za-restorane" className="text-ink-3 hover:text-ink transition-colors">Marketing za restorane</Link>
            <Link to="/marketing-za-nekretnine" className="text-ink-3 hover:text-ink transition-colors">Marketing za nekretnine</Link>
            <Link to="/industrije/lokalni-biznisi" className="text-ink-3 hover:text-ink transition-colors">Lokalni biznisi</Link>
            <Link to="/drustvene-mreze" className="text-ink-3 hover:text-ink transition-colors">Drustvene mreze</Link>
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
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Dobar salon zasluzuje da ga ljudi lakse zakazuju</h2>
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
