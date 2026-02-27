import { Link } from 'react-router-dom'
import BottomCTA from '../components/BottomCTA'
import Reveal from '../components/Reveal'

const B = import.meta.env.BASE_URL
const heroHomeDark = `${B}hero-home-dark.webp`
const heroHomeLight = `${B}hero-home-light.webp`

const studies = [
  {
    client: 'Grubin Showroom',
    industry: 'E-Commerce / Anatomska obuća',
    duration: '12+ meseci',
    challenge: 'Grubin Showroom je imao sajt sa niskom konverzijom od 0,8% i izuzetno niskom vrednošću po kupovini — kupci su retko kupovali više od jednog para. Katalog proizvoda je bio nesinhronizovan i zastareo, a Facebook pixel nije bio optimizovan za konverziju. Cena po kupovini je bila 4,37$, a ROAS jedva iznad nule.',
    solution: 'Kompletna izrada novog sajta sa optimizovanim checkout procesom, order bumps u mini korpi, povezanim proizvodima i očitačem za besplatnu dostavu. Optimizacija kampanja sa smanjenjem cene po rezultatu, podešavanje targetiranja i puštanje reklama kao Dark Post. Rezultat: konverzija je skočila 2,12 puta, cena po kupovini pala na svega 1,68$ — a promet je sa 20,4 miliona RSD u 2024. porastao na 64,4 miliona RSD u 2025.',
    testimonial: 'Pre saradnje sa Platinum Zenith, konverzija na sajtu je bila 0,8% i kupci su retko kupovali više od jednog para. Posle novog sajta konverzija je skočila 2,12 puta, a cena po kupovini pala za 61%. Na istom budžetu imamo 160% više prodaja.',
    results: [
      { metric: 'Godišnji promet', before: '20,4M RSD', after: '64,4M RSD', change: '+215%' },
      { metric: 'Narudžbine', before: '3.975', after: '11.076', change: '+179%' },
      { metric: 'Cena po kupovini', before: '$4,37', after: '$1,68', change: '-61%' },
    ],
    color: 'emerald',
  },
  {
    client: 'Ordinacija Medifizio',
    industry: 'Zdravstvo / Fizikalna medicina',
    duration: '8 meseci',
    challenge: 'Ordinacija Medifizio je postojala tek tri godine i beležila je mesečni promet od oko 400.000 dinara. Nije imala jasno pozicioniranje na tržištu, nije koristila digitalni marketing, a ceo tok novih pacijenata zavisio je od usmene preporuke. Kapaciteti su postojali, ali popunjenost termina je bila daleko ispod potencijala.',
    solution: 'Primenjen je kombinovani pristup: direktni response marketing za privlačenje novih pacijenata, poslovni konsalting za strukturiranje ponude i cena, i pravilno pozicioniranje na tržištu koje je ordinaciju izdvojilo od konkurencije. Izrađen je profesionalan sajt sa jasnim korisničkim putanjama i pozivima na akciju, a kampanje su targetirale ljude koji aktivno traže fizioterapiju i rehabilitaciju u svom gradu.',
    testimonial: 'Za 8 meseci smo prešli sa 400.000 na 2.400.000 dinara mesečnog prometa. Platinum Zenith nije samo napravio sajt i pustio reklame, već nam je pomogao da razumemo šta kupci zapravo traže i kako da se pozicioniramo kao prvi izbor.',
    results: [
      { metric: 'Mesečni promet', before: '400K RSD', after: '2,4M RSD', change: '6x rast' },
      { metric: 'Rast prihoda', before: 'Bazni nivo', after: '+500%', change: '8 meseci' },
      { metric: 'Pozicioniranje', before: 'Bez strategije', after: '#1 lokalno', change: 'Lider' },
    ],
    color: 'blue',
  },
  {
    client: 'Focus Fizikal',
    industry: 'Fitness / Anti-celulit tretmani',
    duration: '1 mesec',
    image: `${B}case-focus-fizikal.webp`,
    challenge: 'Focus Fizikal je želeo da popuni termine za novi anti-celulit tretman, ali bez velikog budžeta. Prethodni pokušaji sa oglasima su donosili skupe prijave po €5-8 i slab kvalitet kontakata koji se nisu pojavljivali na terminima.',
    solution: 'Kreirane su tri varijante oglasa sa high-converting fotografijama i direktnim pozivom na akciju. Kampanja je targetirala žene u lokalnom krugu od 15km sa interesovanjem za fitness i negu tela. A/B testiranjem smo brzo identifikovali pobednički kreativ (45 prijava po €0.78) i preusmerili budžet na njega. Ukupan rezultat: 63 prijave za samo €60 potrošenog budžeta.',
    testimonial: 'Za 60 evra smo dobili 63 prijave za anti-celulit tretman. Cena od 96 centi po prijavi je nešto što nismo ni sanjali da je moguće. Platinum Zenith je napravio kampanju koja je popunila termine za ceo mesec.',
    results: [
      { metric: 'Ukupno prijava', before: '0', after: '63', change: '€60 budžet' },
      { metric: 'Cena po prijavi', before: '€5-8', after: '€0,96', change: '-85%' },
      { metric: 'Najbolji oglas', before: 'Bez testiranja', after: '€0,78/prijava', change: '45 prijava' },
    ],
    color: 'purple',
  },
]

const colorMap = {
  emerald: { border: 'border-emerald-500/10', text: 'text-emerald-400', bg: 'bg-emerald-400/10', accent: 'emerald' },
  blue: { border: 'border-blue-500/10', text: 'text-blue-400', bg: 'bg-blue-400/10', accent: 'blue' },
  purple: { border: 'border-purple-500/10', text: 'text-purple-400', bg: 'bg-purple-400/10', accent: 'purple' },
}

export default function CaseStudiesPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-[85vh] flex flex-col items-center text-center pt-[160px] md:pt-[220px] pb-[60px] px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ backgroundImage: `url(${heroHomeDark})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#000000' }} />
          <div className="absolute inset-0 only-light" style={{ backgroundImage: `url(${heroHomeLight})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#ffffff' }} />
          <div className="absolute inset-x-0 z-[1]" style={{ top: '64vh', height: '52vh', backdropFilter: 'blur(68px)', WebkitBackdropFilter: 'blur(68px)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)' }} />
          <div className="absolute inset-0 z-[2] only-dark" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 46%, rgba(0,0,0,0.26) 62%, rgba(0,0,0,0.60) 76%, rgba(0,0,0,0.88) 90%, #000000 100%)' }} />
          <div className="absolute inset-0 z-[2] only-light" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 46%, rgba(255,255,255,0.30) 62%, rgba(255,255,255,0.64) 76%, rgba(255,255,255,0.90) 90%, #ffffff 100%)' }} />
        </div>
        <div className="relative z-10 w-full">
          <h1 className="hero-enter hero-enter-d1 text-[32px] md:text-[62px] font-medium leading-[1.1] md:leading-[62px] tracking-[-1px] md:tracking-[-1.86px] text-black mb-4">
            Rezultati koji govore<br className="hidden md:inline" /> sami za sebe
          </h1>
          <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center mb-6 md:mb-8 max-w-[620px] mx-auto px-6 md:px-2">
            Konkretni brojevi iz saradnje sa klijentima. Bez ulepšavanja, bez generičkih obećanja.
          </p>
          <div className="hero-enter hero-enter-d3 flex items-center justify-center gap-2 flex-wrap px-2">
            <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/80 transition-colors">
              Zakažite Konsultacije
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <Reveal className="py-8 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 bg-tint rounded-[11px] border border-edge-2 overflow-hidden">
            {[
              { v: '64,4M', l: 'RSD prometa (Grubin 2025)' },
              { v: '6x', l: 'Rast prihoda (Medifizio)' },
              { v: '€0,96', l: 'Po prijavi (Focus Fizikal)' },
              { v: '3', l: 'Studije slučaja' },
            ].map(s => (
              <div key={s.l} className="py-6 px-4 text-center border-r last:border-r-0 border-edge-2 md:border-b-0 border-b [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r">
                <div className="text-[28px] md:text-[32px] font-bold text-ink">{s.v}</div>
                <div className="text-[12px] text-ink-2 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <section className="pb-20 px-4 md:px-8">
        <div className="max-w-[1000px] mx-auto space-y-16">
          {studies.map((s, i) => {
            const c = colorMap[s.color]
            return (
              <Reveal key={s.client}>
                <div className={`bg-panel rounded-[16px] p-8 md:p-10 border ${c.border}`}>
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-3">
                    <div>
                      <h2 className="text-[26px] md:text-[30px] font-medium text-ink">{s.client}</h2>
                      <span className="text-[14px] text-ink-3">{s.industry}</span>
                    </div>
                    <span className={`text-[13px] font-medium ${c.text} ${c.bg} px-4 py-1.5 rounded-full self-start`}>
                      {s.duration}
                    </span>
                  </div>

                  {/* Challenge + Solution */}
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <div className="text-[13px] text-ink-4 uppercase tracking-wider mb-3 font-medium">Izazov</div>
                      <p className="text-[15px] text-ink-2 leading-[26px]">{s.challenge}</p>
                    </div>
                    <div>
                      <div className="text-[13px] text-ink-4 uppercase tracking-wider mb-3 font-medium">Rešenje</div>
                      <p className="text-[15px] text-ink-2 leading-[26px]">{s.solution}</p>
                    </div>
                  </div>

                  {/* Campaign Screenshot */}
                  {s.image && (
                    <div className="mb-8 rounded-[12px] overflow-hidden border border-edge-2">
                      <img src={s.image} alt={`${s.client} kampanja rezultati`} className="w-full h-auto" loading="lazy" />
                    </div>
                  )}

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {s.results.map(r => (
                      <div key={r.metric} className="bg-tint rounded-[12px] p-5 text-center border border-edge-2">
                        <div className="text-[13px] text-ink-3 mb-3">{r.metric}</div>
                        <div className="flex items-center justify-center gap-2 text-[14px] mb-2">
                          <span className="text-ink-3">{r.before}</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ink-4"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                          <span className="text-ink font-semibold">{r.after}</span>
                        </div>
                        <div className={`text-[18px] font-bold ${c.text}`}>{r.change}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="border-t border-edge-2 pt-6">
                    <p className="text-[15px] text-ink-2 leading-[26px] italic">
                      "{s.testimonial}"
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
