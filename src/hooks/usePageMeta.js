/**
 * Page meta hook — tiny footprint in index bundle.
 * All meta data is lazy-loaded from pageMetaData.js on first render.
 */
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

let metaCache = null

export default function usePageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const apply = async () => {
      if (!metaCache) {
        metaCache = await import('./pageMetaData.js')
      }
      const { pageMeta, orgSchema, websiteSchema, pageSchemas, setJsonLd, SITE_URL } = metaCache

      const meta = pageMeta[pathname] || pageMeta['/']
      document.title = meta.title

      const descTag = document.querySelector('meta[name="description"]')
      if (descTag) descTag.setAttribute('content', meta.description)

      let kwTag = document.querySelector('meta[name="keywords"]')
      if (!kwTag) { kwTag = document.createElement('meta'); kwTag.name = 'keywords'; document.head.appendChild(kwTag) }
      kwTag.setAttribute('content', meta.keywords || '')

      const ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) ogTitle.setAttribute('content', meta.title)
      const ogDesc = document.querySelector('meta[property="og:description"]')
      if (ogDesc) ogDesc.setAttribute('content', meta.description)

      const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`
      const canonical = document.querySelector('link[rel="canonical"]')
      if (canonical) canonical.setAttribute('href', canonicalUrl)
      const ogUrl = document.querySelector('meta[property="og:url"]')
      if (ogUrl) ogUrl.setAttribute('content', canonicalUrl)

      setJsonLd('ld-org', orgSchema)
      if (pathname === '/') setJsonLd('ld-website', websiteSchema)
      else { const ws = document.getElementById('ld-website'); if (ws) ws.remove() }

      if (pageSchemas[pathname]) setJsonLd('ld-page', pageSchemas[pathname])
      else { const ps = document.getElementById('ld-page'); if (ps) ps.remove() }

      // Blog data — separate lazy import
      const blogMatch = pathname.match(/^\/blog\/(.+)$/)
      if (blogMatch || pathname === '/blog') {
        const { blogPosts } = await import('../pages/blog/blogData')
        if (blogMatch) {
          const post = blogPosts.find(p => p.slug === blogMatch[1])
          if (post) {
            document.title = `${post.title} | Platinum Zenith Blog`
            if (descTag) descTag.setAttribute('content', post.excerpt)
            if (ogTitle) ogTitle.setAttribute('content', post.title)
            if (ogDesc) ogDesc.setAttribute('content', post.excerpt)
            setJsonLd('ld-article', { "@context": "https://schema.org", "@type": "Article", "headline": post.title, "description": post.excerpt, "datePublished": post.date, "author": { "@type": "Organization", "name": "Platinum Zenith" }, "inLanguage": "sr" })
            setJsonLd('ld-breadcrumb', { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog` },
              { "@type": "ListItem", "position": 3, "name": post.title, "item": `${SITE_URL}/blog/${post.slug}` }
            ]})
          }
        } else {
          setJsonLd('ld-breadcrumb', { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog` }
          ]})
        }
      } else {
        const art = document.getElementById('ld-article'); if (art) art.remove()
        const bc = document.getElementById('ld-breadcrumb'); if (bc) bc.remove()
      }
    }

    apply()
  }, [pathname])
}
