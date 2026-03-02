import { useState, useEffect, useRef } from 'react'
import { Search, X, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Početna', path: '/' },
  { label: 'Web Design', path: '/web-design' },
  { label: 'Digitalni Marketing', path: '/digitalni-marketing' },
  { label: 'Consulting', path: '/consulting' },
  { label: 'CRO', path: '/cro' },
  { label: 'O Nama', path: '/o-nama' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Kontakt', path: '/kontakt' },
]

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const goingDown = y > lastY.current
      const atTop = y < 20

      if (atTop) { setVisible(true); setScrolled(false) }
      else if (goingDown && y > 80) { setVisible(false); setScrolled(true) }
      else if (!goingDown) { setVisible(true); setScrolled(true) }

      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 md:px-8 py-3 transition-all duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'} ${scrolled ? 'bg-page/80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="flex items-center gap-1 md:gap-1.5 flex-shrink-0">
          <Link to="/" className="cursor-pointer flex items-center leading-none md:-mr-5">
            <img src={`${import.meta.env.BASE_URL}pz-logo.svg`} alt="Platinum Zenith" className="block h-[58px] md:h-[70px] w-auto logo-adaptive" width={200} height={77} style={{ aspectRatio: '200/77' }} loading="eager" fetchPriority="high" decoding="sync" />
          </Link>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center cursor-pointer text-ink-4 hover:text-ink transition-colors" aria-label="Otvori meni">
            {sidebarOpen ? <X className="w-4 h-4" /> : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="1" y="1" width="16" height="16" rx="3" /><line x1="7" y1="1" x2="7" y2="17" /></svg>
            )}
          </button>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link to="/kontakt" className="text-[12px] md:text-[14px] font-medium text-inv-fg bg-inv-bg hover:bg-inv-bg-hover h-8 md:h-10 px-3 md:px-5 rounded-[40px] inline-flex items-center transition-colors cursor-pointer">
            <span className="hidden md:inline">Zakažite Konsultacije</span>
            <span className="md:hidden">Kontakt</span>
          </Link>
        </div>
      </header>

      {/* Mobile overlay backdrop */}
      <div
        className={`fixed inset-0 z-[85] bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
      />

      <div className={`fixed top-0 left-0 z-[90] w-[260px] h-screen bg-page border-r border-edge-2 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-[90px] flex-shrink-0" />
        <nav className="flex-1 p-4 space-y-0.5 overflow-y-auto">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.path} onClick={() => setSidebarOpen(false)} className="flex items-center justify-between text-[14px] font-medium text-ink-3 hover:text-ink px-3 py-2.5 rounded-lg hover:bg-tint transition-colors cursor-pointer">
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
