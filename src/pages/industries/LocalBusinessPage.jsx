import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import BottomCTA from '../../components/BottomCTA'

const heroHomeDark = `{import.meta.env.BASE_URL}hero-home-dark.webp`
const heroHomeLight = `{import.meta.env.BASE_URL}hero-home-light.webp`

const stats = [
  { value: '78%', label: 'Google pretraga pre kupovine' },
  { value: '3.2x', label: 'Više poziva sa Google Ads' },
  { value: '€8', label: 'Prosečan trošak po poziv' },
  { value: '46%', label: 'Rast rezervacija' },
]

const industries = [
  { name: 'Restorani i Kafići', focus: 'Rezervacije, delivery, promocije' },
  { name: 'Saloni i Spa', focus: 'Online booking, loyalty, paketi' },
  { name: 'Stomatološke Ordinacije', focus: 'Zakazivanje, edukacija, poverenje' },
  { name: 'Advokati i Pravne Firme', focus: 'Lead generation, reputacija, SEO' },
  { name: 'Auto Servis i Mehaničari', focus: 'Pozivi, recenzije, urgentnost' },
  { name: 'Fitnes Centri i Teretane', focus: 'Članstva, trial ponude, challenges' },
  { name: 'Majstori i Zanatstvo', focus: 'Lokalni SEO, direktan kontakt' },
  { name: 'Nekretnine i Agencije', focus: 'Lead gen, virtual tours, trust' },
]

const services = [
  {
    title: 'Google My Business Optimizacija',
    desc: 'Pojavite se u "blizu mene" pretragama i Google Maps rezultatima.',
    items: ['GMB setup i verifikacija', 'Redovno ažuriranje profila', 'Foto i video content', 'Odgovaranje na recenzije']
  },
  {
    title: 'Lokalni SEO',
    desc: 'Rankirajte za ključne reči koje donose kupce iz vašeg grada.',
    items: ['Keyword research (geo + industrija)', 'On-page optimizacija', 'Local citations i direktorijumi', 'Schema markup za local business']
  },
  {
    title: 'Google i Facebook Ads',
    desc: 'Ciljajte ljude u radijusu od 5-20km koji traže vaše usluge.',
    items: ['Location targeting', 'Call ads i click-to-call', 'Lead forms za brze upite', 'Remarketing za ponovne posete']
  },
  {
    title: 'Sajt i Landing Pages',
    desc: 'Mobilni sajt koji funkcioniše kao 24/7 prodavac i omogućava brzo zakazivanje.',
    items: ['Responzivan dizajn', 'Click-to-call buttons', 'Google Maps integracija', 'Kontakt forme i chat']
  },
]

const tactics = [
  { tactic: 'Google recenzije', why: 'Broj i kvalitet utiču na rangiranje i poverenje', goal: '4.5+ zvezda, 30+ recenzija' },
  { tactic: 'Click-to-call oglasi', why: 'Ljudi zovu odmah, ne čekaju mejl', goal: 'Poziv u roku od 2 sata' },
  { tactic: 'Lokalni sadržaj', why: 'Google prepoznaje relevantnost za geografsko područje', goal: 'Blog o lokalnim događajima' },
  { tactic: 'Seasonal ponude', why: 'Lokalni biznisi imaju predvidive sezone', goal: 'Kampanje 2 nedelje pre pika' },
]

export default function LocalBusinessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center text-center pt-[160px] md:pt-[220px] pb-[40px] px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark" style={{ backgroundImage: `url(${heroHomeDark})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#000000' }} />
          <div className="absolute inset-0 only-light" style={{ backgroundImage: `url(${heroHomeLight})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#ffffff' }} />
          <div className="absolute inset-x-0 z-[1]" style={{ top: '55%', height: '45%', backdropFilter: 'blur(68px)', WebkitBackdropFilter: 'blur(68px)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)' }} />
          <div className="absolute inset-0 z-[2] only-dark" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.30) 58%, rgba(0,0,0,0.70) 74%, #000000 92%)' }} />
          <div className="absolute inset-0 z-[2] only-light" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,0.35) 58%, rgba(255,255,255,0.75) 74%, #ffffff 92%)' }} />
        </div>
        <div className="relative z-10 w-full max-w-[800px] mx-auto">
          <h1 className="hero-enter hero-enter-d1 text-[32px] md:text-[62px] font-medium leading-[1.1] md:leading-[62px] tracking-[-1px] md:tracking-[-1.86px] text-black mb-4">Lokalni biznis, globalna vidljivost</h1>
          <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center max-w-[620px] mx-auto px-6 md:px-2">Dovodimo vam klijente iz va�eg grada koji su spremni da plate.</p>
        </div>
      </section>
      <section className="pb-12 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[900px] mx-auto text-center hero-enter hero-enter-d1">
            <span className="text-[12px] text-ink-4 uppercase tracking-widest mb-3 block font-medium">Lokalni Biznisi</span>
            <h1 className="text-[36px] md:text-[52px] font-medium leading-[1.08] tracking-[-1.5px] text-ink mb-5">
              Budite prvi izbor
              <span className="block text-ink-3">u vašem gradu</span>
            </h1>
            <p className="text-[16px] text-ink-4 leading-[26px] mb-8 max-w-[600px] mx-auto">
              Većina lokalnih biznisa gubi klijente jer ih ne nalaze na Google-u ili imaju loše recenzije. Mi to popravljamo i punimo vam kalendar.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-inv-bg text-inv-fg text-[14px] font-medium h-11 px-6 rounded-[40px] hover:bg-inv-bg-hover transition-colors">
                Zakažite Besplatan Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-panel rounded-[16px] p-6 border border-edge-2 text-center">
                  <div className="text-[32px] md:text-[42px] font-medium text-ink mb-1">{s.value}</div>
                  <div className="text-[13px] text-ink-4">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="mb-14">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-4">Sa kim radimo</h2>
            <p className="text-[16px] text-ink-4 max-w-[500px]">Lokalni biznisi kojima pomažemo da rastu kroz digitalni marketing.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 50}
                className="bg-panel rounded-[16px] p-5 border border-edge-2 hover:border-white/[0.10] transition-all">
                <div className="text-[14px] font-medium text-ink mb-2">{ind.name}</div>
                <div className="text-[12px] text-ink-4 leading-relaxed">{ind.focus}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 md:px-8 bg-tint">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="mb-14 text-center">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-4">Kako dovodimo klijente</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}
                className="bg-panel rounded-[16px] p-7 border border-edge-2">
                <h3 className="text-[20px] font-medium text-ink mb-2">{s.title}</h3>
                <p className="text-[13px] text-ink-4 mb-5 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-ink-4">
                      <div className="w-1 h-1 rounded-full bg-tint mt-2 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tactics */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="mb-14">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-4">Taktike koje rade</h2>
            <p className="text-[16px] text-ink-4 max-w-[500px]">Lokalni marketing je specifičan. Evo šta stvarno funkcioniše.</p>
          </Reveal>
          <div className="space-y-3">
            {tactics.map((t, i) => (
              <Reveal key={t.tactic} delay={i * 60}>
                <div className="bg-panel rounded-[16px] p-6 border border-edge-2">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-[180px]">
                      <div className="text-[15px] font-medium text-ink">{t.tactic}</div>
                    </div>
                    <div className="flex-1 text-[13px] text-ink-4">{t.why}</div>
                    <div className="text-[12px] text-ink-5 bg-tint px-3 py-1 rounded-full md:w-fit">{t.goal}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[700px] mx-auto text-center">
          <Reveal className="bg-tint rounded-[16px] p-10 border border-edge-2">
            <div className="text-[48px] text-ink/[0.06] mb-4 font-serif">"</div>
            <p className="text-[18px] text-ink-3 leading-[30px] italic mb-4">
              Lokalni klijenti traže rešenje odmah i žele da vide da ste pouzdani. Dobra online prisutnost i recenzije donose pozive svaki dan.
            </p>
            <span className="text-[13px] text-ink/25">Platinum Zenith Tim</span>
          </Reveal>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
