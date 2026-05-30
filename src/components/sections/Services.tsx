'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Globe, MapPin, Megaphone, Cpu, MessageCircle, Palette, Video, MonitorPlay, Sparkles } from 'lucide-react'
import { services } from '@/data/services'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlowCard } from '@/components/ui/GlowCard'

const iconMap: Record<string, typeof Globe> = {
  Globe,
  MapPin,
  Megaphone,
  Cpu,
  MessageCircle,
  Palette,
  Video,
  MonitorPlay,
}

function ServicesHeader() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
      <SectionHeader
        label="// 03 - SERVICES"
        title="Services that turn searches into customers"
        description="One service or a full growth engine — websites, Google Maps, ads, WhatsApp, and automation at local budgets."
      />
      <div className="rounded-2xl border border-[rgba(212,175,55,0.14)] bg-[rgba(255,255,255,0.035)] p-5 text-sm leading-6 text-text-secondary">
        <span className="block text-xs font-bold uppercase tracking-[0.24em] text-gold-primary">Local pricing</span>
        <span className="mt-2 block">Starter plans for shops, hotels, restaurants, and service providers.</span>
      </div>
    </div>
  )
}

interface ServiceCardProps {
  service: typeof services[number]
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Globe
  const isOffer = service.featured

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <GlowCard className={`h-full overflow-hidden ${isOffer ? 'border-[rgba(255,107,0,0.48)] shadow-[0_22px_60px_rgba(255,107,0,0.12)]' : 'border-[rgba(212,175,55,0.15)]'}`}>
        <div className="flex h-full flex-col justify-between gap-5">
          <div>
            <div className="flex items-start justify-between gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(212,175,55,0.09)] text-gold-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              {isOffer && (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#ff6b00]/15 px-2.5 py-0.5 text-[0.62rem] font-bold tracking-[0.16em] text-[#ff8a3d]">
                  <Sparkles className="h-3 w-3" /> Popular
                </span>
              )}
            </div>
            <h3 className="mt-4 text-xl font-bold text-white tracking-tight">{service.title}</h3>
            <p className="mt-2 text-xs leading-6 text-text-secondary">{service.description}</p>
          </div>
          <div>
            <div className="flex items-center justify-between border-t border-white/5 pt-4 text-xs">
              <div>
                <span className="block text-[0.6rem] uppercase tracking-[0.18em] text-text-muted">Pricing</span>
                <span className="font-bold text-gold-primary">{service.price}</span>
              </div>
              <span className="rounded-full border border-[rgba(212,175,55,0.12)] bg-white/[0.02] px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-gold-primary">{service.tag}</span>
            </div>
            <Link href={`/services/${service.id}`} className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-[rgba(212,175,55,0.22)] py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.15em] hover:bg-[rgba(212,175,55,0.05)] hover:text-gold-primary transition duration-200">
              View Details &rarr;
            </Link>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  )
}

function ServicesOfferCTA() {
  return (
    <div className="section-card mt-12 rounded-3xl p-6 text-center">
      <p className="text-lg font-semibold text-white">Want more calls, bookings, and WhatsApp enquiries?</p>
      <div className="mt-5 grid gap-3 sm:flex sm:justify-center">
        <Link href="https://wa.me/917906630435?text=Hi%20VrindavanDev%2C%20I%20want%20the%203-service%20growth%20offer." target="_blank" rel="noreferrer" className="btn btn-primary inline-flex items-center justify-center gap-2 text-sm font-semibold">
          Claim 3-service offer
        </Link>
        <Link href="/#contact" className="btn btn-ghost inline-flex items-center justify-center gap-2 text-sm font-semibold">
          Start a Project
        </Link>
      </div>
    </div>
  )
}

export default function Services() {
  const [showAll, setShowAll] = useState(false)
  const visibleServices = showAll ? services : services.slice(0, 3)

  return (
    <section id="services" className="section">
      <div className="mx-auto max-w-7xl">
        <ServicesHeader />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        {!showAll ? (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="btn btn-ghost inline-flex items-center justify-center text-sm font-semibold"
            >
              + Show 5 more services
            </button>
          </div>
        ) : null}
        <ServicesOfferCTA />
      </div>
    </section>
  )
}
