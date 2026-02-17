import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import BottomCTA from '../components/BottomCTA'

/* ─── Animated Counter ─────────────────── */
function Counter({ value, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const num = parseInt(value)
  return (
    <span ref={ref}>
      {prefix}{inView ? <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{value}</motion.span> : '0'}{suffix}
    </span>
  )
}

/* ─── Browser Mockup Component ─────────── */
function BrowserMockup() {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = ['Desktop', 'Tablet', 'Mobile']
  
  return (
    <div className="relative">
      {/* Tab switcher */}
      <div className="flex items-center justify-center gap-1 mb-4">
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setActiveTab(i)}
            className={`text-[12px] px-3 py-1.5 rounded-full transition-all cursor-pointer ${activeTab === i ? 'bg-white/10 text-white' : 'text-white/30 hover:text-white/50'}`}>
            {t}
          </button>
        ))}
      </div>

      {/* Browser chrome */}
      <div className={`mx-auto transition-all duration-500 ${activeTab === 0 ? 'max-w-full' : activeTab === 1 ? 'max-w-[600px]' : 'max-w-[320px]'}`}>
        <div className="bg-[#141414] rounded-t-[11px] border border-white/[0.08] border-b-0">
          <div className="flex items-center gap-1.5 px-4 py-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28ca42]" />
            <div className="flex-1 mx-4">
              <div className="bg-white/[0.06] rounded-md px-3 py-1 text-[11px] text-white/25 font-mono">vasafirma.rs</div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="bg-[#0a0a0a] border border-white/[0.08] rounded-b-[11px] overflow-hidden">
          {/* Hero area */}
          <div className="relative h-[200px] overflow-hidden">
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            }} />
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
              <div className="w-8 h-8 rounded-lg bg-white/20 mb-3" />
              <div className="h-4 w-48 bg-white/60 rounded mb-2" />
              <div className="h-2.5 w-64 bg-white/20 rounded mb-4" />
              <div className="flex gap-2">
                <div className="h-6 w-20 rounded-full bg-white/80" />
                <div className="h-6 w-20 rounded-full bg-white/10 border border-white/20" />
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-0 border-t border-white/[0.06]">
            {[{v: '+340%', l: 'Konverzije'}, {v: '2.1s', l: 'Load time'}, {v: '99/100', l: 'PageSpeed'}].map(s => (
              <div key={s.l} className="py-4 px-3 text-center border-r last:border-r-0 border-white/[0.04]">
                <div className="text-[16px] font-bold text-emerald-400">{s.v}</div>
                <div className="text-[10px] text-white/30 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Content blocks */}
          <div className="p-5 space-y-3">
            <div className="flex gap-3">
              <div className="w-1/3 h-20 rounded-lg bg-white/[0.04]" />
              <div className="w-2/3 space-y-2">
                <div className="h-3 w-full bg-white/[0.06] rounded" />
                <div className="h-3 w-3/4 bg-white/[0.04] rounded" />
                <div className="h-3 w-1/2 bg-white/[0.04] rounded" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1,2,3].map(i => (
                <div key={i} className="h-16 rounded-lg bg-white/[0.03] border border-white/[0.04]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Before/After Slider Mock ───────── */
function BeforeAfter() {
  const [split, setSplit] = useState(50)
  return (
    <div className="relative rounded-[11px] overflow-hidden border border-white/[0.08] h-[340px] cursor-ew-resize select-none"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        setSplit(Math.max(10, Math.min(90, ((e.clientX - r.left) / r.width) * 100)))
      }}>
      {/* Before side */}
      <div className="absolute inset-0 bg-[#1a0a0a]">
        <div className="flex flex-col items-center justify-center h-full px-8 text-center">
          <span className="text-[11px] text-red-400/50 uppercase tracking-wider mb-4">Pre redizajna</span>
          <div className="space-y-3 w-full max-w-[300px]">
            <div className="h-12 rounded bg-gray-800/50 border border-gray-700/30 flex items-center px-3">
              <div className="h-2 w-24 bg-gray-600/30 rounded" />
            </div>
            <div className="h-8 rounded bg-gray-800/30 flex items-center px-3">
              <div className="h-1.5 w-16 bg-gray-600/20 rounded" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-20 rounded bg-gray-800/20" />
              <div className="h-20 rounded bg-gray-800/20" />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-red-400/60 text-[13px]">⚠</span>
              <span className="text-[11px] text-red-400/40">Bounce rate: 78%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-400/60 text-[13px]">⚠</span>
              <span className="text-[11px] text-red-400/40">Konverzija: 0.4%</span>
            </div>
          </div>
        </div>
      </div>

      {/* After side */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${split}%)` }}>
        <div className="bg-[#0a1a0a] h-full flex flex-col items-center justify-center px-8 text-center">
          <span className="text-[11px] text-emerald-400/50 uppercase tracking-wider mb-4">Posle redizajna</span>
          <div className="space-y-3 w-full max-w-[300px]">
            <div className="h-12 rounded-lg bg-emerald-900/20 border border-emerald-500/10 flex items-center px-3">
              <div className="h-2 w-32 bg-emerald-400/30 rounded" />
            </div>
            <div className="h-8 rounded-lg bg-emerald-900/10 flex items-center px-3">
              <div className="h-1.5 w-20 bg-emerald-400/20 rounded" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-20 rounded-lg bg-emerald-900/10 border border-emerald-500/5" />
              <div className="h-20 rounded-lg bg-emerald-900/10 border border-emerald-500/5" />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-emerald-400 text-[13px]">✓</span>
              <span className="text-[11px] text-emerald-400/60">Bounce rate: 28%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 text-[13px]">✓</span>
              <span className="text-[11px] text-emerald-400/60">Konverzija: 4.2%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-white/40 z-20" style={{ left: `${split}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg">
          <span className="text-black text-[12px]">⟷</span>
        </div>
      </div>
    </div>
  )
}

/* ─── Tech Stack Grid ──────────────────── */
function TechStack() {
  const stack = [
    { name: 'React', icon: '⚛️', desc: 'Komponente' },
    { name: 'Next.js', icon: '▲', desc: 'SSR / SSG' },
    { name: 'WordPress', icon: '⊡', desc: 'CMS' },
    { name: 'Tailwind', icon: '🎨', desc: 'Dizajn' },
    { name: 'Figma', icon: '✦', desc: 'UI/UX' },
    { name: 'Vercel', icon: '▲', desc: 'Deploy' },
  ]
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
      {stack.map((s, i) => (
        <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
          className="bg-white/[0.03] border border-white/[0.05] rounded-[11px] p-4 text-center hover:bg-white/[0.06] transition-colors group">
          <span className="text-2xl block mb-2 group-hover:scale-110 transition-transform">{s.icon}</span>
          <div className="text-[13px] text-white/70 font-medium">{s.name}</div>
          <div className="text-[11px] text-white/25 mt-0.5">{s.desc}</div>
        </motion.div>
      ))}
    </div>
  )
}

/* ─── Process Timeline ─────────────────── */
const processSteps = [
  { num: '01', title: 'Discovery & Audit', desc: 'Razumemo vaš biznis, ciljnu grupu i konkurenciju. Analiziramo postojeći sajt i tražimo prilike za rast.', duration: 'Nedelja 1', icon: '🔍' },
  { num: '02', title: 'Strategija & Wireframes', desc: 'Definišemo strukturu, korisničko putovanje i ključne tačke konverzije. Svaki piksel ima svrhu.', duration: 'Nedelja 2', icon: '📐' },
  { num: '03', title: 'Visual Design', desc: 'Kreiramo vizuelni identitet koji diferencira vaš brend — tipografija, boje, fotografija, ikonografija.', duration: 'Nedelja 3-4', icon: '🎨' },
  { num: '04', title: 'Development', desc: 'Kodiramo sa fokusom na performanse (PageSpeed 95+), SEO, pristupačnost i mobile-first responsive dizajn.', duration: 'Nedelja 4-6', icon: '⚡' },
  { num: '05', title: 'QA & Launch', desc: 'Testiramo na 20+ uređaja i pretraživača. Postavljamo analitiku, podešavamo SSL, i lansiramo.', duration: 'Nedelja 6-7', icon: '🚀' },
]

/* ─── Main Page ────────────────────────── */
export default function WebDesignPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────── */}
      <section className="pt-[120px] md:pt-[160px] pb-12 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-[12px] text-emerald-400/60 uppercase tracking-widest mb-3 block font-medium">Web Design & Izrada</span>
            <h1 className="text-[36px] md:text-[52px] font-medium leading-[1.08] tracking-[-1.5px] text-white mb-5">
              Sajtovi koji
              <span className="block text-white/40">prodaju umesto vas</span>
            </h1>
            <p className="text-[16px] text-white/50 leading-[26px] mb-8 max-w-[480px]">
              Dva od tri sajta ne donose ni jednog klijenta. Mi pravimo sajtove koji rade prekovremeno — lepo obučen, super moćan prodavac koji radi 24/7.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-white text-black text-[14px] font-medium h-11 px-6 rounded-[40px] hover:bg-white/90 transition-colors">
                Zakažite Konsultacije →
              </Link>
              <Link to="/case-studies" className="inline-flex items-center text-[14px] text-white/50 font-medium hover:text-white transition-colors">
                Pogledajte rezultate →
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <BrowserMockup />
          </motion.div>
        </div>
      </section>

      {/* ─── Stats Bar ─────────────────── */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 bg-white/[0.02] rounded-[11px] border border-white/[0.06] overflow-hidden">
            {[
              { value: '+340%', label: 'Prosečan rast konverzija' },
              { value: '2.1s', label: 'Prosečno učitavanje' },
              { value: '95+', label: 'PageSpeed skor' },
              { value: '24/7', label: 'Vaš sajt prodaje' },
            ].map((s, i) => (
              <div key={s.label} className="py-6 px-4 text-center border-r last:border-r-0 border-white/[0.04] md:border-b-0 border-b [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r">
                <div className="text-[28px] md:text-[32px] font-bold text-white">{s.value}</div>
                <div className="text-[12px] text-white/30 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Problem / Solution ────────── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1000px] mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-white mb-4">Vidite razliku</h2>
            <p className="text-[16px] text-white/40 max-w-[500px] mx-auto">Povucite slider da uporedite pre i posle naše optimizacije.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <BeforeAfter />
          </motion.div>
        </div>
      </section>

      {/* ─── Process Timeline ──────────── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-white mb-4">Od ideje do lansiranja</h2>
            <p className="text-[16px] text-white/40">Transparentan proces u 5 koraka. Znate tačno šta se dešava i kada.</p>
          </motion.div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-emerald-400/20 to-white/10" />
            
            <div className="space-y-8">
              {processSteps.map((s, i) => (
                <motion.div key={s.num} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex gap-5 md:gap-8 items-start group">
                  <div className="w-12 md:w-16 h-12 md:h-16 rounded-[11px] bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 z-10 group-hover:bg-white/[0.08] group-hover:border-emerald-400/20 transition-all">
                    <span className="text-xl md:text-2xl">{s.icon}</span>
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-[18px] md:text-[20px] font-medium text-white">{s.title}</h3>
                      <span className="text-[11px] text-emerald-400/50 bg-emerald-400/[0.06] px-2 py-0.5 rounded-full">{s.duration}</span>
                    </div>
                    <p className="text-[15px] text-white/45 leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Tech Stack ────────────────── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[800px] mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-[28px] md:text-[36px] font-medium text-white mb-3">Tehnologije koje koristimo</h2>
            <p className="text-[15px] text-white/35">Biram pravi alat za svaki projekat.</p>
          </motion.div>
          <TechStack />
        </div>
      </section>

      {/* ─── Why Different ─────────────── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-white mb-4">Zašto smo drugačiji</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Konverzija > Estetika', desc: 'Lep sajt bez prodaje je skupa vizit karta. Svaki element je tu da približi posetioca kupovini.', accent: 'from-emerald-500/10 to-transparent' },
              { title: 'Optimizacija od dana 1', desc: 'PageSpeed 95+, Core Web Vitals zeleno, SEO fundamentals — sve ugrađeno u osnovu, ne naknadno.', accent: 'from-blue-500/10 to-transparent' },
              { title: 'Dizajn sa podacima', desc: 'Heatmaps, session recordings, A/B testovi — koristimo podatke da napravimo sajt koji radi bolje sa svakim mesecom.', accent: 'from-purple-500/10 to-transparent' },
            ].map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/[0.03] rounded-[11px] p-7 border border-white/[0.05] relative overflow-hidden group hover:border-white/[0.10] transition-colors">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.accent}`} />
                <h3 className="text-[18px] font-medium text-white mb-3 mt-2">{c.title}</h3>
                <p className="text-[14px] text-white/45 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
