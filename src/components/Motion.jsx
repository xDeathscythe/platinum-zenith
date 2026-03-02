/**
 * Lightweight motion re-exports using framer-motion/m (mini bundle).
 * Saves ~50% of vendor-motion bundle by excluding layout, drag, scroll animations.
 * 
 * Usage stays identical: import { motion, AnimatePresence } from '../components/Motion'
 */
export { AnimatePresence } from 'framer-motion'

import * as m from 'framer-motion/m'

// Re-create the motion.div / motion.span / etc. namespace
export const motion = new Proxy(m, {
  get(target, prop) {
    return target[prop]
  }
})
