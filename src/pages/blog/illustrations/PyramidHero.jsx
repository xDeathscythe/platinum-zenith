export default function PyramidHero() {
  return (
    <div className="my-12 md:my-20 rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #0f172a 40%, #1e1b4b 100%)' }}>
      <div className="relative px-8 py-16 md:py-24 flex flex-col items-center text-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />

        <svg viewBox="0 0 400 320" className="w-full max-w-[400px] md:max-w-[480px] mb-8">
          {/* Pyramid layers with glow */}
          {/* 3% - Top */}
          <polygon points="200,20 230,90 170,90" fill="#22c55e20" stroke="#22c55e" strokeWidth="1.5" style={{ animation: 'fadeIn 0.5s ease-out 0.2s both' }} />
          <text x="200" y="68" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="700">3%</text>
          <text x="200" y="82" textAnchor="middle" fill="#22c55e80" fontSize="8">Kupuju</text>

          {/* 17% */}
          <polygon points="170,95 230,95 265,165 135,165" fill="#3b82f620" stroke="#3b82f6" strokeWidth="1.5" style={{ animation: 'fadeIn 0.5s ease-out 0.4s both' }} />
          <text x="200" y="128" textAnchor="middle" fill="#3b82f6" fontSize="14" fontWeight="700">17%</text>
          <text x="200" y="148" textAnchor="middle" fill="#3b82f680" fontSize="9">Istražuju</text>

          {/* 20% */}
          <polygon points="135,170 265,170 300,240 100,240" fill="#a855f720" stroke="#a855f7" strokeWidth="1.5" style={{ animation: 'fadeIn 0.5s ease-out 0.6s both' }} />
          <text x="200" y="200" textAnchor="middle" fill="#a855f7" fontSize="14" fontWeight="700">20%</text>
          <text x="200" y="220" textAnchor="middle" fill="#a855f780" fontSize="9">Svesni problema</text>

          {/* 60% - Bottom */}
          <polygon points="100,245 300,245 350,310 50,310" fill="#ef444420" stroke="#ef4444" strokeWidth="1.5" style={{ animation: 'fadeIn 0.5s ease-out 0.8s both' }} />
          <text x="200" y="272" textAnchor="middle" fill="#ef4444" fontSize="16" fontWeight="700">60%</text>
          <text x="200" y="295" textAnchor="middle" fill="#ef444480" fontSize="9">Ne znaju da imaju problem</text>

          {/* Arrow indicator: "Ovde svi ciljaju" pointing at 3% */}
          <line x1="290" y1="55" x2="240" y2="55" stroke="#22c55e60" strokeWidth="1" strokeDasharray="4 2" />
          <text x="295" y="50" fill="#22c55e" fontSize="9" fontWeight="500">← Svi ciljaju ovde</text>
          <text x="295" y="62" fill="#22c55e80" fontSize="8">Google Ads, SEO</text>

          {/* Brace on left side: "97% neiskorišćeno" */}
          <line x1="40" y1="100" x2="40" y2="305" stroke="#ffffff20" strokeWidth="1" />
          <line x1="35" y1="100" x2="45" y2="100" stroke="#ffffff20" strokeWidth="1" />
          <line x1="35" y1="305" x2="45" y2="305" stroke="#ffffff20" strokeWidth="1" />
          <text x="30" y="200" textAnchor="middle" fill="#ffffff40" fontSize="10" fontWeight="600" transform="rotate(-90, 30, 200)">97% tržišta</text>
        </svg>

        <p className="text-[14px] md:text-[16px] text-white/50 max-w-[420px] leading-relaxed">
          Većina firmi se bori za vrh piramide. Ostatak tržišta prolazi nezapaženo.
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
