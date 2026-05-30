'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Gift, Megaphone, Phone, X } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FloatingDock } from '@/components/ui/floating-dock'

const phoneNumber = '+917906630435'
const whatsappUrl = 'https://wa.me/917906630435?text=Hi%20VrindavanDev%2C%20I%20want%20more%20leads%20for%20my%20business.'

const offers = [
  {
    label: 'Website offer',
    value: 'Landing page from INR 8K',
  },
  {
    label: 'Maps growth',
    value: 'Google Maps + reviews',
  },
  {
    label: '3-service combo',
    value: 'Website + SEO + WhatsApp',
  },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/',
    icon: FaFacebookF,
    color: '#1877f2',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/',
    icon: FaInstagram,
    color: '#e4405f',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: FaLinkedinIn,
    color: '#0a66c2',
  },
  {
    label: 'X',
    href: 'https://x.com/',
    icon: FaXTwitter,
    color: '#38bdf8',
  },
]

export default function FloatingLeadActions() {
  const [showOffer, setShowOffer] = useState(false)
  const [showCall, setShowCall] = useState(false)

  useEffect(() => {
    const offerTimer = window.setTimeout(() => setShowOffer(true), 900)
    const callTimer = window.setTimeout(() => setShowCall(true), 2600)

    return () => {
      window.clearTimeout(offerTimer)
      window.clearTimeout(callTimer)
    }
  }, [])

  const dockItems = socialLinks.map((social) => {
    const Icon = social.icon
    return {
      title: social.label,
      icon: <Icon className="h-full w-full" style={{ color: social.color }} />,
      href: social.href,
    }
  })

  return (
    <>
      <div className="fixed right-3 top-1/2 -translate-y-1/2 z-[9996] md:left-3 md:right-auto" aria-label="Social media links">
        <FloatingDock items={dockItems} />
      </div>

      {showOffer && (
        <div className="fixed inset-x-3 top-[88px] z-[9997] mx-auto max-w-md rounded-2xl border border-[rgba(212,175,55,0.28)] bg-[rgba(10,11,18,0.94)] p-3 shadow-2xl backdrop-blur-xl sm:top-auto sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(212,175,55,0.14)] text-gold-primary">
              <Gift className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-bold text-white">Today&apos;s growth offers</p>
                <button
                  type="button"
                  onClick={() => setShowOffer(false)}
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-text-secondary transition hover:bg-white/10 hover:text-white"
                  aria-label="Close offers popup"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-2 grid gap-2">
                {offers.map((offer) => (
                  <Link
                    key={offer.label}
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="grid gap-0.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 transition hover:border-green/40 hover:bg-green/10"
                  >
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold-primary">{offer.label}</span>
                    <span className="text-sm font-semibold leading-snug text-white">{offer.value}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {showCall && (
        <div className="call-now-pop fixed z-[9996] hidden sm:block sm:bottom-6 sm:left-auto sm:right-24">
          <Link
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.3)] bg-[rgba(10,11,18,0.9)] px-4 py-3 text-sm font-bold text-white shadow-2xl backdrop-blur-xl transition hover:border-gold-primary hover:bg-[rgba(212,175,55,0.16)]"
          >
            <Phone className="h-4 w-4 text-gold-primary" aria-hidden="true" />
            Call now
          </Link>
        </div>
      )}

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with VrindavanDev on WhatsApp"
        drag
        dragMomentum={false}
        dragElastic={0.12}
        whileDrag={{ scale: 1.08 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
        className="floating-whatsapp group fixed bottom-6 right-4 z-[9998] inline-flex h-16 w-16 cursor-grab items-center justify-center rounded-full border border-[rgba(212,175,55,0.22)] bg-[radial-gradient(circle_at_35%_28%,#34e682_0%,#25D366_42%,#128C4A_100%)] text-white shadow-[0_16px_42px_rgba(16,185,129,0.28),0_0_0_1px_rgba(212,175,55,0.12)] active:cursor-grabbing sm:bottom-6 sm:right-6"
      >
        <span className="absolute inset-[-8px] rounded-full border border-[rgba(212,175,55,0.24)] bg-[rgba(16,185,129,0.08)]" aria-hidden="true" />
        <span className="absolute inset-[-17px] rounded-full border border-[#25D366]/10" aria-hidden="true" />
        <span className="absolute -left-2 -top-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-[#07130d] bg-[#ff5b24] px-1.5 text-[9px] font-black uppercase tracking-[0.08em] text-white shadow-lg">
          Live
        </span>
        <span className="absolute right-[calc(100%+12px)] top-1/2 hidden -translate-y-1/2 translate-x-3 whitespace-nowrap rounded-full border border-[#25D366]/30 bg-[rgba(10,11,18,0.96)] px-4 py-2 text-xs font-bold text-white opacity-0 shadow-2xl backdrop-blur-xl transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
          Chat on WhatsApp
        </span>
        <FaWhatsapp className="relative z-10 h-9 w-9 drop-shadow-[0_4px_14px_rgba(0,0,0,0.28)]" aria-hidden="true" />
      </motion.a>

      <Link
        href="/#services"
        className="fixed right-3 top-1/2 z-[9996] hidden -translate-y-1/2 items-center gap-2 rounded-l-2xl border border-r-0 border-[rgba(212,175,55,0.25)] bg-[rgba(10,11,18,0.88)] px-3 py-4 text-xs font-bold uppercase tracking-[0.18em] text-gold-primary shadow-2xl backdrop-blur-xl sm:inline-flex"
      >
        <Megaphone className="h-4 w-4" aria-hidden="true" />
        Offers
      </Link>
    </>
  )
}
