import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ─── Video Ad Data ─────────────────────────────── */
const videoAds = [
  {
    id: 1,
    profile: 'Foodie Tips',
    avatar: '🍳',
    avatarBg: 'from-orange-400 to-red-500',
    thumbnail: 'from-orange-500/80 to-amber-600/80',
    overlayText: 'THE BEST\nKITCHEN HACKS\nYOU NEED',
    overlayImage: '👨‍🍳',
    likes: '+11M',
    likesChange: '+22%',
    followers: '+12K',
    followersChange: '+32%',
  },
  {
    id: 2,
    profile: 'Health tips',
    avatar: '💊',
    avatarBg: 'from-pink-400 to-rose-600',
    thumbnail: 'from-slate-700/90 to-slate-900/90',
    overlayText: null,
    overlayImage: '👩‍⚕️',
    likes: '+11M',
    likesChange: '+22%',
    followers: '+12K',
    followersChange: '+32%',
  },
  {
    id: 3,
    profile: 'Amy Morgans',
    avatar: '🎬',
    avatarBg: 'from-blue-400 to-indigo-600',
    thumbnail: 'from-sky-500/80 to-blue-600/80',
    overlayText: null,
    overlayImage: '🤳',
    likes: '+5M',
    likesChange: '+45%',
    followers: '+18K',
    followersChange: '+105%',
  },
  {
    id: 4,
    profile: 'My IQ · Boost Your Brain',
    avatar: '🧠',
    avatarBg: 'from-violet-400 to-purple-600',
    thumbnail: 'from-stone-700/90 to-stone-900/90',
    overlayText: 'KNOWING HISTORY\nMAKES YOU EXTREMELY\nINTELLIGENT',
    overlayImage: '🏛️',
    likes: '+2M',
    likesChange: '+3%',
    followers: '+4K',
    followersChange: '+19%',
  },
  {
    id: 5,
    profile: 'Stock Master',
    avatar: '📈',
    avatarBg: 'from-emerald-400 to-teal-600',
    thumbnail: 'from-slate-600/90 to-slate-800/90',
    overlayText: 'INVEST SMART\nEARN MORE\nBE WEALTHY',
    overlayImage: '💹',
    likes: '+8M',
    likesChange: '+34%',
    followers: '+21K',
    followersChange: '+67%',
  },
  {
    id: 6,
    profile: 'Fitness Pro',
    avatar: '💪',
    avatarBg: 'from-red-400 to-orange-600',
    thumbnail: 'from-zinc-700/90 to-zinc-900/90',
    overlayText: null,
    overlayImage: '🏋️',
    likes: '+15M',
    likesChange: '+58%',
    followers: '+32K',
    followersChange: '+89%',
  },
  {
    id: 7,
    profile: 'Beauty Guru',
    avatar: '💄',
    avatarBg: 'from-pink-400 to-fuchsia-600',
    thumbnail: 'from-rose-500/80 to-pink-600/80',
    overlayText: 'GLOW UP\nIN 30 DAYS',
    overlayImage: '✨',
    likes: '+7M',
    likesChange: '+41%',
    followers: '+14K',
    followersChange: '+73%',
  },
]

/* Second row of ads */
const videoAdsRow2 = [
  {
    id: 8,
    profile: 'Travel Vlog',
    avatar: '✈️',
    avatarBg: 'from-cyan-400 to-blue-600',
    thumbnail: 'from-cyan-600/80 to-blue-700/80',
    overlayText: null,
    overlayImage: '🌍',
    likes: '+9M',
    likesChange: '+51%',
    followers: '+25K',
    followersChange: '+92%',
  },
  {
    id: 9,
    profile: 'Crypto Daily',
    avatar: '₿',
    avatarBg: 'from-amber-400 to-yellow-600',
    thumbnail: 'from-amber-700/80 to-orange-800/80',
    overlayText: 'BUY THE DIP\nHODL FOREVER',
    overlayImage: '🚀',
    likes: '+4M',
    likesChange: '+28%',
    followers: '+9K',
    followersChange: '+44%',
  },
  {
    id: 10,
    profile: 'Learn Serbian',
    avatar: '🇷🇸',
    avatarBg: 'from-blue-400 to-red-500',
    thumbnail: 'from-indigo-600/80 to-blue-700/80',
    overlayText: null,
    overlayImage: '📚',
    likes: '+3M',
    likesChange: '+67%',
    followers: '+8K',
    followersChange: '+120%',
  },
  {
    id: 11,
    profile: 'Skincare Lab',
    avatar: '🧴',
    avatarBg: 'from-teal-400 to-emerald-600',
    thumbnail: 'from-teal-600/80 to-green-700/80',
    overlayText: 'CLEAR SKIN\nIN 7 DAYS',
    overlayImage: '💎',
    likes: '+6M',
    likesChange: '+39%',
    followers: '+16K',
    followersChange: '+81%',
  },
  {
    id: 12,
    profile: 'DJ Remix',
    avatar: '🎧',
    avatarBg: 'from-purple-400 to-violet-600',
    thumbnail: 'from-purple-600/80 to-violet-800/80',
    overlayText: null,
    overlayImage: '🎵',
    likes: '+12M',
    likesChange: '+55%',
    followers: '+28K',
    followersChange: '+96%',
  },
  {
    id: 13,
    profile: 'Pet Care',
    avatar: '🐾',
    avatarBg: 'from-lime-400 to-green-600',
    thumbnail: 'from-lime-600/80 to-green-700/80',
    overlayText: 'YOUR PET\nDESERVES\nTHE BEST',
    overlayImage: '🐕',
    likes: '+10M',
    likesChange: '+48%',
    followers: '+22K',
    followersChange: '+77%',
  },
  {
    id: 14,
    profile: 'Tech Review',
    avatar: '📱',
    avatarBg: 'from-slate-400 to-zinc-600',
    thumbnail: 'from-slate-500/80 to-zinc-700/80',
    overlayText: null,
    overlayImage: '⚡',
    likes: '+18M',
    likesChange: '+62%',
    followers: '+35K',
    followersChange: '+110%',
  },
]

/* ─── Single Video Ad Card ──────────────────────── */
function VideoAdCard({ ad, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-tile rounded-[16px] overflow-hidden w-[220px] flex-shrink-0 border border-edge-2"
    >
      {/* Header — profile + active badge */}
      <div className="px-3.5 pt-3.5 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${ad.avatarBg} flex items-center justify-center text-[12px]`}>
              {ad.avatar}
            </div>
            <span className="text-[12px] text-ink-2 font-medium truncate max-w-[120px]">{ad.profile}</span>
          </div>
          <span className="flex items-center gap-1">
            <span className="text-[8px] text-emerald-400/60 font-medium uppercase tracking-wider">Active</span>
            <span className="w-1 h-1 rounded-full bg-emerald-400/70" />
          </span>
        </div>
      </div>

      {/* Video thumbnail area */}
      <div className={`mx-3 rounded-[12px] bg-gradient-to-br ${ad.thumbnail} flex flex-col items-center justify-center mb-2.5 relative overflow-hidden`} style={{ aspectRatio: '4/5' }}>
        {/* Video play indicator */}
        <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-page/40 backdrop-blur-sm flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white" opacity="0.7">
            <path d="M15.54 8.46a5.99 5.99 0 0 1 0 7.07l-1.41-1.41a4 4 0 0 0 0-4.24l1.41-1.42zM19.07 5.93a10 10 0 0 1 0 12.14l-1.41-1.41a8 8 0 0 0 0-9.32l1.41-1.41z"/>
            <circle cx="9" cy="12" r="3"/>
          </svg>
        </div>
        {ad.overlayText ? (
          <div className="text-center px-3">
            <p className="text-[13px] font-bold text-ink leading-[1.3] tracking-wide whitespace-pre-line drop-shadow-lg">
              {ad.overlayText}
            </p>
            <div className="mt-3 text-[28px]">{ad.overlayImage}</div>
          </div>
        ) : (
          <div className="text-[48px] drop-shadow-lg">{ad.overlayImage}</div>
        )}
      </div>

      {/* Metrics — likes + followers */}
      <div className="px-3.5 pb-3.5 flex gap-4">
        <div>
          <div className="text-[8px] text-ink/25 uppercase tracking-wider font-medium">Likes</div>
          <div className="flex items-center gap-1">
            <span className="text-[15px] text-ink font-semibold">{ad.likes}</span>
            <span className="text-[10px] text-emerald-400 font-medium">{ad.likesChange}</span>
          </div>
        </div>
        <div>
          <div className="text-[8px] text-ink/25 uppercase tracking-wider font-medium">Followers</div>
          <div className="flex items-center gap-1">
            <span className="text-[15px] text-ink font-semibold">{ad.followers}</span>
            <span className="text-[10px] text-emerald-400 font-medium">{ad.followersChange}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Auto-scrolling row ────────────────────────── */
function ScrollRow({ ads, direction = 'left', speed = 30 }) {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let animId
    let pos = direction === 'left' ? 0 : el.scrollWidth / 2

    const step = () => {
      if (direction === 'left') {
        pos += 0.4
        if (pos >= el.scrollWidth / 2) pos = 0
      } else {
        pos -= 0.4
        if (pos <= 0) pos = el.scrollWidth / 2
      }
      el.scrollLeft = pos
      animId = requestAnimationFrame(step)
    }

    animId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animId)
  }, [direction])

  /* Duplicate ads for seamless loop */
  const doubled = [...ads, ...ads]

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-hidden"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {doubled.map((ad, i) => (
        <VideoAdCard key={`${ad.id}-${i}`} ad={ad} delay={0} />
      ))}
    </div>
  )
}

/* ─── Main Component ────────────────────────────── */
export default function VideoAdsShowcase() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-page">
      {/* Container with rounded dark card like Arcads */}
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="relative bg-panel rounded-[24px] border border-edge-2 pt-12 md:pt-16 pb-6 overflow-hidden">
          {/* Giant background stat text — like Arcads "+1B VIEWS" */}
          <div className="text-center mb-2 relative">
            <h2 className="text-[56px] sm:text-[80px] md:text-[110px] lg:text-[140px] font-bold text-ink/[0.07] leading-[0.9] tracking-tight select-none uppercase">
              +1B Views
            </h2>
            <p className="text-[15px] md:text-[18px] text-ink-4 font-normal mt-3 md:mt-2">
              Marketing koji radi više nego što piše na pakovanju!
            </p>
          </div>

          {/* Row 1 — scrolls left */}
          <div className="mt-8 md:mt-10">
            <ScrollRow ads={videoAds} direction="left" />
          </div>

          {/* Row 2 — scrolls right (offset for variety) */}
          <div className="mt-4">
            <ScrollRow ads={videoAdsRow2} direction="right" />
          </div>

          {/* Bottom fade — cards fade into darkness */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent pointer-events-none z-10" />

          {/* Side fades — left and right edges */}
          <div className="absolute top-0 left-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  )
}
