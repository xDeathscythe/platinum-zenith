export const text = (value, max = 120) => typeof value === 'string' ? value.trim().slice(0, max) : ''
export const validId = value => typeof value === 'string' && /^[0-9a-f-]{36}$/i.test(value)
export function cleanPath(value) {
  try { return new URL(text(value, 500), 'https://platinumzenith.com').pathname } catch { return '/' }
}
export function cleanTouch(value = {}) {
  let referrer = ''
  try { referrer = new URL(value.referrer).origin } catch { /* No referral. */ }
  return {
    source: text(value.source) || 'unknown', medium: text(value.medium) || 'unknown',
    campaign: text(value.campaign), content: text(value.content),
    landingPath: cleanPath(value.landingPath || '/'), referrer,
  }
}

export function ensureSession(db, payload) {
  if (!validId(payload?.sessionId) || !validId(payload?.visitorId)) return null
  const arrival = cleanTouch(payload.arrival)
  const first = cleanTouch(payload.firstTouch)
  db.run(`INSERT OR IGNORE INTO measurement_sessions
    (id, visitor_id, source, medium, campaign, landing_path, referrer, first_touch_json)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
  [payload.sessionId, payload.visitorId, arrival.source, arrival.medium, arrival.campaign, arrival.landingPath, arrival.referrer, JSON.stringify(first)])
  return payload.sessionId
}

export function attachLead(db, submissionId, attribution) {
  const sessionId = ensureSession(db, attribution)
  db.run('UPDATE submissions SET session_id = ?, lead_stage = ? WHERE id = ?', [sessionId, 'new', submissionId])
}
