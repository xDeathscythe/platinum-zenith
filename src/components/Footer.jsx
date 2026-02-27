import { useState } from 'react'
import { Link } from 'react-router-dom'

const routeMap = {
  'Digitalni Marketing': '/digitalni-marketing',
  'Web Design': '/web-design',
  'CRO Optimizacija': '/cro',
  'Društvene Mreže': '/drustvene-mreze',
  'Poslovno Savetovanje': '/consulting',
  'E-Commerce': '/industrije/e-commerce',
  'SaaS': '/industrije/saas',
  'Lokalni Biznisi': '/industrije/lokalni-biznisi',
  'Startapovi': '/industrije/startapovi',
  'O nama': '/o-nama',
  'Case Studies': '/case-studies',
  'Blog': '/blog',
  'Marketing Vodič': '/blog',
  'FAQ': '/faq',
  'Uslovi korišćenja': '/uslovi-koriscenja',
  'Politika privatnosti': '/politika-privatnosti',
}

const columns = [
  [
    { title: 'Usluge', links: ['Digitalni Marketing', 'Web Design', 'CRO Optimizacija', 'Društvene Mreže', 'Poslovno Savetovanje'] },
    { title: 'Industrije', links: ['E-Commerce', 'SaaS', 'Lokalni Biznisi', 'Startapovi'] },
  ],
  [
    { title: 'Kompanija', links: ['O nama', 'Case Studies', 'Blog'] },
    { title: 'Resursi', links: ['Marketing Vodič', 'FAQ'] },
  ],
  [
    { title: 'Kontakt', links: ['aleksandar@platinumzenith.com', '+381 66 816 8929', 'Ruže Šulman 19, Zrenjanin'] },
    { title: 'Legal', links: ['Uslovi korišćenja', 'Politika privatnosti'] },
  ],
]

function NewsletterInput() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Newsletter signup', email, message: 'Newsletter prijava sa footer-a' }),
      })
      if (!res.ok) throw new Error()
      setStatus('ok')
      setEmail('')
      setTimeout(() => setStatus(null), 3000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus(null), 3000)
    }
  }

  return (
    <div>
      <p className="text-[12px] md:text-[14px] font-medium text-ink-4 mb-3 md:mb-4">Newsletter</p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Vaš email"
          required
          className="flex-1 min-w-0 h-9 px-3 text-[13px] bg-tint border border-edge-2 rounded-lg text-ink placeholder:text-ink-2 focus:outline-none focus:border-edge-3 transition-colors"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="h-9 px-4 text-[12px] font-medium bg-inv-bg text-inv-fg rounded-lg hover:bg-inv-bg-hover transition-colors cursor-pointer disabled:opacity-50 flex-shrink-0"
        >
          {status === 'sending' ? '...' : '→'}
        </button>
      </form>
      {status === 'ok' && <p className="text-[11px] text-emerald-500 mt-1.5">Prijavljeni ste!</p>}
      {status === 'error' && <p className="text-[11px] text-red-400 mt-1.5">Greška. Pokušajte ponovo.</p>}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative bg-page border-t border-edge">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 max-w-[1440px] mx-auto px-5 md:px-[70px] pt-14 md:pt-20 pb-8 md:pb-10">
        {columns.map((col, ci) => (
          <div key={ci} className={`space-y-6 ${ci === 2 ? 'col-span-2 md:col-span-1' : ''}`}>
            {col.map((section) => (
              <div key={section.title}>
                <p className="text-[12px] md:text-[14px] font-medium text-ink-4 mb-3 md:mb-4">{section.title}</p>
                <div className="space-y-1">
                  {section.links.map((link) => {
                    const route = routeMap[link]
                    if (route) {
                      return <Link key={link} to={route} className="block text-[13px] md:text-[14px] font-medium text-ink py-1 hover:underline cursor-pointer">{link}</Link>
                    }
                    if (link.includes('@')) {
                      return <a key={link} href={`mailto:${link}`} className="block text-[13px] md:text-[14px] font-medium text-ink py-1 hover:underline cursor-pointer">{link}</a>
                    }
                    if (link.startsWith('+')) {
                      return <a key={link} href={`tel:${link.replace(/\s/g, '')}`} className="block text-[13px] md:text-[14px] font-medium text-ink py-1 hover:underline cursor-pointer">{link}</a>
                    }
                    return <span key={link} className="block text-[13px] md:text-[14px] font-medium text-ink py-1">{link}</span>
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Newsletter input below columns on mobile, inline on desktop */}
        <div className="col-span-2 md:col-span-3 md:max-w-[320px]">
          <NewsletterInput />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between px-5 md:px-[70px] py-5 md:py-6 border-t border-edge max-w-[1440px] mx-auto gap-2">
        <Link to="/" className="text-[16px] md:text-[18px] font-bold text-ink tracking-tight hover:opacity-80">PLATINUM ZENITH</Link>
        <span className="text-[12px] md:text-[14px] font-medium text-ink-2">© 2024-2026 Platinum Zenith. Sva prava zadržana.</span>
      </div>
    </footer>
  )
}
