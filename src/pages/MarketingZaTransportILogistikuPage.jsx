import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  { icon: '🚚', title: 'B2B poverenje', desc: 'Transportne i špediterske usluge zahtevaju visok nivo poverenja. Klijenti vam predaju vrednu robu. Vaš marketing mora da odiše sigurnošću, tačnošću i profesionalizmom.' },
  { icon: '🌍', title: 'Internacionalni doseg', desc: 'Ako radite međunarodni transport, vaši potencijalni klijenti traže partnere na više jezika. SEO i Google Ads kampanje moraju biti precizno targetirane po regionima.' },
  { icon: '👥', title: 'Dugoročna B2B partnerstva', desc: 'Ne tražite jednokratne vožnje, već ugovore na godišnjem nivou. LinkedIn i B2B networking su često efikasniji od masovnog reklamiranja na mrežama.' },
  { icon: '📦', title: 'Problem "praznih tura"', desc: 'Optimizacija kapaciteta je ključ u logistici. Pametne "Lead Generation" kampanje vam mogu pomoći da pronađete robu za povratne ture i maksimalno iskoristite flotu.' },
  { icon: '📞', title: 'Brzina odgovora', desc: 'Kada klijentu hitno treba prevoz robe, on ne čeka. Ako vaš sajt nije na vrhu pretrage i nema brz klik za poziv, gubite posao.' },
  { icon: '🧑‍🔧', title: 'Zapošljavanje vozača', desc: 'U transportu uvek fali dobrih vozača. Snažan brend i ciljane Facebook kampanje (Employer Branding) pomažu u zapošljavanju pouzdanih radnika.' },
]

const services = [
  {
    title: 'Google Ads (Search) za hitne upite',
    desc: 'Biti prvi kada klijent ukuca "kombi prevoz inostranstvo" ili "međunarodna špedicija".',
    items: ['Targetiranje ključnih reči sa jasnom namerom zakupa prevoza', 'Kampanje za specifične rute (npr. zbirni transport Srbija-Nemačka)', 'Poziv-na-klik ekstenzije za hitne B2B upite', 'Optimizacija cene po lead-u (CPL)'],
  },
  {
    title: 'B2B Lead Generation na LinkedIn-u',
    desc: 'Pronalazak direktora logistike i nabavke u proizvodnim firmama.',
    items: ['Precizno targetiranje donosilaca odluka u industriji', 'LinkedIn Lead Gen forme za ugovaranje dugoročne saradnje', 'Građenje autoriteta (članci o carinskim procedurama, Incoterms)', 'Direktne poruke (InMail) kampanje za B2B partnerstva'],
  },
  {
    title: 'SEO optimizacija sajta za logistiku',
    desc: 'Dugoročni organski rast za sve vrste transportnih i špediterskih usluga.',
    items: ['Stranice posvećene specifičnim tipovima robe (ADR, frigo, vangabaritni)', 'Lokalni i internacionalni SEO na više jezika', 'Tehnički brz i mobilno-responzivan sajt', 'Edukativni blog o procedurama (carina, dokumentacija)'],
  },
  {
    title: 'Employer Branding (Zapošljavanje)',
    desc: 'Oglasi i brending koji privlače profesionalne vozače i dispečere.',
    items: ['Meta (Facebook) kampanje za regrutaciju vozača', 'Video intervjui zaposlenih (prikaz sigurnosti i benefita)', 'Optimizacija "Karijera" stranice na sajtu', 'Kampanje sa fokusom na radne uslove i flotu vozila'],
  },
]

const metrics = [
  { num: '300%+', label: 'Rast B2B upita', desc: 'Kroz kombinaciju Google Search kampanja i LinkedIn Lead Generation formi.' },
  { num: '8-15x', label: 'Povrat investicije (ROAS)', desc: 'Jedan dugoročni ugovor o transportu često isplati marketing budžet za celu godinu.' },
  { num: '-40%', label: 'Cena po upitu (CPA)', desc: 'Značajno smanjenje troškova akvizicije optimizacijom B2B kampanja i odredišnih stranica.' },
]

const faqs = [
  { q: 'Mi radimo samo B2B transport kamionima. Da li su društvene mreže za nas?', a: 'Facebook verovatno nije kanal za direktnu prodaju B2B transporta, ali je ključan za Employer Branding (zapošljavanje vozača). S druge strane, LinkedIn je izuzetno moćan alat za B2B prodaju i građenje odnosa sa direktorima logistike.' },
  { q: 'Koliki nam budžet treba za Google Ads?', a: 'Zavisi od vaših ruta i usluga. Za međunarodni transport i zbirne utovare, preporučujemo početni budžet od minimum 1.000€ do 2.000€ mesečno. Konkurencija za ove ključne reči je jaka, ali su i ugovori vrlo visoke vrednosti.' },
  { q: 'Da li možete da nam pomognete da smanjimo "prazne ture"?', a: 'Da. Kroz ciljane Google Ads i LinkedIn kampanje možemo targetirati specifične regione gde vam najčešće nedostaje roba za povratne ture. Kampanje se mogu paliti i gasiti po potrebi.' },
  { q: 'Kako se meri uspeh marketinga u špediciji?', a: 'Merenje je jednostavno: pratimo broj popunjenih "Zahteva za ponudu", broj direktnih poziva sa sajta i konverzije iz B2B LinkedIn kampanja. Povezujemo te podatke sa vašim prodajnim timom kako bismo izračunali tačan ROAS.' },
  { q: 'Poredimo se sa velikim međunarodnim logističkim kompanijama. Kako da se istaknemo?', a: 'Fleksibilnošću i brzinom. Veliki sistemi su spori. Vaš sajt i poruka moraju da naglase lični pristup, direktnu komunikaciju sa dispečerom i brza rešenja bez birokratije.' },
]

export default function MarketingZaTransportILogistikuPage() {
  usePageMeta()

  return (
    <>
      <section className="pt-[140px] pb-20 md:pt-[200px] md:pb-28 px-4 md:px-8 bg-panel overflow-hidden border-b border-edge-2">
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <p className="text-[13px] md:text-[14px] text-ink-3 uppercase tracking-[2px] font-medium mb-6">Marketing za Transport i Logistiku</p>
          <h1 className="text-[32px] md:text-[56px] font-medium leading-[1.1] tracking-[-1.5px] text-ink mb-6">
            Više punih tura. Manje "praznih kilometara".
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 max-w-[600px] mx-auto leading-relaxed mb-10">
            Dovodimo vam B2B klijente kojima je hitno potreban transport. Kroz Google Ads, SEO i LinkedIn, gradimo bazu direktnih partnera za vašu špediciju.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/kontakt" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-inv-bg text-inv-fg text-[15px] font-medium hover:bg-inv-bg-hover transition-colors w-full sm:w-auto">
              Zatražite besplatnu analizu
            </Link>
            <Link to="/digitalni-marketing" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-transparent border border-edge text-ink text-[15px] font-medium hover:border-ink/30 transition-colors w-full sm:w-auto">
              Pogledajte naše usluge
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-page">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[28px] md:text-[40px] font-medium tracking-[-1px] text-ink mb-4">Logistika zahteva B2B pristup</h2>
            <p className="text-[16px] text-ink-2 max-w-[600px] mx-auto">U transportu, svaki "prazan" kilometar košta. Pravi marketing vam obezbeđuje poslove kada vam najviše trebaju.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c, i) => (
              <div key={i} className="bg-panel rounded-2xl p-8 border border-edge-2">
                <span className="text-[32px] mb-4 block">{c.icon}</span>
                <h3 className="text-[18px] font-medium text-ink mb-3">{c.title}</h3>
                <p className="text-[15px] text-ink-3 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-ink text-inv-fg">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-edge/20">
            {metrics.map((m, i) => (
              <div key={i} className="pt-8 md:pt-0 first:pt-0">
                <div className="text-[48px] md:text-[56px] font-medium text-blue-400 mb-2">{m.num}</div>
                <div className="text-[18px] font-medium text-inv-fg mb-3">{m.label}</div>
                <div className="text-[15px] text-inv-fg/60 leading-relaxed max-w-[280px] mx-auto">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-page">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[28px] md:text-[40px] font-medium tracking-[-1px] text-ink mb-4">Sistem prodaje za transportne kompanije</h2>
            <p className="text-[16px] text-ink-2 max-w-[600px] mx-auto">Strategija koja targetira direktore nabavke i logistike.</p>
          </div>
          <div className="space-y-6">
            {services.map((s, i) => (
              <div key={i} className="bg-panel rounded-2xl p-8 md:p-10 border border-edge-2">
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                  <div className="md:w-1/3">
                    <span className="text-[13px] text-ink-4 uppercase tracking-[2px] font-medium block mb-2">Strategija 0{i + 1}</span>
                    <h3 className="text-[22px] font-medium text-ink mb-3">{s.title}</h3>
                    <p className="text-[15px] text-ink-3 leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="md:w-2/3">
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {s.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="text-blue-500 mt-1">✓</span>
                          <span className="text-[15px] text-ink-2 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-panel border-t border-edge-2">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[28px] md:text-[40px] font-medium tracking-[-1px] text-ink mb-4">Često postavljana pitanja</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-page rounded-2xl p-6 md:p-8 border border-edge-2">
                <h3 className="text-[18px] font-medium text-ink mb-3">{faq.q}</h3>
                <p className="text-[15px] text-ink-3 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-blue-600 text-white text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[32px] md:text-[48px] font-medium tracking-[-1px] mb-6 text-white">Spremni za više ugovora i vožnji?</h2>
          <p className="text-[16px] md:text-[18px] text-white/80 mb-10 max-w-[600px] mx-auto">
            Zakazivanje besplatne analize vas ne obavezuje na saradnju. Pregledaćemo vaš trenutni sajt, online prisustvo i dati vam predlog B2B strategije za rast.
          </p>
          <Link to="/kontakt" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-blue-600 text-[15px] font-medium hover:bg-gray-50 transition-colors">
            Zakažite besplatne konsultacije
          </Link>
        </div>
      </section>
    </>
  )
}
