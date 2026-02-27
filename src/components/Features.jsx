import Reveal from './Reveal'

/* ─── Mockups za svaku uslugu ───────────────────── */
function MockAds() {
  const productImg = `${import.meta.env.BASE_URL}hero-product.jpg`
  const influencerImg = `${import.meta.env.BASE_URL}tiktok-influencer.webp`
  const footerData = [
    { label: 'Meta Ads', metric: 'ROAS 16.2x', badge: 'Active' },
    { label: 'Google Ads', metric: 'CPA €12', badge: 'Active' },
    { label: 'TikTok Ads', metric: 'CTR 3.8%', badge: 'Scaling' },
  ]
  return (
    <div className="theme-dark flex md:grid md:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible items-stretch" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
      {/* 1. Meta Catalog Ad */}
      <div className="bg-[#1a1a1a] rounded-[11px] overflow-hidden flex flex-col min-w-[280px] snap-center md:min-w-0">
        <div className="relative flex-1 overflow-hidden">
          <img src={productImg} alt="Product" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm" />
            <span className="text-[10px] text-white/70 font-medium">Brand Studio</span>
            <span className="text-[9px] text-white/50 ml-1">Sponsored</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="text-[15px] text-white font-semibold leading-tight mb-1">Premium Collection</div>
            <div className="text-[11px] text-white/70 mb-2">Luxury nail polish set, limited edition</div>
            <div className="flex items-center justify-between">
              <span className="text-[16px] text-white font-bold">€49.99</span>
              <button className="bg-white text-black text-[10px] font-semibold px-3 py-1.5 rounded-full">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 flex items-center justify-between border-t border-white/10 mt-auto">
          <span className="text-[12px] text-white/70 font-medium">{footerData[0].label}</span>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-white/50 font-bold">{footerData[0].metric}</span>
            <span className="text-[9px] text-white/40 bg-white/10 px-1.5 py-0.5 rounded-full">{footerData[0].badge}</span>
          </div>
        </div>
      </div>

      {/* 2. Google Search Ad */}
      <div className="bg-[#1a1a1a] rounded-[11px] overflow-hidden flex flex-col min-w-[280px] snap-center md:min-w-0">
        <div className="flex-1 p-4 flex flex-col justify-center bg-[#111] overflow-hidden">
          <div className="bg-white/10 rounded-full px-4 py-2.5 flex items-center gap-2 mb-5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#8ab4f8" strokeWidth="2"/><line x1="16" y1="16" x2="21" y2="21" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round"/></svg>
            <span className="text-[11px] text-white/50">luxury nail polish set</span>
          </div>
          <div className="bg-[#1a1a1a] rounded-lg p-4 border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[9px] text-black bg-white px-1.5 py-0.5 rounded font-bold">AD</span>
              <span className="text-[10px] text-[#8ab4f8]">www.brand.com</span>
            </div>
            <div className="text-[13px] text-[#8ab4f8] font-medium leading-tight mb-1.5">Premium Nail Polish | Free Shipping Over €30</div>
            <div className="text-[11px] text-white/50 leading-relaxed mb-3">Luxury collection of professional nail polishes. Shop our bestselling limited edition set. ★★★★★ 4.9/5</div>
            <div className="grid grid-cols-2 gap-1.5">
              <span className="text-[10px] text-[#8ab4f8]">New Arrivals</span>
              <span className="text-[10px] text-[#8ab4f8]">Best Sellers</span>
              <span className="text-[10px] text-[#8ab4f8]">Gift Sets</span>
              <span className="text-[10px] text-[#8ab4f8]">Sale -40%</span>
            </div>
          </div>
          <div className="mt-3 px-1">
            <div className="text-[10px] text-white/30 mb-1">www.competitor.com</div>
            <div className="h-2 bg-white/10 rounded w-3/4 mb-1" />
            <div className="h-2 bg-white/10 rounded w-1/2" />
          </div>
        </div>
        <div className="px-4 py-3 flex items-center justify-between border-t border-white/10 mt-auto">
          <span className="text-[12px] text-white/70 font-medium">{footerData[1].label}</span>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-white/50 font-bold">{footerData[1].metric}</span>
            <span className="text-[9px] text-white/40 bg-white/10 px-1.5 py-0.5 rounded-full">{footerData[1].badge}</span>
          </div>
        </div>
      </div>

      {/* 3. TikTok Influencer UGC */}
      <div className="bg-[#1a1a1a] rounded-[11px] overflow-hidden flex flex-col min-w-[280px] snap-center md:min-w-0">
        <div className="relative flex-1 overflow-hidden">
          <img src={influencerImg} alt="Influencer" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="text-[10px] text-white/50">Following | <span className="text-white font-semibold">For You</span></span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><line x1="16" y1="16" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          <div className="absolute right-3 bottom-16 flex flex-col items-center gap-3.5">
            <div className="flex flex-col items-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#ff2d55"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              <span className="text-[9px] text-white mt-0.5">24.5K</span>
            </div>
            <div className="flex flex-col items-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              <span className="text-[9px] text-white mt-0.5">1.2K</span>
            </div>
            <div className="flex flex-col items-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
              <span className="text-[9px] text-white mt-0.5">Share</span>
            </div>
          </div>
          <div className="absolute bottom-3 left-3 right-10">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <span className="text-[9px] text-white font-bold">M</span>
              </div>
              <span className="text-[11px] text-white font-semibold">@makeup.mia</span>
              <button className="text-[8px] text-white border border-white/40 px-1.5 py-0.5 rounded">Follow</button>
            </div>
            <p className="text-[9px] text-white/90 leading-tight">Obsessed with this set 💅✨ #nailpolish #beauty #ad</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-[8px] text-white/50">♪ original sound · makeup.mia</span>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 flex items-center justify-between border-t border-white/10 mt-auto">
          <span className="text-[12px] text-white/70 font-medium">{footerData[2].label}</span>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-white/50 font-bold">{footerData[2].metric}</span>
            <span className="text-[9px] text-white/40 bg-white/10 px-1.5 py-0.5 rounded-full">{footerData[2].badge}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function MockWebsite() {
  const niwaHero = `${import.meta.env.BASE_URL}niwa-hero.webp`
  return (
    <div className="relative rounded-[20px] overflow-hidden p-6 md:p-10" style={{
      background: 'linear-gradient(140deg, #93c5fd 0%, #a5b4fc 25%, #c4b5fd 45%, #f9a8d4 70%, #fda4af 90%)',
    }}>
      {/* Blurred aurora spots like the reference */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 20% 50%, rgba(147,197,253,0.6) 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(196,181,253,0.5) 0%, transparent 45%), radial-gradient(ellipse at 50% 90%, rgba(253,164,175,0.5) 0%, transparent 50%)',
        filter: 'blur(30px)',
      }} />
      {/* Floating window — no browser chrome, just clean rounded card */}
      <div className="relative rounded-[16px] overflow-hidden shadow-2xl shadow-black/10 border border-white/30 bg-white/5 backdrop-blur-sm">
        <img src={niwaHero} alt="NiwaChat.com" className="w-full block" loading="lazy" />
      </div>
    </div>
  )
}

function MockConsulting() {
  const areas = [
    { label: 'Tržišno pozicioniranje', score: 92, prev: 61 },
    { label: 'Prodajni proces', score: 88, prev: 45 },
    { label: 'Brending i identitet', score: 95, prev: 52 },
    { label: 'Operativna efikasnost', score: 78, prev: 40 },
    { label: 'Digitalna transformacija', score: 85, prev: 35 },
  ]
  const total = Math.round(areas.reduce((s, a) => s + a.score, 0) / areas.length)
  return (
    <div className="bg-[#111] rounded-[16px] p-5 md:p-6 border border-white/10 text-white">
      {/* Header with score ring */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Biznis Revizija</div>
          <div className="text-[18px] font-semibold">Rezultat Analize</div>
        </div>
        <div className="relative w-16 h-16 flex items-center justify-center">
          <svg width="64" height="64" viewBox="0 0 64 64" className="absolute inset-0">
            <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
            <circle cx="32" cy="32" r="28" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round"
              strokeDasharray={`${(total / 100) * 176} 176`}
              transform="rotate(-90 32 32)" />
          </svg>
          <span className="text-[16px] font-bold">{total}</span>
        </div>
      </div>
      {/* Audit bars */}
      <div className="space-y-3">
        {areas.map(a => (
          <div key={a.label}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[12px] text-white/60">{a.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-white/30 line-through">{a.prev}</span>
                <span className="text-[12px] font-medium">{a.score}</span>
              </div>
            </div>
            <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-white/40 to-white" style={{ width: `${a.score}%` }} />
            </div>
          </div>
        ))}
      </div>
      {/* Bottom tag */}
      <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-[11px] text-white/40">5 oblasti analizirano</span>
        <span className="text-[11px] font-medium text-white/70 bg-white/10 px-2.5 py-1 rounded-full">+67% ukupno poboljšanje</span>
      </div>
    </div>
  )
}

function MockCRO() {
  const funnel = [
    { label: 'Posetilaca', value: '12,480', pct: 100 },
    { label: 'Angažovanih', value: '6,240', pct: 50 },
    { label: 'Dodali u korpu', value: '1,872', pct: 15 },
    { label: 'Kupovina', value: '599', pct: 4.8 },
  ]
  return (
    <div className="bg-[#111] rounded-[16px] p-5 md:p-6 border border-white/10 text-white">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Konverzije</div>
          <div className="text-[18px] font-semibold">Funnel Analiza</div>
        </div>
        <div className="text-right">
          <div className="text-[24px] font-bold">4.8%</div>
          <div className="text-[11px] text-white/40">conv. rate</div>
        </div>
      </div>
      {/* Visual funnel */}
      <div className="space-y-2 mb-5">
        {funnel.map((f, i) => (
          <div key={f.label} className="flex items-center gap-3">
            <div className="w-full rounded-md overflow-hidden bg-white/5 h-8 relative" style={{ maxWidth: `${f.pct}%`, minWidth: 120 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 flex items-center px-3">
                <span className="text-[11px] text-white/70">{f.label}</span>
              </div>
            </div>
            <span className="text-[13px] font-medium whitespace-nowrap">{f.value}</span>
          </div>
        ))}
      </div>
      {/* Before / After comparison */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/5 rounded-lg p-3 text-center">
          <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Pre</div>
          <div className="text-[20px] font-bold text-white/40">1.2%</div>
          <div className="text-[10px] text-white/30">149 kupovina</div>
        </div>
        <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
          <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Posle</div>
          <div className="text-[20px] font-bold">4.8%</div>
          <div className="text-[10px] text-white/50">599 kupovina</div>
        </div>
      </div>
      {/* Bottom */}
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
        <span className="text-[11px] text-white/40">A/B testirano 30 dana</span>
        <span className="text-[11px] font-medium text-white/70 bg-white/10 px-2.5 py-1 rounded-full">+300% poboljšanje</span>
      </div>
    </div>
  )
}

const features = [
  { title: 'Digitalni Marketing i Oglašavanje', text: 'Potrošili smo stotine hiljada eura na usavršavanje sistema za akviziciju klijenata i otkrivanje šta radi na tržištu. Naša jedina želja je da drastično smanjimo količinu vremena koja je potrebna da probijete platoe rasta koji su pred vama.', mockup: 'ads', layout: 'text-left' },
  { title: 'Website Design i Izrada', text: 'Svake sekunde na Googlu se obavi oko 40.000 pretraga. Pravimo sajtove koji pretvaraju posetioce u klijente. Lepo obučen, super moćan prodavac koji radi 24/7 i prodaje vaše proizvode dok vi spavate.', mockup: 'website', layout: 'text-right' },
  { title: 'Poslovno Savetovanje', text: 'Partner koji vas razume. Sa svakim klijentom vršimo reviziju ukupnog poslovanja i tražimo kočnice u biznisu. Pozicioniranje na tržištu, prodajni proces, brending, lansiranje novih proizvoda i još puno toga.', mockup: 'consulting', layout: 'text-left' },
  { title: 'CRO Optimizacija', text: 'Optimizacija stope konverzije. Koliko posetilaca se zapravo pretvori u klijente? Čak i ako platite Googlu da vas prikazuje prve, bez CRO nećete dobiti klijente koje tražite. Mi to menjamo.', mockup: 'cro', layout: 'text-right' },
]

const mockups = { ads: MockAds, website: MockWebsite, consulting: MockConsulting, cro: MockCRO }

function LogoBar() {
  return (
    <div className="flex items-center justify-around py-6 opacity-70 flex-wrap gap-y-3 gap-x-6">
      {['Grubin Showroom', 'Lilium.rs', 'NiwaChat.com', 'Platinum Tartufi', 'Medifizio', 'Focus Fizikal', 'Geodetski Biro Stambolia'].map(l => (
        <span key={l} className="text-[12px] md:text-[14px] font-medium text-ink tracking-tight whitespace-nowrap">{l}</span>
      ))}
    </div>
  )
}

export default function Features() {
  return (
    <section className="py-16 md:py-28 px-4 md:px-8 lg:px-16 bg-page">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-6"><span className="text-[13px] text-ink-2 uppercase tracking-widest">Klijenti sa kojima gradimo</span></div>
        <LogoBar />

        <Reveal as="h2" className="text-[32px] md:text-[48px] font-medium leading-[1.15] md:leading-[55.68px] tracking-[-1px] md:tracking-[-1.44px] text-ink text-center mt-12 md:mt-20 mb-6">
          Privucite pažnju. Generišite prodaju.
        </Reveal>
        <Reveal as="p" delay={100} className="text-[15px] md:text-[17px] text-ink-2 text-center mb-14 md:mb-24 max-w-[600px] mx-auto px-2">
          Kroz alate digitalnog marketinga, brending i konsalting pomažemo preduzećima da ostvare brz rast.
        </Reveal>

        <div className="space-y-16 md:space-y-28">
          {features.map((f) => {
            const Mockup = mockups[f.mockup]
            const isLeft = f.layout === 'text-left'
            return (
              <Reveal key={f.title}
                className={`grid grid-cols-1 gap-8 md:gap-16 items-end ${isLeft ? 'lg:grid-cols-[30fr_70fr]' : 'lg:grid-cols-[70fr_30fr]'}`}
              >
                {/* On mobile: always text first, mockup second */}
                <div className={`py-2 md:py-8 ${!isLeft ? 'lg:order-2' : ''}`}>
                  <h3 className="text-[24px] md:text-[30px] font-medium leading-[1.3] tracking-[-0.3px] text-ink mb-4 md:mb-5">{f.title}</h3>
                  <p className="text-[15px] md:text-[17px] font-normal leading-[26px] md:leading-[28px] tracking-[-0.17px] text-ink-2">{f.text}</p>
                </div>
                <div className={`w-full ${!isLeft ? 'lg:order-1' : ''}`}><Mockup /></div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
