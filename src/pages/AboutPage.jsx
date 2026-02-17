import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import BottomCTA from '../components/BottomCTA'

const values = [
  { icon: '🎯', title: 'Rezultati, ne izgovori', desc: 'Merimo sve. Ako kampanja ne donosi profit — menjamo pristup, ne opravdanja.' },
  { icon: '🤝', title: 'Partnerstvo', desc: 'Nismo samo agencija. Razumemo vaš biznis iznutra i radimo kao produžetak vašeg tima.' },
  { icon: '📊', title: 'Transparentnost', desc: 'Nedeljni izveštaji, pristup svim podacima, jasna komunikacija bez skrivenih troškova.' },
  { icon: '⚡', title: 'Brzina', desc: 'Od ideje do realizacije — brzo, efikasno, bez nepotrebnog odugovlačenja.' },
]

const milestones = [
  { year: '2024', title: 'Osnivanje', desc: 'Platinum Zenith je osnovan sa misijom da pruži predvidljiv rast preduzećima u Srbiji.' },
  { year: '2024', title: 'Zenith sistem', desc: 'Razvoj proprietary sistema za akviziciju klijenata koji dramatično povećava konverzije.' },
  { year: '2025', title: 'Širenje usluga', desc: 'Dodajemo web design, CRO i consulting u portfolio. Tim raste na 5+ članova.' },
  { year: '2026', title: 'AI integracije', desc: 'Implementiramo AI alate za automatizaciju marketinga i personalizovanu komunikaciju.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[160px] pb-20 px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-[800px] mx-auto">
          <span className="text-[13px] text-white/30 uppercase tracking-widest mb-4 block">O Nama</span>
          <h1 className="text-[56px] font-medium leading-[1.1] tracking-[-1.5px] text-white mb-6">
            Agencija koja raste zajedno sa vama
          </h1>
          <p className="text-[17px] text-white/50 leading-[28px] max-w-[600px] mx-auto">
            Platinum Zenith je digitalna agencija iz Zrenjanina koja pomaže preduzećima da privuku više klijenata kroz dokazane sisteme marketinga, dizajna i poslovnog savetovanja.
          </p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="py-16 px-8">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-[36px] font-medium text-white mb-5">Naša misija</h2>
            <p className="text-[17px] text-white/60 leading-[28px] mb-4">
              Previše preduzeća baca novac na marketing koji ne radi. Nekompetentne agencije obećavaju, a ne isporučuju.
            </p>
            <p className="text-[17px] text-white/60 leading-[28px]">
              Mi smo tu da to promenimo. Svaka kampanja, svaki sajt, svaki savet — mora doneti merljiv rezultat. Ako ne radi, menjamo dok ne proradi.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white/[0.03] rounded-[11px] p-8 border border-white/[0.06]">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-[36px] font-bold text-white">50+</div>
                <div className="text-[13px] text-white/40 mt-1">Klijenata</div>
              </div>
              <div className="text-center">
                <div className="text-[36px] font-bold text-white">3.8x</div>
                <div className="text-[13px] text-white/40 mt-1">Prosečan ROAS</div>
              </div>
              <div className="text-center">
                <div className="text-[36px] font-bold text-white">+280%</div>
                <div className="text-[13px] text-white/40 mt-1">Rast konverzija</div>
              </div>
              <div className="text-center">
                <div className="text-[36px] font-bold text-white">97%</div>
                <div className="text-[13px] text-white/40 mt-1">Zadovoljstvo</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[48px] font-medium tracking-[-1.44px] text-white text-center mb-4">Naše vrednosti</h2>
          <p className="text-[17px] text-white/40 text-center mb-16 max-w-[500px] mx-auto">Ono u šta verujemo i kako radimo svaki dan.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/[0.04] rounded-[11px] p-6 text-center border border-white/[0.04]">
                <span className="text-3xl block mb-3">{v.icon}</span>
                <h3 className="text-[18px] font-medium text-white mb-2">{v.title}</h3>
                <p className="text-[14px] text-white/45 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-8">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-[36px] font-medium text-white text-center mb-16">Naš put</h2>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div key={m.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-[12px] text-white/50 font-bold">{m.year}</span>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-medium text-white mb-1">{m.title}</h3>
                    <p className="text-[15px] text-white/45 leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
