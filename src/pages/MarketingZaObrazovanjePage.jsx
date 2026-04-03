import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  {
    icon: '01',
    title: 'Upisi se desavaju dva puta godisnje, a kasa treba celu',
    desc: 'Septembar i februar su vrhunci upisa. Ostatak godine tesko je popuniti mesta bez kampanje koja greje publiku mesecima unapred i hvata kasne odluke.',
  },
  {
    icon: '02',
    title: 'Roditelj istrazuje tjednima pre nego sto pozove',
    desc: 'Odluka o skoli za dete ili kursu za sebe nije impulzivna. Roditelj cita recenzije, poredi programe, pita poznanike. Ako vas ne nadje u tom procesu, upisace dete negde drugde.',
  },
  {
    icon: '03',
    title: 'Konkurencija raste brze nego broj ucenika',
    desc: 'Novih privatnih skola, kurseva i akademija je sve više. Bez jasne razlike u ponudi i vidljivosti na Google-u i mrezi, svodite se na još jednu opciju u nizu.',
  },
  {
    icon: '04',
    title: 'Cena nije presudna, ali poverenje jeste',
    desc: 'Roditelj spreman da plati za kvalitet nece birati najjeftiniju opciju. Ali mora da veruje da ce dete dobiti rezultat. Sajt bez konkretnih informacija, programa i iskustava ne gradi to poverenje.',
  },
  {
    icon: '05',
    title: 'Instagram profil pun, ali telefon ne zvoni',
    desc: 'Objave sa casova i dogadjaja izgledaju lepo, ali bez jasnog poziva na dan otvorenih vrata, probni cas ili upis, pratilac nikad ne postaje ucenik.',
  },
  {
    icon: '06',
    title: 'Autoškole i kursevi zive od preporuka koje se ne skaliraju',
    desc: 'Preporuka od prijatelja je najjaci kanal, ali ne mozete kontrolisati koliko ih stize. Digitalni marketing dopunjuje word-of-mouth i donosi ljude koji vas ne poznaju.',
  },
]

const playbook = [
  {
    title: 'Google Ads koji hvataju roditelje i polaznike spremne za upis',
    desc: 'Kada neko traži privatnu skolu u svom gradu, kurs engleskog za dete ili autoskolu sa dobrim prolazom, vec je u fazi odluke. Placena pretraga stavlja vas na vrh tog trenutka.',
    items: [
      'Kampanje po tipu institucije: osnovna skola, jezik, autoskola, IT kurs',
      'Lokalno targetiranje po gradu, opstini i radijusu oko lokacije',
      'Landing stranice sa programom, cenama i pozivom na probni cas',
      'Merenje cene po upitu i konverziji, ne samo po kliku',
    ],
  },
  {
    title: 'Instagram i Meta kampanje za svest i topliji kontakt',
    desc: 'Roditelj koji još ne traži aktivno skolu može da vas primeti kroz sadržaj koji pokazuje kako izgleda cas, kakav je pristup i kakve rezultate postizete.',
    items: [
      'Video sadržaj iz ucionice, radionice i dogadjaja koji grade poverenje',
      'Lead forme za dan otvorenih vrata, probni cas ili info sesiju',
      'Retargeting na ljude koji su posetili sajt ali se nisu javili',
      'Sezonske kampanje vezane za upisne rokove i nove grupe',
    ],
  },
  {
    title: 'Sajt koji odgovara na pitanja pre nego roditelj pozove',
    desc: 'Dobar sajt za obrazovnu instituciju nije brosura. To je mesto gde roditelj za pet minuta sazna program, cenu, ko predaje i kako izgleda upis.',
    items: [
      'Jasno prikazan program, raspored i cenovnik bez skrivenih troškova',
      'Stranica za svaki kurs ili nivo sa konkretnim sadržajem programa',
      'Forma za zakazivanje probnog casa ili poziva iznad prevoja',
      'Svedocanstva roditelja i polaznika koja grade kredibilitet',
    ],
  },
  {
    title: 'Lokalni SEO i Google Business za organski priliv',
    desc: 'Vecina roditelja traži skolu u svom kraju. Google mapa i lokalni rezultati su mesto gde se donosi odluka, cesto pre nego sto otvore vas sajt.',
    items: [
      'Optimizovan Google Business profil sa slikama, radnim vremenom i programom',
      'Redovne recenzije od zadovoljnih roditelja i polaznika',
      'Lokalni SEO sadržaj za grad, naselje i tip obrazovanja',
      'Azurne informacije o upisnim rokovima, novim grupama i dogadjajima',
    ],
  },
]

const firstMonth = [
  {
    title: 'Nedelja 1',
    text: 'Analiza trenutne pozicije: sajt, Google profil, recenzije, konkurencija u vasem gradu i kanali koji vec rade ili ne rade.',
  },
  {
    title: 'Nedelja 2',
    text: 'Postavljamo Google Ads kampanje za najtrazenije usluge, optimizujemo Business profil i pripremamo landing za probni cas ili info sesiju.',
  },
  {
    title: 'Nedelja 3',
    text: 'Pokrecemo Meta kampanje sa kreativom koja pokazuje atmosferu i rezultate. Testiramo razlicite publike i ponude za upis.',
  },
  {
    title: 'Nedelja 4',
    text: 'Merimo cenu po upitu, kvalitet kontakata i donosimo plan za naredna dva meseca sa budžetom koji ima smisla za vas kapacitet.',
  },
]

const faqs = [
  {
    q: 'Da li marketing radi za male privatne skole ili samo za velike lance?',
    a: 'Male skole cesto imaju prednost jer mogu da komuniciraju licniji pristup, manje grupe i konkretne rezultate. Marketing samo pojacava tu poruku i stavlja je pred ljude koji je traže.',
  },
  {
    q: 'Koliko vremena treba da se vide prvi rezultati?',
    a: 'Google Ads može doneti prve upite za probni cas vec u prvoj nedelji. Za stabilniju sliku o ceni po upisu i kvalitetu kontakata, racunajte na 4 do 8 nedelja testiranja i optimizacije.',
  },
  {
    q: 'Koji budžet je realan za pocetak kampanje?',
    a: 'Za Google Ads u obrazovanju, realan start je 250 do 500 evra mesecno za ad spend, plus fee za vodjenje. Za Meta kampanje slican raspon može dati dovoljno podataka za optimizaciju.',
  },
  {
    q: 'Kako funkcionise marketing za autoskole?',
    a: 'Autoskole imaju specificnu dinamiku: polaznik bira po ceni, lokaciji i prolaznosti. Google Ads sa lokalnim targetiranjem i jasnim cenama na landing stranici donosi najkvalitetnije upite.',
  },
  {
    q: 'Da li treba da imamo sajt pre nego sto pocnemo sa kampanjama?',
    a: 'Sajt nije obavezan za start, ali drasticno poboljsava rezultate. Mozemo poceti sa landing stranicom za jednu uslugu i prosiriti kasnije. Bitno je da posetilac može da se javi u dva klika.',
  },
]

const relatedLinks = [
  {
    to: '/blog/google-ads-za-privatne-skole-cena-upisa-srbija-2026',
    title: 'Google Ads za privatne skole: cena upisa',
    desc: 'Koliki budžet ima smisla za Google kampanje privatne skole, koje ključne reci donose upise i kako meriti rezultat.',
  },
  {
    to: '/blog/google-ads-za-skolice-stranih-jezika-cena-upisa-srbija-2026',
    title: 'Google Ads za skole stranih jezika: cena upisa',
    desc: 'Kako placena pretraga pomaze skolama jezika da popune grupe i smanje prazne pozive.',
  },
  {
    to: '/blog/google-ads-za-autoskole-cena-upisa-srbija-2026',
    title: 'Google Ads za autoskole: cena upisa',
    desc: 'Koliko kosta da uhvatite polaznike koji traže autoskolu u svom gradu kroz Google reklame.',
  },
  {
    to: '/seo-optimizacija-cena',
    title: 'SEO optimizacija cena',
    desc: 'Za skole koje hoće organski priliv kroz Google pretragu i mapu bez placenih oglasa.',
  },
  {
    to: '/izrada-wordpress-sajta-cena',
    title: 'Izrada WordPress sajta cena',
    desc: 'Ako vam trenutni sajt nema jasan program, cenovnik i formu za upis koja konvertuje.',
  },
  {
    to: '/google-reklame-cena',
    title: 'Google reklame cena',
    desc: 'Siri pregled cena Google Ads kampanja po industrijama i modelima naplate u Srbiji.',
  },
]

export default function MarketingZaObrazovanjePage() {
  usePageMeta()

  return (
    <div className="min-h-screen bg-page">
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 22% 20%, rgba(99,102,241,0.14) 0%, transparent 48%), radial-gradient(ellipse at 78% 78%, rgba(168,85,247,0.10) 0%, transparent 52%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 22% 20%, rgba(99,102,241,0.07) 0%, transparent 48%), radial-gradient(ellipse at 78% 78%, rgba(168,85,247,0.05) 0%, transparent 52%)' }} />
        </div>
        <div className="relative z-10 max-w-[860px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Industrija - obrazovanje i edukacija</span>
          <h1 className="text-[30px] md:text-[50px] font-medium leading-[1.08] tracking-[-1px] text-ink mb-5">
            Marketing za obrazovne institucije
            <br />
            <span className="text-ink-2">koji puni grupe i popunjava upisne liste</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[700px] mx-auto mb-8">
            Privatna skola, skola stranih jezika ili autoskola ne rastu jer snize cenu ili objave još jednu sliku sa casa. Rastu kada roditelji i polaznici lako pronadju informacije, steknu poverenje i zakazu probni cas.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
              Besplatna analiza institucije
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
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Zašto je marketing za obrazovanje drugaciji</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[660px] mx-auto">
            Obrazovanje prodaje poverenje, rezultat i buducnost. Roditelj ne kupuje kurs vec sigurnost da ce dete napredovati. Marketing mora da gradi to poverenje pre prvog kontakta.
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
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Šta najčešće radi za skole, kurseve i autoskole</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[670px] mx-auto">
            Krecemo od kanala i aktivnosti koji realno donose više upisa i bolji kvalitet polaznika. Pristup prilagodjavamo tipu institucije i kapacitetu.
          </p>
          <div className="space-y-6">
            {playbook.map((block) => (
              <div key={block.title} className="bg-panel rounded-[20px] border border-edge p-6 md:p-8">
                <h3 className="text-[20px] font-medium text-ink mb-3">{block.title}</h3>
                <p className="text-[15px] text-ink-2 leading-relaxed mb-4">{block.desc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <svg className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
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
              Cilj prvog meseca nije da institucija samo izgleda aktivnije na mrezi. Cilj je da brzo vidimo koji kanali, ponude i publike donose upise po ceni koja ima smisla.
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
        <div className="max-w-[780px] mx-auto bg-gradient-to-br from-indigo-500/[0.10] to-purple-500/[0.08] rounded-[20px] border border-indigo-500/[0.14] p-6 md:p-8 text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-3">Hocete da vidimo gde vasa institucija trenutno gubi potencijalne polaznike?</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed max-w-[620px] mx-auto mb-5">
            Pregledamo Google profil, sajt, recenzije, ponudu i nacin upisa. Dobijate konkretan spisak sledecih koraka za više upisa i bolje popunjene grupe.
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
          <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-8 text-center">Srodne teme za obrazovne institucije</h2>
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
            <Link to="/marketing-za-privatne-vrtice" className="text-ink-3 hover:text-ink transition-colors">Marketing za privatne vrtice</Link>
            <Link to="/marketing-za-stomatologe" className="text-ink-3 hover:text-ink transition-colors">Marketing za stomatologe</Link>
            <Link to="/marketing-za-racunovodje" className="text-ink-3 hover:text-ink transition-colors">Marketing za racunovodje</Link>
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
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Dobra skola zasluzuje da je polaznici lakse pronadju</h2>
          <p className="text-[15px] text-ink-2 mb-6">
            Ako hocete više upisa bez bacanja budžeta na prazne klikove, javite se. Slozicemo plan za vas tip institucije, grad i kapacitet grupa.
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
