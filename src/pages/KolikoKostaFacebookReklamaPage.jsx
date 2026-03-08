import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const budgetTiers = [
  {
    name: 'Testiranje',
    budget: '200 - 500€/mes',
    desc: 'Za firme koje tek isprobavaju Facebook oglase. Dovoljno da testirate 2-3 kampanje i vidite šta radi za vaš biznis.',
    results: ['100-300 klikova na sajt mesečno', 'Početni podaci o publici i konverzijama', 'Testiranje 2-3 kreative', 'Dovoljno za jednu lokaciju ili proizvod'],
    forWhom: 'Mali biznisi, preduzetnici, početnici u oglašavanju',
  },
  {
    name: 'Rast',
    budget: '500 - 1.500€/mes',
    desc: 'Za firme koje su već testirale oglase i žele da skaliraju ono što radi. Više kampanja, više testova, širi doseg.',
    results: ['500-2.000 klikova mesečno', 'Retargeting postioca sajta', 'A/B testiranje 5-10 kreativa', 'Lookalike publike na osnovu kupaca'],
    forWhom: 'Rastući biznisi, e-commerce, uslužne firme',
  },
  {
    name: 'Ozbiljan marketing',
    budget: '1.500 - 5.000€/mes',
    desc: 'Za firme koje znaju da Facebook oglasi rade i žele maksimalan povrat. Pun funnel: awareness, consideration, konverzija.',
    results: ['2.000-10.000 klikova mesečno', 'Pun funnel sa automatizacijom', 'Video i karusel kampanje', 'Detaljno praćenje po proizvodu/usluzi'],
    forWhom: 'E-commerce sa katalogom, franšize, firme sa više lokacija',
  },
  {
    name: 'Enterprise',
    budget: '5.000€+/mes',
    desc: 'Za brendove sa velikim katalogom, regionalnim tržištima ili specifičnim zahtevima. Dedicirani tim i custom strategija.',
    results: ['10.000+ klikova i stotine konverzija', 'Višejezične kampanje', 'Dynamic Product Ads za ceo katalog', 'Napredna atribucija i analitika'],
    forWhom: 'Nacionalni brendovi, regionalne kompanije, veliki e-commerce',
  },
]

const costBreakdown = [
  { item: 'Budžet za oglase (ide Meti)', desc: 'Novac koji Facebook/Instagram naplaćuje za prikazivanje vaših oglasa. Vi kontrolišete dnevni ili mesečni limit. Ovo nije naknada agenciji.' },
  { item: 'Upravljanje kampanjama (agencija)', desc: 'Naknada agenciji za kreiranje, optimizaciju i praćenje kampanja. Obično 200-600€/mes za mali budžet, ili 10-20% budžeta za oglase kod većih kampanja.' },
  { item: 'Kreative (slike i video)', desc: 'Dizajn oglasa, fotografije proizvoda, kratki video klipovi. Neke agencije uključuju ovo u paket, neke naplaćuju posebno. Pitajte unapred.' },
  { item: 'Landing stranice', desc: 'Stranica na koju vodi oglas. Ako vodite ljude na lošu stranicu, bacate novac na klikove koji se ne konvertuju. Provete da li agencija pravi landing stranice ili samo vodi trafik.' },
]

const metrics = [
  { metric: 'CPC (cena po kliku)', srbija: '0,05 - 0,30€', note: 'Zavisi od industrije. E-commerce i nekretnine su skuplji. Lokalni biznisi obično plaćaju manje.' },
  { metric: 'CPM (cena za 1.000 prikazivanja)', srbija: '2 - 8€', note: 'Jeftinije od većine EU tržišta. Srbija je relativno pristupačna za Facebook oglašavanje.' },
  { metric: 'CPA (cena po konverziji)', srbija: '3 - 25€', note: 'Veoma zavisi od cene proizvoda/usluge. Jeftini proizvodi imaju nižu CPA, skupe usluge višu.' },
  { metric: 'ROAS (povrat na uloženo)', srbija: '3x - 10x', note: 'Dobar ROAS u Srbiji je 4-5x. Sve ispod 2x znači da gubite novac kad uračunate sve troškove.' },
]

const mistakes = [
  { title: 'Boost-ovanje postova umesto pravih kampanja', text: 'Dugme "Boost Post" na Instagramu je najskuplji način da bacite novac. Daje vam doseg bez kontrole nad publikom, bez konverzija, bez praćenja. Prave kampanje se prave u Ads Manageru sa jasnim ciljem.' },
  { title: 'Previše široka publika', text: 'Ciljanje "svi u Srbiji, 18-65 godina" znači da vaš oglas vide ljudi koji nemaju nikakve veze sa vašim proizvodom. Suzite publiku po interesovanjima, ponašanju ili na osnovu poseta sajtu.' },
  { title: 'Jedan oglas za sve', text: 'Trebaju vam minimum 3-4 varijante kreative da testirate šta radi. Jedan oglas se brzo "istroši" jer ga isti ljudi vide previše puta. Facebook algoritam favorizuje kampanje sa više kreativa.' },
  { title: 'Nema piksela na sajtu', text: 'Bez Facebook Piksela ne znate ko je kliknuo, ko je kupio i ko se vratio. Piksel je besplatan i instalira se za 10 minuta. Bez njega, oglašavanje je pogađanje.' },
  { title: 'Odustajanje posle 7 dana', text: 'Facebooku treba 3-5 dana da "nauči" kome da prikazuje vaš oglas (learning phase). Ako ugasite kampanju posle nedelju dana jer "nije radila", niste joj dali šansu. Minimum 2-3 nedelje za ozbiljan test.' },
]

const faqs = [
  { q: 'Koliko novca treba za početak?', a: 'Minimum koji ima smisla je 200€ mesečno za budžet za oglase, plus 200-300€ za agenciju koja upravlja kampanjama. Ispod toga nemate dovoljno podataka za optimizaciju i rezultati su nepouzdani.' },
  { q: 'Da li mogu sam da vodim Facebook oglase?', a: 'Možete, ali krivulja učenja je strma. Većina vlasnika firmi koji sami pokrenu kampanje troši 2-3x više po konverziji od agencije sa iskustvom. Ako imate vreme za učenje i eksperimentisanje, počnite sa malim budžetom.' },
  { q: 'Facebook ili Instagram oglasi?', a: 'Tehnički, oba se vode iz istog sistema (Meta Ads Manager). Instagram je bolji za vizuelne proizvode i mlađu publiku. Facebook ima širi doseg i bolje radi za B2B i stariju demografiju. Većina kampanja koristi oba istovremeno.' },
  { q: 'Kad se vide rezultati?', a: 'Prve klikove vidite odmah. Ali za pravu optimizaciju treba 2-4 nedelje da Facebook prikupi dovoljno podataka. Posle mesec dana imate jasnu sliku šta radi a šta ne. Posle 3 meseca imate stabilne kampanje sa predvidljivim troškovima.' },
  { q: 'Da li Facebook oglasi rade za B2B?', a: 'Da, ali drugačije nego za B2C. B2B kampanje koriste lead forme, webinar pozivnice ili download besplatnih resursa kao konverzijski cilj. Cena po leadu je viša (10-30€), ali vrednost svakog klijenta je takođe veća.' },
]

export default function KolikoKostaFacebookReklamaPage() {
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
            Koliko košta Facebook reklama u Srbiji?
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[600px] mx-auto">
            Koliko plaćate Meti, koliko agenciji, i šta realno možete očekivati za svoj budžet. Cene za srpsko tržište u 2026.
          </p>
        </div>
      </section>

      {/* Budget tiers */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">Koliko treba uložiti?</h2>
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

      {/* Cost breakdown */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-4 text-center">Gde zapravo ide vaš novac?</h2>
          <p className="text-[15px] text-ink-3 text-center mb-10 max-w-[600px] mx-auto">
            Kad neko kaže "Facebook oglasi koštaju 500€ mesečno", ta cifra obično ne uključuje sve.
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

      {/* Serbian market metrics */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-4 text-center">Prosečni troškovi u Srbiji</h2>
          <p className="text-[15px] text-ink-3 text-center mb-10 max-w-[600px] mx-auto">
            Ovo su raspon vrednosti koje vidimo kod klijenata u Srbiji. Vaši brojevi mogu biti viši ili niži zavisno od industrije i kvaliteta kampanje.
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

      {/* Common mistakes */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-10 text-center">5 grešaka koje koštaju novac</h2>
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

      {/* Our approach */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-5">Kako mi vodimo Facebook kampanje</h2>
          <div className="text-[15px] text-ink-2 leading-relaxed space-y-4">
            <p>
              Svaku kampanju počinjemo sa analizom vašeg biznisa. Ko su vaši kupci, gde provode vreme online, šta ih motiviše da kupe. Ovo traje dan-dva, ali štedi hiljade evra na pogrešno ciljane oglase.
            </p>
            <p>
              Prvih mesec dana je testiranje. Pravimo 5-8 varijanti oglasa sa različitim slikama, tekstom i pozivima na akciju. Pratimo šta radi i gasimo šta ne radi. Od drugog meseca imamo podatke da skaliramo pobedničke varijante.
            </p>
            <p>
              Svake dve nedelje dobijate izveštaj sa konkretnim brojevima: koliko ste potrošili, koliko klikova ste dobili, koliko ljudi je poslalo upit ili kupilo. Bez marketinškog žargona, samo brojevi koji vam govore da li se investicija isplati.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/cene-digitalnog-marketinga" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene digitalnog marketinga</div>
              <div className="text-[12px] text-ink-3">Komplet vodič kroz cene</div>
            </Link>
            <Link to="/digitalni-marketing" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Digitalni marketing</div>
              <div className="text-[12px] text-ink-3">Zenith sistem za akviziciju</div>
            </Link>
            <Link to="/agencija-vs-freelancer" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Agencija vs freelancer</div>
              <div className="text-[12px] text-ink-3">Kako da izaberete izvođača</div>
            </Link>
            <Link to="/blog/google-ads-vs-facebook-ads-koji-je-bolji" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Google Ads vs Facebook Ads</div>
              <div className="text-[12px] text-ink-3">Koji kanal je bolji za vaš cilj</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Želite konkretnu procenu za vaš biznis?</h2>
          <p className="text-[15px] text-ink-2 mb-6">
            Javite nam se za besplatne konsultacije. Analiziramo vaš biznis i kažemo koliko bi vas Facebook oglašavanje realno koštalo i šta možete očekivati.
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
