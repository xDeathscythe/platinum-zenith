import { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', path: '/log/dashboard', icon: '📊' },
  { label: 'Prijave', path: '/log/prijave', icon: '📋' },
  { label: 'Poruke', path: '/log/poruke', icon: '💬' },
  { label: 'Newsletter', path: '/log/newsletter', icon: '📧' },
  { label: 'Email Log', path: '/log/emails', icon: '📤' },
]

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const token = localStorage.getItem('pz_token')
    if (!token) navigate('/log')
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('pz_token')
    navigate('/log')
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-screen bg-[#111] border-r border-white/[0.06] transition-all duration-300 z-50 ${sidebarOpen ? 'w-[220px]' : 'w-[60px]'}`}>
        <div className="flex items-center justify-between h-14 px-4 border-b border-white/[0.06]">
          {sidebarOpen && <span className="text-[14px] font-bold tracking-tight">PZ Admin</span>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="w-7 h-7 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>

        <nav className="p-2 space-y-0.5 mt-2">
          {navItems.map((item) => {
            const active = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-colors ${
                  active ? 'bg-white/[0.08] text-white' : 'text-white/50 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span className="text-[16px]">{item.icon}</span>
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-2 border-t border-white/[0.06]">
          <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[12px] text-white/30 hover:text-white/60 transition-colors">
            <span>🌐</span>
            {sidebarOpen && <span>Nazad na sajt</span>}
          </Link>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[12px] text-white/30 hover:text-red-400 transition-colors cursor-pointer">
            <span>🚪</span>
            {sidebarOpen && <span>Odjavi se</span>}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-[220px]' : 'ml-[60px]'}`}>
        <div className="p-6 md:p-8 max-w-[1200px]">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
