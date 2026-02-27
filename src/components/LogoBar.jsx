import { motion } from 'framer-motion'

export default function LogoBar() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="pt-20 pb-4"
    >
      <div className="px-5 md:px-8 flex items-center justify-center gap-8 sm:gap-14 flex-wrap">
        {/* cisco */}
        <span className="text-[18px] sm:text-[20px] font-bold text-ink-2 tracking-tight lowercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>cisco</span>
        {/* Instacart */}
        <span className="text-[18px] sm:text-[20px] font-bold text-ink-2 tracking-tight italic" style={{ fontFamily: 'DM Sans, sans-serif' }}>Instacart</span>
        {/* duolingo */}
        <span className="text-[18px] sm:text-[20px] font-bold text-ink-2 tracking-tight lowercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>duolingo</span>
        {/* Vanta */}
        <span className="text-[18px] sm:text-[20px] font-bold text-ink-2 tracking-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>Vanta</span>
      </div>
    </motion.section>
  )
}
