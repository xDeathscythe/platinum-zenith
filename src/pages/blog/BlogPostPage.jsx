import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { blogPosts } from './blogData'
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
      if (el) { el.textContent = 'Kopirano!'; setTimeout(() => { el.textContent = '' }, 2000) }
    })
  }

  return (
    <div className="flex items-center gap-3 mt-8">
      <span className="text-[13px] text-ink-4 mr-1">Podeli:</span>
      {channels.map(c => (
        <a
          key={c.name}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Podeli na ${c.name}`}
          className="w-9 h-9 rounded-full border border-edge-2 flex items-center justify-center text-ink-3 hover:text-ink hover:border-ink/20 transition-all"
        >
          {c.icon}
        </a>
      ))}
      <button
        onClick={copyLink}
        className="w-9 h-9 rounded-full border border-edge-2 flex items-center justify-center text-ink-3 hover:text-ink hover:border-ink/20 transition-all"
        aria-label="Kopiraj link"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
      </button>
      <span id="copy-feedback" className="text-[12px] text-blue-400 ml-1"></span>
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

  if (!post) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-[48px] font-bold mb-4">404</h1>
        <p className="text-ink-3 text-[18px] mb-8">Stranica nije pronađena.</p>
        <Link to="/blog" className="text-blue-400 hover:underline">← Nazad na blog</Link>
      </div>
    </div>
  )

  const lines = post.content.split('\n')
  const elements = []
  let key = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()

    if (!trimmed) continue

    // Component slots
    if (componentMap[trimmed]) {
      const Comp = componentMap[trimmed]
      elements.push(
        <div key={key++} className="blog-wide">
          <Comp />
        </div>
      )
      continue
    }

    // H2
    if (trimmed.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="blog-narrow blog-h2">
          {trimmed.slice(3)}
        </h2>
      )
      continue
    }

    // H3
    if (trimmed.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="blog-narrow blog-h3">
          {trimmed.slice(4)}
        </h3>
      )
      continue
    }

    // Blockquote
    if (trimmed.startsWith('> ')) {
      elements.push(
        <blockquote key={key++} className="blog-quote">
          <p>{trimmed.slice(2)}</p>
        </blockquote>
      )
      continue
    }

    // Horizontal rule
    if (trimmed === '---') {
      elements.push(<hr key={key++} className="blog-hr" />)
      continue
    }

    // Unordered list items - collect consecutive ones
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

    // Paragraph
    elements.push(
      <p key={key++} className="blog-narrow blog-p">
        {renderInline(trimmed)}
      </p>
    )
  }

  // Related posts: same category, excluding current, max 3
  const related = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return (
    <article className="blog-article">
      <ReadingProgress />
      {/* Hero */}
      <header className="blog-header">
        <div className="blog-header-inner">
          <div className="blog-meta">
            <span className="blog-category">{post.category}</span>
            <span className="blog-date">{post.date}</span>
            <span className="blog-read">{post.readTime}</span>
          </div>
          <h1 className="blog-title">{post.title}</h1>
          <p className="blog-excerpt">{post.excerpt}</p>
          <ShareButtons title={post.title} slug={post.slug} />
        </div>
      </header>

      {/* Content */}
      <div className="blog-content">
        {elements}
      </div>

      {/* Related posts */}
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

      {/* Footer */}
      <footer className="blog-footer">
        <Link to="/blog" className="blog-back">← Svi članci</Link>
      </footer>

      <style>{blogStyles}</style>
    </article>
  )
}

function renderInline(text) {
  // Process bold, links, inline code
  const parts = []
  let remaining = text
  let idx = 0

  while (remaining.length > 0) {
    // Bold
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/)
    // Link
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

    // Text before match
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

  /* Header — editorial, left-aligned on desktop */
  .blog-header {
    padding: 140px 24px 64px;
    border-bottom: 1px solid var(--edge-2, rgba(255,255,255,0.06));
  }
  .blog-header-inner {
    max-width: 680px;
    margin: 0 auto;
  }
  .blog-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 28px;
    font-size: 13px;
    color: var(--ink-2, rgba(255,255,255,0.55));
  }
  .blog-category {
    background: var(--tint, rgba(255,255,255,0.04));
    color: var(--ink, #fff);
    padding: 4px 14px;
    border-radius: 100px;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    border: 1px solid var(--edge-2, rgba(255,255,255,0.06));
  }
  .blog-title {
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.03em;
    margin: 0 0 20px;
  }
  .blog-excerpt {
    font-size: 18px;
    line-height: 1.65;
    color: var(--ink-2, rgba(255,255,255,0.55));
    max-width: 560px;
  }

  /* Content area */
  .blog-content {
    padding-top: 80px;
  }

  /* Narrow container for text */
  .blog-narrow {
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 24px;
    padding-right: 24px;
  }

  /* Wide container for graphics */
  .blog-wide {
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 24px;
    padding-right: 24px;
  }

  /* Typography */
  .blog-h2 {
    font-size: clamp(26px, 3.5vw, 36px);
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-top: 72px;
    margin-bottom: 28px;
  }
  .blog-h3 {
    font-size: clamp(20px, 2.5vw, 24px);
    font-weight: 600;
    line-height: 1.3;
    margin-top: 48px;
    margin-bottom: 20px;
  }
  .blog-p {
    font-size: 17px;
    line-height: 1.85;
    color: var(--ink-2, rgba(255,255,255,0.65));
    margin-bottom: 24px;
  }
  .blog-p strong {
    color: var(--ink, #fff);
  }

  /* Blockquote — left border editorial style */
  .blog-quote {
    max-width: 680px;
    margin: 48px auto;
    padding: 24px 24px 24px 28px;
    border-left: 3px solid var(--ink-2, rgba(255,255,255,0.35));
    position: relative;
  }
  .blog-quote p {
    font-size: clamp(18px, 2vw, 22px);
    line-height: 1.6;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: var(--ink, #fff);
    font-style: italic;
  }

  /* Lists */
  .blog-list {
    font-size: 18px;
    line-height: 1.8;
    color: var(--ink-2, rgba(255,255,255,0.7));
    margin-bottom: 36px;
    margin-top: 8px;
    padding-left: 0;
    list-style: none;
  }
  .blog-list li {
    position: relative;
    padding-left: 28px;
    margin-bottom: 24px;
  }
  .blog-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 11px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #3b82f6;
  }
  .blog-list li strong {
    color: var(--ink, #fff);
  }

  /* Links */
  .blog-link {
    color: #60a5fa;
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: opacity 0.15s;
  }
  .blog-link:hover { opacity: 0.8; }

  /* HR */
  .blog-hr {
    max-width: 680px;
    margin: 64px auto;
    border: none;
    border-top: 1px solid var(--ink-5, rgba(255,255,255,0.08));
  }

  /* Footer */
  .blog-footer {
    max-width: 680px;
    margin: 80px auto 0;
    padding: 0 24px;
  }
  .blog-back {
    color: #60a5fa;
    font-size: 16px;
    text-decoration: none;
    transition: opacity 0.15s;
  }
  .blog-back:hover { opacity: 0.7; }

  /* Related posts */
  .blog-related {
    max-width: 1000px;
    margin: 0 auto;
    padding: 96px 24px 0;
    border-top: 1px solid var(--ink-5, rgba(255,255,255,0.08));
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
    border: 1px solid var(--edge-2, rgba(255,255,255,0.06));
    background: var(--panel, rgba(255,255,255,0.03));
    transition: border-color 0.2s;
    text-decoration: none;
  }
  .blog-related-card:hover {
    border-color: rgba(255,255,255,0.12);
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
    color: var(--ink-2, rgba(255,255,255,0.4));
  }
`
