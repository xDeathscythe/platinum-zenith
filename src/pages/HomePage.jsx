import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Surfaces from '../components/Surfaces'
import VideoAdsShowcase from '../components/VideoAdsShowcase'
import BottomCTA from '../components/BottomCTA'
import Reveal from '../components/Reveal'
import { blogPosts } from './blog/blogData'

/* ─── Full-width dark band (OpenAI-style visual break) ── */
function PromiseBand() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-panel border-y border-edge-2">
      <div className="max-w-[700px] mx-auto text-center">
        <Reveal>
          <h2 className="text-[28px] md:text-[44px] font-medium tracking-[-1.5px] text-ink mb-5 leading-[1.15]">
            Marketing koji donosi rezultate, ili ne naplaćujemo
          </h2>
          <p className="text-[15px] md:text-[16px] text-ink-4 mb-8 max-w-[480px] mx-auto leading-relaxed">
            Svaki projekat počinjemo besplatnom analizom vašeg biznisa. Bez obaveza, bez skrivenih troškova.
          </p>
          <Link to="/kontakt" className="inline-flex items-center gap-1.5 text-[14px] text-ink font-medium h-11 px-6 rounded-[40px] border border-edge hover:border-white/40 hover:bg-tint transition-all">
            Započnite razgovor
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Featured blog posts ── */
const featuredSlugs = [
  'pricing-psihologija-kontrola-percepcije-cene',
  'sales-funnel-koji-radi-na-autopilotu',
  'copywriting-formule-koje-rade',
]
const featured = featuredSlugs.map(s => blogPosts.find(p => p.slug === s)).filter(Boolean)

function FeaturedBlog() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-[1000px] mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-[13px] text-ink-4 uppercase tracking-widest mb-3 block">Blog</span>
            <h2 className="text-[28px] md:text-[40px] font-medium tracking-[-1.2px] text-ink leading-[1.15]">
              Znanje koje donosi rezultate
            </h2>
          </div>
        </Reveal>
        <Reveal type="stagger" className="grid md:grid-cols-3 gap-6">
          {featured.map(post => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block bg-panel rounded-[16px] p-7 border border-edge-2 hover:border-ink/15 transition-colors duration-300"
            >
              <span className="text-[12px] font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <h3 className="text-[20px] md:text-[22px] font-medium text-ink leading-[1.25] mt-5 mb-3 group-hover:text-tint transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-[15px] text-ink-3 leading-[24px] line-clamp-3">
                {post.excerpt}
              </p>
              <span className="text-[13px] text-ink-4 mt-4 block">{post.readTime}</span>
            </Link>
          ))}
        </Reveal>
        <div className="text-center mt-12">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-[14px] text-ink font-medium h-11 px-6 rounded-[40px] border border-edge hover:border-white/40 hover:bg-tint transition-all">
            Svi članci
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Surfaces />
      <PromiseBand />
      <VideoAdsShowcase />
      <FeaturedBlog />
      <BottomCTA />
    </>
  )
}
