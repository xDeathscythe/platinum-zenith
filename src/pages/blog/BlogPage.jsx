import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import BottomCTA from '../../components/BottomCTA'
import { blogIndexPosts } from './blogIndexData'

const PUBLIC_BLOG_POSTS = blogIndexPosts.filter(p => !p.isDraft)
const CATEGORIES = ['Sve', ...Array.from(new Set(PUBLIC_BLOG_POSTS.map(p => p.category)))]

const MONEY_RESOURCE_LINKS = [
  {
    to: '/google-reklame-cena',
    title: 'Google reklame cena',
    desc: 'CPC rasponi, budžeti i model vođenja kampanja za 2026.',
  },
  {
    to: '/instagram-reklame-cena',
    title: 'Instagram reklame cena',
    desc: 'Koliko košta Meta kanal i kako planirati budžet po fazama.',
  },
  {
    to: '/izrada-wordpress-sajta-cena',
    title: 'Izrada WordPress sajta cena',
    desc: 'Rasponi ulaganja, rokovi i šta pravi razliku u konverziji.',
  },
  {
    to: '/seo-optimizacija-cena',
    title: 'SEO optimizacija cena',
    desc: 'Paketi, obim rada i realna očekivanja po fazama rasta.',
  },
  {
    to: '/cene-digitalnog-marketinga',
    title: 'Cene digitalnog marketinga',
    desc: 'Uporedni pregled ulaganja po kanalima i modelima saradnje.',
  },
  {
    to: '/cene-izrade-sajta',
    title: 'Cene izrade sajta',
    desc: 'Brzi cenovni okvir za prezentacione, lead-gen i shop projekte.',
  },
  {
    to: '/fiksna-naknada-vs-revenue-share',
    title: 'Fiksna naknada vs revenue share',
    desc: 'Kada je koji model naplate bolji prema marži i riziku.',
  },
  {
    to: '/kontakt',
    title: 'Kontakt i konsultacije',
    desc: 'Pošaljite upit i dobijte preporuku prioriteta za narednih 90 dana.',
  },
]

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

  const resourceGuides = useMemo(
    () => sortedPosts.slice(0, 15),
    [sortedPosts]
  )

  const blogCollectionSchema = useMemo(() => {
    const siteUrl = 'https://platinumzenith.com'

    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          '@id': `${siteUrl}/blog#webpage`,
          name: 'Platinum Zenith Blog',
          description: 'Praktični saveti o marketingu, prodaji i rastu biznisa.',
          url: `${siteUrl}/blog`,
          inLanguage: 'sr-RS',
          mainEntity: { '@id': `${siteUrl}/blog#blog` },
          breadcrumb: { '@id': `${siteUrl}/blog#breadcrumb` },
          isPartOf: { '@id': `${siteUrl}/#website` },
        },
        {
          '@type': 'Blog',
          '@id': `${siteUrl}/blog#blog`,
          name: 'Platinum Zenith Blog',
          description: 'Praktični saveti o marketingu, prodaji i rastu biznisa.',
          url: `${siteUrl}/blog`,
          inLanguage: 'sr-RS',
          publisher: {
            '@type': 'Organization',
            name: 'Platinum Zenith',
            url: siteUrl,
          },
          about: MONEY_RESOURCE_LINKS.map((resource) => ({
            '@type': 'WebPage',
            '@id': `${siteUrl}${resource.to}`,
            url: `${siteUrl}${resource.to}`,
            name: resource.title,
          })),
          hasPart: sortedPosts.slice(0, 30).map((post) => ({
            '@id': `${siteUrl}/blog/${post.slug}#article`,
          })),
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${siteUrl}/blog#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Početna',
              item: siteUrl,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Blog',
              item: `${siteUrl}/blog`,
            },
          ],
        },
        {
          '@type': 'ItemList',
          name: 'Najnoviji članci',
          itemListElement: sortedPosts.slice(0, 30).map((post, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `${siteUrl}/blog/${post.slug}`,
            item: {
              '@type': 'BlogPosting',
              '@id': `${siteUrl}/blog/${post.slug}#article`,
              headline: post.title,
              datePublished: post.date,
              description: post.excerpt,
            },
          })),
        },
        {
          '@type': 'ItemList',
          name: 'Ključni cenovni vodiči i usluge',
          itemListElement: MONEY_RESOURCE_LINKS.map((resource, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `${siteUrl}${resource.to}`,
            name: resource.title,
          })),
        },
      ],
    }
  }, [sortedPosts])

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
              <h3 className="text-[12px] uppercase tracking-[0.18em] text-ink-2 mb-3">Cenovni vodiči i money stranice</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {MONEY_RESOURCE_LINKS.map((resource) => (
                  <Link
                    key={resource.to}
                    to={resource.to}
                    className="group block rounded-[12px] border border-edge-2 bg-tint p-4 hover:border-white/[0.14] transition-colors"
                  >
                    <h4 className="text-[14px] font-medium text-ink mb-1.5 group-hover:text-white transition-colors">{resource.title}</h4>
                    <p className="text-[12px] leading-[1.55] text-ink-2">{resource.desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[12px] uppercase tracking-[0.18em] text-ink-2 mb-3">Dodatni vodiči</h3>
              <ul className="space-y-2">
                {resourceGuides.map(post => (
                  <li key={post.slug}>
                    <Link to={`/blog/${post.slug}`} className="text-[14px] text-ink-2 hover:text-ink transition-colors">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
