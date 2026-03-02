import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Lightweight per-page SEO meta tags (no external deps).
 * Sets document.title + meta description + og tags on mount.
 */
export default function PageMeta({ title, description, ogImage }) {
  const location = useLocation()
  const siteName = 'Platinum Zenith'
  const baseUrl = 'https://platinumzenith.com'
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Digitalna Agencija`
  const ogImg = ogImage || `${baseUrl}/og-image.jpg`
  const url = `${baseUrl}${location.pathname}`

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
      setMeta('name', 'twitter:description', description)
    }

    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', ogImg)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:image', ogImg)

    return () => {
      document.title = `${siteName} | Digitalna Agencija`
    }
  }, [fullTitle, description, url, ogImg])

  return null
}
