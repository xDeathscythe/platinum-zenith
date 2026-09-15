import { useEffect, useState, useSyncExternalStore } from 'react'
import { Link } from 'react-router-dom'
import { CONSENT_KEY, CONSENT_EVENT, setAnalyticsConsent } from '../lib/analytics'

const subscribe = callback => { window.addEventListener(CONSENT_EVENT, callback); return () => window.removeEventListener(CONSENT_EVENT, callback) }
const needsChoice = () => { try { return !localStorage.getItem(CONSENT_KEY) } catch { return true } }

export default function AnalyticsConsent() {
  const [open, setOpen] = useState(false)
  const firstVisit = useSyncExternalStore(subscribe, needsChoice, () => false)
  useEffect(() => {
    const show = () => setOpen(true)
    window.addEventListener('pz-open-consent', show)
    const close = () => setOpen(false)
    window.addEventListener(CONSENT_EVENT, close)
    return () => { window.removeEventListener('pz-open-consent', show); window.removeEventListener(CONSENT_EVENT, close) }
  }, [])
  if (!open && !firstVisit) return null
  return <section aria-label="Podešavanja privatnosti" className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-lg z-[10000] bg-page text-ink border border-edge-2 rounded-2xl p-5 shadow-xl">
    <h2 className="font-semibold mb-2">Analitika po vašem izboru</h2>
    <p className="text-sm text-ink-2">Uz vaš pristanak merimo posete i interakcije kako bismo poboljšali sajt. Koristimo sopstvenu analitiku i Microsoft Clarity. Polja sa ličnim podacima ne snimamo. <Link className="underline" to="/politika-privatnosti">Politika privatnosti</Link></p>
    <div className="flex flex-wrap gap-3 mt-4">
      <button className="border border-edge-2 rounded-full px-4 py-2 text-sm" onClick={() => setAnalyticsConsent(false)}>Samo neophodno</button>
      <button className="bg-inv-bg text-inv-fg rounded-full px-4 py-2 text-sm" onClick={() => setAnalyticsConsent(true)}>Prihvatam analitiku</button>
    </div>
  </section>
}
