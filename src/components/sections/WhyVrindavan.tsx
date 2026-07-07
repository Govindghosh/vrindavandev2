'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GlowCard } from '@/components/ui/GlowCard'

const values = [
  {
    icon: 'Purpose',
    title: 'Rooted in Purpose',
    description: 'We build things that matter, with intention behind every line of code.',
  },
  {
    icon: 'Quality',
    title: 'Obsessed with Quality',
    description: 'From pixel-perfect UI to optimized backend - details are everything.',
  },
  {
    icon: 'Global',
    title: 'Local Roots, Global Reach',
    description: 'Born in Vrindavan. Building for the world.',
  },
]

export default function WhyVrindavan() {
  return (
    <section id="why-vrindavan" className="section">
      <div className="mx-auto max-w-7xl">
        <SectionLabel label="// 06 - WHY VRINDAVAN" />
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <div className="lg:w-6/12">
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-h2 font-[var(--font-serif)] italic text-white/95 leading-snug"
            >
              "Most agencies sell traffic. Digitalcraft Studio builds the system that turns local intent into calls, bookings, and trust."
            </motion.blockquote>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mt-8 h-[240px] w-full overflow-hidden rounded-3xl border border-[rgba(212,175,55,0.1)] shadow-lg"
            >
              <Image
                src="/images/vrindavan_digital_bg2.webp"
                alt="Vrindavan local businesses"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-center"
              />
            </motion.div>
          </div>
          <div className="space-y-6 text-body text-text-secondary lg:w-6/12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              Local trust is earned through visibility, speed, and credibility. Hotels, ashrams, shops, and tour operators in Vrindavan need Google Maps presence, WhatsApp replies, and strong reviews — not random likes. That is exactly what Digitalcraft Studio builds.
            </motion.p>
            <motion.div
              className="grid gap-4 sm:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {values.map((value) => (
                <GlowCard key={value.title} className="p-5">
                  <div className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--saffron)]">{value.icon}</div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{value.title}</h3>
                  <p className="mt-3 text-sm text-text-secondary">{value.description}</p>
                </GlowCard>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
