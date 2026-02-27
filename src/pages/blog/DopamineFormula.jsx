export default function DopamineFormula() {
  return (
    <div className="my-12 md:my-20 rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #0a1a2e 100%)' }}>
      <div className="px-8 py-12 md:py-20">
        <div className="max-w-[700px] mx-auto">
          {/* Formula row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {/* Item 1 */}
            <div className="flex-1 text-center p-6 rounded-xl max-w-[180px]" style={{ background: '#3b82f610', border: '1px solid #3b82f625', animation: 'fadeUp 0.5s ease-out 0s both' }}>
              <span className="text-[36px] block mb-2">👁</span>
              <p className="text-[14px] font-bold text-[#3b82f6] mb-1">Pattern interrupt</p>
              <p className="text-[11px] text-white/40 leading-snug">Zaustavlja skrolovanje</p>
            </div>

            <span className="text-[28px] text-white/20 font-light" style={{ animation: 'fadeUp 0.5s ease-out 0.1s both' }}>+</span>

            {/* Item 2 */}
            <div className="flex-1 text-center p-6 rounded-xl max-w-[180px]" style={{ background: '#ef444410', border: '1px solid #ef444425', animation: 'fadeUp 0.5s ease-out 0.15s both' }}>
              <span className="text-[36px] block mb-2">🔥</span>
              <p className="text-[14px] font-bold text-[#ef4444] mb-1">Intriga</p>
              <p className="text-[11px] text-white/40 leading-snug">Budi radoznalost</p>
            </div>

            <span className="text-[28px] text-white/20 font-light" style={{ animation: 'fadeUp 0.5s ease-out 0.25s both' }}>+</span>

            {/* Item 3 */}
            <div className="flex-1 text-center p-6 rounded-xl max-w-[180px]" style={{ background: '#22c55e10', border: '1px solid #22c55e25', animation: 'fadeUp 0.5s ease-out 0.3s both' }}>
              <span className="text-[36px] block mb-2">🎯</span>
              <p className="text-[14px] font-bold text-[#22c55e] mb-1">Konkretan benefit</p>
              <p className="text-[11px] text-white/40 leading-snug">Specifičan rezultat</p>
            </div>
          </div>

          {/* Equals arrow */}
          <div className="flex justify-center my-6" style={{ animation: 'fadeUp 0.5s ease-out 0.4s both' }}>
            <div className="w-[2px] h-[40px]" style={{ background: 'linear-gradient(180deg, #ffffff10, #eab30860)' }} />
          </div>

          {/* Result */}
          <div className="text-center p-8 rounded-xl mx-auto max-w-[320px]" style={{ background: 'linear-gradient(135deg, #eab30810, #eab30820)', border: '1px solid #eab30830', boxShadow: '0 0 60px #eab30810', animation: 'fadeUp 0.5s ease-out 0.5s both' }}>
            <span className="text-[48px] block mb-2">⚡</span>
            <p className="text-[20px] font-bold text-[#eab308] mb-1">Oglas koji konvertuje</p>
            <p className="text-[13px] text-white/40">Klik koji se ne može ignorisati</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
