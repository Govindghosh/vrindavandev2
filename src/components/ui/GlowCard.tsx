import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type GlowCardProps = {
  className?: string
  children: React.ReactNode
}

export function GlowCard({ className, children }: GlowCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={cn('glass p-6 sm:p-8', className)}
    >
      {children}
    </motion.article>
  )
}
