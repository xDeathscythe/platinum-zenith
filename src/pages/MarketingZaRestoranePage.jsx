import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  { icon: '📱', title: 'Gosti pretražuju na telefonu', desc: 'Preko 80% ljudi traži restoran na Google-u pre nego što izabere gde će jesti. Ako vas ne nađu, idu kod konkurencije.' },
  { icon: '⭐', title: 'Recenzije prave ili kvare biznis', desc: 'Jedan negativan Google review može da vas košta desetine gostiju. Pozitivne recenzije su najjači marketing koji ne košta ništa.' },
  { icon: '📸', title: 'Vizuelni sadržaj je obavezan', desc: 'Hrana se prodaje očima. Bez kvalitetnih fotografija jela, Instagram i Facebook profili su beskorisni.' },
  { icon: '🗓️', title: 'Sezonalnost i prazan termin', desc: 'Ponedeljak do srede su obično slabi dani. Marketing treba da popuni te rupe, ne samo da pojača vikend koji je ionako pun.' },
  { icon: '👥', title: 'Konkurencija na svakom ćošku', desc: 'U svakom gradu ima desetine restorana. Morate se izdvojiti ne samo hranom nego i prisustvom na internetu.' },
  { icon: '💰', title: 'Ograničen budžet', desc: 'Restorani rade na malim maržama. Svaki dinar uložen u marketing mora da se vrati kroz stolice koje su pune.' },
]

const services = [
  {
    title: 'Google Business optimizacija',
    desc: 'Vaš Google profil je digitalna vitrina restorana. Optimizujemo ga da se pojavljujete na vrhu kad neko pretraži "restoran blizu mene".',
    results: ['Kompletni podaci: meni, radno vreme, fotografije', 'Strategija za prikupljanje pozitivnih recenzija', 'Google Posts za dnevne specijalitete i događaje', 'Lokalni SEO da vas nađu gosti iz okoline'],
  },
  {
    title: 'Društvene mreže',
    desc: 'Instagram i Facebook su mesto gde gosti odlučuju gde će jesti. Kreiramo sadržaj koji izaziva glad.',
    results: ['Profesionalne fotografije jela i ambijenta', 'Content kalendar sa 3-5 objava nedeljno', 'Reels i Stories koji prikazuju pripremu hrane', 'Odgovaranje na poruke i komentare'],
  },
  {
    title: 'Plaćeni oglasi',
    desc: 'Targetirani oglasi na Instagramu i Google-u koji dovode goste u danima kad je restoran prazan.',
    results: ['Geo-targeting: prikazujemo se ljudima u radijusu od 5km', 'Retargeting: podsetimo ljude koji su posetili sajt ili profil', 'Promo kampanje za posebne događaje i praznike', 'A/B testiranje kreativa za najbolji ROAS'],
  },
  {
    title: 'Sajt i online rezervacije',
    desc: 'Sajt koji izgleda kao vaš restoran i omogućava rezervaciju u dva klika.',
    results: ['Mobile-first dizajn jer 80%+ dolazi sa telefona', 'Online meni koji se lako ažurira', 'Sistem za rezervacije integrisan sa Google-om', 'PageSpeed 90+ za brzo učitavanje'],
  },
]

const results = [
  { num: '+340%', label: 'Više pregleda na Google Maps', desc: 'Prosečno povećanje za restorane posle 3 meseca optimizacije Google Business profila.' },
  { num: '2.5x', label: 'Više rezervacija', desc: 'Kombinacija Google Ads + Instagram oglasa donosi goste u danima kad je restoran obično prazan.' },
  { num: '+180%', label: 'Rast pratilaca na Instagramu', desc: 'Konzistentan sadržaj i promo kampanje privlače nove pratioce koji postaju gosti.' },
]

const faqs = [
  { q: 'Koliko košta marketing za restoran mesečno?', a: 'Osnovni paket (Google Business + društvene mreže) kreće od 300€ mesečno. Sa plaćenim oglasima i sajt održavanjem, realan budžet je 500-1.500€. Za poređenje, jedan prazan sto na večeri vas košta 50-100€ propuštenog prihoda.' },
  { q: 'Da li nam treba sajt ako imamo Instagram?', a: 'Da. Instagram je odličan za vizuelni sadržaj, ali kad neko pretražuje "restoran za proslavu Beograd", pojavljuju se sajtovi, ne Instagram profili. Sajt je vaš na internetu, Instagram profil je Metin.' },
  { q: 'Koliko brzo možemo očekivati rezultate?', a: 'Google Business optimizacija daje rezultate za 2-4 nedelje. Društvene mreže traže 1-2 meseca konzistentnog rada. Plaćeni oglasi donose goste od prvog dana, ali optimizacija traje 2-3 nedelje.' },
  { q: 'Kako merimo da li marketing radi?', a: 'Pratimo: broj pregleda na Google-u, klikove za poziv/rutu/sajt, rezervacije, poruke na Instagramu, i naravno, koliko je gostiju više nego pre. Mesečni izveštaj sa konkretnim brojevima.' },
  { q: 'Možemo li sami voditi marketing?', a: 'Možete, ali to oduzima 2-3 sata dnevno. Za vlasnika restorana to je vreme koje može da provede u kuhinji ili sa gostima. Pitanje je šta je vrednije: vaše vreme ili mesečna naknada agenciji.' },
]

export default function MarketingZaRestoranePage() {
  usePageMeta()
  return (
    <div className="min-h-screen bg-page">
      {/* Hero */}
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(245,158,11,0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(239,68,68,0.08) 0%, transparent 50%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(245,158,11,0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(239,68,68,0.04) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Industrija · Ugostiteljstvo</span>
          <h1 className="text-[30px] md:text-[50px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">
            Marketing za restorane<br />
            <span className="text-ink-2">koji puni stolice</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[600px] mx-auto mb-8">
            Vaša hrana je odlična. Ali ako vas ljudi ne mogu naći na Google-u, to ne znaju. Pomažemo restoranima da budu vidljivi, poželjni i puni.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
              Besplatna analiza
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="#usluge" className="inline-flex items-center gap-2 text-ink-2 text-[14px] font-medium h-11 px-6 rounded-full border border-edge hover:bg-tint transition-colors">
              Šta radimo za restorane
            </a>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Izazovi za restorane u 2026</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[550px] mx-auto">Hrana je samo pola posla. Druga polovina je da vas ljudi nađu i izaberu.</p>
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

      {/* Results */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-6 text-center">Rezultati koje postižemo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.map(r => (
              <div key={r.label} className="text-center">
                <div className="text-[32px] md:text-[40px] font-bold text-ink">{r.num}</div>
                <div className="text-[14px] font-medium text-ink-2 mb-1">{r.label}</div>
                <p className="text-[12px] text-ink-3">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="usluge" className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Šta radimo za restorane</h2>
          <div className="space-y-6">
            {services.map(s => (
              <div key={s.title} className="bg-panel rounded-[20px] border border-edge p-6 md:p-8">
                <h3 className="text-[20px] font-medium text-ink mb-3">{s.title}</h3>
                <p className="text-[15px] text-ink-2 leading-relaxed mb-4">{s.desc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {s.results.map(r => (
                    <li key={r} className="flex gap-2 items-start">
                      <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      <span className="text-[14px] text-ink-2">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Share CTA */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-gradient-to-br from-amber-500/[0.08] to-red-500/[0.06] rounded-[20px] border border-amber-500/[0.15] p-6 md:p-8 text-center">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-3">Revenue share za restorane</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed max-w-[550px] mx-auto mb-5">
            Za ozbiljne restorane nudimo model gde plaćate procenat od prihoda koji naš marketing generiše. Ako ne donesemo goste, ne plaćate upravljanje kampanjama.
          </p>
          <Link to="/fiksna-naknada-vs-revenue-share" className="inline-flex items-center gap-2 text-ink-2 text-[14px] font-medium hover:text-ink transition-colors">
            Saznajte više o revenue share modelu
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      {/* Cross-links */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[20px] font-medium text-ink mb-5 text-center">Radimo i sa drugim industrijama</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/marketing-za-stomatologe" className="bg-panel rounded-[14px] border border-edge p-4 hover:border-ink-4 transition-colors text-center">
              <span className="text-[20px] block mb-1">🦷</span>
              <span className="text-[14px] font-medium text-ink">Stomatolozi</span>
            </Link>
            <Link to="/marketing-za-advokate" className="bg-panel rounded-[14px] border border-edge p-4 hover:border-ink-4 transition-colors text-center">
              <span className="text-[20px] block mb-1">⚖️</span>
              <span className="text-[14px] font-medium text-ink">Advokati</span>
            </Link>
            <Link to="/industrije/e-commerce" className="bg-panel rounded-[14px] border border-edge p-4 hover:border-ink-4 transition-colors text-center">
              <span className="text-[20px] block mb-1">🛒</span>
              <span className="text-[14px] font-medium text-ink">E-commerce</span>
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-[13px]">
            <Link to="/cene-digitalnog-marketinga" className="text-ink-3 hover:text-ink transition-colors">Cene marketinga →</Link>
            <Link to="/agencija-vs-freelancer" className="text-ink-3 hover:text-ink transition-colors">Agencija vs freelancer →</Link>
            <Link to="/koliko-kosta-facebook-reklama" className="text-ink-3 hover:text-ink transition-colors">Cene Facebook reklama →</Link>
            <Link to="/google-reklame-cena" className="text-ink-3 hover:text-ink transition-colors">Google reklame cena →</Link>
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
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Vaša hrana zaslužuje pun restoran</h2>
          <p className="text-[15px] text-ink-2 mb-6">Javite nam se za besplatnu analizu vašeg online prisustva. Pogledaćemo Google profil, društvene mreže i sajt, i dati konkretne preporuke.</p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
            Besplatna analiza
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "ProfessionalService",
          "name": "Platinum Zenith - Marketing za Restorane",
          "url": "https://platinumzenith.com/marketing-za-restorane",
          "telephone": "+381668168929",
          "email": "aleksandar@platinumzenith.com",
          "serviceType": ["Marketing za restorane", "Google Business optimizacija", "Društvene mreže za ugostiteljstvo", "Izrada sajta za restorane"],
          "areaServed": { "@type": "Country", "name": "Srbija" },
          "priceRange": "$$"
        }, {
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        }, {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Početna", "item": "https://platinumzenith.com/" },
            { "@type": "ListItem", "position": 2, "name": "Marketing za restorane", "item": "https://platinumzenith.com/marketing-za-restorane" }
          ]
        }]
      })}} />
    </div>
  )
}
