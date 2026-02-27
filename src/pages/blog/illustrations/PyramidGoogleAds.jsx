export default function PyramidGoogleAds() {
  return (
    <div className="my-12 md:my-20 rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%)' }}>
      <div className="px-6 py-12 md:px-8 md:py-16">
        <p className="text-center text-[12px] uppercase tracking-[0.15em] text-white/40 mb-3 font-medium">
          Problem sa klasičnim pristupom
        </p>
        <p className="text-center text-[20px] md:text-[26px] font-bold text-white mb-10">
          Isti budžet, ista publika, isti rezultati
        </p>

        <div className="max-w-[500px] mx-auto">
          {/* Venn diagram */}
          <div className="mb-8">
            <svg viewBox="0 0 360 170" className="w-full">
              {/* Three overlapping circles */}
              <circle cx="125" cy="85" r="55" fill="rgba(239,68,68,0.08)" stroke="#ef4444" strokeWidth="1" opacity="0.6" />
              <circle cx="180" cy="85" r="55" fill="rgba(245,158,11,0.08)" stroke="#f59e0b" strokeWidth="1" opacity="0.6" />
              <circle cx="235" cy="85" r="55" fill="rgba(139,92,246,0.08)" stroke="#8b5cf6" strokeWidth="1" opacity="0.6" />

              {/* Labels outside circles */}
              <text x="85" y="30" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="500" opacity="0.7">Google Ads</text>
              <text x="180" y="22" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="500" opacity="0.7">SEO</text>
              <text x="280" y="30" textAnchor="middle" fill="#8b5cf6" fontSize="11" fontWeight="500" opacity="0.7">Kontakt forma</text>

              {/* Center overlap */}
              <circle cx="180" cy="85" r="20" fill="rgba(255,255,255,0.06)" stroke="#fff" strokeWidth="1.5" strokeDasharray="4 2" />
              <text x="180" y="83" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">3%</text>
              <text x="180" y="96" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">ista grupa</text>

              {/* Connecting lines from labels to circles */}
              <line x1="85" y1="33" x2="100" y2="50" stroke="#ef444440" strokeWidth="0.5" />
              <line x1="180" y1="25" x2="180" y2="42" stroke="#f59e0b40" strokeWidth="0.5" />
              <line x1="275" y1="33" x2="258" y2="50" stroke="#8b5cf640" strokeWidth="0.5" />
            </svg>
          </div>

          {/* Stats row - smaller font, no overflow */}
          <div className="grid grid-cols-3 gap-2 md:gap-3 text-center">
            {[
              { label: 'Cena po kliku', value: 'Raste', icon: '↑', color: '#ef4444' },
              { label: 'Broj kupaca', value: 'Isti', icon: '=', color: '#f59e0b' },
              { label: 'Marže', value: 'Padaju', icon: '↓', color: '#ef4444' },
            ].map((stat, i) => (
              <div key={i} className="py-3 px-2 md:p-4 rounded-xl" style={{ background: `${stat.color}08`, border: `1px solid ${stat.color}15` }}>
                <p className="text-[12px] md:text-[14px] mb-1" style={{ color: `${stat.color}90` }}>{stat.icon}</p>
                <p className="text-[15px] md:text-[18px] font-bold leading-tight" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-[11px] md:text-[12px] text-white/40 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-[13px] text-white/40 mt-8 max-w-[380px] mx-auto leading-relaxed">
          Tri različite taktike. Jedna ista ciljna grupa. Rat cenama za ograničen broj kupaca.
        </p>
      </div>
    </div>
  )
}
