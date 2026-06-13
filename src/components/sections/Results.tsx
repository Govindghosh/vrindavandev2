'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionHeader } from '@/components/ui/SectionHeader'

interface MetricItem {
  label: string
  value: string
  description: string
  bgImage: string
}

const metrics: MetricItem[] = [
  {
    label: 'Google Maps Ranking',
    value: '#3',
    description: 'Top 3 for local keywords',
    bgImage: '/images/GoogleMapsRanking.webp',
  },
  {
    label: 'WhatsApp Leads',
    value: '400+',
    description: 'Monthly inquiries generated',
    bgImage: '/images/WhatsAppLeads.webp',
  },
  {
    label: 'Lead Growth',
    value: '5x',
    description: 'Increase in qualified leads',
    bgImage: '/images/LeadGrowth.webp',
  },
  {
    label: 'Keywords Ranked',
    value: '120+',
    description: 'Top positions in search',
    bgImage: '/images/keywors.webp',
  },
]

function ResultCard({ metric, index }: { metric: MetricItem; index: number }) {
  const isStaggered = index % 2 === 1

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
        <div className="group relative flex h-[240px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.035)] shadow-[0_15px_35px_rgba(0,0,0,0.4)] sm:h-[300px] sm:rounded-[32px] md:h-[360px]">
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
            <Image
              src={metric.bgImage}
              alt={metric.label}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center opacity-45 transition-opacity duration-300 sm:opacity-100"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,11,18,0.98)] via-[rgba(10,11,18,0.62)] to-[rgba(10,11,18,0.22)] opacity-95 transition-opacity duration-300 group-hover:opacity-95 sm:via-[rgba(10,11,18,0.38)] sm:to-[rgba(10,11,18,0.08)]" />
          <div className="relative z-10 mt-auto px-5 pb-16 text-center sm:px-7 sm:pb-10">
            <p className="font-display text-sm font-bold uppercase tracking-[0.28em] text-[var(--gold-primary)]">
              {metric.label}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
              {metric.description}
            </p>
          </div>
        </div>

        <span className="pointer-events-none absolute bottom-5 left-1/2 z-20 -translate-x-1/2 select-none rounded-2xl bg-black/68 px-4 py-2 text-5xl font-black leading-none tracking-tight text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:bottom-0 sm:translate-y-1/2 sm:bg-transparent sm:px-0 sm:py-0 sm:text-6xl sm:shadow-none sm:backdrop-blur-0 md:text-7xl lg:text-8xl">
          {metric.value}
        </span>
      </div>

      <span className="mt-8 block text-center text-[11px] font-extrabold uppercase tracking-[0.25em] text-white/50 md:mt-10 md:text-xs">
        {metric.label}
      </span>
    </motion.div>
  )
}

export default function Results() {
  return (
    <section id="results" className="section">
      <div className="mx-auto max-w-7xl space-y-12">
        <SectionHeader label="// 04 - RESULTS" title="Our Results" />

        <div className="grid gap-8 pb-12 pt-6 sm:grid-cols-2 lg:grid-cols-4 md:pb-24">
          {metrics.map((metric, index) => (
            <ResultCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
