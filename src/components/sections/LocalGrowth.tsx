'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Building2, Hotel, MapPinned, Megaphone, MessageSquare, Search, Store, Video } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlowCard } from '@/components/ui/GlowCard'
import { SquigglyText } from '@/components/ui/squiggly-text'

const audiences = [
  { title: 'Temples & Ashrams', need: 'Event pages, livestream setup, donor journeys, devotee updates.', icon: Building2 },
  { title: 'Hotels & Dharamshalas', need: 'Google Maps ranking, booking pages, WhatsApp follow-up, reviews.', icon: Hotel },
  { title: 'Local Shops', need: 'Prasad, flowers, handicrafts, catalogue pages, local SEO, reels.', icon: Store },
  { title: 'Tour & Travel Agents', need: 'Package landing pages, Meta leads, itinerary automation, remarketing.', icon: MapPinned },
  { title: 'Restaurants & Dhabas', need: 'Menu pages, maps visibility, offers, short-form content, reviews.', icon: Megaphone },
  { title: 'Real Estate & Coaching', need: 'Lead funnels, landing pages, CRM, paid ads, WhatsApp nurturing.', icon: MessageSquare },
]

const packages = [
  {
    name: 'Local Visibility',
    price: 'INR 3K-8K/mo',
    bestFor: 'Shops, hotels, dharamshalas',
    items: ['Google Business Profile setup', 'Review request system', 'Local citations', 'Weekly GBP posts'],
  },
  {
    name: 'Lead Engine',
    price: 'INR 12K-25K/mo',
    bestFor: 'Tours, real estate, institutes',
    items: ['Meta ads management', 'Landing page or lead form', 'WhatsApp follow-up flow', 'Lead tracking sheet'],
  },
  {
    name: 'Full Growth System',
    price: 'INR 25K+/mo',
    bestFor: 'Premium local brands',
    items: ['Website + SEO + ads', 'Social content calendar', 'WhatsApp CRM', 'Monthly growth reporting'],
  },
]

const engineSteps = [
  { title: 'Be Found', detail: 'Google Maps, website SEO, local keywords, photos, reviews.', icon: Search },
  { title: 'Get Leads', detail: 'Meta ads, landing pages, WhatsApp CTA, lead forms.', icon: Megaphone },
  { title: 'Follow Up', detail: 'Auto replies, CRM pipeline, booking reminders, broadcasts.', icon: MessageSquare },
  { title: 'Build Trust', detail: 'Reels, YouTube, testimonials, festival campaigns, brand design.', icon: Video },
]

export default function LocalGrowth() {
  return (
    <section id="local-growth" className="section">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-4">
            <SectionHeader
              label="// 02 - LOCAL GROWTH"
              title={
                <>
                  Built for <SquigglyText scale={[2, 4]} className="text-gold-primary">Vrindavan businesses</SquigglyText>, not generic traffic
                </>
              }
              description="Hotels, temples, shops and tour operators need calls and bookings — not random traffic. This is the system that delivers it."
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-card relative mt-6 aspect-square max-h-[360px] w-full overflow-hidden rounded-3xl"
            >
              <Image 
                src="/images/services_seo.webp" 
                alt="Local SEO Growth" 
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover" 
              />
            </motion.div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {engineSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="section-card rounded-2xl p-4"
                >
                  <Icon className="h-5 w-5 text-gold-primary" aria-hidden="true" />
                  <h3 className="mt-3 font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{step.detail}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
              >
                <GlowCard className="h-full p-5">
                  <Icon className="h-6 w-6 text-gold-primary" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-semibold text-white">{audience.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">{audience.need}</p>
                </GlowCard>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {packages.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="section-card rounded-3xl p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--saffron)]">{item.bestFor}</p>
              <h3 className="mt-4 text-2xl font-bold text-white">{item.name}</h3>
              <p className="mt-2 text-2xl font-black text-gold-primary">{item.price}</p>
              <div className="mt-6 space-y-3 text-sm text-text-secondary">
                {item.items.map((point) => (
                  <p key={point}>- {point}</p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
