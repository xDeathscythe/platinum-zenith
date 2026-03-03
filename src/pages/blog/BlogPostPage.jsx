import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { blogPosts } from './blogData'
import { blogIllustrationMap } from './BlogIllustrations'
import BuyerPyramid from './BuyerPyramid'
import FunnelComparison from './FunnelComparison'
import AdAnatomy from './AdAnatomy'
import DopamineFormula from './DopamineFormula'
import FbHero from './illustrations/FbHero'
import FbNewsfeed from './illustrations/FbNewsfeed'
import FbCreativeTypes from './illustrations/FbCreativeTypes'
import PyramidHero from './illustrations/PyramidHero'
import PyramidGoogleAds from './illustrations/PyramidGoogleAds'
import PyramidFullFunnel from './illustrations/PyramidFullFunnel'

const componentMap = {
  '{{pyramid}}': BuyerPyramid,
  '{{funnel}}': FunnelComparison,
  '{{ad-anatomy}}': AdAnatomy,
  '{{dopamine-formula}}': DopamineFormula,
  '{{fb-hero}}': FbHero,
  '{{fb-newsfeed}}': FbNewsfeed,
  '{{fb-creative-types}}': FbCreativeTypes,
  '{{pyramid-hero}}': PyramidHero,
  '{{pyramid-google-ads}}': PyramidGoogleAds,
  '{{pyramid-full-funnel}}': PyramidFullFunnel,
}



function ShareButtons({ title, slug }) {
  const url = `https://platinumzenith.com/blog/${slug}`
  const text = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const channels = [
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.47 2H3.53A1.45 1.45 0 002 3.47v17.06A1.45 1.45 0 003.47 22h17.06A1.45 1.45 0 0022 20.53V3.47A1.45 1.45 0 0020.47 2zM8.09 18.74h-3v-9h3v9zM6.59 8.48a1.56 1.56 0 110-3.12 1.56 1.56 0 010 3.12zM18.91 18.74h-3v-4.26c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.18-1.73 2.39v4.34h-3v-9h2.89v1.3h.04a3.16 3.16 0 012.85-1.56c3.05 0 3.61 2 3.61 4.61v4.65z"/></svg>,
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
    },
    {
      name: 'X',
      href: `https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`,
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    },
  ]

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      const el = document.getElementById('copy-feedback')
      if (el) {
        el.textContent = 'Kopirano!'
        setTimeout(() => { el.textContent = '' }, 2000)
      }
    })
  }

  return (
    <div className="blog-share">
      <span className="blog-share-label">Podeli:</span>
      <div className="blog-share-actions">
        {channels.map(c => (
          <a
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Podeli na ${c.name}`}
            className="blog-share-btn"
          >
            {c.icon}
          </a>
        ))}
        <button
          onClick={copyLink}
          className="blog-share-btn"
          aria-label="Kopiraj link"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
        </button>
      </div>
      <span id="copy-feedback" className="blog-copy-feedback"></span>
    </div>
  )
}



function ReadingProgress() {
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const height = el.scrollHeight - el.clientHeight
      setProgress(height > 0 ? (scrolled / height) * 100 : 0)
      setShowTop(scrolled > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div
        style={{ width: `${progress}%` }}
        className="fixed top-0 left-0 h-[3px] bg-blue-500 z-[100] transition-[width] duration-75"
      />
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-panel border border-edge-2 flex items-center justify-center text-ink-3 hover:text-ink hover:border-ink/20 transition-all shadow-lg"
          aria-label="Nazad na vrh"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </button>
      )}
    </>
  )
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[48px] font-bold mb-4">404</h1>
          <p className="text-ink-3 text-[18px] mb-8">Stranica nije pronađena.</p>
          <Link to="/blog" className="text-blue-400 hover:underline">← Nazad na blog</Link>
        </div>
      </div>
    )
  }

  const lines = post.content.split('\n')
  const hasEmbeddedVisualComponents = lines.some(line => componentMap[line.trim()])
  const illustrations = blogIllustrationMap[post.slug] || []
  const elements = []
  const illustrationBreakpoints = [3, 8]

  let key = 0
  let paragraphCount = 0
  let insertedIllCount = 0
  let isFirstParagraph = true

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()

    if (!trimmed) continue

    if (componentMap[trimmed]) {
      const Comp = componentMap[trimmed]
      elements.push(
        <div key={key++} className="blog-wide">
          <Comp />
        </div>
      )
      continue
    }

    if (trimmed.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="blog-narrow blog-h2">
          {trimmed.slice(3)}
        </h2>
      )
      continue
    }

    if (trimmed.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="blog-narrow blog-h3">
          {trimmed.slice(4)}
        </h3>
      )
      continue
    }

    if (trimmed.startsWith('> ')) {
      elements.push(
        <blockquote key={key++} className="blog-quote">
          <p>{trimmed.slice(2)}</p>
        </blockquote>
      )
      continue
    }

    if (trimmed === '---') {
      elements.push(<hr key={key++} className="blog-hr" />)
      continue
    }

    if (trimmed.startsWith('- ')) {
      const items = []
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2))
        i++
      }
      i--

      elements.push(
        <ul key={key++} className="blog-narrow blog-list">
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ul>
      )
      continue
    }

    paragraphCount += 1

    elements.push(
      <p
        key={key++}
        className="blog-narrow blog-p"
      >
        {renderInline(trimmed)}
      </p>
    )

    if (isFirstParagraph) isFirstParagraph = false

    if (
      !hasEmbeddedVisualComponents &&
      illustrations.length > 0 &&
      insertedIllCount < illustrations.length &&
      illustrationBreakpoints.includes(paragraphCount)
    ) {
      const { Component, props } = illustrations[insertedIllCount]
      elements.push(
        <div key={key++} className="blog-wide blog-illustration-slot">
          <Component {...props} />
        </div>
      )
      insertedIllCount += 1
    }
  }

  if (
    !hasEmbeddedVisualComponents &&
    illustrations.length > 0 &&
    insertedIllCount === 0 &&
    elements.length > 2
  ) {
    const { Component, props } = illustrations[0]
    elements.splice(
      2,
      0,
      <div key="fallback-illustration" className="blog-wide blog-illustration-slot">
        <Component {...props} />
      </div>
    )
  }

  const related = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Aleksandar Nenadović',
      url: 'https://platinumzenith.com/o-nama',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Platinum Zenith',
      url: 'https://platinumzenith.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://platinumzenith.com/pz-logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://platinumzenith.com/blog/${post.slug}`,
    },
    articleSection: post.category,
    wordCount: post.content ? post.content.split(/\s+/).length : undefined,
    inLanguage: 'sr',
  }

  return (
    <article className="blog-article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ReadingProgress />

      <header className="blog-header">
        {/* Aurora background */}
        <div className="blog-aurora">
          <div className="absolute inset-0 only-dark" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero-home-dark.webp)`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#000' }} />
          <div className="absolute inset-0 only-light" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero-home-light.webp)`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundColor: '#fff' }} />
          <div className="absolute inset-x-0 z-[1]" style={{ top: '55vh', height: '52vh', backdropFilter: 'blur(68px)', WebkitBackdropFilter: 'blur(68px)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 82%, transparent 100%)', contain: 'strict' }} />
          <div className="absolute inset-0 z-[2] only-dark" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.7) 80%, #000000 100%)' }} />
          <div className="absolute inset-0 z-[2] only-light" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,0.35) 60%, rgba(255,255,255,0.75) 80%, #ffffff 100%)' }} />
        </div>

        <div className="blog-header-inner">
          <span className="blog-kicker">{post.category}</span>
          <h1 className="blog-title">{post.title}</h1>
          <p className="blog-excerpt">{post.excerpt}</p>
          <ShareButtons title={post.title} slug={post.slug} />
        </div>

        <div className="blog-meta-strip">
          <div className="blog-meta-cell">
            <span className="blog-meta-label">Autor</span>
            <span className="blog-meta-value">Aleksandar Nenadović</span>
          </div>
          <div className="blog-meta-cell">
            <span className="blog-meta-label">Datum</span>
            <span className="blog-meta-value">{post.date}</span>
          </div>
          <div className="blog-meta-cell">
            <span className="blog-meta-label">Vreme čitanja</span>
            <span className="blog-meta-value">{post.readTime}</span>
          </div>
        </div>
      </header>

      <div className="blog-content">
        {elements}
      </div>

      {related.length > 0 && (
        <section className="blog-related">
          <h2 className="blog-related-title">Pročitajte još</h2>
          <div className="blog-related-grid">
            {related.map(r => (
              <Link key={r.slug} to={`/blog/${r.slug}`} className="blog-related-card">
                <span className="blog-related-cat">{r.category}</span>
                <h3 className="blog-related-h3">{r.title}</h3>
                <p className="blog-related-excerpt">{r.excerpt}</p>
                <span className="blog-related-read">{r.readTime}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <footer className="blog-footer">
        <Link to="/blog" className="blog-back">← Svi članci</Link>
      </footer>

      <style>{blogStyles}</style>
    </article>
  )
}

function renderInline(text) {
  const parts = []
  let remaining = text
  let idx = 0

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/)
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/)

    let firstMatch = null
    let firstPos = Infinity

    if (boldMatch && remaining.indexOf(boldMatch[0]) < firstPos) {
      firstPos = remaining.indexOf(boldMatch[0])
      firstMatch = { type: 'bold', match: boldMatch }
    }
    if (linkMatch && remaining.indexOf(linkMatch[0]) < firstPos) {
      firstPos = remaining.indexOf(linkMatch[0])
      firstMatch = { type: 'link', match: linkMatch }
    }

    if (!firstMatch) {
      parts.push(<span key={idx++}>{remaining}</span>)
      break
    }

    if (firstPos > 0) {
      parts.push(<span key={idx++}>{remaining.slice(0, firstPos)}</span>)
    }

    if (firstMatch.type === 'bold') {
      parts.push(<strong key={idx++} className="font-semibold">{firstMatch.match[1]}</strong>)
      remaining = remaining.slice(firstPos + firstMatch.match[0].length)
    } else if (firstMatch.type === 'link') {
      parts.push(
        <a key={idx++} href={firstMatch.match[2]} className="blog-link">
          {firstMatch.match[1]}
        </a>
      )
      remaining = remaining.slice(firstPos + firstMatch.match[0].length)
    }
  }

  return parts
}

const blogStyles = `
  .blog-article {
    min-height: 100vh;
    padding-bottom: 120px;
  }

  .blog-header {
    position: relative;
    padding-top: 180px;
    padding-bottom: 0;
    overflow: hidden;
  }

  .blog-aurora {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .blog-header-inner {
    position: relative;
    z-index: 10;
    max-width: 860px;
    margin: 0 auto;
    padding: 0 24px 54px;
    text-align: center;
  }

  .blog-kicker {
    display: inline-block;
    margin-bottom: 26px;
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--ink-3, rgba(255,255,255,0.5));
  }

  .blog-title {
    margin: 0 auto;
    max-width: 820px;
    font-size: clamp(28px, 5vw, 53px);
    line-height: 1.06;
    letter-spacing: -0.04em;
    font-weight: 600;
    text-wrap: balance;
  }

  .blog-excerpt {
    margin: 26px auto 0;
    max-width: 620px;
    font-size: clamp(17px, 2.05vw, 20px);
    line-height: 1.6;
    color: var(--ink-2, rgba(255,255,255,0.7));
  }

  .blog-share {
    margin-top: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  .blog-share-label {
    font-size: 12px;
    color: var(--ink-3, rgba(255,255,255,0.5));
  }

  .blog-share-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .blog-share-btn {
    width: 36px;
    height: 36px;
    border-radius: 999px;
    border: 1px solid var(--edge-2, rgba(255,255,255,0.08));
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--ink-3, rgba(255,255,255,0.5));
    background: var(--tint, rgba(255,255,255,0.04));
    transition: all 0.18s ease;
  }

  .blog-share-btn:hover {
    color: var(--ink, #fff);
    border-color: var(--ink-4, rgba(255,255,255,0.24));
  }

  .blog-copy-feedback {
    font-size: 12px;
    color: #60a5fa;
    min-width: 68px;
  }

  .blog-meta-strip {
    position: relative;
    z-index: 10;
    width: 100%;
    margin: 0;
    padding: 20px 4vw;
    border-top: 1px solid var(--edge-2, rgba(255,255,255,0.08));
    border-bottom: 1px solid var(--edge-2, rgba(255,255,255,0.08));
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }

  .blog-meta-cell {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .blog-meta-cell:nth-child(1) {
    align-items: flex-start;
    text-align: left;
  }

  .blog-meta-cell:nth-child(2) {
    align-items: center;
    text-align: center;
  }

  .blog-meta-cell:nth-child(3) {
    align-items: flex-end;
    text-align: right;
  }

  .blog-meta-label {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink-4, rgba(255,255,255,0.35));
  }

  .blog-meta-value {
    font-size: 14px;
    color: var(--ink-2, rgba(255,255,255,0.72));
  }

  .blog-content {
    padding-top: 82px;
  }

  .blog-narrow {
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 24px;
    padding-right: 24px;
  }

  .blog-wide {
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 24px;
    padding-right: 24px;
  }

  .blog-h2 {
    font-size: clamp(29px, 3.9vw, 42px);
    font-weight: 600;
    line-height: 1.18;
    letter-spacing: -0.03em;
    margin-top: 82px;
    margin-bottom: 28px;
    text-wrap: balance;
  }

  .blog-h3 {
    font-size: clamp(21px, 2.8vw, 28px);
    font-weight: 600;
    line-height: 1.28;
    margin-top: 56px;
    margin-bottom: 18px;
    letter-spacing: -0.02em;
  }

  .blog-p {
    font-size: clamp(15px, 2vw, 18px);
    line-height: 1.9;
    color: var(--ink-2, rgba(255,255,255,0.7));
    margin-bottom: 24px;
  }

  .blog-p strong {
    color: var(--ink, #fff);
  }



  .blog-quote {
    max-width: 760px;
    margin: 58px auto;
    padding: 24px 24px 24px 28px;
    border-left: 3px solid var(--ink-4, rgba(255,255,255,0.35));
    background: linear-gradient(90deg, rgba(255,255,255,0.05), transparent);
  }

  .blog-quote p {
    font-size: clamp(19px, 2.3vw, 25px);
    line-height: 1.62;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: var(--ink, #fff);
    font-style: italic;
  }

  .blog-list {
    font-size: clamp(17px, 2.1vw, 19px);
    line-height: 1.84;
    color: var(--ink-2, rgba(255,255,255,0.72));
    margin-bottom: 38px;
    margin-top: 10px;
    padding-left: 0;
    list-style: none;
  }

  .blog-list li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 22px;
  }

  .blog-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 13px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #3b82f6;
  }

  .blog-list li strong {
    color: var(--ink, #fff);
  }

  .blog-illustration-slot {
    margin: 58px auto;
  }

  .ill-wrap {
    border-radius: 16px;
    border: 1px solid var(--edge-2, rgba(255,255,255,0.08));
    background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
    overflow: hidden;
  }

  .ill-inner {
    width: 100%;
  }

  .ill-caption {
    margin: 0;
    padding: 0 16px 14px;
    font-size: 13px;
    line-height: 1.7;
    color: var(--ink-3, rgba(255,255,255,0.55));
  }

  .blog-link {
    color: #60a5fa;
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: opacity 0.15s;
  }

  .blog-link:hover {
    opacity: 0.8;
  }

  .blog-hr {
    max-width: 760px;
    margin: 68px auto;
    border: none;
    border-top: 1px solid var(--ink-5, rgba(255,255,255,0.14));
  }

  .blog-footer {
    max-width: 760px;
    margin: 84px auto 0;
    padding: 0 24px;
  }

  .blog-back {
    color: #60a5fa;
    font-size: 16px;
    text-decoration: none;
    transition: opacity 0.15s;
  }

  .blog-back:hover {
    opacity: 0.7;
  }

  .blog-related {
    max-width: 1040px;
    margin: 0 auto;
    padding: 94px 24px 0;
    border-top: 1px solid var(--ink-5, rgba(255,255,255,0.1));
  }

  .blog-related-title {
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 48px;
    letter-spacing: -0.02em;
  }

  .blog-related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
  }

  .blog-related-card {
    display: block;
    padding: 28px;
    border-radius: 16px;
    border: 1px solid var(--edge-2, rgba(255,255,255,0.08));
    background: var(--panel, rgba(255,255,255,0.03));
    transition: border-color 0.2s;
    text-decoration: none;
  }

  .blog-related-card:hover {
    border-color: rgba(255,255,255,0.16);
  }

  .blog-related-cat {
    display: inline-block;
    font-size: 11px;
    font-weight: 500;
    color: var(--ink, #fff);
    background: var(--tint, rgba(255,255,255,0.04));
    padding: 3px 12px;
    border-radius: 100px;
    margin-bottom: 14px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border: 1px solid var(--edge-2, rgba(255,255,255,0.06));
  }

  .blog-related-h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 10px;
    color: var(--ink, #fff);
  }

  .blog-related-excerpt {
    font-size: 14px;
    line-height: 1.6;
    color: var(--ink-2, rgba(255,255,255,0.55));
    margin-bottom: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .blog-related-read {
    font-size: 12px;
    color: var(--ink-2, rgba(255,255,255,0.45));
  }

  @media (min-width: 1024px) {
    .blog-header-inner {
      width: 60%;
      max-width: none;
      padding-left: 0;
      padding-right: 0;
      text-align: left;
    }

    .blog-title {
      margin: 0;
      max-width: none;
      font-size: clamp(52px, 6vw, 97px);
      line-height: 1.02;
      letter-spacing: -0.034em;
    }

    .blog-excerpt {
      margin: 24px 0 0;
      max-width: none;
    }

    .blog-share {
      justify-content: flex-start;
    }
  }

  @media (min-width: 1536px) {
    .blog-title {
      max-width: 14ch;
      font-size: clamp(62px, 4.9vw, 101px);
      line-height: 1.04;
    }

    .blog-excerpt {
      max-width: 42ch;
    }
  }

  @media (max-width: 820px) {
    .blog-header {
      padding-top: 140px;
    }

    .blog-header-inner {
      padding: 0 18px 34px;
    }

    .blog-title {
      font-size: clamp(22px, 6.3vw, 36px);
      line-height: 1.08;
      letter-spacing: -0.035em;
    }

    .blog-excerpt {
      margin-top: 18px;
      font-size: 16px;
      line-height: 1.62;
    }

    .blog-share {
      margin-top: 20px;
      gap: 10px;
    }

    .blog-meta-strip {
      grid-template-columns: 1fr;
      gap: 12px;
      padding: 14px 18px;
    }

    .blog-meta-cell:nth-child(1),
    .blog-meta-cell:nth-child(2),
    .blog-meta-cell:nth-child(3) {
      align-items: flex-start;
      text-align: left;
    }

    .blog-content {
      padding-top: 56px;
    }

    .blog-narrow,
    .blog-wide {
      padding-left: 18px;
      padding-right: 18px;
    }

    .blog-h2 {
      margin-top: 56px;
      margin-bottom: 22px;
    }

    .blog-h3 {
      margin-top: 40px;
      margin-bottom: 14px;
    }

    .blog-p {
      line-height: 1.82;
      margin-bottom: 20px;
    }

    .blog-quote {
      margin: 44px auto;
      padding: 18px 18px 18px 20px;
    }

    .blog-list {
      margin-bottom: 30px;
    }

    .blog-list li {
      margin-bottom: 18px;
      padding-left: 24px;
    }

    .blog-illustration-slot {
      margin: 44px auto;
    }

    .ill-caption {
      padding-left: 12px;
      padding-right: 12px;
      padding-bottom: 12px;
    }

    .blog-related {
      padding-top: 74px;
      padding-left: 18px;
      padding-right: 18px;
    }

    .blog-related-title {
      margin-bottom: 34px;
    }

    .blog-footer {
      margin-top: 66px;
      padding-left: 18px;
      padding-right: 18px;
    }


  }
`
