import { test } from 'node:test'
import assert from 'node:assert/strict'
import { describeArrival, getMeasurement, analyticsPageUrl } from '../src/lib/analytics.js'

test('URL attribution preserves arbitrary languages and excludes search queries', () => {
  const result = describeArrival('https://platinumzenith.com/kontakt?utm_source=%E6%A4%9C%E7%B4%A2&utm_medium=cpc&utm_campaign=salon&email=private', 'https://www.google.com/search?q=private')
  assert.equal(result.source, '検索')
  assert.equal(result.medium, 'cpc')
  assert.equal(result.landingPath, '/kontakt')
  assert.equal(result.referrer, 'https://www.google.com')
  assert.equal(describeArrival('https://platinumzenith.com/', 'https://chatgpt.com/c/123').source, 'chatgpt.com')
  assert.equal(describeArrival('https://platinumzenith.com/', 'https://platinumzenith.com/blog').source, 'direct')
  const measured = new URL(analyticsPageUrl('https://platinumzenith.com/kontakt?utm_source=%E6%A4%9C%E7%B4%A2&utm_medium=cpc&utm_campaign=salon&utm_content=video&email=private&q=private#private'))
  assert.equal(measured.searchParams.get('utm_source'), '検索')
  assert.equal(measured.searchParams.get('utm_campaign'), 'salon')
  assert.equal(measured.searchParams.size, 4)
  assert.equal(measured.hash, '')
  assert.equal(analyticsPageUrl('https://platinumzenith.com/?email=private'), 'https://platinumzenith.com/')
})

test('consent gates identifiers; inactivity renews the session and retains the first touch', context => {
  const values = new Map()
  globalThis.localStorage = { getItem: key => values.get(key), setItem: (key, value) => values.set(key, value) }
  globalThis.location = new URL('https://platinumzenith.com/seo-agencija?utm_source=newsletter&utm_medium=email')
  globalThis.document = { referrer: '' }
  let now = 1_800_000_000_000
  context.mock.method(Date, 'now', () => now)
  assert.equal(getMeasurement(), null)
  values.set('pz_analytics_consent', 'granted')
  const first = getMeasurement()
  now += 29 * 60000
  const second = getMeasurement()
  assert.equal(first.sessionId, second.sessionId)
  now += 31 * 60000
  const returned = getMeasurement()
  assert.notEqual(first.sessionId, returned.sessionId)
  assert.equal(first.visitorId, returned.visitorId)
  assert.equal(returned.firstTouch.source, 'newsletter')
  assert.equal(returned.arrival.source, 'direct')
  values.set('pz_analytics_consent', 'denied')
  assert.equal(getMeasurement(), null)
})
