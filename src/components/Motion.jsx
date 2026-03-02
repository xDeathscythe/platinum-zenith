/**
 * Lightweight motion with LazyMotion + domAnimation.
 * Supports AnimatePresence exit animations while keeping bundle small.
 * 
 * Usage: import { motion, AnimatePresence, MotionProvider } from './Motion'
 * Wrap your app/section with <MotionProvider> for exit animations to work.
 */
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'

export { AnimatePresence }

// m components work with LazyMotion for full animation support
export const motion = m

// Provider component — wrap sections that need exit animations
export function MotionProvider({ children }) {
  return <LazyMotion features={domAnimation} strict>{children}</LazyMotion>
}
