'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { BarChart3, MessageCircle, TrendingUp, Zap } from 'lucide-react'

const growthActions = [
  {
    title: 'Google Maps SEO',
    text: 'Show up when nearby customers search for rooms, food, shops, tours, and services.',
    icon: TrendingUp,
    color: 'text-gold-primary',
  },
  {
    title: 'High-Converting Ads',
    text: 'Run focused Meta and Google campaigns for WhatsApp chats, calls, and bookings.',
    icon: Zap,
    color: 'text-[var(--saffron)]',
  },
  {
    title: 'WhatsApp Lead Automation',
    text: 'Capture, reply, follow up, and track enquiries before they go cold.',
    icon: MessageCircle,
    color: 'text-green',
  },
]

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-5 pb-20 pt-12 sm:px-8 lg:pt-24">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: 'url(/images/vrindavan_new_bg.webp)', opacity: 0.06 }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,0,0.08),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(212,175,55,0.09),_transparent_25%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-[rgba(255,107,0,0.15)] bg-[rgba(255,107,0,0.06)] px-3 py-1 font-mono text-xs uppercase tracking-[0.3em] text-[var(--saffron)]">
              Digital Growth Agency for Vrindavan, Mathura, Agra, and remote clients
            </span>
            <div className="space-y-2">
              <h1 className="text-[2.65rem] font-black leading-[1.04] tracking-[-0.025em] text-white sm:text-[5rem] sm:leading-[0.92] md:text-[6rem]" style={{ fontFamily: 'var(--font-display)' }}>
                Get More Calls, Bookings & WhatsApp Leads For Your Local Business
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
                Websites, Google Maps SEO, Meta ads, and WhatsApp automation for local businesses that need enquiries, bookings, and walk-ins.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:max-w-xl sm:grid-cols-[auto_1fr] sm:items-center">
            <Link
              href="https://wa.me/917906630435"
              target="_blank"
              rel="noreferrer"
              className="btn-block-mobile inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-black shadow-[0_16px_36px_rgba(37,211,102,0.24)] transition hover:bg-[#34e682] sm:max-w-fit"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </Link>
            <Link href="#services" className="btn btn-ghost btn-block-mobile inline-flex items-center justify-center gap-2 text-sm font-semibold sm:max-w-fit">
              See Our Services
              <BarChart3 className="h-4 w-4" />
            </Link>
          </div>
          <p className="text-sm font-medium text-text-secondary">
            For Vrindavan - Mathura - Agra - Delhi NCR businesses
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="glass relative overflow-hidden p-4 shadow-lift sm:p-6"
        >
          <Image
            src="/images/hero_dashboard.webp"
            alt="Analytics Dashboard showing digital growth"
            width={800}
            height={800}
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, 800px"
            className="w-full rounded-xl border border-[rgba(212,175,55,0.1)] object-cover shadow-sm"
          />
        </motion.div>
      </div>

      <div className="relative mx-auto mt-12 grid max-w-7xl gap-4 md:grid-cols-3">
        {growthActions.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.title} className="section-card flex items-start gap-4 rounded-2xl p-4">
              <div className={`rounded-xl bg-white/[0.04] p-2 ${item.color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-white">{item.title}</h2>
                <p className="mt-1 text-xs leading-6 text-text-secondary">{item.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
