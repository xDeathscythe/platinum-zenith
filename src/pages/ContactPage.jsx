import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  return (
    <section className="pt-[120px] md:pt-[160px] pb-16 md:pb-20 px-4 md:px-8">
      <div className="max-w-[1000px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="text-[13px] text-white/30 uppercase tracking-widest mb-4 block">Kontakt</span>
          <h1 className="text-[36px] md:text-[56px] font-medium leading-[1.1] tracking-[-1px] md:tracking-[-1.5px] text-white mb-6">
            Javite se!
          </h1>
          <p className="text-[17px] text-white/50 leading-[28px] max-w-[500px] mx-auto">
            Pustite poruku ili zakažite besplatan poziv. Odgovaramo u roku od 24h.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-8">
            <div>
              <div className="text-[13px] text-white/30 uppercase tracking-wider mb-2">Email</div>
              <a href="mailto:service@platinumzenith.com" className="text-[20px] text-white hover:underline">service@platinumzenith.com</a>
            </div>
            <div>
              <div className="text-[13px] text-white/30 uppercase tracking-wider mb-2">Adresa</div>
              <p className="text-[20px] text-white">Ruže Šulman 19<br />Zrenjanin, Srbija</p>
            </div>
            <div>
              <div className="text-[13px] text-white/30 uppercase tracking-wider mb-2">Radno vreme</div>
              <p className="text-[17px] text-white/60">Pon — Pet: 09:00 — 18:00</p>
            </div>

            <div className="pt-4">
              <a href="mailto:service@platinumzenith.com" className="inline-flex items-center gap-2 bg-white text-black text-[14px] font-medium h-10 px-5 rounded-[40px] hover:bg-white/90 transition-colors">
                Zakažite Besplatan Poziv →
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            {sent ? (
              <div className="bg-emerald-400/10 border border-emerald-400/20 rounded-[11px] p-10 text-center">
                <span className="text-4xl mb-4 block">✓</span>
                <h3 className="text-[22px] text-white font-medium mb-2">Poruka poslata!</h3>
                <p className="text-[15px] text-white/50">Odgovorićemo vam u roku od 24h.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-4">
                <div>
                  <label className="text-[13px] text-white/40 block mb-1.5">Ime i prezime</label>
                  <input type="text" required className="w-full bg-white/[0.04] border border-white/[0.08] rounded-[11px] px-4 py-3 text-white text-[15px] focus:outline-none focus:border-white/20" />
                </div>
                <div>
                  <label className="text-[13px] text-white/40 block mb-1.5">Email</label>
                  <input type="email" required className="w-full bg-white/[0.04] border border-white/[0.08] rounded-[11px] px-4 py-3 text-white text-[15px] focus:outline-none focus:border-white/20" />
                </div>
                <div>
                  <label className="text-[13px] text-white/40 block mb-1.5">Kompanija</label>
                  <input type="text" className="w-full bg-white/[0.04] border border-white/[0.08] rounded-[11px] px-4 py-3 text-white text-[15px] focus:outline-none focus:border-white/20" />
                </div>
                <div>
                  <label className="text-[13px] text-white/40 block mb-1.5">Poruka</label>
                  <textarea rows={4} required className="w-full bg-white/[0.04] border border-white/[0.08] rounded-[11px] px-4 py-3 text-white text-[15px] focus:outline-none focus:border-white/20 resize-none" />
                </div>
                <button type="submit" className="w-full bg-white text-black text-[14px] font-medium h-12 rounded-[40px] cursor-pointer hover:bg-white/90 transition-colors">
                  Pošaljite poruku →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
