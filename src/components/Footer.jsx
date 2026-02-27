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
    { title: 'Resursi', links: ['Marketing Vodič', 'FAQ', 'Newsletter'] },
  ],
  [
    { title: 'Kontakt', links: ['aleksandar@platinumzenith.com', '+381 69 123 4567', 'Ruže Šulman 19, Zrenjanin'] },
    { title: 'Legal', links: ['Uslovi korišćenja', 'Politika privatnosti'] },
  ],
]

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
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between px-5 md:px-[70px] py-5 md:py-6 border-t border-edge max-w-[1440px] mx-auto gap-2">
        <Link to="/" className="text-[16px] md:text-[18px] font-bold text-ink tracking-tight hover:opacity-80">PLATINUM ZENITH</Link>
        <span className="text-[12px] md:text-[14px] font-medium text-ink-2">© 2024-2026 Platinum Zenith. Sva prava zadržana.</span>
      </div>
    </footer>
  )
}
