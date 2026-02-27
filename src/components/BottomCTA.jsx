import { Link } from 'react-router-dom'
import Reveal from './Reveal'
const auroraBg = `${import.meta.env.BASE_URL}aurora-bg.jpg`

export default function BottomCTA() {
  return (
    <section className="relative pt-[120px] pb-[175px] md:py-[180px] px-4 md:px-8 text-center bg-page">
      {/* Inner container — overflow hidden keeps background contained */}
      <div className="absolute inset-0 overflow-hidden">
        {/* LIGHT THEME background */}
        <div
          className="absolute inset-0 only-light"
          style={{
            background: `
              radial-gradient(ellipse 120% 70% at 50% 35%, rgba(125,165,255,0.30) 0%, rgba(170,190,255,0.18) 30%, rgba(255,255,255,0.0) 65%),
              radial-gradient(ellipse 90% 55% at 35% 40%, rgba(200,215,255,0.22) 0%, transparent 60%),
              radial-gradient(ellipse 90% 55% at 65% 40%, rgba(165,185,255,0.20) 0%, transparent 60%),
              linear-gradient(to bottom, #ffffff 0%, #f6f7fb 35%, #ffffff 100%)
            `,
          }}
        />

        {/* DARK THEME background (original aurora) */}
        <div className="absolute inset-0 only-dark">
          {/* MOBILE: CSS gradient aurora matching original image colors */}
          <div className="absolute inset-0 md:hidden"
            style={{
              background: `
                radial-gradient(ellipse 130% 60% at 50% 40%, rgba(181,196,253,0.55) 0%, rgba(142,159,246,0.4) 20%, rgba(101,110,249,0.3) 40%, transparent 65%),
                radial-gradient(ellipse 80% 45% at 35% 42%, rgba(159,188,255,0.35) 0%, transparent 55%),
                radial-gradient(ellipse 80% 45% at 65% 42%, rgba(101,110,249,0.35) 0%, transparent 55%),
                radial-gradient(ellipse 60% 30% at 50% 38%, rgba(212,221,254,0.2) 0%, transparent 50%),
                linear-gradient(to bottom, #050510 0%, #0a0a20 25%, #0a0a1a 60%, #000 100%)
              `,
            }}
          />

          {/* DESKTOP: original aurora image */}
          <div className="absolute inset-0 hidden md:block"
            style={{
              backgroundImage: `url(${auroraBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#1a1a4a',
            }}
          />

          {/* Blue glow boost */}
          <div className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(80,120,255,0.35) 0%, rgba(100,80,255,0.2) 30%, transparent 65%)',
            }}
          />

          {/* Top fade: black → transparent */}
          <div className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0.85) 10%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.15) 40%, transparent 55%)',
            }}
          />

          {/* Bottom fade: smooth to black */}
          <div className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.1) 58%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0.55) 72%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0.95) 88%, #000000 95%)',
            }}
          />

          {/* Side fades */}
          <div className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 10%, transparent 90%, rgba(0,0,0,0.3) 100%)',
            }}
          />
        </div>
      </div>

      <div className="relative z-10">
        <Reveal as="h2" delay={0}
          className="text-[30px] md:text-[48px] font-medium leading-[1.15] md:leading-[55.68px] tracking-[-1px] md:tracking-[-1.44px] text-ink mb-4"
        >
          Želite slične rezultate?
        </Reveal>
        <Reveal as="p" delay={120}
          className="text-[15px] md:text-[17px] text-ink-2 leading-[24px] md:leading-[28px] tracking-[-0.17px] mb-8 max-w-[520px] mx-auto px-2"
        >
          Počinjemo besplatnom analizom vašeg biznisa. Bez obaveza.
        </Reveal>
        <Reveal as="div" delay={220}
          className="flex items-center justify-center"
        >
          <Link to="/kontakt" className="inline-flex items-center gap-1.5 bg-inv-bg text-inv-fg text-[14px] font-medium h-10 px-5 rounded-[40px] cursor-pointer hover:bg-inv-bg-hover transition-colors">
            Zakažite Bersplatne Konsultacije
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
