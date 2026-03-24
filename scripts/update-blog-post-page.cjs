const fs = require('fs')
let c = fs.readFileSync('src/pages/blog/BlogPostPage.jsx', 'utf8')

const oldCode = `export default function BlogPostPage() {
  const { slug } = useParams()
  const { pathname } = useLocation()
  const post = blogPosts.find(p => p.slug === slug)
  const isDraftRoute = pathname.startsWith('/draft/')
  const shouldHidePost = !post || (post.isDraft && !isDraftRoute) || (!post.isDraft && isDraftRoute)

  if (shouldHidePost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[48px] font-bold mb-4">404</h2>
          <p className="text-ink-3 text-[18px] mb-8">Stranica nije pronađena.</p>
          <Link to="/blog" className="text-blue-400 hover:underline">← Nazad na blog</Link>
        </div>
      </div>
    )
  }

  const lines = post.content.split('\\n')`

const newCode = `export default function BlogPostPage() {
  const { slug } = useParams()
  const { pathname } = useLocation()
  
  const [content, setContent] = useState(null)
  const [loadingContent, setLoadingContent] = useState(true)
  const [contentError, setContentError] = useState(false)

  const basePost = blogPostBySlug.get(slug)
  const isDraftRoute = pathname.startsWith('/draft/')
  const shouldHidePost = !basePost || (basePost.isDraft && !isDraftRoute) || (!basePost.isDraft && isDraftRoute)

  useEffect(() => {
    if (shouldHidePost) return
    let mounted = true
    setLoadingContent(true)
    setContentError(false)
    
    import(\`./blogContent/\${slug}.js\`)
      .then((mod) => {
        if (mounted) {
          setContent(mod.default)
          setLoadingContent(false)
        }
      })
      .catch((err) => {
        console.error('Failed to load blog content:', err)
        if (mounted) {
          setContentError(true)
          setLoadingContent(false)
        }
      })
      
    return () => { mounted = false }
  }, [slug, shouldHidePost])

  if (shouldHidePost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[48px] font-bold mb-4">404</h2>
          <p className="text-ink-3 text-[18px] mb-8">Stranica nije pronađena.</p>
          <Link to="/blog" className="text-blue-400 hover:underline">← Nazad na blog</Link>
        </div>
      </div>
    )
  }

  if (loadingContent) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 pb-16">
        <div className="w-full max-w-[800px] mx-auto px-4 md:px-8 space-y-6 animate-pulse">
          <div className="h-4 bg-edge w-24 rounded"></div>
          <div className="h-12 bg-edge w-3/4 rounded"></div>
          <div className="h-4 bg-edge w-1/3 rounded"></div>
          <div className="pt-8 space-y-4">
            <div className="h-4 bg-edge w-full rounded"></div>
            <div className="h-4 bg-edge w-full rounded"></div>
            <div className="h-4 bg-edge w-5/6 rounded"></div>
            <div className="h-4 bg-edge w-full rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (contentError || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[32px] font-bold mb-4">Greška</h2>
          <p className="text-ink-3 text-[18px] mb-8">Nije moguće učitati sadržaj bloga.</p>
          <button onClick={() => window.location.reload()} className="text-blue-400 hover:underline">Pokušajte ponovo</button>
        </div>
      </div>
    )
  }

  const post = { ...basePost, content }
  const lines = post.content.split('\\n')`

// Fix earlier replacement which failed, or if it partially succeeded
// Wait, I already did the import replacement via default_api:edit
c = c.replace(oldCode, newCode)
fs.writeFileSync('src/pages/blog/BlogPostPage.jsx', c, 'utf8')
console.log('done')
