'use client'

import { motion } from 'framer-motion'
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
    bgImage: '/images/GoogleMapsRanking.png',
  },
  {
    label: 'WhatsApp Leads',
    value: '400+',
    description: 'Monthly inquiries generated',
    bgImage: '/images/WhatsAppLeads.png',
  },
  {
    label: 'Lead Growth',
    value: '5x',
    description: 'Increase in qualified leads',
    bgImage: '/images/LeadGrowth.png',
  },
  {
    label: 'Keywords Ranked',
    value: '120+',
    description: 'Top positions in search',
    bgImage: '/images/keywors.png',
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
        <div className="group relative flex h-[300px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-[rgba(255,255,255,0.035)] shadow-[0_15px_35px_rgba(0,0,0,0.4)] md:h-[360px]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${metric.bgImage})` }}
            role="img"
            aria-label={metric.label}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,11,18,0.95)] via-[rgba(10,11,18,0.38)] to-[rgba(10,11,18,0.08)] opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
          <div className="relative z-10 mt-auto px-7 pb-10 text-center">
            <p className="font-display text-sm font-bold uppercase tracking-[0.28em] text-[var(--gold-primary)]">
              {metric.label}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
              {metric.description}
            </p>
          </div>
        </div>

        <span className="pointer-events-none absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-1/2 select-none text-6xl font-black leading-none tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] md:text-7xl lg:text-8xl">
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
        <SectionHeader
          label="// 04 - RESULTS"
          title="Proven Impact for Local Businesses"
          description="Real numbers that demonstrate the growth you can expect."
        />

        <div className="space-y-6 pt-6 pb-12 md:pb-24">
          <h3 className="font-display text-lg font-bold uppercase tracking-widest text-text-muted">
            Our impact in numbers
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <ResultCard key={metric.label} metric={metric} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
