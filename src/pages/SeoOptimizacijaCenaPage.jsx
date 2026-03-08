import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const packages = [
  {
    name: 'Osnovni SEO',
    price: '300 - 500€/mes',
    desc: 'Za firme koje tek počinju sa SEO optimizacijom. Fokus na tehničkim osnovama i lokalnom rangiranju.',
    includes: ['Tehnički SEO audit', 'Optimizacija meta tagova', 'Google Business Profile', 'Mesečni izveštaj', 'Do 10 ključnih reči'],
    forWhom: 'Mali biznisi, lokalne firme',
  },
  {
    name: 'Napredni SEO',
    price: '500 - 1.200€/mes',
    desc: 'Za firme koje žele ozbiljan rast organskog saobraćaja. Sadržaj, linkovi i tehničke optimizacije.',
    includes: ['Sve iz osnovnog paketa', '2-4 blog posta mesečno', 'Link building strategija', 'Konkurentska analiza', 'Do 30 ključnih reči', 'Optimizacija brzine sajta'],
    forWhom: 'Srednje firme, e-commerce',
  },
  {
    name: 'Premium SEO',
    price: '1.200 - 3.000€/mes',
    desc: 'Za firme u konkurentnim industrijama kojima treba agresivan pristup. Pun tim na raspolaganju.',
    includes: ['Sve iz naprednog paketa', '8+ blog postova mesečno', 'Aktivni link building', 'CRO optimizacija', 'Neograničen broj ključnih reči', 'Nedeljni izveštaji', 'Dedicirani SEO menadžer'],
    forWhom: 'Veliki e-commerce, SaaS, korporacije',
  },
]

const timeline = [
  { month: '1-2', title: 'Audit i temelji', desc: 'Tehnički audit sajta, istraživanje ključnih reči, optimizacija postojećeg sadržaja. U ovoj fazi popravljamo sve tehničke greške koje koče rangiranje.' },
  { month: '3-4', title: 'Sadržaj i linkovi', desc: 'Kreiranje novog sadržaja oko ciljanih ključnih reči. Početak link building kampanje. Prve pomake u rangiranju vidite na manje konkurentnim rečima.' },
  { month: '5-6', title: 'Rast i rezultati', desc: 'Organski saobraćaj počinje značajno da raste. Fokus na konverziji tog saobraćaja u kupce. Fino podešavanje strategije na osnovu podataka.' },
]

const myths = [
  { myth: 'SEO daje rezultate za nedelju dana', truth: 'Realan rok za prve rezultate je 3-6 meseci. Sve što obećava brže rezultate je ili prevara ili kratkoročna taktika koja može da naškodi sajtu.' },
  { myth: 'Dovoljno je jednom optimizovati sajt', truth: 'SEO je kontinuiran proces. Google menja algoritam stotine puta godišnje. Konkurencija ne spava. Potreban je stalan rad na sadržaju i tehničkim aspektima.' },
  { myth: 'Više ključnih reči = bolji rezultati', truth: 'Guglanje ključnih reči u tekst (keyword stuffing) je zastarela taktika koja danas može da vam naškodi. Fokus treba da bude na kvalitetnom sadržaju koji odgovara na pitanja korisnika.' },
  { myth: 'SEO je samo za velike firme', truth: 'Lokalni SEO može biti izuzetno isplativ za male firme. Kad neko u vašem gradu pretražuje uslugu koju nudite, vi treba da budete prvi rezultat.' },
]

const faqs = [
  { q: 'Koliko brzo mogu da očekujem rezultate?', a: 'Za lokalne pretrage, prvi pomaci su vidljivi za 1-2 meseca. Za konkurentne nacionalne pretrage, ozbiljni rezultati dolaze posle 4-6 meseci kontinuiranog rada.' },
  { q: 'Da li garantujete prvu poziciju na Google-u?', a: 'Ne. Niko ne može da garantuje prvu poziciju jer Google algoritam kontroliše rangiranje. Ono što garantujemo je transparentan rad i merljive rezultate.' },
  { q: 'Šta ako već imam agenciju koja radi SEO?', a: 'Radimo besplatni SEO audit vašeg sajta i kažemo vam konkretno šta se radi dobro, a šta bi moglo bolje. Na osnovu toga odlučujete.' },
  { q: 'Da li SEO zamenjuje plaćene oglase?', a: 'Ne zamenjuje, dopunjuje. SEO donosi besplatan saobraćaj dugoročno, dok plaćeni oglasi daju trenutne rezultate. Idealno je kombinovati oba.' },
  { q: 'Šta je uključeno u mesečni izveštaj?', a: 'Pozicije za ciljane ključne reči, organski saobraćaj, konverzije, urađeni radovi tog meseca i plan za sledeći mesec. Sve transparentno i merljivo.' },
]

export default function SeoOptimizacijaCenaPage() {
  usePageMeta()

  return (
    <div className="min-h-screen bg-page">
      {/* Hero */}
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(168,85,247,0.1) 0%, transparent 50%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(168,85,247,0.06) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Vodič kroz cene</span>
          <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">
            Koliko košta SEO optimizacija u Srbiji?
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[600px] mx-auto">
            Realne cene SEO usluga za 2026. godinu. Od osnovnog lokalnog SEO-a do agresivnih nacionalnih kampanja. Bez skrivenih troškova, sa jasnim rokovima.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {packages.map(p => (
            <div key={p.name} className="bg-panel rounded-[20px] border border-edge p-6 md:p-8 flex flex-col">
              <div className="text-[12px] text-ink-4 uppercase tracking-widest mb-2">{p.forWhom}</div>
              <h2 className="text-[22px] font-medium text-ink mb-1">{p.name}</h2>
              <div className="text-[24px] md:text-[28px] font-bold text-ink mb-4">{p.price}</div>
              <p className="text-[14px] text-ink-2 leading-relaxed mb-5">{p.desc}</p>
              <ul className="space-y-2 mt-auto">
                {p.includes.map(item => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-ink-2">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Šta da očekujete i kada?</h2>
          <div className="space-y-6">
            {timeline.map(t => (
              <div key={t.month} className="flex gap-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-[14px] bg-tint flex flex-col items-center justify-center">
                  <span className="text-[18px] font-bold text-ink leading-none">{t.month}</span>
                  <span className="text-[10px] text-ink-3 uppercase">mesec</span>
                </div>
                <div>
                  <h3 className="text-[17px] font-medium text-ink mb-1">{t.title}</h3>
                  <p className="text-[15px] text-ink-2 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Myths */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Mitovi o SEO optimizaciji</h2>
          <div className="space-y-5">
            {myths.map(m => (
              <div key={m.myth} className="bg-panel rounded-[16px] border border-edge p-6">
                <div className="text-[14px] font-medium text-red-400 mb-2 line-through">{m.myth}</div>
                <p className="text-[15px] text-ink-2 leading-relaxed">{m.truth}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-6 text-center">Kako mi radimo SEO?</h2>
          <div className="text-[15px] text-ink-2 leading-relaxed space-y-4">
            <p>Počinjemo sa detaljnim auditom vašeg sajta. Gledamo tehničke greške, brzinu učitavanja, strukturu sadržaja i profil linkova. Na osnovu toga pravimo plan sa jasnim prioritetima.</p>
            <p>Fokusiramo se na ključne reči koje vaši potencijalni kupci zaista pretražuju. Ne one sa najviše pretraga, nego one sa najboljom namerom kupovine. Razlika je kao između "šta je SEO" i "SEO agencija Zrenjanin".</p>
            <p>Svaki mesec dobijate izveštaj sa konkretnim brojevima. Pozicije, saobraćaj, konverzije. Bez marketinških fraza, samo podaci na osnovu kojih možete da donesete odluku.</p>
            <p>Za ozbiljne projekte nudimo <Link to="/paketi" className="text-ink underline">revenue share model</Link>. Naša zarada je direktno vezana za vaš rast, što znači da imamo isti cilj.</p>
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

      {/* Internal links */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[22px] font-medium text-ink mb-6 text-center">Povezane stranice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/cene-digitalnog-marketinga" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene digitalnog marketinga</div>
              <div className="text-[12px] text-ink-3">Kompletni paketi po mesečnoj ceni</div>
            </Link>
            <Link to="/cene-izrade-sajta" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene izrade sajta</div>
              <div className="text-[12px] text-ink-3">Koliko košta sajt u Srbiji 2026</div>
            </Link>
            <Link to="/web-design" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Web dizajn</div>
              <div className="text-[12px] text-ink-3">Sajtovi koji pretvaraju posetioce u klijente</div>
            </Link>
            <Link to="/blog/lokalni-seo-kako-se-pojaviti-prvi" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Lokalni SEO vodič</div>
              <div className="text-[12px] text-ink-3">Kako da se pojavite prvi u svom gradu</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Besplatan SEO audit vašeg sajta</h2>
          <p className="text-[15px] text-ink-2 mb-6">Analiziramo vaš sajt i kažemo vam konkretno gde gubite pozicije i šta treba popraviti. Bez obaveza.</p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
            Zatražite besplatan audit
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      {/* JSON-LD FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      })}} />
    </div>
  )
}
