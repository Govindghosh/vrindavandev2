'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type Testimonial = {
  quote: string
  name: string
  designation: string
  src: string
}

export function AnimatedTestimonials({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[]
  autoplay?: boolean
  className?: string
}) {
  const [active, setActive] = useState(0)

  const handleNext = () => {
    setActive((current) => (current + 1) % testimonials.length)
  }

  const handlePrevious = () => {
    setActive((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay || testimonials.length < 2) return

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => window.clearInterval(interval)
  }, [autoplay, testimonials.length])

  if (!testimonials.length) {
    return null
  }

  return (
    <div className={cn('mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-20', className)}>
      <div className="relative h-80 w-full sm:h-96 lg:h-[28rem]">
        <AnimatePresence>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.src}
              initial={{
                opacity: 0,
                scale: 0.9,
                rotate: index % 2 === 0 ? 6 : -6,
                y: 18,
              }}
              animate={{
                opacity: index === active ? 1 : 0.35,
                scale: index === active ? 1 : 0.94,
                rotate: index === active ? 0 : index % 2 === 0 ? 5 : -5,
                y: index === active ? 0 : 12,
                zIndex: index === active ? 30 : testimonials.length - index,
              }}
              exit={{ opacity: 0, scale: 0.9, y: 18 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="absolute inset-0 origin-bottom"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[var(--radius-lg)] border border-[rgba(212,175,55,0.18)] bg-[rgba(255,255,255,0.04)] shadow-lift">
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover object-center"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,11,18,0.45)] via-transparent to-transparent" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -18, filter: 'blur(8px)' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="min-h-[18rem]"
          >
            <div className="mb-5 flex gap-1">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="h-2 w-2 rounded-full bg-[var(--gold-primary)] shadow-[0_0_18px_rgba(212,175,55,0.5)]" />
              ))}
            </div>
            <h3 className="text-h3 text-white">{testimonials[active].name}</h3>
            <p className="mt-1 text-sm text-[var(--gold-primary)]">{testimonials[active].designation}</p>
            <p className="mt-8 text-xl leading-relaxed text-[var(--text-secondary)] sm:text-2xl">
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={handlePrevious}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(212,175,55,0.25)] bg-[rgba(255,255,255,0.05)] text-white transition hover:border-[var(--gold-primary)] hover:bg-[rgba(212,175,55,0.12)]"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={handleNext}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(212,175,55,0.25)] bg-[rgba(255,255,255,0.05)] text-white transition hover:border-[var(--gold-primary)] hover:bg-[rgba(212,175,55,0.12)]"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
