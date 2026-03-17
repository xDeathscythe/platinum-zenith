import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  { icon: '📊', title: 'Klijenti vas biraju po preporuci', desc: 'Većina računovođa zavisi od preporuka. Problem: preporuke ne skaliraju. Kad poslednji preporučeni klijent dođe, nema novog toka upita.' },
  { icon: '🔍', title: '"Računovođa Beograd" — 2.000+ pretraga', desc: 'Hiljade vlasnika firmi mesečno traže računovođu na Google-u. Ko se pojavi prvi, dobija poziv. Ko nije na prvoj strani, ne postoji.' },
  { icon: '📅', title: 'Sezonski pikovi', desc: 'Januar-mart (godišnji obračuni), oktobar (PDV registracija), osnivanje DOO tokom cele godine. Svaki pik je prilika za nove klijente ako ste vidljivi.' },
  { icon: '💰', title: 'Visoka životna vrednost klijenta', desc: 'Prosečan klijent ostaje 3-5 godina i plaća 100-500€ mesečno. Jedan novi klijent vredi 3.600-30.000€ ukupno. Marketing od 300€ za takvog klijenta je sitnica.' },
  { icon: '🏢', title: 'Niša raste', desc: 'Broj registrovanih preduzetnika i DOO-ova u Srbiji raste svake godine. Svaki od njih treba računovođu. Tržište se širi, pitanje je ko će ga pokupiti.' },
  { icon: '⚡', title: 'Online knjigovodstvo menja igru', desc: 'Cloud računovodstvo znači da lokacija više nije ograničenje. Možete raditi sa klijentima iz cele Srbije. Ali da vas nađu, morate biti online.' },
]

const serviceTypes = [
  { area: 'Knjigovodstvo za DOO', keywords: 'računovođa za doo, knjigovodstvo za firmu, mesečno knjigovodstvo', volume: 'Visok' },
  { area: 'Preduzetnici (paušalci)', keywords: 'računovođa za paušalce, paušalac porez, knjiga prihoda i rashoda', volume: 'Visok' },
  { area: 'Godišnji obračuni', keywords: 'završni račun, godišnji finansijski izveštaj, poreska prijava', volume: 'Sezonski' },
  { area: 'PDV i poreski konsalting', keywords: 'pdv registracija, poreski savetnik, poresko planiranje', volume: 'Srednji' },
  { area: 'Osnivanje firme', keywords: 'osnivanje doo, registracija firme, APR registracija', volume: 'Stalan' },
  { area: 'Obračun zarada', keywords: 'obračun plata, M4 obrazac, prijava zaposlenih', volume: 'Srednji' },
]

const services = [
  {
    title: 'SEO za računovodstvene agencije',
    desc: 'Rangiranje na Google-u za pretrage koje vaši potencijalni klijenti koriste kad im treba računovođa.',
    items: ['Optimizacija za "računovođa + grad" pretrage', 'Stranica za svaku uslugu (DOO, paušalci, PDV, zarade)', 'Blog sa odgovorima na poreska pitanja koja ljudi pretražuju', 'Google Business profil optimizovan za lokalne pretrage'],
  },
  {
    title: 'Sajt koji gradi poverenje',
    desc: 'Profesionalan sajt koji ostavlja utisak ozbiljnosti i transparentnosti cena.',
    items: ['Jasno prikazan cenovnik usluga (ljudi to traže)', 'Stranica za svaku uslugu sa detaljnim opisom šta je uključeno', 'Kontakt forma sa izborom tipa usluge (kvalifikuje upite)', 'Sekcija sa referencama i brojem klijenata'],
  },
  {
    title: 'Google Ads za računovođe',
    desc: 'Plaćeni oglasi za ljude koji aktivno traže računovođu. Posebno efikasno u sezonskim pikovima.',
    items: ['Kampanje po uslugama (DOO, paušalci, godišnji obračun)', 'Sezonske kampanje januar-mart za završne račune', 'Landing stranice sa cenovnikom i CTA za poziv', 'Call tracking za merenje koliko poziva dolazi iz oglasa'],
  },
  {
    title: 'Content marketing',
    desc: 'Edukativni sadržaj koji odgovara na pitanja koja preduzetnici postavljaju pre nego što izaberu računovođu.',
    items: ['Blog: "Paušalac ili DOO — šta se više isplati"', 'Vodiči za poreske rokove i obaveze', 'Kalkulator poreza i doprinosa', 'FAQ koji rangira za Google featured snippets'],
  },
]

const metrics = [
  { num: '15-30', label: 'Novih upita mesečno', desc: 'Prosečan broj upita za računovodstvene agencije sa SEO + Google Ads kombinacijom.' },
  { num: '6.000€+', label: 'Prosečna vrednost klijenta', desc: 'Prosečan klijent ostaje 3+ godine sa mesečnom naknadom od 150-200€.' },
  { num: '15-25x', label: 'Povrat investicije', desc: 'Za 1€ uložen u marketing, računovodstvene agencije zarađuju 15-25€ kroz nove klijente.' },
]

const faqs = [
  { q: 'Koliko košta marketing za računovodstvenu agenciju?', a: 'Osnovni paket (sajt + SEO + Google Business) kreće od 400€ mesečno. Sa Google Ads kampanjama, realan budžet je 600-1.500€ mesečno. Jedan novi klijent koji ostaje godinu dana obično pokriva troškove marketinga za ceo kvartal.' },
  { q: 'Da li se isplati ulagati u marketing kad radim sam?', a: 'Posebno tada. Solo računovođe imaju kapacitet za 30-50 klijenata. Cilj nije 100 upita mesečno, nego 3-5 kvalitetnih klijenata koji odgovaraju vašem profilu. Ciljani marketing to omogućava.' },
  { q: 'Koliko brzo mogu očekivati nove klijente?', a: 'Google Ads donosi upite za 1-2 nedelje. SEO zahteva 3-6 meseci za značajne rezultate. Preporuka je kombinacija: oglasi za brze rezultate, SEO za dugoročni tok klijenata bez plaćanja po kliku.' },
  { q: 'Koji tip sadržaja najbolje radi za računovođe?', a: 'Praktični vodiči o poreskim obavezama, rokovima, razlike između oblika poslovanja (paušalac vs DOO). Ljudi pretražuju ove teme pre nego što izaberu računovođu, i kad nađu koristan odgovor na vašem sajtu, veruju vam.' },
  { q: 'Da li radite samo sa agencijama iz velikih gradova?', a: 'Ne. Radimo sa računovodstvenim agencijama iz cele Srbije. U manjim gradovima online konkurencija je slabija, pa su rezultati brži. Ako nudite cloud knjigovodstvo, geografija uopšte nije ograničenje.' },
]

export default function MarketingZaRacunovodjePage() {
  usePageMeta()
  return (
    <div className="min-h-screen bg-page">
      {/* Hero */}
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(30,58,138,0.10) 0%, transparent 50%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(30,58,138,0.05) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Industrija · Računovodstvo</span>
          <h1 className="text-[30px] md:text-[50px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">
            Marketing za računovođe<br />
            <span className="text-ink-2">koji puni knjige klijenata</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[600px] mx-auto mb-8">
            Svaka firma u Srbiji treba računovođu. Pitanje je da li će vas naći na Google-u ili pozovati nekoga drugog. Pomažemo računovodstvenim agencijama da budu prvi izbor online.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
              Besplatna analiza
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
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Zašto računovođe gube klijente koje zaslužuju</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[550px] mx-auto">Stručnost nije problem. Problem je što vas potencijalni klijenti ne mogu da pronađu kad im treba računovođa.</p>
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

      {/* Service Types Table */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Usluge sa najvećim potencijalom za rast</h2>
          <p className="text-[15px] text-ink-3 mb-8 text-center max-w-[550px] mx-auto">Pretrage koje vlasnici firmi koriste kad traže računovođu. Svaka je prilika za novu mesečnu ugovorenu saradnju.</p>
          <div className="bg-panel rounded-[16px] border border-edge overflow-hidden">
            <div className="grid grid-cols-3 bg-tint px-5 py-3 border-b border-edge text-[12px] uppercase tracking-wider text-ink-3 font-medium">
              <span>Usluga</span>
              <span>Primeri pretraga</span>
              <span className="text-center">Volume</span>
            </div>
            {serviceTypes.map(st => (
              <div key={st.area} className="grid grid-cols-3 px-5 py-3 border-b border-edge/50 items-center">
                <span className="text-[14px] font-medium text-ink">{st.area}</span>
                <span className="text-[13px] text-ink-3">{st.keywords}</span>
                <span className={`text-[12px] text-center font-medium ${st.volume === 'Visok' ? 'text-emerald-400' : st.volume === 'Sezonski' ? 'text-orange-400' : 'text-amber-400'}`}>{st.volume}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-6 text-center">Očekivani rezultati</h2>
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
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Usluge za računovodstvene agencije</h2>
          <div className="space-y-6">
            {services.map(s => (
              <div key={s.title} className="bg-panel rounded-[20px] border border-edge p-6 md:p-8">
                <h3 className="text-[20px] font-medium text-ink mb-3">{s.title}</h3>
                <p className="text-[15px] text-ink-2 leading-relaxed mb-4">{s.desc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {s.items.map(item => (
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

      {/* CTA */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-gradient-to-br from-indigo-500/[0.08] to-blue-900/[0.06] rounded-[20px] border border-indigo-500/[0.15] p-6 md:p-8 text-center">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-3">Besplatna analiza online prisustva vaše agencije</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed max-w-[550px] mx-auto mb-5">
            Pregledamo vaš sajt, Google pozicije i konkurenciju. Dobijate izveštaj sa konkretnim koracima kako da privučete više klijenata.
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
            <Link to="/marketing-za-advokate" className="bg-panel rounded-[14px] border border-edge p-4 hover:border-ink-4 transition-colors text-center">
              <span className="text-[20px] block mb-1">⚖️</span>
              <span className="text-[14px] font-medium text-ink">Advokati</span>
            </Link>
            <Link to="/marketing-za-stomatologe" className="bg-panel rounded-[14px] border border-edge p-4 hover:border-ink-4 transition-colors text-center">
              <span className="text-[20px] block mb-1">🦷</span>
              <span className="text-[14px] font-medium text-ink">Stomatolozi</span>
            </Link>
            <Link to="/marketing-za-restorane" className="bg-panel rounded-[14px] border border-edge p-4 hover:border-ink-4 transition-colors text-center">
              <span className="text-[20px] block mb-1">🍽️</span>
              <span className="text-[14px] font-medium text-ink">Restorani</span>
            </Link>
            <Link to="/marketing-za-kozmeticke-salone" className="bg-panel rounded-[14px] border border-edge p-4 hover:border-ink-4 transition-colors text-center">
              <span className="text-[20px] block mb-1">💅</span>
              <span className="text-[14px] font-medium text-ink">Kozmetički saloni</span>
            </Link>
            <Link to="/marketing-za-frizerske-salone" className="bg-panel rounded-[14px] border border-edge p-4 hover:border-ink-4 transition-colors text-center">
              <span className="text-[20px] block mb-1">✂️</span>
              <span className="text-[14px] font-medium text-ink">Frizerski saloni</span>
            </Link>
            <Link to="/marketing-za-teretane" className="bg-panel rounded-[14px] border border-edge p-4 hover:border-ink-4 transition-colors text-center">
              <span className="text-[20px] block mb-1">🏋️</span>
              <span className="text-[14px] font-medium text-ink">Teretane</span>
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-[13px]">
            <Link to="/cene-izrade-sajta" className="text-ink-3 hover:text-ink transition-colors">Cene izrade sajta →</Link>
            <Link to="/cene-digitalnog-marketinga" className="text-ink-3 hover:text-ink transition-colors">Cene marketinga →</Link>
            <Link to="/seo-optimizacija-cena" className="text-ink-3 hover:text-ink transition-colors">SEO cene →</Link>
            <Link to="/google-reklame-cena" className="text-ink-3 hover:text-ink transition-colors">Google reklame cena →</Link>
            <Link to="/in-house-tim-vs-agencija" className="text-ink-3 hover:text-ink transition-colors">In-house vs agencija →</Link>
            <Link to="/blog/kako-izabrati-pravu-marketing-agenciju" className="text-ink-3 hover:text-ink transition-colors">Kako izabrati agenciju →</Link>
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

      {/* Related Articles */}
      <section className="px-4 md:px-8 pb-16">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[20px] md:text-[24px] font-medium text-ink mb-6 text-center">Korisni vodiči za računovođe</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/blog/google-ads-za-knjigovodstvene-agencije-cena-leada-srbija-2026" className="p-5 rounded-2xl bg-surface-1 hover:bg-surface-2 transition-colors border border-ink/5">
              <span className="text-[13px] text-ink-3 uppercase tracking-wider">Google Ads</span>
              <p className="text-[15px] font-medium text-ink mt-1">Google Ads za knjigovodstvene agencije: cena lead-a i budzet</p>
            </Link>
            <Link to="/blog/instagram-reklame-za-racunovodje-cena-klijenta-srbija-2026" className="p-5 rounded-2xl bg-surface-1 hover:bg-surface-2 transition-colors border border-ink/5">
              <span className="text-[13px] text-ink-3 uppercase tracking-wider">Instagram Ads</span>
              <p className="text-[15px] font-medium text-ink mt-1">Instagram reklame za racunovodje: koliko kosta novi klijent</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Vaša stručnost zaslužuje pune knjige klijenata</h2>
          <p className="text-[15px] text-ink-2 mb-6">Pomažemo računovodstvenim agencijama da budu vidljive tamo gde klijenti traže: na Google-u. Javite nam se za besplatnu analizu.</p>
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
          "name": "Platinum Zenith - Marketing za Računovođe",
          "url": "https://platinumzenith.com/marketing-za-racunovodje",
          "telephone": "+381668168929",
          "email": "aleksandar@platinumzenith.com",
          "serviceType": ["Marketing za računovodstvene agencije", "SEO za računovođe", "Google Ads za računovodstvo", "Izrada sajta za računovodstvenu agenciju"],
          "areaServed": { "@type": "Country", "name": "Srbija" },
          "priceRange": "$$"
        }, {
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        }, {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Početna", "item": "https://platinumzenith.com/" },
            { "@type": "ListItem", "position": 2, "name": "Marketing za računovođe", "item": "https://platinumzenith.com/marketing-za-racunovodje" }
          ]
        }]
      })}} />
    </div>
  )
}
