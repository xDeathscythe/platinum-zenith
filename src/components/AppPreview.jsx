import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const brands = {
  niwa: {
    name: 'Niwa AI',
    subtitle: 'AI Chatbot',
    logo: 'N',
    gradient: 'from-purple-500 to-indigo-600',
    ads: [
      { text: '📸 Transform your photo into a professional photoshoot with AI 😍', views: '12,6K', viewsChange: '+45%', revenue: '$16K', revenueChange: '+195%', color: 'from-pink-500 to-orange-400', img: '🖼️' },
      { text: 'Build it. Animate it. Own your style. Our newest feature lets you create...', views: '15,1K', viewsChange: '+4%', revenue: '$18K', revenueChange: '+14%', color: 'from-rose-400 to-pink-600', img: '🎨' },
      { text: 'Want a visual like this for your product? Here\'s your step-by-step 👇', views: '11,8K', viewsChange: '+18%', revenue: '$19K', revenueChange: '+17%', color: 'from-violet-400 to-indigo-500', img: '👩' },
      { text: 'Adorable trend ❤️ try it now 🤩', views: '28K', viewsChange: '+70%', revenue: '$27K', revenueChange: '+95%', color: 'from-amber-400 to-rose-500', img: '💄' },
      { text: 'Make your brand pop with AI magic ✨', views: '8K', viewsChange: '+22%', revenue: '$12K', revenueChange: '+65%', color: 'from-teal-400 to-cyan-500', img: '🌟' },
      { text: '✨ Transform any selfie into a masterpiece', views: '9,2K', viewsChange: '+33%', revenue: '$14K', revenueChange: '+88%', color: 'from-fuchsia-500 to-purple-600', img: '✨' },
      { text: 'Your AI shopping assistant is here 🛍️', views: '6,4K', viewsChange: '+52%', revenue: '$9K', revenueChange: '+120%', color: 'from-indigo-400 to-blue-500', img: '🛍️' },
      { text: 'Smart replies. Real conversations. Try Niwa 💬', views: '18K', viewsChange: '+28%', revenue: '$22K', revenueChange: '+78%', color: 'from-emerald-400 to-teal-500', img: '💬' },
      { text: 'Boost your sales with AI-powered chat 🚀', views: '14K', viewsChange: '+61%', revenue: '$31K', revenueChange: '+142%', color: 'from-orange-400 to-red-500', img: '🚀' },
      { text: 'Let AI handle your customer support 24/7', views: '22K', viewsChange: '+35%', revenue: '$25K', revenueChange: '+88%', color: 'from-sky-400 to-blue-600', img: '🤖' },
    ],
  },
  platinum: {
    name: 'Platinum Zenit',
    subtitle: 'Marketing Agency',
    logo: 'P',
    gradient: 'from-amber-400 to-yellow-600',
    ads: [
      { text: '🚀 Scale your brand with data-driven campaigns that convert', views: '34K', viewsChange: '+82%', revenue: '$45K', revenueChange: '+210%', color: 'from-amber-400 to-orange-500', img: '🚀' },
      { text: 'From zero to hero — we built 3 brands in 90 days 💪', views: '21K', viewsChange: '+55%', revenue: '$38K', revenueChange: '+165%', color: 'from-yellow-400 to-amber-600', img: '💪' },
      { text: 'Stop guessing. Start growing. AI-powered marketing 📈', views: '18K', viewsChange: '+41%', revenue: '$29K', revenueChange: '+130%', color: 'from-orange-500 to-red-500', img: '📈' },
      { text: 'Your competition is already using AI ads. Are you? 🎯', views: '25K', viewsChange: '+67%', revenue: '$42K', revenueChange: '+185%', color: 'from-red-400 to-rose-600', img: '🎯' },
      { text: 'Case study: 400% ROAS in 30 days ⚡', views: '31K', viewsChange: '+73%', revenue: '$51K', revenueChange: '+220%', color: 'from-amber-500 to-yellow-400', img: '⚡' },
      { text: 'Premium creatives that stop the scroll 🛑', views: '16K', viewsChange: '+38%', revenue: '$23K', revenueChange: '+95%', color: 'from-rose-500 to-pink-600', img: '🛑' },
      { text: 'Full-funnel strategy. Real results. No fluff.', views: '19K', viewsChange: '+44%', revenue: '$33K', revenueChange: '+155%', color: 'from-orange-400 to-amber-500', img: '🏆' },
      { text: 'We turned $5K ad spend into $52K revenue 💰', views: '27K', viewsChange: '+59%', revenue: '$52K', revenueChange: '+940%', color: 'from-yellow-500 to-orange-600', img: '💰' },
      { text: 'Creative testing at scale — 50 variants/week 🧪', views: '12K', viewsChange: '+29%', revenue: '$18K', revenueChange: '+110%', color: 'from-amber-300 to-orange-400', img: '🧪' },
      { text: 'Your brand deserves a Platinum strategy ✨', views: '15K', viewsChange: '+36%', revenue: '$26K', revenueChange: '+125%', color: 'from-yellow-400 to-amber-500', img: '✨' },
    ],
  },
  truffles: {
    name: 'Truffles',
    subtitle: 'E-Commerce',
    logo: 'T',
    gradient: 'from-emerald-500 to-green-700',
    ads: [
      { text: '🍄 Fresh black truffles, delivered to your door in 24h', views: '42K', viewsChange: '+91%', revenue: '$67K', revenueChange: '+310%', color: 'from-emerald-500 to-green-600', img: '🍄' },
      { text: 'Chef-grade truffles at wholesale prices 👨‍🍳', views: '28K', viewsChange: '+63%', revenue: '$48K', revenueChange: '+175%', color: 'from-green-400 to-emerald-600', img: '👨‍🍳' },
      { text: 'The secret ingredient top restaurants don\'t want you to know 🤫', views: '35K', viewsChange: '+78%', revenue: '$55K', revenueChange: '+240%', color: 'from-lime-400 to-green-500', img: '🤫' },
      { text: 'Truffle oil, butter, salt — our new product line is HERE 🎉', views: '19K', viewsChange: '+45%', revenue: '$32K', revenueChange: '+145%', color: 'from-emerald-400 to-teal-500', img: '🎉' },
      { text: 'From Serbian forests to your kitchen table 🌿', views: '24K', viewsChange: '+52%', revenue: '$41K', revenueChange: '+195%', color: 'from-green-500 to-emerald-700', img: '🌿' },
      { text: 'Luxury taste, honest prices. That\'s our promise 💎', views: '15K', viewsChange: '+34%', revenue: '$27K', revenueChange: '+120%', color: 'from-teal-400 to-green-500', img: '💎' },
      { text: 'Subscribe & save 20% on monthly truffle boxes 📦', views: '21K', viewsChange: '+48%', revenue: '$36K', revenueChange: '+160%', color: 'from-emerald-300 to-green-400', img: '📦' },
      { text: 'Our truffles won 3 gourmet awards this year 🏅', views: '31K', viewsChange: '+71%', revenue: '$53K', revenueChange: '+250%', color: 'from-green-600 to-emerald-800', img: '🏅' },
      { text: 'Make any dish 10x better — guaranteed or refund 🤝', views: '17K', viewsChange: '+39%', revenue: '$29K', revenueChange: '+135%', color: 'from-lime-500 to-emerald-500', img: '🤝' },
      { text: 'Gift a truffle experience this holiday season 🎁', views: '26K', viewsChange: '+57%', revenue: '$44K', revenueChange: '+190%', color: 'from-emerald-400 to-green-600', img: '🎁' },
    ],
  },
}

function AdCard({ ad, brandKey }) {
  const brand = brands[brandKey]
  return (
    <div className="bg-[#1a1a1a] rounded-[14px] overflow-hidden w-[240px] flex-shrink-0">
      <div className="px-3.5 pt-3.5 pb-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] text-white/20">Sponsored</span>
            <span className="text-[11px] text-white/50 font-medium">{brand.name}</span>
          </div>
          <span className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-emerald-400/50" />
          </span>
        </div>
        <p className="text-[11px] text-white/60 leading-[1.4] mb-2.5 line-clamp-2">{ad.text}</p>
      </div>
      <div className={`mx-3 h-[150px] rounded-[10px] bg-gradient-to-br ${ad.color} flex items-center justify-center mb-2.5 opacity-80`}>
        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm" />
      </div>
      <div className="px-3.5 pb-3.5 flex gap-3">
        <div>
          <div className="text-[8px] text-white/20 uppercase tracking-wider">Views</div>
          <div className="flex items-center gap-1">
            <span className="text-[14px] text-white font-semibold">{ad.views}</span>
            <span className="text-[10px] text-emerald-400">{ad.viewsChange}</span>
          </div>
        </div>
        <div>
          <div className="text-[8px] text-white/20 uppercase tracking-wider">Revenues</div>
          <div className="flex items-center gap-1">
            <span className="text-[14px] text-white font-semibold">{ad.revenue}</span>
            <span className="text-[10px] text-emerald-400">{ad.revenueChange}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const vOffsets = [0, 40, 70, 40, 0]

export default function AppPreview() {
  const [active, setActive] = useState('niwa')
  const brand = brands[active]
  const row1 = brand.ads.slice(0, 5)
  const row2 = brand.ads.slice(5, 10)

  return (
    <div className="relative mx-auto max-w-[1164px] mt-10">
      {/* Brand selector tabs — OpenAI style text tabs with underline */}
      <div className="flex justify-center gap-6 mb-5 relative">
        {Object.entries(brands).map(([key, b]) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`relative text-[14px] font-medium pb-2 transition-all duration-200 cursor-pointer ${
              active === key
                ? 'text-white'
                : 'text-white/30 hover:text-white/50'
            }`}
          >
            {b.name}
            {active === key && (
              <motion.div layoutId="tabUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full" />
            )}
          </button>
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
      </div>

      {/* Card container */}
      <div className="bg-[#111111] rounded-[16px] border border-white/[0.06] pt-8 overflow-hidden" style={{ height: '520px' }}>
        <h3 className="text-[32px] font-light text-white/20 text-center mb-6 tracking-wide">{brand.name}</h3>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex justify-center gap-4 px-4" style={{ marginLeft: '-40px', marginRight: '-40px' }}>
              {row1.map((ad, i) => (
                <div key={i} className="flex-shrink-0" style={{ transform: `translateY(${vOffsets[i]}px)` }}>
                  <motion.div
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <AdCard ad={ad} brandKey={active} />
                    <AdCard ad={row2[i]} brandKey={active} />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
