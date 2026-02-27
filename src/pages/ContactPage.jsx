import { motion } from 'framer-motion'
import { useState } from 'react'

const heroHomeDark = `${import.meta.env.BASE_URL}hero-home-dark.webp`
const heroHomeLight = `${import.meta.env.BASE_URL}hero-home-light.webp`

const CAL_LINK = 'platinumzenith/info'
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/aleksandar@platinumzenith.com'

function CalInlineEmbed() {
  return (
    <div className="w-full overflow-hidden rounded-[16px] bg-[#111] border border-white/10">
      <iframe
        src={`https://cal.com/${CAL_LINK}?embed=true&layout=month_view&theme=dark`}
        className="w-full border-0 bg-[#111] rounded-[16px]"
        style={{ height: 660 }}
        title="Zakažite razgovor"
      />
    </div>
  )
}

export default function ContactPage() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          _subject: `Nova poruka sa sajta: ${formData.name}${formData.company ? ` (${formData.company})` : ''}`,
          _template: 'table',
        }),
      })

      if (res.ok) {
        setStatus('sent')
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }))

  return (
    <>
    <section className="relative flex flex-col items-center text-center pt-[160px] md:pt-[220px] pb-[40px] px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 only-dark" style={{ backgroundImage: `url(${heroHomeDark})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#000000' }} />
        <div className="absolute inset-0 only-light" style={{ backgroundImage: `url(${heroHomeLight})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#ffffff' }} />
        <div className="absolute inset-x-0 z-[1]" style={{ top: '55%', height: '45%', backdropFilter: 'blur(68px)', WebkitBackdropFilter: 'blur(68px)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)' }} />
        <div className="absolute inset-0 z-[2] only-dark" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.30) 58%, rgba(0,0,0,0.70) 74%, #000000 92%)' }} />
        <div className="absolute inset-0 z-[2] only-light" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,0.35) 58%, rgba(255,255,255,0.75) 74%, #ffffff 92%)' }} />
      </div>
      <div className="relative z-10 w-full max-w-[800px] mx-auto">
        <h1 className="hero-enter hero-enter-d1 text-[32px] md:text-[62px] font-medium leading-[1.1] md:leading-[62px] tracking-[-1px] md:tracking-[-1.86px] text-black mb-4">
          Hajde da razgovaramo
        </h1>
        <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center max-w-[580px] mx-auto px-6 md:px-2">
          Zakažite besplatan poziv ili nam pošaljite poruku. Odgovaramo u roku od 24 sata.
        </p>
      </div>
    </section>

    <section className="pb-16 md:pb-20 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[17px] text-ink-2 leading-[28px] max-w-[540px] mx-auto">
            Odaberite termin koji vam odgovara. Informativni razgovor traje 15 minuta i potpuno je besplatan.
          </p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-20">
          <CalInlineEmbed />
        </motion.div>

        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-edge-2" />
          <span className="text-[13px] text-ink-4 uppercase tracking-widest">ili pošaljite poruku</span>
          <div className="flex-1 h-px bg-edge-2" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-8">
            <div>
              <div className="text-[13px] text-ink-2 uppercase tracking-wider mb-2">Email</div>
              <a href="mailto:aleksandar@platinumzenith.com" className="text-[20px] text-ink hover:underline">aleksandar@platinumzenith.com</a>
            </div>
            <div>
              <div className="text-[13px] text-ink-2 uppercase tracking-wider mb-2">Telefon</div>
              <a href="tel:+381691234567" className="text-[20px] text-ink hover:underline">+381 69 123 4567</a>
            </div>
            <div>
              <div className="text-[13px] text-ink-2 uppercase tracking-wider mb-2">Adresa</div>
              <p className="text-[20px] text-ink">Ruže Šulman 19<br />Zrenjanin, Srbija</p>
            </div>
            <div>
              <div className="text-[13px] text-ink-2 uppercase tracking-wider mb-2">Radno vreme</div>
              <p className="text-[17px] text-ink-3">Pon — Pet: 09:00 — 18:00</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            {status === 'sent' ? (
              <div className="bg-emerald-400/10 border border-emerald-400/20 rounded-[11px] p-10 text-center">
                <span className="text-4xl mb-4 block">✓</span>
                <h3 className="text-[22px] text-ink font-medium mb-2">Poruka poslata!</h3>
                <p className="text-[15px] text-ink-2">Odgovorićemo vam u roku od 24h.</p>
                <button onClick={() => setStatus('idle')} className="mt-4 text-[14px] text-ink-4 hover:text-ink cursor-pointer">
                  Pošaljite još jednu →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[13px] text-ink-2 block mb-1.5">Ime i prezime *</label>
                  <input type="text" required value={formData.name} onChange={handleChange('name')}
                    className="w-full bg-tint border border-edge-2 rounded-[11px] px-4 py-3 text-ink text-[15px] focus:outline-none focus:border-edge" />
                </div>
                <div>
                  <label className="text-[13px] text-ink-2 block mb-1.5">Email *</label>
                  <input type="email" required value={formData.email} onChange={handleChange('email')}
                    className="w-full bg-tint border border-edge-2 rounded-[11px] px-4 py-3 text-ink text-[15px] focus:outline-none focus:border-edge" />
                </div>
                <div>
                  <label className="text-[13px] text-ink-2 block mb-1.5">Kompanija</label>
                  <input type="text" value={formData.company} onChange={handleChange('company')}
                    className="w-full bg-tint border border-edge-2 rounded-[11px] px-4 py-3 text-ink text-[15px] focus:outline-none focus:border-edge" />
                </div>
                <div>
                  <label className="text-[13px] text-ink-2 block mb-1.5">Poruka *</label>
                  <textarea rows={4} required value={formData.message} onChange={handleChange('message')}
                    className="w-full bg-tint border border-edge-2 rounded-[11px] px-4 py-3 text-ink text-[15px] focus:outline-none focus:border-edge resize-none" />
                </div>

                {status === 'error' && (
                  <p className="text-[14px] text-red-400">Greška pri slanju. Pokušajte ponovo ili nas kontaktirajte na email.</p>
                )}

                <button type="submit" disabled={status === 'sending'}
                  className="w-full bg-inv-bg text-inv-fg text-[14px] font-medium h-12 rounded-[40px] cursor-pointer hover:bg-inv-bg-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === 'sending' ? 'Šaljem...' : 'Pošaljite poruku →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
    </>
  )
}
