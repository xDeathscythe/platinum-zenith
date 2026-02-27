import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CalFloatingButton from './components/CalFloatingButton'
import usePageMeta from './hooks/usePageMeta'

// Lazy load all pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'))
const WebDesignPage = lazy(() => import('./pages/WebDesignPage'))
const MarketingPage = lazy(() => import('./pages/MarketingPage'))
const ConsultingPage = lazy(() => import('./pages/ConsultingPage'))
const CROPage = lazy(() => import('./pages/CROPage'))
const SocialMediaPage = lazy(() => import('./pages/SocialMediaPage'))
const FAQPage = lazy(() => import('./pages/FAQPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'))

const TermsPage = lazy(() => import('./pages/TermsPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const BlogPage = lazy(() => import('./pages/blog/BlogPage'))
const BlogPostPage = lazy(() => import('./pages/blog/BlogPostPage'))
const EcommercePage = lazy(() => import('./pages/industries/EcommercePage'))
const SaasPage = lazy(() => import('./pages/industries/SaasPage'))
const LocalBusinessPage = lazy(() => import('./pages/industries/LocalBusinessPage'))
const StartupsPage = lazy(() => import('./pages/industries/StartupsPage'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  usePageMeta()
  return null
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-edge border-t-white rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="min-h-screen bg-page text-ink">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div
          className="transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          style={{ marginLeft: sidebarOpen ? '260px' : '0px' }}
        >
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/web-design" element={<WebDesignPage />} />
              <Route path="/digitalni-marketing" element={<MarketingPage />} />
              <Route path="/consulting" element={<ConsultingPage />} />
              <Route path="/cro" element={<CROPage />} />
              <Route path="/drustvene-mreze" element={<SocialMediaPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="/o-nama" element={<AboutPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />

              <Route path="/uslovi-koriscenja" element={<TermsPage />} />
              <Route path="/politika-privatnosti" element={<PrivacyPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/industrije/e-commerce" element={<EcommercePage />} />
              <Route path="/industrije/saas" element={<SaasPage />} />
              <Route path="/industrije/lokalni-biznisi" element={<LocalBusinessPage />} />
              <Route path="/industrije/startapovi" element={<StartupsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
        <CalFloatingButton />
      </div>
    </BrowserRouter>
  )
}
