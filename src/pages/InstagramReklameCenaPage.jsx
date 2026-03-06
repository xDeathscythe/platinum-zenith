import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const budgetTiers = [
  {
    name: 'Test faza',
    budget: '200 - 600€/mes',
    desc: 'Za firme koje prvi put kreću sa Instagram oglasima. Cilj je da brzo nađemo kreativu i publiku koja daje upite ili prodaju.',
    results: ['150-500 klikova mesečno', 'Test 3-6 kreativa', 'Jasni podaci o CPC i CTR', 'Dovoljno za lokalni ili nišni biznis'],
    forWhom: 'Mali biznisi i preduzetnici',
  },
  {
    name: 'Stabilan rast',
    budget: '600 - 1.800€/mes',
    desc: 'Za firme koje žele predvidljiviji priliv upita. Kombinujemo prospecting i retargeting kampanje sa redovnim testovima.',
    results: ['500-2.500 klikova mesečno', 'Kampanje za hladnu i toplu publiku', 'A/B test hook-a, vizuala i CTA', 'Bolja cena po upitu kroz optimizaciju'],
    forWhom: 'Usluge, e-commerce i lokalni brendovi',
  },
  {
    name: 'Skaliranje',
    budget: '1.800 - 5.000€/mes',
    desc: 'Za firme koje su dokazale da Instagram donosi prodaju. Fokus je na skaliranju bez pada profitabilnosti.',
    results: ['2.500-9.000+ klikova', 'Always-on funnel struktura', 'UGC + video + static miks kreativa', 'Napredna optimizacija po događajima'],
    forWhom: 'Brendovi sa stabilnim offerom i timom za prodaju',
  },
  {
    name: 'Enterprise',
    budget: '5.000€+/mes',
    desc: 'Za veće sisteme i više tržišta. Dediciran tim radi na kreativama, funnelu i atribuciji po profitnim segmentima.',
    results: ['Veliki doseg i obim leadova/prodaja', 'Više kampanja po segmentima publike', 'Kreative po fazama funnel-a', 'Skaliranje po margini i LTV-u'],
    forWhom: 'Nacionalni i regionalni brendovi',
  },
]

const costBreakdown = [
  {
    item: 'Budžet za prikaz i klik (Meta)',
    desc: 'Ovo ide direktno Meta platformi za prikazivanje oglasa na Instagramu. Dnevni i mesečni limit su pod vašom kontrolom.',
  },
  {
    item: 'Upravljanje kampanjama',
    desc: 'Planiranje, postavka, optimizacija i izveštavanje. U praksi najčešće ide kao fiksna naknada ili procenat medija.',
  },
  {
    item: 'Produkcija kreativa',
    desc: 'Instagram je kreativa-first kanal. Ako su hook i vizual slabi, ni najbolja publika neće spasiti rezultat.',
  },
  {
    item: 'Landing i konverzije',
    desc: 'Kada klik stigne na lošu stranicu, novac se gubi. Dobar landing često pravi veću razliku od većeg budžeta.',
  },
]

const metrics = [
  {
    metric: 'CPC (Srbija)',
    srbija: '0,05 - 0,35€',
    note: 'Cena klika zavisi od niše, kvaliteta kreative i konkurencije. Vizuelno jake industrije obično prolaze jeftinije.',
  },
  {
    metric: 'CPM (Srbija)',
    srbija: '2 - 9€',
    note: 'CPM može da poraste kada se publika zasiti ili kada kreativa ne privlači pažnju u prvih 1-2 sekunde.',
  },
  {
    metric: 'CPA (lead/prodaja)',
    srbija: '3 - 30€',
    note: 'Raspon je širok jer zavisi od cene ponude, landing stranice i kvaliteta prodajnog procesa posle klika.',
  },
  {
    metric: 'ROAS',
    srbija: '2,5x - 9x',
    note: 'Za ozbiljno skaliranje cilj je stabilan ROAS uz rast budžeta, a ne kratkoročni pik pa pad performansi.',
  },
]

const mistakes = [
  {
    title: 'Previše "lepe" a premalo prodajne kreative',
    text: 'Instagram kreativa mora da zaustavi skrol i da jasno kaže šta korisnik dobija. Ako je samo estetski lepa, a poruka slaba, klikovi i prodaja pate.',
  },
  {
    title: 'Ignorisanje prve 2 sekunde videa',
    text: 'Prve sekunde odlučuju da li neko ostaje ili odlazi. Slab hook ruši watch rate i diže cenu po rezultatu.',
  },
  {
    title: 'Nema testiranja više uglova ponude',
    text: 'Jedan copy angle retko nosi kampanju dugo. Potrebno je testirati više ulaza: problem, želja, social proof, cena, brzina rezultata.',
  },
  {
    title: 'Slab retargeting',
    text: 'Većina korisnika ne kupuje na prvi dodir. Bez retargetinga gubite publiku koja je već pokazala interesovanje.',
  },
  {
    title: 'Optimizacija po vanity metricima',
    text: 'Lajkovi i pregledi nisu cilj sami po sebi. Bitni su upiti, prodaja i profit po kampanji.',
  },
]

const faqs = [
  {
    q: 'Koliko je realno potrebno za početak?',
    a: 'Praktičan minimum je oko 200-300€ za medijski budžet plus upravljanje. Ispod toga je teško doneti kvalitetne zaključke iz podataka.',
  },
  {
    q: 'Da li Instagram oglasi rade i za uslužne biznise?',
    a: 'Da, posebno kada postoji jasan problem i dobra ponuda. Ključ je kvalitetan hook i jasna sledeća akcija na landing stranici.',
  },
  {
    q: 'Koliko brzo se vide rezultati?',
    a: 'Prve signale vidite brzo, ali za stabilne brojke i ozbiljnu optimizaciju obično treba 2-4 nedelje kontinuiranog rada.',
  },
  {
    q: 'Instagram ili Facebook oglasi?',
    a: 'U praksi su to iste Meta kampanje, ali format i ponašanje publike su različiti. Najčešće najbolje radi kombinacija oba placement-a.',
  },
  {
    q: 'Da li je UGC obavezan?',
    a: 'Nije obavezan, ali često značajno pomaže performanse jer izgleda prirodnije i gradi poverenje brže nego klasičan polished ad.',
  },
]

export default function InstagramReklameCenaPage() {
  usePageMeta()

  return (
    <div className="min-h-screen bg-page">
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(236,72,153,0.16) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(99,102,241,0.12) 0%, transparent 50%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(236,72,153,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(99,102,241,0.06) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 max-w-[820px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Instagram Ads vodič</span>
          <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">
            Koliko koštaju Instagram reklame u Srbiji 2026?
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[640px] mx-auto">
            Realni budžeti, cena klika, česte greške i šta možete očekivati po fazama rasta. Fokus na rezultatima, ne na praznim metrikama.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Budžeti po fazama</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {budgetTiers.map(t => (
              <div key={t.name} className="bg-panel rounded-[20px] border border-edge p-6 md:p-8 flex flex-col min-h-[340px]">
                <div className="text-[12px] text-ink-4 uppercase tracking-widest mb-2">{t.forWhom}</div>
                <h3 className="text-[22px] font-medium text-ink mb-1">{t.name}</h3>
                <div className="text-[28px] md:text-[32px] font-bold text-ink mb-4">{t.budget}</div>
                <p className="text-[14px] text-ink-2 leading-relaxed mb-5">{t.desc}</p>
                <ul className="space-y-2 mt-auto">
                  {t.results.map(r => (
                    <li key={r} className="flex items-start gap-2 text-[13px] text-ink-2">
                      <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-4 text-center">Gde ide budžet?</h2>
          <p className="text-[15px] text-ink-3 text-center mb-10 max-w-[600px] mx-auto">
            Kada neko kaže "Instagram oglasi koštaju X", najčešće meša medijski budžet i operativni rad. Ovde je jasna podela.
          </p>
          <div className="space-y-5">
            {costBreakdown.map(c => (
              <div key={c.item} className="bg-panel rounded-[16px] border border-edge p-5 md:p-6">
                <h3 className="text-[16px] font-medium text-ink mb-2">{c.item}</h3>
                <p className="text-[14px] text-ink-2 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-4 text-center">Benchmark za srpsko tržište</h2>
          <p className="text-[15px] text-ink-3 text-center mb-10 max-w-[620px] mx-auto">
            Ovi rasponi su praktičan orijentir da znate da li je kampanja u zdravoj zoni ili traži ozbiljnu optimizaciju.
          </p>
          <div className="space-y-4">
            {metrics.map(m => (
              <div key={m.metric} className="bg-panel rounded-[16px] border border-edge p-5 md:p-6 flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-[260px] flex-shrink-0">
                  <div className="text-[15px] font-medium text-ink">{m.metric}</div>
                  <div className="text-[20px] font-bold text-ink mt-1">{m.srbija}</div>
                </div>
                <p className="text-[14px] text-ink-2 leading-relaxed">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">5 grešaka koje dižu trošak</h2>
          <div className="space-y-8">
            {mistakes.map((m, i) => (
              <div key={m.title}>
                <h3 className="text-[17px] font-medium text-ink mb-2">
                  <span className="text-ink-4 mr-2">{i + 1}.</span>{m.title}
                </h3>
                <p className="text-[15px] text-ink-2 leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Česta pitanja</h2>
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

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[22px] font-medium text-ink mb-6 text-center">Povezane stranice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/koliko-kosta-facebook-reklama" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Facebook reklame cena</div>
              <div className="text-[12px] text-ink-3">Meta vodič kroz troškove</div>
            </Link>
            <Link to="/google-reklame-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Google reklame cena</div>
              <div className="text-[12px] text-ink-3">Uporedi Search i Social kanal</div>
            </Link>
            <Link to="/cene-digitalnog-marketinga" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene digitalnog marketinga</div>
              <div className="text-[12px] text-ink-3">Komplet vodič po uslugama</div>
            </Link>
            <Link to="/digitalni-marketing" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Digitalni marketing</div>
              <div className="text-[12px] text-ink-3">Zenith sistem za rast</div>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Želite realnu procenu za Instagram Ads?</h2>
          <p className="text-[15px] text-ink-2 mb-6">
            Pošaljite nam ponudu, ciljnu publiku i prosečnu vrednost kupca. Dobićete okvir budžeta i plan test faze pre skaliranja.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors"
          >
            Zakažite besplatne konsultacije
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </div>
  )
}
