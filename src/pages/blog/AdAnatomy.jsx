export default function AdAnatomy() {
  const parts = [
    { label: 'Pattern Interrupt', sub: 'Slika koja zaustavlja skrolovanje', color: '#3b82f6', icon: '👁', h: 140 },
    { label: 'Naslov sa intrigom', sub: 'Radoznalost + konkretan benefit', color: '#22c55e', icon: '🔥', h: 50 },
    { label: 'Telo oglasa', sub: 'Vrednost, specifičnost, kratke rečenice', color: '#a855f7', icon: '✍️', h: 50 },
    { label: 'Saznajte više →', sub: 'Nebitan CTA koji ne plaši', color: '#eab308', icon: '👆', h: 36 },
  ]

  return (
    <div className="my-12 md:my-20 rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%)' }}>
      <div className="px-8 py-12 md:py-16">
        <p className="text-center text-[13px] uppercase tracking-[0.15em] text-white/40 mb-3 font-medium">
          Anatomija oglasa
        </p>
        <p className="text-center text-[22px] md:text-[28px] font-bold text-white mb-12">
          Četiri elementa koji rade zajedno
        </p>

        <div className="max-w-[480px] mx-auto">
          {/* Ad card mockup */}
          <div className="rounded-xl overflow-hidden" style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)' }}>
            {parts.map((part, i) => (
              <div
                key={i}
                className="relative group"
                style={{
                  minHeight: `${part.h}px`,
                  background: `${part.color}08`,
                  borderBottom: i < parts.length - 1 ? `1px solid ${part.color}15` : 'none',
                  animation: `fadeIn 0.5s ease-out ${i * 0.15}s both`,
                }}
              >
                <div className="flex items-center gap-4 px-6 py-4 h-full">
                  <span className="text-[28px]">{part.icon}</span>
                  <div className="flex-1">
                    <p className="text-[15px] font-semibold" style={{ color: part.color }}>{part.label}</p>
                    <p className="text-[12px] text-white/40 mt-0.5">{part.sub}</p>
                  </div>
                  {/* Color accent bar on left */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: part.color }} />
                </div>
              </div>
            ))}
          </div>

          {/* Arrow + annotation */}
          <div className="text-center mt-6">
            <p className="text-[13px] text-white/40">↓ Svaki element vodi ka sledećem koraku</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
