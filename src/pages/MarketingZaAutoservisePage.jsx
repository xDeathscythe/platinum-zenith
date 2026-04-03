import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  {
    icon: '01',
    title: 'Musterija traži servis kad se pokvari',
    desc: 'Vecina vlasnika automobila ne bira autoservis unapred. Pretrazuju tek kad nastane problem, pa ko je prvi i najvidljiviji na Google-u, taj dobija poziv.',
  },
  {
    icon: '02',
    title: 'Poverenje se gradi tesko, gubi lako',
    desc: 'Autoservis industrija ima problem sa reputacijom. Recenzije, transparentne cene i jasna komunikacija cesto presuduju pre nego sto musterija uopšte dodje na dijagnostiku.',
  },
  {
    icon: '03',
    title: 'Lokalni intent je kljucan',
    desc: 'Ljudi ne voze 40 km do servisa osim za specijalisovanu uslugu. Google mapa, lokalni SEO i blizina su najjaci faktori pri izboru za redovan servis i popravke.',
  },
  {
    icon: '04',
    title: 'Sezonski pikovi i mrtvi periodi',
    desc: 'Zimske gume, klima servis, tehnički pregled. Pametno planiranje kampanja po sezonama može da izravna prihod umesto da trpite mesece bez posla.',
  },
  {
    icon: '05',
    title: 'Specijalizacija donosi profit',
    desc: 'Servis koji radi sve po malo teze se reklamira. Onaj koji je poznat po dijagnostici, menjacima ili odredjenoj marki automobila lakse privlaci musterije sa vecim budžetom.',
  },
  {
    icon: '06',
    title: 'Telefonski poziv je glavna konverzija',
    desc: 'Za razliku od e-commerce-a, kod autoservisa musterija najčešće zove telefonom. Marketing mora da vodi ka pozivu ili poruci, ne ka formi koja niko ne popunjava.',
  },
]

const playbook = [
  {
    title: 'Google Business i lokalni SEO za hitne pretrage',
    desc: 'Kad motor zapali lampicu ili guma pukne, musterija otvara Google i traži najbliži servis. Tu morate biti vidljivi odmah, sa jasnim informacijama.',
    items: [
      'Kompletno sredjen Google Business profil sa uslugama, radnim vremenom i fotografijama',
      'Lokalni SEO za grad, naselje i specificne usluge koje radite',
      'Strategija za prikupljanje recenzija koje grade poverenje',
      'Click-to-call CTA koji skracuje put od pretrage do poziva',
    ],
  },
  {
    title: 'Google Ads za upite sa jakom namerom kupovine',
    desc: 'Ljudi koji traže autoservis na Google-u imaju konkretan problem koji treba resiti. To su najkvalitetniji upiti jer musterija vec zna da treba pomoc.',
    items: [
      'Kampanje po tipu usluge: redovan servis, dijagnostika, limarija, klima, gume',
      'Lokalno targetiranje na opstinu, grad i okolna naselja',
      'Landing stranice sa jasnom ponudom i pozivom na akciju',
      'Pracenje poziva kao glavne metrike konverzije',
    ],
  },
  {
    title: 'Sajt koji pretvara posetioce u musterije',
    desc: 'Autoservis sajt ne mora biti komplikovan. Ali mora jasno da pokaze šta radite, koliko imate iskustva i kako se zakazuje termin.',
    items: [
      'Lista usluga sa okvirnim cenama ili cenovnim rasponima',
      'Fotografije servisa, opreme i zavrsenih radova',
      'Vidljiv broj telefona i WhatsApp na svakoj stranici',
      'Trust signali: sertifikati, godine iskustva, brendovi koje servisite',
    ],
  },
  {
    title: 'Facebook i Instagram za sezonske kampanje',
    desc: 'Društvene mreže kod autoservisa ne rade kao kod modnih brendova. Ali rade odlicno za sezonske akcije, podsetnike i gradnju prepoznatljivosti u lokalnoj zajednici.',
    items: [
      'Sezonske kampanje: zimske gume, klima servis, priprema za tehnički',
      'Before-after fotografije popravki koje demonstriraju kvalitet',
      'Retargeting za ljude koji su posetili sajt ali nisu zvali',
      'Lokalno targetiranje na opstinu i okruzenje za brand awareness',
    ],
  },
]

const firstMonth = [
  {
    title: 'Nedelja 1',
    text: 'Analiza trenutnog stanja: Google profil, sajt, recenzije, vidljivost na mapi i lista usluga koje nose najbolju marzu. Biramo fokus.',
  },
  {
    title: 'Nedelja 2',
    text: 'Sredjujemo lokalne signale, click-to-call, tracking poziva i landing stranice za glavne usluge koje najbrze donose pozive.',
  },
  {
    title: 'Nedelja 3',
    text: 'Pustamo prve kampanje, pratimo koji upiti dolaze i koliko kostaju. Menjamo poruke i publike na osnovu realnih podataka.',
  },
  {
    title: 'Nedelja 4',
    text: 'Izbacujemo ono sto ne donosi pozive. Pojacavamo kanal koji daje najbolji odnos troška i kvaliteta upita. Pravimo plan za sledecih 60 dana.',
  },
]

const serviceModes = [
  {
    title: 'Hitne intervencije i kvarovi koji traže brz odgovor',
    text: 'Ako vas ljudi zovu kad auto stane, onda marketing mora da bude brz, lokalan i jasan. Tu se ne pobedjuje lepim objavama nego time sto ste prvi na pretrazi, imate poverenje i olaksavate poziv u nekoliko sekundi.',
    route: '/google-reklame-cena',
    routeLabel: 'Kad Search ima više smisla od sirokog reach-a',
  },
  {
    title: 'Redovan servis i usluge koje treba puniti tokom cele godine',
    text: 'Kod redovnih servisa cilj nije samo jedan poziv danas, nego da servis postane prva opcija kojoj se musterija vraca. Tu bolje rade lokalni SEO, recenzije, mapa i jasan sistem za podsetnike nego agresivan kratkorocni push.',
    route: '/seo-optimizacija-cena',
    routeLabel: 'Kako organska lokalna vidljivost donosi stabilnije pozive',
  },
  {
    title: 'Skuplji kvarovi i usluge sa jacom marzom',
    text: 'Kad reklamirate menjace, dijagnostiku, klimu ili limariju, nije poenta samo veći broj upita. Poenta je da privucete ljude kojima stvarno treba ta usluga i koji nisu tu samo da pitaju okvirnu cenu pa nestanu.',
    route: '/cene-digitalnog-marketinga',
    routeLabel: 'Kako da marketing budžet vezete za profitabilniji tip usluge',
  },
  {
    title: 'Servis koji ima promet, ali nema uređen sistem za leadove',
    text: 'Neki servisi imaju dovoljno interesovanja, ali pozivi, poruke i termini i dalje idu haoticno. Tada problem više nije samo vidljivost. Problem je sto nema jasnog puta od prvog kontakta do dolaska i ponovnog dolaska musterije.',
    route: '/industrije/lokalni-biznisi',
    routeLabel: 'Šta prvo srediti kada lokalni biznis preraste improvizaciju',
  },
]

const faqs = [
  {
    q: 'Da li autoservis uopšte treba da se reklamira online?',
    a: 'Ako musterije vec traže autoservis na Google-u pre nego sto pitaju komsiju, odgovor je da. Onaj ko je vidljiv na mapi i u pretrazi dobija poziv, ostali cekaju preporuku koja mozda nikad ne dodje.',
  },
  {
    q: 'Koliko brzo mogu da vidim nove musterije?',
    a: 'Google Ads može da donese prve pozive vec u prvoj nedelji. Lokalni SEO i Google Business obicno pokazuju vidljiv rast kroz 4 do 8 nedelja. Najbolji rezultat je kombinacija oba kanala.',
  },
  {
    q: 'Šta ako nemam sajt, samo Instagram?',
    a: 'Instagram je koristan za poverenje i sezonske akcije, ali vecina musterija autoservisa krece od Google pretrage. Sajt ili makar landing stranica sa brojem telefona znacajno povećava broj poziva.',
  },
  {
    q: 'Koje usluge najčešće reklamirate kod autoservisa?',
    a: 'To zavisi od kapaciteta i marze, ali najčešće krecemo od usluga sa najboljom zaradom po radnom satu: dijagnostika, menjaci, klima servis, limarija ili specijalizacija za odredjenu marku automobila.',
  },
]

const relatedLinks = [
  {
    to: '/google-reklame-cena',
    title: 'Google reklame cena',
    desc: 'Koliko kosta Google Ads za lokalne biznise u Srbiji i kako planirati budžet za pozive.',
  },
  {
    to: '/seo-optimizacija-cena',
    title: 'SEO optimizacija cena',
    desc: 'Koliko kosta SEO koji vas drzi na vrhu lokalne pretrage bez placenih klikova.',
  },
  {
    to: '/izrada-wordpress-sajta-cena',
    title: 'Izrada WordPress sajta cena',
    desc: 'Ako vam treba sajt koji pretvara posetioce u pozive, ovde je realan okvir ulaganja.',
  },
  {
    to: '/instagram-reklame-cena',
    title: 'Instagram reklame cena',
    desc: 'Za sezonske kampanje i retargeting koji podsecaju musterije da je vreme za servis.',
  },
  {
    to: '/blog/instagram-reklame-za-autoservise-cena-upita-srbija-2026',
    title: 'Instagram reklame za autoservise',
    desc: 'Praktican vodic: koliki budžet, kako meriti cenu upita i koje kreativne poruke rade.',
  },
  {
    to: '/blog/google-ads-za-autoservise-cena-leada-srbija-2026',
    title: 'Google Ads za autoservise',
    desc: 'Vodic za cenu klika, budžet i kampanje za autoservis usluge na Google-u.',
  },
]

export default function MarketingZaAutoservisePage() {
  usePageMeta()

  return (
    <div className="min-h-screen bg-page">
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 22% 20%, rgba(59,130,246,0.16) 0%, transparent 48%), radial-gradient(ellipse at 78% 78%, rgba(234,179,8,0.10) 0%, transparent 52%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 22% 20%, rgba(59,130,246,0.08) 0%, transparent 48%), radial-gradient(ellipse at 78% 78%, rgba(234,179,8,0.06) 0%, transparent 52%)' }} />
        </div>
        <div className="relative z-10 max-w-[860px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Industrija - autoservisi</span>
          <h1 className="text-[30px] md:text-[50px] font-medium leading-[1.08] tracking-[-1px] text-ink mb-5">
            Marketing za autoservise
            <br />
            <span className="text-ink-2">koji donosi pozive i pune termine</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[700px] mx-auto mb-8">
            Autoservis ne raste zato sto ima Instagram stranicu. Raste kad musterija na Google-u vidi vas profil pre konkurencije, procita recenzije i pozove za 15 sekundi. Pravimo sistem koji to omogucava.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
              Besplatna analiza servisa
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="#plan" className="inline-flex items-center gap-2 text-ink-2 text-[14px] font-medium h-11 px-6 rounded-full border border-edge hover:bg-tint transition-colors">
              Pogledajte plan
            </a>
          </div>
          <p className="text-[13px] text-ink-3 mt-5 max-w-[650px] mx-auto">
            Ako vec razmatrate Google oglase, pogledajte i <Link to="/google-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Google reklame cena</Link>. Za lokalni SEO koji dugorocno drzi poziciju, koristan je i vodic za <Link to="/seo-optimizacija-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">SEO optimizaciju</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Zašto je marketing za autoservis drugaciji</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[660px] mx-auto">
            Ovde ne pobedjuje onaj ko najvise objavljuje na mreže. Pobedjuje servis koji je najvidljiviji kad musterija ima problem i traži rešenje u svom kraju.
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
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Šta najčešće radi za autoservise</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[670px] mx-auto">
            Krecemo od kanala koji donose pozive sa jakom namerom. Ne pravimo aktivnost radi statistike, nego marketing koji zvoni telefon i puni raspored.
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
        <div className="max-w-[980px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <div className="max-w-[760px] mx-auto text-center mb-8">
            <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-3">Šta radi za hitne intervencije, redovan servis i skuplje kvarove</h2>
            <p className="text-[15px] text-ink-2 leading-relaxed">
              Nije svakom autoservisu potreban isti marketing. Neko zivi od hitnih kvarova, neko od stabilnog redovnog servisa, a neko od skupljih i specijalizovanih popravki. Kad to ne odvojite, lako potrosite budžet na promet koji izgleda aktivno, a ne donosi najbolji prihod.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceModes.map((item) => (
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
            Ako niste sigurni da li servis prvo treba da hvata hitne pozive, da dize lokalnu reputaciju ili da gura profitabilnije kvarove, posaljite nam kratak opis kroz <Link to="/kontakt" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">kontakt formu</Link> i reci cemo vam sta ima najvise smisla da ide prvo.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[920px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <div className="max-w-[720px] mx-auto text-center mb-8">
            <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-3">Prvih 30 dana bez prazne price</h2>
            <p className="text-[15px] text-ink-2 leading-relaxed">
              Cilj prvog meseca nije da servis samo izgleda aktivnije na mrezi. Cilj je da brzo vidimo koje usluge, kanali i poruke donose pozive i dolaske.
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
            Za siri pregled ulaganja po kanalu, pogledajte i <Link to="/google-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Google reklame cena</Link>, <Link to="/instagram-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Instagram reklame cena</Link> i <Link to="/seo-optimizacija-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">SEO optimizacija cena</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[780px] mx-auto bg-gradient-to-br from-blue-500/[0.10] to-amber-500/[0.08] rounded-[20px] border border-blue-500/[0.14] p-6 md:p-8 text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-3">Hocete da vidimo gde vas servis trenutno gubi musterije?</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed max-w-[620px] mx-auto mb-5">
            Pregledamo Google profil, sajt, recenzije, vidljivost na mapi i ponudu. Dobijate konkretan spisak koraka za više poziva i manje praznih termina.
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
          <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-8 text-center">Srodne teme za autoservise</h2>
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
            <Link to="/marketing-za-frizerske-salone" className="text-ink-3 hover:text-ink transition-colors">Marketing za frizerske salone</Link>
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
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Dobar servis zasluzuje da ga musterije lakse nadju</h2>
          <p className="text-[15px] text-ink-2 mb-6">
            Ako hocete više poziva bez bacanja budžeta na prazne klikove, javite se. Slozicemo plan za vasu lokaciju, tip usluge i kapacitet tima.
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
