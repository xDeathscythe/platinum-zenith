import { useEffect, useRef } from 'react'

/**
 * Lightweight scroll-reveal wrapper.
 * Replaces Framer Motion whileInView with pure CSS + IntersectionObserver.
 * Zero per-frame JS cost. GPU-composited transitions.
 */
export default function Reveal({ children, className = '', type = 'up', delay = 0, threshold = 0.15, as: Tag = 'div' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (delay) el.style.transitionDelay = `${delay}ms`
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          obs.unobserve(el)
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay, threshold])

  const baseClass = type === 'left' ? 'reveal-left' :
                    type === 'scale' ? 'reveal-scale' :
                    type === 'stagger' ? 'reveal reveal-stagger' : 'reveal'

  return <Tag ref={ref} className={`${baseClass} ${className}`}>{children}</Tag>
}
