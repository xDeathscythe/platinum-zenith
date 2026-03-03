/**
 * BlogIllustrations.jsx
 * Topic-relevant SVG/CSS illustrations for blog posts.
 * Each post gets 1-2 illustrations mapped by slug.
 */

/* ─── Base wrapper ─── */
function IllWrap({ children, caption }) {
  return (
    <div className="ill-wrap">
      <div className="ill-inner">{children}</div>
      {caption && <p className="ill-caption">{caption}</p>}
    </div>
  )
}

/* ══════════════════════════════════════════════════
   1. FUNNEL DIAGRAM — configurable stages
   ══════════════════════════════════════════════════ */
function FunnelDiagram({ stages, caption }) {
  const colors = ['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe']
  return (
    <IllWrap caption={caption}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, padding: '32px 20px' }}>
        {stages.map((s, i) => {
          const widthPct = 100 - i * (60 / stages.length)
          return (
            <div key={i} style={{
              width: `${widthPct}%`,
              background: colors[i % colors.length],
              padding: '14px 20px',
              textAlign: 'center',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 600,
              borderRadius: i === 0 ? '12px 12px 0 0' : i === stages.length - 1 ? '0 0 12px 12px' : 0,
              position: 'relative',
            }}>
              <span style={{ opacity: 0.6, fontSize: '11px', display: 'block', marginBottom: 2 }}>{s.label}</span>
              {s.value && <span style={{ fontSize: '18px' }}>{s.value}</span>}
            </div>
          )
        })}
      </div>
    </IllWrap>
  )
}

/* ══════════════════════════════════════════════════
   2. COMPARISON — side by side
   ══════════════════════════════════════════════════ */
function ComparisonChart({ left, right, caption }) {
  return (
    <IllWrap caption={caption}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', padding: '28px 20px' }}>
        {[left, right].map((side, idx) => (
          <div key={idx} style={{
            background: idx === 0 ? 'rgba(99,102,241,0.12)' : 'rgba(234,179,8,0.12)',
            border: `1px solid ${idx === 0 ? 'rgba(99,102,241,0.25)' : 'rgba(234,179,8,0.25)'}`,
            borderRadius: '14px',
            padding: '22px 18px',
          }}>
            <div style={{ fontSize: '15px', fontWeight: 700, color: idx === 0 ? '#818cf8' : '#facc15', marginBottom: 14 }}>
              {side.title}
            </div>
            {side.points.map((p, j) => (
              <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 10, fontSize: '13px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.5 }}>
                <span style={{ color: side.good ? '#4ade80' : 'rgba(255,255,255,0.4)', flexShrink: 0, marginTop: 2 }}>
                  {side.good ? '✓' : '•'}
                </span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </IllWrap>
  )
}

/* ══════════════════════════════════════════════════
   3. TIMELINE — milestone dots
   ══════════════════════════════════════════════════ */
function TimelinePath({ milestones, caption }) {
  return (
    <IllWrap caption={caption}>
      <div style={{ padding: '32px 24px', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 29, top: 44, bottom: 44, width: 2, background: 'rgba(99,102,241,0.3)' }} />
        {milestones.map((m, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: i < milestones.length - 1 ? 28 : 0, position: 'relative' }}>
            <div style={{
              width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
              background: i === milestones.length - 1 ? '#6366f1' : 'rgba(99,102,241,0.35)',
              border: '2px solid #6366f1',
              marginTop: 2,
            }} />
            <div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: 2 }}>{m.label}</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{m.text}</div>
            </div>
          </div>
        ))}
      </div>
    </IllWrap>
  )
}

/* ══════════════════════════════════════════════════
   4. METRICS DASHBOARD — KPI cards
   ══════════════════════════════════════════════════ */
function MetricsDashboard({ metrics, caption }) {
  const accents = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4']
  return (
    <IllWrap caption={caption}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', padding: '28px 20px' }}>
        {metrics.map((m, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '18px 16px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '26px', fontWeight: 700, color: accents[i % accents.length], marginBottom: 4 }}>{m.value}</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{m.label}</div>
          </div>
        ))}
      </div>
    </IllWrap>
  )
}

/* ══════════════════════════════════════════════════
   5. FORMULA BLOCK — step-by-step
   ══════════════════════════════════════════════════ */
function FormulaBlock({ steps, title, caption }) {
  return (
    <IllWrap caption={caption}>
      <div style={{ padding: '28px 20px' }}>
        {title && <div style={{ fontSize: '13px', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 18 }}>{title}</div>}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                background: 'rgba(99,102,241,0.15)',
                border: '1px solid rgba(99,102,241,0.3)',
                borderRadius: '10px',
                padding: '14px 20px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#c4b5fd' }}>{s.short}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', marginTop: 4 }}>{s.full}</div>
              </div>
              {i < steps.length - 1 && (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 4l6 6-6 6" stroke="#6366f1" strokeWidth="2" /></svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </IllWrap>
  )
}

/* ══════════════════════════════════════════════════
   6. PROCESS FLOW — connected nodes
   ══════════════════════════════════════════════════ */
function ProcessFlow({ nodes, caption }) {
  return (
    <IllWrap caption={caption}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '28px 16px' }}>
        {nodes.map((n, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '10px',
              padding: '12px 18px',
              fontSize: '13px',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.8)',
              textAlign: 'center',
              minWidth: 80,
            }}>
              {n.icon && <div style={{ fontSize: '20px', marginBottom: 4 }}>{n.icon}</div>}
              {n.text}
            </div>
            {i < nodes.length - 1 && (
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none"><path d="M0 8h18M14 3l5 5-5 5" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" /></svg>
            )}
          </div>
        ))}
      </div>
    </IllWrap>
  )
}

/* ══════════════════════════════════════════════════
   7. CHECKLIST — items with ✓/✗
   ══════════════════════════════════════════════════ */
function ChecklistCard({ title, items, caption }) {
  return (
    <IllWrap caption={caption}>
      <div style={{ padding: '28px 24px' }}>
        {title && <div style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: 18 }}>{title}</div>}
        {items.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14,
            padding: '10px 14px',
            background: item.ok ? 'rgba(74,222,128,0.06)' : 'rgba(239,68,68,0.06)',
            border: `1px solid ${item.ok ? 'rgba(74,222,128,0.15)' : 'rgba(239,68,68,0.15)'}`,
            borderRadius: '10px',
          }}>
            <span style={{ color: item.ok ? '#4ade80' : '#f87171', fontSize: '16px', flexShrink: 0, marginTop: 1 }}>
              {item.ok ? '✓' : '✗'}
            </span>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>{item.text}</span>
          </div>
        ))}
      </div>
    </IllWrap>
  )
}

/* ══════════════════════════════════════════════════
   8. BAR CHART — vertical bars with labels
   ══════════════════════════════════════════════════ */
function BarChart({ bars, caption, maxValue }) {
  const max = maxValue || Math.max(...bars.map(b => b.value))
  const colors = ['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#818cf8', '#6d28d9']
  return (
    <IllWrap caption={caption}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 14, padding: '32px 20px 20px', height: 220 }}>
        {bars.map((b, i) => {
          const h = (b.value / max) * 140
          return (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: colors[i % colors.length] }}>{b.display || b.value}</span>
              <div style={{
                width: 42,
                height: h,
                background: `linear-gradient(to top, ${colors[i % colors.length]}, ${colors[i % colors.length]}88)`,
                borderRadius: '6px 6px 2px 2px',
              }} />
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textAlign: 'center', maxWidth: 70 }}>{b.label}</span>
            </div>
          )
        })}
      </div>
    </IllWrap>
  )
}

/* ══════════════════════════════════════════════════
   9. LINE GRAPH — growth or decline curve
   ══════════════════════════════════════════════════ */
function LineGraph({ points, color = '#6366f1', caption, labels }) {
  const maxY = Math.max(...points)
  const w = 400
  const h = 160
  const pad = 20
  const coords = points.map((p, i) => {
    const x = pad + (i / (points.length - 1)) * (w - pad * 2)
    const y = h - pad - (p / maxY) * (h - pad * 2)
    return `${x},${y}`
  })
  const pathD = 'M' + coords.join(' L')
  const areaD = pathD + ` L${pad + ((points.length - 1) / (points.length - 1)) * (w - pad * 2)},${h - pad} L${pad},${h - pad} Z`

  return (
    <IllWrap caption={caption}>
      <div style={{ padding: '24px 16px 16px' }}>
        <svg viewBox={`0 0 ${w} ${h + 30}`} width="100%" style={{ maxWidth: 500, display: 'block', margin: '0 auto' }}>
          <defs>
            <linearGradient id={`lg-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.25" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaD} fill={`url(#lg-${color.replace('#', '')})`} />
          <path d={pathD} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {points.map((p, i) => {
            const x = pad + (i / (points.length - 1)) * (w - pad * 2)
            const y = h - pad - (p / maxY) * (h - pad * 2)
            return <circle key={i} cx={x} cy={y} r="4" fill={color} />
          })}
          {labels && labels.map((l, i) => {
            const x = pad + (i / (labels.length - 1)) * (w - pad * 2)
            return <text key={i} x={x} y={h + 14} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10">{l}</text>
          })}
        </svg>
      </div>
    </IllWrap>
  )
}

/* ══════════════════════════════════════════════════
   10. FRAMEWORK GRID — 2x2 concepts
   ══════════════════════════════════════════════════ */
function FrameworkGrid({ cells, caption }) {
  return (
    <IllWrap caption={caption}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', padding: '28px 20px' }}>
        {cells.map((c, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '20px 16px',
            textAlign: 'center',
          }}>
            {c.icon && <div style={{ fontSize: '28px', marginBottom: 8 }}>{c.icon}</div>}
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: 4 }}>{c.title}</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{c.desc}</div>
          </div>
        ))}
      </div>
    </IllWrap>
  )
}

/* ══════════════════════════════════════════════════
   11. PRICE ANCHOR — price perception
   ══════════════════════════════════════════════════ */
function PriceAnchor({ prices, caption }) {
  return (
    <IllWrap caption={caption}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 16, padding: '32px 20px' }}>
        {prices.map((p, i) => (
          <div key={i} style={{
            background: p.highlight ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.04)',
            border: `1px solid ${p.highlight ? 'rgba(99,102,241,0.4)' : 'rgba(255,255,255,0.08)'}`,
            borderRadius: '14px',
            padding: '24px 22px',
            textAlign: 'center',
            transform: p.highlight ? 'scale(1.05)' : 'none',
            flex: '0 0 auto',
            minWidth: 110,
          }}>
            {p.tag && <div style={{ fontSize: '10px', fontWeight: 600, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{p.tag}</div>}
            <div style={{ fontSize: '28px', fontWeight: 700, color: p.highlight ? '#c4b5fd' : 'rgba(255,255,255,0.6)' }}>{p.price}</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: 6 }}>{p.label}</div>
          </div>
        ))}
      </div>
    </IllWrap>
  )
}

/* ══════════════════════════════════════════════════
   12. WIREFRAME SKETCH — simple landing page
   ══════════════════════════════════════════════════ */
function WireframeSketch({ elements, caption }) {
  return (
    <IllWrap caption={caption}>
      <div style={{
        margin: '24px auto',
        maxWidth: 320,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '14px',
        overflow: 'hidden',
      }}>
        {/* Nav bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ width: 48, height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.15)' }} />
          <div style={{ display: 'flex', gap: 8 }}>
            {[1, 2, 3].map(i => <div key={i} style={{ width: 24, height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.08)' }} />)}
          </div>
        </div>
        {/* Content blocks */}
        <div style={{ padding: '20px 16px' }}>
          {elements.map((el, i) => {
            if (el.type === 'headline') return (
              <div key={i} style={{ height: 14, width: '80%', borderRadius: 4, background: 'rgba(255,255,255,0.2)', marginBottom: 10 }} />
            )
            if (el.type === 'subline') return (
              <div key={i} style={{ height: 8, width: '60%', borderRadius: 4, background: 'rgba(255,255,255,0.08)', marginBottom: 16 }} />
            )
            if (el.type === 'cta') return (
              <div key={i} style={{ height: 34, width: 120, borderRadius: 8, background: '#6366f1', margin: '12px 0 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '11px', color: '#fff', fontWeight: 600 }}>{el.text || 'CTA'}</span>
              </div>
            )
            if (el.type === 'image') return (
              <div key={i} style={{ height: 80, borderRadius: 10, background: 'rgba(255,255,255,0.05)', border: '1px dashed rgba(255,255,255,0.1)', marginBottom: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '20px', opacity: 0.3 }}>🖼</span>
              </div>
            )
            if (el.type === 'text') return (
              <div key={i} style={{ marginBottom: 12 }}>
                {[1, 2, 3].map(j => <div key={j} style={{ height: 6, width: j === 3 ? '45%' : '100%', borderRadius: 3, background: 'rgba(255,255,255,0.06)', marginBottom: 6 }} />)}
              </div>
            )
            if (el.type === 'form') return (
              <div key={i} style={{ marginBottom: 14 }}>
                {[1, 2].map(j => <div key={j} style={{ height: 28, borderRadius: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: 8 }} />)}
              </div>
            )
            return null
          })}
        </div>
      </div>
    </IllWrap>
  )
}

/* ══════════════════════════════════════════════════
   SLUG → ILLUSTRATION MAPPING
   Each slug maps to an array of illustration configs.
   Posts with existing {{component}} embeds are excluded.
   ══════════════════════════════════════════════════ */
export const blogIllustrationMap = {
  'copywriting-formule-koje-rade': [
    { Component: FormulaBlock, props: { title: 'PAS Formula', steps: [{ short: 'P', full: 'Problem' }, { short: 'A', full: 'Agitate' }, { short: 'S', full: 'Solve' }], caption: 'Najstarija i najefektnija copywriting formula.' }},
    { Component: FormulaBlock, props: { title: 'AIDA Formula', steps: [{ short: 'A', full: 'Attention' }, { short: 'I', full: 'Interest' }, { short: 'D', full: 'Desire' }, { short: 'A', full: 'Action' }], caption: 'Klasičan okvir za strukturu svakog oglasa.' }},
  ],
  'ab-testiranje-male-promene-veliki-rezultati': [
    { Component: ComparisonChart, props: {
      left: { title: 'Verzija A', points: ['Originalni naslov', 'Zeleno CTA dugme', 'Kratak form'], good: false },
      right: { title: 'Verzija B', points: ['Naslov sa brojem', 'Narandžasto CTA dugme', 'Dva polja forme'], good: true },
      caption: 'A/B test: menja se samo jedan element između verzija.',
    }},
    { Component: BarChart, props: {
      bars: [
        { label: 'Naslov', value: 80, display: '80%' },
        { label: 'CTA', value: 45, display: '45%' },
        { label: 'Slika', value: 30, display: '30%' },
        { label: 'Boja', value: 15, display: '15%' },
      ],
      caption: 'Uticaj pojedinačnih elemenata na konverziju po testovima.',
    }},
  ],
  'kako-meriti-roi-marketinga-kpi-vodic': [
    { Component: MetricsDashboard, props: {
      metrics: [
        { value: '4.2x', label: 'ROAS' },
        { value: '€12.40', label: 'CPA' },
        { value: '3.8%', label: 'CTR' },
        { value: '67%', label: 'Ret. Rate' },
      ],
      caption: 'Ključni KPI pokazatelji koje svaka firma treba da prati.',
    }},
    { Component: ProcessFlow, props: {
      nodes: [
        { icon: '📊', text: 'Prikupi podatke' },
        { icon: '🔍', text: 'Analiziraj' },
        { icon: '🎯', text: 'Optimizuj' },
        { icon: '📈', text: 'Meri ponovo' },
      ],
      caption: 'Ciklus merenja koji nikad ne prestaje.',
    }},
  ],
  'lead-magneti-koji-zapravo-konvertuju': [
    { Component: FunnelDiagram, props: {
      stages: [
        { label: 'Posetilac', value: '10.000' },
        { label: 'Preuzme lead magnet', value: '1.200' },
        { label: 'Email sekvenca', value: '480' },
        { label: 'Kvalifikovan lead', value: '96' },
      ],
      caption: 'Od posetilaca do kvalifikovanih leadova kroz lead magnet.',
    }},
    { Component: FrameworkGrid, props: {
      cells: [
        { icon: '📋', title: 'Checklist', desc: 'Brz, koristan, lak za konzumiranje' },
        { icon: '📊', title: 'Template', desc: 'Gotov okvir koji se odmah koristi' },
        { icon: '🎥', title: 'Mini kurs', desc: 'Serija emailova sa video sadržajem' },
        { icon: '📖', title: 'Vodič', desc: 'Detaljan PDF sa korak-po-korak uputstvom' },
      ],
      caption: 'Tipovi lead magneta po stopi konverzije.',
    }},
  ],
  'brending-za-male-firme-identitet-vazniji-od-loga': [
    { Component: FrameworkGrid, props: {
      cells: [
        { icon: '🎨', title: 'Vizuelni identitet', desc: 'Logo, boje, tipografija' },
        { icon: '🗣', title: 'Glas brenda', desc: 'Ton, stil, vokabular' },
        { icon: '💎', title: 'Vrednosti', desc: 'Za šta se brend zalaže' },
        { icon: '👥', title: 'Iskustvo', desc: 'Svaka tačka kontakta sa kupcem' },
      ],
      caption: 'Brend identitet je sistem, ne samo logo.',
    }},
  ],
  'video-marketing-zasto-video-dominira': [
    { Component: BarChart, props: {
      bars: [
        { label: 'Video', value: 92, display: '92%' },
        { label: 'Slika', value: 65, display: '65%' },
        { label: 'Tekst', value: 38, display: '38%' },
        { label: 'Audio', value: 28, display: '28%' },
      ],
      caption: 'Engagement po tipu sadržaja na društvenim mrežama.',
    }},
    { Component: ProcessFlow, props: {
      nodes: [
        { icon: '🎬', text: 'Snimanje' },
        { icon: '✂️', text: 'Montaža' },
        { icon: '📱', text: 'Distribucija' },
        { icon: '📊', text: 'Analitika' },
      ],
      caption: 'Pipeline za video sadržaj koji donosi rezultat.',
    }},
  ],
  'seo-vs-ppc-sta-je-bolje-za-dugorocni-rast': [
    { Component: ComparisonChart, props: {
      left: { title: 'SEO', points: ['Dugoročan rast', 'Besplatan klik', 'Spor početak (3-6 mes)', 'Kumulativan efekat'], good: true },
      right: { title: 'PPC', points: ['Instant rezultati', 'Plaćen svaki klik', 'Brz start', 'Prestaje kad prestanete da plaćate'], good: true },
      caption: 'SEO i PPC nisu suprostavljeni. Najbolji rezultat daju zajedno.',
    }},
    { Component: LineGraph, props: {
      points: [5, 8, 12, 20, 35, 55, 80, 100],
      color: '#10b981',
      labels: ['Mes 1', 'Mes 3', 'Mes 6', 'Mes 9', 'Mes 12', 'Mes 15', 'Mes 18', 'Mes 24'],
      caption: 'SEO organski saobraćaj raste eksponencijalno nakon inicijalnog perioda.',
    }},
  ],
  'psihologija-zaradjivanja-mentalni-blokovi': [
    { Component: ChecklistCard, props: {
      title: 'Mentalni blokovi zarade',
      items: [
        { ok: false, text: '"Novac je zlo" — ograničavajuće uverenje' },
        { ok: false, text: '"Nisam dovoljno dobar" — sindrom prevaranta' },
        { ok: false, text: '"Moram da radim više, ne pametnije"' },
        { ok: true, text: 'Vrednost = Rešen problem, ne sati rada' },
        { ok: true, text: 'Cena se formira po rezultatu, ne po trudu' },
      ],
      caption: 'Prepoznavanje i otklanjanje blokova je prvi korak ka rastu.',
    }},
  ],
  'komunikacija-u-prodaji-kako-napisati-ponudu': [
    { Component: FormulaBlock, props: {
      title: 'Struktura ponude',
      steps: [{ short: '1', full: 'Problem' }, { short: '2', full: 'Rešenje' }, { short: '3', full: 'Dokaz' }, { short: '4', full: 'Cena' }, { short: '5', full: 'CTA' }],
      caption: 'Pet elemenata ponude koja zatvara posao.',
    }},
  ],
  'kako-izabrati-pravu-marketing-agenciju': [
    { Component: ChecklistCard, props: {
      title: 'Na šta obratiti pažnju',
      items: [
        { ok: true, text: 'Pokazuje rezultate (brojke, ne priče)' },
        { ok: true, text: 'Transparentan proces i izveštavanje' },
        { ok: true, text: 'Specijalizacija za vašu industriju' },
        { ok: false, text: 'Obećava #1 na Googlu za 30 dana' },
        { ok: false, text: 'Nema referenci ili case studies' },
        { ok: false, text: 'Zaključava vas ugovorom na godinu dana' },
      ],
      caption: 'Crvene i zelene zastavice pri izboru marketing partnera.',
    }},
  ],
  'social-proof-recenzije-za-vise-prodaje': [
    { Component: BarChart, props: {
      bars: [
        { label: 'Sa recenzijama', value: 92, display: '92%' },
        { label: 'Bez recenzija', value: 35, display: '35%' },
      ],
      maxValue: 100,
      caption: 'Procenat korisnika koji veruju brendu na osnovu recenzija.',
    }},
    { Component: FrameworkGrid, props: {
      cells: [
        { icon: '⭐', title: 'Recenzije', desc: 'Google, Facebook, sajt' },
        { icon: '📸', title: 'UGC', desc: 'Korisnici dele iskustvo' },
        { icon: '🏆', title: 'Rezultati', desc: 'Brojke i case studies' },
        { icon: '🤝', title: 'Logo wall', desc: 'Poznati klijenti i partneri' },
      ],
      caption: 'Četiri tipa socijalnog dokaza za veću konverziju.',
    }},
  ],
  'retargeting-zasto-95-posetilaca-ne-kupi': [
    { Component: FunnelDiagram, props: {
      stages: [
        { label: 'Posetilac sajta', value: '100%' },
        { label: 'Vidi retargeting oglas', value: '70%' },
        { label: 'Ponovo poseti sajt', value: '26%' },
        { label: 'Konvertuje', value: '8%' },
      ],
      caption: '95% posetilaca ne kupi prvi put. Retargeting ih vraća.',
    }},
  ],
  'customer-retention-zadrzati-vs-naci-novog': [
    { Component: ComparisonChart, props: {
      left: { title: 'Nov kupac', points: ['5-25x skuplji', 'Nepoznat profil', 'Nema lojalnosti', 'Nizak LTV'], good: false },
      right: { title: 'Postojeći kupac', points: ['Jeftinija konverzija', 'Poznat profil i istorija', 'Preporučuje drugima', 'Visok LTV'], good: true },
      caption: 'Zadržavanje postojećeg kupca je daleko isplativije od akvizicije novog.',
    }},
  ],
  '17-godina-marketing-iskustva': [
    { Component: TimelinePath, props: {
      milestones: [
        { label: 'Početak', text: 'Prve kampanje i eksperimenti' },
        { label: 'Godina 5', text: 'Izgradnja sistema i procesa' },
        { label: 'Godina 10', text: 'Specijalizacija i skaliranje' },
        { label: 'Godina 17', text: 'Provereni okviri koji se ponavljaju' },
      ],
      caption: 'Put od eksperimentisanja do ponovljivog sistema.',
    }},
  ],
  '13-godina-poslovnog-iskustva-najskuplje-greske': [
    { Component: TimelinePath, props: {
      milestones: [
        { label: 'Greška #1', text: 'Prerano skaliranje bez sistema' },
        { label: 'Greška #2', text: 'Loši partneri i ugovori' },
        { label: 'Greška #3', text: 'Ignorisanje finansija' },
        { label: 'Lekcija', text: 'Svaka greška je kupljena lekcija' },
      ],
      caption: 'Najskuplje greške su one koje se ponavljaju.',
    }},
  ],
  'od-nule-do-prvog-miliona-konkretni-koraci': [
    { Component: LineGraph, props: {
      points: [0, 2, 5, 12, 25, 48, 72, 100],
      color: '#10b981',
      labels: ['€0', '', '', '', '', '', '', '€1M'],
      caption: 'Put do prvog miliona nije linearan. Rast se ubrzava sa sistemom.',
    }},
    { Component: TimelinePath, props: {
      milestones: [
        { label: 'Faza 1', text: 'Validacija: pronađi problem i naplati rešenje' },
        { label: 'Faza 2', text: 'Stabilizacija: ponavljaj i dokumentuj proces' },
        { label: 'Faza 3', text: 'Skaliranje: tim, sistemi, delegiranje' },
      ],
      caption: 'Tri faze rasta od nule do milion.',
    }},
  ],
  'kako-se-kretati-10x-brze-kao-vlasnik-firme': [
    { Component: FrameworkGrid, props: {
      cells: [
        { icon: '🎯', title: 'Fokus', desc: '80/20 pravilo za prioritete' },
        { icon: '⚡', title: 'Brzina', desc: 'Odluke brže, iteracije češće' },
        { icon: '🤝', title: 'Delegiranje', desc: 'Tim radi operativu' },
        { icon: '📐', title: 'Sistemi', desc: 'Proces > individualan trud' },
      ],
      caption: 'Multiplikatori brzine za vlasnike firmi.',
    }},
  ],
  'zasto-vecina-firmi-stagnira-posle-prvog-miliona': [
    { Component: LineGraph, props: {
      points: [10, 30, 60, 82, 90, 88, 85, 87, 86],
      color: '#f59e0b',
      labels: ['God 1', '', 'God 3', '', 'God 5', '', 'God 7', '', 'God 9'],
      caption: 'Tipičan rast firme: brz start, pa plato bez pravih sistema.',
    }},
    { Component: ChecklistCard, props: {
      title: 'Zašto dolazi do stagnacije',
      items: [
        { ok: false, text: 'Vlasnik je usko grlo za svaku odluku' },
        { ok: false, text: 'Nema dokumentovanih procesa' },
        { ok: false, text: 'Zapošljavanje na osnovu cene, ne kvaliteta' },
        { ok: true, text: 'Rešenje: sistemi, delegiranje, fokus na rast' },
      ],
    }},
  ],
  'od-nule-do-prvih-10000-evra-mesecno': [
    { Component: TimelinePath, props: {
      milestones: [
        { label: 'Mesec 1-2', text: 'Nađi nišu i testiraj ponudu' },
        { label: 'Mesec 3-4', text: 'Prvih 5 plaćenih klijenata' },
        { label: 'Mesec 5-8', text: 'Stabilizuj i optimizuj cenu' },
        { label: 'Mesec 9-12', text: '€10.000/mesečno sa sistemom' },
      ],
      caption: 'Realan vremenski okvir za prvih €10.000 mesečno.',
    }},
  ],
  'pricing-psihologija-kontrola-percepcije-cene': [
    { Component: PriceAnchor, props: {
      prices: [
        { price: '€99', label: 'Starter', tag: '' },
        { price: '€249', label: 'Growth', tag: 'Najpopularniji', highlight: true },
        { price: '€899', label: 'Enterprise', tag: '' },
      ],
      caption: 'Efekat sidrenja: srednja opcija izgleda kao najbolja vrednost.',
    }},
  ],
  'ponuda-koju-niko-ne-moze-da-odbije': [
    { Component: FormulaBlock, props: {
      title: 'Grand Slam ponuda',
      steps: [{ short: '🎯', full: 'Rezultat' }, { short: '⏰', full: 'Vremenski rok' }, { short: '🛡', full: 'Garancija' }, { short: '🎁', full: 'Bonus' }],
      caption: 'Četiri elementa ponude koju je teško odbiti.',
    }},
  ],
  'organski-doseg-umire-sta-raditi': [
    { Component: LineGraph, props: {
      points: [95, 72, 50, 35, 20, 12, 8, 5],
      color: '#ef4444',
      labels: ['2014', '2016', '2018', '2019', '2020', '2022', '2024', '2026'],
      caption: 'Pad organskog dosega na Facebooku tokom vremena.',
    }},
    { Component: FrameworkGrid, props: {
      cells: [
        { icon: '💰', title: 'Plaćeni oglasi', desc: 'Kontrolisan doseg' },
        { icon: '📧', title: 'Email lista', desc: 'Vaša publika, vaša kontrola' },
        { icon: '🎬', title: 'Video sadržaj', desc: 'Algoritam favorizuje video' },
        { icon: '🤝', title: 'Saradnje', desc: 'Tuđa publika, vaš sadržaj' },
      ],
      caption: 'Alternativne strategije kada organski doseg opada.',
    }},
  ],
  'google-ads-vs-facebook-ads-koji-je-bolji': [
    { Component: ComparisonChart, props: {
      left: { title: 'Google Ads', points: ['Korisnik aktivno traži', 'Visok intent kupovine', 'Skuplji klik', 'Tekst oglasi'], good: true },
      right: { title: 'Facebook Ads', points: ['Korisnik skroluje feed', 'Otkrivanje novih proizvoda', 'Jeftiniji CPM', 'Vizuelni/video formati'], good: true },
      caption: 'Različite platforme, različiti trenuci u putanji kupca.',
    }},
  ],
  'content-marketing-dugorocna-investicija': [
    { Component: ProcessFlow, props: {
      nodes: [
        { icon: '📝', text: 'Kreiranje' },
        { icon: '📢', text: 'Distribucija' },
        { icon: '🔄', text: 'Recikliranje' },
        { icon: '📈', text: 'Rezultat' },
      ],
      caption: 'Content marketing ciklus: napravi jednom, distribuiraj mnogo puta.',
    }},
    { Component: LineGraph, props: {
      points: [2, 5, 10, 18, 30, 50, 75, 100],
      color: '#10b981',
      labels: ['M1', 'M3', 'M6', 'M9', 'M12', 'M18', 'M24', 'M36'],
      caption: 'Content marketing: spor start, kumulativan dugoročan efekat.',
    }},
  ],
  'sales-funnel-koji-radi-na-autopilotu': [
    { Component: FunnelDiagram, props: {
      stages: [
        { label: 'Awareness', value: 'Oglasi, sadržaj, SEO' },
        { label: 'Interest', value: 'Lead magnet, email' },
        { label: 'Decision', value: 'Ponuda, social proof' },
        { label: 'Action', value: 'Kupovina / Upit' },
      ],
      caption: 'Automatizovan sales funnel: svaki nivo filtrira i kvalifikuje.',
    }},
  ],
  'lokalni-seo-kako-se-pojaviti-prvi': [
    { Component: ChecklistCard, props: {
      title: 'Lokalni SEO checklist',
      items: [
        { ok: true, text: 'Google Business profil optimizovan i verifikovan' },
        { ok: true, text: 'NAP (Naziv, Adresa, Telefon) konzistentan svuda' },
        { ok: true, text: 'Lokalne ključne reči na sajtu' },
        { ok: true, text: '10+ recenzija sa odgovorima' },
        { ok: false, text: 'Sajt bez SSL sertifikata' },
        { ok: false, text: 'Nema mobilne verzije' },
      ],
      caption: 'Osnove lokalnog SEO-a koje svaki lokalni biznis mora da pokrije.',
    }},
  ],
  'email-marketing-kralj-konverzija': [
    { Component: MetricsDashboard, props: {
      metrics: [
        { value: '42x', label: 'Prosečan ROI' },
        { value: '21%', label: 'Open rate' },
        { value: '3.7%', label: 'Click rate' },
        { value: '€0.08', label: 'Cena po emailu' },
      ],
      caption: 'Email marketing ima daleko najveći ROI od svih kanala.',
    }},
    { Component: ProcessFlow, props: {
      nodes: [
        { icon: '📧', text: 'Welcome' },
        { icon: '📚', text: 'Nurture' },
        { icon: '🎯', text: 'Offer' },
        { icon: '🔄', text: 'Retention' },
      ],
      caption: 'Automatizovana email sekvenca koja vodi do konverzije.',
    }},
  ],
  '5-gresaka-landing-stranice-konverzije': [
    { Component: WireframeSketch, props: {
      elements: [
        { type: 'headline' },
        { type: 'subline' },
        { type: 'cta', text: 'Započnite' },
        { type: 'text' },
        { type: 'image' },
        { type: 'form' },
        { type: 'cta', text: 'Pošaljite' },
      ],
      caption: 'Struktura landing stranice: naslov, podnaslov, CTA, dokaz, forma.',
    }},
    { Component: ChecklistCard, props: {
      title: '5 grešaka koje ubijaju konverziju',
      items: [
        { ok: false, text: 'Previše opcija i linkova na stranici' },
        { ok: false, text: 'Nejasan naslov koji ne komunicira vrednost' },
        { ok: false, text: 'CTA dugme nevidljivo ili konfuzno' },
        { ok: false, text: 'Nema socijalnog dokaza' },
        { ok: false, text: 'Spora stranica (3+ sekunde učitavanja)' },
      ],
    }},
  ],
  'pricing-psihologija-kako-luksuzni-brendovi-kontrolisu-percepciju-cene': [
    { Component: PriceAnchor, props: {
      prices: [
        { price: '€45', label: 'Standardna linija' },
        { price: '€280', label: 'Premium linija', tag: 'Bestseller', highlight: true },
        { price: '€1.200', label: 'Ekskluzivna kolekcija' },
      ],
      caption: 'Luksuzni brendovi koriste sidro (visoka cena) da srednju opciju učine privlačnijom.',
    }},
    { Component: FrameworkGrid, props: {
      cells: [
        { icon: '⚓', title: 'Sidrenje', desc: 'Prva cena postavlja referentnu tačku' },
        { icon: '🪞', title: 'Ogledalo', desc: 'Kupac se poistovećuje sa brendom' },
        { icon: '⏳', title: 'Oskudica', desc: 'Ograničena dostupnost podiže vrednost' },
        { icon: '🏷', title: 'Kontekst', desc: 'Okruženje menja percepciju cene' },
      ],
      caption: 'Četiri mehanizma kontrole percepcije cene.',
    }},
  ],
  '17-godina-marketing-iskustva-u-jednom-tekstu': [
    { Component: TimelinePath, props: {
      milestones: [
        { label: 'Faza 1', text: 'Učenje kroz greške i male budžete' },
        { label: 'Faza 2', text: 'Pronalaženje prvog sistema koji radi' },
        { label: 'Faza 3', text: 'Skaliranje i poučavanje drugih' },
        { label: 'Faza 4', text: 'Okviri koji se primenjuju na svaki biznis' },
      ],
      caption: '17 godina iskustva komprimovano u ključne faze.',
    }},
  ],
  'kako-napraviti-marketing-budzet-koji-ima-smisla': [
    { Component: BarChart, props: {
      bars: [
        { label: 'Oglasi', value: 40, display: '40%' },
        { label: 'Sadržaj', value: 25, display: '25%' },
        { label: 'Email', value: 15, display: '15%' },
        { label: 'SEO', value: 12, display: '12%' },
        { label: 'Alati', value: 8, display: '8%' },
      ],
      caption: 'Primer alokacije marketing budžeta za firmu u rastu.',
    }},
  ],
  'ugc-buducnost-oglasa': [
    { Component: ComparisonChart, props: {
      left: { title: 'Tradicionalni oglas', points: ['Studijska produkcija', 'Profesionalni model', 'Visok budžet', 'Nizak engagement'], good: false },
      right: { title: 'UGC sadržaj', points: ['Snimljen telefonom', 'Realan korisnik', 'Nizak budžet', 'Visok engagement'], good: true },
      caption: 'UGC performira bolje jer izgleda autentično, ne kao reklama.',
    }},
  ],
  'automatizacija-marketinga-sta-mozete-delegirati-masini': [
    { Component: ProcessFlow, props: {
      nodes: [
        { icon: '📥', text: 'Lead dolazi' },
        { icon: '🤖', text: 'Auto email' },
        { icon: '📊', text: 'Lead scoring' },
        { icon: '📞', text: 'Prodaja zove' },
      ],
      caption: 'Automatizovani pipeline: od lead-a do poziva za prodaju.',
    }},
    { Component: FrameworkGrid, props: {
      cells: [
        { icon: '📧', title: 'Email sekvence', desc: 'Welcome, nurture, ponuda' },
        { icon: '💬', title: 'Chatbot', desc: 'Kvalifikacija 24/7' },
        { icon: '📱', title: 'SMS/WhatsApp', desc: 'Podsetnici i follow-up' },
        { icon: '📊', title: 'Izveštaji', desc: 'Automatski dashboard' },
      ],
      caption: 'Četiri oblasti gde automatizacija donosi najveću uštedu.',
    }},
  ],
  'lokalni-biznis-vs-online-hibridna-strategija': [
    { Component: ComparisonChart, props: {
      left: { title: 'Samo lokalno', points: ['Fizički promet', 'Reputacija na terenu', 'Ograničen doseg', 'Manja margina'], good: false },
      right: { title: 'Hibridno', points: ['Lokalno + online prodaja', 'Širi doseg', 'Viša prosečna korpa', 'Email + retargeting'], good: true },
      caption: 'Hibridna strategija kombinuje snagu lokalnog brenda sa online dosegom.',
    }},
  ],
  'kako-citati-marketing-izvestaj': [
    { Component: MetricsDashboard, props: {
      metrics: [
        { value: 'CTR', label: 'Koliko klikova po prikazu' },
        { value: 'CPA', label: 'Cena po akviziciji' },
        { value: 'ROAS', label: 'Povrat na uloženo u oglase' },
        { value: 'LTV', label: 'Doživotna vrednost kupca' },
      ],
      caption: 'Četiri metrike koje morate razumeti u svakom izveštaju.',
    }},
  ],
  'zasto-vas-sajt-ne-prodaje': [
    { Component: FunnelDiagram, props: {
      stages: [
        { label: 'Posetilac dolazi', value: '100%' },
        { label: 'Čita sadržaj', value: '60%' },
        { label: 'Razume ponudu', value: '25%' },
        { label: 'Kontaktira', value: '3%' },
      ],
      caption: 'Gde se gube posetioci? Svaki nivo je prilika za poboljšanje.',
    }},
    { Component: WireframeSketch, props: {
      elements: [
        { type: 'headline' },
        { type: 'subline' },
        { type: 'image' },
        { type: 'text' },
        { type: 'cta', text: 'Kontaktirajte nas' },
        { type: 'form' },
      ],
      caption: 'Sajt koji prodaje ima jasnu strukturu: naslov → vrednost → dokaz → CTA.',
    }},
  ],
  'kako-napisati-ponudu-koja-zatvara-posao': [
    { Component: FormulaBlock, props: {
      title: 'Struktura pobedničke ponude',
      steps: [{ short: '🔍', full: 'Dijagnoza' }, { short: '💡', full: 'Rešenje' }, { short: '📊', full: 'Rezultat' }, { short: '💰', full: 'Investicija' }, { short: '🤝', full: 'Sledeći korak' }],
      caption: 'Pet delova ponude koja zatvara posao.',
    }},
  ],
  'facebook-vs-instagram-oglasi-gde-je-vasa-publika': [
    { Component: ComparisonChart, props: {
      left: { title: 'Facebook', points: ['Starija demografija (30-55)', 'Tekst + link formati', 'Grupe i zajednice', 'Veća baza korisnika'], good: true },
      right: { title: 'Instagram', points: ['Mlađa demografija (18-35)', 'Vizuelni i video formati', 'Stories i Reels', 'Viši engagement rate'], good: true },
      caption: 'Izbor zavisi od vaše ciljne grupe, ne od popularnosti platforme.',
    }},
  ],
  'koliko-kosta-los-marketing': [
    { Component: BarChart, props: {
      bars: [
        { label: 'Bačen budžet', value: 70, display: '€12K' },
        { label: 'Propuštena prodaja', value: 90, display: '€35K' },
        { label: 'Cena popravljanja', value: 40, display: '€8K' },
        { label: 'Reputaciona šteta', value: 55, display: '???' },
      ],
      caption: 'Loš marketing ne košta samo budžet. Košta i propuštene prilike.',
    }},
  ],
  'kako-napraviti-landing-stranicu-koja-konvertuje': [
    { Component: WireframeSketch, props: {
      elements: [
        { type: 'headline' },
        { type: 'subline' },
        { type: 'cta', text: 'Započnite' },
        { type: 'image' },
        { type: 'text' },
        { type: 'form' },
        { type: 'cta', text: 'Pošaljite upit' },
      ],
      caption: 'Idealna struktura landing stranice koja konvertuje.',
    }},
    { Component: MetricsDashboard, props: {
      metrics: [
        { value: '<3s', label: 'Brzina učitavanja' },
        { value: '1', label: 'Cilj po stranici' },
        { value: '3+', label: 'Social proof elementi' },
        { value: 'F', label: 'Obrazac čitanja' },
      ],
      caption: 'Ključni parametri landing stranice sa visokom konverzijom.',
    }},
  ],
}

export {
  FunnelDiagram,
  ComparisonChart,
  TimelinePath,
  MetricsDashboard,
  FormulaBlock,
  ProcessFlow,
  ChecklistCard,
  BarChart,
  LineGraph,
  FrameworkGrid,
  PriceAnchor,
  WireframeSketch,
}
