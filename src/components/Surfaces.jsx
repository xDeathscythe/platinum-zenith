import { motion } from 'framer-motion'

const surfaces = [
  {
    title: 'Zenith Sistem Akvizicije',
    desc: 'Automatizovan sistem koji dovodi kvalifikovane prospekte direktno u vaš biznis.',
    icon: '⚡',
    bg: 'from-teal-600/20 to-blue-600/20',
  },
  {
    title: 'Prodajni Funneli',
    desc: 'Od prvog kontakta do kupovine — optimizovani funneli za maksimalnu konverziju.',
    icon: '🎯',
    bg: 'from-purple-600/20 to-pink-600/20',
  },
  {
    title: 'Brending & Identitet',
    desc: 'Vizuelni identitet koji vas izdvaja od konkurencije i gradi poverenje.',
    icon: '✨',
    bg: 'from-amber-600/20 to-orange-600/20',
  },
]

export default function Surfaces() {
  return (
    <section className="py-14 md:py-20 px-4 md:px-8 text-center bg-black">
      <div className="max-w-[1360px] mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-[28px] md:text-[48px] font-medium leading-[1.15] md:leading-[55.68px] tracking-[-0.8px] md:tracking-[-1.44px] text-white mb-4"
        >
          Zenith sistem čini vođenje biznisa lakšim
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-[15px] md:text-[17px] text-white/50 leading-[24px] md:leading-[28px] tracking-[-0.17px] mb-10 md:mb-12 max-w-[550px] mx-auto px-2"
        >
          Sigurnijim, predvidljivijim i manje stresnim.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5">
          {surfaces.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white/[0.06] rounded-[11px] overflow-hidden text-left"
            >
              <div className={`h-[200px] bg-gradient-to-br ${s.bg} flex items-center justify-center`}>
                <span className="text-6xl">{s.icon}</span>
              </div>
              <div className="p-6">
                <h3 className="text-[22px] font-medium text-white mb-2">{s.title}</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
