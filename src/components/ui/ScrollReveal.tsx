'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useScrollReveal } from '@/hooks/useScrollReveal'

type ScrollRevealProps = {
  children: React.ReactNode
  className?: string
}

export function ScrollReveal({ children, className }: ScrollRevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
