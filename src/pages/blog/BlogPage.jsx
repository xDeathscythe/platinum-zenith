import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import BottomCTA from '../../components/BottomCTA'
import { blogPosts } from './blogData'

const PUBLIC_BLOG_POSTS = blogPosts.filter(p => !p.isDraft)
const CATEGORIES = ['Sve', ...Array.from(new Set(PUBLIC_BLOG_POSTS.map(p => p.category)))]

export default function BlogPage() {
  const [active, setActive] = useState('Sve')

  const sortedPosts = useMemo(
    () => [...PUBLIC_BLOG_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date)),
    []
  )

  const categoryCounts = useMemo(() => {
    const counts = {}
    for (const p of sortedPosts) counts[p.category] = (counts[p.category] || 0) + 1
    return counts
  }, [sortedPosts])

  const filtered = useMemo(
    () => active === 'Sve' ? sortedPosts : sortedPosts.filter(p => p.category === active),
    [active, sortedPosts]
  )

  const featured = filtered[0]
  const rest = filtered.slice(1)

  const blogCollectionSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        name: 'Platinum Zenith Blog',
        description: 'Praktični saveti o marketingu, prodaji i rastu biznisa.',
        url: 'https://platinumzenith.com/blog',
        inLanguage: 'sr-RS',
        publisher: {
          '@type': 'Organization',
          name: 'Platinum Zenith',
          url: 'https://platinumzenith.com',
        },
      },
      {
        '@type': 'ItemList',
        itemListElement: sortedPosts.slice(0, 30).map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `https://platinumzenith.com/blog/${post.slug}`,
          item: {
            '@type': 'BlogPosting',
            headline: post.title,
            datePublished: post.date,
            description: post.excerpt,
          },
        })),
      },
    ],
  }), [sortedPosts])

  return (
    <>
      <script
        id="ld-blog-index"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema) }}
      />
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
                  {categoryCounts[cat] || 0}
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

      <section className="pb-14 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto rounded-[16px] border border-edge-2 bg-panel p-6 md:p-8">
          <h2 className="text-[24px] md:text-[30px] tracking-[-0.6px] font-medium text-ink mb-2">Resursi i brzi linkovi</h2>
          <p className="text-[14px] md:text-[15px] text-ink-2 mb-6 leading-[1.7]">
            Ako istražujete cene, strategiju i tehničke detalje, krenite od ovih vodiča i ključnih stranica.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[12px] uppercase tracking-[0.18em] text-ink-2 mb-3">Ključne stranice</h3>
              <div className="flex flex-wrap gap-2">
                <Link to="/faq" className="text-[13px] text-ink-2 hover:text-ink bg-tint border border-edge-2 rounded-full px-3 py-1.5 transition-colors">FAQ</Link>
                <Link to="/o-nama" className="text-[13px] text-ink-2 hover:text-ink bg-tint border border-edge-2 rounded-full px-3 py-1.5 transition-colors">O nama</Link>
                <Link to="/uslovi-koriscenja" className="text-[13px] text-ink-2 hover:text-ink bg-tint border border-edge-2 rounded-full px-3 py-1.5 transition-colors">Uslovi korišćenja</Link>
                <Link to="/uslovi-kupovine" className="text-[13px] text-ink-2 hover:text-ink bg-tint border border-edge-2 rounded-full px-3 py-1.5 transition-colors">Uslovi kupovine</Link>
                <Link to="/nacin-placanja" className="text-[13px] text-ink-2 hover:text-ink bg-tint border border-edge-2 rounded-full px-3 py-1.5 transition-colors">Način plaćanja</Link>
                <Link to="/dostava" className="text-[13px] text-ink-2 hover:text-ink bg-tint border border-edge-2 rounded-full px-3 py-1.5 transition-colors">Dostava</Link>
                <Link to="/politika-privatnosti" className="text-[13px] text-ink-2 hover:text-ink bg-tint border border-edge-2 rounded-full px-3 py-1.5 transition-colors">Politika privatnosti</Link>
                <Link to="/industrije/startapovi" className="text-[13px] text-ink-2 hover:text-ink bg-tint border border-edge-2 rounded-full px-3 py-1.5 transition-colors">Marketing za startapove</Link>
                <Link to="/alati/roi-kalkulator" className="text-[13px] text-ink-2 hover:text-ink bg-tint border border-edge-2 rounded-full px-3 py-1.5 transition-colors">ROI kalkulator</Link>
                <Link to="/facebook-oglasi-ne-rade" className="text-[13px] text-ink-2 hover:text-ink bg-tint border border-edge-2 rounded-full px-3 py-1.5 transition-colors">Facebook oglasi ne rade</Link>
              </div>
            </div>

            <div>
              <h3 className="text-[12px] uppercase tracking-[0.18em] text-ink-2 mb-3">Dodatni vodiči</h3>
              <ul className="space-y-2">
                <li><Link to="/blog/copywriting-formule-koje-rade" className="text-[14px] text-ink-2 hover:text-ink transition-colors">Copywriting formule koje rade</Link></li>
                <li><Link to="/blog/brending-za-male-firme-identitet-vazniji-od-loga" className="text-[14px] text-ink-2 hover:text-ink transition-colors">Brending za male firme</Link></li>
                <li><Link to="/blog/psihologija-zaradjivanja-mentalni-blokovi" className="text-[14px] text-ink-2 hover:text-ink transition-colors">Psihologija zarađivanja i blokovi</Link></li>
                <li><Link to="/blog/17-godina-marketing-iskustva" className="text-[14px] text-ink-2 hover:text-ink transition-colors">17 godina marketing iskustva</Link></li>
                <li><Link to="/blog/jednacina-vrednosti-zasto-ljudi-kupuju" className="text-[14px] text-ink-2 hover:text-ink transition-colors">Jednačina vrednosti</Link></li>
                <li><Link to="/blog/cetiri-nacina-da-dobijete-klijente" className="text-[14px] text-ink-2 hover:text-ink transition-colors">Četiri načina da dobijete klijente</Link></li>
                <li><Link to="/blog/hormozi-ponuda-kojoj-klijent-ne-kaze-ne" className="text-[14px] text-ink-2 hover:text-ink transition-colors">Hormozi ponuda</Link></li>
                <li><Link to="/blog/sabri-suby-kako-do-vise-upita-bez-veceg-budzeta" className="text-[14px] text-ink-2 hover:text-ink transition-colors">Sabri Suby sistem za više upita</Link></li>
                <li><Link to="/blog/alex-hormozi-grand-slam-ponuda-za-usluge" className="text-[14px] text-ink-2 hover:text-ink transition-colors">Alex Hormozi grand slam ponuda</Link></li>
                <li><Link to="/blog/leila-hormozi-kpi-tabla-za-stabilan-rast" className="text-[14px] text-ink-2 hover:text-ink transition-colors">Leila Hormozi KPI tabla</Link></li>
                <li><Link to="/blog/koliko-traje-seo-da-donese-rezultate-u-srbiji" className="text-[14px] text-ink-2 hover:text-ink transition-colors">Koliko traje SEO u Srbiji</Link></li>
                <li><Link to="/blog/google-business-profil-optimizacija-cena-srbija-2026" className="text-[14px] text-ink-2 hover:text-ink transition-colors">Google Business profil optimizacija</Link></li>
                <li><Link to="/blog/cena-odrzavanja-wordpress-sajta-srbija-2026" className="text-[14px] text-ink-2 hover:text-ink transition-colors">Cena održavanja WordPress sajta</Link></li>
                <li><Link to="/blog/vodjenje-drustvenih-mreza-cena-srbija-2026" className="text-[14px] text-ink-2 hover:text-ink transition-colors">Vođenje društvenih mreža cena</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
