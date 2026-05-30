'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BarChart3, MessageCircle, TrendingUp, Sparkles, ShieldCheck, Zap } from 'lucide-react'
import { useTypewriter } from '@/hooks/useTypewriter'
import { SquigglyText } from '@/components/ui/squiggly-text'

const typewriterWords = [
  'Google Maps rankings',
  'high-converting websites',
  'WhatsApp lead systems',
  'Meta ad funnels',
  'local business growth',
]

export default function Hero() {
  const { displayed } = useTypewriter(typewriterWords, 70, 1500)

  return (
    <section id="hero" className="relative overflow-hidden px-5 pb-20 pt-12 sm:px-8 lg:pt-24">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: 'url(/images/vrindavan_new_bg.png)', opacity: 0.06 }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,0,0.08),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(212,175,55,0.09),_transparent_25%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(212,175,55,0.18)] bg-[rgba(255,255,255,0.45)] px-4 py-2 text-sm text-text-secondary shadow-lg backdrop-blur-xl">
            <span className="pulse-dot" aria-hidden="true" />
            <span>Vrindavan, India</span>
            <span className="h-2 w-2 rounded-full bg-green-400" />
          </div>

          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-[rgba(255,107,0,0.15)] bg-[rgba(255,107,0,0.06)] px-3 py-1 font-mono text-xs uppercase tracking-[0.3em] text-[var(--saffron)]">
              Digital Growth Agency for Vrindavan, Mathura, Agra, and remote clients
            </span>
            <div className="space-y-2">
              <h1 className="font-black leading-[0.92] tracking-[-0.045em] text-4xl sm:text-[5rem] md:text-[6rem]" style={{ fontFamily: 'var(--font-display)' }}>Get More Calls, Bookings & WhatsApp Leads For Your Local Business</h1>
              <p className="text-sm text-text-secondary mt-4">Websites • Google Maps SEO • Meta Ads • WhatsApp Automation</p>
              <p className="text-xs text-text-secondary mt-2">Custom Software, CRM & AI Automation Also Available</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xl font-semibold text-white sm:text-xl">
              <span>We build -</span>
              <span className="text-gold-primary">{displayed}</span>
              <span className="animate-blink text-gold-primary">|</span>
            </div>
          </div>

          <div className="grid gap-4 sm:max-w-xl">
            <div className="grid gap-3 sm:grid-cols-[auto_1fr] sm:items-center">
              <Link href="#local-growth" className="btn btn-primary btn-block-mobile inline-flex items-center justify-center gap-2 text-sm font-semibold sm:max-w-fit">
                See Growth Plans
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#services" className="btn btn-ghost btn-block-mobile inline-flex items-center justify-center gap-2 text-sm font-semibold sm:max-w-fit">
                Explore Services
                <BarChart3 className="h-4 w-4" />
              </Link>
            </div>
            <Link
              href="https://wa.me/917906630435"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[rgba(0,255,135,0.13)] px-4 py-3 text-sm font-semibold text-green shadow-glow-gold transition hover:bg-green/15"
            >
              <MessageCircle className="h-4 w-4 text-green" />
              Message on WhatsApp
            </Link>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-text-secondary">For Vrindavan - Mathura - Agra - Delhi NCR businesses</div>
            <div className="flex items-center gap-3">
              <div className="grid grid-cols-3 gap-2">
                {['RG', 'PM', 'AK'].map((initials) => (
                  <span key={initials} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] text-sm font-semibold text-white">
                    {initials}
                  </span>
                ))}
              </div>
              <span className="rounded-full bg-[rgba(212,175,55,0.12)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-primary">5/5</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="glass relative overflow-hidden p-8 shadow-lift space-y-6"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex rounded-full bg-[rgba(212,175,55,0.08)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-primary">
                Local Growth Framework
              </span>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-gold-primary/30" />
                <span className="h-2 w-2 rounded-full bg-gold-primary/60" />
                <span className="h-2 w-2 rounded-full bg-gold-primary" />
              </div>
            </div>

            <img src="/images/hero_dashboard.png" alt="Analytics Dashboard showing digital growth" className="w-full rounded-xl object-cover shadow-sm border border-[rgba(212,175,55,0.1)]" />

            <div className="space-y-4">
              <div className="section-card flex items-start gap-4 rounded-2xl p-4">
                <div className="rounded-xl bg-[rgba(212,175,55,0.1)] p-2 text-gold-primary">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Google Maps SEO</h4>
                  <p className="text-xs text-text-secondary mt-1">Get your hotel, dhaba, or shop to show in Top 3 search results.</p>
                </div>
              </div>

              <div className="section-card flex items-start gap-4 rounded-2xl p-4">
                <div className="rounded-xl bg-[rgba(255,107,0,0.1)] p-2 text-[var(--saffron)]">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">High-Converting Ads</h4>
                  <p className="text-xs text-text-secondary mt-1">Target tourists, pilgrims, and local buyers with Meta & Google Ads.</p>
                </div>
              </div>

              <div className="section-card flex items-start gap-4 rounded-2xl p-4">
                <div className="rounded-xl bg-[rgba(0,255,135,0.1)] p-2 text-green">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">WhatsApp Lead Automation</h4>
                  <p className="text-xs text-text-secondary mt-1">Automate bookings, queries, and review requests instantly.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[rgba(212,175,55,0.08)] flex items-center justify-between text-xs text-text-secondary">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-green" /> Verified Results
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="h-3.5 w-3.5 text-gold-primary" /> Done For You
              </span>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex items-center gap-3 text-sm text-text-secondary sm:mt-12">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(212,175,55,0.16)] bg-[rgba(255,255,255,0.04)]">v</span>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
