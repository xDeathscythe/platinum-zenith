import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import BottomCTA from '../components/BottomCTA'

const heroHomeDark = `${import.meta.env.BASE_URL}hero-home-dark.webp`
const heroHomeLight = `${import.meta.env.BASE_URL}hero-home-light.webp`

/* ─── Social Feed Mockup ─── */
function SocialFeedMock() {
  const [active, setActive] = useState(0)
  const posts = [
    { platform: 'Instagram', reach: '42K', engagement: '8.3%', type: 'Reel', text: 'Behind the scenes kreativ koji je donio 171 lead' },
    { platform: 'Facebook', reach: '28K', engagement: '4.1%', type: 'Carousel', text: 'Edukativni post sa 3x prosečnim engagement-om' },
    { platform: 'TikTok', reach: '125K', engagement: '12.7%', type: 'Video', text: 'UGC stil video koji je dostigao 125K pregleda za 48h' },
    { platform: 'LinkedIn', reach: '8.5K', engagement: '6.2%', type: 'Article', text: 'Thought leadership post sa 340+ reakcija' },
  ]

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % posts.length), 3500)
    return () => clearInterval(t)
  }, [])

  const post = posts[active]

  return (
    <div className="bg-panel rounded-[16px] border border-edge-2 overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between px-5 py-3 border-b border-edge-2">
        <span className="text-[13px] text-ink-2 font-medium">Content Performance</span>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-ink-2" />
          <span className="text-[11px] text-ink-2">Live</span>
        </div>
      </div>

      <div className="flex border-b border-edge-2">
        {posts.map((p, i) => (
          <button key={p.platform} onClick={() => setActive(i)}
            className={`flex-1 py-2.5 text-[12px] font-medium transition-all cursor-pointer relative ${i === active ? 'text-ink' : 'text-ink-2 hover:text-ink'}`}>
            {p.platform}
            {i === active && <motion.div layoutId="smTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-ink" />}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="p-5">
          <div className="bg-tint rounded-[11px] p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] text-ink-2 bg-panel px-2 py-0.5 rounded-full border border-edge-2">{post.type}</span>
              <span className="text-[11px] text-ink-2">{post.platform}</span>
            </div>
            <p className="text-[13px] text-ink leading-relaxed">{post.text}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-[11px] text-ink-2 uppercase tracking-wider mb-1">Reach</div>
              <div className="text-[22px] font-bold text-ink">{post.reach}</div>
            </div>
            <div>
              <div className="text-[11px] text-ink-2 uppercase tracking-wider mb-1">Engagement</div>
              <div className="text-[22px] font-bold text-ink">{post.engagement}</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

/* ─── Page ─── */
export default function SocialMediaPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative flex flex-col items-center text-center pt-[160px] md:pt-[220px] pb-[20px] px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 only-dark"
            style={{ backgroundImage: `url(${heroHomeDark})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#000000' }}
          />
          <div className="absolute inset-0 only-light"
            style={{ backgroundImage: `url(${heroHomeLight})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#ffffff' }}
          />
          <div className="absolute inset-x-0 z-[1]"
            style={{ top: '55%', height: '45%', backdropFilter: 'blur(68px)', WebkitBackdropFilter: 'blur(68px)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)' }}
          />
          <div className="absolute inset-0 z-[2] only-dark"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.30) 58%, rgba(0,0,0,0.70) 74%, #000000 92%)' }}
          />
          <div className="absolute inset-0 z-[2] only-light"
            style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,0.35) 58%, rgba(255,255,255,0.75) 74%, #ffffff 92%)' }}
          />
        </div>

        <div className="relative z-10 w-full max-w-full overflow-hidden">
          <h1 className="hero-enter hero-enter-d1 text-[32px] md:text-[62px] font-medium leading-[1.1] md:leading-[62px] tracking-[-1px] md:tracking-[-1.86px] text-black mb-4">
            Društvene mreže koje<br className="hidden md:inline" /> donose klijente
          </h1>

          <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center mb-6 md:mb-8 max-w-[620px] mx-auto px-6 md:px-2">
            Većina firmi objavljuje nasumice i čudi se zašto nema rezultata. Mi pravimo sadržaj koji gradi publiku, pokreće razgovore i pretvara pratioce u kupce.
          </p>

          <div className="hero-enter hero-enter-d3 flex items-center justify-center gap-2 flex-wrap px-2">
            <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/80 transition-colors">
              Zakažite Konsultacije
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="hero-enter hero-enter-d4 mt-10 md:mt-16">
            <div className="max-w-[700px] mx-auto">
              <SocialFeedMock />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <Reveal className="py-8 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 bg-tint rounded-[11px] border border-edge-2 overflow-hidden">
            {[
              { v: '3.2x', l: 'Prosečan rast pratilaca' },
              { v: '68%', l: 'Veći engagement' },
              { v: '4.5x', l: 'ROI na oglasima' },
              { v: '24/7', l: 'Community management' },
            ].map(s => (
              <div key={s.l} className="py-6 px-4 text-center border-r last:border-r-0 border-edge-2 md:border-b-0 border-b [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r">
                <div className="text-[28px] md:text-[32px] font-bold text-ink">{s.v}</div>
                <div className="text-[12px] text-ink-2 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ─── Problem ─── */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center mb-10">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-2">Zašto objave ne donose rezultate</span>
            <h2 className="text-[32px] md:text-[46px] font-medium tracking-[-1.2px] text-ink mt-3 mb-4">Objavljujete redovno, a ništa se ne dešava</h2>
            <p className="text-[16px] text-ink-2 max-w-[700px] mx-auto leading-[27px]">
              Konzistentnost bez strategije je samo buka. Društvene mreže nagrađuju sadržaj koji rešava probleme, a ne sadržaj koji ispunjava kalendar.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Sadržaj bez cilja', text: 'Svaka objava treba da ima jasan cilj: engagement, edukacija, konverzija. Bez toga, algoritam vas ignoriše.' },
              { title: 'Pogrešna publika', text: 'Hiljade pratilaca koji nikad neće kupiti ne vrede koliko 500 pravih. Targetiranje je sve.' },
              { title: 'Nema konverzionog puta', text: 'Pratioci vide post, ali nemaju jasan sledeći korak. Bez CTA-a i landing stranice, engagement ostaje samo broj.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 60} className="bg-panel border border-edge-2 rounded-[16px] p-6">
                <h3 className="text-[20px] text-ink font-medium mb-2">{item.title}</h3>
                <p className="text-[14px] text-ink-2 leading-[24px]">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Platforms ─── */}
      <section className="py-16 px-4 md:px-8 bg-panel border-y border-edge-2">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-3">Platforme koje pokrivamo</h2>
            <p className="text-[15px] text-ink-2 max-w-[500px] mx-auto">Svaka mreža ima svoja pravila. Mi znamo kako da izvučemo maksimum iz svake.</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'Instagram', desc: 'Vizuelni sadržaj koji zaustavlja scroll i gradi brend', metric: 'Do 15% engagement' },
              { name: 'Facebook', desc: 'Precizno ciljani oglasi i izgradnja zajednice', metric: '4x ROI prosek' },
              { name: 'TikTok', desc: 'Viralni kreativ za brz rast i mlađe demografije', metric: '125K+ reach' },
              { name: 'LinkedIn', desc: 'B2B autoritet i kvalifikovani lead-ovi', metric: '3x više upita' },
              { name: 'YouTube', desc: 'Dugoročan sadržaj koji radi godinama', metric: '70% više konverzija' },
              { name: 'Twitter/X', desc: 'Brza interakcija i real-time reputacija', metric: 'Real-time feedback' },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 50} className="bg-tint rounded-[16px] p-6 border border-edge-2 hover:border-white/[0.10] transition-all">
                <h3 className="text-[18px] font-medium text-ink mb-2">{p.name}</h3>
                <p className="text-[13px] text-ink-2 mb-3 leading-relaxed">{p.desc}</p>
                <div className="text-[12px] text-ink-2 bg-panel px-3 py-1 rounded-full inline-block border border-edge-2">{p.metric}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-3">Kompletno upravljanje mrežama</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Strategija sadržaja', items: ['Analiza publike i konkurencije', 'Content calendar za 30 dana', 'Ton i glas brenda', 'Hashtag i keyword research'] },
              { title: 'Kreiranje sadržaja', items: ['Dizajn grafika i video materijala', 'Copywriting za objave', 'Reels, Stories, Shorts produkcija', 'UGC kampanje i influencer saradnja'] },
              { title: 'Oglašavanje', items: ['Meta Ads (Facebook/Instagram)', 'TikTok i LinkedIn Ads', 'Retargeting kampanje', 'A/B testiranje kreativa'] },
              { title: 'Analitika i optimizacija', items: ['Dnevno praćenje komentara i poruka', 'Mesečni izveštaji sa metrikama', 'Optimizacija na osnovu podataka', 'Crisis management'] },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 60} className="bg-panel rounded-[16px] p-7 border border-edge-2 hover:border-white/[0.10] transition-colors">
                <h3 className="text-[20px] font-medium text-ink mb-4">{s.title}</h3>
                <div className="space-y-2.5">
                  {s.items.map(item => (
                    <div key={item} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-tint-2 mt-2 flex-shrink-0" />
                      <span className="text-[13px] text-ink-2">{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] text-ink mb-3">Kako radimo</h2>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-3">
            {[
              { title: 'Audit', desc: 'Analiza trenutnog stanja profila i sadržaja' },
              { title: 'Strategija', desc: 'Plan sadržaja, tonalitet, ciljevi po platformi' },
              { title: 'Kreativ', desc: 'Produkcija vizuala, videa i copyja' },
              { title: 'Distribucija', desc: 'Objavljivanje, oglasi, community management' },
              { title: 'Optimizacija', desc: 'Mesečna analiza, iteracija, skaliranje' },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 60}
                className="bg-tint rounded-[11px] p-5 text-center border border-edge-2 relative">
                {i < 4 && <div className="hidden md:block absolute top-1/2 -right-2 text-ink-2 text-[16px]">→</div>}
                <span className="text-[13px] text-ink-2 font-medium block mb-2">0{i + 1}</span>
                <div className="text-[14px] font-medium text-ink mb-1">{s.title}</div>
                <div className="text-[12px] text-ink-2 leading-relaxed">{s.desc}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quote ─── */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto">
          <Reveal className="bg-panel border border-edge-2 rounded-[16px] p-7 md:p-9">
            <h3 className="text-[24px] text-ink font-medium mb-3">Rezultati, ne lajkovi</h3>
            <p className="text-[15px] text-ink-2 leading-[27px] max-w-[700px]">
              Društvene mreže nisu trka za pratioce. One su platforma za izgradnju poverenja i odnosa sa budućim klijentima. Merimo ono što je bitno: upite, konverzije i povrat investicije.
            </p>
          </Reveal>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
