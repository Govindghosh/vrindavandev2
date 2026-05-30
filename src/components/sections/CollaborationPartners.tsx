'use client'

import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { SiGoogle, SiGoogleanalytics, SiInstagram, SiMeta, SiNextdotjs, SiShopify, SiVercel, SiWhatsapp, SiWordpress } from 'react-icons/si'
import { SectionHeader } from '@/components/ui/SectionHeader'

const partners: { icon: IconType; name: string; role: string; color: string }[] = [
  { icon: SiGoogle, name: 'Google', role: 'Search, Maps & local visibility', color: '#4285f4' },
  { icon: SiMeta, name: 'Meta', role: 'Facebook & Instagram campaigns', color: '#0866ff' },
  { icon: SiWhatsapp, name: 'WhatsApp', role: 'Lead follow-up and chat funnels', color: '#25d366' },
  { icon: SiInstagram, name: 'Instagram', role: 'Reels, creatives and local reach', color: '#e4405f' },
  { icon: SiWordpress, name: 'WordPress', role: 'Business websites and landing pages', color: '#21759b' },
  { icon: SiShopify, name: 'Shopify', role: 'Product stores and online selling', color: '#95bf47' },
  { icon: SiGoogleanalytics, name: 'Analytics', role: 'Traffic, conversions and reports', color: '#f9ab00' },
  { icon: SiNextdotjs, name: 'Next.js', role: 'Fast custom web experiences', color: '#ffffff' },
  { icon: SiVercel, name: 'Vercel', role: 'Reliable hosting and deployment', color: '#ffffff' },
]

export default function CollaborationPartners() {
  return (
    <section id="collaboration-partners" className="section">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="// 06 - PARTNERS"
            title="Platforms we use to grow local brands"
            description="We combine trusted digital platforms with local strategy for Vrindavan businesses that need enquiries, bookings, reviews, and repeat customers."
          />
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <motion.article
              key={partner.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="section-card group relative min-h-[132px] overflow-hidden rounded-2xl p-5 transition duration-300 hover:border-[var(--partner-color)] hover:bg-[rgba(255,255,255,0.05)]"
              style={{ '--partner-color': partner.color } as CSSProperties}
            >
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: `radial-gradient(circle at 18% 0%, ${partner.color}28, transparent 62%)` }} />
              <div className="relative flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-black/25 text-white/38 transition duration-300 group-hover:border-[var(--partner-color)] group-hover:text-[var(--partner-color)] group-hover:shadow-[0_0_28px_var(--partner-color)]">
                  <partner.icon className="h-7 w-7" />
                </span>
                <div className="text-left">
                  <h3 className="font-[var(--font-display)] text-xl font-black uppercase tracking-[0.04em] text-white">
                    {partner.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-white/58 transition group-hover:text-white/76">
                    {partner.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
