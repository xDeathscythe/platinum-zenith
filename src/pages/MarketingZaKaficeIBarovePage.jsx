import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  {
    icon: '01',
    title: 'Kafic na svakom cosku, a gosti biraju po navici',
    desc: 'U prosecnom srpskom gradu imate desetine kafica u radijusu od 500 metara. Vecina ljudi ide tamo gde su navikli. Ako vas ne primete ili nemaju razlog da probaju, bice prazni stolovi dok komsinica ima red.',
  },
  {
    icon: '02',
    title: 'Instagram profil postoji, ali ne donosi nove goste',
    desc: 'Svaki kafic ima Instagram sa slikama kafe i enterijera. Problem je sto pratilac ne znaci gost. Bez jasne ponude, dogadjaja ili poziva da dodje, profil je samo online brosura.',
  },
  {
    icon: '03',
    title: 'Google mapa vas ne prikazuje kad neko traži kafic u blizini',
    desc: 'Vecina gostiju otvori Google Maps i traži kafic u blizini. Ako vas profil nema slike, radno vreme, recenzije i tačnu lokaciju, algoritam vas gurne ispod konkurencije.',
  },
  {
    icon: '04',
    title: 'Vikend dogadjaji pune lokal, ali ponedeljak do cetvrtak zjapi prazan',
    desc: 'Svaki bar zna problem praznih radnih dana. Bez redovne komunikacije sa lokalnom publikom, nemate nacin da popunite lokal kad nije vikend ili praznik.',
  },
  {
    icon: '05',
    title: 'Recenzije prave ili lome reputaciju, a niko ih ne prikuplja sistematski',
    desc: 'Jedan negativan komentar o sporoj usluzi može da odbije 30 potencijalnih gostiju. A 50 zadovoljnih gostiju nece sami ostaviti recenziju ako ih ne zamolite.',
  },
  {
    icon: '06',
    title: 'Placeni oglasi deluju skupo za kafic sa maržom na kafu',
    desc: 'Kad je prosecna potrosnja po gostu 400-800 dinara, svaki euro za reklamu mora da se vrati kroz konkretne posete. Bez preciznog lokalnog targetiranja, novac odlazi na klikove iz drugog grada.',
  },
]

const playbook = [
  {
    title: 'Google Business profil koji vas stavlja na mapu',
    desc: 'Kad neko otvori Google Maps i traži kafic, koktejl bar ili kafanu u svom kraju, vas profil mora da bude medju prva tri rezultata. To nije slucajnost vec optimizacija.',
    items: [
      'Kompletno popunjen profil: kategorija, radno vreme, meni, slike enterijera i pica',
      'Redovno prikupljanje recenzija od zadovoljnih gostiju sa QR kodom ili linkom',
      'Odgovaranje na sve recenzije, pozitivne i negativne, u roku od 24 sata',
      'Postovi na Google profilu o dogadjajima, novim picima i sezonskim ponudama',
    ],
  },
  {
    title: 'Instagram i Meta kampanje za lokalni doseg',
    desc: 'Instagram je prirodni kanal za kafica i barove jer je vizuelan. Ali organskog dosega skoro nema. Lokalno targetirani oglasi sa pravim kreativom donose nove goste po konkretnoj ceni.',
    items: [
      'Radijus targetiranje: 1-5km oko lokacije, ljudi koji zive ili rade u blizini',
      'Kreativ koji pokazuje atmosferu, ne samo proizvod: vecernji ambijent, drustvo, dogadjaj',
      'Promocije za slabije dane: sreda happy hour, cetvrtak quiz veće, ponedeljak specijalna kafa',
      'Retargeting na ljude koji su interagovali sa profilom ali još nisu dosli',
    ],
  },
  {
    title: 'Dogadjaji i sadržaj koji daju razlog za dolazak',
    desc: 'Kafic bez dogadjaja je još jedno mesto za kafu. Kafic sa quiz vecerom, degustacijom vina ili akusticnim nastupom ima razlog koji privlaci ljude da dodju bas kod vas.',
    items: [
      'Kalendar dogadjaja koji se promovise kroz Google, Instagram i lokalne grupe',
      'Saradnja sa lokalnim brendovima, muzičarima i organizatorima za zajednicke evente',
      'Sezonske kampanje: letnja basta otvaranje, zimska karta pica, nova godina, sportski prenosi',
      'Email ili Viber lista za redovne goste sa ekskluzivnim ponudama i najava dogadjaja',
    ],
  },
  {
    title: 'Sajt ili landing stranica za rezervacije i meni',
    desc: 'Ne treba vam sajt od 20 stranica. Treba vam jedno mesto gde gost za 10 sekundi vidi meni, radno vreme, lokaciju i može da rezervise sto ili se javi na WhatsApp.',
    items: [
      'Jedna stranica sa menijem, cenama, lokacijom i dugmetom za rezervaciju',
      'Mobilno prilagodjen dizajn jer 90% gostiju gleda sa telefona',
      'Link ka Google Maps, Instagram profilu i kontakt broju na vidljivom mestu',
      'Optimizacija za lokalne pretrage: kafic + ime grada ili naselja',
    ],
  },
]

const firstMonth = [
  {
    title: 'Nedelja 1',
    text: 'Analiza Google profila, recenzija, Instagram prisustva i konkurencije u vasem kraju. Identifikujemo šta radi, šta ne radi i gde je najbrza prilika.',
  },
  {
    title: 'Nedelja 2',
    text: 'Optimizacija Google Business profila, postavljanje sistema za prikupljanje recenzija i priprema prvih Instagram kampanja za lokalni doseg.',
  },
  {
    title: 'Nedelja 3',
    text: 'Pokretanje Meta oglasa sa lokalnim targetiranjem. Testiranje razlicitih kreativa: atmosfera, dogadjaji, sezonske ponude. Pracenje poseta i interakcija.',
  },
  {
    title: 'Nedelja 4',
    text: 'Merimo cenu po novom gostu, analiziramo koje kampanje su donele ljude u lokal i pravimo plan za sledeća dva meseca sa budzeetom koji ima smisla za vasu marzu.',
  },
]

const faqs = [
  {
    q: 'Da li se marketing isplati za kafic sa prosecnom potrosnjom od 500 dinara?',
    a: 'Jedan novi redovni gost koji dodje tri puta nedeljno donese 6.000 do 8.000 dinara mesecno. Ako kampanja od 100 evra donese 20 novih redovnih gostiju, to je 120.000 do 160.000 dinara mesecnog prihoda. Marketing se ne meri po jednoj kafi vec po vrednosti redovnog gosta.',
  },
  {
    q: 'Koji kanal je najvazniji za lokalni kafic ili bar?',
    a: 'Google Business profil je najvazniji jer hvata ljude koji aktivno traže kafic u blizini. Instagram je drugi jer gradi svest i prikazuje atmosferu. Idealno je koristiti oba jer pokrivaju razlicite faze odluke.',
  },
  {
    q: 'Koliko vremena treba da se vide rezultati?',
    a: 'Google Business optimizacija pocinje da daje rezultate za 2 do 4 nedelje. Instagram kampanje mogu doneti prve nove goste vec u prvoj nedelji ako je kreativ dobar i targetiranje precizno.',
  },
  {
    q: 'Nemamo budžet za veliki marketing, šta je minimum?',
    a: 'Google Business optimizacija je besplatna i daje najveci povrat. Za Instagram reklame, 50 do 100 evra mesecno za lokalni kafic može biti dovoljno da testirate šta radi. Pocnite sa jednim kanalom i sirite kad vidite rezultat.',
  },
  {
    q: 'Da li nam treba sajt ako imamo Instagram i Google profil?',
    a: 'Za pocetak ne mora. Ali kad zelite da prikazete meni, dogadjaje i primate rezervacije na jednom mestu, jednostavna landing stranica znacajno pomaze. Posebno ako imate dogadjaje ili specijalne ponude koje se menjaju.',
  },
]

const relatedLinks = [
  {
    to: '/marketing-za-restorane',
    title: 'Marketing za restorane',
    desc: 'Slicne strategije za ugostiteljstvo sa fokusom na rezervacije, dostavu i popunjenost stolova.',
  },
  {
    to: '/marketing-za-hotele-i-smestaj',
    title: 'Marketing za hotele i smestaj',
    desc: 'Lokalni marketing i online prisustvo za smestajne kapacitete koji zavise od sezonske potraznje.',
  },
  {
    to: '/blog/lokalni-seo-kako-se-pojaviti-prvi',
    title: 'Lokalni SEO: kako se pojaviti prvi na Google-u',
    desc: 'Detaljni vodic za Google Business optimizaciju i lokalne pretrage koji vazi za svaki tip lokala.',
  },
  {
    to: '/koliko-kosta-facebook-reklama',
    title: 'Koliko kosta Facebook reklama u Srbiji',
    desc: 'Pregled cena i ocekivanih rezultata za Meta oglase po industrijama, ukljucujuci ugostiteljstvo.',
  },
  {
    to: '/google-reklame-cena',
    title: 'Google reklame cena',
    desc: 'Siri pregled Google Ads cena i modela naplate za razlicite tipove biznisa u Srbiji.',
  },
  {
    to: '/instagram-reklame-cena',
    title: 'Instagram reklame cena',
    desc: 'Koliko kosta Instagram kampanja i kakve rezultate mozete da ocekujete za lokalni biznis.',
  },
]

export default function MarketingZaKaficeIBarovePage() {
  usePageMeta()

  return (
    <div className="min-h-screen bg-page">
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 22% 20%, rgba(245,158,11,0.12) 0%, transparent 48%), radial-gradient(ellipse at 78% 78%, rgba(168,85,247,0.10) 0%, transparent 52%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 22% 20%, rgba(245,158,11,0.06) 0%, transparent 48%), radial-gradient(ellipse at 78% 78%, rgba(168,85,247,0.05) 0%, transparent 52%)' }} />
        </div>
        <div className="relative z-10 max-w-[860px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Industrija - ugostiteljstvo</span>
          <h1 className="text-[30px] md:text-[50px] font-medium leading-[1.08] tracking-[-1px] text-ink mb-5">
            Marketing za kafice i barove
            <br />
            <span className="text-ink-2">koji puni stolove, ne samo Instagram feed</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[700px] mx-auto mb-8">
            Lep enterijer i dobra kafa nisu dovoljni kad na svakom cosku postoji konkurencija. Kafici i barovi koji rastu koriste Google mapu, lokalne kampanje i dogadjaje da pretvore prolaznike u redovne goste.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
              Besplatna analiza lokala
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="#plan" className="inline-flex items-center gap-2 text-ink-2 text-[14px] font-medium h-11 px-6 rounded-full border border-edge hover:bg-tint transition-colors">
              Pogledajte plan
            </a>
          </div>
          <p className="text-[13px] text-ink-3 mt-5 max-w-[650px] mx-auto">
            Za pregled cena po kanalu, pogledajte <Link to="/google-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Google reklame cena</Link> i <Link to="/instagram-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Instagram reklame cena</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Zašto je marketing za kafica i barove drugaciji</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[660px] mx-auto">
            Kafic ne prodaje proizvod koji neko traži online i narucuje kuci. Prodaje iskustvo, atmosferu i naviku. Marketing mora da privuce coveka da fizicki udje kroz vrata i da se vrati opet.
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
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Šta najčešće radi za kafice, barove i kafane</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[670px] mx-auto">
            Krecemo od kanala koji donose rezultat za lokalni ugostiteljski objekat bez velikog budžeta. Fokus je na vidljivost u kraju, atmosferu koja privlaci i sistem koji vraca goste.
          </p>
          <div className="space-y-6">
            {playbook.map((block) => (
              <div key={block.title} className="bg-panel rounded-[20px] border border-edge p-6 md:p-8">
                <h3 className="text-[20px] font-medium text-ink mb-3">{block.title}</h3>
                <p className="text-[15px] text-ink-2 leading-relaxed mb-4">{block.desc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
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
              Cilj prvog meseca je da vidimo koji kanali i ponude donose ljude u lokal. Ne merimo lajkove vec stolove koji su popunjeni u utorak popodne.
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
            Ako zelite siri pregled ulaganja po kanalu, pogledajte <Link to="/koliko-kosta-facebook-reklama" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">koliko kosta Facebook reklama</Link>, <Link to="/instagram-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Instagram reklame cena</Link> i <Link to="/seo-optimizacija-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">SEO optimizacija cena</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[780px] mx-auto bg-gradient-to-br from-amber-500/[0.10] to-orange-500/[0.08] rounded-[20px] border border-amber-500/[0.14] p-6 md:p-8 text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-3">Hocete da vidimo zašto komsinica ima pun lokal, a vas ne?</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed max-w-[620px] mx-auto mb-5">
            Pregledamo Google profil, recenzije, Instagram prisustvo i lokalni SEO vaseg kafića. Dobijate konkretan spisak koraka koji donose više gostiju bez velikog ulaganja.
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
          <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-8 text-center">Srodne teme za ugostitelje</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedLinks.map((item) => (
              <Link key={item.to} to={item.to} className="bg-panel rounded-[18px] border border-edge p-5 hover:border-ink-4 transition-colors">
                <div className="text-[16px] font-medium text-ink mb-2">{item.title}</div>
                <p className="text-[14px] text-ink-2 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-3 text-[13px]">
            <Link to="/marketing-za-restorane" className="text-ink-3 hover:text-ink transition-colors">Marketing za restorane</Link>
            <Link to="/marketing-za-hotele-i-smestaj" className="text-ink-3 hover:text-ink transition-colors">Marketing za hotele i smestaj</Link>
            <Link to="/marketing-za-frizerske-salone" className="text-ink-3 hover:text-ink transition-colors">Marketing za frizerske salone</Link>
            <Link to="/marketing-za-teretane" className="text-ink-3 hover:text-ink transition-colors">Marketing za teretane</Link>
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
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Dobar kafic zasluzuje pune stolove svaki dan, ne samo vikendom</h2>
          <p className="text-[15px] text-ink-2 mb-6">
            Ako hocete više gostiju bez bacanja para na reklame koje ne donose ljude u lokal, javite se. Slozicemo plan za vas tip lokala, lokaciju i budžet.
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
