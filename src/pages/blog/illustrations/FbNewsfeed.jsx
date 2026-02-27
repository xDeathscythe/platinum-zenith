export default function FbNewsfeed() {
  const pages = [
    { name: 'LadBible', views: '126M', color: '#3b82f6' },
    { name: 'Unilad', views: '117M', color: '#8b5cf6' },
    { name: 'E! News', views: '116M', color: '#ec4899' },
    { name: 'People', views: '109M', color: '#f59e0b' },
    { name: 'TMZ', views: '89M', color: '#10b981' },
  ]

  return (
    <div className="my-12 md:my-20 rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%)' }}>
      <div className="px-8 py-12 md:py-16">
        <p className="text-center text-[13px] uppercase tracking-[0.15em] text-white/40 mb-3 font-medium">
          Najgledanije stranice na Facebooku
        </p>
        <p className="text-center text-[22px] md:text-[28px] font-bold text-white mb-12">
          Sve su mediji. Sve isporučuju vesti.
        </p>

        <div className="max-w-[560px] mx-auto space-y-3">
          {pages.map((page, i) => {
            const width = Math.round((parseInt(page.views) / 126) * 100)
            return (
              <div key={i} className="flex items-center gap-4" style={{ animation: `slideIn 0.5s ease-out ${i * 0.1}s both` }}>
                <span className="text-[14px] text-white/60 w-[80px] text-right font-medium shrink-0">{page.name}</span>
                <div className="flex-1 h-[36px] rounded-lg overflow-hidden bg-white/5 relative">
                  <div
                    className="h-full rounded-lg flex items-center justify-end pr-3"
                    style={{ width: `${width}%`, background: `linear-gradient(90deg, ${page.color}30, ${page.color}90)` }}
                  >
                    <span className="text-[13px] text-white font-semibold">{page.views} pregleda</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-[14px] text-white/40 mt-10 max-w-[400px] mx-auto leading-relaxed">
          Ljudski mozak traži dopamin. Vesti, tračevi i iznenađenja dominiraju. Vaš oglas se takmiči sa ovim.
        </p>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
