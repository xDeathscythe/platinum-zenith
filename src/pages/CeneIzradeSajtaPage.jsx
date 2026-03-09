import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const tiers = [
  {
    name: 'Prezentacioni sajt',
    price: '300 - 800€',
    desc: 'Za firme kojima treba profesionalna online vizit karta. Nekoliko stranica, kontakt forma, osnovna SEO optimizacija.',
    includes: ['Do 5 stranica', 'Responzivan dizajn', 'Kontakt forma', 'Osnovna SEO optimizacija', 'SSL sertifikat'],
    forWhom: 'Preduzetnici, male firme, uslužne delatnosti',
  },
  {
    name: 'Poslovni sajt',
    price: '800 - 2.000€',
    desc: 'Za firme koje žele ozbiljnu online prisutnost. Custom dizajn, CMS za uređivanje sadržaja, napredna SEO optimizacija.',
    includes: ['Do 15 stranica', 'Custom dizajn', 'WordPress CMS', 'Napredna SEO optimizacija', 'Blog sekcija', 'Google Analytics integracija'],
    forWhom: 'Srednje firme, agencije, profesionalne usluge',
  },
  {
    name: 'Web shop',
    price: '1.500 - 5.000€',
    desc: 'Kompletna online prodavnica sa svim što treba za prodaju. Korpa, plaćanje, upravljanje zalihama, email notifikacije.',
    includes: ['Neograničen broj proizvoda', 'Korpa i checkout', 'Online plaćanje', 'Upravljanje zalihama', 'Email notifikacije', 'SEO za proizvode'],
    forWhom: 'E-commerce, maloprodaja, proizvođači',
  },
  {
    name: 'Korporativni / Custom',
    price: '3.000 - 10.000+€',
    desc: 'Za projekte koji zahtevaju specifična rešenja. Integracije sa eksternim sistemima, custom funkcionalnosti, višejezična podrška.',
    includes: ['Unikatan dizajn', 'Custom programiranje', 'API integracije', 'CRM povezivanje', 'Višejezična podrška', 'Dedicirani project manager'],
    forWhom: 'Korporacije, portali, SaaS platforme',
  },
]

const factors = [
  { title: 'Dizajn', text: 'Template dizajn košta manje jer se prilagođava gotov okvir. Custom dizajn se radi od nule prema vašem brendu i košta više, ali je jedinstven. Razlika u ceni može biti i 3 puta.' },
  { title: 'Broj stranica', text: 'Sajt sa 5 stranica i sajt sa 30 stranica nisu isti posao. Svaka stranica zahteva dizajn, sadržaj i optimizaciju. Više stranica znači više sati rada.' },
  { title: 'Funkcionalnosti', text: 'Kontakt forma je jedna stvar. Online prodavnica sa filterima, korpa, plaćanje karticom i automatske email potvrde su potpuno druga priča. Svaka funkcionalnost dodaje na cenu.' },
  { title: 'CMS sistem', text: 'Ako želite sami da menjate sadržaj, treba vam CMS poput WordPress-a. To zahteva dodatno podešavanje i obuku, ali vam dugoročno štedi jer ne plaćate svaku izmenu.' },
  { title: 'SEO optimizacija', text: 'Osnovna SEO optimizacija bi trebalo da bude uključena u svaki sajt. Ali ako želite da se rangirate za konkurentne ključne reči, to zahteva dodatni rad na sadržaju, brzini i tehničkim detaljima.' },
  { title: 'Mobilni dizajn', text: 'Preko 70% ljudi u Srbiji koristi telefon za pretragu. Sajt koji ne izgleda dobro na telefonu gubi većinu posetilaca. Responsive dizajn nije opcija, nego obaveza.' },
]

const faqs = [
  { q: 'Koliko traje izrada sajta?', a: 'Prezentacioni sajt: 1-2 nedelje. Poslovni sajt: 2-4 nedelje. Web shop: 4-8 nedelja. Korporativni projekti: zavisi od obima, obično 2-4 meseca.' },
  { q: 'Da li je hosting uključen u cenu?', a: 'Hosting i domen se plaćaju odvojeno, obično oko 50-80€ godišnje za obe stavke. Pomaćemo vam u izboru i podešavanju.' },
  { q: 'Šta ako mi treba web shop?', a: 'Web shopovi kreću od 1.500€ za osnovno rešenje. Za ozbiljniju prodavnicu sa većim brojem proizvoda i naprednim funkcijama, cena ide do 5.000€ i više.' },
  { q: 'Da li radite redizajn postojećeg sajta?', a: 'Da. Redizajn obično košta isto ili nešto manje od izrade novog sajta jer zadržavamo sadržaj i domen, a menjamo dizajn i tehničku osnovu.' },
  { q: 'Kako izgleda proces saradnje?', a: 'Počinjemo sa besplatnim konsultacijama gde definišemo vaše potrebe. Zatim pripremamo predlog i ponudu. Nakon odobrenja, kreće dizajn, razvoj, vaša revizija i na kraju lansiranje.' },
]

export default function CeneIzradeSajtaPage() {
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
            Koliko košta izrada sajta u Srbiji 2026?
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[600px] mx-auto">
            Realne cene, bez skrivenih troškova. Sve zavisi od toga šta vam zapravo treba. Evo pregleda da znate šta da očekujete.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {tiers.map(t => (
            <div key={t.name} className="bg-panel rounded-[20px] border border-edge p-6 md:p-8 flex flex-col min-h-[340px]">
              <div className="text-[12px] text-ink-4 uppercase tracking-widest mb-2">{t.forWhom}</div>
              <h2 className="text-[22px] font-medium text-ink mb-1">{t.name}</h2>
              <div className="text-[28px] md:text-[32px] font-bold text-ink mb-4">{t.price}</div>
              <p className="text-[14px] text-ink-2 leading-relaxed mb-5">{t.desc}</p>
              <ul className="space-y-2 mt-auto">
                {t.includes.map(item => (
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

      {/* Factors */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Od čega zavisi cena?</h2>
          <div className="space-y-8">
            {factors.map(f => (
              <div key={f.title}>
                <h3 className="text-[17px] font-medium text-ink mb-2">{f.title}</h3>
                <p className="text-[15px] text-ink-2 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cheap Warning */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-5">Zašto su neke ponude sumnjivo jeftine?</h2>
          <div className="text-[15px] text-ink-2 leading-relaxed space-y-4">
            <p>
              Na tržištu ćete naći ponude za izradu sajta od 100€ ili čak manje. Zvuči primamljivo, ali tu obično nešto fali.
            </p>
            <p>
              Sajt od 100€ je gotov template sa vašim logom i tekstom. Nema custom dizajna. Nema SEO optimizacije, što znači da vas Google neće naći. Često nema ni responsive dizajn za telefone, a to znači da gubite većinu posetilaca.
            </p>
            <p>
              Takav sajt nema optimizovanu brzinu učitavanja. Google merenje PageSpeed-a obično pokazuje skor ispod 50. Posetioci odu pre nego što se sajt učita.
            </p>
            <p>
              Na kraju, jeftin sajt vas košta više jer ga posle godinu dana morate raditi ponovo. Ili još gore, gubite klijente svaki dan jer sajt ne radi kako treba.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-6 text-center">Šta dobijate kod nas?</h2>
          <div className="text-[15px] text-ink-2 leading-relaxed space-y-4">
            <p>
              Svaki sajt koji napravimo ima custom dizajn prilagođen vašem brendu. Koristimo moderne tehnologije i od prvog dana ugrađujemo SEO optimizaciju da vas Google pronađe.
            </p>
            <p>
              Naši sajtovi postižu PageSpeed skor 95 i više. To nije marketinška priča, to je merljiv rezultat koji možete proveriti na Google PageSpeed Insights.
            </p>
            <p>
              Mobile-first pristup znači da sajt prvo dizajniramo za telefon, pa onda prilagođavamo za desktop. Jer većina vaših budućih klijenata vas prvo vidi na telefonu.
            </p>
            <p>
              Za ozbiljne projekte nudimo revenue share model. To znači da zarađujemo samo ako vi zarađujete. Naš uspeh je vezan za vaš, što nam daje motivaciju da sajt zaista donosi rezultate.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            {['PageSpeed 95+', 'Mobile-first', 'SEO od starta', 'Custom dizajn', 'Revenue share opcija'].map(tag => (
              <span key={tag} className="text-[12px] text-ink-3 bg-tint px-4 py-2 rounded-full">{tag}</span>
            ))}
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/agencija-vs-freelancer" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Agencija vs freelancer</div>
              <div className="text-[12px] text-ink-3">Kako da izaberete izvođača</div>
            </Link>
            <Link to="/cene-digitalnog-marketinga" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene digitalnog marketinga</div>
              <div className="text-[12px] text-ink-3">Koliko košta marketing mesečno</div>
            </Link>
            <Link to="/izrada-wordpress-sajta-cena" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cena WordPress sajta</div>
              <div className="text-[12px] text-ink-3">Realni rasponi i šta ulazi u cenu</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Spremni da krenete?</h2>
          <p className="text-[15px] text-ink-2 mb-6">
            Javite nam se za besplatne konsultacije. Analiziramo šta vam treba i dajemo konkretnu ponudu bez obaveza.
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
