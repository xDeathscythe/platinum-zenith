export default function BuyerPyramid() {
  // Kept minimal since PyramidHero now handles the main pyramid visual
  // This one is a simpler inline version for quick reference
  const layers = [
    { pct: '3%', label: 'Kupuju odmah', color: '#22c55e', w: '25%' },
    { pct: '17%', label: 'Istražuju opcije', color: '#3b82f6', w: '50%' },
    { pct: '20%', label: 'Svesni problema', color: '#a855f7', w: '75%' },
    { pct: '60%', label: 'Ne znaju da imaju problem', color: '#ef4444', w: '100%' },
  ]

  return (
    <div className="my-12 md:my-16">
      <div className="max-w-[500px] mx-auto space-y-2">
        {layers.map((layer, i) => (
          <div key={i} className="flex items-center gap-3 mx-auto" style={{ width: layer.w, animation: `fadeIn 0.4s ease-out ${i * 0.12}s both` }}>
            <div className="flex-1 h-[44px] rounded-lg flex items-center justify-between px-4" style={{ background: `${layer.color}12`, border: `1px solid ${layer.color}25` }}>
              <span className="text-[13px] text-white/60">{layer.label}</span>
              <span className="text-[14px] font-bold" style={{ color: layer.color }}>{layer.pct}</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scaleX(0.8); }
          to   { opacity: 1; transform: scaleX(1); }
        }
      `}</style>
    </div>
  )
}
