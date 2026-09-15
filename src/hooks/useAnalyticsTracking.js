import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CONSENT_EVENT, hasAnalyticsConsent, getMeasurement, sendMeasurement, trackEvent } from '../lib/analytics'

let vendorPromise
function loadVendors() {
  if (vendorPromise) return vendorPromise
  vendorPromise = fetch('/api/analytics/config').then(r => r.json()).then(config => {
    if (!hasAnalyticsConsent()) return
    const script = (src) => { const el = document.createElement('script'); el.async = true; el.src = src; document.head.append(el) }
    if (config.gaId) {
      window.dataLayer = window.dataLayer || []
      window.gtag = function () { window.dataLayer.push(arguments) }
      window.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' })
      window.gtag('js', new Date())
      window.gtag('config', config.gaId, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false })
      script(`https://www.googletagmanager.com/gtag/js?id=${config.gaId}`)
    }
    if (config.clarityId) {
      window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments) }
      window.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' })
      script(`https://www.clarity.ms/tag/${config.clarityId}`)
    }
  }).catch(() => { vendorPromise = undefined })
  return vendorPromise
}

export default function useAnalyticsTracking() {
  const { pathname, search } = useLocation()
  const [allowed, setAllowed] = useState(false)
  useEffect(() => {
    const update = () => setAllowed(hasAnalyticsConsent())
    update()
    window.addEventListener(CONSENT_EVENT, update)
    return () => window.removeEventListener(CONSENT_EVENT, update)
  }, [])

  useEffect(() => {
    if (!allowed || pathname.startsWith('/log')) return
    let measurement = getMeasurement()
    if (!measurement) return
    const contentType = pathname.startsWith('/blog/') ? 'blog_post' : 'page'
    let pageId = crypto.randomUUID()
    const visit = () => sendMeasurement('visit', { ...measurement, pageId, path: pathname, contentType, language: navigator.language, viewportW: innerWidth, viewportH: innerHeight })
    visit()
    let disposed = false
    loadVendors().then(() => {
      if (!disposed) {
        window.gtag?.('event', 'page_view', { page_location: location.origin + pathname, page_title: document.title })
        window.clarity?.('identify', measurement.visitorId, measurement.sessionId, pageId)
      }
    })
    let activeSince = document.hidden ? null : performance.now()
    let activeMs = 0
    let reportedMs = 0
    const checkpoints = new Set()
    const flush = () => {
      if (activeSince !== null) { activeMs += performance.now() - activeSince; activeSince = document.hidden ? null : performance.now() }
      const delta = Math.floor((activeMs - reportedMs) / 1000)
      if (delta > 0) {
        sendMeasurement('event', { sessionId: measurement.sessionId, path: pathname, eventName: 'active_time', value: delta, meta: { pageId } })
        reportedMs += delta * 1000
      }
      if (!document.hidden) {
        const current = getMeasurement()
        if (current && current.sessionId !== measurement.sessionId) { measurement = current; pageId = crypto.randomUUID(); visit(); checkpoints.clear() }
      }
    }
    const visibility = () => {
      flush()
      if (!document.hidden) {
        const previousId = measurement.sessionId
        measurement = getMeasurement()
        if (measurement && previousId !== measurement.sessionId) { pageId = crypto.randomUUID(); visit(); checkpoints.clear() }
      }
      activeSince = document.hidden ? null : performance.now()
    }
    const scroll = () => {
      const available = document.documentElement.scrollHeight - innerHeight
      if (available <= 0) return
      const depth = Math.round(scrollY / available * 100)
      for (const threshold of [25, 50, 75, 90]) {
        if (depth >= threshold && !checkpoints.has(threshold)) { checkpoints.add(threshold); trackEvent('scroll_depth', { pageId, threshold }, threshold) }
      }
    }
    const click = (event) => {
      const link = event.target.closest?.('a[href]')
      if (!link) return
      const url = new URL(link.href, location.origin)
      // Track destinations, never visible copy or personal contact values.
      if (url.protocol === 'tel:') trackEvent('phone_click')
      else if (url.protocol === 'mailto:') trackEvent('email_click')
      else if (url.origin === location.origin && url.pathname === '/kontakt') trackEvent('contact_click', { from_path: pathname })
      else if (url.origin !== location.origin && /^https?:$/.test(url.protocol)) trackEvent('outbound_click', { destination_host: url.hostname })
    }
    const heartbeat = setInterval(flush, 15000)
    document.addEventListener('visibilitychange', visibility)
    window.addEventListener('pagehide', flush)
    window.addEventListener('scroll', scroll, { passive: true })
    document.addEventListener('click', click)
    return () => {
      disposed = true
      flush()
      clearInterval(heartbeat)
      document.removeEventListener('visibilitychange', visibility)
      window.removeEventListener('pagehide', flush)
      window.removeEventListener('scroll', scroll)
      document.removeEventListener('click', click)
    }
  }, [allowed, pathname, search])
}
