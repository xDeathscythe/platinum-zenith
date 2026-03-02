import { Link } from 'react-router-dom'
import Reveal from './Reveal'

/**
 * Reusable "related blog posts" section for service pages.
 * Accepts an array of { slug, title, excerpt, readTime, category }.
 */
export default function RelatedBlogPosts({ posts, heading = 'Članci koji vam mogu pomoći' }) {
  if (!posts || posts.length === 0) return null

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-page">
      <div className="max-w-[1000px] mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-[13px] text-ink-4 uppercase tracking-widest mb-3 block">Blog</span>
            <h2 className="text-[28px] md:text-[40px] font-medium tracking-[-1.2px] text-ink leading-[1.15]">
              {heading}
            </h2>
          </div>
        </Reveal>
        <Reveal type="stagger" className="grid md:grid-cols-3 gap-6">
          {posts.map(post => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block bg-panel rounded-[16px] p-7 border border-edge-2 hover:border-ink/15 transition-colors duration-300"
            >
              <span className="text-[12px] font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <h3 className="text-[18px] md:text-[20px] font-medium text-ink leading-[1.25] mt-5 mb-3 group-hover:text-ink-2 transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-[14px] text-ink-3 leading-[22px] line-clamp-3">
                {post.excerpt}
              </p>
              <span className="text-[13px] text-ink-4 mt-4 block">{post.readTime}</span>
            </Link>
          ))}
        </Reveal>
        <div className="text-center mt-10">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-[14px] text-ink font-medium h-11 px-6 rounded-[40px] border border-edge hover:border-white/40 hover:bg-tint transition-all">
            Svi članci
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
