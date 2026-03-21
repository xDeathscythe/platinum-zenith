import { useState, useEffect, useRef } from 'react'

/**
 * SpeedImpactChart — Animated visualization showing how page load time
 * affects conversion rate and bounce rate. Animates on scroll into view.
 */
export default function SpeedImpactChart() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const conversionData = [
    { seconds: '1s', conversion: 27, bounce: 9, color: '#10b981' },
    { seconds: '2s', conversion: 17, bounce: 15, color: '#22c55e' },
    { seconds: '3s', conversion: 11, bounce: 32, color: '#eab308' },
    { seconds: '4s', conversion: 7, bounce: 38, color: '#f97316' },
    { seconds: '5s', conversion: 5.4, bounce: 58, color: '#ef4444' },
    { seconds: '7s', conversion: 3.2, bounce: 72, color: '#dc2626' },
    { seconds: '10s', conversion: 2.1, bounce: 87, color: '#991b1b' },
  ]

  const maxConv = 30
  const maxBounce = 100

  return (
    <div ref={ref} className="ill-wrap" style={{ padding: '28px 24px 20px', background: 'linear-gradient(180deg, #0e0e12, #09090c)' }}>
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <div style={{ fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>
          Uticaj brzine na konverziju i bounce rate
        </div>
        <div style={{ fontSize: 20, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em' }}>
          Svaka sekunda košta — evo koliko tačno
        </div>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 20, fontSize: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: 3, background: '#3b82f6' }} />
          <span style={{ color: 'rgba(255,255,255,0.7)' }}>Konverzija (%)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: 3, background: '#ef4444' }} />
          <span style={{ color: 'rgba(255,255,255,0.7)' }}>Bounce Rate (%)</span>
        </div>
      </div>

      {/* Chart */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 200, padding: '0 8px' }}>
        {conversionData.map((d, i) => {
          const convH = (d.conversion / maxConv) * 180
          const bounceH = (d.bounce / maxBounce) * 180
          const delay = i * 0.12

          return (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              {/* Bars container */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 180 }}>
                {/* Conversion bar (blue) */}
                <div style={{
                  width: '45%',
                  minWidth: 14,
                  height: visible ? convH : 0,
                  background: 'linear-gradient(180deg, #60a5fa, #3b82f6)',
                  borderRadius: '4px 4px 0 0',
                  transition: `height 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s`,
                  position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute', top: -18, left: '50%', transform: 'translateX(-50%)',
                    fontSize: 10, fontWeight: 600, color: '#60a5fa',
                    opacity: visible ? 1 : 0, transition: `opacity 0.5s ${delay + 0.5}s`,
                  }}>{d.conversion}%</span>
                </div>

                {/* Bounce bar (red) */}
                <div style={{
                  width: '45%',
                  minWidth: 14,
                  height: visible ? bounceH : 0,
                  background: 'linear-gradient(180deg, #f87171, #ef4444)',
                  borderRadius: '4px 4px 0 0',
                  transition: `height 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay + 0.1}s`,
                  position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute', top: -18, left: '50%', transform: 'translateX(-50%)',
                    fontSize: 10, fontWeight: 600, color: '#f87171',
                    opacity: visible ? 1 : 0, transition: `opacity 0.5s ${delay + 0.6}s`,
                  }}>{d.bounce}%</span>
                </div>
              </div>

              {/* X-axis label */}
              <div style={{
                fontSize: 12, fontWeight: 600, color: d.color,
                padding: '4px 0', borderTop: '1px solid rgba(255,255,255,0.1)',
                width: '100%', textAlign: 'center',
              }}>{d.seconds}</div>
            </div>
          )
        })}
      </div>

      {/* X-axis title */}
      <div style={{ textAlign: 'center', marginTop: 12, fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        Vreme učitavanja stranice
      </div>

      {/* Key stat callout */}
      <div style={{
        marginTop: 24, padding: '16px 20px',
        background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)',
        borderRadius: 12, display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <div style={{ fontSize: 32, fontWeight: 700, color: '#ef4444', lineHeight: 1 }}>-7%</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
          Svaka sekunda kašnjenja smanjuje konverziju za 7%.
          <br />
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>Izvor: Akamai State of Online Retail (2024)</span>
        </div>
      </div>

      {/* Second callout */}
      <div style={{
        marginTop: 12, padding: '16px 20px',
        background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)',
        borderRadius: 12, display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <div style={{ fontSize: 32, fontWeight: 700, color: '#3b82f6', lineHeight: 1 }}>5×</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
          Sajt od 1 sekunde konvertuje 5× više od sajta od 5 sekundi.
          <br />
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>Izvor: Portent Speed & Conversion Study (2024)</span>
        </div>
      </div>

      <p className="ill-caption" style={{ marginTop: 16 }}>
        Podaci iz Google/SOASTA, Akamai i Portent istraživanja (2024). Bounce rate raste eksponencijalno posle 3 sekunde.
      </p>
    </div>
  )
}
