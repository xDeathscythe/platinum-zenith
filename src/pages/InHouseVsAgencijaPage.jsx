import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const comparison = [
  {
    factor: 'Troškovi',
    inHouse: 'Plata marketara u Srbiji: 800-2.000€ neto. Plus doprinosi, oprema, alati (SEMrush, Ads, dizajn softveri). Realna cena jednog zaposlenog: 1.500-4.000€/mesec.',
    agency: 'Mesečna naknada ili revenue share. Za cenu jednog zaposlenog dobijate tim: stratega, dizajnera, copywritera, ads specijalista, developera.',
    verdict: 'Za manje i srednje firme, agencija je isplativija. In-house tim se isplati kad marketing budžet prelazi 5.000€ mesečno.',
  },
  {
    factor: 'Brzina pokretanja',
    inHouse: 'Pronalaženje kandidata: 1-3 meseca. Obuka: 1-2 meseca. Produktivnost: za 3-6 meseci od odluke da zaposlite.',
    agency: 'Onboarding za 1-2 nedelje. Prve kampanje za mesec dana. Agencija već ima procese, alate i iskustvo.',
    verdict: 'Agencija je spremna odmah. In-house tim treba mesecima da se pokrene.',
  },
  {
    factor: 'Ekspertiza',
    inHouse: 'Jedna osoba retko pokriva sve: SEO, Ads, dizajn, analitiku, copywriting. Morate zaposliti 3-5 ljudi za kompletan tim.',
    agency: 'Agencija ima specijaliste za svaku oblast. Svaka osoba radi ono u čemu je najbolja.',
    verdict: 'Agencija ima širi raspon znanja. In-house je bolji za duboko poznavanje jedne industrije.',
  },
  {
    factor: 'Posvećenost',
    inHouse: 'Zaposleni radi samo za vas, 8 sati dnevno. Poznaje vaš proizvod, tim, kulturu firme.',
    agency: 'Agencija radi za više klijenata. Manje vremena posvećenog vama, ali sa širom perspektivom iz rada sa raznim industrijama.',
    verdict: 'In-house bolje poznaje vaš biznis. Agencija donosi iskustvo iz drugih industrija.',
  },
  {
    factor: 'Skalabilnost',
    inHouse: 'Trebaju vam Facebook Ads? Zaposlite specijalista. Treba i SEO? Zaposlite još jednog. Svaka nova potreba znači nov trošak.',
    agency: 'Dodate novu uslugu uz postojeći ugovor. Agencija već ima ljude. Skaliranje je brzo i bez dodatnog zapošljavanja.',
    verdict: 'Agencija je fleksibilnija. Možete brzo dodati ili smanjiti obim bez otpuštanja.',
  },
  {
    factor: 'Kontinuitet',
    inHouse: 'Ako zaposleni ode, gusite znanje, kontakte, pristup alatima. Potrebno 2-3 meseca da nađete zamenu.',
    agency: 'Agencija je firma, ne osoba. Ako jedan član tima ode, drugi preuzima. Procesi i dokumentacija ostaju.',
    verdict: 'Agencija pruža stabilnost. In-house je ranjiv na odlaske ključnih ljudi.',
  },
]

const costBreakdown = [
  { item: 'Plata (neto)', inHouse: '1.200€', agency: '—' },
  { item: 'Doprinosi i porezi', inHouse: '500€', agency: '—' },
  { item: 'Alati (SEMrush, Canva, itd.)', inHouse: '300€', agency: '—' },
  { item: 'Oprema i obuka', inHouse: '150€', agency: '—' },
  { item: 'Agencijska naknada', inHouse: '—', agency: '1.000-2.000€' },
  { item: 'Ukupno mesečno', inHouse: '~2.150€', agency: '~1.000-2.000€' },
]

const whenInHouse = [
  'Marketing budžet prelazi 5.000€ mesečno',
  'Vaša industrija zahteva duboko specijalizovano znanje',
  'Imate kompleksne interne procese koji zahtevaju stalnu prisutnost',
  'Marketing je ključna funkcija firme (npr. SaaS, e-commerce)',
  'Možete zaposliti minimum 2-3 osobe (ne jednu za sve)',
]

const whenAgency = [
  'Budžet je ispod 5.000€ mesečno za marketing tim',
  'Trebate brze rezultate bez čekanja na zapošljavanje',
  'Treba vam više disciplina (SEO + Ads + dizajn + copy)',
  'Nemate resurse da upravljate marketinškim timom',
  'Želite fleksibilnost da menjate obim iz meseca u mesec',
]

const hybridTips = [
  { title: 'In-house strategija + agencija za egzekuciju', desc: 'Vaš marketar definiše pravac i kreira briefe. Agencija sprovodi kampanje, pravi kreative, optimizuje oglase.' },
  { title: 'Agencija za specijalizovane kanale', desc: 'In-house tim pokriva društvene mreže i content. Agencija vodi Google Ads i SEO jer zahtevaju specifično znanje.' },
  { title: 'Agencija kao mentor in-house timu', desc: 'Agencija postavlja procese, obučava zaposlene, i postepeno prenosi znanje. Posle 6-12 meseci, in-house tim preuzima.' },
]

const faqs = [
  { q: 'Koliko košta in-house marketing tim u Srbiji?', a: 'Za minimum funkcionalan tim (1 senior marketer + 1 junior): 2.500-5.000€ mesečno sa svim troškovima. Za kompletan tim (strateg, dizajner, copywriter, ads specijalista): 8.000-15.000€. Za poređenje, agencija košta 1.000-3.000€ za širi obim usluga.' },
  { q: 'Da li agencija može da zameni ceo marketing tim?', a: 'Za većinu malih i srednjih firmi, da. Agencija pokriva strategiju, egzekuciju i analitiku. Jedino što agencija ne može je da prisustvuje internim sastancima i da bude deo vaše dnevne komunikacije kao zaposleni.' },
  { q: 'Šta ako mi agencija ne odgovara posle mesec dana?', a: 'Dobar ugovor nema višegodišnje obaveze. Tražite agenciju koja nudi mesečno otkazivanje ili probni period od 1-3 meseca. Ako rezultati izostanu, možete lako promeniti agenciju.' },
  { q: 'Da li je hibridni model previše komplikovan?', a: 'Nije, ako su uloge jasno podeljene. Najbitnije je da jedna strana vodi strategiju, a druga egzekuciju. Problemi nastaju kad obe strane rade isto ili kad nema jasnog lidera.' },
  { q: 'Kad je pravo vreme da pređem sa agencije na in-house?', a: 'Kad vaš mesečni marketing budžet (bez ad spend-a) stalno prelazi 4.000-5.000€ i kad imate jasno definisane procese koje agencija može da dokumentuje i prenese vašem timu.' },
]

export default function InHouseVsAgencijaPage() {
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
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Uporedni vodič · 2026</span>
          <h1 className="text-[30px] md:text-[50px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">
            In-house tim ili<br />marketing agencija?
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[620px] mx-auto mb-8">
            Zaposliti marketara ili angažovati agenciju? Oba imaju prednosti. Evo konkretnih brojeva i situacija kad se šta isplati.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
              Besplatne konsultacije
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="#poredjenje" className="inline-flex items-center gap-2 text-ink-2 text-[14px] font-medium h-11 px-6 rounded-full border border-edge hover:bg-tint transition-colors">
              Uporedite opcije
            </a>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Koliko zaista košta?</h2>
          <p className="text-[15px] text-ink-3 mb-8 text-center max-w-[550px] mx-auto">Mesečni troškovi jednog in-house marketara vs agencija u Srbiji (prosek za 2026).</p>
          <div className="bg-panel rounded-[16px] border border-edge overflow-hidden">
            <div className="grid grid-cols-3 bg-tint px-5 py-3 border-b border-edge text-[12px] uppercase tracking-wider text-ink-3 font-medium">
              <span>Stavka</span>
              <span className="text-center">In-house</span>
              <span className="text-center">Agencija</span>
            </div>
            {costBreakdown.map((row, i) => (
              <div key={row.item} className={`grid grid-cols-3 px-5 py-3 text-[14px] ${i === costBreakdown.length - 1 ? 'border-t border-edge bg-tint font-medium' : 'border-b border-edge/50'}`}>
                <span className="text-ink-2">{row.item}</span>
                <span className="text-ink text-center">{row.inHouse}</span>
                <span className="text-ink text-center">{row.agency}</span>
              </div>
            ))}
          </div>
          <p className="text-[12px] text-ink-3 mt-3 text-center">*Cene za jednog zaposlenog sa srednjim iskustvom u Beogradu/Novom Sadu. U manjim gradovima može biti 20-30% manje.</p>
        </div>
      </section>

      {/* Comparison */}
      <section id="poredjenje" className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Detaljno poređenje</h2>
          <div className="space-y-6">
            {comparison.map(c => (
              <div key={c.factor} className="bg-panel rounded-[16px] border border-edge overflow-hidden">
                <div className="bg-tint px-5 py-3 border-b border-edge">
                  <h3 className="text-[16px] font-medium text-ink">{c.factor}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-edge">
                  <div className="bg-panel p-5">
                    <span className="text-[11px] uppercase tracking-wider text-ink-3 font-medium">In-house tim</span>
                    <p className="text-[14px] text-ink-2 leading-relaxed mt-2">{c.inHouse}</p>
                  </div>
                  <div className="bg-panel p-5">
                    <span className="text-[11px] uppercase tracking-wider text-indigo-400 font-medium">Agencija</span>
                    <p className="text-[14px] text-ink-2 leading-relaxed mt-2">{c.agency}</p>
                  </div>
                </div>
                <div className="px-5 py-3 border-t border-edge">
                  <p className="text-[13px] text-ink-3"><span className="font-medium text-ink-2">Zaključak:</span> {c.verdict}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Choose */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Kad izabrati šta?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-panel rounded-[20px] border border-edge p-6">
              <h3 className="text-[18px] font-medium text-ink mb-4">👨‍💻 In-house tim kad:</h3>
              <ul className="space-y-3">
                {whenInHouse.map(item => (
                  <li key={item} className="flex gap-3 items-start">
                    <svg className="w-4 h-4 text-ink-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-[14px] text-ink-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-panel rounded-[20px] border border-indigo-500/[0.2] p-6">
              <h3 className="text-[18px] font-medium text-ink mb-4">🏢 Agencija kad:</h3>
              <ul className="space-y-3">
                {whenAgency.map(item => (
                  <li key={item} className="flex gap-3 items-start">
                    <svg className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="text-[14px] text-ink-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid Model */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-3 text-center">Treća opcija: hibridni model</h2>
          <p className="text-[15px] text-ink-3 mb-8 text-center max-w-[550px] mx-auto">Ne morate birati jedno ili drugo. Mnoge firme kombinuju in-house i agencijsko znanje.</p>
          <div className="space-y-5">
            {hybridTips.map(t => (
              <div key={t.title} className="bg-panel rounded-[16px] border border-edge p-6">
                <h3 className="text-[16px] font-medium text-ink mb-2">{t.title}</h3>
                <p className="text-[14px] text-ink-2 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-gradient-to-br from-indigo-500/[0.08] to-purple-500/[0.08] rounded-[20px] border border-indigo-500/[0.15] p-6 md:p-8 text-center">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-3">Niste sigurni šta vam treba?</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed max-w-[550px] mx-auto mb-5">
            Zakažite besplatan razgovor. Analiziramo vaš biznis, budžet i ciljeve, i dajemo preporuku koji model je najbolji za vas. Bez prodajnog pritiska.
          </p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
            Zakažite razgovor
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            <Link to="/agencija-vs-freelancer" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Agencija vs freelancer</div>
              <div className="text-[12px] text-ink-3">Kada je bolja koja opcija</div>
            </Link>
            <Link to="/fiksna-naknada-vs-revenue-share" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Fiksna vs revenue share</div>
              <div className="text-[12px] text-ink-3">Modeli naplate agencija</div>
            </Link>
            <Link to="/cene-digitalnog-marketinga" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene digitalnog marketinga</div>
              <div className="text-[12px] text-ink-3">Koliko košta marketing mesečno</div>
            </Link>
            <Link to="/blog/kako-izabrati-pravu-marketing-agenciju" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Kako izabrati agenciju</div>
              <div className="text-[12px] text-ink-3">7 znakova za pravi izbor partnera</div>
            </Link>
            <Link to="/google-reklame-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Google reklame cena</div>
              <div className="text-[12px] text-ink-3">Budžet po modelu rada: tim ili agencija</div>
            </Link>
            <Link to="/instagram-reklame-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Instagram reklame cena</div>
              <div className="text-[12px] text-ink-3">Vizuelni kanal po modelu rada</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Počnite sa agencijom, prerastite u tim</h2>
          <p className="text-[15px] text-ink-2 mb-6">Većina firmi počinje sa agencijom jer je brže, jeftinije i nema rizika zapošljavanja. Kad narastete, možete preći na in-house ili kombinovati oba pristupa.</p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors">
            Besplatna procena
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "Article",
          "headline": "In-house tim ili marketing agencija: šta se više isplati u 2026",
          "author": { "@type": "Person", "name": "Aleksandar Nenadović" },
          "publisher": { "@type": "Organization", "name": "Platinum Zenith" },
          "datePublished": "2026-03-04",
          "url": "https://platinumzenith.com/in-house-tim-vs-agencija"
        }, {
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        }, {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Početna", "item": "https://platinumzenith.com/" },
            { "@type": "ListItem", "position": 2, "name": "In-house tim vs Agencija", "item": "https://platinumzenith.com/in-house-tim-vs-agencija" }
          ]
        }]
      })}} />
    </div>
  )
}
