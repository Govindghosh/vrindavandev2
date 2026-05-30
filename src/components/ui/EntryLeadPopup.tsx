'use client'

import { useEffect, useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Sparkles, X } from 'lucide-react'

interface LeadValues {
  name: string
  phone: string
  service: string
}

const services = [
  'Website Development',
  'Google Maps Local SEO',
  'Meta Ads Management',
  'WhatsApp CRM Automation',
  'Full Growth Package'
]

function SuccessView({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center py-6 text-center">
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(16,185,129,0.1)] text-green">
        <CheckCircle className="h-8 w-8 animate-bounce" aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-display text-2xl font-black text-white">Flat ₹500 Off Unlocked</h3>
      <p className="mt-2 text-xs text-text-secondary max-w-xs leading-relaxed">
        Use coupon code <span className="font-extrabold text-gold-primary">FIRST500</span> during your session. Our growth consultants will message you on WhatsApp within 2 hours.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="btn btn-primary mt-6 min-h-11 w-full text-xs font-bold uppercase tracking-wider"
      >
        Explore Services
      </button>
    </div>
  )
}

export default function EntryLeadPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LeadValues>({
    defaultValues: { name: '', phone: '', service: services[0] }
  })

  useEffect(() => {
    const isSubscribed = localStorage.getItem('newsletter_subscribed') === 'true'
    const isDismissed = sessionStorage.getItem('entry-popup-dismissed') === 'true'
    if (!isSubscribed && !isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        document.body.style.overflow = 'hidden'
      }, 8000)
      return () => {
        clearTimeout(timer)
        document.body.style.overflow = ''
      }
    }
  }, [])

  const closePopup = () => {
    sessionStorage.setItem('entry-popup-dismissed', 'true')
    document.body.style.overflow = ''
    setIsOpen(false)
  }

  const onSubmit = async (data: LeadValues) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error('Subscription API call failed')
      }
      localStorage.setItem('newsletter_subscribed', 'true')
      localStorage.setItem('newsletter-lead', JSON.stringify({ ...data, createdAt: new Date().toISOString() }))
      setIsSuccess(true)
    } catch (err) {
      console.error('Subscription error:', err)
      // Save locally anyway so they aren't blocked or repeatedly spammed
      localStorage.setItem('newsletter_subscribed', 'true')
      setIsSuccess(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (overlayRef.current && e.target === overlayRef.current) {
      closePopup()
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div
        ref={overlayRef}
        onClick={handleOutsideClick}
        className="fixed inset-0 z-[10000] grid place-items-center bg-black/85 px-4 py-6 backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,107,0,0.1),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.08),transparent_40%)]" aria-hidden="true" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-[rgba(212,175,55,0.22)] bg-[rgba(10,11,18,0.96)] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.65)] sm:p-7"
        >
          <button
            type="button"
            onClick={closePopup}
            aria-label="Close popup"
            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-text-secondary transition hover:border-[#ff5b24] hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>

          {!isSuccess ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-primary/20 bg-gold-primary/10 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-gold-primary">
                  <Sparkles className="h-3 w-3" aria-hidden="true" />
                  Limited Time Welcome offer
                </span>
                <h2 className="mt-2 font-display text-2xl font-black leading-tight text-white sm:text-3xl">
                  Grow Your Business
                </h2>
                <p className="mt-1 text-xs text-text-secondary">
                  Subscribe today and unlock flat ₹500 off on your first digital marketing service.
                </p>
              </div>

              <div className="space-y-3.5 pt-1">
                <div className="grid gap-1">
                  <input
                    placeholder="Your Name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="min-h-11 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-xs text-white placeholder-text-muted transition focus:border-gold-primary focus:bg-white/[0.06]"
                  />
                  {errors.name && <span className="text-[10px] font-bold text-[#ff5b24] pl-1">{errors.name.message}</span>}
                </div>

                <div className="grid gap-1">
                  <input
                    placeholder="WhatsApp Number"
                    type="tel"
                    inputMode="tel"
                    {...register('phone', {
                      required: 'WhatsApp number is required',
                      pattern: { value: /^[0-9+\-\s()]{8,20}$/, message: 'Enter a valid number' }
                    })}
                    className="min-h-11 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-xs text-white placeholder-text-muted transition focus:border-gold-primary focus:bg-white/[0.06]"
                  />
                  {errors.phone && <span className="text-[10px] font-bold text-[#ff5b24] pl-1">{errors.phone.message}</span>}
                </div>

                <div className="grid gap-1">
                  <select
                    {...register('service')}
                    className="min-h-11 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-xs text-white transition focus:border-gold-primary focus:bg-white/[0.06]"
                  >
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-2.5 pt-2 sm:grid-cols-[1fr_auto]">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary inline-flex w-full items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-wide min-h-11"
                >
                  {isSubmitting ? 'Sending...' : 'Book Your Free Strategy Session'}
                  {!isSubmitting && <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />}
                </button>
                <button
                  type="button"
                  onClick={closePopup}
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 px-4 text-xs font-bold text-text-secondary hover:border-white/20 hover:text-white transition"
                >
                  Skip
                </button>
              </div>
            </form>
          ) : (
            <SuccessView onClose={closePopup} />
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
