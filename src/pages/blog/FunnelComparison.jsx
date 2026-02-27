export default function FunnelComparison() {
  return (
    <div className="my-12 md:my-16">
      <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-[640px] mx-auto">
        {/* Traditional */}
        <div className="rounded-xl p-6 text-center" style={{ background: '#ef444408', border: '1px solid #ef444415' }}>
          <p className="text-[12px] uppercase tracking-[0.1em] text-white/30 mb-2">Klasičan pristup</p>
          <p className="text-[14px] text-white/50 mb-4">Samo Google Ads + SEO</p>

          <div className="space-y-1.5 mb-6">
            {[100, 80, 40, 12, 4].map((w, i) => (
              <div key={i} className="mx-auto h-[8px] rounded-full" style={{ width: `${w}%`, background: `rgba(239,68,68,${0.15 + i * 0.08})` }} />
            ))}
          </div>

          <p className="text-[48px] font-bold text-[#ef4444] leading-none mb-1">1</p>
          <p className="text-[13px] text-white/40">klijent</p>
        </div>

        {/* Full pyramid */}
        <div className="rounded-xl p-6 text-center" style={{ background: '#22c55e08', border: '1px solid #22c55e15' }}>
          <p className="text-[12px] uppercase tracking-[0.1em] text-white/30 mb-2">Pristup celoj piramidi</p>
          <p className="text-[14px] text-white/50 mb-4">Lead magneti + Nurture + Prodaja</p>

          <div className="space-y-1.5 mb-6">
            {[100, 85, 65, 45, 30].map((w, i) => (
              <div key={i} className="mx-auto h-[8px] rounded-full" style={{ width: `${w}%`, background: `rgba(34,197,94,${0.15 + i * 0.08})` }} />
            ))}
          </div>

          <p className="text-[48px] font-bold text-[#22c55e] leading-none mb-1">3</p>
          <p className="text-[13px] text-white/40">klijenta</p>
        </div>
      </div>
    </div>
  )
}
