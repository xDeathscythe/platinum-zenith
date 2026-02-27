import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import BottomCTA from '../components/BottomCTA'

const heroHomeDark = `${import.meta.env.BASE_URL}hero-home-dark.webp`
const heroHomeLight = `${import.meta.env.BASE_URL}hero-home-light.webp`

/* ─── Timeline ─── */
const milestones = [
  {
    year: '2023',
    title: 'Sopstvena firma, sopstveni problem',
    desc: 'Aleksandar je vodio Platinum Truffles i trazio nekoga ko zna marketing. Probao agencije. Rezultati su bili osrednji, a komunikacija jos gora. Odlucio je da napravi tim sam.',
  },
  {
    year: '2024',
    title: 'Tim koji je promenio sve',
    desc: 'Ljudi koje je okupio su pokazali nesto neocekivano. Nisu samo "odradili posao." Razumeli su biznis, razumeli su kupce. Rezultati su dosli brzo. Platinum Tartufi su poceli da rastu ozbiljno.',
  },
  {
    year: '2024',
    title: 'Poziv koji nismo planirali',
    desc: 'Prijatelj je pitao da li mozemo da pomognemo i njegovoj firmi. Rekli smo da, ne znajuci sta ce to pokrenuti. Pa jos jedan. I jos jedan. Svaki put smo radili kao da je nas biznis u pitanju.',
  },
  {
    year: '2025',
    title: 'Platinum Zenith postaje agencija',
    desc: 'Vise nismo mogli da ignorisemo cinjenicu da je ovo preraslo interni tim. Formalizovali smo agenciju, ali zadrzali istu kulturu: mali broj klijenata, maksimalna posvecena paznja, merljivi rezultati.',
  },
  {
    year: '2026',
    title: 'AI kao alat, ne kao buzzword',
    desc: 'Razvili smo sopstvene AI alate za automatizaciju komunikacije i analitiku. Ne zato sto je moderno, nego zato sto su nam klijenti rekli da im to treba.',
  },
]

export default function AboutPage() {
  const [openBelief, setOpenBelief] = useState(null)

  const beliefs = [
    {
      num: '01',
      title: 'Prvo testiramo na sebi',
      text: 'Svaku strategiju, svaki pristup, svaki alat prvo koristimo na sopstvenim firmama. Platinum Tartufi su nas laboratorija. Ako nesto ne radi za nas biznis, necemo vam to preporuciti. Nikad niste eksperiment.',
    },
    {
      num: '02',
      title: 'Merimo samo ono sto mozete odneti u banku',
      text: 'Lajkovi, impresije, reach. To su brojevi koji dobro izgledaju na prezentaciji. Mi pratimo koliko ste zaradili, koliko vas kosta jedan klijent i koliko se taj klijent vratio. Sve ostalo je dekoracija.',
    },
    {
      num: '03',
      title: 'Vas biznis je nas biznis',
      text: 'Ne radimo za vas. Radimo sa vama. Poznajemo vase kupce, razumemo vase brojke, osecamo kad nesto ne stima. Tretiramo vas budzet kao da je nas. Zato sto u nekom smislu jeste.',
    },
    {
      num: '04',
      title: 'Brzina je postovanje',
      text: 'Kad neko trazi pomoc, svaki dan cekanja je dan izgubljenog prihoda. Dok se kod drugih agencija potpisuju ugovori i prave prezentacije, mi vec pokrecemo kampanje. Nije nase da vam trosimo vreme.',
    },
    {
      num: '05',
      title: 'Kazemo kad ne znamo',
      text: 'Nismo strucnjaci za sve. Kad nesto nije nasa oblast, reci cemo vam otvoreno umesto da improvizujemo na vas racun. Bolje da budete razocaran pet minuta nego da gubite novac sest meseci.',
    },
    {
      num: '06',
      title: 'Vidite sve sto vidimo mi',
      text: 'Pristup svim podacima, nedeljni izvestaji sa pravim brojevima, direktan kontakt sa timom koji radi na vasem projektu. Nema skrivenih troskova i nema sitnog slova. Ako nesto ne radi, znacete pre nas.',
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
            Počelo je sa jednom firmom<br className="hidden md:inline" /> i jednim problemom
          </h1>
          <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center mb-6 md:mb-8 max-w-[620px] mx-auto px-6 md:px-2">
            Nismo osnovali agenciju zato što smo hteli da budemo agencija.
            Osnovali smo je zato što nismo mogli da nađemo jednu koja radi posao onako kako mi radimo svoj.
          </p>
          <div className="hero-enter hero-enter-d3 flex items-center justify-center gap-2 flex-wrap px-2">
            <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/80 transition-colors">
              Zakažite Konsultacije
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Story ─── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[740px] mx-auto">
          <Reveal>
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-6">Kako je počelo</span>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={40}>
              <p className="text-[16px] md:text-[18px] text-ink leading-[28px] md:leading-[32px]">
                Aleksandar Nenadović je vodio firmu za tartufe. Ne startap, ne tech kompaniju. Firmu koja pakuje tartufe u Srbiji i prodaje ih po Evropi.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <p className="text-[16px] md:text-[18px] text-ink-2 leading-[28px] md:leading-[32px]">
                Marketing mu je bio potreban. Probao je sa agencijama. Jedna je slala mesečne izveštaje pune grafova koje niko nije razumeo. Druga je obećala "brand awareness" ali nikad nije objasnila koliko je to awareness zapravo doneo kupaca. Treća je kopirala istu strategiju koju koristi za zubarsku ordinaciju i za prodavnicu obuće.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-[16px] md:text-[18px] text-ink-2 leading-[28px] md:leading-[32px]">
                Znate taj osećaj kad platite nekoga da reši problem, a posle tri meseca imate isti problem plus fakturu? To je bio taj.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="text-[16px] md:text-[18px] text-ink leading-[28px] md:leading-[32px]">
                Umesto da nastavi da traži, odlučio je da napravi tim sam. Okupio je ljude koji su razumeli da marketing nije "kreiranje sadržaja." Marketing je kad neko klikne na vaš oglas, dođe na vaš sajt i kupi vaš proizvod. Sve ostalo je priprema.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-[16px] md:text-[18px] text-ink-2 leading-[28px] md:leading-[32px]">
                Rezultati su došli brže nego što je iko očekivao. Platinum Tartufi su počeli da rastu. Ali ono što je bilo zanimljivije je da su prijatelji i partneri počeli da pitaju: "Ko vam radi marketing? Mogu li i za nas?"
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p className="text-[16px] md:text-[18px] text-ink leading-[28px] md:leading-[32px]">
                Nismo planirali da postanemo agencija. Ali kad treći čovek pita istu stvar, počneš da razmišljaš da možda ima nečeg u tome. Tako je nastao Platinum Zenith. Ne iz ambicije da budemo najveći ili najjači. Iz prostog razloga: znamo kako je kad neko tvoj novac ne tretira kao svoj. I odlučili smo da to radimo drugačije.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── What clients got ─── */}
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

      {/* ─── What We Believe ─── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto">
          <Reveal className="mb-12">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-3">U šta verujemo</span>
            <h2 className="text-[30px] md:text-[42px] font-medium text-ink tracking-[-1px] leading-[1.15]">
              Šest stvari koje ne želimo<br className="hidden md:inline" /> da naučite na teži način
            </h2>
          </Reveal>

          <div className="space-y-3">
            {beliefs.map((b, i) => {
              const isOpen = openBelief === i
              return (
                <Reveal key={b.num} delay={i * 40}>
                  <motion.div
                    className="border border-edge-2 rounded-[11px] overflow-hidden cursor-pointer bg-tint hover:bg-panel transition-colors"
                    onClick={() => setOpenBelief(isOpen ? null : i)}
                  >
                    <div className="flex items-center gap-4 p-5">
                      <span className="text-[13px] text-ink-2 font-mono font-medium w-6 flex-shrink-0">{b.num}</span>
                      <h3 className="text-[16px] md:text-[18px] font-medium text-ink flex-1">{b.title}</h3>
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
                        {b.text}
                      </p>
                    </motion.div>
                  </motion.div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Quote ─── */}
      <section className="py-16 px-4 md:px-8 bg-panel border-y border-edge-2">
        <div className="max-w-[700px] mx-auto text-center">
          <Reveal>
            <blockquote className="text-[22px] md:text-[28px] font-medium text-ink leading-[1.35] tracking-[-0.5px] mb-6">
              "Možete imati sve u životu što želite, ako dovoljno pomognete drugim ljudima da dobiju ono što oni žele."
            </blockquote>
            <p className="text-[14px] text-ink-2">Zig Ziglar. To je ceo naš poslovni model u jednoj rečenici.</p>
          </Reveal>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[700px] mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-3">Put do ovde</span>
            <h2 className="text-[30px] md:text-[42px] font-medium tracking-[-1px] text-ink">
              Od tartufa do agencije
            </h2>
          </Reveal>

          <div className="relative">
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

      {/* ─── Who is this for ─── */}
      <section className="py-20 px-4 md:px-8 bg-panel border-y border-edge-2">
        <div className="max-w-[740px] mx-auto">
          <Reveal className="mb-10">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2 block mb-3">Za koga je ovo</span>
            <h2 className="text-[30px] md:text-[42px] font-medium text-ink tracking-[-1px] leading-[1.15]">
              Nismo za svakoga. I to je u redu.
            </h2>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={40}>
              <p className="text-[16px] text-ink-2 leading-[28px]">
                Radimo sa malim brojem klijenata istovremeno. Nismo fabrika. Kad uzmemo vaš projekat, senior tim radi direktno na njemu. Ne junior koji je završio kurs prošle nedelje.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-[16px] text-ink-2 leading-[28px]">
                Najbolje radimo sa vlasnicima firmi koji znaju šta žele, ali im treba neko ko zna kako da to postigne. Ljudi koji ne mere uspeh brojem pratilaca, nego brojem kupaca. Ljudi kojima je lakše da pogledaju izveštaj sa konkretnim ciframa nego da slušaju priču o "organskom rastu."
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[16px] text-ink leading-[28px]">
                Ako vam treba agencija koja će da objavljuje tri puta dnevno na Instagramu i šalje vam mesečni PDF, postoji mnogo dobrih opcija na tržištu. Ako vam treba tim koji će da sedne sa vama, pogleda vaše brojke i kaže vam tačno šta treba da uradite da zaradite više, onda bismo trebali da razgovaramo.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
