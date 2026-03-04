import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const comparison = [
  {
    factor: 'Cena',
    agency: 'Viša početna investicija (800-5.000€+). Plaćate tim, ne jednu osobu.',
    freelancer: 'Niža cena (200-2.000€). Plaćate jednog čoveka koji radi sve sam.',
    verdict: 'Freelancer je jeftiniji na prvi pogled. Ali kad računate prepravke, kašnjenja i propuštene prilike, razlika se topi.',
  },
  {
    factor: 'Tim i ekspertiza',
    agency: 'Dizajner, developer, SEO stručnjak, copywriter. Svako radi ono što zna.',
    freelancer: 'Jedna osoba pokriva sve. Retko ko je jednako dobar u dizajnu, kodu i marketingu.',
    verdict: 'Ako vam treba sajt koji i izgleda dobro i rangira se na Googlu, agencija pokriva više uglova.',
  },
  {
    factor: 'Rokovi',
    agency: 'Definisani ugovorom. Ako neko iz tima je bolestan, drugi preuzima.',
    freelancer: 'Zavisi od jedne osobe. Ako se razboli ili preuzme drugi projekat, vaš staje.',
    verdict: 'Agencije imaju backup. Freelancer je single point of failure.',
  },
  {
    factor: 'Komunikacija',
    agency: 'Account manager ili project manager. Jedna tačka kontakta, ali ispod rade više ljudi.',
    freelancer: 'Direktan kontakt sa osobom koja radi. Brži odgovor, manje formalnosti.',
    verdict: 'Freelancer je često pristupačniji. Agencija je formalnija ali organizovanija.',
  },
  {
    factor: 'Skaliranje',
    agency: 'Kad vam treba više, agencija uključi dodatne ljude. Od sajta do marketinga bez traženja novog izvođača.',
    freelancer: 'Kad projekat preraste jednu osobu, morate tražiti drugog freelancera ili prelaziti na agenciju.',
    verdict: 'Ako planirate rast, agencija je logičniji izbor od starta.',
  },
  {
    factor: 'Garancije',
    agency: 'Ugovor, rokovi, revizije, podrška nakon lansiranja. Firma odgovara za isporučeno.',
    freelancer: 'Zavisi od dogovora. Neki nude podršku, neki ne odgovaraju posle isporuke.',
    verdict: 'Agencija pruža više sigurnosti jer je reputacija firme u pitanju.',
  },
]

const whenAgency = [
  'Trebaju vam marketing, sajt i strategija odjednom',
  'Planirate ozbiljan rast u narednih 6-12 meseci',
  'Nemate vremena da koordinirate više freelancera',
  'Treba vam neko ko odgovara ako nešto ne radi',
  'Projekat je vredniji od 2.000€ i traje duže od mesec dana',
]

const whenFreelancer = [
  'Treba vam jedna konkretna stvar (logo, landing stranica, jedan tekst)',
  'Budžet je ispod 500€',
  'Već imate tim i fali vam jedna specijalizovana osoba',
  'Projekat je kratak i jasno definisan',
  'Poznajete freelancera i verujete mu',
]

const redFlags = [
  { title: 'Freelancer bez portfolija', text: 'Ako ne može da pokaže raniji rad, verovatno nema iskustva na tom tipu projekta. Tražite konkretne primere, ne obećanja.' },
  { title: 'Agencija koja ne govori o rezultatima', text: 'Ako agencija samo priča o dizajnu i ne pominje konverzije, ROI ili merljive ciljeve, bežite. Lep sajt bez rezultata je skup poster.' },
  { title: '"Radim sve za 200€"', text: 'Ako neko nudi web shop sa online plaćanjem, SEO optimizacijom i custom dizajnom za 200€, nešto će biti presečeno. Obično kvalitet.' },
  { title: 'Nema ugovora', text: 'Bez obzira da li birate agenciju ili freelancera, pisani dogovor je obavezan. Ko radi šta, do kad, za koliko, i šta se dešava ako nešto krene po zlu.' },
]

const faqs = [
  { q: 'Da li je agencija uvek bolja od freelancera?', a: 'Ne. Za male, jasno definisane projekte, dobar freelancer je često bolji izbor. Agencija ima smisla kad vam treba tim koji pokriva više oblasti ili kad je projekat dovoljno velik da jedna osoba ne može da ga iznese sama.' },
  { q: 'Koliko košta rad sa agencijom u Srbiji?', a: 'Zavisi od obima. Mesečni marketing paketi kreću od 500€, izrada sajta od 800€. Za pun paket (sajt + marketing + strategija) računajte na 1.500-3.000€ mesečno. Dobijate ceo tim za tu cenu.' },
  { q: 'Kako da proverim da li je freelancer pouzdan?', a: 'Tražite portfolio sa realnim projektima, ne template sajtovima. Pitajte za reference. Dogovorite probni manji projekat pre nego što mu date veći posao. I obavezno potpišite ugovor.' },
  { q: 'Mogu li da počnem sa freelancerom pa pređem na agenciju?', a: 'Možete, i mnogi to rade. Problem nastaje kad freelancer ne dokumentuje šta je radio. Onda agencija troši vreme (i vaš novac) da razume tuđi kod pre nego što može da nastavi.' },
  { q: 'Šta ako nemam budžet ni za jedno ni za drugo?', a: 'Počnite sami. WordPress sa besplatnim temama, Canva za grafiku, Google My Business za vidljivost. Kad počnete da zarađujete, investirajte u profesionalnu pomoć. Bolje to nego loš sajt od 100€ koji odbija klijente.' },
]

export default function AgencijaVsFreelancerPage() {
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
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Vodič za odluku</span>
          <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">
            Agencija ili freelancer? Kako da izaberete.
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[600px] mx-auto">
            Oba izbora imaju smisla. Ali ne u istim situacijama. Evo konkretnog pregleda da donesete pravu odluku za vaš projekat i budžet.
          </p>
        </div>
      </section>

      {/* Intro context */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <div className="text-[15px] text-ink-2 leading-relaxed space-y-4">
            <p>
              Ovo pitanje nam postavljaju svake nedelje. Neko planira novi sajt ili marketing kampanju i ne zna kome da se obrati. Prijatelj preporuči freelancera sa Fiverr-a, kolega kaže da je bolje ići na agenciju, a Google daje 50 različitih odgovora.
            </p>
            <p>
              Iskreno? Odgovor zavisi od vas, ne od nas. Zavisi od toga koliko je vaš projekat složen, koliko novca imate na raspolaganju i koliko brzo želite rezultate. Evo šta smo naučili radeći sa firmama u Srbiji.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Uporedni pregled po faktorima</h2>
          <div className="space-y-5">
            {comparison.map(c => (
              <div key={c.factor} className="bg-panel rounded-[20px] border border-edge p-6 md:p-8">
                <h3 className="text-[18px] font-medium text-ink mb-5">{c.factor}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                  <div>
                    <div className="text-[12px] text-ink-4 uppercase tracking-widest mb-2">Agencija</div>
                    <p className="text-[14px] text-ink-2 leading-relaxed">{c.agency}</p>
                  </div>
                  <div>
                    <div className="text-[12px] text-ink-4 uppercase tracking-widest mb-2">Freelancer</div>
                    <p className="text-[14px] text-ink-2 leading-relaxed">{c.freelancer}</p>
                  </div>
                </div>
                <div className="border-t border-edge pt-4">
                  <p className="text-[13px] text-ink-3 italic">{c.verdict}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to choose which */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-panel rounded-[20px] border border-edge p-6 md:p-8">
            <h2 className="text-[20px] font-medium text-ink mb-6">Idite na agenciju kad...</h2>
            <ul className="space-y-3">
              {whenAgency.map(item => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-ink-2">
                  <span className="text-indigo-500 mt-0.5 flex-shrink-0 text-[16px]">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-panel rounded-[20px] border border-edge p-6 md:p-8">
            <h2 className="text-[20px] font-medium text-ink mb-6">Idite na freelancera kad...</h2>
            <ul className="space-y-3">
              {whenFreelancer.map(item => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-ink-2">
                  <span className="text-emerald-500 mt-0.5 flex-shrink-0 text-[16px]">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Real numbers */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-6 text-center">Realni troškovi u Srbiji (2026)</h2>
          <div className="text-[15px] text-ink-2 leading-relaxed space-y-4">
            <p>
              Freelancer za izradu prezentacionog sajta naplaćuje 200-600€. Agencija za isti posao traži 500-1.200€. Razlika izgleda velika, ali pogledajte šta dobijate.
            </p>
            <p>
              Freelancer od 300€ će vam napraviti sajt na gotovoj WordPress temi. Funkcioniše, ali izgleda kao još 500 sajtova. SEO optimizacija obično nije uključena. Mobile verzija radi, ali nije prilagođena.
            </p>
            <p>
              Agencija od 800€ pravi sajt prilagođen vašem brendu. SEO je ugrađen od starta. Mobile verzija je dizajnirana posebno, ne samo smanjena desktop verzija. I obično dobijete 30-90 dana podrške nakon lansiranja.
            </p>
            <p>
              Za marketing, freelancer SEO stručnjak traži 200-500€ mesečno. Agencija koja pokriva SEO, oglase i analitiku traži 500-2.000€ mesečno. Opet, zavisi od toga koliko oblasti vam treba pokriti.
            </p>
          </div>
        </div>
      </section>

      {/* Red flags */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Na šta da pazite (bez obzira na izbor)</h2>
          <div className="space-y-8">
            {redFlags.map(f => (
              <div key={f.title}>
                <h3 className="text-[17px] font-medium text-ink mb-2">{f.title}</h3>
                <p className="text-[15px] text-ink-2 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hybrid approach */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-5">Treća opcija: hibridni pristup</h2>
          <div className="text-[15px] text-ink-2 leading-relaxed space-y-4">
            <p>
              Neke firme kombinuju. Agencija radi strategiju i vodi kampanje. Freelancer dizajner radi vizuale jer ga već poznaju. Developer iz tima održava sajt.
            </p>
            <p>
              Ovaj model funkcioniše kad imate nekoga ko koordinira sve. Ako nemate project managera ili vlasnik nema vremena za to, hibridni pristup brzo postane haotičan.
            </p>
            <p>
              Mi radimo i sa klijentima koji imaju svoje freelancere. Dogovorimo ko šta pokriva, postavimo zajedničke alate za komunikaciju i definišemo odgovornosti. Funkcioniše, samo zahteva malo više organizacije na početku.
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/cene-izrade-sajta" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene izrade sajta</div>
              <div className="text-[12px] text-ink-3">Koliko košta sajt u Srbiji 2026</div>
            </Link>
            <Link to="/paketi" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Naši paketi</div>
              <div className="text-[12px] text-ink-3">Starter, Growth, Enterprise</div>
            </Link>
            <Link to="/case-studies" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Case studies</div>
              <div className="text-[12px] text-ink-3">Rezultati naših klijenata</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Niste sigurni šta vam treba?</h2>
          <p className="text-[15px] text-ink-2 mb-6">
            Javite nam se za besplatne konsultacije. Analiziramo vaš projekat i kažemo vam iskreno da li vam treba agencija, freelancer, ili nešto treće.
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
