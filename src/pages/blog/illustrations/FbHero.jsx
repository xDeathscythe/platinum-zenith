export default function FbHero() {
  return (
    <div className="my-12 md:my-20 rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 40%, #2d1b4e 70%, #1a1a3e 100%)' }}>
      <div className="relative px-8 py-16 md:py-24 flex flex-col items-center text-center">
        {/* Decorative circles */}
        <div className="absolute top-8 left-8 w-32 h-32 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
        <div className="absolute bottom-12 right-12 w-48 h-48 rounded-full opacity-8" style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />
        
        {/* Phone mockup */}
        <div className="relative w-[220px] md:w-[280px] mb-8">
          <svg viewBox="0 0 280 480" className="w-full drop-shadow-2xl">
            {/* Phone body */}
            <rect x="10" y="10" width="260" height="460" rx="36" fill="#111" stroke="#333" strokeWidth="2" />
            <rect x="20" y="50" width="240" height="390" rx="4" fill="#1a1a2e" />
            
            {/* Status bar */}
            <rect x="20" y="20" width="240" height="30" rx="4" fill="#111" />
            <circle cx="140" cy="30" r="4" fill="#333" />
            
            {/* Feed items */}
            {/* Post 1 - boring ad (dimmed) */}
            <rect x="30" y="60" width="220" height="90" rx="8" fill="#222238" opacity="0.5" />
            <rect x="40" y="70" width="80" height="8" rx="4" fill="#444" />
            <rect x="40" y="84" width="200" height="6" rx="3" fill="#333" />
            <rect x="40" y="96" width="160" height="6" rx="3" fill="#333" />
            <rect x="40" y="112" width="200" height="28" rx="6" fill="#2a2a40" />
            <text x="140" y="130" textAnchor="middle" fill="#555" fontSize="8">Kupite odmah</text>
            
            {/* Post 2 - HIGHLIGHTED (the good ad) */}
            <rect x="30" y="165" width="220" height="130" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
            <g>
              {/* Breaking news badge */}
              <rect x="38" y="173" width="82" height="18" rx="4" fill="#ef4444" />
              <text x="79" y="185" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">BREAKING NEWS</text>
              
              {/* Headline */}
              <text x="42" y="206" fill="#e2e8f0" fontSize="9" fontWeight="600">Vlasnik firme otkrio trik</text>
              <text x="42" y="218" fill="#e2e8f0" fontSize="9" fontWeight="600">za 3x više klijenata</text>
              
              {/* Image placeholder */}
              <rect x="38" y="228" width="204" height="50" rx="6" fill="rgba(59,130,246,0.15)" />
              <text x="140" y="258" textAnchor="middle" fill="#3b82f6" fontSize="20">📊</text>
            </g>
            {/* Glow effect */}
            <rect x="28" y="163" width="224" height="134" rx="10" fill="none" stroke="#3b82f680" strokeWidth="1" filter="url(#glow)" />
            
            {/* Post 3 - another boring one */}
            <rect x="30" y="310" width="220" height="80" rx="8" fill="#222238" opacity="0.4" />
            <rect x="40" y="320" width="120" height="8" rx="4" fill="#444" />
            <rect x="40" y="334" width="200" height="6" rx="3" fill="#333" />
            <rect x="40" y="346" width="180" height="6" rx="3" fill="#333" />

            {/* Scroll indicator */}
            <rect x="248" y="70" width="3" height="40" rx="2" fill="#3b82f640" />
            
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>

        <p className="text-[14px] md:text-[16px] text-white/50 max-w-[400px] leading-relaxed">
          U moru dosadnih oglasa, jedan zaustavlja skrolovanje. Razlika nije u budžetu. Razlika je u psihologiji.
        </p>
      </div>
    </div>
  )
}
