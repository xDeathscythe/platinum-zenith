import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import usePageMeta from './hooks/usePageMeta'
import useAnalyticsTracking from './hooks/useAnalyticsTracking'
import HomePage from './pages/HomePage'

// Lazy load non-critical shared UI
const Footer = lazy(() => import('./components/Footer'))
const CalFloatingButton = lazy(() => import('./components/CalFloatingButton'))

// Lazy load secondary pages for code splitting
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
const UsloviKupovinePage = lazy(() => import('./pages/UsloviKupovinePage'))
const NacinPlacanjaPage = lazy(() => import('./pages/NacinPlacanjaPage'))
const DostavaPage = lazy(() => import('./pages/DostavaPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const BlogPage = lazy(() => import('./pages/blog/BlogPage'))
const BlogPostPage = lazy(() => import('./pages/blog/BlogPostPage'))
const EcommercePage = lazy(() => import('./pages/industries/EcommercePage'))
const SaasPage = lazy(() => import('./pages/industries/SaasPage'))
const LocalBusinessPage = lazy(() => import('./pages/industries/LocalBusinessPage'))
const StartupsPage = lazy(() => import('./pages/industries/StartupsPage'))
const ROICalculatorPage = lazy(() => import('./pages/ROICalculatorPage'))
const CeneIzradeSajtaPage = lazy(() => import('./pages/CeneIzradeSajtaPage'))
const AgencijaVsFreelancerPage = lazy(() => import('./pages/AgencijaVsFreelancerPage'))
const CeneDigitalnogMarketingaPage = lazy(() => import('./pages/CeneDigitalnogMarketingaPage'))
const MarketingAgencijaNsPage = lazy(() => import('./pages/MarketingAgencijaNsPage'))
const WebShopNemaProdajuPage = lazy(() => import('./pages/WebShopNemaProdajuPage'))
const KolikoKostaFacebookReklamaPage = lazy(() => import('./pages/KolikoKostaFacebookReklamaPage'))
const MarketingAgencijaZrenjaninPage = lazy(() => import('./pages/MarketingAgencijaZrenjaninPage'))
const SeoOptimizacijaCenaPage = lazy(() => import('./pages/SeoOptimizacijaCenaPage'))
const MarketingAgencijaBgPage = lazy(() => import('./pages/MarketingAgencijaBgPage'))
const FacebookOglasiNeRadePage = lazy(() => import('./pages/FacebookOglasiNeRadePage'))
const FiksnaNaknadaVsRevenueSharePage = lazy(() => import('./pages/FiksnaNaknadaVsRevenueSharePage'))
const InHouseVsAgencijaPage = lazy(() => import('./pages/InHouseVsAgencijaPage'))
const MarketingZaRestoranePage = lazy(() => import('./pages/MarketingZaRestoranePage'))
const MarketingZaStomatologePage = lazy(() => import('./pages/MarketingZaStomatologePage'))

// Admin pages
const LoginPage = lazy(() => import('./pages/admin/LoginPage'))
const AdminLayout = lazy(() => import('./pages/admin/AdminLayout'))
const AdminDashboard = lazy(() => import('./pages/admin/DashboardPage'))
const AdminPrijave = lazy(() => import('./pages/admin/PrijavePage'))
const AdminPoruke = lazy(() => import('./pages/admin/PorukePage'))
const AdminNewsletter = lazy(() => import('./pages/admin/NewsletterPage'))
const AdminEmailLog = lazy(() => import('./pages/admin/EmailLogPage'))
const AdminAnalytics = lazy(() => import('./pages/admin/AnalyticsPage'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  usePageMeta()
  useAnalyticsTracking()
  return null
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-edge border-t-white rounded-full animate-spin" />
    </div>
  )
}

function PublicLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showCal, setShowCal] = useState(false)

  useEffect(() => {
    let timeoutId
    let idleId

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(() => setShowCal(true), { timeout: 5000 })
    } else {
      timeoutId = setTimeout(() => setShowCal(true), 4500)
    }

    return () => {
      if (idleId && typeof window !== 'undefined' && 'cancelIdleCallback' in window) window.cancelIdleCallback(idleId)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="min-h-screen bg-page text-ink">
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div
        className="will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
        style={{ transform: sidebarOpen ? 'translateX(260px)' : 'translateX(0)' }}
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
            <Route path="/uslovi-kupovine" element={<UsloviKupovinePage />} />
            <Route path="/nacin-placanja" element={<NacinPlacanjaPage />} />
            <Route path="/dostava" element={<DostavaPage />} />
            <Route path="/politika-privatnosti" element={<PrivacyPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/industrije/e-commerce" element={<EcommercePage />} />
            <Route path="/industrije/saas" element={<SaasPage />} />
            <Route path="/industrije/lokalni-biznisi" element={<LocalBusinessPage />} />
            <Route path="/industrije/startapovi" element={<StartupsPage />} />
            <Route path="/alati/roi-kalkulator" element={<ROICalculatorPage />} />
            <Route path="/cene-izrade-sajta" element={<CeneIzradeSajtaPage />} />
            <Route path="/agencija-vs-freelancer" element={<AgencijaVsFreelancerPage />} />
            <Route path="/cene-digitalnog-marketinga" element={<CeneDigitalnogMarketingaPage />} />
            <Route path="/marketing-agencija-novi-sad" element={<MarketingAgencijaNsPage />} />
            <Route path="/web-shop-nema-prodaju" element={<WebShopNemaProdajuPage />} />
            <Route path="/koliko-kosta-facebook-reklama" element={<KolikoKostaFacebookReklamaPage />} />
            <Route path="/marketing-agencija-zrenjanin" element={<MarketingAgencijaZrenjaninPage />} />
            <Route path="/seo-optimizacija-cena" element={<SeoOptimizacijaCenaPage />} />
            <Route path="/marketing-agencija-beograd" element={<MarketingAgencijaBgPage />} />
            <Route path="/facebook-oglasi-ne-rade" element={<FacebookOglasiNeRadePage />} />
            <Route path="/fiksna-naknada-vs-revenue-share" element={<FiksnaNaknadaVsRevenueSharePage />} />
            <Route path="/in-house-tim-vs-agencija" element={<InHouseVsAgencijaPage />} />
            <Route path="/marketing-za-restorane" element={<MarketingZaRestoranePage />} />
            <Route path="/marketing-za-stomatologe" element={<MarketingZaStomatologePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
      {showCal && (
        <Suspense fallback={null}>
          <CalFloatingButton />
        </Suspense>
      )}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Admin routes - no navbar/footer */}
          <Route path="/log" element={<LoginPage />} />
          <Route path="/log" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="prijave" element={<AdminPrijave />} />
            <Route path="poruke" element={<AdminPoruke />} />
            <Route path="newsletter" element={<AdminNewsletter />} />
            <Route path="emails" element={<AdminEmailLog />} />
            <Route path="analytics" element={<AdminAnalytics />} />
          </Route>

          {/* Public routes */}
          <Route path="/*" element={<PublicLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
