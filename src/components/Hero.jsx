import { Link } from 'react-router-dom'
import AppPreview from './AppPreview'
const heroHomeDark = `${import.meta.env.BASE_URL}hero-home-dark.webp`
const heroHomeLight = `${import.meta.env.BASE_URL}hero-home-light.webp`

/* ─── Hero ────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center text-center pt-[160px] md:pt-[220px] pb-[60px] px-4 md:px-8 overflow-hidden">
      {/* Aurora bg with CSS-only fade */}
      <div className="absolute inset-0 z-0">
        {/* DARK bg */}
        <div className="absolute inset-0 only-dark"
          style={{
            backgroundImage: `url(${heroHomeDark})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundColor: '#000000',
          }}
        />
        {/* LIGHT bg */}
        <div className="absolute inset-0 only-light"
          style={{
            backgroundImage: `url(${heroHomeLight})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundColor: '#ffffff',
          }}
        />

        {/* Transition boost band (extra aggressive) */}
        <div className="absolute inset-x-0 z-[1]"
          style={{
            top: '64vh',
            height: '52vh',
            backdropFilter: 'blur(68px)',
            WebkitBackdropFilter: 'blur(68px)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)',
          }}
        />

        {/* Stronger mode-specific fade overlays */}
        <div className="absolute inset-0 z-[2] only-dark"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 46%, rgba(0,0,0,0.26) 62%, rgba(0,0,0,0.60) 76%, rgba(0,0,0,0.88) 90%, #000000 100%)',
          }}
        />
        <div className="absolute inset-0 z-[2] only-light"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0) 46%, rgba(255,255,255,0.30) 62%, rgba(255,255,255,0.64) 76%, rgba(255,255,255,0.90) 90%, #ffffff 100%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-full overflow-hidden">
        {/* H1 */}
        <h1 className="hero-enter hero-enter-d1 text-[32px] md:text-[62px] font-medium leading-[1.1] md:leading-[62px] tracking-[-1px] md:tracking-[-1.86px] text-black mb-4">
          Upoznajte agenciju koja garantuje<br className="hidden md:inline" /> profitabilan marketing ili<br className="hidden md:inline" /> odbija honorar!
        </h1>

        {/* Subtitle */}
        <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center mb-6 md:mb-8 max-w-[620px] mx-auto px-6 md:px-2">
          Privucite pažnju i generišite prodaju na lak, siguran i predvidljiv način
        </p>

        {/* Buttons */}
        <div className="hero-enter hero-enter-d3 flex items-center justify-center gap-2 flex-wrap px-2">
          <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/80 transition-colors">
            Zakažite Konsultacije
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link to="/digitalni-marketing" className="inline-flex items-center bg-black/[0.04] text-black text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-black/[0.08] transition-colors">
            Pogledajte usluge
          </Link>
        </div>

        {/* App preview */}
        <div className="hero-enter hero-enter-d4 mt-16 md:mt-32">
          <AppPreview />
        </div>
      </div>
    </section>
  )
}
