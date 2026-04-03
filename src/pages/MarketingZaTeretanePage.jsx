import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  {
    icon: '01',
    title: 'Januar i septembar pune salu, ostalo visi',
    desc: 'Sezonski talasi dovode ljude koji se upisuju i odustaju za mesec dana. Bez kampanje koja drži tempo celu godinu, prihod oscilira, a kapacitet zjapi praznim terminima.',
  },
  {
    icon: '02',
    title: 'Član bira po blizini i prvom utisku',
    desc: 'Većina ljudi traži teretanu ili studio u krugu od tri kilometra. Ako vas Google profil nema sveže slike, radno vreme i recenzije, idu na sledeći rezultat.',
  },
  {
    icon: '03',
    title: 'Upis nije prodaja, već početak odnosa',
    desc: 'Novi član donosi jednu mesečnu članarinu. Pravi prihod dolazi kada ostane 12 i više meseci. Marketing koji hvata samo nove upise a zanemaruje retenciju troši budžet uzalud.',
  },
  {
    icon: '04',
    title: 'Previše teretana, premalo razlike',
    desc: 'Svaka sala nudi treninge, spravu i grupne časove. Bez jasne poruke šta vas izdvaja — programa, trenera, atmosfere ili rezultata — nadmećete se samo cenom.',
  },
  {
    icon: '05',
    title: 'Instagram lajk nije jednak probnom treningu',
    desc: 'Video transformacija može da dobije hiljade pregleda, ali bez jasnog poziva na besplatan trening ili ponudu za upis, publika se divi bez da ikada prošetala kroz vrata.',
  },
  {
    icon: '06',
    title: 'Grupni treninzi i personalni traže različit pristup',
    desc: 'Član koji traži grupni pilates i onaj kome treba personalni trener nemaju istu motivaciju ni budžet. Jedna kampanja za sve znači da nijedna ne pogađa tačno.',
  },
]

const playbook = [
  {
    title: 'Google Business i lokalni SEO za ljude spremne da se upišu',
    desc: 'Kada neko traži teretanu u svom kraju, odluka često pada u prvih pet sekundi na mapi. Profil sa svežim slikama, recenzijama i radnim vremenom zatvara odluku pre nego što klikne na sajt.',
    items: [
      'Kompletan Google Business profil sa fotkama sale, opreme i trenera',
      'Lokalni SEO sadržaj za grad, naselje i tip treninga koji se traži',
      'Sistem za redovno prikupljanje recenzija od aktivnih članova',
      'Click-to-call i link za probni trening direktno iz pretrage',
    ],
  },
  {
    title: 'Instagram i Meta kampanje za upis i reupis',
    desc: 'Video rezultata, atmosfere i zajednice privlači ljude koji još nisu odlučili. Kampanja koja pogađa pravu publiku sa pravom ponudom pretvara scroll u probni trening.',
    items: [
      'Kreativa koja pokazuje realne transformacije i energiju sale',
      'Kampanje za probni trening, besplatan prvi dolazak ili starter paket',
      'Retargeting za ljude koji su posetili sajt ili profil ali se nisu upisali',
      'Sezonske kampanje za januar, septembar, leto i praznike',
    ],
  },
  {
    title: 'Sajt ili landing koji pretvara zainteresovanog u člana',
    desc: 'Posetilac ne sme da pogađa gde je cena, kakav je raspored i kako se prijavi. Stranica mora da skrati put od interesovanja do upisa ili probnog treninga.',
    items: [
      'Jasno prikazan cenovnik, vrste članarina i raspored grupnih treninga',
      'Forma ili dugme za zakazivanje probnog treninga iznad prevoja',
      'Slike i snimci sale, opreme i trenera koji grade poverenje',
      'Trust elementi: broj članova, recenzije, lokacija i iskustvo trenera',
    ],
  },
  {
    title: 'Retencija i reupis umesto večnog lova na nove članove',
    desc: 'Najjeftiniji novi član je onaj koji već trenira. Email i SMS podsecanja, loyalty ponude i reaktivacione kampanje vraćaju ljude koji su pauzirali ili odustali.',
    items: [
      'Automatizovani email za članove kojima ističe članarinu za 7 dana',
      'Win-back ponude za bivše članove posle 30, 60 i 90 dana neaktivnosti',
      'Referral program koji nagrađuje postojeće članove za preporuke',
      'Praćenje churn razloga i prilagođavanje ponude da spreči osipanje',
    ],
  },
]

const firstMonth = [
  {
    title: 'Nedelja 1',
    text: 'Analiza lokacije, ciljne publike, recenzija, cenovnika i načina na koji ljudi trenutno saznaju za vas. Biramo gde su najveće rupe.',
  },
  {
    title: 'Nedelja 2',
    text: 'Postavljamo Google Business, lokalne signale, landing za probni trening i kreativu za prve Meta kampanje.',
  },
  {
    title: 'Nedelja 3',
    text: 'Testiramo različite publike, ponude i kreative. Gasimo ono što ne donosi upite, pojačavamo ono što radi.',
  },
  {
    title: 'Nedelja 4',
    text: 'Merimo cenu po upisu, kvalitet dolazaka i donosimo plan za naredna dva meseca sa budžetom koji ima smisla.',
  },
]

const gymModes = [
  {
    title: 'Teretana koja hoće više probnih treninga',
    text: 'Ako vam je najveći problem da ljudi ne naprave prvi korak, marketing mora da skine trenje. Tu rade jasna ponuda za probni dolazak, lokalna vidljivost i poruka koja čoveku odmah objasni zašto da uđe baš u vašu salu, a ne da nastavi da skroluje.',
    route: '/google-reklame-cena',
    routeLabel: 'Kada lokalna pretraga zatvara bolje od širokog reach-a',
  },
  {
    title: 'Sala koja želi više standardnih članarina',
    text: 'Ovde nije dovoljno samo dovesti ljude na prvi trening. Treba dovesti publiku kojoj odgovaraju lokacija, raspored, atmosfera i cenovni okvir. Ako to ne filtrirate unapred, dobijate mnogo upita, a malo stvarno dobrih upisa.',
    route: '/cene-digitalnog-marketinga',
    routeLabel: 'Kako da paket i budžet pratite po kvalitetu upisa, ne po aktivnosti',
  },
  {
    title: 'Studio koji prodaje premium coaching ili manje grupe',
    text: 'Kad je usluga skuplja, nije poenta da oglasi dovuku što više ljudi. Poenta je da dovedu pravu vrstu člana. Tu više rade trust, rezultati, profil trenera i precizna poruka nego generičan fitnes content za svakoga.',
    route: '/instagram-reklame-cena',
    routeLabel: 'Kako Meta kampanje izgledaju kada jurite kvalitetniji lead, ne samo veći broj DM poruka',
  },
  {
    title: 'Teretana koja ima upise, ali gubi članove prebrzo',
    text: 'Ako churn jede sav trud, problem više nije samo akvizicija. Problem je što nema dovoljno dobrog onboarding-a, follow-up-a i razloga da član ostane posle prvog talasa motivacije. Tada marketing mora da pomogne i retenciji, ne samo upisu.',
    route: '/industrije/lokalni-biznisi',
    routeLabel: 'Šta lokalni biznis mora da sredi kada ga rast preraste',
  },
]

const faqs = [
  {
    q: 'Da li teretani više odgovara Google ili Instagram marketing?',
    a: 'Google hvata ljude koji aktivno traže teretanu u svom kraju i spremni su da se upišu. Instagram gradi želju, pokazuje atmosferu i vraća ljude koji razmišljaju. Najbolji rezultat dolazi kada oba kanala rade zajedno.',
  },
  {
    q: 'Koliko brzo mogu da ocekujem nove članove?',
    a: 'Ako su ponuda i landing dobro postavljeni, prvi upiti za probni trening mogu doći već u prvoj nedelji kampanje. Stabilnija slika o ceni po članu i kvalitetu upisa obično se vidi kroz 4 do 8 nedelja.',
  },
  {
    q: 'Koji budžet je realan za početak?',
    a: 'Za Meta kampanje, realan start je 300 do 600 evra mesecno za ad spend, plus fee za vodjenje. Za Google Ads u fitnes industriji, sličan raspon može dati rezultate u lokalnom krugu.',
  },
  {
    q: 'Kako da zadržim članove, ne samo da upisem nove?',
    a: 'Retencija počinje od onboarding iskustva: prvi trening, follow-up poruka, raspored. Marketing pomaže kroz automatizovane email/SMS sekvence, loyalty ponude i win-back kampanje za neaktivne članove.',
  },
  {
    q: 'Da li radite i za male studije, ne samo za velike sale?',
    a: 'Da. Pilates studio, yoga sala, CrossFit box i boutique gym zahtevaju prilagođen pristup jer žive od manjeg broja premium članova, ali principi lokalnog marketinga su isti.',
  },
]

const relatedLinks = [
  {
    to: '/blog/instagram-reklame-za-teretane-cena-upisa-srbija-2026',
    title: 'Instagram reklame za teretane: cena upisa',
    desc: 'Koliki budžet ima smisla za Instagram kampanje teretane, koje kreative donose upise i kako meriti cenu člana.',
  },
  {
    to: '/blog/google-ads-za-teretane-i-fitnes-studije-cena-leada-srbija-2026',
    title: 'Google Ads za teretane: cena lead-a',
    desc: 'Koliko košta da uhvatite ljude koji traže teretanu u svom gradu kroz placenu pretragu.',
  },
  {
    to: '/seo-optimizacija-cena',
    title: 'SEO optimizacija cena',
    desc: 'Za sale i studije koji hoće organski priliv kroz mapu, lokalne usluge i branded pretrage.',
  },
  {
    to: '/izrada-wordpress-sajta-cena',
    title: 'Izrada WordPress sajta cena',
    desc: 'Ako vam trenutni sajt koci upise jer nema jasan cenovnik, raspored i poziv na akciju.',
  },
  {
    to: '/društvene-mreže',
    title: 'Društvene mreže',
    desc: 'Siri pregled contenta, community rada i placenih kampanja za brendove na društvenim mrežama.',
  },
  {
    to: '/blog/google-ads-za-teretane-i-fitnes-studije-cena-leada-srbija-2026',
    title: 'Google Ads za teretane i fitnes studije',
    desc: 'Detaljan vodič: koliko košta Google reklama za teretanu, koji budžet ima smisla i kako meriti cenu po novom članu.',
  },
]

export default function MarketingZaTeretanePage() {
  usePageMeta()

  return (
    <div className="min-h-screen bg-page">
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 22% 20%, rgba(34,197,94,0.14) 0%, transparent 48%), radial-gradient(ellipse at 78% 78%, rgba(59,130,246,0.10) 0%, transparent 52%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 22% 20%, rgba(34,197,94,0.07) 0%, transparent 48%), radial-gradient(ellipse at 78% 78%, rgba(59,130,246,0.05) 0%, transparent 52%)' }} />
        </div>
        <div className="relative z-10 max-w-[860px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Industrija - teretane i fitnes studiji</span>
          <h1 className="text-[30px] md:text-[50px] font-medium leading-[1.08] tracking-[-1px] text-ink mb-5">
            Marketing za teretane
            <br />
            <span className="text-ink-2">koji puni salu i zadržava članove</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[700px] mx-auto mb-8">
            Teretana ne raste zato što snizi cenu članarinu ili objavi još jedan video treninga. Raste kada napravi lokalnu vidljivost, jasnu ponudu i sistem koji pretvara prolaznike u članove koji ostaju.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
              Besplatna analiza sale
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="#plan" className="inline-flex items-center gap-2 text-ink-2 text-[14px] font-medium h-11 px-6 rounded-full border border-edge hover:bg-tint transition-colors">
              Pogledajte plan
            </a>
          </div>
          <p className="text-[13px] text-ink-3 mt-5 max-w-[650px] mx-auto">
            Ako već testirate Meta kampanje, pogledajte i <Link to="/instagram-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Instagram reklame cena</Link>. Za lokalnu pretragu korisno je videti <Link to="/google-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Google reklame cena</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Zašto je marketing za teretanu drugačiji</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[660px] mx-auto">
            Fitnes industrija ne prodaje proizvod koji se kupi jednom. Prodaje naviku, zajednicu i rezultat. Marketing mora da radi na oba kraja: da dovede novog člana i da ga zadrži.
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
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Šta najčešće radi za teretane i fitnes studije</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[670px] mx-auto">
            Krećemo od kanala i aktivnosti koji realno mogu da donesu više upisa i duže zadržavanje članova. Ne pravimo aktivnost radi aktivnosti, nego marketing koji puni salu.
          </p>
          <div className="space-y-6">
            {playbook.map((block) => (
              <div key={block.title} className="bg-panel rounded-[20px] border border-edge p-6 md:p-8">
                <h3 className="text-[20px] font-medium text-ink mb-3">{block.title}</h3>
                <p className="text-[15px] text-ink-2 leading-relaxed mb-4">{block.desc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
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
            <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-3">Šta radi za probni trening, članarinu i premium coaching</h2>
            <p className="text-[15px] text-ink-2 leading-relaxed">
              Nije svakoj teretani potreban isti marketing. Nekome je prioritet da čovek samo dođe prvi put, nekome da pretvori probni trening u članarinu, a nekome da proda skuplji coaching ili manje grupe. Kad to ne odvojite, marketing lako pravi buku, ali ne i zdrav rast.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gymModes.map((item) => (
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
            Ako niste sigurni da li sala prvo treba da gura probni trening, standardne članarine, premium coaching ili retenciju, pošaljite nam kratak opis kroz <Link to="/kontakt" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">kontakt formu</Link> i reći ćemo vam šta ima najviše smisla da ide prvo.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[920px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <div className="max-w-[720px] mx-auto text-center mb-8">
            <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-3">Prvih 30 dana bez prazne priče</h2>
            <p className="text-[15px] text-ink-2 leading-relaxed">
              Cilj prvog meseca nije da sala samo izgleda aktivnije na mreži. Cilj je da brzo vidimo koji kanali, ponude i publike donose upise po ceni koja ima smisla.
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
        <div className="max-w-[780px] mx-auto bg-gradient-to-br from-emerald-500/[0.10] to-blue-500/[0.08] rounded-[20px] border border-emerald-500/[0.14] p-6 md:p-8 text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-3">Hoćete da vidimo gde vaša sala trenutno gubi članove?</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed max-w-[620px] mx-auto mb-5">
            Pregledamo Google profil, Instagram, sajt, ponudu i način upisa. Dobijate konkretan spisak sledećih koraka za više članova i manje praznih termina.
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
          <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-8 text-center">Srodne teme za teretane i fitnes studije</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedLinks.map((item) => (
              <Link key={item.to} to={item.to} className="bg-panel rounded-[18px] border border-edge p-5 hover:border-ink-4 transition-colors">
                <div className="text-[16px] font-medium text-ink mb-2">{item.title}</div>
                <p className="text-[14px] text-ink-2 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-3 text-[13px]">
            <Link to="/marketing-za-kozmeticke-salone" className="text-ink-3 hover:text-ink transition-colors">Marketing za kozmetičke salone</Link>
            <Link to="/marketing-za-frizerske-salone" className="text-ink-3 hover:text-ink transition-colors">Marketing za frizerske salone</Link>
            <Link to="/marketing-za-stomatologe" className="text-ink-3 hover:text-ink transition-colors">Marketing za stomatologe</Link>
            <Link to="/marketing-za-restorane" className="text-ink-3 hover:text-ink transition-colors">Marketing za restorane</Link>
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
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Dobra sala zaslužuje da je članovi lakše pronađu i ostanu duže</h2>
          <p className="text-[15px] text-ink-2 mb-6">
            Ako hoćete više upisa bez bacanja budžeta na prazne klikove, javite se. Složićemo plan za vas grad, tip sale i kapacitet tima.
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
