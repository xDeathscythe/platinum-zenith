import { useState, useEffect, useRef } from 'react'

const CAL_LINK = 'platinumzenith/info'

export default function CalFloatingButton() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (open) {
      setVisible(true)
    } else if (visible) {
      timerRef.current = setTimeout(() => setVisible(false), 250)
    }
    return () => clearTimeout(timerRef.current)
  }, [open])

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[200] bg-inv-bg text-inv-fg text-[14px] font-medium h-12 px-5 rounded-[40px] shadow-lg shadow-black/25 cursor-pointer hover:scale-105 active:scale-95 transition-transform flex items-center gap-2.5"
        aria-label="Zakažite razgovor"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span className="hidden sm:inline">Zakažite razgovor</span>
      </button>

      {/* Full-screen overlay with iframe — CSS transitions only */}
      {visible && (
        <div
          className="fixed inset-0 z-[9999] transition-opacity duration-200"
          style={{ opacity: open ? 1 : 0 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />

          {/* Close button */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Zatvorite kalendar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* iframe container */}
          <div
            className="absolute inset-4 md:inset-8 lg:inset-12 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ opacity: open ? 1 : 0, transform: open ? 'translateY(0)' : 'translateY(30px)' }}
          >
            <iframe
              src={`https://cal.com/${CAL_LINK}?embed=true&layout=month_view&theme=dark`}
              className="w-full h-full border-0 bg-[#111] rounded-2xl"
              title="Zakažite razgovor"
            />
          </div>
        </div>
      )}
    </>
  )
}
