import { useEffect, useRef } from 'react'

/**
 * Lightweight scroll-reveal: adds 'revealed' class when element enters viewport.
 * Pure IntersectionObserver — zero per-frame JS cost (unlike Framer Motion whileInView).
 */
export default function useReveal(options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          obs.unobserve(el) // once
        }
      },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}
