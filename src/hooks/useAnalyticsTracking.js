import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const SESSION_KEY = 'pz_analytics_session'
const LAST_PATH_KEY = 'pz_analytics_last_path'

function getOrCreateSessionId() {
  let sessionId = localStorage.getItem(SESSION_KEY)
  if (sessionId) return sessionId

  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    sessionId = crypto.randomUUID()
  } else {
    sessionId = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
  }

  localStorage.setItem(SESSION_KEY, sessionId)
  return sessionId
}

function getContentType(pathname) {
  if (pathname.startsWith('/blog/')) return 'blog_post'
  if (pathname === '/blog') return 'blog_index'
  if (pathname.startsWith('/log')) return 'admin'
  return 'page'
}

function getSlug(pathname, contentType) {
  if (contentType !== 'blog_post') return ''
  return pathname.replace('/blog/', '')
}

function sendJson(endpoint, payload) {
  fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {
    // Silent fail: analytics should never block UX
  })
}

export default function useAnalyticsTracking() {
  const location = useLocation()
  const pageEnterAtRef = useRef(Date.now())
  const lastTrackedPathRef = useRef('')

  useEffect(() => {
    const sessionId = getOrCreateSessionId()
    const pathname = location.pathname || '/'
    const contentType = getContentType(pathname)
    const slug = getSlug(pathname, contentType)
    const params = new URLSearchParams(location.search || '')

    const previousPath = sessionStorage.getItem(LAST_PATH_KEY) || ''
    const externalReferrer = document.referrer || ''
    const referrer = previousPath || externalReferrer

    sessionStorage.setItem(LAST_PATH_KEY, pathname)

    const dedupeKey = `${pathname}${location.search || ''}`
    if (lastTrackedPathRef.current !== dedupeKey) {
      sendJson('/api/analytics/visit', {
        sessionId,
        path: pathname,
        slug,
        contentType,
        referrer,
        utmSource: params.get('utm_source') || '',
        utmMedium: params.get('utm_medium') || '',
        utmCampaign: params.get('utm_campaign') || '',
        utmTerm: params.get('utm_term') || '',
        utmContent: params.get('utm_content') || '',
        language: navigator.language || '',
        screenW: window.screen?.width || null,
        screenH: window.screen?.height || null,
        viewportW: window.innerWidth || null,
        viewportH: window.innerHeight || null,
        tzOffset: new Date().getTimezoneOffset(),
      })

      lastTrackedPathRef.current = dedupeKey
    }

    pageEnterAtRef.current = Date.now()

    if (contentType === 'blog_post') {
      const thresholds = [25, 50, 75, 90]
      const seen = new Set()

      const onScroll = () => {
        const el = document.documentElement
        const scrollTop = el.scrollTop || document.body.scrollTop
        const scrollHeight = el.scrollHeight - el.clientHeight
        if (scrollHeight <= 0) return

        const depth = Math.round((scrollTop / scrollHeight) * 100)
        thresholds.forEach((t) => {
          if (depth >= t && !seen.has(t)) {
            seen.add(t)
            sendJson('/api/analytics/event', {
              sessionId,
              path: pathname,
              slug,
              contentType,
              eventName: 'scroll_depth',
              value: t,
              meta: { threshold: t },
            })
          }
        })
      }

      const engagedTimers = [15000, 45000].map((ms) => {
        const seconds = Math.round(ms / 1000)
        return setTimeout(() => {
          sendJson('/api/analytics/event', {
            sessionId,
            path: pathname,
            slug,
            contentType,
            eventName: 'engaged_time',
            value: seconds,
            meta: { seconds },
          })
        }, ms)
      })

      window.addEventListener('scroll', onScroll, { passive: true })

      return () => {
        window.removeEventListener('scroll', onScroll)
        engagedTimers.forEach(clearTimeout)

        const seconds = Math.max(1, Math.round((Date.now() - pageEnterAtRef.current) / 1000))
        sendJson('/api/analytics/event', {
          sessionId,
          path: pathname,
          slug,
          contentType,
          eventName: 'read_time_total',
          value: seconds,
          meta: { seconds },
        })
      }
    }

    return () => {
      const seconds = Math.max(1, Math.round((Date.now() - pageEnterAtRef.current) / 1000))
      sendJson('/api/analytics/event', {
        sessionId,
        path: pathname,
        slug,
        contentType,
        eventName: 'time_on_page',
        value: seconds,
        meta: { seconds },
      })
    }
  }, [location.pathname, location.search])
}
