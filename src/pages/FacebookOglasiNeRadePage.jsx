import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const symptoms = [
  { icon: '💸', title: 'Trošite budžet, a nema rezultata', desc: 'Novac odlazi, CTR pada, konverzija je nula. Algoritam troši budžet na publiku koja nikad neće kupiti.' },
  { icon: '👻', title: 'Prikazivanja ima, klikova nema', desc: 'Facebook prikazuje oglas hiljadama ljudi, ali niko ne klikne. Problem je ili u kreativu ili u targetiranju.' },
  { icon: '📉', title: 'Kampanja je radila, pa odjednom stala', desc: 'Klasičan ad fatigue. Ista publika je videla isti oglas previše puta i prestala da reaguje.' },
  { icon: '🚫', title: 'Oglasi se ne odobravaju', desc: 'Facebook odbija oglase bez jasnog objašnjenja. Obično je problem u tekstu, slici ili landing stranici.' },
  { icon: '🔄', title: 'CPC raste iz meseca u mesec', desc: 'Cena po kliku stalno raste jer se takmičite sa sve više oglašivača za istu publiku.' },
  { icon: '🤷', title: 'Ne znate šta menjati', desc: 'Gledate u Ads Manager, vidite brojeve, ali ne znate koji od njih je problem i šta treba podesiti.' },
]

const reasons = [
  {
    num: '01',
    title: 'Pogrešna struktura kampanje',
    problem: 'Većina pravi jednu kampanju sa jednim ad setom i jednim oglasom. Facebook nema prostora da optimizuje.',
    fix: 'Pravilna struktura znači odvojene kampanje za hladnu i toplu publiku, više ad setova za testiranje, i minimum 3-5 kreativa po ad setu.'
  },
  {
    num: '02',
    title: 'Loš ili generičan kreativ',
    problem: 'Stockfoto sa natpisom "20% popusta" ne privlači pažnju u feedu gde se svi bore za sekund pažnje.',
    fix: 'Kreativ mora da zaustavi skrolovanje. UGC video, before/after, konkretni rezultati. Tekst koji govori o problemu kupca, ne o vašem proizvodu.'
  },
  {
    num: '03',
    title: 'Targetiranje previše široko ili previše usko',
    problem: 'Previše široko i Facebook troši budžet nasumično. Previše usko i nema dovoljno ljudi da algoritam nauči ko kupuje.',
    fix: 'Idealna veličina publike je 500K-2M za konverzijske kampanje. Koristite lookalike publike na bazi pravih kupaca, ne na bazi lajkova.'
  },
  {
    num: '04',
    title: 'Landing stranica ne konvertuje',
    problem: 'Oglas radi posao i dovodi ljude na sajt. Ali sajt je spor, nije optimizovan za telefon, ili nema jasan poziv na akciju.',
    fix: 'Landing stranica mora da se učita za manje od 3 sekunde, da ima jedan jasan CTA, i da nastavlja priču koju oglas je počeo.'
  },
  {
    num: '05',
    title: 'Nema Pixel ili Conversions API',
    problem: 'Bez praćenja konverzija, Facebook ne zna ko je kupio. Algoritam optimizuje za klikove umesto za prodaju.',
    fix: 'Meta Pixel + Conversions API (server-side tracking) su obavezni. Bez njih bacate novac jer Facebook ne zna šta je uspeh.'
  },
  {
    num: '06',
    title: 'Nedovoljan budžet za fazu učenja',
    problem: 'Facebook-u treba 50 konverzija nedeljno da izađe iz faze učenja. Sa 5€ dnevno to je nemoguće.',
    fix: 'Minimalan budžet za ozbiljnu kampanju je 15-20€ dnevno po ad setu. Ako ne možete toliko, počnite sa jednim ad setom i skalirajte kad proradi.'
  },
]

const warningBullets = [
  'Agencija ili freelancer ne deli pristup Ads Manager-u',
  'Niko ne testira nove kreative svake nedelje',
  'Retargeting publika ne postoji ili je zastarela',
  'Nema A/B testova na landing stranici',
  'Izveštaj sadrži samo impresije i klikove, ne i ROAS',
  'Ista kampanja radi mesecima bez promena',
]

const faqs = [
  { q: 'Koliko traje dok Facebook kampanja počne da daje rezultate?', a: 'Faza učenja traje 3-7 dana. Pravi rezultati se vide posle 2-3 nedelje kada algoritam sakupi dovoljno podataka. Ako posle mesec dana nema poboljšanja, problem je u strategiji.' },
  { q: 'Koliko treba uložiti u Facebook oglase mesečno?', a: 'Minimum 500€ mesečno za ozbiljne rezultate, plus troškovi upravljanja kampanjom. Sa manjim budžetom se može testirati, ali algoritam radi najbolje sa 15-20€ dnevno po ad setu.' },
  { q: 'Da li Facebook oglasi rade za B2B?', a: 'Da, ali drugačije nego za B2C. Za B2B koristite lead gen forme, whitepaper/e-book ponude i retargeting na osnovu poseta sajtu. LinkedIn je bolji za direktne prodajne poruke, ali Facebook je jeftiniji za awareness.' },
  { q: 'Zašto moj ROAS opada vremenom?', a: 'Najčešći razlog je ad fatigue, jer ista publika vidi iste oglase. Drugi razlog je povećana konkurencija u aukciji. Rešenje: novi kreativ svake 1-2 nedelje i širenje publike.' },
  { q: 'Da li je bolje koristiti automatsko ili ručno bidovanje?', a: 'Za većinu biznisa, automatsko (lowest cost) je bolji izbor. Ručno bidovanje ima smisla tek kad imate dovoljno podataka i jasno znate koliko vam jedna konverzija vredi.' },
]

export default function FacebookOglasiNeRadePage() {
  usePageMeta()
  return (
    <div className="min-h-screen bg-page">
      {/* Hero */}
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 40% 30%, rgba(239,68,68,0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 70%, rgba(99,102,241,0.10) 0%, transparent 50%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 40% 30%, rgba(239,68,68,0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 70%, rgba(99,102,241,0.05) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Dijagnostika · Rešenja</span>
          <h1 className="text-[30px] md:text-[50px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">
            Facebook oglasi ne rade?<br />
            <span className="text-ink-2">Evo zašto i kako to popraviti.</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[600px] mx-auto mb-8">
            Trošite budžet na Facebook oglase, ali rezultati ne dolaze. Niste jedini. Ovo je pregled najčešćih problema i konkretnih koraka da ih rešite.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
              Besplatna analiza kampanje
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="#dijagnostika" className="inline-flex items-center gap-2 text-ink-2 text-[14px] font-medium h-11 px-6 rounded-full border border-edge hover:bg-tint transition-colors">
              Dijagnostika problema
            </a>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Prepoznajete nešto od ovoga?</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center max-w-[550px] mx-auto">Ako vam je barem jedan od ovih problema poznat, vaša kampanja ima strukturalni problem koji se neće rešiti sam od sebe.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {symptoms.map(s => (
              <div key={s.title} className="bg-panel rounded-[20px] border border-edge p-6">
                <span className="text-[28px] mb-3 block">{s.icon}</span>
                <h3 className="text-[17px] font-medium text-ink mb-2">{s.title}</h3>
                <p className="text-[14px] text-ink-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnosis */}
      <section id="dijagnostika" className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">6 razloga zašto Facebook oglasi ne rade</h2>
          <p className="text-[15px] text-ink-3 mb-10 text-center">I šta konkretno da uradite za svaki od njih.</p>
          <div className="space-y-10">
            {reasons.map(r => (
              <div key={r.num} className="relative pl-14">
                <span className="absolute left-0 top-0 text-[28px] font-bold text-ink/[0.08]">{r.num}</span>
                <h3 className="text-[18px] font-medium text-ink mb-3">{r.title}</h3>
                <div className="space-y-2">
                  <div className="bg-red-500/[0.06] border border-red-500/[0.12] rounded-[12px] px-4 py-3">
                    <span className="text-[12px] font-medium text-red-400 uppercase tracking-wide">Problem</span>
                    <p className="text-[14px] text-ink-2 leading-relaxed mt-1">{r.problem}</p>
                  </div>
                  <div className="bg-emerald-500/[0.06] border border-emerald-500/[0.12] rounded-[12px] px-4 py-3">
                    <span className="text-[12px] font-medium text-emerald-400 uppercase tracking-wide">Rešenje</span>
                    <p className="text-[14px] text-ink-2 leading-relaxed mt-1">{r.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-5">🚩 Crvene zastavice da nešto nije u redu</h2>
          <p className="text-[14px] text-ink-3 mb-5">Ako se prepoznajete u tri ili više stavki, vreme je za ozbiljnu reviziju kampanje.</p>
          <ul className="space-y-3">
            {warningBullets.map(b => (
              <li key={b} className="flex gap-3 items-start">
                <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/></svg>
                <span className="text-[15px] text-ink-2">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What We Do Differently */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto text-center">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-5">Kako mi pristupamo Facebook oglasima</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed max-w-[600px] mx-auto mb-10">
            Ne prodajemo pakete. Analiziramo vaš biznis, postavimo merljive ciljeve, i gradimo kampanje koje se isplate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            <div className="bg-panel rounded-[20px] border border-edge p-6">
              <div className="w-10 h-10 rounded-full bg-tint flex items-center justify-center text-[18px] mb-4">🔬</div>
              <h3 className="text-[16px] font-medium text-ink mb-2">Audit postojeće kampanje</h3>
              <p className="text-[14px] text-ink-2 leading-relaxed">Pregledamo vaš Ads Manager, Pixel setup, landing stranice i kreative. Identifikujemo gde curi budžet.</p>
            </div>
            <div className="bg-panel rounded-[20px] border border-edge p-6">
              <div className="w-10 h-10 rounded-full bg-tint flex items-center justify-center text-[18px] mb-4">🎯</div>
              <h3 className="text-[16px] font-medium text-ink mb-2">Nova strategija i testiranje</h3>
              <p className="text-[14px] text-ink-2 leading-relaxed">Postavljamo čistu strukturu, pravimo nove kreative, testiramo publike. Svaka odluka se zasniva na podacima.</p>
            </div>
            <div className="bg-panel rounded-[20px] border border-edge p-6">
              <div className="w-10 h-10 rounded-full bg-tint flex items-center justify-center text-[18px] mb-4">📊</div>
              <h3 className="text-[16px] font-medium text-ink mb-2">Skaliranje pobednika</h3>
              <p className="text-[14px] text-ink-2 leading-relaxed">Kad nađemo kombinaciju koja radi, skaliramo pažljivo. Pratimo ROAS, CPA i lifetime value, ne samo klikove.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Share CTA */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-gradient-to-br from-indigo-500/[0.08] to-purple-500/[0.08] rounded-[20px] border border-indigo-500/[0.15] p-6 md:p-8 text-center">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-3">Revenue share model</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed max-w-[550px] mx-auto mb-5">
            Za ozbiljne projekte nudimo model gde naša zarada zavisi od vaših rezultata. Ako kampanja ne donosi profit, mi ne zarađujemo. Jednostavno.
          </p>
          <Link to="/fiksna-naknada-vs-revenue-share" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
            Saznajte više
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[20px] font-medium text-ink mb-5 text-center">Povezani vodiči</h2>
          <div className="flex flex-wrap justify-center gap-3 text-[13px]">
            <Link to="/koliko-kosta-facebook-reklama" className="bg-panel rounded-full border border-edge px-4 py-2 text-ink-2 hover:border-ink-4 transition-colors">Cene Facebook reklama →</Link>
            <Link to="/web-shop-nema-prodaju" className="bg-panel rounded-full border border-edge px-4 py-2 text-ink-2 hover:border-ink-4 transition-colors">Web shop nema prodaju? →</Link>
            <Link to="/cene-digitalnog-marketinga" className="bg-panel rounded-full border border-edge px-4 py-2 text-ink-2 hover:border-ink-4 transition-colors">Cene digitalnog marketinga →</Link>
            <Link to="/agencija-vs-freelancer" className="bg-panel rounded-full border border-edge px-4 py-2 text-ink-2 hover:border-ink-4 transition-colors">Agencija vs freelancer →</Link>
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
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Dosta bacanja para na oglase koji ne rade</h2>
          <p className="text-[15px] text-ink-2 mb-6">Pošaljite nam pristup Ads Manager-u i dobićete besplatnu analizu kampanje sa konkretnim preporukama. Bez obaveza.</p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
            Besplatna analiza kampanje
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "Article",
          "headline": "Facebook oglasi ne rade? 6 razloga i kako to popraviti",
          "author": { "@type": "Person", "name": "Aleksandar Nenadović" },
          "publisher": { "@type": "Organization", "name": "Platinum Zenith" },
          "datePublished": "2026-03-04",
          "url": "https://platinumzenith.com/facebook-oglasi-ne-rade"
        }, {
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        }, {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Početna", "item": "https://platinumzenith.com/" },
            { "@type": "ListItem", "position": 2, "name": "Facebook oglasi ne rade?", "item": "https://platinumzenith.com/facebook-oglasi-ne-rade" }
          ]
        }]
      })}} />
    </div>
  )
}
