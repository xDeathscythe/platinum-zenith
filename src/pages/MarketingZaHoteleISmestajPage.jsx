import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  {
    icon: '01',
    title: 'Booking i Airbnb uzimaju proviziju, a vi zavisite od njih',
    desc: 'Platforma donosi goste ali naplacuje 15 do 25 posto po rezervaciji. Dok nemate direktne rezervacije, prihod zavisi od necijeg algoritma koji mozete samo da gledate.',
  },
  {
    icon: '02',
    title: 'Sezona traje tri meseca, a fiksni troskovi dvanaest',
    desc: 'Leto ili zimski praznici pune kapacitet, ali od oktobra do aprila popunjenost pada ispod polovine. Bez strategije za van sezone, kasni se sa platama i odrzavanjem.',
  },
  {
    icon: '03',
    title: 'Gost bira za tri klika i poredi vas sa dvadeset objekata',
    desc: 'Cenu, slike, recenzije i lokaciju gleda uporedo. Ako vas objekat nema sveze fotografije, jasnu ponudu i dovoljno pozitivnih utisaka, prelazi na sledeci bez razmisljanja.',
  },
  {
    icon: '04',
    title: 'Google mapa odlucuje pre nego sto gost otvori sajt',
    desc: 'Vecina putnika trazi smestaj direktno na mapi. Ako vas Google Business profil nema tacne podatke, slike soba i odgovore na recenzije, niste ni u izboru.',
  },
  {
    icon: '05',
    title: 'Strani gosti traze na engleskom, a sajt je samo na srpskom',
    desc: 'Srbija privlaci sve vise stranih turista, narocito za gradski turizam i banje. Objekat bez engleske verzije sajta i sadrzaja gubi ceo taj segment.',
  },
  {
    icon: '06',
    title: 'Instagram slike sobe ne znace rezervaciju',
    desc: 'Lepa fotka dobije lajkove, ali ako nema link za direktnu rezervaciju, cenu i dostupnost, publika skroluje dalje i rezervise na platformi gde moze da zavrsi u dva koraka.',
  },
]

const playbook = [
  {
    title: 'Google Business i lokalni SEO za direktne rezervacije',
    desc: 'Kada gost trazi smestaj u vasem gradu ili na vasoj planini, Google mapa je prvi filter. Profil koji izgleda aktivno, ima sveze slike i dobre recenzije pretvara pretragu u poziv ili rezervaciju bez posrednika.',
    items: [
      'Kompletan Google Business profil sa slikama soba, sadrzaja, okoline i cenovnikom',
      'Lokalni SEO sadrzaj za destinaciju, tip smestaja i aktivnosti u blizini',
      'Sistem za prikupljanje recenzija od gostiju posle boravka',
      'Direktan link za rezervaciju ili poziv iz pretrage bez odlaska na Booking',
    ],
  },
  {
    title: 'Placene kampanje za popunjavanje van sezone',
    desc: 'Sezona se sama popuni. Problem je oktobar, novembar, mart. Ciljane Google i Meta kampanje za vikend pakete, poslovne goste, wellness ponude i dogadjaje popunjavaju praznine koje sezona ne pokriva.',
    items: [
      'Google Ads kampanje za kljucne pretrage: smestaj + destinacija + period',
      'Meta kampanje sa vizuelnim kreativama za vikend pakete i specijalne ponude',
      'Remarketing za posetioce sajta koji nisu zavrsili rezervaciju',
      'Sezonske kampanje prilagodjene kalendaru dogadjaja u regionu',
    ],
  },
  {
    title: 'Sajt koji pretvara posetioca u direktnu rezervaciju',
    desc: 'Svaki klik izmedju interesovanja i rezervacije smanjuje sanse da gost zavrsi kod vas. Sajt mora da pokaze sobu, cenu i raspolozivost u tri skrola i da omoguci rezervaciju bez da gost ikada ode na OTA platformu.',
    items: [
      'Galerija soba sa cenama, kapacitetom i raspolozivoscu na jednom mestu',
      'Booking engine ili forma za direktnu rezervaciju iznad prevoja',
      'Stranica za svaki tip smestaja, paket i specijalnu ponudu posebno',
      'Visejezicni sadrzaj za strane goste sa prilagodjenim SEO meta podacima',
    ],
  },
  {
    title: 'Sadrzaj i reputacija koji grade poverenje pre dolaska',
    desc: 'Gost ne moze da proba sobu pre nego sto plati. Odlucuje na osnovu slika, recenzija, opisa iskustva i utiska da objekat vodi neko kome je stalo. Sadrzaj gradi to poverenje mesecima pre prve rezervacije.',
    items: [
      'Blog sadrzaj o destinaciji, aktivnostima i dogadjajima u okolini',
      'Video ture soba, restorana, spa sadrzaja i okoline',
      'Aktivno upravljanje recenzijama na Google, Booking i TripAdvisor',
      'Email kampanje za bivse goste sa ponudama za povratak i preporuke',
    ],
  },
]

const firstMonth = [
  {
    title: 'Nedelja 1',
    text: 'Analiza trenutne popunjenosti, izvora rezervacija, sezonskih obrazaca i prisutnosti na Google, Booking i drustvenim mrezama. Identifikujemo gde se gube direktne rezervacije.',
  },
  {
    title: 'Nedelja 2',
    text: 'Optimizacija Google Business profila, postavljanje landing stranica za kljucne pakete i pokretanje prvih Google Ads kampanja za direktne pretrage.',
  },
  {
    title: 'Nedelja 3',
    text: 'Testiranje Meta kampanja za vikend i van-sezonske ponude. Pokrecemo remarketing za posetioce sajta koji nisu rezervisali.',
  },
  {
    title: 'Nedelja 4',
    text: 'Merimo cenu po rezervaciji, udeo direktnih naspram OTA rezervacija i pravimo plan za naredna dva meseca sa fokusom na najslabije periode.',
  },
]

const faqs = [
  {
    q: 'Da li marketing moze da smanji zavisnost od Booking-a i Airbnb-a?',
    a: 'Da, i to je jedan od glavnih ciljeva. Kroz SEO, Google Ads i remarketing gradimo kanal direktnih rezervacija koji ne placa proviziju. OTA platforme i dalje koristimo za vidljivost, ali cilj je da sve veci deo gostiju rezervise direktno.',
  },
  {
    q: 'Koliko brzo mogu da ocekujem rezultate?',
    a: 'Google Ads kampanje mogu doneti prve upite za rezervaciju vec u prvoj nedelji. Lokalni SEO i sadrzaj daju rezultate kroz 2 do 4 meseca. Realan cilj za prvih 90 dana je merljiv porast direktnih rezervacija i smanjenje zavisnosti od posrednika.',
  },
  {
    q: 'Koji budzet je realan za pocetak?',
    a: 'Za Google Ads u turizmu, realan start je 400 do 800 evra mesecno za ad spend, zavisno od destinacije i konkurencije. Za Meta kampanje van sezone, 200 do 500 evra moze popuniti praznine. Plus fee za vodjenje i optimizaciju.',
  },
  {
    q: 'Radite li samo sa hotelima ili i sa apartmanima i vilama?',
    a: 'Radimo sa svim tipovima smestaja: hoteli, apartmani, vile, etno sela, banje, hosteli i glamping objekti. Pristup prilagodjujemo tipu objekta, kapacitetu i ciljnoj publici.',
  },
  {
    q: 'Da li mi treba poseban sajt ili je dovoljan Booking profil?',
    a: 'Booking profil je neophodan za vidljivost, ali direktne rezervacije bez provizije zahtevaju sopstveni sajt sa booking engine-om. Razlika od 15 do 25 posto provizije po rezervaciji brzo opravdava ulaganje u sajt.',
  },
]

const relatedLinks = [
  {
    to: '/google-reklame-cena',
    title: 'Google reklame cena',
    desc: 'Koliko kosta da uhvatite goste koji traze smestaj u vasem gradu ili na vasoj destinaciji.',
  },
  {
    to: '/instagram-reklame-cena',
    title: 'Instagram reklame cena',
    desc: 'Vizuelne kampanje koje pokazuju objekat i privlace goste koji jos biraju destinaciju.',
  },
  {
    to: '/seo-optimizacija-cena',
    title: 'SEO optimizacija cena',
    desc: 'Organski priliv gostiju kroz Google pretragu za smestaj, destinaciju i aktivnosti.',
  },
  {
    to: '/izrada-wordpress-sajta-cena',
    title: 'Izrada WordPress sajta cena',
    desc: 'Sajt sa booking engine-om koji pretvara posetioce u direktne rezervacije bez provizije.',
  },
  {
    to: '/marketing-za-restorane',
    title: 'Marketing za restorane',
    desc: 'Ako imate i restoran u okviru objekta, pogledajte strategije za ugostiteljstvo.',
  },
  {
    to: '/cene-digitalnog-marketinga',
    title: 'Cene digitalnog marketinga',
    desc: 'Siri pregled ulaganja po kanalu i modelu saradnje sa agencijom.',
  },
]

export default function MarketingZaHoteleISmestajPage() {
  usePageMeta()

  return (
    <div className="min-h-screen bg-page">
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 22% 20%, rgba(245,158,11,0.12) 0%, transparent 48%), radial-gradient(ellipse at 78% 78%, rgba(59,130,246,0.10) 0%, transparent 52%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 22% 20%, rgba(245,158,11,0.06) 0%, transparent 48%), radial-gradient(ellipse at 78% 78%, rgba(59,130,246,0.05) 0%, transparent 52%)' }} />
        </div>
        <div className="relative z-10 max-w-[860px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Industrija - hoteli, apartmani i smestaj</span>
          <h1 className="text-[30px] md:text-[50px] font-medium leading-[1.08] tracking-[-1px] text-ink mb-5">
            Marketing za hotele i smestaj
            <br />
            <span className="text-ink-2">koji puni sobe i smanjuje zavisnost od platformi</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[700px] mx-auto mb-8">
            Booking i Airbnb pune kapacitet ali uzimaju petinu prihoda. Marketing koji gradi direktne rezervacije vraca kontrolu nad cenom, gostom i profitnom marzom.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
              Besplatna analiza objekta
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="#plan" className="inline-flex items-center gap-2 text-ink-2 text-[14px] font-medium h-11 px-6 rounded-full border border-edge hover:bg-tint transition-colors">
              Pogledajte plan
            </a>
          </div>
          <p className="text-[13px] text-ink-3 mt-5 max-w-[650px] mx-auto">
            Ako vec koristite Google za privlacenje gostiju, pogledajte i <Link to="/google-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Google reklame cena</Link>. Za vizuelne kampanje korisno je videti <Link to="/instagram-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Instagram reklame cena</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Zasto je marketing za smestaj drugaciji</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[660px] mx-auto">
            Smestajni objekat ne prodaje proizvod koji se posalje postom. Prodaje iskustvo koje gost kupuje na osnovu slika, recenzija i utiska pre nego sto ikada kroči kroz vrata.
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
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Sta najcesce radi za hotele, apartmane i objekte</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[670px] mx-auto">
            Ne pravimo marketing radi marketinga. Fokus je na kanalima koji realno donose rezervacije po ceni nizoj od provizije koju biste platili Booking-u.
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
              Cilj prvog meseca je da izmerimo koliko direktnih rezervacija mozemo da generisemo mimo platformi i po kojoj ceni.
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
            Za siri pregled ulaganja po kanalu pogledajte <Link to="/google-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Google reklame cena</Link>, <Link to="/instagram-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Instagram reklame cena</Link> i <Link to="/seo-optimizacija-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">SEO optimizacija cena</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[780px] mx-auto bg-gradient-to-br from-amber-500/[0.10] to-blue-500/[0.08] rounded-[20px] border border-amber-500/[0.14] p-6 md:p-8 text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-3">Hocete da vidimo koliko vas trenutno kostaju posrednici?</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed max-w-[620px] mx-auto mb-5">
            Pregledamo izvore rezervacija, profil na Google i platformama, sajt i ponudu. Dobijate konkretan plan za vise direktnih rezervacija i manje provizija.
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
          <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-8 text-center">Srodne teme za hotele i smestaj</h2>
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
            <Link to="/marketing-za-kozmeticke-salone" className="text-ink-3 hover:text-ink transition-colors">Marketing za kozmeticke salone</Link>
            <Link to="/marketing-za-privatne-klinike" className="text-ink-3 hover:text-ink transition-colors">Marketing za privatne klinike</Link>
            <Link to="/marketing-za-teretane" className="text-ink-3 hover:text-ink transition-colors">Marketing za teretane</Link>
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
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Dobar objekat zasluzuje goste koji dolaze direktno, ne preko posrednika</h2>
          <p className="text-[15px] text-ink-2 mb-6">
            Ako zelite vise direktnih rezervacija bez rastuce provizije, javite se. Napravicemo plan za vas tip objekta, destinaciju i sezonu.
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
