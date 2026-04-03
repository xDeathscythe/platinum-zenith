import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  {
    icon: '01',
    title: 'Roditelj bira vrtić za svoje dete, ne za sebe',
    desc: 'Odluka o vrtiću je emotivna i temeljna. Roditelj traži sigurnost, blizinu, pedagoške metode i utisak koji ostavlja prostor. Marketing koji izgleda kao reklama odbija umesto da privlači.',
  },
  {
    icon: '02',
    title: 'Upis je sezonski, ali odluka nije',
    desc: 'Najveći talas upisa je mart-jun, ali roditelji istražuju tokom cele godine. Ako niste vidljivi kad počnu da se raspituju, već ste izgubili tu porodicu.',
  },
  {
    icon: '03',
    title: 'Preporuka i dalje dominira, ali počinje na internetu',
    desc: 'Roditelj će pitati komšije i prijatelje, ali pre toga pretražuje Google, Instagram i recenzije. Ako vas ne nađe tamo, preporuka ne stiže do njega.',
  },
  {
    icon: '04',
    title: 'Lokacija je odlučujuća, ali ne jedina',
    desc: 'Roditelji prvo traže vrtić u svom kraju, ali ako im se dopadne program, spremni su da voze malo dalje. Zato lokalni SEO treba da radi zajedno sa jakom porukom o pristupu.',
  },
  {
    icon: '05',
    title: 'Kapacitet je ograničen, a prazno mesto košta',
    desc: 'Privatni vrtić ima fiksne troškove bez obzira na popunjenost. Svako prazno mesto je direktan gubitak prihoda koji se ne nadoknađuje.',
  },
  {
    icon: '06',
    title: 'Konkurencija je tiha ali gusta',
    desc: 'U većim gradovima na svakih par ulica postoji privatni vrtić. Razlika između punog i polupraznog često nije kvalitet programa, nego vidljivost u pravom trenutku.',
  },
]

const playbook = [
  {
    title: 'Google Business i lokalni SEO za roditelje koji aktivno traže',
    desc: 'Kada roditelj ukuca "privatni vrtić" plus ime naselja ili grada, morate biti vidljivi odmah. Mapa, recenzije i fotografije prostora često zatvaraju odluku o obilasku pre nego što uopšte posetite sajt.',
    items: [
      'Kompletan Google Business profil sa fotografijama prostora, dvorišta i aktivnosti',
      'Lokalni SEO sadržaj za grad, naselje i tip programa koji nudite',
      'Sistem za prikupljanje recenzija od zadovoljnih roditelja',
      'Jasan CTA za zakazivanje obilaska ili poziv za informacije',
    ],
  },
  {
    title: 'Instagram koji pokazuje svakodnevnicu, ne samo slavlja',
    desc: 'Roditelja ne ubedi savršen post za Dan nezavisnosti. Ubedi ga snimak kako deca uče, jedu, igraju se napolju i kako vaspitačice reaguju na plač ili svađe. Autentičnost ovde radi bolje od estetike.',
    items: [
      'Reels i Stories sa svakodnevnim aktivnostima, radionicama i igrom',
      'Before-after prikazi napretka dece kroz sezonu',
      'Sezonske kampanje za septembar, januar i mart kad upis raste',
      'Retargeting za roditelje koji su posetili profil ili sajt ali nisu zakazali obilazak',
    ],
  },
  {
    title: 'Sajt ili landing koji skida strah i ubrzava obilazak',
    desc: 'Roditelj hoće da vidi prostor, tim, program i cenu pre nego što pozove. Ako sajt izgleda zastarelo ili ne daje jasne odgovore, ode na sledeći vrtić koji to ima.',
    items: [
      'Fotografije prostora, dvorišta, obroka i dnevnih aktivnosti',
      'Jasno opisan program, radno vreme, starosne grupe i cenovnik',
      'CTA za zakazivanje obilaska iznad prevoja na mobilnom',
      'Trust elementi: pedagoški pristup, sertifikati, recenzije roditelja, broj godina rada',
    ],
  },
  {
    title: 'Google Ads za roditelje koji već traže vrtić u vašem gradu',
    desc: 'Kada neko pretražuje "privatni vrtić Novi Beograd" ili "upis u vrtić Niš", to je roditelj sa jasnom namerom. Google Ads vas stavlja ispred svih u tom trenutku, za budžet koji ima smisla za 1-2 nova upisa mesečno.',
    items: [
      'Kampanje po naselju, gradu i tipu programa (Montessori, dvojezični, sportski)',
      'Landing stranice prilagođene za mobilni uređaj sa brzim zakazivanjem',
      'Praćenje cene po zakazanom obilasku i cene po upisu',
      'Sezonsko pojačavanje budžeta u periodima najjačeg interesovanja',
    ],
  },
]

const firstMonth = [
  {
    title: 'Nedelja 1',
    text: 'Analiza vrtića: lokacija, kapacitet, popunjenost, trenutni kanali, konkurencija u kraju i sezonska dinamika upisa. Biramo šta ide prvo.',
  },
  {
    title: 'Nedelja 2',
    text: 'Postavljamo Google Business, lokalne signale, sajt/landing sa CTA za obilazak, tracking za pozive i forme. Pripremamo kreativu za Instagram.',
  },
  {
    title: 'Nedelja 3',
    text: 'Puštamo prve kampanje, pratimo odakle dolaze upiti, testiramo poruke i publike. Gasimo ono što troši a ne donosi obilaske.',
  },
  {
    title: 'Nedelja 4',
    text: 'Analiziramo cenu po obilasku i upisu, optimizujemo kampanje, pravimo plan za sledeća 2 meseca bazirano na realnim brojevima.',
  },
]

const enrollmentModes = [
  {
    title: 'Vrtić koji mora da popuni prazna mesta brzo',
    text: 'Ako grupa nije puna, prioritet nije dugoročni brending nego brz i jasan put do obilaska. Tada najbolje rade lokalna pretraga, mapa, recenzije i poruka koja roditelju odmah objasni zašto da zakaže obilazak baš kod vas.',
    route: '/google-reklame-cena',
    routeLabel: 'Kada lokalna pretraga zatvara bolje od širokog reach-a',
  },
  {
    title: 'Vrtić koji prodaje premium program ili poseban pristup',
    text: 'Ako nudite Montessori, dvojezični program, manje grupe ili jači pedagoški pristup, nije poenta da privučete sve roditelje. Poenta je da privučete one kojima je baš to važno. Tu više rade trust, jasan program i ozbiljan sajt nego generička reklama.',
    route: '/izrada-wordpress-sajta-cena',
    routeLabel: 'Šta traži stranica koja mora da proda program, ne samo lokaciju',
  },
  {
    title: 'Vrtić koji još nema dovoljno lokalnog poverenja',
    text: 'Neki vrtići imaju lep prostor i dobar tim, ali ih roditelji još ne poznaju dovoljno. Tada prvo dižete recenzije, Google profil, svakodnevne prikaze i signal bezbednosti, a tek onda pojačavate kampanje. Bez toga marketing izgleda kao reklama, a ne kao dokaz poverenja.',
    route: '/industrije/lokalni-biznisi',
    routeLabel: 'Šta lokalni biznis mora da sredi pre jačih kampanja',
  },
  {
    title: 'Vrtić koji hoće stabilniji upis tokom cele godine',
    text: 'Ako se oslanjate samo na glavni sezonski talas, svako prazno mesto kasnije boli mnogo više. Tada marketing mora da radi i van špica: da hvata roditelje koji istražuju ranije, sele se ili traže promenu vrtića usred godine.',
    route: '/cene-digitalnog-marketinga',
    routeLabel: 'Kako da budžet i paket vežete za realan ritam upisa, ne samo za sezonu',
  },
]

const faqs = [
  {
    q: 'Koliki budžet treba privatnom vrtiću za marketing?',
    a: 'Za Google Ads u kombinaciji sa Instagram kampanjama, realan start je 200 do 400 evra mesečno za ad spend. Za vrtić sa jednom lokacijom to je obično dovoljno da pokrije lokalne pretrage i sezonske kampanje.',
  },
  {
    q: 'Kada je najbolje vreme da privatni vrtić počne sa reklamama?',
    a: 'Idealno 2-3 meseca pre glavnog upisnog perioda (mart-jun). Ali roditelji traže vrtić tokom cele godine, tako da kampanje imaju smisla i van sezone, naročito za popunjavanje mesta koja se oslobode.',
  },
  {
    q: 'Da li je za vrtić važniji Instagram ili Google?',
    a: 'Google hvata roditelje koji već aktivno traže vrtić i to su najkvalitetniji leadovi. Instagram gradi poverenje i želju kod roditelja koji se još informišu. Najbolji rezultat daje kombinacija oba kanala.',
  },
  {
    q: 'Kako merite uspeh kampanje za vrtić?',
    a: 'Pratimo cenu po zakazanom obilasku, cenu po upisu, broj upita mesečno i stopu konverzije sa sajta. Cilj nije samo dovesti posete, nego popuniti slobodna mesta kvalitetnim upisima.',
  },
  {
    q: 'Da li vrtiću treba sajt ako ima jak Instagram profil?',
    a: 'Da. Instagram je odličan za utisak, ali roditelj koji ozbiljno razmatra vrtić hoće da vidi program, cene, lokaciju i recenzije na jednom mestu. Sajt daje strukturu i ozbiljnost koju sam Instagram ne pruža.',
  },
]

const relatedLinks = [
  {
    to: '/google-reklame-cena',
    title: 'Google reklame cena',
    desc: 'Koliko košta Google Ads za lokalni biznis i kako izgleda budžet za vrtić koji traži nove upise.',
  },
  {
    to: '/instagram-reklame-cena',
    title: 'Instagram reklame cena',
    desc: 'Benchmark za Meta budžet, CPC i CPA pre nego što krenete da gradite prisutnost vrtića na Instagramu.',
  },
  {
    to: '/seo-optimizacija-cena',
    title: 'SEO optimizacija cena',
    desc: 'Za vrtiće koji hoće stabilniji organski priliv roditelja kroz mapu, lokalne pretrage i branded upite.',
  },
  {
    to: '/izrada-wordpress-sajta-cena',
    title: 'Izrada WordPress sajta cena',
    desc: 'Ako vrtić nema sajt ili je trenutni zastareo, ovde je realan okvir ulaganja za moderan web.',
  },
  {
    to: '/blog/google-ads-za-privatne-vrtice-cena-upisa-srbija-2026',
    title: 'Google Ads za privatne vrtiće',
    desc: 'Detaljan vodič: koliko košta Google reklama za vrtić, koji budžet ima smisla i kako meriti cenu po upisu.',
  },
  {
    to: '/blog/instagram-reklame-za-privatne-vrtice-cena-upisa-srbija-2026',
    title: 'Instagram reklame za privatne vrtiće',
    desc: 'Koliko koštaju Instagram reklame za vrtić, koje kampanje rade i kako meriti efikasnost po upisu.',
  },
]

export default function MarketingZaPrivateVrticePage() {
  usePageMeta()

  return (
    <div className="min-h-screen bg-page">
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 22% 20%, rgba(251,191,36,0.14) 0%, transparent 48%), radial-gradient(ellipse at 78% 78%, rgba(34,197,94,0.10) 0%, transparent 52%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 22% 20%, rgba(251,191,36,0.07) 0%, transparent 48%), radial-gradient(ellipse at 78% 78%, rgba(34,197,94,0.05) 0%, transparent 52%)' }} />
        </div>
        <div className="relative z-10 max-w-[860px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Industrija - privatni vrtići</span>
          <h1 className="text-[30px] md:text-[50px] font-medium leading-[1.08] tracking-[-1px] text-ink mb-5">
            Marketing za privatne vrtiće
            <br />
            <span className="text-ink-2">koji popunjava slobodna mesta tokom cele godine</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[700px] mx-auto mb-8">
            Privatni vrtić ne raste samo zato što je dobar. Raste kada ga roditelji pronađu u pravom trenutku, steknu poverenje pre obilaska i imaju kratak put do prvog kontakta. Pravimo sistem koji dovodi upise, ne samo preglede profila.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
              Besplatna analiza vrtića
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="#plan" className="inline-flex items-center gap-2 text-ink-2 text-[14px] font-medium h-11 px-6 rounded-full border border-edge hover:bg-tint transition-colors">
              Pogledajte plan
            </a>
          </div>
          <p className="text-[13px] text-ink-3 mt-5 max-w-[650px] mx-auto">
            Ako već testirate Google kampanje, pogledajte i <Link to="/blog/google-ads-za-privatne-vrtice-cena-upisa-srbija-2026" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Google Ads za privatne vrtiće</Link>. Za Instagram strategiju korisno je pročitati <Link to="/blog/instagram-reklame-za-privatne-vrtice-cena-upisa-srbija-2026" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Instagram reklame za vrtiće</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Zašto je marketing za privatni vrtić drugačiji</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[660px] mx-auto">
            Roditelj ne traži najjeftiniju opciju. Traži najsigurniju. Marketing za vrtić mora da gradi poverenje, a ne da prodaje. Razlika između punog i polupraznog vrtića često je samo vidljivost u pravom trenutku.
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
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Šta najčešće radi za privatne vrtiće</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[670px] mx-auto">
            Krećemo od kanala koji realno mogu da dovedu nove upise. Ne pravimo aktivnost radi statistike, nego marketing koji puni grupe kvalitetnim upisima.
          </p>
          <div className="space-y-6">
            {playbook.map((block) => (
              <div key={block.title} className="bg-panel rounded-[20px] border border-edge p-6 md:p-8">
                <h3 className="text-[20px] font-medium text-ink mb-3">{block.title}</h3>
                <p className="text-[15px] text-ink-2 leading-relaxed mb-4">{block.desc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <svg className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
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
            <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-3">Šta radi za popunu grupa, premium program i celogodišnji upis</h2>
            <p className="text-[15px] text-ink-2 leading-relaxed">
              Nije svakom privatnom vrtiću potreban isti marketing. Nekome je prioritet da popuni prazna mesta što pre, nekome da proda poseban program, a nekome da stabilizuje upis tokom cele godine. Kad to ne odvojite, marketing lako pravi buku, ali ne i zdravu popunjenost.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {enrollmentModes.map((item) => (
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
            Ako niste sigurni da li vrtić prvo treba da gura popunu grupa, premium program ili lokalno poverenje, pošaljite nam kratak opis kroz <Link to="/kontakt" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">kontakt formu</Link> i reći ćemo vam šta ima najviše smisla da ide prvo.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[920px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <div className="max-w-[720px] mx-auto text-center mb-8">
            <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-3">Prvih 30 dana bez prazne priče</h2>
            <p className="text-[15px] text-ink-2 leading-relaxed">
              Cilj prvog meseca nije samo da vrtić dobije više pratilaca. Cilj je da brzo vidimo koji kanali, poruke i periodi daju najbolji odnos troška i novih upisa.
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
        <div className="max-w-[780px] mx-auto bg-gradient-to-br from-yellow-500/[0.10] to-green-500/[0.08] rounded-[20px] border border-yellow-500/[0.14] p-6 md:p-8 text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-3">Hoćete da vidimo gde vrtić trenutno gubi potencijalne upise?</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed max-w-[620px] mx-auto mb-5">
            Pregledamo Google profil, Instagram, sajt, način prijave i ono što roditelji vide kada vas prvi put pronađu. Dobijate konkretan spisak koraka za više upisa i bolju popunjenost grupa.
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
          <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-8 text-center">Srodne teme za privatne vrtiće</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedLinks.map((item) => (
              <Link key={item.to} to={item.to} className="bg-panel rounded-[18px] border border-edge p-5 hover:border-ink-4 transition-colors">
                <div className="text-[16px] font-medium text-ink mb-2">{item.title}</div>
                <p className="text-[14px] text-ink-2 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-3 text-[13px]">
            <Link to="/marketing-za-privatne-klinike" className="text-ink-3 hover:text-ink transition-colors">Marketing za privatne klinike</Link>
            <Link to="/marketing-za-stomatologe" className="text-ink-3 hover:text-ink transition-colors">Marketing za stomatologe</Link>
            <Link to="/marketing-za-kozmeticke-salone" className="text-ink-3 hover:text-ink transition-colors">Marketing za kozmetičke salone</Link>
            <Link to="/marketing-za-teretane" className="text-ink-3 hover:text-ink transition-colors">Marketing za teretane</Link>
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
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Dobar vrtić zaslužuje da ga roditelji lakše pronađu</h2>
          <p className="text-[15px] text-ink-2 mb-6">
            Ako hoćete pune grupe bez oslanjanja samo na preporuke, javite se. Složićemo plan za vaš grad, tip programa i kapacitet koji imate.
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
