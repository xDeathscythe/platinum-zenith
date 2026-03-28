import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  {
    icon: '🚛',
    title: 'B2B poverenje',
    desc: 'Transportne i špediterske usluge ne kupuju se impulsivno. Klijent vam poverava robu, rokove i reputaciju. Sajt i oglasi moraju odmah da uliju sigurnost.'
  },
  {
    icon: '🌍',
    title: 'Regionalni i međunarodni upiti',
    desc: 'Ako radite Srbija-EU ili specifične koridore, ponuda mora da bude vezana za konkretne rute, tip robe i vrstu transporta. Široke poruke ovde slabo rade.'
  },
  {
    icon: '🤝',
    title: 'Dugoročniji ugovori',
    desc: 'Najvredniji klijenti nisu jednokratni prevozi već firme koje traže stabilnog partnera za više tura, više država i više meseci unapred.'
  },
  {
    icon: '📦',
    title: 'Prazne ture i neiskorišćen kapacitet',
    desc: 'Kada kamion vraćate poluprazan, profit nestaje vrlo brzo. Marketing mora da puni pipeline upita, ne samo da donosi povremene pozive.'
  },
  {
    icon: '⏱️',
    title: 'Brzina odgovora odlučuje posao',
    desc: 'Kod hitnih pošiljki prvi odgovor često uzima posao. Ako landing stranica nije jasna i kontakt nije odmah vidljiv, lead odlazi konkurenciji.'
  },
  {
    icon: '👷',
    title: 'Zapošljavanje vozača i operativnog kadra',
    desc: 'Mnoge transportne firme paralelno traže i klijente i ljude. Employer branding i kampanje za zapošljavanje često moraju da rade uz prodajne kampanje.'
  },
]

const services = [
  {
    title: 'Google Ads za hitne i komercijalne upite',
    desc: 'Hvatamo firme koje već traže prevoz, špediciju ili zbirni transport.',
    items: [
      'Search kampanje za upite kao što su "transport robe nemačka srbija" i "međunarodna špedicija"',
      'Odvojene grupe oglasa za konkretne rute, tip robe i vrstu usluge',
      'Call ekstenzije i lead forme za hitne B2B upite',
      'Optimizacija cene po upitu umesto pukog jurcanja klikova'
    ],
  },
  {
    title: 'SEO za logističke i transportne usluge',
    desc: 'Gradimo organsku vidljivost za usluge koje donose ozbiljnije upite i dugoročniji ROI.',
    items: [
      'Stranice za FTL, LTL, zbirni, ADR, frigo i vangabaritni transport',
      'SEO struktura po rutama, državama i industrijama',
      'Brz, jasan i mobilno optimizovan sajt za menadžere koji proveravaju ponude u pokretu',
      'Sadržaj koji objašnjava procedure, rokove i tipične greške u organizaciji transporta'
    ],
  },
  {
    title: 'LinkedIn i B2B lead generation',
    desc: 'Za firme koje žele veće ugovore, ne samo pojedinačne vožnje.',
    items: [
      'Targetiranje direktora logistike, nabavke i operacija',
      'Lead Gen forme za sastanke i procenu potreba',
      'Sadržaj koji gradi autoritet kroz praktične teme, ne generički PR',
      'Retargeting za posetioce koji su već gledali ponudu ili case study'
    ],
  },
  {
    title: 'Employer branding za vozače i logistički tim',
    desc: 'Kada rastete, marketing mora da puni i pipeline kandidata.',
    items: [
      'Meta kampanje za zapošljavanje vozača i dispečera',
      'Landing stranice sa jasnim uslovima, rutama i tipom vozila',
      'Video i foto materijal koji prikazuje realne uslove rada',
      'Odvajanje kampanja za zapošljavanje od kampanja za prodaju usluga'
    ],
  },
]

const metrics = [
  {
    num: '3x+',
    label: 'više kvalifikovanih upita',
    desc: 'Kada se Search kampanje i landing stranice slože oko konkretnih ruta i usluga.'
  },
  {
    num: '8-15x',
    label: 'povrat investicije',
    desc: 'Kod firmi koje zatvore i nekoliko jačih mesečnih ugovora, marketing se isplati brzo.'
  },
  {
    num: '-30% do -40%',
    label: 'niža cena po ledu',
    desc: 'Nakon čišćenja broad targetiranja, boljeg copy-ja i jačeg post-click iskustva.'
  },
]

const faqs = [
  {
    q: 'Radimo isključivo B2B. Da li Meta kampanje uopšte imaju smisla?',
    a: 'Za direktnu prodaju transportnih usluga Google Search i SEO su obično jači kanali. Meta ima više smisla za remarketing, employer branding i održavanje prisutnosti kod publike koja vas već zna.'
  },
  {
    q: 'Koliki budžet je realan za Google Ads u transportu i logistici?',
    a: 'Za ozbiljnije testiranje obično preporučujemo bar 1.000€ do 2.000€ mesečno po tržištu ili grupi usluga. Ispod toga se podaci skupljaju sporo, posebno ako ciljate više ruta i više država.'
  },
  {
    q: 'Možete li da pomognete oko praznih tura?',
    a: 'Da, ali ne kroz generičnu kampanju za sve. Najbolje rade kampanje vezane za konkretne pravce, regione i tip prevoza gde vam najčešće ostaje nepopunjen kapacitet.'
  },
  {
    q: 'Šta je važnije, sajt ili oglasi?',
    a: 'Oba. Ako nemate dobar sajt, platićete klik i izgubiti upit. Ako imate dobar sajt bez saobraćaja, niko ga neće videti. Najbolji rezultat dolazi kada se kanal i landing strana rade kao jedan sistem.'
  },
  {
    q: 'Koliko brzo možemo da očekujemo prve rezultate?',
    a: 'Plaćene kampanje mogu da donesu prve relevantne upite u roku od nekoliko dana. SEO je sporiji, ali vremenom spušta cenu akvizicije i donosi stabilniji priliv tražnji.'
  },
]

export default function MarketingZaTransportILogistikuPage() {
  usePageMeta()

  return (
    <>
      <section className="pt-[140px] pb-20 md:pt-[200px] md:pb-28 px-4 md:px-8 bg-panel overflow-hidden border-b border-edge-2">
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <p className="text-[13px] md:text-[14px] text-ink-3 uppercase tracking-[2px] font-medium mb-6">Marketing za transport i logistiku</p>
          <h1 className="text-[32px] md:text-[56px] font-medium leading-[1.1] tracking-[-1.5px] text-ink mb-6">
            Više punih tura. Manje praznih kilometara.
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 max-w-[700px] mx-auto leading-relaxed mb-10">
            Dovodimo vam B2B upite za transport, špediciju i logističke usluge kroz
            {' '}
            <Link to="/google-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Google Ads</Link>,
            {' '}
            <Link to="/seo-optimizacija-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">SEO</Link>
            {' '}
            i landing stranice koje jasno objašnjavaju šta radite, gde radite i zašto treba da vas pozovu baš sada.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/kontakt" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-inv-bg text-inv-fg text-[15px] font-medium hover:bg-inv-bg-hover transition-colors w-full sm:w-auto">
              Zatražite besplatnu analizu
            </Link>
            <Link to="/digitalni-marketing" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-transparent border border-edge text-ink text-[15px] font-medium hover:border-ink/30 transition-colors w-full sm:w-auto">
              Pogledajte naše usluge
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-page">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[28px] md:text-[40px] font-medium tracking-[-1px] text-ink mb-4">Zašto marketing u logistici traži drugačiji pristup</h2>
            <p className="text-[16px] text-ink-2 max-w-[700px] mx-auto">
              Ovde ne prodajete impulsivnu kupovinu. Prodajete pouzdanost, rok, komunikaciju i osećaj da roba neće kasniti. Zato copy, struktura sajta i kanal akvizicije moraju da budu mnogo precizniji nego kod generičkih uslužnih biznisa.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c, i) => (
              <div key={i} className="bg-panel rounded-2xl p-8 border border-edge-2">
                <span className="text-[32px] mb-4 block">{c.icon}</span>
                <h3 className="text-[18px] font-medium text-ink mb-3">{c.title}</h3>
                <p className="text-[15px] text-ink-3 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-ink text-inv-fg">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-edge/20">
            {metrics.map((m, i) => (
              <div key={i} className="pt-8 md:pt-0 first:pt-0">
                <div className="text-[48px] md:text-[56px] font-medium text-blue-400 mb-2">{m.num}</div>
                <div className="text-[18px] font-medium text-inv-fg mb-3">{m.label}</div>
                <div className="text-[15px] text-inv-fg/60 leading-relaxed max-w-[280px] mx-auto">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-page">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[28px] md:text-[40px] font-medium tracking-[-1px] text-ink mb-4">Kako izgleda sistem koji donosi ozbiljnije upite</h2>
            <p className="text-[16px] text-ink-2 max-w-[720px] mx-auto">
              Ako želite nižu cenu po upitu, nije dovoljno samo pustiti oglase. Potrebni su dobar funnel, jasan CTA i sajt koji ne guši konverziju. Zato uz kampanje često sređujemo i
              {' '}
              <Link to="/izrada-wordpress-sajta-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">prodajni deo sajta</Link>.
            </p>
          </div>
          <div className="space-y-6">
            {services.map((s, i) => (
              <div key={i} className="bg-panel rounded-2xl p-8 md:p-10 border border-edge-2">
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                  <div className="md:w-1/3">
                    <span className="text-[13px] text-ink-4 uppercase tracking-[2px] font-medium block mb-2">Strategija 0{i + 1}</span>
                    <h3 className="text-[22px] font-medium text-ink mb-3">{s.title}</h3>
                    <p className="text-[15px] text-ink-3 leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="md:w-2/3">
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {s.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="text-blue-500 mt-1">✓</span>
                          <span className="text-[15px] text-ink-2 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-panel border-t border-edge-2">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[28px] md:text-[40px] font-medium tracking-[-1px] text-ink mb-4">Često postavljana pitanja</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-page rounded-2xl p-6 md:p-8 border border-edge-2">
                <h3 className="text-[18px] font-medium text-ink mb-3">{faq.q}</h3>
                <p className="text-[15px] text-ink-3 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-blue-600 text-white text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[32px] md:text-[48px] font-medium tracking-[-1px] mb-6 text-white">Ako hoćete više ugovora, krenimo od stranice koja zatvara upit</h2>
          <p className="text-[16px] md:text-[18px] text-white/80 mb-10 max-w-[620px] mx-auto">
            Pregledaćemo vaš trenutni sajt, Google prisustvo i prodajni tok. Dobićete konkretan plan šta prvo treba srediti da biste dobijali više kvalitetnih upita, ne samo više saobraćaja.
          </p>
          <Link to="/kontakt" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-blue-600 text-[15px] font-medium hover:bg-gray-50 transition-colors">
            Zakažite besplatne konsultacije
          </Link>
        </div>
      </section>
    </>
  )
}
