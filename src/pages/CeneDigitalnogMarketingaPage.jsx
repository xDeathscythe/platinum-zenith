import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const packages = [
  {
    name: 'Osnovno prisustvo',
    price: '300 - 500€/mes',
    desc: 'Za firme koje tek kreću sa online marketingom. Društvene mreže, osnovno oglašavanje i mesečni izveštaj.',
    includes: ['Upravljanje 2 društvene mreže', 'Do 8 postova mesečno', 'Osnovni Facebook/Instagram Ads', 'Mesečni izveštaj sa ključnim metrikama', 'Konsultacije jednom mesečno'],
    forWhom: 'Preduzetnici, male firme, startapovi',
  },
  {
    name: 'Rast i vidljivost',
    price: '500 - 1.500€/mes',
    desc: 'Za firme koje žele merljive rezultate. Oglašavanje na više platformi, SEO optimizacija, redovan sadržaj i analitika.',
    includes: ['Upravljanje 3-4 platforme', 'SEO optimizacija sajta', 'Google Ads + Meta Ads kampanje', 'Content plan i kreiranje sadržaja', 'A/B testiranje oglasa', 'Dvonedeljni izveštaji'],
    forWhom: 'Srednje firme, rastući brendovi, uslužne delatnosti',
  },
  {
    name: 'Pun servis',
    price: '1.500 - 3.000€/mes',
    desc: 'Za firme kojima treba kompletan marketing tim. Strategija, egzekucija, optimizacija i sve između.',
    includes: ['Sve platforme (Meta, Google, TikTok, LinkedIn)', 'Napredna SEO strategija', 'Email marketing i automatizacija', 'Landing stranice i CRO', 'Video sadržaj i kreative', 'Nedeljni izveštaji + strategijski poziv'],
    forWhom: 'E-commerce, agencije, firme sa ambicijama za skaliranje',
  },
  {
    name: 'Enterprise / Custom',
    price: '3.000€+/mes',
    desc: 'Za firme sa specifičnim potrebama i većim budžetom. Dedicirani tim, custom strategija, višejezične kampanje.',
    includes: ['Dedicirani account manager', 'Custom strategija i KPI okvir', 'Višejezične kampanje', 'Napredna analitika i atribucija', 'CRM integracija', 'Sedmični strategijski pozivi'],
    forWhom: 'Korporacije, regionalni brendovi, franšize',
  },
]

const breakdown = [
  {
    service: 'SEO optimizacija',
    price: '200 - 800€/mes',
    note: 'Zavisi od konkurentnosti ključnih reči i trenutnog stanja sajta. Tehniški SEO, sadržaj, link building.',
  },
  {
    service: 'Google Ads (upravljanje)',
    price: '200 - 600€/mes + budžet za oglase',
    note: 'Naknada agenciji je odvojena od budžeta za klikove. Minimalan smislen budžet za oglase: 300€/mes.',
  },
  {
    service: 'Facebook/Instagram Ads',
    price: '200 - 500€/mes + budžet za oglase',
    note: 'Kreiranje kampanja, testiranje kreativa, optimizacija. Budžet za oglase počinje od 200€/mes za lokalne firme.',
  },
  {
    service: 'Društvene mreže (upravljanje)',
    price: '200 - 600€/mes',
    note: 'Content plan, kreiranje postova, community management. Cena zavisi od broja platformi i učestalosti postova.',
  },
  {
    service: 'Email marketing',
    price: '150 - 400€/mes',
    note: 'Segmentacija, automatizovani tokovi, newsletter. Plus troškovi platforme (Mailchimp, Brevo) od 20-100€/mes.',
  },
  {
    service: 'Content marketing',
    price: '300 - 800€/mes',
    note: 'Blog tekstovi, video skripta, infografike. Obično 4-8 sadržaja mesečno zavisno od paketa.',
  },
]

const hiddenCosts = [
  { title: 'Budžet za oglase', text: 'Agencijska naknada pokriva upravljanje kampanjama. Novac koji ide Googlu ili Meti je odvojen. Kad vam neko kaže "marketing za 500€ mesečno", pitajte da li je budžet za oglase uključen. Obično nije.' },
  { title: 'Alati i platforme', text: 'Mailchimp, SEMrush, Ahrefs, Canva Pro. Agencije ih često imaju u ceni jer plaćaju za više klijenata. Freelancer vam može naplatiti posebno, ili koristiti besplatne verzije sa ograničenjima.' },
  { title: 'Kreative i foto/video', text: 'Profesionalna fotografija proizvoda ili snimanje videa obično nije uključeno u mesečni paket. Računajte na 200-500€ po sesiji za fotografa, ili 500-2.000€ za video produkciju.' },
  { title: 'Izrada landing stranica', text: 'Kampanja bez landing stranice je bacanje novca. Ako agencija vodi Google Ads ali vam ne pravi landing stranicu na koju vodi trafik, rezultati će biti slabi. Proverte da li je ovo uključeno.' },
]

const faqs = [
  { q: 'Koliko treba uložiti u marketing mesečno?', a: 'Za male firme u Srbiji, minimum koji ima smisla je 500-800€ mesečno (uključujući budžet za oglase). Ispod toga nemate dovoljno podataka da optimizujete kampanje. Za srednje firme, 1.500-3.000€ je realan raspon.' },
  { q: 'Kad se vide rezultati?', a: 'Plaćeni oglasi daju prve rezultate za 2-4 nedelje. SEO optimizacija zahteva 3-6 meseci za ozbiljnije pomake. Društvene mreže traže minimum 3 meseca konzistentnog rada da se vide efekti na prodaju.' },
  { q: 'Da li mogu da radim marketing sam?', a: 'Možete, i mnogi vlasnici firmi to rade na početku. Problem nastaje kad marketing počne da vam oduzima 15-20 sati nedeljno, a vi imate firmu za vođenje. U tom trenutku, angažovanje stručnjaka se isplati jer vam oslobađa vreme za ono u čemu ste vi dobri.' },
  { q: 'Šta je uključeno u mesečni paket agencije?', a: 'Zavisi od agencije, ali standard je: strategija, kreiranje i upravljanje kampanjama, sadržaj za društvene mreže, osnovna analitika i mesečni izveštaj. SEO, email marketing i video produkcija su često dodatne usluge.' },
  { q: 'Kako da znam da li mi se marketing isplati?', a: 'Pratite cenu po upitu (cost per lead) i cenu po prodaji (cost per acquisition). Ako je prosečna vrednost vašeg klijenta 500€, a koštalo vas je 50€ marketinga da ga dobijete, imate 10x povrat. Tražite od agencije da vam ove brojke jasno prikazuje.' },
  { q: 'Da li je jeftinije angažovati in-house marketara?', a: 'Junior marketar u Srbiji prima 500-800€ mesečno. Ali jedna osoba ne pokriva SEO, oglase, dizajn i analitiku jednako dobro. Agencija vam za sličnu cenu daje pristup celom timu sa različitim specijalizacijama.' },
]

export default function CeneDigitalnogMarketingaPage() {
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
            Koliko košta digitalni marketing u Srbiji?
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[600px] mx-auto">
            Realne cene za 2026. godinu. Koliko plaćate agenciji, koliko ide na oglase, i šta zapravo dobijate za taj novac.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Mesečni paketi agencija u Srbiji</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {packages.map(p => (
              <div key={p.name} className="bg-panel rounded-[20px] border border-edge p-6 md:p-8 flex flex-col min-h-[340px]">
                <div className="text-[12px] text-ink-4 uppercase tracking-widest mb-2">{p.forWhom}</div>
                <h3 className="text-[22px] font-medium text-ink mb-1">{p.name}</h3>
                <div className="text-[28px] md:text-[32px] font-bold text-ink mb-4">{p.price}</div>
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
        </div>
      </section>

      {/* Per-service breakdown */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-4 text-center">Cene po usluzi</h2>
          <p className="text-[15px] text-ink-3 text-center mb-10 max-w-[600px] mx-auto">
            Ako vam ne treba pun paket, evo koliko košta svaka usluga pojedinačno kad je naručujete od agencije u Srbiji.
          </p>
          <div className="space-y-4">
            {breakdown.map(b => (
              <div key={b.service} className="bg-panel rounded-[16px] border border-edge p-5 md:p-6 flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-[200px] flex-shrink-0">
                  <div className="text-[15px] font-medium text-ink">{b.service}</div>
                  <div className="text-[18px] font-bold text-ink mt-1">{b.price}</div>
                </div>
                <p className="text-[14px] text-ink-2 leading-relaxed">{b.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden costs */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Troškovi koje mnogi zaborave</h2>
          <div className="space-y-8">
            {hiddenCosts.map(h => (
              <div key={h.title}>
                <h3 className="text-[17px] font-medium text-ink mb-2">{h.title}</h3>
                <p className="text-[15px] text-ink-2 leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reality check */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-5">Šta zapravo možete očekivati?</h2>
          <div className="text-[15px] text-ink-2 leading-relaxed space-y-4">
            <p>
              Marketing nije dugme koje pritisnete i sutra imate 50 novih klijenata. Firme koje to očekuju se razočaraju posle prvog meseca.
            </p>
            <p>
              Realna situacija: za prvih mesec-dva se postavlja infrastruktura. Piksel na sajtu, kampanje se testiraju, publika se gradi. Od trećeg meseca počinjete da vidite obrasce. Od šestog meseca imate dovoljno podataka da optimizujete i snižavate troškove po upitu.
            </p>
            <p>
              Firme koje investiraju konzistentno 6-12 meseci obično vide trostruki do peterostruki povrat na uloženo. Ali "konzistentno" je ključ. Mesec dana oglašavanja, pa dva meseca pauze, pa opet mesec dana ne funkcioniše.
            </p>
            <p>
              Naš savet: odredite budžet koji možete da izdvojite svaki mesec narednih 6 meseci bez da vas boli. To je vaš pravi marketing budžet.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* Internal links */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[22px] font-medium text-ink mb-6 text-center">Povezane stranice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            <Link to="/cene-izrade-sajta" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene izrade sajta</div>
              <div className="text-[12px] text-ink-3">Koliko košta sajt u Srbiji 2026</div>
            </Link>
            <Link to="/agencija-vs-freelancer" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Agencija vs freelancer</div>
              <div className="text-[12px] text-ink-3">Kako da izaberete izvođača</div>
            </Link>
            <Link to="/seo-optimizacija-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene SEO optimizacije</div>
              <div className="text-[12px] text-ink-3">Koliko košta SEO u Srbiji</div>
            </Link>
            <Link to="/blog/google-ads-cena-po-kliku-srbija-2026" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Google Ads CPC po niši</div>
              <div className="text-[12px] text-ink-3">Benchmark klikova i plan budžeta po industriji</div>
            </Link>
            <Link to="/google-reklame-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Google reklame cena</div>
              <div className="text-[12px] text-ink-3">Budžeti i trošak po leadu po fazama</div>
            </Link>
            <Link to="/instagram-reklame-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Instagram reklame cena</div>
              <div className="text-[12px] text-ink-3">Trošak vizualnog kanala po fazama rasta</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Treba vam konkretan plan?</h2>
          <p className="text-[15px] text-ink-2 mb-6">
            Javite nam se za besplatne konsultacije. Analiziramo vaš trenutni marketing i dajemo ponudu prilagođenu vašem budžetu i ciljevima.
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

      {/* JSON-LD: FAQPage + BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Početna", "item": "https://platinumzenith.com/" },
              { "@type": "ListItem", "position": 2, "name": "Cene digitalnog marketinga", "item": "https://platinumzenith.com/cene-digitalnog-marketinga" }
            ]
          }
        ]
      })}} />
    </div>
  )
}
