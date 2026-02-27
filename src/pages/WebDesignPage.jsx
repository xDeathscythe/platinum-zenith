import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../components/Reveal'
import BottomCTA from '../components/BottomCTA'

const B = import.meta.env.BASE_URL
const heroHomeDark = `${B}hero-home-dark.webp`
const heroHomeLight = `${B}hero-home-light.webp`

/* ─── Portfolio Items ─── */
const portfolio = [
  { img: `${B}portfolio-02.webp`, name: 'Platinum Tartufi', type: 'E-Commerce', result: '+180% prodaje' },
  { img: `${B}portfolio-grubin.webp`, name: 'Grubin Showroom', type: 'WooCommerce', result: '+220% saobraćaja' },
  { img: `${B}portfolio-lilium.webp`, name: 'Lilium', type: 'Kozmetički salon', result: '+260% rezervacija' },
  { img: `${B}niwa-hero.webp`, name: 'Niwa AI', type: 'SaaS Platform', result: '+195% sign-ups' },
  { img: `${B}portfolio-04.webp`, name: 'MERME Salon', type: 'Frizerski salon', result: '+150% rezervacija' },
  { img: `${B}portfolio-09.webp`, name: 'Veda Stolarija', type: 'PVC Stolarija', result: '3x više upita' },
]

/* ─── Browser Mockup ─── */
function BrowserFrame({ src, name }) {
  return (
    <div className="bg-panel rounded-[12px] border border-edge-2 overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)] group hover:border-white/[0.10] transition-all">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-edge-2">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-ink/[0.08]" />
          <div className="w-2 h-2 rounded-full bg-ink/[0.08]" />
          <div className="w-2 h-2 rounded-full bg-ink/[0.08]" />
        </div>
        <div className="flex-1 mx-2">
          <div className="bg-tint rounded-full h-4 flex items-center px-2">
            <span className="text-[9px] text-ink-2 truncate">{name}</span>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <img
          src={src}
          alt={name}
          className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
          loading="lazy"
        />
      </div>
    </div>
  )
}

/* ─── Page ─── */
export default function WebDesignPage() {
  const [activeProject, setActiveProject] = useState(0)

  return (
    <>
      {/* ─── Hero — homepage structure ─── */}
      <section className="relative flex flex-col items-center text-center pt-[160px] md:pt-[220px] pb-[20px] px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark"
            style={{
              backgroundImage: `url(${heroHomeDark})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              backgroundColor: '#000000',
            }}
          />
          <div className="absolute inset-0 only-light"
            style={{
              backgroundImage: `url(${heroHomeLight})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              backgroundColor: '#ffffff',
            }}
          />

          <div className="absolute inset-x-0 z-[1]"
            style={{
              top: '55%',
              height: '45%',
              backdropFilter: 'blur(68px)',
              WebkitBackdropFilter: 'blur(68px)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)',
            }}
          />

          <div className="absolute inset-0 z-[2] only-dark"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.30) 58%, rgba(0,0,0,0.70) 74%, #000000 92%)',
            }}
          />
          <div className="absolute inset-0 z-[2] only-light"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,0.35) 58%, rgba(255,255,255,0.75) 74%, #ffffff 92%)',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-full overflow-hidden">
          <h1 className="hero-enter hero-enter-d1 text-[32px] md:text-[62px] font-medium leading-[1.1] md:leading-[62px] tracking-[-1px] md:tracking-[-1.86px] text-black mb-4">
            Sajtovi koji pretvaraju<br className="hidden md:inline" /> posetioce u klijente
          </h1>

          <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center mb-6 md:mb-8 max-w-[620px] mx-auto px-6 md:px-2">
            Dva od tri sajta ne donose ni jednog klijenta. Mi pravimo sajtove koji rade prekovremeno, 24 sata dnevno, 7 dana u nedelji.
          </p>

          <div className="hero-enter hero-enter-d3 flex items-center justify-center gap-2 flex-wrap px-2">
            <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/80 transition-colors">
              Zakažite Konsultacije
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Hero showcase — featured project in browser frame */}
          <div className="hero-enter hero-enter-d4 mt-10 md:mt-16">
            <div className="max-w-[900px] mx-auto">
              <BrowserFrame src={`${B}portfolio-01.webp`} name="focusfizikal.rs" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats bar ─── */}
      <Reveal className="py-8 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 bg-tint rounded-[11px] border border-edge-2 overflow-hidden">
            {[
              { v: '+340%', l: 'Prosečan rast konverzija' },
              { v: '2.1s', l: 'Prosečno vreme učitavanja' },
              { v: '95+', l: 'PageSpeed skor' },
              { v: '24/7', l: 'Vaš sajt prodaje' },
            ].map(s => (
              <div key={s.l} className="py-6 px-4 text-center border-r last:border-r-0 border-edge-2 md:border-b-0 border-b [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r">
                <div className="text-[28px] md:text-[32px] font-bold text-ink">{s.v}</div>
                <div className="text-[12px] text-ink-2 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ─── Problem section ─── */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center mb-10">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2">Zašto većina sajtova ne radi</span>
            <h2 className="text-[32px] md:text-[46px] font-medium tracking-[-1.2px] text-ink mt-3 mb-4">Lep sajt koji ne prodaje je skup vizit karta</h2>
            <p className="text-[16px] text-ink-2 max-w-[700px] mx-auto leading-[27px]">
              Većina agencija pravi sajtove koji lepo izgledaju na prezentaciji. Problem nastaje kad treba da donesu upite, pozive i narudžbine.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Spor i težak', text: 'Sajt koji se učitava 5+ sekundi gubi 53% mobilnih posetilaca pre nego što vide prvu reč.' },
              { title: 'Nema jasnu konverziju', text: 'Posetilac ne zna šta treba da uradi. Nema jedinstven poziv na akciju, nema jasan sledeći korak.' },
              { title: 'Ne prati rezultate', text: 'Bez analitike i praćenja konverzija, sajt je crna kutija. Ne znate šta radi, a šta ne.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 60} className="bg-panel border border-edge-2 rounded-[16px] p-6">
                <h3 className="text-[20px] text-ink font-medium mb-2">{item.title}</h3>
                <p className="text-[14px] text-ink-2 leading-[24px]">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Portfolio showcase ─── */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-3">Naši radovi</h2>
            <p className="text-[15px] text-ink-2 max-w-[600px] mx-auto">Svaki projekat je dizajniran da radi posao, ne samo da izgleda lepo.</p>
          </Reveal>

          {/* Project tabs */}
          <div className="flex gap-2 justify-center flex-wrap mb-8">
            {portfolio.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActiveProject(i)}
                className={`text-[13px] font-medium px-4 py-2 rounded-full transition-all cursor-pointer ${
                  i === activeProject
                    ? 'bg-inv-bg text-inv-fg'
                    : 'bg-tint text-ink-2 hover:text-ink border border-edge-2'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Active project display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="max-w-[900px] mx-auto"
            >
              <BrowserFrame src={portfolio[activeProject].img} name={portfolio[activeProject].name} />
              <div className="flex items-center justify-center gap-6 mt-5">
                <div className="text-center">
                  <div className="text-[12px] text-ink-2 uppercase tracking-wider">{portfolio[activeProject].type}</div>
                </div>
                <div className="w-px h-4 bg-edge-2" />
                <div className="text-center">
                  <div className="text-[14px] text-ink font-medium">{portfolio[activeProject].result}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── What you get ─── */}
      <section className="py-16 px-4 md:px-8 bg-panel border-y border-edge-2">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-3">Šta dobijate sa svakim sajtom</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Mobile-first dizajn', desc: 'Preko 70% saobraćaja dolazi sa telefona. Svaki element je prvo dizajniran za mobilni, pa tek onda adaptiran za desktop.' },
              { title: 'PageSpeed 95+', desc: 'Optimizovane slike, lazy loading, minimizirani resursi. Sajt koji se učitava za manje od 2 sekunde.' },
              { title: 'SEO iz temelja', desc: 'Strukturirani podaci, sitemap, meta tagovi, semantički HTML. Google zna tačno o čemu je vaš sajt.' },
              { title: 'Konverzija u fokusu', desc: 'Svaki element na stranici ima jasan cilj. CTA pozicija, boja, tekst, sve je testirano i optimizovano.' },
              { title: 'Analitika od dana 1', desc: 'Google Analytics, heatmape, praćenje konverzija. Znate tačno koliko vam sajt zarađuje.' },
              { title: 'SSL, backup, podrška', desc: 'Besplatan SSL sertifikat, automatski backup i 30 dana tehničke podrške posle lansiranja.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 50} className="bg-tint rounded-[16px] p-6 border border-edge-2">
                <h3 className="text-[18px] text-ink font-medium mb-2">{item.title}</h3>
                <p className="text-[14px] text-ink-2 leading-[24px]">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-3">Od ideje do lansiranja</h2>
            <p className="text-[15px] text-ink-2">Transparentan proces u 5 koraka. Bez iznenađenja.</p>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-3">
            {[
              { title: 'Audit', desc: 'Razumemo vaš biznis, ciljnu grupu i šta treba da se desi na sajtu', dur: 'Nedelja 1' },
              { title: 'Wireframes', desc: 'Definišemo strukturu i ključne konverzione tačke', dur: 'Nedelja 2' },
              { title: 'Dizajn', desc: 'Vizuelni identitet koji razlikuje vaš brend od svih ostalih', dur: 'Nedelja 3-4' },
              { title: 'Development', desc: 'Kod sa fokusom na brzinu, responsivnost i čist HTML', dur: 'Nedelja 4-6' },
              { title: 'Lansiranje', desc: 'Testiranje, SSL, analitika, i vaš sajt je živ', dur: 'Nedelja 6-7' },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 60}
                className="bg-tint rounded-[11px] p-5 text-center border border-edge-2 relative">
                {i < 4 && <div className="hidden md:block absolute top-1/2 -right-2 text-ink-2 text-[16px]">→</div>}
                <span className="text-[13px] text-ink-2 font-medium block mb-2">0{i + 1}</span>
                <div className="text-[14px] font-medium text-ink mb-1">{s.title}</div>
                <div className="text-[12px] text-ink-2 leading-relaxed">{s.desc}</div>
                <div className="text-[10px] text-ink-2 mt-2 bg-panel rounded-full inline-block px-2 py-0.5">{s.dur}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tech stack ─── */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-[800px] mx-auto">
          <Reveal className="text-center mb-8">
            <h2 className="text-[28px] md:text-[36px] font-medium text-ink mb-3">Tehnologije koje koristimo</h2>
            <p className="text-[15px] text-ink-2">Pravi alat za svaki projekat.</p>
          </Reveal>
          <Reveal type="stagger" className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { name: 'React', desc: 'Komponente' },
              { name: 'Next.js', desc: 'SSR / SSG' },
              { name: 'WordPress', desc: 'CMS' },
              { name: 'Tailwind', desc: 'Styling' },
              { name: 'Figma', desc: 'UI/UX' },
              { name: 'WooCommerce', desc: 'E-commerce' },
            ].map(s => (
              <div key={s.name} className="bg-tint border border-edge-2 rounded-[11px] p-4 text-center hover:border-white/[0.10] transition-colors">
                <div className="text-[14px] text-ink font-medium">{s.name}</div>
                <div className="text-[11px] text-ink-2 mt-1">{s.desc}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-3">Šta kažu naši klijenti</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-4">
            <Reveal className="bg-tint rounded-[16px] border border-edge-2 p-7 md:p-8 relative overflow-hidden">
              <div className="absolute top-3 left-5 text-[48px] text-ink/[0.04] font-serif leading-none">"</div>
              <p className="text-[16px] text-ink-2 leading-[28px] italic mb-5">
                "Pre saradnje sa Platinum Zenith, konverzija na sajtu je bila 0,8% i kupci su retko kupovali više od jednog para. Posle novog sajta konverzija je skočila 2,12 puta, a cena po kupovini pala za 61%. Na istom budžetu imamo 160% više prodaja."
              </p>
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-[15px] text-ink font-medium">Ivana</div>
                  <div className="text-[13px] text-ink-2">Grubin Showroom</div>
                </div>
              </div>
              <div className="flex gap-3 mt-4 flex-wrap">
                <span className="text-[11px] text-ink-2 bg-panel px-2.5 py-1 rounded-full border border-edge-2">+160% prodaja</span>
                <span className="text-[11px] text-ink-2 bg-panel px-2.5 py-1 rounded-full border border-edge-2">-61% cena po kupovini</span>
                <span className="text-[11px] text-ink-2 bg-panel px-2.5 py-1 rounded-full border border-edge-2">2.12x konverzija</span>
              </div>
            </Reveal>

            <Reveal delay={80} className="bg-tint rounded-[16px] border border-edge-2 p-7 md:p-8 relative overflow-hidden">
              <div className="absolute top-3 left-5 text-[48px] text-ink/[0.04] font-serif leading-none">"</div>
              <p className="text-[16px] text-ink-2 leading-[28px] italic mb-5">
                "Platinum Zenith je napravio tačno ono što sam zamislila. Sajt izgleda profesionalno, radi brzo i klijenti nam se javljaju svaki dan. Bila sam toliko zadovoljna da sam ih odmah preporučila prijateljici."
              </p>
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-[15px] text-ink font-medium">Salon Lilium</div>
                  <div className="text-[13px] text-ink-2">Kozmetički salon</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="bg-panel border border-edge-2 rounded-[16px] p-7 md:p-8 relative overflow-hidden md:col-span-2">
              <div className="absolute top-3 left-5 text-[48px] text-ink/[0.04] font-serif leading-none">"</div>
              <p className="text-[16px] text-ink-2 leading-[28px] italic mb-5">
                "Posle tri loša iskustva sa agencijama, Platinum Zenith je konačno napravio sajt koji zapravo donosi klijente. Za 2 meseca imamo 3x više upita."
              </p>
              <div>
                <div className="text-[15px] text-ink font-medium">Marko P.</div>
                <div className="text-[13px] text-ink-2">Direktor, Veda Stolarija</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Paketi ─── */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-3">Izaberite paket koji odgovara vašim ciljevima</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5 items-start">
            {/* Conversion Lander */}
            <Reveal className="rounded-[16px] p-7 border border-edge-2 bg-panel flex flex-col">
              <h3 className="text-[22px] font-medium text-ink mb-1">Conversion Lander</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-[36px] font-bold text-ink">€2,500</span>
              </div>
              <span className="text-[12px] text-ink-2 mb-5">one time</span>
              <div className="space-y-3 mb-6 flex-1">
                <p className="text-[13px] text-ink-2 leading-[22px]">Optimizovana struktura funnel-a vodi potencijalne klijente kroz jasne korake ka kupovini, što povećava konverzije i prihode.</p>
                <p className="text-[13px] text-ink-2 leading-[22px]">Precizno targetiranje publike osigurava da privlačite samo klijente koji su zainteresovani za vaše proizvode ili usluge.</p>
                <p className="text-[13px] text-ink-2 leading-[22px]">Funnel automatski obrađuje potencijalne klijente, odgovara na česta pitanja i pruža informacije, čime se štedi vreme.</p>
                <p className="text-[13px] text-ink-2 leading-[22px]">Pametna investicija koja donosi merljiv povrat kroz povećanje prodaje, uštedu vremena i profesionalni imidž.</p>
                <p className="text-[13px] text-ink-2 leading-[22px]">Dizajniran da impresionira — gradi autoritet vašeg brenda i ostavlja jak prvi utisak kod potencijalnih klijenata.</p>
              </div>
              <Link to="/kontakt" className="w-full h-11 rounded-[40px] inline-flex items-center justify-center text-[13px] font-medium border border-edge-2 text-ink hover:bg-tint transition-colors">
                Rezervišite konsultacije
              </Link>
            </Reveal>

            {/* Business Platform */}
            <Reveal delay={60} className="rounded-[16px] p-7 border border-white/[0.12] bg-tint ring-1 ring-white/[0.06] flex flex-col">
              <span className="text-[11px] text-ink uppercase tracking-widest font-medium mb-3">Najpopularnije</span>
              <h3 className="text-[22px] font-medium text-ink mb-1">Business Platform</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-[36px] font-bold text-ink">€4,997</span>
              </div>
              <span className="text-[12px] text-ink-2 mb-5">one time</span>
              <div className="bg-panel rounded-[8px] px-3 py-2 mb-4 border border-edge-2">
                <span className="text-[12px] text-ink font-medium">Conversion Lander +</span>
              </div>
              <div className="space-y-3 mb-6 flex-1">
                <p className="text-[13px] text-ink-2 leading-[22px]">Profesionalan web-sajt koji pomaže u izgradnji brenda, privlačenju klijenata i povećanju profita.</p>
                <p className="text-[13px] text-ink-2 leading-[22px]">Sveobuhvatne integracije: online plaćanja, CRM, alati za e-mail marketing i društvene mreže.</p>
                <p className="text-[13px] text-ink-2 leading-[22px]">CMS koji omogućava lako upravljanje sadržajem bez tehničkog znanja. Trening uključen u cenu.</p>
                <p className="text-[13px] text-ink-2 leading-[22px]">Ugrađeni alati i optimizacija sadržaja za bolje rangiranje na pretraživačima i veći organski promet.</p>
                <p className="text-[13px] text-ink-2 leading-[22px]">Dizajn optimizovan za konverzije — više prodaja, prijava, upita.</p>
                <p className="text-[13px] text-ink-2 leading-[22px]">Brzo učitavanje za bolje korisničko iskustvo i SEO. Najnoviji bezbednosni protokoli.</p>
                <p className="text-[13px] text-ink-2 leading-[22px]">Ključne reči i tehnička SEO strategija uključene.</p>
              </div>
              <Link to="/kontakt" className="w-full h-11 rounded-[40px] inline-flex items-center justify-center text-[13px] font-medium bg-ink text-inv-fg hover:opacity-90 transition-colors">
                Rezervišite konsultacije
              </Link>
            </Reveal>

            {/* Enterprise Web */}
            <Reveal delay={120} className="rounded-[16px] p-7 border border-edge-2 bg-panel flex flex-col">
              <h3 className="text-[22px] font-medium text-ink mb-1">Enterprise Web</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-[36px] font-bold text-ink">€14,500</span>
              </div>
              <span className="text-[12px] text-ink-2 mb-5">one time</span>
              <div className="bg-tint rounded-[8px] px-3 py-2 mb-4 border border-edge-2">
                <span className="text-[12px] text-ink font-medium">Business Platform +</span>
              </div>
              <div className="space-y-3 mb-6 flex-1">
                <p className="text-[13px] text-ink-2 leading-[22px]">Napredne animacije, interaktivne funkcionalnosti i prilagođeni vizualni efekti. Dizajniran da impresionira na globalnom nivou.</p>
                <p className="text-[13px] text-ink font-medium mt-4 mb-1">Strategija brenda</p>
                <p className="text-[13px] text-ink-2 leading-[22px]">Dubinska analiza tržišta, konkurencije i ciljnih korisnika. Razvoj strategije koja objedinjuje vizuelni identitet, funkcionalnost i korisničko iskustvo. Konsultacije sa stručnjacima iz UX/UI dizajna, SEO-a i digitalnog marketinga.</p>
                <p className="text-[13px] text-ink font-medium mt-4 mb-1">Napredne funkcionalnosti</p>
                <p className="text-[13px] text-ink-2 leading-[22px]">Integrisani sistemi: ERP, CRM, upravljanje zalihama, plaćanja, korisnička podrška i automatizacija. Web aplikacije: kalkulatori, konfiguratori, interaktivne mape. E-commerce sa naprednim filterima, više jezika, automatski porezi i dostava.</p>
                <p className="text-[13px] text-ink font-medium mt-4 mb-1">Performanse i sigurnost</p>
                <p className="text-[13px] text-ink-2 leading-[22px]">High-traffic ready sa CDN-om za globalnu dostupnost. Ultra-brzo učitavanje, mobile-first pristup. SSL/TLS, DDoS zaštita, automatizovane rezervne kopije, monitoring 24/7.</p>
                <p className="text-[13px] text-ink font-medium mt-4 mb-1">Premium SEO</p>
                <p className="text-[13px] text-ink-2 leading-[22px]">Napredna tehnička SEO optimizacija, schema markup, strategija sadržaja. Google Analytics, Tag Manager i alati za praćenje performansi.</p>
                <p className="text-[13px] text-ink font-medium mt-4 mb-1">Podrška i obuka</p>
                <p className="text-[13px] text-ink-2 leading-[22px]">Godina dana tehničke podrške sa redovnim proverama, ažuriranjima i optimizacijom. Tim za hitne intervencije. Detaljna obuka zaposlenih, korisnički priručnik i video tutorijali.</p>
              </div>
              <Link to="/kontakt" className="w-full h-11 rounded-[40px] inline-flex items-center justify-center text-[13px] font-medium border border-edge-2 text-ink hover:bg-tint transition-colors">
                Rezervišite konsultacije
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Guarantee ─── */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto">
          <Reveal className="bg-panel border border-edge-2 rounded-[16px] p-7 md:p-9">
            <h3 className="text-[24px] text-ink font-medium mb-3">Bez kompromisa na kvalitetu</h3>
            <p className="text-[15px] text-ink-2 leading-[27px] max-w-[700px]">
              Svaki sajt prolazi QA testiranje na 12+ uređaja pre lansiranja. Dobijate 30 dana besplatne podrške i garanciju da sajt radi kako treba. Ako nešto ne valja, popravljamo besplatno.
            </p>
          </Reveal>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
