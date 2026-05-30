'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, Globe, MapPin, Megaphone, Cpu, MessageCircle, Palette, Video, MonitorPlay, Sparkles, Phone, MessageSquare } from 'lucide-react'
import { services } from '@/data/services'
import { GlowCard } from '@/components/ui/GlowCard'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { GrainOverlay } from '@/components/ui/GrainOverlay'
import FloatingLeadActions from '@/components/ui/FloatingLeadActions'

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

function ServiceHero({ service }: { service: typeof services[number] }) {
  const Icon = iconMap[service.icon] || Globe
  return (
    <div className="relative rounded-3xl border border-[rgba(212,175,55,0.18)] bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-8 md:p-10 overflow-hidden shadow-2xl">
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[rgba(212,175,55,0.06)] blur-3xl" />
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(212,175,55,0.09)] text-gold-primary shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Icon className="h-7 w-7 animate-pulse" />
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-[rgba(212,175,55,0.15)] bg-white/[0.03] px-3 py-1 text-xs font-semibold tracking-wider text-gold-primary uppercase">
            {service.tag}
          </span>
        </div>
        {service.featured && (
          <span className="inline-flex items-center gap-1 rounded-full bg-[#ff6b00]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#ff8a3d]">
            <Sparkles className="h-3.5 w-3.5" /> Popular
          </span>
        )}
      </div>
      <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">{service.title}</h1>
      <p className="mt-4 max-w-3xl text-sm sm:text-base leading-7 text-text-secondary">{service.description}</p>
      <div className="mt-6 inline-flex flex-col rounded-2xl border border-[rgba(212,175,55,0.15)] bg-white/[0.02] px-5 py-4">
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-text-muted">Pricing Structure</span>
        <span className="mt-1 text-lg font-black text-gold-primary">{service.price}</span>
      </div>
    </div>
  )
}

function ServiceHighlights({ service }: { service: typeof services[number] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <div className="rounded-2xl border border-white/5 bg-white/[0.015] p-5 sm:p-6 transition hover:border-white/10">
        <span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#ff8a3d]">Ideal For</span>
        <p className="mt-3 text-sm leading-6 text-text-secondary">{service.bestFor}</p>
      </div>
      <div className="rounded-2xl border border-white/5 bg-white/[0.015] p-5 sm:p-6 transition hover:border-white/10">
        <span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold-primary">Expected Outcome</span>
        <p className="mt-3 text-sm leading-6 text-text-secondary">{service.outcome}</p>
      </div>
    </div>
  )
}

function ServiceFeatures({ service }: { service: typeof services[number] }) {
  return (
    <div className="rounded-2xl border border-[rgba(212,175,55,0.1)] bg-[rgba(255,255,255,0.01)] p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white tracking-tight">What's Included in the Service</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {service.includes.map((feature) => (
          <div key={feature} className="flex items-start gap-3 rounded-xl border border-white/[0.02] bg-white/[0.005] p-4 transition-all hover:bg-white/[0.015]">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-primary shadow-sm" />
            <span className="text-sm font-medium text-text-secondary leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ServiceBookingCTA({ service }: { service: typeof services[number] }) {
  const router = useRouter()
  const waText = encodeURIComponent(`Hi VrindavanDev, I'm interested in the ${service.title} service. Please provide more details.`)
  const whatsappUrl = `https://wa.me/917906630435?text=${waText}`

  return (
    <GlowCard className="border-[rgba(212,175,55,0.18)] bg-gradient-to-b from-white/[0.02] to-transparent p-6 shadow-xl lg:sticky lg:top-28">
      <h3 className="text-lg font-bold text-white tracking-tight">Ready to grow your local business?</h3>
      <p className="mt-2 text-xs leading-relaxed text-text-secondary">Get in touch directly with our developers to discuss how this service fits your budget and growth goals.</p>
      <div className="mt-6 flex flex-col gap-3">
        <Link href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary inline-flex w-full items-center justify-center gap-2 py-3 text-sm font-bold shadow-md hover:scale-[1.02] transition-transform">
          <MessageSquare className="h-4 w-4" /> Message on WhatsApp
        </Link>
        <a href="tel:+917906630435" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-3 text-sm font-bold text-white hover:border-gold-primary hover:bg-[rgba(212,175,55,0.05)] transition duration-200">
          <Phone className="h-4 w-4 text-gold-primary" /> Call +91 79066 30435
        </a>
        <button onClick={() => router.push('/#contact')} className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[rgba(212,175,55,0.22)] py-3 text-xs font-bold uppercase tracking-wider hover:bg-[rgba(212,175,55,0.04)] hover:text-gold-primary transition duration-200">
          Request Online Quote
        </button>
      </div>
    </GlowCard>
  )
}

function RelatedServices({ currentId }: { currentId: string }) {
  const list = services.filter((s) => s.id !== currentId).slice(0, 3)

  return (
    <div className="border-t border-white/5 pt-12">
      <h2 className="text-2xl font-black text-white tracking-tight">Other Services for Local Growth</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((item) => {
          const ItemIcon = iconMap[item.icon] || Globe
          return (
            <Link key={item.id} href={`/services/${item.id}`} className="group block">
              <div className="rounded-2xl border border-white/5 bg-white/[0.015] p-5 transition hover:border-[rgba(212,175,55,0.25)] hover:bg-white/[0.03] h-full flex flex-col justify-between">
                <div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] text-gold-primary group-hover:text-gold-light transition-colors">
                    <ItemIcon className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="mt-3 text-base font-bold text-white group-hover:text-gold-primary transition-colors">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-text-secondary line-clamp-2">{item.description}</p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 text-[10px] uppercase font-bold tracking-wider text-text-muted">
                  <span>{item.price}</span>
                  <span className="text-gold-primary group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

function ServiceDetailClient({ id }: { id: string }) {
  const service = services.find((s) => s.id === id)
  if (!service) return <div className="min-h-screen flex items-center justify-center text-white font-bold">Service not found.</div>

  return (
    <main className="relative min-h-screen overflow-hidden text-white bg-bg-primary">
      <GrainOverlay />
      <Navbar />
      <FloatingLeadActions />
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-gold-primary transition-colors mb-8 group">
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" /> Back to Services
        </Link>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.38fr] items-start">
          <div className="flex flex-col gap-8">
            <ServiceHero service={service} />
            <ServiceHighlights service={service} />
            <ServiceFeatures service={service} />
          </div>
          <ServiceBookingCTA service={service} />
        </div>
        <div className="mt-16">
          <RelatedServices currentId={service.id} />
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default function ServiceDetailPage() {
  const { id } = useParams() as { id: string }
  return <ServiceDetailClient id={id} />
}
