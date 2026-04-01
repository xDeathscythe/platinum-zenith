import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  { icon: '🔍', title: 'Pacijenti pretražuju online', desc: '"Stomatolog blizu mene" ima hiljade pretraga mesečno u Srbiji. Ako vaša ordinacija nije na prvoj strani Google-a, pacijenti idu kod konkurencije.' },
  { icon: '😰', title: 'Strah od stomatologa', desc: 'Većina ljudi odlaže posetu zubaru. Vaš marketing mora da smanji strah, izgradi poverenje i pokaže da je iskustvo bezbolno i prijatno.' },
  { icon: '⭐', title: 'Recenzije su presudne', desc: 'Pacijenti čitaju recenzije pre nego što pozovu. Jedna loša recenzija bez odgovora može da vam zatvori vrata za desetine potencijalnih pacijenata.' },
  { icon: '🏥', title: 'Regulatorna ograničenja', desc: 'Zdravstveni marketing ima pravila. Ne smete obećavati garantovane rezultate niti koristiti pre/posle slike bez dozvole. Znajemo šta je dozvoljeno.' },
  { icon: '💳', title: 'Visoka vrednost pacijenta', desc: 'Jedan pacijent vredi 500-2.000€ godišnje (kontrole, čišćenje, popravke, estetika). Investicija u marketing se vraća već sa par novih pacijenata mesečno.' },
  { icon: '📍', title: 'Lokalna konkurencija', desc: 'U svakom gradu ima na desetine stomatoloških ordinacija. Pacijenti biraju onu koja izgleda najprofesionalnije online.' },
]

const services = [
  {
    title: 'Google Business i lokalni SEO',
    desc: 'Kad neko ukuca "stomatolog" + vaš grad, vi morate biti među prva tri rezultata na mapi.',
    items: ['Potpuni Google Business profil sa svim uslugama', 'Strategija za prikupljanje recenzija od zadovoljnih pacijenata', 'Lokalni SEO: optimizacija za "stomatolog + grad" pretrage', 'Google Maps pakovanje sa profesionalnim fotografijama ordinacije'],
  },
  {
    title: 'Sajt koji gradi poverenje',
    desc: 'Vaš sajt je prvi utisak. Mora da izgleda profesionalno, učitava se brzo i ima jasan poziv na akciju.',
    items: ['Predstavljanje tima sa fotografijama i biografijama', 'Stranice za svaku uslugu (implanti, ortodoncija, estetika)', 'Online zakazivanje termina', 'Blog sa edukativnim sadržajem koji smanjuje strah'],
  },
  {
    title: 'Plaćeni oglasi (Google + Meta)',
    desc: 'Targetirani oglasi za ljude koji aktivno traže stomatologa ili razmišljaju o estetskoj stomatologiji.',
    items: ['Google Ads za "stomatolog + grad" pretrage (visok intent)', 'Facebook/Instagram kampanje za estetske usluge (zubne fasete, beljenje)', 'Retargeting za posetioce sajta koji nisu zakazali', 'Landing stranice optimizovane za konverziju'],
  },
  {
    title: 'Sadržaj i društvene mreže',
    desc: 'Edukativni sadržaj koji gradi autoritet i smanjuje strah od posete.',
    items: ['Kratki video snimci procedura (bez straha, sa objašnjenjem)', 'Before/after galerija (sa dozvolom pacijenata)', 'Edukativni postovi: higijena, prevencija, mitovi', 'Instagram Stories sa zakulisnim sadržajem iz ordinacije'],
  },
]

const metrics = [
  { num: '15-25', label: 'Novih pacijenata mesečno', desc: 'Prosečno povećanje za ordinacije koje koriste Google Ads + SEO kombinaciju.' },
  { num: '800€+', label: 'Vrednost novog pacijenta', desc: 'Lifetime value pacijenta koji dolazi na redovne kontrole i koristi estetske usluge.' },
  { num: '4-6x', label: 'Povrat investicije', desc: 'Za svaki uloženi euro u marketing, ordinacije zarađuju 4-6€ kroz nove pacijente.' },
]

const patientModes = [
  {
    title: 'Hitni bolovi i pacijenti koji zovu odmah',
    text: 'Kada nekoga zaboli zub, ne istražuje dugo. Traži ozbiljnu ordinaciju, jasan broj telefona i osećaj da će ga neko primiti brzo. Tu presuđuju Google vidljivost, mapa i snažan prvi utisak u nekoliko sekundi.',
    route: '/google-reklame-cena',
    routeLabel: 'Kada Search hvata najvredniji hitan intent',
  },
  {
    title: 'Implanti, ortodoncija i estetske usluge',
    text: 'Kod skupljih zahvata pacijent ne bira samo po blizini. Gleda poverenje, rezultate, objašnjenja, profil doktora i osećaj sigurnosti. Tu marketing mora da proda stručnost i iskustvo, ne samo da dovede klik.',
    route: '/izrada-wordpress-sajta-cena',
    routeLabel: 'Šta traži sajt koji mora prvo da izgradi poverenje za veći zahvat',
  },
  {
    title: 'Porodični pacijenti i redovne kontrole',
    text: 'Ovde nije poenta samo jedan termin. Poenta je da porodica nastavi da dolazi, preporuči vas i koristi više usluga kroz vreme. Zato više vrede lokalni autoritet, recenzije i uredan sistem zakazivanja nego bilo kakav agresivan oglas.',
    route: '/seo-optimizacija-cena',
    routeLabel: 'Kako lokalni SEO pravi stabilniji tok pacijenata na duži rok',
  },
  {
    title: 'Ordinacija koja želi više premium pacijenata, ne samo više upita',
    text: 'Neke ordinacije već imaju dovoljno upita, ali žele bolji miks usluga i vrednijeg pacijenta. Tada marketing mora da filtrira, ne samo da pojača broj kontakata. Fokus je na profitabilnijim procedurama i kvalitetu lead-a, ne na gomili poziva.',
    route: '/cene-digitalnog-marketinga',
    routeLabel: 'Kako budžet i paket vezati za bolju strukturu pacijenata',
  },
]

const faqs = [
  { q: 'Koliko košta marketing za stomatološku ordinaciju?', a: 'Osnovni paket (Google Business + SEO + sajt održavanje) kreće od 400€ mesečno. Sa Google Ads kampanjama, realan budžet je 700-2.000€. Za perspektivu: 5 novih pacijenata mesečno po 800€ lifetime value je 4.000€ prihoda.' },
  { q: 'Da li smemo koristiti before/after slike u oglasima?', a: 'Da, ali uz pisanu dozvolu pacijenta i uz napomenu da su rezultati individualni. Facebook ima strožija pravila za zdravstvene oglase, pa koristimo pristupe koji su u skladu sa njihovom politikom.' },
  { q: 'Koliko brzo možemo očekivati nove pacijente?', a: 'Google Ads može doneti pozive za 1-2 nedelje. SEO optimizacija daje rezultate za 2-4 meseca. Društvene mreže grade dugoročno poverenje. Kombinacija sva tri kanala je najefikasnija.' },
  { q: 'Da li radite sa ordinacijama van Beograda?', a: 'Da, radimo sa ordinacijama iz cele Srbije. Lokalni SEO je posebno bitan za manje gradove gde konkurencija online još nije jaka, što znači lakše rezultate za manje novca.' },
  { q: 'Šta ako već imamo sajt?', a: 'Analiziramo postojeći sajt i dajemo preporuke za poboljšanje. Često nije potreban potpuno nov sajt, već optimizacija brzine, SEO, dodavanje stranica za usluge i online zakazivanje.' },
]

export default function MarketingZaStomatologePage() {
  usePageMeta()
  return (
    <div className="min-h-screen bg-page">
      {/* Hero */}
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(56,189,248,0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(99,102,241,0.08) 0%, transparent 50%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(56,189,248,0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(99,102,241,0.04) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Industrija · Stomatologija</span>
          <h1 className="text-[30px] md:text-[50px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">
            Marketing za stomatologe<br />
            <span className="text-ink-2">koji donosi pacijente</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[600px] mx-auto mb-8">
            Vaša ordinacija pruža odličnu uslugu. Ali ako vas pacijenti ne mogu naći na internetu, biraće ordinaciju koja je vidljivija. Pomažemo da to budete vi.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
              Besplatna analiza ordinacije
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="#usluge" className="inline-flex items-center gap-2 text-ink-2 text-[14px] font-medium h-11 px-6 rounded-full border border-edge hover:bg-tint transition-colors">
              Pogledajte usluge
            </a>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Zašto je marketing bitan za stomatologe</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[550px] mx-auto">Diploma i veština su osnova. Ali pacijenti danas biraju ordinaciju na internetu pre nego što podignu telefon.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {challenges.map(c => (
              <div key={c.title} className="bg-panel rounded-[20px] border border-edge p-6">
                <span className="text-[28px] mb-3 block">{c.icon}</span>
                <h3 className="text-[17px] font-medium text-ink mb-2">{c.title}</h3>
                <p className="text-[14px] text-ink-2 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision layer */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[980px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <div className="max-w-[760px] mx-auto text-center mb-8">
            <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-3">Šta radi za hitne bolove, estetiku i porodične pacijente</h2>
            <p className="text-[15px] text-ink-2 leading-relaxed">
              Nije svakoj ordinaciji potreban isti marketing. Jedna hoće hitne pozive, druga gradi poverenje za implante i estetiku, treća želi stabilan tok porodičnih pacijenata. Kad to ne odvojite, marketing lako izgleda aktivno, ali ne dovodi pravu vrstu termina.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {patientModes.map((item) => (
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
            Ako niste sigurni da li ordinacija prvo treba da hvata hitne pacijente, da jača premium zahvate ili da gradi dugoročni lokalni autoritet, pošaljite nam kratak opis kroz <Link to="/kontakt" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">kontakt formu</Link> i reći ćemo vam šta ima najviše smisla da ide prvo.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-6 text-center">Brojevi koji govore</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map(m => (
              <div key={m.label} className="text-center">
                <div className="text-[32px] md:text-[40px] font-bold text-ink">{m.num}</div>
                <div className="text-[14px] font-medium text-ink-2 mb-1">{m.label}</div>
                <p className="text-[12px] text-ink-3">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="usluge" className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Usluge za stomatološke ordinacije</h2>
          <div className="space-y-6">
            {services.map(s => (
              <div key={s.title} className="bg-panel rounded-[20px] border border-edge p-6 md:p-8">
                <h3 className="text-[20px] font-medium text-ink mb-3">{s.title}</h3>
                <p className="text-[15px] text-ink-2 leading-relaxed mb-4">{s.desc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {s.items.map(item => (
                    <li key={item} className="flex gap-2 items-start">
                      <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      <span className="text-[14px] text-ink-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-gradient-to-br from-sky-500/[0.08] to-indigo-500/[0.06] rounded-[20px] border border-sky-500/[0.15] p-6 md:p-8 text-center">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-3">Besplatna analiza online prisustva vaše ordinacije</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed max-w-[550px] mx-auto mb-5">
            Pregledamo vaš Google profil, sajt, recenzije i konkurenciju. Dobijate izveštaj sa konkretnim koracima za poboljšanje. Bez ikakvih obaveza.
          </p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
            Zakažite besplatnu analizu
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      {/* Cross-links */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[20px] font-medium text-ink mb-5 text-center">Radimo i sa drugim industrijama</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/marketing-za-restorane" className="bg-panel rounded-[14px] border border-edge p-4 hover:border-ink-4 transition-colors text-center">
              <span className="text-[20px] block mb-1">🍽️</span>
              <span className="text-[14px] font-medium text-ink">Restorani</span>
            </Link>
            <Link to="/marketing-za-advokate" className="bg-panel rounded-[14px] border border-edge p-4 hover:border-ink-4 transition-colors text-center">
              <span className="text-[20px] block mb-1">⚖️</span>
              <span className="text-[14px] font-medium text-ink">Advokati</span>
            </Link>
            <Link to="/industrije/lokalni-biznisi" className="bg-panel rounded-[14px] border border-edge p-4 hover:border-ink-4 transition-colors text-center">
              <span className="text-[20px] block mb-1">🏪</span>
              <span className="text-[14px] font-medium text-ink">Lokalni biznisi</span>
            </Link>
            <Link to="/marketing-za-nekretnine" className="bg-panel rounded-[14px] border border-edge p-4 hover:border-ink-4 transition-colors text-center">
              <span className="text-[20px] block mb-1">🏢</span>
              <span className="text-[14px] font-medium text-ink">Nekretnine</span>
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-[13px]">
            <Link to="/cene-digitalnog-marketinga" className="text-ink-3 hover:text-ink transition-colors">Cene marketinga →</Link>
            <Link to="/fiksna-naknada-vs-revenue-share" className="text-ink-3 hover:text-ink transition-colors">Revenue share model →</Link>
            <Link to="/seo-optimizacija-cena" className="text-ink-3 hover:text-ink transition-colors">Cene SEO optimizacije →</Link>
            <Link to="/blog/kako-naci-pacijente-za-stomatolosku-ordinaciju-srbija-2026" className="text-ink-3 hover:text-ink transition-colors">Kako naći pacijente (2026) →</Link>
              <Link to="/blog/google-ads-vs-facebook-ads-koji-je-bolji" className="text-ink-3 hover:text-ink transition-colors">Google vs Facebook oglasi →</Link>
            <Link to="/google-reklame-cena" className="text-ink-3 hover:text-ink transition-colors">Google reklame cena →</Link>
            <Link to="/instagram-reklame-cena" className="text-ink-3 hover:text-ink transition-colors">Instagram reklame cena →</Link>
            <Link to="/blog/seo-za-stomatologe-cena-srbija-2026" className="text-ink-3 hover:text-ink transition-colors">SEO za stomatologe (2026) →</Link>
            <Link to="/blog/google-ads-za-stomatologe-cena-leada-srbija-2026" className="text-ink-3 hover:text-ink transition-colors">Google Ads za stomatologe →</Link>
            <Link to="/blog/instagram-reklame-za-stomatologe-cena-termina-srbija-2026" className="text-ink-3 hover:text-ink transition-colors">Instagram za stomatologe →</Link>
            <Link to="/blog/facebook-reklame-za-stomatologe-cena-termina-srbija-2026" className="text-ink-3 hover:text-ink transition-colors">Facebook Ads za stomatologe →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Često postavljana pitanja</h2>
          <div className="space-y-5">
            {faqs.map(f => (
              <details key={f.q} className="group bg-panel rounded-[14px] border border-edge">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-[15px] font-medium text-ink">
                  {f.q}
                  <svg className="w-4 h-4 text-ink-3 transition-transform group-open:rotate-180 flex-shrink-0 ml-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </summary>
                <div className="px-5 pb-5 text-[14px] text-ink-2 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Više pacijenata počinje na Google-u</h2>
          <p className="text-[15px] text-ink-2 mb-6">Budite ordinacija koju pacijenti nađu, pozovu i preporuče. Javite nam se i napravićemo plan prilagođen vašoj ordinaciji.</p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
            Kontaktirajte nas
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "ProfessionalService",
          "name": "Platinum Zenith - Marketing za Stomatologe",
          "url": "https://platinumzenith.com/marketing-za-stomatologe",
          "telephone": "+381668168929",
          "email": "aleksandar@platinumzenith.com",
          "serviceType": ["Marketing za stomatološke ordinacije", "Google Ads za stomatologe", "SEO za stomatologe", "Izrada sajta za ordinacije"],
          "areaServed": { "@type": "Country", "name": "Srbija" },
          "priceRange": "$$"
        }, {
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        }, {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Početna", "item": "https://platinumzenith.com/" },
            { "@type": "ListItem", "position": 2, "name": "Marketing za stomatologe", "item": "https://platinumzenith.com/marketing-za-stomatologe" }
          ]
        }]
      })}} />
    </div>
  )
}
