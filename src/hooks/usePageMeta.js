/**
 * Page meta hook — lazy-load metadata map to keep initial homepage bundle smaller.
 */
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function pageNameFromTitle(title) {
  if (!title) return 'Stranica'
  return title.split('|')[0].trim()
}

const INTERNAL_NOINDEX_PATHS = new Set([
  '/dashboard',
  '/prijave',
  '/poruke',
  '/newsletter',
  '/emails',
  '/analytics',
])

export default function usePageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    let cancelled = false

    const applyMeta = async () => {
      const metaModule = await import('./pageMetaData.js')
      if (cancelled) return

      const {
        pageMeta,
        orgSchema,
        localBusinessSchema,
        websiteSchema,
        pageSchemas,
        setJsonLd,
        SITE_URL,
      } = metaModule

      const meta = pageMeta[pathname] || pageMeta['/']
      document.title = meta.title

      const descTag = document.querySelector('meta[name="description"]')
      if (descTag) descTag.setAttribute('content', meta.description)

      let kwTag = document.querySelector('meta[name="keywords"]')
      if (!kwTag) {
        kwTag = document.createElement('meta')
        kwTag.name = 'keywords'
        document.head.appendChild(kwTag)
      }
      kwTag.setAttribute('content', meta.keywords || '')

      const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
      const shouldNoIndex = normalizedPath.startsWith('/draft/') || INTERNAL_NOINDEX_PATHS.has(normalizedPath)

      const robotsTag = document.querySelector('meta[name="robots"]')
      if (robotsTag) {
        const defaultRobots = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        robotsTag.setAttribute('content', shouldNoIndex ? 'noindex, nofollow' : defaultRobots)
      }

      const ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) ogTitle.setAttribute('content', meta.title)
      const ogDesc = document.querySelector('meta[property="og:description"]')
      if (ogDesc) ogDesc.setAttribute('content', meta.description)

      const canonicalUrl = `${SITE_URL}${normalizedPath}`
      const canonical = document.querySelector('link[rel="canonical"]')
      if (canonical) canonical.setAttribute('href', canonicalUrl)
      const ogUrl = document.querySelector('meta[property="og:url"]')
      if (ogUrl) ogUrl.setAttribute('content', canonicalUrl)

      const ogType = document.querySelector('meta[property="og:type"]')
      if (ogType) ogType.setAttribute('content', normalizedPath.startsWith('/blog/') ? 'article' : 'website')

      const ogImageUrl = meta.ogImage || `${SITE_URL}/og-image.jpg`

      const ogImage = document.querySelector('meta[property="og:image"]')
      if (ogImage) ogImage.setAttribute('content', ogImageUrl)
      const ogImageAltContent = meta.ogImageAlt || 'Platinum Zenith - Digitalna agencija iz Zrenjanina'
      const ogImageAlt = document.querySelector('meta[property="og:image:alt"]')
      if (ogImageAlt) ogImageAlt.setAttribute('content', ogImageAltContent)
      const twImage = document.querySelector('meta[name="twitter:image"]')
      if (twImage) twImage.setAttribute('content', ogImageUrl)
      const twImageAlt = document.querySelector('meta[name="twitter:image:alt"]')
      if (twImageAlt) twImageAlt.setAttribute('content', ogImageAltContent)
      const twTitle = document.querySelector('meta[name="twitter:title"]')
      if (twTitle) twTitle.setAttribute('content', meta.title)
      const twDesc = document.querySelector('meta[name="twitter:description"]')
      if (twDesc) twDesc.setAttribute('content', meta.description)

      setJsonLd('ld-org', orgSchema)
      setJsonLd('ld-local-business', localBusinessSchema)
      if (pathname === '/') setJsonLd('ld-website', websiteSchema)
      else {
        const ws = document.getElementById('ld-website')
        if (ws) ws.remove()
      }

      if (pageSchemas[pathname]) setJsonLd('ld-page', pageSchemas[pathname])
      else {
        const ps = document.getElementById('ld-page')
        if (ps) ps.remove()
      }

      const blogMatch = pathname.match(/^\/blog\/(.+)$/)
      if (blogMatch) {
        import('../pages/blog/blogData').then(({ blogPosts }) => {
          if (cancelled) return

          const post = blogPosts.find(p => p.slug === blogMatch[1])
          if (post) {
            document.title = `${post.title} | Platinum Zenith Blog`
            if (descTag) descTag.setAttribute('content', post.excerpt)
            if (ogTitle) ogTitle.setAttribute('content', post.title)
            if (ogDesc) ogDesc.setAttribute('content', post.excerpt)
            if (robotsTag && post.isDraft) robotsTag.setAttribute('content', 'noindex, nofollow')

            setJsonLd('ld-breadcrumb', {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Početna', item: SITE_URL },
                { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
                { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
              ],
            })
          }
        })
      } else if (pathname === '/blog') {
        setJsonLd('ld-breadcrumb', {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Početna', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
          ],
        })
      } else {
        const art = document.getElementById('ld-article')
        if (art) art.remove()

        if (pathname !== '/') {
          setJsonLd('ld-breadcrumb', {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Početna', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: pageNameFromTitle(meta.title), item: canonicalUrl },
            ],
          })
        } else {
          const bc = document.getElementById('ld-breadcrumb')
          if (bc) bc.remove()
        }
      }
    }

    applyMeta().catch(() => {})

    return () => {
      cancelled = true
    }
  }, [pathname])
}
