export default function FbCreativeTypes() {
  const types = [
    {
      icon: '📱',
      title: 'Raw Native',
      desc: 'Fotografija sa telefona. Izgleda kao post prijatelja, ne kao reklama.',
      color: '#3b82f6',
      tag: 'Najveći CTR',
    },
    {
      icon: '📰',
      title: 'Breaking News',
      desc: 'Naslov u stilu vesti. Radi u svakoj industriji jer mozak reaguje na urgentnost.',
      color: '#ef4444',
      tag: 'Najstabilniji',
    },
    {
      icon: '💬',
      title: 'Native Social',
      desc: 'Izgleda kao običan post. Primarni + sekundarni vizual za dvostruku intrigu.',
      color: '#8b5cf6',
      tag: 'Svestran',
    },
  ]

  return (
    <div className="my-12 md:my-20">
      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        {types.map((type, i) => (
          <div
            key={i}
            className="rounded-xl p-6 md:p-8 relative overflow-hidden"
            style={{
              background: `linear-gradient(180deg, ${type.color}10 0%, ${type.color}05 100%)`,
              border: `1px solid ${type.color}20`,
              animation: `fadeUp 0.5s ease-out ${i * 0.15}s both`,
            }}
          >
            <div className="absolute top-4 right-4">
              <span className="text-[11px] font-medium px-2 py-1 rounded-full" style={{ background: `${type.color}20`, color: type.color }}>
                {type.tag}
              </span>
            </div>

            <span className="text-[40px] block mb-4">{type.icon}</span>
            <h4 className="text-[20px] font-bold mb-2" style={{ color: type.color }}>{type.title}</h4>
            <p className="text-[15px] leading-relaxed text-white/60">{type.desc}</p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
