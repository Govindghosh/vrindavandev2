'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ContactFormValues } from '@/types'

const services = [
  'Web Development',
  'Local SEO & Google Maps',
  'Meta Ads & Lead Gen',
  'AI & Automation',
  'WhatsApp CRM',
  'Branding & Design',
  'Social Media Management',
  'Full Package (Multiple Services)',
  'Other',
]

const budgets = [
  'Under INR 10,000',
  'INR 10,000 - INR 30,000',
  'INR 30,000 - INR 1,00,000',
  'INR 1,00,000+',
  "Let's discuss",
]
export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ defaultValues: { name: '', email: '', phone: '', service: services[0], budget: budgets[0], message: '' } })

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Email message failed')
      }

      setStatus('success')
      reset()
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="// 08 - CONTACT"
          title="Let's Talk"
          className="mb-10"
        />
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="section-card rounded-3xl p-5 sm:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan">Get in Touch</p>
              <h3 className="mt-4 text-3xl font-bold text-white">Talk to VrindavanDev</h3>
              <Link
                href="https://wa.me/917906630435"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 text-sm font-semibold"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Link>
              <div className="mt-8 space-y-4 text-sm text-text-secondary">
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-gold-primary min-w-[70px]">Location</span>
                  <span>Vrindavan, UP, India - 281121</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-gold-primary min-w-[70px]">Email</span>
                  <span>hello@vrindavandev.in</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-gold-primary min-w-[70px]">Phone</span>
                  <Link href="https://wa.me/917906630435" className="text-gold-primary hover:underline">
                    WhatsApp Chat
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="section-card rounded-3xl p-5 sm:p-8"
          >
            <div className="grid gap-5">
              <div className="rounded-2xl border border-[#25D366]/25 bg-[#25D366]/10 p-4">
                <p className="text-sm font-bold text-white">Quick? Chat directly</p>
                <Link
                  href="https://wa.me/917906630435"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#34e682]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Open WhatsApp Chat
                </Link>
              </div>

              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium text-white">Name *</label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  aria-required="true"
                  className="rounded-3xl border border-[rgba(212,175,55,0.18)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm text-white outline-none transition focus:border-gold-primary"
                />
                {errors.name && <span role="alert" className="text-sm text-saffron">{errors.name.message}</span>}
              </div>

              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium text-white">Email *</label>
                <input
                  id="email"
                  type="email"
                  inputMode="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                  })}
                  aria-required="true"
                  className="rounded-3xl border border-[rgba(212,175,55,0.18)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm text-white outline-none transition focus:border-gold-primary"
                />
                {errors.email && <span role="alert" className="text-sm text-saffron">{errors.email.message}</span>}
              </div>

              <div className="grid gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-white">WhatsApp Number *</label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="+91 98765 43210"
                  {...register('phone', {
                    required: 'WhatsApp number is required',
                    pattern: { value: /^[0-9+\-\s()]{8,20}$/, message: 'Enter a valid WhatsApp number' },
                  })}
                  aria-required="true"
                  className="rounded-3xl border border-[rgba(212,175,55,0.18)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm text-white outline-none transition focus:border-gold-primary"
                />
                {errors.phone && <span role="alert" className="text-sm text-saffron">{errors.phone.message}</span>}
              </div>

              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium text-white">Message</label>
                <textarea
                  id="message"
                  {...register('message')}
                  aria-required="false"
                  className="min-h-[160px] rounded-3xl border border-[rgba(212,175,55,0.18)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm text-white outline-none transition focus:border-gold-primary"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary w-full text-sm font-semibold"
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent! We will email you soon.' : status === 'error' ? 'Could not send. Please try again.' : 'Send Message'}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
