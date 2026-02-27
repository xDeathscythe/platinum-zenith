import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import BottomCTA from '../components/BottomCTA'

const heroHomeDark = `${import.meta.env.BASE_URL}hero-home-dark.webp`
const heroHomeLight = `${import.meta.env.BASE_URL}hero-home-light.webp`

/* ─── Team ─── */
const team = [
  {
    name: 'Aleksandar Nenadović',
    role: 'Direktor & Osnivač',
    desc: 'Osnivač Platinum Truffles i Platinum Zenith. Vizionar koji je sklopio tim profesionalaca sa jednim ciljem: dominacija na tržištu.',
    icon: '👑',
  },
  {
    name: 'Marketing Tim',
    role: 'Direct Response & Mediji',
    desc: 'Specijalisti za plaćene oglase, Google Ads, Meta kampanje i direct response marketing koji donosi merljive rezultate.',
    icon: '📈',
  },
  {
    name: 'Dev Tim',
    role: 'Web Development & AI',
    desc: 'Full-stack developeri i AI inženjeri koji prave sajtove koji konvertuju i sisteme koji automatizuju.',
    icon: '⚡',
  },
  {
    name: 'Kreativni Tim',
    role: 'Dizajn & Sadržaj',
    desc: 'Dizajneri i copywriteri koji pretvaraju podatke u vizualni identitet i poruke koje prodaju.',
    icon: '🎨',
  },
]

/* ─── Milestones ─── */
const milestones = [
  {
    year: '2023',
    title: 'Početak — interni tim',
    desc: 'Aleksandar Nenadović formira interni marketing tim za Platinum Truffles. Cilj: napraviti sistem koji će tartufe iz Srbije staviti na mapu Evrope.',
  },
  {
    year: '2024',
    title: 'Rezultati iznad očekivanja',
    desc: 'Tim pokazuje veštine daleko iznad onoga što smo očekivali. Platinum Tartufi dobijaju sistematičan priliv kupaca, konverzije rastu 3x.',
  },
  {
    year: '2024',
    title: 'Prve B2B saradnje',
    desc: 'Igrom slučaja, počinjemo da pomažemo drugim firmama. Grubin Showroom, medicinske prakse, saloni. Svaki klijent dobija isti tretman kao naši sopstveni biznisi.',
  },
  {
    year: '2025',
    title: 'Platinum Zenith — agencija',
    desc: 'Od internog tima do jedne od najjačih agencija na Balkanu. Web dizajn, CRO, consulting i AI integracije ulaze u ponudu.',
  },
  {
    year: '2026',
    title: 'AI-powered marketing',
    desc: 'Implementacija custom AI alata za automatizaciju marketinga, chatbotove i personalizovanu komunikaciju. Niwa AI postaje deo našeg arsenala.',
  },
]

/* ─── Key stats ─── */
const stats = [
  { value: '6x', label: 'Rast prihoda klijenata', sub: 'u prvih 8 meseci' },
  { value: '50+', label: 'Zadovoljnih klijenata', sub: 'širom Balkana' },
  { value: '16.2x', label: 'Prosečan ROAS', sub: 'na oglasima' },
  { value: '97%', label: 'Stopa zadržavanja', sub: 'klijenata' },
]

/* ─── Principles ─── */
const principles = [
  {
    num: '01',
    title: 'Prvo naš biznis, pa vaš',
    desc: 'Svaku strategiju prvo testiramo na sopstvenim firmama. Platinum Tartufi, Niwa AI, naši brendovi. Tek kad dokažemo da radi, primenjujemo na klijente. Vi nikad niste eksperiment.',
  },
  {
    num: '02',
    title: 'Bez izgovora, samo brojevi',
    desc: 'Ne prodajemo "brand awareness" i "engagement". Prodajemo prihod, konverzije i ROI. Svaki evro koji uložite mora da se vrati sa kamatom. Ako kampanja ne radi, menjamo je, ne pravdamo.',
  },
  {
    num: '03',
    title: 'Partnerstvo, ne usluga',
    desc: 'Ne radimo "za" vas. Radimo "sa" vama. Razumemo vaš biznis iznutra, poznajemo vaše kupce i vaše brojeve. Tretiramo vaš budžet kao da je naš.',
  },
  {
    num: '04',
    title: 'Brzina je naše oružje',
    desc: 'Dok druge agencije prave prezentacije, mi pokrećemo kampanje. Od ideje do realizacije prolazi manje vremena nego što vam treba da potpišete ugovor kod konkurencije.',
  },
  {
    num: '05',
    title: 'AI nije buzzword kod nas',
    desc: 'Razvijamo sopstvene AI alate. Niwa AI chatbot, automatizovani sistemi za analizu podataka, personalizovana komunikacija. Tehnologija u službi rezultata.',
  },
  {
    num: '06',
    title: 'Transparentnost do bola',
    desc: 'Pristup svim podacima, nedeljni izveštaji, direktna komunikacija. Znate tačno gde je svaki dinar otišao i šta je doneo nazad. Bez skrivenih troškova, bez sitnog slova.',
  },
]

export default function AboutPage() {
  const [expandedPrinciple, setExpandedPrinciple] = useState(null)

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative flex flex-col items-center text-center pt-[160px] md:pt-[220px] pb-[20px] px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ backgroundImage: `url(${heroHomeDark})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#000000' }} />
          <div className="absolute inset-0 only-light" style={{ backgroundImage: `url(${heroHomeLight})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#ffffff' }} />
          <div className="absolute inset-x-0 z-[1]" style={{ top: '55%', height: '45%', backdropFilter: 'blur(68px)', WebkitBackdropFilter: 'blur(68px)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)' }} />
          <div className="absolute inset-0 z-[2] only-dark" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.30) 58%, rgba(0,0,0,0.70) 74%, #000000 92%)' }} />
          <div className="absolute inset-0 z-[2] only-light" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,0.35) 58%, rgba(255,255,255,0.75) 74%, #ffffff 92%)' }} />
        </div>

        <div className="relative z-10 w-full max-w-[800px] mx-auto">
          <Reveal>
            <span className="inline-block text-[12px] uppercase tracking-[0.2em] text-ink-2 mb-5">O nama</span>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="text-[32px] md:text-[58px] font-medium leading-[1.1] tracking-[-1.5px] text-ink mb-5">
              Od internog tima do<br className="hidden md:inline" /> najjače agencije na Balkanu
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[15px] md:text-[17px] text-ink-2 leading-[26px] md:leading-[30px] max-w-[620px] mx-auto mb-8 px-4">
              Platinum Zenith je nastao iz potrebe, ne iz ambicije da budemo agencija.
              Napravili smo tim koji je trebao da pomogne našim biznisima da dominiraju.
              Rezultati su bili toliko dobri da su drugi počeli da traže istu pomoć.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-inv-bg text-inv-fg text-[14px] font-medium h-10 px-5 rounded-[40px] cursor-pointer hover:bg-inv-bg-hover transition-colors">
              Zakažite Bersplatne Konsultacije
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─── Origin Story ─── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-3">Naša priča</span>
          </Reveal>
          <div className="grid md:grid-cols-[1fr_1px_1fr] gap-8 md:gap-12 mt-6">
            <Reveal delay={40}>
              <h2 className="text-[26px] md:text-[34px] font-medium text-ink leading-[1.2] tracking-[-0.8px] mb-5">
                "Trebao nam je tim koji će pomoći našim biznisima da pobede. Dobili smo vojsku."
              </h2>
              <p className="text-[14px] text-ink-2 leading-[25px]">
                <span className="text-ink font-medium">Aleksandar Nenadović</span>, direktor Platinum Truffles, imao je jasan cilj: okupiti profesionalce koji će pomoći njegovim personalnim biznisima da dominiraju na tržištu. Ne agenciju. Ne outsourcing. Pravi tim, pod jednim krovom, sa jednim fokusom.
              </p>
            </Reveal>

            <div className="hidden md:block w-px bg-edge-2" />

            <Reveal delay={100}>
              <p className="text-[14px] text-ink-2 leading-[25px] mb-4">
                Platinum Tartufi su bili prvi projekat. Marketing, web, pozicioniranje. Tim je radio kao da mu život zavisi od rezultata. I rezultati su došli brzo. Brže i jače nego što je iko očekivao.
              </p>
              <p className="text-[14px] text-ink-2 leading-[25px] mb-4">
                Ono što je trebalo da bude interni tim za jednu firmu, pokazalo je veštine i moć daleko iznad onoga što smo se nadali da vidimo.
              </p>
              <p className="text-[14px] text-ink-2 leading-[25px]">
                Igrom slučaja, počeli smo da pomažemo i drugim B2B klijentima. Prvo jednom, pa drugom. Svaki je dobio isti nivo posvećenosti kao naši sopstveni biznisi. I iz tog organskog rasta nastao je Platinum Zenith: agencija koja tretira svaki klijentski biznis kao da je njen.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="py-12 px-4 md:px-8 bg-panel border-y border-edge-2">
        <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 50} className="text-center">
              <div className="text-[36px] md:text-[44px] font-bold text-ink leading-none">{s.value}</div>
              <div className="text-[13px] text-ink font-medium mt-2">{s.label}</div>
              <div className="text-[11px] text-ink-2 mt-0.5">{s.sub}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── How We Work — Principles ─── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto">
          <Reveal className="mb-12">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-3">Kako radimo</span>
            <h2 className="text-[30px] md:text-[42px] font-medium text-ink tracking-[-1px] leading-[1.15]">
              Šest principa koji nas razdvajaju<br className="hidden md:inline" /> od svake druge agencije
            </h2>
          </Reveal>

          <div className="space-y-3">
            {principles.map((p, i) => {
              const isOpen = expandedPrinciple === i
              return (
                <Reveal key={p.num} delay={i * 40}>
                  <motion.div
                    className="border border-edge-2 rounded-[11px] overflow-hidden cursor-pointer bg-tint hover:bg-panel transition-colors"
                    onClick={() => setExpandedPrinciple(isOpen ? null : i)}
                  >
                    <div className="flex items-center gap-4 p-5">
                      <span className="text-[13px] text-ink-2 font-mono font-medium w-6 flex-shrink-0">{p.num}</span>
                      <h3 className="text-[16px] md:text-[18px] font-medium text-ink flex-1">{p.title}</h3>
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
                        {p.desc}
                      </p>
                    </motion.div>
                  </motion.div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="py-20 px-4 md:px-8 bg-panel border-y border-edge-2">
        <div className="max-w-[1000px] mx-auto">
          <Reveal className="text-center mb-12">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-3">Tim</span>
            <h2 className="text-[30px] md:text-[42px] font-medium text-ink tracking-[-1px]">
              Ljudi iza rezultata
            </h2>
            <p className="text-[15px] text-ink-2 mt-3 max-w-[500px] mx-auto leading-[26px]">
              Svaki član našeg tima je prošao vatru na sopstvenim projektima pre nego što je počeo da radi sa klijentima.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 60}>
                <div className="bg-tint rounded-[11px] p-6 border border-edge-2 text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-panel border border-edge-2 flex items-center justify-center mx-auto mb-4 text-[24px]">
                    {m.icon}
                  </div>
                  <h3 className="text-[16px] font-medium text-ink mb-0.5">{m.name}</h3>
                  <div className="text-[12px] text-ink-2 uppercase tracking-wider mb-3">{m.role}</div>
                  <p className="text-[13px] text-ink-2 leading-[22px]">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[700px] mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-3">Naš put</span>
            <h2 className="text-[30px] md:text-[42px] font-medium tracking-[-1px] text-ink">
              Od jednog biznisa do<br className="hidden md:inline" /> pune agencije
            </h2>
          </Reveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-edge-2" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <Reveal key={`${m.year}-${m.title}`} delay={i * 60} className="flex gap-6 items-start">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-panel border border-edge-2 flex items-center justify-center">
                      <span className="text-[11px] text-ink-2 font-bold">{m.year}</span>
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-[17px] font-medium text-ink mb-1.5">{m.title}</h3>
                    <p className="text-[14px] text-ink-2 leading-[24px]">{m.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Difference: Agency vs Platinum Zenith ─── */}
      <section className="py-20 px-4 md:px-8 bg-panel border-y border-edge-2">
        <div className="max-w-[900px] mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-[30px] md:text-[42px] font-medium text-ink tracking-[-1px]">
              Obična agencija vs. Platinum Zenith
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Other agencies */}
            <Reveal delay={40}>
              <div className="rounded-[11px] border border-edge-2 p-6 bg-tint h-full">
                <div className="text-[13px] uppercase tracking-wider text-ink-2 font-medium mb-5">Tipična agencija</div>
                <ul className="space-y-3">
                  {[
                    'Radi na 50+ klijenata istovremeno',
                    'Junior account manager vodi vaš nalog',
                    'Mesečni izveštaji sa vanity metrikama',
                    'Copy-paste strategije za sve klijente',
                    'Fokus na "brand awareness"',
                    'Ugovor na 12 meseci, bez garancija',
                  ].map(t => (
                    <li key={t} className="flex items-start gap-2.5 text-[14px] text-ink-2 leading-[22px]">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Platinum Zenith */}
            <Reveal delay={100}>
              <div className="rounded-[11px] border border-edge-2 p-6 bg-tint h-full relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'radial-gradient(ellipse at center, rgba(100,140,255,1) 0%, transparent 70%)' }} />
                <div className="relative">
                  <div className="text-[13px] uppercase tracking-wider text-ink font-medium mb-5">Platinum Zenith</div>
                  <ul className="space-y-3">
                    {[
                      'Mali broj klijenata, maksimalna pažnja',
                      'Senior tim radi direktno na vašem projektu',
                      'Nedeljni izveštaji sa pravim brojevima',
                      'Custom strategija bazirana na vašim podacima',
                      'Fokus na prihod i ROI',
                      'Rezultati govore, ne ugovori',
                    ].map(t => (
                      <li key={t} className="flex items-start gap-2.5 text-[14px] text-ink leading-[22px]">
                        <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
