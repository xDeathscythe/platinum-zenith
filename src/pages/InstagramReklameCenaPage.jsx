import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import RelatedBlogPosts from '../components/RelatedBlogPosts'
import { blogIndexPosts } from './blog/blogIndexData'

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

const managementPricing = [
  {
    model: 'Freelance / mikro tim',
    fee: '120 - 280€/mes',
    bestFor: 'Mali biznisi sa manjim brojem kampanja i jednostavnim offerom.',
    caution: 'Često ne uključuje redovne creative testove, UGC produkciju i naprednu analitiku.',
  },
  {
    model: 'Specijalizovana agencija',
    fee: '250 - 650€/mes',
    bestFor: 'Brendovi koji žele kontinuiranu optimizaciju kreativa, publika i funnel-a.',
    caution: 'Pre dogovora proveriti da li su u cenu uključeni testovi, tracking i mesečni plan eksperimenata.',
  },
  {
    model: 'Enterprise vođenje',
    fee: '650€+ / mes ili % budžeta',
    bestFor: 'Veći budžeti, više tržišta i timovi kojima treba skaliranje po profitabilnosti.',
    caution: 'Visoka naknada ima smisla samo uz jasan ownership nad KPI-jevima i ritam optimizacije.',
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

const industryBenchmarks = [
  {
    niche: 'E-commerce (fashion / beauty / lifestyle)',
    cpc: '0,10 - 0,45€',
    cpa: '6 - 28€',
    budget: '500 - 2.500€/mes',
    note: 'Najviše utiču refresh kreativa i kvalitet product page-a. Bez redovnog testiranja CPC brzo raste.',
  },
  {
    niche: 'Lokalne usluge (saloni, fitnes, ordinacije)',
    cpc: '0,06 - 0,30€',
    cpa: '4 - 20€',
    budget: '300 - 1.500€/mes',
    note: 'Jasna lokalna ponuda i jak CTA obično donose najbolji odnos cena-kvalitet upita.',
  },
  {
    niche: 'Premium usluge (B2B, konsultacije, high-ticket)',
    cpc: '0,25 - 0,95€',
    cpa: '18 - 90€',
    budget: '900 - 5.000€/mes',
    note: 'Klik je skuplji, ali je vrednost klijenta veća pa je fokus na kvalifikaciji i brzom follow-up-u.',
  },
]

const reelsBenchmarks = [
  {
    placement: 'Instagram Reels (cold publika)',
    cpm: '2,5 - 8,5€',
    cpc: '0,07 - 0,32€',
    cpa: '5 - 24€',
    note: 'Najbolje radi kratki UGC format sa jasnim hook-om u prvih 1-2 sekunde i jednim CTA-om.',
  },
  {
    placement: 'Instagram Stories (retargeting)',
    cpm: '1,8 - 6,5€',
    cpc: '0,05 - 0,26€',
    cpa: '4 - 18€',
    note: 'Stories placement često daje jeftiniji remarketing kada postoji jak proof i vremenski limit ponude.',
  },
  {
    placement: 'Instagram Feed (mixed funnel)',
    cpm: '3 - 10€',
    cpc: '0,10 - 0,40€',
    cpa: '6 - 30€',
    note: 'Feed je stabilan za kombinaciju edukacije i prodaje, ali zahteva češći creative refresh da CPC ne ode gore.',
  },
]

const ninetyDayPlan = [
  {
    phase: 'Dani 1-30: Validacija',
    objective: 'Potvrditi poruku i publiku',
    steps: [
      'Lansiranje 3-5 kreativnih uglova (problem, rezultat, social proof)',
      'Podela publike na cold/warm i odvajanje retargeting seta',
      'Praćenje CTR, CPC i prvih lead quality signala',
    ],
  },
  {
    phase: 'Dani 31-60: Optimizacija',
    objective: 'Spustiti cenu kvalifikovanog upita',
    steps: [
      'Gašenje slabih oglasa i prebacivanje budžeta na pobednike',
      'Osvežavanje hook-a i prvog kadra pre ad fatigue-a',
      'Uvođenje UTM + CRM praćenja po kampanji',
    ],
  },
  {
    phase: 'Dani 61-90: Skaliranje',
    objective: 'Rast budžeta bez pada profitabilnosti',
    steps: [
      'Postepeno povećanje budžeta 15-25% nedeljno',
      'Dupliranje samo dokazanih ad set-ova i audience kombinacija',
      'KPI fokus na CPA, ROAS i procenat kvalifikovanih upita',
    ],
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
    q: 'Koliko košta vođenje Instagram kampanja?',
    a: 'Za manje naloge vođenje je najčešće 120-280€ mesečno, dok je za aktivnije naloge sa redovnim testovima uglavnom 250-650€ mesečno. Veći budžeti često idu kroz enterprise model ili procenat od medija.',
  },
  {
    q: 'Da li Instagram oglasi rade i za uslužne biznize?',
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
  {
    q: 'Koliko koštaju Instagram Reels reklame u Srbiji?',
    a: 'Za većinu niša Reels CPM je najčešće između 2,5€ i 8,5€, dok CPC često ulazi u raspon 0,07-0,32€. Konačna cena po rezultatu zavisi od hook-a, kreative i kvaliteta landing stranice.',
  },
]

const relatedPosts = [
  'instagram-ads-cena-po-kliku-srbija-2026',
  'vodjenje-instagram-ads-kampanja-cena-srbija-2026',
  'meta-ads-cena-po-kliku-srbija-2026',
]
  .map((slug) => blogIndexPosts.find((post) => post.slug === slug))
  .filter(Boolean)

export default function InstagramReklameCenaPage() {
  usePageMeta()

  return (
    <div className="min-h-screen bg-page">
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(236,72,153,0.16) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(99,102,241,0.12) 0%, transparent 50%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(236,72,153,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(99,102,241,0.06) 0%, transparent 50%)' }} />
        </div>
        <div id="cilj-kampanje" className="relative z-10 max-w-[820px] mx-auto text-center">
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
        <div id="test-budzet" className="max-w-[1100px] mx-auto">
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
        <div className="max-w-[920px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-4 text-center">Vođenje Instagram Ads kampanja — cena upravljanja</h2>
          <p className="text-[15px] text-ink-3 text-center mb-10 max-w-[700px] mx-auto">
            Pored medijskog budžeta, ključna stavka je cena vođenja kampanja. Rasponi ispod su realni za srpsko tržište u 2026. i pomažu da procenite da li je ponuda održiva.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {managementPricing.map(item => (
              <div key={item.model} className="bg-panel rounded-[16px] border border-edge p-5 md:p-6">
                <div className="text-[12px] uppercase tracking-widest text-ink-4 mb-2">Model saradnje</div>
                <h3 className="text-[18px] font-medium text-ink mb-2">{item.model}</h3>
                <div className="text-[24px] font-bold text-ink mb-3">{item.fee}</div>
                <p className="text-[13px] text-ink-2 leading-relaxed mb-3">{item.bestFor}</p>
                <p className="text-[12px] text-ink-3 leading-relaxed">⚠️ {item.caution}</p>
              </div>
            ))}
          </div>

          <p className="text-[14px] text-ink-3 leading-relaxed mt-8 text-center max-w-[700px] mx-auto">
            Za detaljniji benchmark troška klika i creative performansi pogledajte i
            {' '}
            <Link to="/blog/instagram-ads-cena-po-kliku-srbija-2026" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">
              Instagram Ads cena po kliku u Srbiji 2026
            </Link>.
          </p>
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
        <div className="max-w-[980px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-4 text-center">Instagram reklame cena po niši u Srbiji (2026)</h2>
          <p className="text-[15px] text-ink-3 text-center mb-10 max-w-[760px] mx-auto">
            Da bi budžet imao smisla, nije dovoljno gledati proseke sa interneta. Ove zone su praktičan benchmark za srpsko tržište po tipu biznisa i nivou konkurencije.
          </p>

          <div className="space-y-4">
            {industryBenchmarks.map(item => (
              <div key={item.niche} className="bg-panel rounded-[16px] border border-edge p-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6 mb-4">
                  <h3 className="text-[17px] md:text-[18px] font-medium text-ink">{item.niche}</h3>
                  <div className="grid grid-cols-3 gap-3 md:gap-4 text-[12px] md:text-[13px]">
                    <div>
                      <div className="text-ink-4 uppercase tracking-wider mb-1">CPC</div>
                      <div className="font-semibold text-ink">{item.cpc}</div>
                    </div>
                    <div>
                      <div className="text-ink-4 uppercase tracking-wider mb-1">CPA</div>
                      <div className="font-semibold text-ink">{item.cpa}</div>
                    </div>
                    <div>
                      <div className="text-ink-4 uppercase tracking-wider mb-1">Budžet</div>
                      <div className="font-semibold text-ink">{item.budget}</div>
                    </div>
                  </div>
                </div>
                <p className="text-[14px] text-ink-2 leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>

          <p className="text-[14px] text-ink-3 leading-relaxed mt-8 text-center max-w-[760px] mx-auto">
            Ako želite da uporedite social i search kanal pre raspodele budžeta, pogledajte i
            {' '}
            <Link to="/google-reklame-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">Google reklame cena</Link>
            {' '}
            i
            {' '}
            <Link to="/cene-digitalnog-marketinga" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">cene digitalnog marketinga</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[980px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-4 text-center">Instagram Reels reklame cena u Srbiji (2026)</h2>
          <p className="text-[15px] text-ink-3 text-center mb-10 max-w-[760px] mx-auto">
            Reels je često najbrži način da se spusti cena po kliku, ali samo kada su prva sekunda i poruka jasne. Ovi rasponi pomažu da proceniš da li su kampanje zdrave po placement-u.
          </p>

          <div className="space-y-4">
            {reelsBenchmarks.map(item => (
              <div key={item.placement} className="bg-panel rounded-[16px] border border-edge p-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6 mb-4">
                  <h3 className="text-[17px] md:text-[18px] font-medium text-ink">{item.placement}</h3>
                  <div className="grid grid-cols-3 gap-3 md:gap-4 text-[12px] md:text-[13px]">
                    <div>
                      <div className="text-ink-4 uppercase tracking-wider mb-1">CPM</div>
                      <div className="font-semibold text-ink">{item.cpm}</div>
                    </div>
                    <div>
                      <div className="text-ink-4 uppercase tracking-wider mb-1">CPC</div>
                      <div className="font-semibold text-ink">{item.cpc}</div>
                    </div>
                    <div>
                      <div className="text-ink-4 uppercase tracking-wider mb-1">CPA</div>
                      <div className="font-semibold text-ink">{item.cpa}</div>
                    </div>
                  </div>
                </div>
                <p className="text-[14px] text-ink-2 leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>

          <p className="text-[14px] text-ink-3 leading-relaxed mt-8 text-center max-w-[760px] mx-auto">
            Ako Reels kampanje dovode saobraćaj ali ne i upite, najčešći bottleneck je landing i follow-up. Zato pre skaliranja pogledaj i
            {' '}
            <Link to="/cro" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">CRO optimizaciju</Link>
            {' '}
            i
            {' '}
            <Link to="/izrada-wordpress-sajta-cena" className="text-ink underline decoration-1 underline-offset-4 hover:opacity-80">izrada WordPress sajta cena</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[980px] mx-auto">
          <h2 id="cold-retargeting" className="text-[26px] md:text-[34px] font-medium text-ink mb-4 text-center">Plan budžeta za prvih 90 dana Instagram oglašavanja</h2>
          <p className="text-[15px] text-ink-3 text-center mb-10 max-w-[760px] mx-auto">
            Najčešća greška je prerano skaliranje. Ovaj okvir pomaže da zadržiš kontrolu troška i povećaš broj kvalifikovanih upita pre ozbiljnog rasta spend-a.
          </p>

          <span id="skaliranje" className="block h-0 overflow-hidden" aria-hidden="true" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ninetyDayPlan.map(item => (
              <div key={item.phase} className="bg-panel rounded-[16px] border border-edge p-5 md:p-6 flex flex-col">
                <div className="text-[12px] uppercase tracking-widest text-ink-4 mb-2">{item.phase}</div>
                <h3 className="text-[18px] font-medium text-ink mb-4">{item.objective}</h3>
                <ul className="space-y-2 mt-auto">
                  {item.steps.map(step => (
                    <li key={step} className="flex items-start gap-2 text-[13px] text-ink-2">
                      <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                      {step}
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

      <section className="px-4 md:px-8 pb-10 md:pb-14">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4 text-center">Šta najviše utiče na cenu po rezultatu</h2>
          <p className="text-[15px] text-ink-3 text-center mb-8 max-w-[700px] mx-auto">
            Instagram budžet radi bolje kada su poruka, konverzija i prodajni proces povezani. Zato su ove stranice ključne pre ozbiljnog skaliranja.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/drustvene-mreze" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Strategija društvenih mreža</div>
              <div className="text-[12px] text-ink-3">Organski content + plaćeni reach za stabilniji funnel</div>
            </Link>
            <Link to="/cro" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">CRO optimizacija</div>
              <div className="text-[12px] text-ink-3">Bolji landing i CTA da klikovi postanu upiti</div>
            </Link>
            <Link to="/consulting" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Konsalting za skaliranje</div>
              <div className="text-[12px] text-ink-3">Plan testiranja kreativa i budžeta po fazama rasta</div>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-6 text-center">Povezane stranice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <Link to="/koliko-kosta-facebook-reklama" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Facebook reklame cena</div>
              <div className="text-[12px] text-ink-3">Meta vodič kroz troškove</div>
            </Link>
            <Link to="/google-reklame-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Google reklame cena</div>
              <div className="text-[12px] text-ink-3">Uporedi Search i Social kanal</div>
            </Link>
            <Link to="/izrada-wordpress-sajta-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Izrada WordPress sajta cena</div>
              <div className="text-[12px] text-ink-3">Spoji budžet za oglase i sajt koji konvertuje</div>
            </Link>
            <Link to="/blog/instagram-ads-cena-po-kliku-srbija-2026" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Instagram Ads CPC 2026</div>
              <div className="text-[12px] text-ink-3">Rasponi klika i planiranje budžeta</div>
            </Link>
            <Link to="/cene-digitalnog-marketinga" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene digitalnog marketinga</div>
              <div className="text-[12px] text-ink-3">Širi pregled troškova po kanalu</div>
            </Link>
          </div>
        </div>
      </section>

      <RelatedBlogPosts
        posts={relatedPosts}
        heading="Instagram Ads vodiči za niži CPL, bolji kreativa-test i stabilniji rast"
      />

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


    </div>
  )
}
