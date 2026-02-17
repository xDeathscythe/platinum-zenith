import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import usePageMeta from './hooks/usePageMeta'

// Lazy load all pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'))
const WebDesignPage = lazy(() => import('./pages/WebDesignPage'))
const MarketingPage = lazy(() => import('./pages/MarketingPage'))
const ConsultingPage = lazy(() => import('./pages/ConsultingPage'))
const CROPage = lazy(() => import('./pages/CROPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  usePageMeta()
  return null
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white">
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
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="/o-nama" element={<AboutPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/paketi" element={<PricingPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}
