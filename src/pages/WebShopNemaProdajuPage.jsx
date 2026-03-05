import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const reasons = [
  {
    num: '01',
    title: 'Sajt se sporo učitava',
    problem: 'Ako se vaš web shop ne učita za 3 sekunde, polovina posetilaca ode pre nego što vidi prvi proizvod. Google PageSpeed Insights vam za 30 sekundi kaže koliko je sajt brz. Ako je skor ispod 60, tu je problem.',
    fix: 'Kompresujte slike (WebP format umesto PNG/JPG), uključite keširanje, smanjite broj pluginova ako koristite WordPress/WooCommerce. Razlika između skora 40 i 90 može biti 30-50% više posetilaca koji ostanu na sajtu.',
    stat: 'Istraživanja pokazuju da svaka sekunda kašnjenja smanjuje konverzije za 7%.',
  },
  {
    num: '02',
    title: 'Nema poverenja za online kupovinu',
    problem: 'Posetilac ne zna ko ste vi. Nema recenzija, nema slike tima, nema fizičke adrese. U Srbiji je poverenje za online kupovinu još uvek niže nego u zapadnoj Evropi. Ljudi žele da znaju da iza sajta stoji realna firma.',
    fix: 'Dodajte recenzije kupaca (sa imenima i mestom), prikažite kontakt telefon na vidnom mestu, postavite slike proizvoda iz više uglova, i napišite jasnu politiku vraćanja. Svaki od ovih elemenata pojedinačno podiže konverziju za 5-15%.',
    stat: '72% kupaca u Srbiji kaže da recenzije utiču na odluku o kupovini.',
  },
  {
    num: '03',
    title: 'Checkout proces je komplikovan',
    problem: 'Svaki dodatni korak u procesu kupovine gubi 10-15% kupaca. Ako zahtevate registraciju pre kupovine, izgubićete trećinu ljudi koji su već stavili proizvod u korpu. Ako formular traži informacije koje nisu neophodne, još trećinu.',
    fix: 'Omogućite kupovinu bez registracije. Smanjite formular na minimum: ime, adresa, telefon, plaćanje. Dodajte progress bar da kupac vidi gde se nalazi u procesu. Ponudite pouzeće kao opciju jer većina kupaca u Srbiji još preferira plaćanje pri preuzimanju.',
    stat: 'Prosečna stopa napuštene korpe u Srbiji je oko 75%. Od toga se 35% može smanjiti samo boljim checkout procesom.',
  },
  {
    num: '04',
    title: 'Ne dolazi dovoljno pravih ljudi na sajt',
    problem: 'Imate sajt, ali niko ne dolazi. Ili dolaze pogrešni ljudi koji traže informacije a ne kupuju. Bez aktivnog privlačenja saobraćaja, web shop je kao radnja na sporednom putu bez table.',
    fix: 'Počnite sa Google Ads za proizvode koje ljudi aktivno traže. Optimizujte stranice proizvoda za SEO (nazivi proizvoda koje ljudi zaista kucaju u Google). Pokrenite remarketing da vratite ljude koji su posetili sajt ali nisu kupili.',
    stat: 'Web shopovi koji kombinuju SEO i plaćene oglase imaju 3x veću stopu konverzije nego oni koji se oslanjaju samo na jedan kanal.',
  },
  {
    num: '05',
    title: 'Stranice proizvoda ne prodaju',
    problem: 'Proizvod je tu, cena je tu, ali ništa ne motiviše kupca da klikne "Dodaj u korpu". Opis je kopiran od proizvođača (isti kao na 10 drugih sajtova), slike su male i mutne, nema informacije o dostavi ni o vraćanju.',
    fix: 'Napišite originalne opise koji odgovaraju na pitanja kupaca (ne samo specifikacije). Koristite kvalitetne slike sa bele pozadine. Prikažite rok i cenu dostave direktno na stranici proizvoda. Dodajte "Često kupljeno zajedno" sekciju za veću prosečnu vrednost korpe.',
    stat: 'Originalni opisi proizvoda i kvalitetne slike povećavaju konverziju za 30% u proseku.',
  },
]

const quickWins = [
  { action: 'Proverite brzinu sajta', tool: 'Google PageSpeed Insights (besplatno)', time: '5 minuta' },
  { action: 'Dodajte telefon u header', tool: 'Vaš CMS/WordPress', time: '10 minuta' },
  { action: 'Omogućite kupovinu bez registracije', tool: 'WooCommerce Settings ili vaš e-commerce CMS', time: '2 minuta' },
  { action: 'Dodajte pouzeće kao opciju plaćanja', tool: 'Payment gateway podešavanja', time: '15 minuta' },
  { action: 'Napišite 5 originalnih opisa za top proizvode', tool: 'Vaš CMS editor', time: '2-3 sata' },
  { action: 'Postavite Google Analytics 4', tool: 'GA4 (besplatno)', time: '30 minuta' },
]

const faqs = [
  { q: 'Imam web shop ali prodajem samo 2-3 proizvoda mesečno. Da li se isplati ulagati?', a: 'Zavisi. Ako imate proizvod koji ljudi traže i marginu koja pokriva troškove marketinga, onda da. Ako prodajete 2-3 komada mesečno bez ikakvog ulaganja, već to znači da potražnja postoji. Pitanje je samo koliko ljudi dolazi na sajt i koliki procenat kupuje.' },
  { q: 'Koliko treba uložiti da web shop počne da prodaje?', a: 'Za početak, fokusirajte se na besplatne popravke: brzina sajta, checkout optimizacija, bolji opisi proizvoda. To ne košta ništa osim vremena. Za plaćeni saobraćaj, minimalno 200-300€ mesečno za Google Shopping ili Meta Ads da biste videli da li kampanje mogu biti profitabilne.' },
  { q: 'Da li treba da menjam ceo sajt ili mogu popraviti postojeći?', a: 'U 80% slučajeva, postojeći sajt može da se popravi. Redizajn ima smisla samo ako je platforma zastarela ili ako je sajt toliko spor i nefunkcionalan da popravke koštaju više od novog. Počnite sa dijagnostikom pre nego što donesete odluku.' },
  { q: 'Zašto imam puno poseta ali malo prodaje?', a: 'Moguća su tri scenarija: dolaze pogrešni posetioci (traže informacije a ne proizvod), sajt ne uliva poverenje (fali social proof), ili je checkout komplikovan. Proverite u Google Analytics odakle dolaze posetioci i na kojoj stranici napuštaju sajt. To će vam reći gde je problem.' },
  { q: 'Da li je Instagram dovoljan za prodaju ili mi treba web shop?', a: 'Instagram je odličan za privlačenje pažnje, ali loš za prodaju. Ne možete filtrirati proizvode, nema korpe, nema praćenja zaliha. Koristite Instagram da dovedete ljude na web shop, ne kao zamenu za njega.' },
]

export default function WebShopNemaProdajuPage() {
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
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-5">Dijagnostika</span>
          <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-1px] text-ink mb-5">
            Web shop nema prodaju? Evo 5 razloga.
          </h1>
          <p className="text-[16px] md:text-[18px] text-ink-2 leading-relaxed max-w-[600px] mx-auto">
            Napravili ste web shop, uneli proizvode, podelili link na društvenim mrežama. Prošlo je mesec dana i imate jednu prodaju. Ili nijednu. Evo šta se verovatno dešava.
          </p>
        </div>
      </section>

      {/* 5 Reasons */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[800px] mx-auto space-y-10">
          {reasons.map(r => (
            <div key={r.num} className="bg-panel rounded-[20px] border border-edge p-6 md:p-8">
              <div className="flex items-start gap-4 mb-5">
                <span className="flex-shrink-0 text-[32px] font-bold text-ink/10">{r.num}</span>
                <h2 className="text-[20px] md:text-[24px] font-medium text-ink leading-tight">{r.title}</h2>
              </div>

              <div className="space-y-4 mb-5">
                <div>
                  <div className="text-[12px] text-ink-4 uppercase tracking-widest mb-2">Problem</div>
                  <p className="text-[15px] text-ink-2 leading-relaxed">{r.problem}</p>
                </div>
                <div>
                  <div className="text-[12px] text-ink-4 uppercase tracking-widest mb-2">Rešenje</div>
                  <p className="text-[15px] text-ink-2 leading-relaxed">{r.fix}</p>
                </div>
              </div>

              <div className="border-t border-edge pt-4">
                <p className="text-[13px] text-ink-3 italic">{r.stat}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick wins */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[26px] md:text-[34px] font-medium text-ink mb-4 text-center">6 brzih popravki koje možete uraditi danas</h2>
          <p className="text-[15px] text-ink-3 text-center mb-10 max-w-[600px] mx-auto">
            Pre nego što angažujete agenciju ili potrošite novac na oglase, probajte ove besplatne ili jeftine popravke.
          </p>
          <div className="space-y-3">
            {quickWins.map((w, i) => (
              <div key={w.action} className="bg-panel rounded-[14px] border border-edge p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-tint flex items-center justify-center text-[12px] font-medium text-ink-2">{i + 1}</div>
                <div className="flex-1">
                  <div className="text-[15px] font-medium text-ink">{w.action}</div>
                  <div className="text-[13px] text-ink-3">{w.tool}</div>
                </div>
                <div className="text-[13px] text-ink-4 md:text-right flex-shrink-0">{w.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to get help */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto bg-panel rounded-[20px] border border-edge p-6 md:p-8">
          <h2 className="text-[22px] md:text-[26px] font-medium text-ink mb-5">Kad je vreme da pozovete stručnjaka?</h2>
          <div className="text-[15px] text-ink-2 leading-relaxed space-y-4">
            <p>
              Ako ste probali gore navedene popravke i posle mesec dana rezultati su isti, verovatno vam treba neko ko će pogledati sajt sa strane. Kad ste previše blizu sopstvenom biznisu, teško je videti šta kupac zapravo doživljava.
            </p>
            <p>
              Znak da vam treba pomoć: imate saobraćaj (100+ posetilaca mesečno) ali konverzija je ispod 1%. To znači da ljudi dolaze ali nešto ih odbija. Profesionalni CRO audit obično otkrije 3-5 konkretnih problema koje možete popraviti.
            </p>
            <p>
              Drugi znak: nemate saobraćaj uopšte. Tada vam treba marketing strategija, ne prepravke na sajtu. Najbolji sajt na svetu ne prodaje ako ga niko ne vidi.
            </p>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[22px] font-medium text-ink mb-6 text-center">Povezane stranice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/cro" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">CRO optimizacija</div>
              <div className="text-[12px] text-ink-3">Više konverzija, isti budžet</div>
            </Link>
            <Link to="/cene-izrade-sajta" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Cene izrade sajta</div>
              <div className="text-[12px] text-ink-3">Koliko košta nov sajt</div>
            </Link>
            <Link to="/koliko-kosta-facebook-reklama" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Facebook reklame cena</div>
              <div className="text-[12px] text-ink-3">Koliko košta oglašavanje</div>
            </Link>
            <Link to="/blog/kako-povecati-online-prodaju" className="bg-panel rounded-[14px] border border-edge p-5 hover:border-indigo-500/30 transition-colors">
              <div className="text-[14px] font-medium text-ink mb-1">Kako povećati online prodaju</div>
              <div className="text-[12px] text-ink-3">10 konkretnih koraka za web shop</div>
            </Link>
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

      {/* CTA */}
      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-ink mb-4">Trebate pomoć sa web shopom?</h2>
          <p className="text-[15px] text-ink-2 mb-6">
            Javite nam se za besplatnu dijagnostiku vašeg web shopa. Pogledamo sajt, identifikujemo probleme i kažemo vam šta se isplati popraviti. Bez obaveza.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-full hover:bg-inv-bg-hover transition-colors"
          >
            Besplatna dijagnostika web shopa
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
