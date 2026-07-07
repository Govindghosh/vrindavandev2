'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { GlowCard } from '@/components/ui/GlowCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

interface StatItem {
  value: string
  label: string
  bgImage: string
}

const stats: StatItem[] = [
  { value: '50+', label: 'Clients Served', bgImage: '/images/stats_clients.webp' },
  { value: '3+', label: 'Years in Business', bgImage: '/images/stats_years.webp' },
  { value: '100%', label: 'Client Retention', bgImage: '/images/stats_retention.webp' }
]

const capabilities = [
  'Website Design & Development',
  'Local SEO & Google Maps',
  'Meta & Google Ads',
  'WhatsApp CRM & Automation',
  'Social Media Management',
  'Brand Identity & Design',
  'Video & Reels Production',
  'AI-Powered Automation'
]

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const isStaggered = index === 1
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col items-center transition-transform duration-500 ease-out ${
        isStaggered ? 'md:translate-y-12' : ''
      }`}
    >
      <div className="relative w-full">
        {/* Image Container with overflow-hidden */}
        <div className="group relative w-full h-[360px] md:h-[420px] overflow-hidden rounded-[32px] border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.4)] cursor-pointer">
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
            <Image
              src={stat.bgImage}
              alt={stat.label}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,11,18,0.95)] via-[rgba(10,11,18,0.35)] to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
        </div>

        {/* Large overlapping number at the very bottom border of this image container */}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white select-none z-20 pointer-events-none leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
          {stat.value}
        </span>
      </div>

      {/* Label outside the image container */}
      <span className="mt-8 md:mt-10 text-[11px] md:text-xs font-extrabold uppercase tracking-[0.25em] text-white/50 text-center block">
        {stat.label}
      </span>
    </motion.div>
  )
}

function CapabilitiesList() {
  return (
    <div className="grid gap-3 p-1">
      {capabilities.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="flex items-center gap-3 rounded-xl border border-[rgba(212,175,55,0.08)] bg-[rgba(255,255,255,0.02)] px-4 py-3 text-sm text-white transition-colors hover:border-[rgba(212,175,55,0.25)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold-primary" />
          {item}
        </motion.div>
      ))}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section" aria-label="About Digitalcraft Studio">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="grid gap-8 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <SectionHeader
              label="// 01 - ABOUT US"
              title="Your full‑service digital agency for local growth"
            />
            </motion.div>
            <div className="space-y-6 text-body text-text-secondary leading-relaxed">
              <p>
                We build high-impact digital experiences for local businesses in Vrindavan, Mathura, Agra, and beyond — websites, SEO, ads, WhatsApp automation, and brand design.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mt-4 h-[260px] w-full overflow-hidden rounded-3xl border border-[rgba(212,175,55,0.12)] shadow-lg"
            >
              <Image
                src="/images/vrindavan_digital_bg.webp"
                alt="Vrindavan digital agency"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
            </motion.div>
          </div>

          <GlowCard className="overflow-hidden">
            <div className="mb-5 flex items-center justify-between rounded-2xl border border-[rgba(212,175,55,0.12)] bg-[rgba(255,255,255,0.035)] px-4 py-3 text-sm text-text-secondary">
              <span className="font-semibold text-gold-primary">What We Do</span>
            </div>
            <CapabilitiesList />
          </GlowCard>
        </div>

        <div className="space-y-6 pt-6 pb-12 md:pb-24">
          <h3 className="font-display text-lg font-bold uppercase tracking-widest text-text-muted">
            Our impact in numbers
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
