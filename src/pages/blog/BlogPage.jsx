import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import BottomCTA from '../../components/BottomCTA'
import { blogPosts } from './blogData'

const CATEGORIES = ['Sve', ...Array.from(new Set(blogPosts.map(p => p.category)))]

export default function BlogPage() {
  const [active, setActive] = useState('Sve')

  const filtered = useMemo(
    () => active === 'Sve' ? blogPosts : blogPosts.filter(p => p.category === active),
    [active]
  )

  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <>
      {/* ─── Minimal editorial header ─── */}
      <section className="pt-[140px] md:pt-[180px] pb-6 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-2">
            <div>
              <span className="text-[13px] text-ink-2 uppercase tracking-[0.2em] block mb-3">Blog</span>
              <h1 className="text-[36px] md:text-[52px] font-medium leading-[1.05] tracking-[-1.5px] text-ink">
                Znanje koje<br className="hidden md:inline" /> donosi rezultate
              </h1>
            </div>
            <p className="text-[15px] text-ink-2 max-w-[340px] leading-[24px] pb-1">
              Praktični saveti o marketingu, prodaji i rastu biznisa. Bez teorije koja ne radi.
            </p>
          </div>
          <div className="h-px bg-edge-2 mt-6" />
        </div>
      </section>

      {/* ─── Category filter ─── */}
      <section className="py-4 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-[13px] font-medium px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                active === cat
                  ? 'bg-ink text-inv-fg'
                  : 'text-ink-2 hover:text-ink bg-tint border border-edge-2'
              }`}
            >
              {cat}
              {cat !== 'Sve' && (
                <span className="ml-1.5 text-[11px] opacity-50">
                  {blogPosts.filter(p => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ─── Featured post ─── */}
      {featured && (
        <section className="py-6 px-4 md:px-8">
          <div className="max-w-[1100px] mx-auto">
            <Link
              to={`/blog/${featured.slug}`}
              className="group block bg-tint rounded-[16px] p-8 md:p-12 border border-edge-2 hover:border-white/[0.10] transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[11px] font-medium text-ink bg-tint-2 px-3 py-1 rounded-full uppercase tracking-wider">
                  {featured.category}
                </span>
                <span className="text-[13px] text-ink-2">{featured.date}</span>
                <span className="text-[13px] text-ink-2">{featured.readTime}</span>
              </div>
              <h2 className="text-[28px] md:text-[40px] font-medium text-ink leading-[1.15] tracking-[-1px] mb-4 max-w-[800px]">
                {featured.title}
              </h2>
              <p className="text-[16px] md:text-[18px] text-ink-2 leading-[28px] max-w-[700px]">
                {featured.excerpt}
              </p>
              <div className="mt-6 text-[14px] text-ink-2 font-medium group-hover:text-ink transition-colors">
                Pročitajte →
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ─── Post grid ─── */}
      {rest.length > 0 && (
        <section className="py-6 pb-24 px-4 md:px-8">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-[13px] text-ink-2 mb-4">
              {filtered.length} {filtered.length === 1 ? 'članak' : filtered.length < 5 ? 'članka' : 'članaka'}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {rest.map(post => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group block bg-panel rounded-[16px] p-7 border border-edge-2 hover:border-white/[0.10] transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-medium text-ink-2 bg-tint px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-[12px] text-ink-2">{post.date}</span>
                  </div>
                  <h3 className="text-[20px] md:text-[22px] font-medium text-ink leading-[1.25] mb-2 group-hover:text-ink-2 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[14px] text-ink-2 leading-[23px] line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-[12px] text-ink-2">{post.readTime}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <BottomCTA />
    </>
  )
}
