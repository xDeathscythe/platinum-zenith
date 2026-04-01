import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  { icon: '⚖️', title: 'Regulatorna ograničenja', desc: 'Zakon o advokaturi ima pravila o reklamiranju. Ne smete se reklamirati kao "najbolji advokat". Ali možete biti najpristutniji online.' },
  { icon: '🔍', title: '"Advokat za razvod Beograd"', desc: 'Hiljade ljudi mesečno pretražuju pravne usluge na Google-u. Kancelarija koja se prva pojavi dobija poziv. Ostale niko ne vidi.' },
  { icon: '🤝', title: 'Poverenje je sve', desc: 'Ljudi biraju advokata kome veruju. Vaš online profil, sajt i sadržaj su prvi utisak pre nego što podignu telefon.' },
  { icon: '💰', title: 'Visoka vrednost klijenta', desc: 'Jedan klijent za razvod, nasleđivanje ili poslovni spor vredi 1.000-10.000€+. Investicija od 500€ u marketing za jednog klijenta je beznačajna.' },
  { icon: '📱', title: 'Ljudi traže hitno', desc: 'Kad nekom treba advokat, treba mu odmah. Pretražuje na telefonu, zove prvu kancelariju koja izgleda ozbiljno. Nema vremena za istraživanje.' },
  { icon: '🏢', title: 'Konkurencija raste', desc: 'Sve više advokatskih kancelarija ulaže u online prisustvo. Ko počne ranije, ima prednost u rangiranju na Google-u.' },
]

const practiceAreas = [
  { area: 'Porodično pravo', keywords: 'advokat za razvod, podela imovine, starateljstvo, alimentacija', volume: 'Visok' },
  { area: 'Nasledno pravo', keywords: 'advokat za nasleđivanje, ostavinski postupak, testament', volume: 'Srednji' },
  { area: 'Radno pravo', keywords: 'otkaz na poslu, mobbing, radni spor, prava zaposlenih', volume: 'Visok' },
  { area: 'Privredno pravo', keywords: 'osnivanje firme, ugovori, poslovni sporovi, M&A', volume: 'Srednji' },
  { area: 'Krivično pravo', keywords: 'krivični advokat, odbrana u krivičnom postupku', volume: 'Srednji' },
  { area: 'Nekretnine', keywords: 'advokat za nekretnine, kupoprodajni ugovor, uknjižba', volume: 'Visok' },
]

const services = [
  {
    title: 'SEO za advokatske kancelarije',
    desc: 'Rangiranje na Google-u za pretrage koje vaši potencijalni klijenti koriste.',
    items: ['Optimizacija za "advokat + specijalizacija + grad"', 'Stranica za svaku oblast prava sa detaljnim opisom', 'Blog sa odgovorima na najčešća pravna pitanja', 'Google Business profil optimizovan za lokalne pretrage'],
  },
  {
    title: 'Sajt koji gradi autoritet',
    desc: 'Profesionalan sajt koji ostavlja utisak ozbiljnosti i kompetentnosti.',
    items: ['Predstavljanje tima sa biografijama i oblastima specijalizacije', 'Stranice za svaku oblast prava (SEO optimizovane)', 'Kontakt forma sa opisom problema (kvalifikuje upite)', 'Blog i baza znanja za pozicioniranje kao autoritet'],
  },
  {
    title: 'Google Ads za pravne usluge',
    desc: 'Plaćeni oglasi za ljude koji aktivno traže advokata. Najbrži put do novih klijenata.',
    items: ['Kampanje po oblastima prava (razvod, radno pravo, nekretnine)', 'Call-only oglasi za hitne slučajeve', 'Landing stranice optimizovane za konverziju', 'Praćenje poziva i kontakt formi za merenje ROI'],
  },
  {
    title: 'Content marketing',
    desc: 'Edukativni sadržaj koji odgovara na pitanja koja ljudi postavljaju pre nego što kontaktiraju advokata.',
    items: ['Blog postovi na teme koje ljudi pretražuju', 'Vodiči: "Šta uraditi kad...", "Kako se pripremiti za..."', 'Video objašnjenja pravnih procedura', 'FAQ sekcije koje rangiraju za featured snippets na Google-u'],
  },
]

const metrics = [
  { num: '10-20', label: 'Novih upita mesečno', desc: 'Prosečan broj kvalifikovanih upita za kancelarije koje koriste SEO + Google Ads.' },
  { num: '2.000€+', label: 'Prosečna vrednost predmeta', desc: 'Prosečna vrednost klijenta za porodično, radno i privredno pravo u Srbiji.' },
  { num: '8-12x', label: 'Povrat investicije', desc: 'Za 1€ uložen u marketing, advokatske kancelarije zarađuju 8-12€ kroz nove predmete.' },
]

const matterModes = [
  {
    title: 'Hitni predmeti gde klijent zove odmah',
    text: 'Kod krivice, pritvora, hitnog otkaza ili spora koji gori pod nogama, klijent nema strpljenja za dugačko istraživanje. Tu presuđuju ozbiljan prvi utisak, jasan broj telefona i jaka vidljivost na Google-u baš u trenutku kad traži pomoć.',
    route: '/google-reklame-cena',
    routeLabel: 'Kada Search hvata najvredniji hitan intent',
  },
  {
    title: 'Porodični i nasledni predmeti gde poverenje vodi odluku',
    text: 'Kod razvoda, starateljstva i naslednih sporova ljudi ne traže samo stručnost. Traže osećaj da će ih neko voditi mirno, jasno i bez dodatne drame. Tu više rade ton, sadržaj, recenzije i sajt koji deluje ozbiljno nego bilo kakvo agresivno oglašavanje.',
    route: '/izrada-wordpress-sajta-cena',
    routeLabel: 'Šta traži sajt koji mora prvo da izgradi poverenje',
  },
  {
    title: 'Privredni i B2B klijenti koji biraju po autoritetu',
    text: 'Kad vas traži firma, ne odlučuje samo po tome ko je prvi na Google-u. Gleda specijalizaciju, jasan fokus, iskustvo i to da li delujete kao neko ko razume poslovni rizik. Tu marketing mora da pojača autoritet, ne samo da donese klik.',
    route: '/cene-digitalnog-marketinga',
    routeLabel: 'Kako paket i budžet pratiti kroz vrednije predmete, ne samo broj upita',
  },
  {
    title: 'Kancelarija koja želi dugoročan priliv kroz sadržaj i SEO',
    text: 'Ako ne želite da svaki novi klijent zavisi od preporuke ili oglasa, morate da gradite bazu tema koje ljudi već pretražuju. To je sporije od plaćenog oglasa, ali na duži rok pravi mnogo stabilniji tok upita i jači položaj na tržištu.',
    route: '/seo-optimizacija-cena',
    routeLabel: 'Kada SEO ima više smisla od još jednog kratkoročnog push-a',
  },
]

const faqs = [
  { q: 'Da li advokati smeju da se reklamiraju?', a: 'Zakon o advokaturi ograničava klasično reklamiranje, ali ne i informativni sadržaj. Sajt, blog, Google Business profil i SEO optimizacija su potpuno dozvoljeni. Ključ je da sadržaj bude informativan i edukativan, ne reklamni u klasičnom smislu.' },
  { q: 'Koliko košta marketing za advokatsku kancelariju?', a: 'Osnovni paket (sajt + SEO + Google Business) kreće od 500€ mesečno. Sa Google Ads kampanjama, realan budžet je 800-2.500€. Jedan novi klijent obično pokriva troškove marketinga za ceo mesec.' },
  { q: 'Koliko brzo možemo očekivati nove klijente?', a: 'Google Ads donosi upite za 1-2 nedelje. SEO optimizacija zahteva 3-6 meseci za značajne rezultate. Kombinacija oba daje najbolje rezultate jer oglasi donose klijente odmah, a SEO gradi dugoročni tok.' },
  { q: 'Da li radite samo sa kancelarijama u velikim gradovima?', a: 'Ne, radimo sa kancelarijama iz cele Srbije. U manjim gradovima konkurencija online je slabija, što znači brže i jeftinije rezultate. Lokalni SEO je posebno efikasan za manje sredine.' },
  { q: 'Kako merite uspeh marketinga za advokatsku kancelariju?', a: 'Pratimo: broj upita sa sajta i Google-a, pozive (call tracking), rang na Google-u za ključne pretrage, i naravno, koliko se upita pretvori u klijente. Mesečni izveštaj sa svim brojevima.' },
]

export default function MarketingZaAdvokatePage() {
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
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Industrija · Pravo</span>
          <h1 className="text-[30px] md:text-[50px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">
            Marketing za advokate<br />
            <span className="text-ink-2">koji donosi klijente</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[600px] mx-auto mb-8">
            Kad nekome treba advokat, prvi korak je Google pretraga. Pomažemo advokatskim kancelarijama da budu vidljive, autoritativne i dostupne online.
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
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Zašto je online prisustvo bitno za advokate</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[550px] mx-auto">Reputacija se gradi godinama. Ali danas se prvi utisak formira za 5 sekundi na ekranu telefona.</p>
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

      {/* Practice Areas */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Oblasti prava sa najvećim potencijalom</h2>
          <p className="text-[15px] text-ink-3 mb-8 text-center max-w-[550px] mx-auto">Pretrage koje ljudi koriste kad im treba advokat. Svaka od ovih tema je prilika za vašu kancelariju.</p>
          <div className="bg-panel rounded-[16px] border border-edge overflow-hidden">
            <div className="grid grid-cols-3 bg-tint px-5 py-3 border-b border-edge text-[12px] uppercase tracking-wider text-ink-3 font-medium">
              <span>Oblast</span>
              <span>Primeri pretraga</span>
              <span className="text-center">Volume</span>
            </div>
            {practiceAreas.map(pa => (
              <div key={pa.area} className="grid grid-cols-3 px-5 py-3 border-b border-edge/50 items-center">
                <span className="text-[14px] font-medium text-ink">{pa.area}</span>
                <span className="text-[13px] text-ink-3">{pa.keywords}</span>
                <span className={`text-[12px] text-center font-medium ${pa.volume === 'Visok' ? 'text-emerald-400' : 'text-amber-400'}`}>{pa.volume}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision layer */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[980px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <div className="max-w-[760px] mx-auto text-center mb-8">
            <h2 className="text-[24px] md:text-[30px] font-medium text-ink mb-3">Šta radi za hitne slučajeve, porodične sporove i poslovne klijente</h2>
            <p className="text-[15px] text-ink-2 leading-relaxed">
              Nije svakoj kancelariji potreban isti marketing. Jedna lovi hitne pozive, druga gradi poverenje za porodične predmete, treća hoće ozbiljnije privredne klijente. Kad to ne odvojite, marketing lako deluje aktivno, a ne dovodi pravu vrstu predmeta.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {matterModes.map((item) => (
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
            Ako niste sigurni da li kancelarija prvo treba da hvata hitne leadove, da gradi autoritet ili da jača SEO bazu tema, pošaljite nam kratak opis kroz <Link to="/kontakt" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">kontakt formu</Link> i reći ćemo vam šta ima najviše smisla da ide prvo.
          </p>
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
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Usluge za advokatske kancelarije</h2>
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
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-3">Besplatna analiza online prisustva vaše kancelarije</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed max-w-[550px] mx-auto mb-5">
            Pregledamo vaš sajt, Google profil i pozicije za ključne pretrage. Dobijate izveštaj sa konkretnim koracima za više klijenata.
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
            <Link to="/marketing-za-stomatologe" className="bg-panel rounded-[14px] border border-edge p-4 hover:border-ink-4 transition-colors text-center">
              <span className="text-[20px] block mb-1">🦷</span>
              <span className="text-[14px] font-medium text-ink">Stomatolozi</span>
            </Link>
            <Link to="/marketing-za-restorane" className="bg-panel rounded-[14px] border border-edge p-4 hover:border-ink-4 transition-colors text-center">
              <span className="text-[20px] block mb-1">🍽️</span>
              <span className="text-[14px] font-medium text-ink">Restorani</span>
            </Link>
            <Link to="/industrije/saas" className="bg-panel rounded-[14px] border border-edge p-4 hover:border-ink-4 transition-colors text-center">
              <span className="text-[20px] block mb-1">💻</span>
              <span className="text-[14px] font-medium text-ink">SaaS</span>
            </Link>
            <Link to="/marketing-za-nekretnine" className="bg-panel rounded-[14px] border border-edge p-4 hover:border-ink-4 transition-colors text-center">
              <span className="text-[20px] block mb-1">🏢</span>
              <span className="text-[14px] font-medium text-ink">Nekretnine</span>
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-[13px]">
            <Link to="/in-house-tim-vs-agencija" className="text-ink-3 hover:text-ink transition-colors">In-house vs agencija →</Link>
            <Link to="/cene-izrade-sajta" className="text-ink-3 hover:text-ink transition-colors">Cene izrade sajta →</Link>
            <Link to="/cene-digitalnog-marketinga" className="text-ink-3 hover:text-ink transition-colors">Cene marketinga →</Link>
            <Link to="/blog/kako-izabrati-pravu-marketing-agenciju" className="text-ink-3 hover:text-ink transition-colors">Kako izabrati agenciju →</Link>
            <Link to="/google-reklame-cena" className="text-ink-3 hover:text-ink transition-colors">Google reklame cena →</Link>
            <Link to="/instagram-reklame-cena" className="text-ink-3 hover:text-ink transition-colors">Instagram reklame cena →</Link>
              <Link to="/blog/google-ads-za-advokate-cena-klijenta-srbija-2026" className="text-ink-3 hover:text-ink transition-colors">Google Ads za advokate →</Link>
              <Link to="/blog/instagram-reklame-za-advokate-cena-klijenta-srbija-2026" className="text-ink-3 hover:text-ink transition-colors">Instagram reklame za advokate →</Link>
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
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Vaša ekspertiza zaslužuje da bude vidljiva</h2>
          <p className="text-[15px] text-ink-2 mb-6">Pomažemo advokatskim kancelarijama da budu prva stvar koju potencijalni klijenti vide na Google-u. Javite nam se za besplatnu analizu.</p>
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
          "name": "Platinum Zenith - Marketing za Advokate",
          "url": "https://platinumzenith.com/marketing-za-advokate",
          "telephone": "+381668168929",
          "email": "aleksandar@platinumzenith.com",
          "serviceType": ["Marketing za advokatske kancelarije", "SEO za advokate", "Google Ads za pravne usluge", "Izrada sajta za advokatsku kancelariju"],
          "areaServed": { "@type": "Country", "name": "Srbija" },
          "priceRange": "$$"
        }, {
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        }, {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Početna", "item": "https://platinumzenith.com/" },
            { "@type": "ListItem", "position": 2, "name": "Marketing za advokate", "item": "https://platinumzenith.com/marketing-za-advokate" }
          ]
        }]
      })}} />
    </div>
  )
}
