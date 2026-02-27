export default function PyramidFullFunnel() {
  const steps = [
    {
      icon: '🧲',
      num: '01',
      title: 'Privuci pažnju',
      desc: 'Besplatan vodič, kalkulator ili čeklista. Konverzija skače sa 4% na 30%+.',
      color: '#3b82f6',
    },
    {
      icon: '🤝',
      num: '02',
      title: 'Izgradi poverenje',
      desc: 'Edukativni mejlovi, studije slučaja, praktični saveti. Bez prodaje.',
      color: '#8b5cf6',
    },
    {
      icon: '✅',
      num: '03',
      title: 'Konvertuj prirodno',
      desc: 'Besplatna analiza, konkretan plan. Kupac dolazi informisan i spreman.',
      color: '#22c55e',
    },
  ]

  return (
    <div className="my-12 md:my-20 rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #0a1628 100%)' }}>
      <div className="px-8 py-12 md:py-16">
        <p className="text-center text-[13px] uppercase tracking-[0.15em] text-white/40 mb-3 font-medium">
          Tri koraka do 97% tržišta
        </p>
        <p className="text-center text-[22px] md:text-[28px] font-bold text-white mb-12">
          Sistem koji pretvara nesvesne u kupce
        </p>

        <div className="max-w-[700px] mx-auto">
          {/* Steps with connecting line */}
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[28px] md:left-[32px] top-[40px] bottom-[40px] w-[2px]" style={{ background: 'linear-gradient(180deg, #3b82f640, #8b5cf640, #22c55e40)' }} />

            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-5 md:gap-6 items-start" style={{ animation: `fadeIn 0.5s ease-out ${i * 0.2}s both` }}>
                  {/* Number circle */}
                  <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-full flex items-center justify-center shrink-0 relative z-10"
                    style={{ background: `${step.color}15`, border: `2px solid ${step.color}40` }}>
                    <span className="text-[24px]">{step.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="pt-2 flex-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-[12px] font-mono font-bold" style={{ color: `${step.color}80` }}>{step.num}</span>
                      <h4 className="text-[18px] md:text-[20px] font-bold text-white">{step.title}</h4>
                    </div>
                    <p className="text-[15px] text-white/50 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Result card */}
          <div className="mt-10 p-6 rounded-xl text-center" style={{ background: 'linear-gradient(135deg, #22c55e10, #3b82f610)', border: '1px solid #22c55e20' }}>
            <p className="text-[36px] md:text-[48px] font-bold text-white mb-2">3x</p>
            <p className="text-[14px] text-white/50">više klijenata za isti budžet</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
