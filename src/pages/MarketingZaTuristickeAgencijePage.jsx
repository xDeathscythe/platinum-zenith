import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const challenges = [
  { icon: '🌍', title: 'Sezonska potražnja', desc: 'Turizam je izrazito sezonski biznis. Vaš marketing mora da generiše rezervacije u piku sezone, ali i da održi stabilan prihod tokom zime i predsezone kroz rani buking.' },
  { icon: '🔍', title: 'Agresivna konkurencija', desc: 'Borite se sa velikim portalima kao što su Booking i Airbnb, kao i sa stotinama drugih lokalnih agencija. Morate se izdvojiti jedinstvenim paketima i brendingom.' },
  { icon: '📸', title: 'Vizuelna prodaja', desc: 'Ljudi ne kupuju samo aranžman, kupuju doživljaj i emociju. Fotografije i video snimci destinacija su presudni za donošenje odluke o putovanju.' },
  { icon: '🛒', title: 'Napuštene korpe (rezervacije)', desc: 'Kupci dugo istražuju, upoređuju cene i često napuštaju proces rezervacije. Snažan sistem za retargeting je neophodan da ih vratite na sajt.' },
  { icon: '⭐', title: 'Poverenje i sigurnost', desc: 'Putovanja su skupa investicija. Recenzije zadovoljnih putnika, video testimonijali i transparentni uslovi su ključni za konverziju.' },
  { icon: '📱', title: 'Mobilni buking', desc: 'Preko 70% saobraćaja u turizmu dolazi sa mobilnih telefona. Vaš sajt i proces rezervacije moraju biti besprekorno optimizovani za mobilne uređaje.' },
]

const services = [
  {
    title: 'Meta (Facebook i Instagram) kampanje',
    desc: 'Inspiracija je ključna u turizmu. Kreiramo vizuelno privlačne kampanje koje bude želju za putovanjem.',
    items: ['Carousel i Video oglasi za najatraktivnije destinacije', 'Retargeting kampanje za korisnike koji su gledali specifične ponude', 'Lead generation kampanje za rani buking i specijalne popuste', 'Instagram Reels i Stories za "behind the scenes" sadržaj sa putovanja'],
  },
  {
    title: 'Google Ads i Lokalni SEO',
    desc: 'Hvatamo ljude u momentu kada aktivno traže letovanje, zimovanje ili city break aranžmane.',
    items: ['Search kampanje za visoko-namerne pretrage (npr. "letovanje grčka 2026")', 'Performance Max kampanje za maksimalan doseg širom Google mreže', 'Optimizacija Google Business profila za lokalne putnike', 'Prikupljanje i promocija Google recenzija vaših putnika'],
  },
  {
    title: 'SEO optimizacija turističkog sajta',
    desc: 'Pozicionirajte se organski za najtraženije destinacije i smanjite zavisnost od plaćenih oglasa.',
    items: ['On-page optimizacija stranica destinacija i hotela', 'Kreiranje turističkog bloga (vodiči, saveti za putovanja, šta videti)', 'Tehnički SEO za brže učitavanje i bolje mobilno iskustvo', 'Izgradnja autoriteta (Link building) u industriji turizma'],
  },
  {
    title: 'Email marketing i automatizacija',
    desc: 'Najprofitabilniji kanal za prodaju "last minute" ponuda i zadržavanje postojećih klijenata.',
    items: ['Automatizovane sekvence za korisnike koji su napustili rezervaciju', 'Segmentirani newsletteri (porodice, parovi, avanturisti)', 'Ekskluzivne rani buking ponude za email pretplatnike', 'Post-trip emailovi za prikupljanje recenzija i lojalnost'],
  },
]

const metrics = [
  { num: '4-8x', label: 'Povrat investicije (ROAS)', desc: 'Prosečan povrat na uloženi novac u Google i Meta oglasne kampanje za turističke aranžmane.' },
  { num: '60%+', label: 'Više direktnih rezervacija', desc: 'Rast broja upita i rezervacija direktno preko vašeg sajta, bez posrednika.' },
  { num: '30%+', label: 'Manje napuštenih rezervacija', desc: 'Smanjenje stope napuštanja procesa kupovine kroz optimizaciju sajta i retargeting.' },
]

const faqs = [
  { q: 'Da li radite marketing za male, specijalizovane turističke agencije?', a: 'Da. Za "boutique" agencije fokusiramo se na visoko-targetiran marketing prema specifičnoj publici (npr. avanturistički turizam, luksuzna putovanja, vinske ture), gde SEO i kvalitetan sadržaj igraju glavnu ulogu.' },
  { q: 'Koliki budžet nam je potreban za Google i Meta oglase?', a: 'Zavisi od vaših ciljeva i broja destinacija koje promovišete. Preporučujemo početni mesečni budžet od minimum 500€ do 1.000€ za testiranje i prve rezultate, a za velike agencije taj iznos se skalira shodno sezoni i kapacitetima.' },
  { q: 'Imamo problem sa booking-om van sezone. Kako to rešiti?', a: 'Fokusiramo se na rani buking (Early Bird) ponude, city break aranžmane i specijalizovana putovanja (team building, kongresni turizam) koristeći B2B LinkedIn kampanje i ciljane email sekvence postojećoj bazi klijenata.' },
  { q: 'Naš sajt je star i rezervacije idu uglavnom preko telefona. Da li je to problem?', a: 'Da, u 2026. godini to je veliki problem jer većina putnika želi online rezervaciju. Pre nego što investiramo veliki novac u oglase, možemo uraditi redizajn vašeg sajta sa integrisanim, jednostavnim sistemom za upite i online buking.' },
  { q: 'Koliko brzo možemo očekivati rezultate?', a: 'Plaćene kampanje (Google Ads i Meta) generišu upite i rezervacije u roku od nekoliko dana. Za organski rast kroz SEO potrebno je 3-6 meseci kontinuiranog rada na sadržaju i tehničkoj optimizaciji sajta.' },
]

export default function MarketingZaTuristickeAgencijePage() {
  usePageMeta()

  return (
    <>
      <section className="pt-[140px] pb-20 md:pt-[200px] md:pb-28 px-4 md:px-8 bg-panel overflow-hidden border-b border-edge-2">
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <p className="text-[13px] md:text-[14px] text-ink-3 uppercase tracking-[2px] font-medium mb-6">Marketing za turističke agencije</p>
          <h1 className="text-[32px] md:text-[56px] font-medium leading-[1.1] tracking-[-1.5px] text-ink mb-6">
            Rasprodajte aranžmane pre početka sezone.
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 max-w-[600px] mx-auto leading-relaxed mb-10">
            Povećajte broj direktnih online rezervacija kroz Google Ads, inspirativne Instagram kampanje i naprednu SEO optimizaciju vašeg turističkog sajta.
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
            <h2 className="text-[28px] md:text-[40px] font-medium tracking-[-1px] text-ink mb-4">Izazovi u turizmu zahtevaju specifičan pristup</h2>
            <p className="text-[16px] text-ink-2 max-w-[600px] mx-auto">Zašto vam treba strateški marketing, a ne samo povremeno boostovanje objava sa slikama plaže.</p>
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
            <h2 className="text-[28px] md:text-[40px] font-medium tracking-[-1px] text-ink mb-4">Sistem za stabilan buking tokom cele godine</h2>
            <p className="text-[16px] text-ink-2 max-w-[600px] mx-auto">Od prvog pregleda inspirativnog videa na mrežama do uspešne online rezervacije aranžmana.</p>
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
          <h2 className="text-[32px] md:text-[48px] font-medium tracking-[-1px] mb-6 text-white">Spremni za rasprodatu sezonu?</h2>
          <p className="text-[16px] md:text-[18px] text-white/80 mb-10 max-w-[600px] mx-auto">
            Zakazivanje besplatne analize vas ne obavezuje na saradnju. Pregledaćemo vaš sajt, aktuelne ponude i dati vam konkretan plan za povećanje broja putnika.
          </p>
          <Link to="/kontakt" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-blue-600 text-[15px] font-medium hover:bg-gray-50 transition-colors">
            Zakažite besplatne konsultacije
          </Link>
        </div>
      </section>
    </>
  )
}
