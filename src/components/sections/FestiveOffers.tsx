'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

interface FestivalOffer {
  id: string
  name: string
  coupon: string
  tagline: string
  highlight: string
  accentClass: string
}

interface PackageCombo {
  name: string
  services: string[]
  originalPrice: number
  offerPrice: number
  features: string[]
  popular?: boolean
}

const festiveOffers: FestivalOffer[] = [
  {
    id: 'janmashtami',
    name: 'Janmashtami Offer',
    coupon: 'RADHE500',
    tagline: 'Divine blessings for your business growth in Mathura & Vrindavan.',
    highlight: 'Flat ₹500 discount + Free Local SEO checklist.',
    accentClass: 'border-[#D4AF37] text-gold-primary bg-[rgba(212,175,55,0.04)]'
  },
  {
    id: 'holi',
    name: 'Holi Special',
    coupon: 'HOLIGROWTH',
    tagline: 'Splash vibrant organic reach onto your local brand footprint.',
    highlight: 'Flat 15% discount on all SEO & Meta Ads setups.',
    accentClass: 'border-[#ff5b24] text-[#ff5b24] bg-[rgba(255,91,36,0.04)]'
  },
  {
    id: 'diwali',
    name: 'Diwali Dhamaka',
    coupon: 'DEEPOTSAV',
    tagline: 'Illuminate your digital presence and local search listing rankings.',
    highlight: 'Flat ₹1,000 discount on our ultimate combo packages.',
    accentClass: 'border-[#10b981] text-[#10b981] bg-[rgba(16,185,129,0.04)]'
  }
]

const packageCombos: PackageCombo[] = [
  {
    name: '3-Services Combo',
    services: ['Meta Ads', 'Google Maps Listing', 'Website Development'],
    originalPrice: 6000,
    offerPrice: 5500,
    features: [
      'High-conversion business landing page',
      'Google Maps SEO setup & local visibility',
      'Meta lead generation ads blueprint',
      'Standard hosting & domain setup',
      'Mobile responsive design'
    ]
  },
  {
    name: '4-Services growth',
    services: ['Meta Ads', 'Google Maps Listing', 'Website Development', 'WhatsApp CRM'],
    originalPrice: 8500,
    offerPrice: 7500,
    features: [
      'Everything in 3-services combo',
      'WhatsApp automation & CRM integration',
      'Automated review request automation',
      'Instant customer greeting templates',
      'Premium fast cloud hosting setup'
    ],
    popular: true
  }
]

function FestivalTabButton({
  offer,
  isActive,
  onClick
}: {
  offer: FestivalOffer
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition border whitespace-nowrap cursor-pointer ${
        isActive
          ? 'border-gold-primary bg-gold-primary text-bg-primary shadow-[0_4px_15px_rgba(212,175,55,0.25)]'
          : 'border-white/10 bg-white/[0.03] text-text-secondary hover:border-white/20'
      }`}
    >
      {offer.name}
    </button>
  )
}

function PackageComboCard({ combo, activeCoupon }: { combo: PackageCombo; activeCoupon: string }) {
  return (
    <div className={`relative rounded-3xl border p-6 flex flex-col justify-between transition hover:-translate-y-1 duration-300 ${
      combo.popular 
        ? 'border-gold-primary bg-[rgba(212,175,55,0.03)] shadow-[0_15px_40px_rgba(212,175,55,0.06)]' 
        : 'border-white/10 bg-white/[0.02]'
    }`}>
      {combo.popular && (
        <span className="absolute -top-3.5 left-6 inline-flex items-center gap-1 rounded-full bg-gold-primary px-3 py-1 text-[10px] font-black uppercase tracking-wider text-bg-primary">
          <Sparkles className="h-3 w-3" aria-hidden="true" />
          Most Popular Combo
        </span>
      )}
      
      <div>
        <h4 className="text-lg font-black text-white uppercase tracking-wide">{combo.name}</h4>
        <p className="mt-2 text-xs text-text-secondary leading-relaxed">
          {combo.services.join(' + ')}
        </p>
        
        <div className="mt-5 flex items-baseline gap-2.5">
          <span className="text-3xl font-black text-gold-primary">₹{combo.offerPrice}</span>
          <span className="text-sm text-text-muted line-through">₹{combo.originalPrice}</span>
        </div>
        
        <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">
          {combo.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-xs text-text-secondary">
              <Check className="h-4 w-4 shrink-0 text-gold-primary mt-0.5" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <a
          href="#contact"
          onClick={() => {
            const field = document.getElementById('contact-message') as HTMLTextAreaElement | null
            if (field) {
              field.value = `Hi VrindavanDev, I want to book the ${combo.name} package using coupon code ${activeCoupon}.`
              field.focus()
            }
          }}
          className={`btn w-full text-xs font-bold uppercase tracking-wider min-h-11 ${
            combo.popular ? 'btn-primary' : 'btn-ghost'
          }`}
        >
          Book Strategy Session
        </a>
      </div>
    </div>
  )
}

export default function FestiveOffers() {
  const [activeTab, setActiveTab] = useState(festiveOffers[0].id)
  const currentOffer = festiveOffers.find((o) => o.id === activeTab) || festiveOffers[0]

  return (
    <section id="festive-offers" className="section" aria-label="Festive Offers & Pricing packages">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="text-center max-w-3xl mx-auto">
          <SectionHeader
            label="// 04 - REGIONAL FESTIVE OFFERS"
            title="Sri Dham Vrindavan & Mathura Local Growth Deals"
          />
          <p className="mt-3 text-xs text-text-secondary leading-relaxed max-w-xl mx-auto">
            Leverage custom digital agency bundles and local festival promo codes to supercharge your business calls, walk-ins, and GMB reviews!
          </p>
        </div>

        <div className="flex justify-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {festiveOffers.map((offer) => (
            <FestivalTabButton
              key={offer.id}
              offer={offer}
              isActive={activeTab === offer.id}
              onClick={() => setActiveTab(offer.id)}
            />
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`rounded-3xl border p-5 sm:p-7 text-center max-w-2xl mx-auto transition-all ${currentOffer.accentClass}`}
        >
          <span className="text-[10px] font-black uppercase tracking-widest text-white/95">
            Active Festive Code: {currentOffer.coupon}
          </span>
          <h4 className="mt-2 text-base font-black text-white tracking-wide">{currentOffer.tagline}</h4>
          <p className="mt-1.5 text-xs text-text-secondary font-medium">{currentOffer.highlight}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto pt-4">
          {packageCombos.map((combo) => (
            <PackageComboCard
              key={combo.name}
              combo={combo}
              activeCoupon={currentOffer.coupon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
