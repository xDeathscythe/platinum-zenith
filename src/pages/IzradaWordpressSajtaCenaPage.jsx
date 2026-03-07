import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const tiers = [
  {
    name: 'Start WordPress sajt',
    price: '400 - 900€',
    desc: 'Jednostavan WordPress sajt za firme koje žele jasan online nastup i dobru osnovu za SEO.',
    includes: ['Do 6 stranica', 'Premium tema + prilagođavanje', 'Kontakt forma', 'Osnovni on-page SEO', 'Brzina i sigurnost osnovno podešavanje'],
    forWhom: 'Preduzetnici, lokalne usluge, mali biznisi',
  },
  {
    name: 'Poslovni WordPress',
    price: '900 - 2.200€',
    desc: 'WordPress sa custom sekcijama, boljom strukturom sadržaja i fokusom na lead generation.',
    includes: ['Do 15 stranica', 'Custom sekcije i layout', 'Blog + kategorije', 'Napredni SEO setup', 'GA4 + event tracking'],
    forWhom: 'Srednje firme i agencije',
  },
  {
    name: 'WordPress + WooCommerce',
    price: '1.600 - 4.500€',
    desc: 'Online prodavnica na WordPress-u sa WooCommerce-om, optimizovana za brzinu i prodaju.',
    includes: ['WooCommerce setup', 'Katalog proizvoda', 'Checkout i plaćanje', 'Automatski emailovi', 'SEO za kategorije i proizvode'],
    forWhom: 'E-commerce i brendovi sa fizičkim proizvodima',
  },
  {
    name: 'Custom WordPress sistem',
    price: '3.500 - 9.000+€',
    desc: 'Napredna WordPress rešenja sa integracijama, posebnim workflow-ima i zahtevnijim funkcionalnostima.',
    includes: ['Custom plugin logika', 'API integracije', 'Više user uloga', 'Napredna keš strategija', 'Tehnička podrška po dogovoru'],
    forWhom: 'Veći sistemi i ozbiljni projekti',
  },
]

const factors = [
  {
    title: 'Template ili custom dizajn',
    text: 'Template ubrzava izradu i spušta cenu. Custom dizajn traži više vremena ali daje jači brend utisak i bolju kontrolu nad konverzijom.',
  },
  {
    title: 'Broj i složenost stranica',
    text: 'Pet kratkih stranica i pet detaljnih prodajnih stranica nisu isti posao. Svaka sekcija utiče na procenu vremena i cene.',
  },
  {
    title: 'Plugin ekosistem',
    text: 'WordPress je moćan jer ima plugin-ove, ali previše plugin-ova pravi spor i nestabilan sajt. Dobra arhitektura znači manje konflikata i niži maintenance.',
  },
  {
    title: 'SEO i struktura sadržaja',
    text: 'Ako želite organski saobraćaj, bitno je da od starta rešimo URL strukturu, interne linkove, tehnički SEO i brzinu učitavanja.',
  },
  {
    title: 'Brzina i hosting',
    text: 'WordPress može biti brz, ali samo uz dobar hosting, keš i optimizaciju slika. Loš setup često napravi spor sajt i skupe revizije kasnije.',
  },
  {
    title: 'Sigurnost i backup politika',
    text: 'Bez jasnog backup plana i sigurnosnog sloja rizikujete prekid rada ili gubitak podataka. To mora biti deo početnog dogovora.',
  },
]

const mistakes = [
  {
    title: 'Kupovina najjeftinije ponude',
    text: 'Jeftin WordPress sajt često izgleda dobro na prvi pogled, ali kasnije traži puno popravki. Na kraju platite više nego da je urađen kvalitetno od početka.',
  },
  {
    title: 'Previše plugin-ova bez plana',
    text: 'Svaki plugin dodaje težinu i potencijalne konflikte. Bolje je imati manje, proverenih rešenja nego dvadeset nasumičnih dodataka.',
  },
  {
    title: 'Nema staging okruženja',
    text: 'Izmene direktno na live sajtu često izazovu kvarove. Staging štiti prod i skraćuje vreme oporavka kada nešto pođe po zlu.',
  },
  {
    title: 'Ignorisanje mobilnog UX-a',
    text: 'Većina korisnika dolazi sa telefona. Ako mobilni UX nije čist, gubite upite čak i kada imate dobar saobraćaj.',
  },
  {
    title: 'Nedefinisan maintenance',
    text: 'WordPress traži redovan update i proveru kompatibilnosti. Ako to nije dogovoreno unapred, posle nekoliko meseci nastaje tehnički dug.',
  },
]

const faqs = [
  {
    q: 'Koliko traje izrada WordPress sajta?',
    a: 'Start sajt obično 1-2 nedelje, poslovni 2-5 nedelja, a WooCommerce projekti 4-8 nedelja u zavisnosti od obima.',
  },
  {
    q: 'Da li WordPress može da bude brz?',
    a: 'Da. Uz dobar hosting, kvalitetan theme setup, optimizovane slike i keš strategiju WordPress može imati vrlo dobar PageSpeed.',
  },
  {
    q: 'Da li mogu sam da menjam sadržaj?',
    a: 'Da, to je jedna od glavnih prednosti WordPress-a. Nakon isporuke dobijate kratko uputstvo za osnovne izmene.',
  },
  {
    q: 'Koliko košta održavanje WordPress sajta?',
    a: 'Zavisi od obima, ali osnovno održavanje je najčešće 50-200€ mesečno. U to ulaze update-i, backup i osnovni sigurnosni monitoring.',
  },
  {
    q: 'WordPress ili custom development?',
    a: 'Ako želite bržu isporuku i fleksibilan CMS, WordPress je često bolji izbor. Za specifične sisteme sa posebnom logikom nekad je bolji custom pristup.',
  },
]

export default function IzradaWordpressSajtaCenaPage() {
  usePageMeta()

  return (
    <div className="min-h-screen bg-page">
      <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(16,185,129,0.1) 0%, transparent 50%)' }} />
          <div className="absolute inset-0 only-light" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(59,130,246,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(16,185,129,0.06) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 max-w-[820px] mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">WordPress vodič kroz cene</span>
          <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">
            Koliko košta izrada WordPress sajta u Srbiji 2026?
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[640px] mx-auto">
            Realne cene po tipovima projekta, šta ulazi u cenu i gde firme najčešće izgube budžet bez potrebe.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Paketi po fazama i potrebama</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {tiers.map(t => (
              <div key={t.name} className="bg-panel rounded-[20px] border border-edge p-6 md:p-8 flex flex-col min-h-[340px]">
                <div className="text-[12px] text-ink-4 uppercase tracking-widest mb-2">{t.forWhom}</div>
                <h3 className="text-[22px] font-medium text-ink mb-1">{t.name}</h3>
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
        </div>
      </section>

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Od čega zavisi cena WordPress sajta?</h2>
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

      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-5">Najčešće greške pri izboru izvođača</h2>
          <div className="space-y-6">
            {mistakes.map((m, i) => (
              <div key={m.title}>
                <h3 className="text-[16px] font-medium text-ink mb-2"><span className="text-ink-4 mr-2">{i + 1}.</span>{m.title}</h3>
                <p className="text-[14px] text-ink-2 leading-relaxed">{m.text}</p>
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
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-6 text-center">Povezane stranice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/cene-izrade-sajta" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene izrade sajta</div>
              <div className="text-[12px] text-ink-3">Širi pregled po tipovima</div>
            </Link>
            <Link to="/web-design" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Web design usluga</div>
              <div className="text-[12px] text-ink-3">Kako radimo sajtove koji konvertuju</div>
            </Link>
            <Link to="/agencija-vs-freelancer" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Agencija vs freelancer</div>
              <div className="text-[12px] text-ink-3">Kako izabrati partnera</div>
            </Link>
            <Link to="/blog/izrada-landing-stranice-cena-rokovi-sta-ulazi-u-cenu" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cena landing stranice</div>
              <div className="text-[12px] text-ink-3">Rokovi i šta realno ulazi u cenu</div>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[620px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Želiš tačnu procenu za WordPress projekat?</h2>
          <p className="text-[15px] text-ink-2 mb-6">
            Pošalji nam šta ti treba i dobićeš jasan raspon cene, rok i predlog strukture sajta bez obaveze.
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
