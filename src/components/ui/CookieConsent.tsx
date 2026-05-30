'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ShieldCheck, X } from 'lucide-react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookies_accepted')
    if (!accepted) {
      const timer = setTimeout(() => setIsVisible(true), 2500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = (value: 'true' | 'essential') => {
    localStorage.setItem('cookies_accepted', value)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: 'spring', stiffness: 340, damping: 28 }}
          role="dialog"
          aria-label="Cookie consent"
          className="fixed bottom-5 left-1/2 z-[9999] w-[calc(100%-2rem)] -translate-x-1/2 max-w-lg overflow-hidden rounded-2xl border border-[rgba(212,175,55,0.22)] bg-[rgba(10,11,18,0.97)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl sm:p-6"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_130%,rgba(212,175,55,0.1),transparent_65%)]" aria-hidden="true" />

          <div className="flex items-start gap-4">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(212,175,55,0.1)] text-gold-primary">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-sm font-bold text-white">We use cookies</h3>
                <button
                  type="button"
                  onClick={() => accept('essential')}
                  aria-label="Dismiss cookie banner"
                  className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-text-muted transition hover:text-white"
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>

              <p className="mt-1.5 text-xs leading-relaxed text-text-secondary">
                We use performance cookies to analyze visits, personalize features, and improve local search visibility for businesses in Vrindavan &amp; Mathura.
              </p>

              <div className="mt-4 flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={() => accept('true')}
                  className="btn btn-primary min-h-9 px-5 py-1.5 text-xs font-bold"
                >
                  Accept All
                </button>
                <button
                  type="button"
                  onClick={() => accept('essential')}
                  className="inline-flex min-h-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold text-text-secondary transition hover:border-white/20 hover:text-white"
                >
                  Essential Only
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
