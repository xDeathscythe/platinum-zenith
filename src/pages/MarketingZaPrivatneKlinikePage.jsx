import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  {
    icon: '01',
    title: 'Pacijent trazi odmah, ne bira dugo',
    desc: 'Kada nekome treba specijalisticki pregled, laboratorija ili hitna dijagnostika, odluka pada u minuti. Ako vas nema na prvoj strani pretrage, pacijent zove kliniku koja jeste.',
  },
  {
    icon: '02',
    title: 'Poverenje se gradi pre prvog kontakta',
    desc: 'Privatna klinika ne prodaje impulsan proizvod. Pacijent mora da veruje u strucnost lekara, kvalitet opreme i transparentnost cena pre nego sto podigne telefon.',
  },
  {
    icon: '03',
    title: 'Regulativa ogranicava nacin komunikacije',
    desc: 'Zdravstveni marketing ima pravila oko toga sta smete tvrditi, kako prikazujete rezultate i na koji nacin komunicirate sa potencijalnim pacijentima. Greska moze da kosta reputaciju.',
  },
  {
    icon: '04',
    title: 'Svaka specijalizacija trazi drugaciji pristup',
    desc: 'Oftalmologija, ginekologija, ortopedija i laboratorijska dijagnostika ne privlace iste ljude, ne koriste iste reci i nemaju istu hitnost. Jedna kampanja za sve ne daje rezultat.',
  },
  {
    icon: '05',
    title: 'Konkurencija raste brze nego potraznja',
    desc: 'Novih privatnih klinika je sve vise, a broj pacijenata koji pretrazuju na netu nije neogranicen. Pobeduje onaj ko lakse resava dilemu pacijenta u tom trenutku.',
  },
  {
    icon: '06',
    title: 'Cena pacijenta mora da ima smisla',
    desc: 'Premium usluge imaju visoku maruzu, ali i skuplji lead. Rentabilnost zavisi od toga koliko precizno dovodite ljude koji zaista traze bas vasu specijalizaciju.',
  },
]

const playbook = [
  {
    title: 'Google Ads za pacijente sa jakom namerom',
    desc: 'Kada neko trazi privatni pregled, specijalistu ili laboratoriju u svom gradu, to je signal da mu treba pomoc sada. Google Ads hvata te ljude u trenutku odlucivanja.',
    items: [
      'Kampanje po specijalizaciji: kardiolog, dermatolog, ortoped, ginekolog, oftalmolog',
      'Lokalni intent: grad + usluga kao primarni keyword pristup',
      'Landing stranice za svaku uslugu sa cenama, lekarima i CTA za zakazivanje',
      'Call tracking za telefonske upite koji dolaze direktno iz oglasa',
    ],
  },
  {
    title: 'SEO i Google Business za dugorocnu vidljivost',
    desc: 'Placeni oglasi donose pacijente odmah, ali organski rezultati grade stabilnost. Google Business profil sa recenzijama i lokalni SEO cine da vas klinika bude vidljiva i bez aktivnog budzeta.',
    items: [
      'Optimizovan Google Business profil sa uslugama, lekarima i radnim vremenom',
      'Sadrzaj koji odgovara na pitanja pacijenata pre zakazivanja',
      'Lokalni SEO za svaki grad i naselje gde klinika pokriva pacijente',
      'Schema markup za medicinsku organizaciju, lekare i usluge',
    ],
  },
  {
    title: 'Sajt koji resava dilemu, ne samo opisuje usluge',
    desc: 'Pacijent koji dodje na sajt vec ima problem. Ne treba mu katalog usluga, nego jasan odgovor na pitanje: da li ova klinika moze da mi pomogne, koliko to kosta i kako da zakazem.',
    items: [
      'Stranica za svaku specijalizaciju sa opisom, cenama i biografijom lekara',
      'Sistem za online zakazivanje ili jasna forma za upit',
      'Trust elementi: licence, sertifikati, oprema, recenzije i godine iskustva',
      'Mobilni sajt koji ucitava brzo jer pacijenti pretrazuju sa telefona',
    ],
  },
  {
    title: 'Remarketing i edukacija za duze odlucivanje',
    desc: 'Operacije, estetski zahvati i dugotrajniji tretmani zahtevaju vreme za odluku. Remarketing vraca ljude koji su vec istrazivali, a edukativni sadrzaj gradi poverenje dok razmisljaju.',
    items: [
      'Remarketing za posetioce koji su pogledali konkretnu uslugu ali nisu zakazali',
      'Video sadrzaj sa lekarima koji objasnjava procedure jasno i bez strucnog zargona',
      'Email nurturing za pacijente koji su ostavili kontakt ali jos razmisljaju',
      'Testimonijali i case studies za zahvate gde je poverenje presudno',
    ],
  },
]

const firstMonth = [
  {
    title: 'Nedelja 1',
    text: 'Analiza klinike: specijalizacije, lokacija, konkurencija, trenutni sajt i online prisustvo. Biramo 2-3 usluge sa najboljim odnosom potraznje i marze za start.',
  },
  {
    title: 'Nedelja 2',
    text: 'Postavljamo kampanje za prioritetne specijalizacije, Google Business profil i landing stranice sa cenama, lekarima i jasnim pozivom na zakazivanje.',
  },
  {
    title: 'Nedelja 3',
    text: 'Analiziramo prve rezultate: cena po upitu, kvalitet poziva, konverzija na sajtu. Gasimo ono sto ne donosi kvalitetne pacijente i pojacavamo ono sto radi.',
  },
  {
    title: 'Nedelja 4',
    text: 'Prosirujemo na sledece specijalizacije, ukljucujemo remarketing i pravimo plan za naredna 2 meseca rasta sa jasnim KPI po usluzi.',
  },
]

const faqs = [
  {
    q: 'Koliki budzet treba privatnoj klinici za Google Ads?',
    a: 'Za pocetak, 400 do 800 evra mesecno za ad spend obicno pokriva 2-3 specijalizacije u jednom gradu. Klinike sa vise lokacija ili premium uslugama idu iznad toga, ali je bitno da se budzet rasporedi po uslugama koje nose najvisu maruzu.',
  },
  {
    q: 'Koliko brzo klinika moze da vidi nove pacijente iz kampanja?',
    a: 'Google Ads za zdravstvene usluge obicno donosi prve kvalitetne upite vec u prvoj nedelji. Realnija slika o ceni pacijenta i kvalitetu leadova formira se kroz 4 do 6 nedelja rada.',
  },
  {
    q: 'Da li smemo da koristimo pre-posle fotografije u reklamama?',
    a: 'Google i Meta imaju stroga pravila za zdravstveni marketing. Pre-posle slike su ogranicene, ali postoje nacini da se grade poverenje i zelja bez krsenja politika: edukativni sadrzaj, video objasnjenja, recenzije i transparentan prikaz procesa.',
  },
  {
    q: 'Kako merite uspeh kampanje za kliniku?',
    a: 'Pratimo cenu po kvalifikovanom upitu, stopu konverzije sa sajta, broj zakazanih pregleda i prihod po pacijentu. Cilj nije samo dovesti klikove, nego pacijente koji zaista zakazu i dodju na pregled.',
  },
  {
    q: 'Da li klinici treba sajt ako vec ima profil na doktorima.rs?',
    a: 'Portal je koristan za recenzije, ali ne daje kontrolu nad porukom, cenama, lekarima i zakazivanjem. Sopstveni sajt znaci da pacijent dobija pun utisak o klinici bez distrakcija od konkurentskih oglasa na istoj stranici.',
  },
]

const relatedLinks = [
  {
    to: '/google-reklame-cena',
    title: 'Google reklame cena',
    desc: 'Koliko kosta Google Ads za zdravstvene usluge i kako izgleda budzet po specijalizaciji.',
  },
  {
    to: '/seo-optimizacija-cena',
    title: 'SEO optimizacija cena',
    desc: 'Dugorocna vidljivost za klinike koje hoce stabilan priliv pacijenata bez zavisnosti od oglasa.',
  },
  {
    to: '/izrada-wordpress-sajta-cena',
    title: 'Izrada WordPress sajta cena',
    desc: 'Ako vam trenutni sajt ne zakazuje preglede, ovde je realan okvir ulaganja u novi.',
  },
  {
    to: '/cene-digitalnog-marketinga',
    title: 'Cene digitalnog marketinga',
    desc: 'Siri pregled mesecnih ulaganja za klinike koje zele kompletan digitalni marketing.',
  },
  {
    to: '/blog/google-ads-za-privatne-klinike-cena-leada-srbija-2026',
    title: 'Google Ads za privatne klinike',
    desc: 'Detaljan vodic: koliko kosta Google reklama za kliniku, CPC po specijalizaciji i realni budzeti u Srbiji.',
  },
  {
    to: '/marketing-za-stomatologe',
    title: 'Marketing za stomatologe',
    desc: 'Ako imate i stomatolosku praksu, pogledajte specijalizovani vodic za ordinacije.',
  },
]

export default function MarketingZaPrivatneKlinikePage() {
  usePageMeta()

  return (
    <div className="min-h-screen bg-page">
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 22% 20%, rgba(59,130,246,0.16) 0%, transparent 48%), radial-gradient(ellipse at 78% 78%, rgba(34,197,94,0.10) 0%, transparent 52%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 22% 20%, rgba(59,130,246,0.08) 0%, transparent 48%), radial-gradient(ellipse at 78% 78%, rgba(34,197,94,0.06) 0%, transparent 52%)' }} />
        </div>
        <div className="relative z-10 max-w-[860px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Industrija - privatne klinike</span>
          <h1 className="text-[30px] md:text-[50px] font-medium leading-[1.08] tracking-[-1px] text-ink mb-5">
            Marketing za privatne klinike
            <br />
            <span className="text-ink-2">koji dovodi pacijente sa pravom namerom</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[700px] mx-auto mb-8">
            Privatna klinika ne raste od prisustva na mrezi. Raste kada pacijent koji trazi specijalistu u svom gradu lako nadje bas vas, razume sta nudite, koliko to kosta i zakaze pregled bez trenja. Pravimo marketing koji tacno to omogucava.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
              Besplatna analiza klinike
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="#plan" className="inline-flex items-center gap-2 text-ink-2 text-[14px] font-medium h-11 px-6 rounded-full border border-edge hover:bg-tint transition-colors">
              Pogledajte plan
            </a>
          </div>
          <p className="text-[13px] text-ink-3 mt-5 max-w-[650px] mx-auto">
            Ako vec razmatrate Google Ads, pogledajte i <Link to="/google-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Google reklame cena</Link>. Za kompletan pregled mesecnih ulaganja korisna je i stranica <Link to="/cene-digitalnog-marketinga" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">cene digitalnog marketinga</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Zasto je marketing za privatnu kliniku drugaciji</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[660px] mx-auto">
            Zdravstvene usluge zahtevaju drugaciji pristup od vecine industrija. Poverenje, transparentnost i strucnost moraju da budu vidljivi pre nego sto pacijent uopste pozove.
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
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Sta radi za privatne klinike</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[670px] mx-auto">
            Kombinacija Google Ads-a za hitan intent, SEO-a za dugorocnu vidljivost i sajta koji resava dilemu pacijenta pre nego sto podigne telefon.
          </p>
          <div className="space-y-6">
            {playbook.map((block) => (
              <div key={block.title} className="bg-panel rounded-[20px] border border-edge p-6 md:p-8">
                <h3 className="text-[20px] font-medium text-ink mb-3">{block.title}</h3>
                <p className="text-[15px] text-ink-2 leading-relaxed mb-4">{block.desc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
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
            <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-3">Prvih 30 dana: od analize do prvih zakazivanja</h2>
            <p className="text-[15px] text-ink-2 leading-relaxed">
              Cilj prvog meseca nije da klinika samo bude vidljivija na netu. Cilj je da znamo cenu kvalifikovanog pacijenta po specijalizaciji i da sistem zakazivanja radi bez trenja.
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
            Za detaljan pregled cena po kanalu, pogledajte <Link to="/google-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Google reklame cena</Link> i <Link to="/seo-optimizacija-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">SEO optimizacija cena</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[780px] mx-auto bg-gradient-to-br from-blue-500/[0.10] to-green-500/[0.08] rounded-[20px] border border-blue-500/[0.14] p-6 md:p-8 text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-3">Hocete da vidimo gde vasa klinika gubi pacijente online?</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed max-w-[620px] mx-auto mb-5">
            Pregledamo sajt, Google profil, pretrazivost po specijalizacijama i nacin zakazivanja. Dobijate konkretan spisak koraka za vise kvalifikovanih upita i manji trosak po pacijentu.
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
          <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-8 text-center">Korisni vodici za privatne klinike</h2>
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
            <Link to="/marketing-za-kozmeticke-salone" className="text-ink-3 hover:text-ink transition-colors">Marketing za kozmeticke salone</Link>
            <Link to="/marketing-za-advokate" className="text-ink-3 hover:text-ink transition-colors">Marketing za advokate</Link>
            <Link to="/marketing-za-racunovodje" className="text-ink-3 hover:text-ink transition-colors">Marketing za racunovodje</Link>
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
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Vasa klinika zasluzuje pacijente koji traze bas ono sto nudite</h2>
          <p className="text-[15px] text-ink-2 mb-6">
            Ako zelite vise zakazivanja od ljudi koji vec traze vasu specijalizaciju, javite se. Slozicemo plan za vase usluge, grad i kapacitet tima.
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
