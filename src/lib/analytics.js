const KEY = 'pz_measurement_v2'
export const CONSENT_KEY = 'pz_analytics_consent'
export const CONSENT_EVENT = 'pz-consent-change'
const HALF_HOUR = 30 * 60 * 1000
let memory
let arrivalConsumed = false

export function hasAnalyticsConsent() {
  try { return localStorage.getItem(CONSENT_KEY) === 'granted' } catch { return false }
}

export function setAnalyticsConsent(allowed) {
  try {
    localStorage.setItem(CONSENT_KEY, allowed ? 'granted' : 'denied')
    if (!allowed) {
      localStorage.removeItem(KEY)
      localStorage.removeItem('pz_analytics_session')
      sessionStorage.removeItem('pz_analytics_last_path')
      memory = undefined
    }
  } catch { /* Storage can be disabled by the browser. */ }
  if (!allowed) {
    window.gtag?.('consent', 'update', { analytics_storage: 'denied', ad_storage: 'denied' })
    window.clarity?.('consentv2', { ad_Storage: 'denied', analytics_Storage: 'denied' })
    for (const cookie of document.cookie.split(';')) {
      const name = cookie.trim().split('=')[0]
      if (!/^(_ga(?:_|$)|_clck$|_clsk$)/.test(name)) continue
      for (const domain of ['', location.hostname, `.${location.hostname}`]) {
        document.cookie = `${name}=; Max-Age=0; Path=/;${domain ? ` Domain=${domain};` : ''} SameSite=Lax`
      }
    }
  }
  window.dispatchEvent(new Event(CONSENT_EVENT))
  if (!allowed) window.location.reload()
}

export function describeArrival(href, referrer = '') {
  const url = new URL(href)
  let source = '', referrerOrigin = ''
  try {
    const previous = new URL(referrer)
    if (previous.origin !== url.origin) {
      source = previous.hostname
      referrerOrigin = previous.origin
    }
  } catch { /* Direct arrival has no referrer. */ }
  const text = (key) => (url.searchParams.get(key) || '').slice(0, 120)
  return {
    source: text('utm_source') || source || 'direct',
    medium: text('utm_medium') || (source ? 'referral' : 'none'),
    campaign: text('utm_campaign'), content: text('utm_content'),
    landingPath: url.pathname, referrer: referrerOrigin,
  }
}

export function getMeasurement() {
  if (!hasAnalyticsConsent()) return null
  const now = Date.now()
  if (!memory) {
    try { memory = JSON.parse(localStorage.getItem(KEY)) } catch { /* Start fresh. */ }
  }
  if (!memory?.visitorId || now - memory.firstSeen > 90 * 86400000) {
    memory = { visitorId: crypto.randomUUID(), firstSeen: now, firstTouch: describeArrival(location.href, document.referrer) }
  }
  if (!memory.sessionId || now - memory.lastActivity >= HALF_HOUR) {
    memory.sessionId = crypto.randomUUID()
    memory.startedAt = now
    memory.arrival = describeArrival(arrivalConsumed ? location.origin + location.pathname : location.href, arrivalConsumed ? '' : document.referrer)
  }
  arrivalConsumed = true
  memory.lastActivity = now
  try { localStorage.setItem(KEY, JSON.stringify(memory)) } catch { /* In-memory session still works. */ }
  return { ...memory }
}

export function sendMeasurement(endpoint, payload) {
  if (!hasAnalyticsConsent()) return
  fetch(`/api/analytics/${endpoint}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload), keepalive: true,
  }).catch(() => {})
}

export function trackEvent(eventName, meta = {}, value = null) {
  const measurement = getMeasurement()
  if (!measurement) return
  sendMeasurement('event', {
    ...measurement, path: location.pathname,
    eventName, meta, value,
  })
  window.gtag?.('event', eventName, { ...meta, ...(value === null ? {} : { value }), page_location: location.origin + location.pathname })
  window.clarity?.('event', eventName)
}

export function contactAttribution() {
  const measurement = getMeasurement()
  return measurement ? { sessionId: measurement.sessionId, visitorId: measurement.visitorId, firstTouch: measurement.firstTouch, arrival: measurement.arrival } : null
}
