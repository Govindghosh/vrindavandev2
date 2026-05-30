'use client'

import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { Building2, GraduationCap, Hotel, Landmark, MapPinned, ShoppingBag, Store, Utensils, Wrench, Route } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const associations = [
  { icon: Hotel, name: 'Hotel Growth', color: '#39bdf8' },
  { icon: Building2, name: 'Dharamshala Leads', color: '#f8b739' },
  { icon: ShoppingBag, name: 'Prasad Stores', color: '#ff6b00' },
  { icon: Route, name: 'Tours & Travel', color: '#35d39a' },
  { icon: Landmark, name: 'Ashram Reach', color: '#d4af37' },
  { icon: Utensils, name: 'Restaurants', color: '#ff4f81' },
  { icon: GraduationCap, name: 'Coaching Institutes', color: '#8b5cf6' },
  { icon: MapPinned, name: 'Real Estate', color: '#22c55e' },
  { icon: Store, name: 'Local Shops', color: '#06b6d4' },
  { icon: Wrench, name: 'Service Pros', color: '#f97316' },
]

export default function Industries() {
  return (
    <section id="associations" className="section">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="// 02 - ASSOCIATIONS"
            title="Who We Work With"
          />
        </motion.div>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-3 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 lg:grid-cols-5 lg:gap-5">
          {associations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="section-card group relative flex h-[92px] min-w-[220px] items-center justify-center overflow-hidden rounded-2xl px-4 transition duration-300 hover:border-[var(--tile-color)] hover:bg-[rgba(255,255,255,0.05)] sm:min-w-0"
              style={{ '--tile-color': item.color } as CSSProperties}
            >
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: `radial-gradient(circle at 50% 0%, ${item.color}26, transparent 62%)` }} />
              <div className="flex items-center gap-3">
                <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-white/45 grayscale transition duration-300 group-hover:border-[var(--tile-color)] group-hover:text-[var(--tile-color)] group-hover:grayscale-0 group-hover:shadow-[0_0_24px_var(--tile-color)]">
                  <item.icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <span className="relative text-left font-[var(--font-display)] text-sm font-bold uppercase leading-tight tracking-[0.08em] text-white/55 transition duration-300 group-hover:text-white">
                  {item.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
