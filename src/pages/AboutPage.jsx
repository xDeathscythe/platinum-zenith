import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import BottomCTA from '../components/BottomCTA'

const heroHomeDark = `${import.meta.env.BASE_URL}hero-home-dark.webp`
const heroHomeLight = `${import.meta.env.BASE_URL}hero-home-light.webp`

export default function AboutPage() {
  const [openItem, setOpenItem] = useState(null)

  const howItWorks = [
    {
      num: '01',
      title: 'Analiza vašeg biznisa i tržišta',
      text: 'Pre bilo kakvog troška, prolazimo kroz vaše brojke, vašu konkurenciju i vaše kupce. Ako vidimo priliku, kažemo tačno gde je. Ako ne vidimo, kažemo i to. Nema smisla da trošite novac na kampanje pre nego što znamo gde su vaši kupci i šta ih pokreće da kupe.',
    },
    {
      num: '02',
      title: 'Strategija bazirana na podacima',
      text: 'Svaka kampanja kreće od konkretnog cilja: koliko upita, po kojoj ceni, u kom roku. Bez toga nema načina da znate da li marketing radi ili ne. Vlasnici firmi koji vole da rade sa brojkama, a ne sa obećanjima, ovde se osećaju kao kod kuće.',
    },
    {
      num: '03',
      title: 'Egzekucija i optimizacija',
      text: 'Kampanje se pokreću brzo, a optimizuju svakodnevno. Pratimo šta radi, gasimo šta ne radi i preusmeravamo budžet tamo gde donosi rezultat. Vi u svakom trenutku vidite iste podatke koje vidimo mi.',
    },
    {
      num: '04',
      title: 'Rast koji se meri na vašem računu',
      text: 'Jedini izveštaj koji nas zanima je onaj koji pokazuje koliko ste više zaradili nego prošlog meseca. Sve ostalo su pomoćne metrike. Korisne za optimizaciju, ali ne za evaluaciju.',
    },
  ]

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

        <div className="relative z-10 w-full max-w-[800px] mx-auto">
          <span className="hero-enter hero-enter-d1 inline-block text-[12px] uppercase tracking-[0.2em] text-black/60 mb-5">O nama</span>
          <h1 className="hero-enter hero-enter-d1 text-[32px] md:text-[62px] font-medium leading-[1.1] md:leading-[62px] tracking-[-1px] md:tracking-[-1.86px] text-black mb-4">
            Od internog tima do<br className="hidden md:inline" /> najjače agencije na Balkanu
          </h1>
          <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center mb-6 md:mb-8 max-w-[620px] mx-auto px-6 md:px-2">
            Platinum Zenith je nastao iz potrebe, ne iz ambicije da budemo agencija.
            Napravili smo tim koji je trebao da pomogne našim biznisima da dominiraju.
            Rezultati su bili toliko dobri da su drugi počeli da traže istu pomoć.
          </p>
          <div className="hero-enter hero-enter-d3 flex items-center justify-center gap-2 flex-wrap px-2">
            <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/80 transition-colors">
              Zakažite Konsultacije
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Origin ─── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[740px] mx-auto">
          <Reveal>
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-6">Kako je počelo</span>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={40}>
              <p className="text-[16px] md:text-[18px] text-ink leading-[28px] md:leading-[32px]">
                Platinum Zenith nije nastao kao agencija. Nastao je kao interni marketing tim firme Platinum Truffles DOO iz Zrenjanina. Aleksandar, CEO firme, trebao je tim čiji je jedini posao bio da donese kupce i poveća prodaju.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <p className="text-[16px] md:text-[18px] text-ink-2 leading-[28px] md:leading-[32px]">
                Tartufi su sezonski posao. Šest meseci u godini je sezona, šest meseci nije. Tokom vansezonskog perioda, tim koji je Aleksandar okupio imao je kapacitet koji nije bio iskorišćen. Kad su se pojavili prvi B2B klijenti koji su tražili pomoć sa marketingom, bio je prirodan korak da im se pomogne.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-[16px] md:text-[18px] text-ink-2 leading-[28px] md:leading-[32px]">
                Ti prvi klijenti su dobili isti tretman koji je dobila matična firma. Isti nivo posvećenosti, isti pristup podacima, isti fokus na konkretan rezultat. I rezultati su to pokazali. Grubin Showroom je sa 20 miliona dinara godišnjeg prometa došao na 64 miliona. Ordinacija Medifizio je sa 400 hiljada mesečno porasla na 2,4 miliona.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="text-[16px] md:text-[18px] text-ink leading-[28px] md:leading-[32px]">
                Posle ekspanzije i rigorozne regrutacije novih članova, Platinum Zenith je zvanično počeo da operiše kao poseban entitet. Ali kultura je ostala ista: mali broj klijenata, potpuna posvećenost svakom projektu, i jedno prosto pravilo. Naš posao je da firme sa kojima sarađujemo rastu. I da mi rastemo sa njima.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Results ─── */}
      <section className="py-12 px-4 md:px-8 bg-panel border-y border-edge-2">
        <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '64,4M', label: 'RSD prometa', sub: 'Grubin 2025' },
            { value: '6x', label: 'Rast prihoda', sub: 'Medifizio za 8 meseci' },
            { value: '€0,96', label: 'Po prijavi', sub: 'Focus Fizikal' },
            { value: '97%', label: 'Klijenata ostaje', sub: 'nakon prvog ugovora' },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 50} className="text-center">
              <div className="text-[36px] md:text-[44px] font-bold text-ink leading-none">{s.value}</div>
              <div className="text-[13px] text-ink font-medium mt-2">{s.label}</div>
              <div className="text-[11px] text-ink-2 mt-0.5">{s.sub}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── Revenue Share ─── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[740px] mx-auto">
          <Reveal className="mb-10">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-3">Zašto revenue share</span>
            <h2 className="text-[30px] md:text-[42px] font-medium text-ink tracking-[-1px] leading-[1.15]">
              Najpošteniji model saradnje<br className="hidden md:inline" /> koji poznajemo
            </h2>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={40}>
              <p className="text-[16px] text-ink-2 leading-[28px]">
                Većina agencija naplaćuje fiksni mesečni honorar. To znači da agencija zarađuje isto bez obzira da li ste vi zaradili ili ne. Njen uspeh i vaš uspeh nisu povezani. Mi verujemo da to nije fer.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-[16px] text-ink leading-[28px]">
                Revenue share model funkcioniše drugačije. Naša zarada je direktno vezana za vaš rast. Kad vaša firma zarađuje više, mi zarađujemo više. Kad kampanja ne donosi rezultat, mi prvi to osetimo. To znači da svaka odluka koju donesemo za vaš biznis ima posledice i za naš.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[16px] text-ink-2 leading-[28px]">
                Za vas to znači jednu stvar: nikad ne morate da se pitate da li agencija zapravo radi u vašem interesu. Ako vam mi preporučimo određenu kampanju ili promenu na sajtu, možete biti sigurni da je razlog prost. Verujemo da će to povećati vaš prihod. A time i naš.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="bg-tint border border-edge-2 rounded-[11px] p-6 md:p-8 mt-4">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-[13px] text-ink-2 uppercase tracking-wider mb-2">Klasična agencija</div>
                    <div className="text-[17px] text-ink font-medium">Fiksna mesečna naknada</div>
                    <p className="text-[13px] text-ink-2 mt-1">Zarađuje isto bez obzira na vaš rezultat</p>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <span className="text-[24px] text-ink-2">vs</span>
                  </div>
                  <div>
                    <div className="text-[13px] text-ink-2 uppercase tracking-wider mb-2">Platinum Zenith</div>
                    <div className="text-[17px] text-ink font-medium">Revenue share</div>
                    <p className="text-[13px] text-ink-2 mt-1">Zarađujemo samo kad vi zarađujete</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── What you get ─── */}
      <section className="py-20 px-4 md:px-8 bg-panel border-y border-edge-2">
        <div className="max-w-[900px] mx-auto">
          <Reveal className="mb-12">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-3">Šta dobijate</span>
            <h2 className="text-[30px] md:text-[42px] font-medium text-ink tracking-[-1px] leading-[1.15]">
              Kako izgleda saradnja<br className="hidden md:inline" /> od prvog dana
            </h2>
          </Reveal>

          <div className="space-y-3">
            {howItWorks.map((item, i) => {
              const isOpen = openItem === i
              return (
                <Reveal key={item.num} delay={i * 40}>
                  <motion.div
                    className="border border-edge-2 rounded-[11px] overflow-hidden cursor-pointer bg-tint hover:bg-panel transition-colors"
                    onClick={() => setOpenItem(isOpen ? null : i)}
                  >
                    <div className="flex items-center gap-4 p-5">
                      <span className="text-[13px] text-ink-2 font-mono font-medium w-6 flex-shrink-0">{item.num}</span>
                      <h3 className="text-[16px] md:text-[18px] font-medium text-ink flex-1">{item.title}</h3>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-[20px] text-ink-2 flex-shrink-0"
                      >
                        +
                      </motion.span>
                    </div>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 pl-[52px] text-[14px] text-ink-2 leading-[25px]">
                        {item.text}
                      </p>
                    </motion.div>
                  </motion.div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── For You ─── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[740px] mx-auto">
          <Reveal className="mb-10">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-3">Za koga je ovo</span>
            <h2 className="text-[30px] md:text-[42px] font-medium text-ink tracking-[-1px] leading-[1.15]">
              Ako vodite firmu i znate<br className="hidden md:inline" /> koliko vredi svaki dinar
            </h2>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={40}>
              <p className="text-[16px] text-ink-2 leading-[28px]">
                Vi ste tip vlasnika koji gleda P&L pre nego što pogleda Instagram. Koji zna da marketing nije trošak, nego investicija. I koji očekuje da se ta investicija vrati sa kamatom. Takvi vlasnici su naši najbolji klijenti.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-[16px] text-ink-2 leading-[28px]">
                Radimo sa firmama koje imaju proizvod ili uslugu koja radi, ali im treba sistem koji će dovesti prave kupce. Lokalni biznisi, e-commerce, medicinske prakse, B2B usluge. Tržište, veličina firme i budžet su manje bitni od jednog pitanja: da li ste spremni da gledate brojke zajedno i donosite odluke na osnovu podataka?
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[16px] text-ink leading-[28px]">
                Ako jeste, onda imamo o čemu da razgovaramo. Poziv traje 15 minuta, besplatan je, i na kraju ćete znati tačno šta možemo da uradimo za vaš biznis. Bez obaveza.
              </p>
            </Reveal>
          </div>

          <Reveal delay={160} className="mt-8">
            <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-inv-bg text-inv-fg text-[14px] font-medium h-10 px-5 rounded-[40px] cursor-pointer hover:bg-inv-bg-hover transition-colors">
              Zakažite besplatan razgovor
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </Reveal>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
