/**
 * Page meta hook — inline metadata to avoid extra request in critical path.
 */
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageMeta, orgSchema, websiteSchema, pageSchemas, setJsonLd, SITE_URL } from './pageMetaData.js'

function pageNameFromTitle(title) {
  if (!title) return 'Stranica'
  return title.split('|')[0].trim()
}

export default function usePageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    let cancelled = false

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

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', meta.title)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', meta.description)

    // Normalize: strip trailing slash (except root) to prevent duplicate canonicals
    const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
    const canonicalUrl = `${SITE_URL}${normalizedPath}`
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', canonicalUrl)
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl)

    // OG type: article for blog posts, website for everything else
    const ogType = document.querySelector('meta[property="og:type"]')
    if (ogType) ogType.setAttribute('content', normalizedPath.startsWith('/blog/') ? 'article' : 'website')

    // OG/Twitter image
    const ogImageUrl = meta.ogImage || `${SITE_URL}/og-image.jpg`

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute('content', ogImageUrl)
    const twImage = document.querySelector('meta[name="twitter:image"]')
    if (twImage) twImage.setAttribute('content', ogImageUrl)
    const twTitle = document.querySelector('meta[name="twitter:title"]')
    if (twTitle) twTitle.setAttribute('content', meta.title)
    const twDesc = document.querySelector('meta[name="twitter:description"]')
    if (twDesc) twDesc.setAttribute('content', meta.description)

    // Base schema
    setJsonLd('ld-org', orgSchema)
    if (pathname === '/') setJsonLd('ld-website', websiteSchema)
    else {
      const ws = document.getElementById('ld-website')
      if (ws) ws.remove()
    }

    // Page schema
    if (pageSchemas[pathname]) setJsonLd('ld-page', pageSchemas[pathname])
    else {
      const ps = document.getElementById('ld-page')
      if (ps) ps.remove()
    }

    // Blog-specific schema
    const blogMatch = pathname.match(/^\/blog\/(.+)$/)
    if (blogMatch || pathname === '/blog') {
      import('../pages/blog/blogData').then(({ blogPosts }) => {
        if (cancelled) return

        if (blogMatch) {
          const post = blogPosts.find(p => p.slug === blogMatch[1])
          if (post) {
            document.title = `${post.title} | Platinum Zenith Blog`
            if (descTag) descTag.setAttribute('content', post.excerpt)
            if (ogTitle) ogTitle.setAttribute('content', post.title)
            if (ogDesc) ogDesc.setAttribute('content', post.excerpt)

            setJsonLd('ld-article', {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: post.title,
              description: post.excerpt,
              datePublished: post.date,
              author: { '@type': 'Organization', name: 'Platinum Zenith' },
              inLanguage: 'sr',
            })

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
        } else {
          setJsonLd('ld-breadcrumb', {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Početna', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
            ],
          })
        }
      })
    } else {
      const art = document.getElementById('ld-article')
      if (art) art.remove()

      // Generic breadcrumb for every non-home page
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

    return () => {
      cancelled = true
    }
  }, [pathname])
}
