import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
  const [status, setStatus] = useState('idle')
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
    {/* ─── One big hero with aurora + calendar window ─── */}
    <section className="relative flex flex-col items-center text-center pt-[160px] md:pt-[220px] pb-[80px] md:pb-[120px] px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 only-dark" style={{ backgroundImage: `url(${heroHomeDark})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#000000' }} />
        <div className="absolute inset-0 only-light" style={{ backgroundImage: `url(${heroHomeLight})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#ffffff' }} />
        <div className="absolute inset-x-0 z-[1]" style={{ top: '64vh', height: '52vh', backdropFilter: 'blur(68px)', WebkitBackdropFilter: 'blur(68px)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)' }} />
        <div className="absolute inset-0 z-[2] only-dark" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 46%, rgba(0,0,0,0.26) 62%, rgba(0,0,0,0.60) 76%, rgba(0,0,0,0.88) 90%, #000000 100%)' }} />
        <div className="absolute inset-0 z-[2] only-light" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 46%, rgba(255,255,255,0.30) 62%, rgba(255,255,255,0.64) 76%, rgba(255,255,255,0.90) 90%, #ffffff 100%)' }} />
      </div>

      <div className="relative z-10 w-full max-w-full overflow-hidden">
        <h1 className="hero-enter hero-enter-d1 text-[32px] md:text-[62px] font-medium leading-[1.1] md:leading-[62px] tracking-[-1px] md:tracking-[-1.86px] text-black mb-4">
          Hajde da razgovaramo
        </h1>
        <p className="hero-enter hero-enter-d2 text-[14px] md:text-[15px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.15px] text-black text-center mb-6 md:mb-8 max-w-[620px] mx-auto px-6 md:px-2">
          Zakažite besplatan poziv ili nam pošaljite poruku. Odgovaramo u roku od 24 sata.
        </p>
        <div className="hero-enter hero-enter-d3 flex items-center justify-center gap-2 flex-wrap px-2 mb-4">
          <a href="https://wa.me/381605667795" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white text-[13px] md:text-[14px] font-medium h-10 px-4 md:px-5 rounded-[40px] cursor-pointer hover:bg-[#1fb855] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Pišite nam na WhatsApp
          </a>
        </div>
        {/* Calendar window — same layout as homepage AppPreview */}
        <div className="hero-enter hero-enter-d4 mt-16 md:mt-32">
          <p className="text-[13px] md:text-[14px] text-ink-2 text-center mb-4">
            Odaberite termin koji vam odgovara. Informativni razgovor traje 15 minuta i potpuno je besplatan.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="mx-auto max-w-[1164px]"
          >
            <div className="theme-dark bg-panel rounded-[16px] border border-edge-2 overflow-hidden">
              <CalInlineEmbed />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ─── Contact form + info ─── */}
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">
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
