import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const surfaces = [
  { title: 'Zenith Sistem Akvizicije', desc: 'Automatizovan sistem koji dovodi kvalifikovane prospekte direktno u vaš biznis. Predvidljivo, merljivo, bez nagađanja.', link: '/digitalni-marketing' },
  { title: 'Prodajni Funneli', desc: 'Od prvog kontakta do kupovine. Svaki korak dizajniran da vodi prospekta ka odluci.', link: '/cro' },
  { title: 'Brending & Identitet', desc: 'Vizuelni identitet koji gradi poverenje pre nego što kažete reč. Jer prvi utisak se ne ponavlja.', link: '/web-design' },
]

export default function Surfaces() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-page">
      <div className="max-w-[1200px] mx-auto">
        <Reveal className="mb-14">
          <h2 className="text-[32px] md:text-[48px] font-medium leading-[1.15] tracking-[-1.5px] text-ink mb-4">
            Zenith sistem čini vođenje biznisa lakšim
          </h2>
          <p className="text-[16px] md:text-[18px] text-ink-3 max-w-[550px]">
            Sigurnijim, predvidljivijim i manje stresnim.
          </p>
        </Reveal>

        <Reveal type="stagger" className="grid md:grid-cols-3 gap-4">
          {surfaces.map((s, i) => (
            <Link key={s.title} to={s.link}
              className="group bg-panel rounded-[16px] p-8 pb-10 border border-edge-2 hover:border-white/[0.12] transition-all relative overflow-hidden">
              <span className="text-[13px] text-ink/25 font-medium tracking-wider block mb-8">0{i + 1}</span>
              <h3 className="text-[22px] md:text-[24px] font-medium text-ink mb-3 group-hover:text-ink/90 transition-colors">{s.title}</h3>
              <p className="text-[15px] text-ink-4 leading-relaxed mb-8">{s.desc}</p>
              <span className="text-[14px] text-ink-4 group-hover:text-ink-3 transition-colors inline-flex items-center gap-1.5">
                Saznajte više
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
