'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const faqs = [
  {
    question: 'Why does a Vrindavan business need digital marketing?',
    answer:
      'Most customers now search on Google Maps, Instagram, and WhatsApp before they visit, book, or call. A strong digital setup helps hotels, shops, restaurants, tours, and service businesses appear trustworthy and get real enquiries.',
  },
  {
    question: 'Can you help with Google Maps ranking and local SEO?',
    answer:
      'Yes. We work on Google Business Profile optimisation, local keywords, review strategy, service pages, photos, posts, tracking, and website signals so your business has a stronger chance to show for nearby searches.',
  },
  {
    question: 'Do you build websites or only run ads?',
    answer:
      'We do both. We can build fast websites, landing pages, booking pages, WhatsApp lead funnels, Meta ads, Google visibility systems, and monthly reporting depending on what your business needs first.',
  },
  {
    question: 'How soon can I start getting leads?',
    answer:
      'Paid campaigns can start bringing enquiries faster once creatives, targeting, and landing pages are ready. SEO and Google Maps growth usually needs consistent work, but the goal is always practical: more calls, bookings, walk-ins, and WhatsApp chats.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="// 07 - FAQ"
            title="Frequently asked questions"
            description="Clear answers for local businesses before starting a growth project with VrindavanDev."
          />
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto hidden min-h-[520px] w-full max-w-[440px] items-center justify-center lg:flex"
          >
            <div className="absolute left-8 top-14 h-48 w-48 rounded-full bg-[#ff6b00]/14 blur-3xl" />
            <div className="absolute bottom-14 right-8 h-52 w-52 rounded-full bg-[#d4af37]/14 blur-3xl" />
            <div className="relative h-[500px] w-full">
              <Image
                src="/images/faq-img-transparent.png"
                alt="Frequently asked questions visual"
                fill
                sizes="440px"
                className="scale-[0.94] object-contain drop-shadow-[0_28px_55px_rgba(0,0,0,0.35)]"
              />
            </div>
          </motion.div>

          <div className="space-y-5">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className={`section-card relative ml-8 rounded-2xl transition duration-300 ${
                    isOpen ? 'border-[#ff6b00] shadow-[0_20px_50px_rgba(255,107,0,0.1)]' : 'border-[rgba(212,175,55,0.1)]'
                  }`}
                >
                  <span className="absolute -left-8 top-0 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#ff6b00] bg-[var(--bg-primary)] font-[var(--font-display)] text-2xl font-black text-white shadow-[0_0_24px_rgba(255,107,0,0.16)]">
                    {index + 1}
                  </span>

                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex min-h-[64px] w-full items-center justify-between gap-5 px-11 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-[var(--font-display)] text-base font-bold leading-6 text-white sm:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-[#ff6b00] transition duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden rounded-b-2xl border-t border-[#ff6b00]/25 bg-[rgba(10,11,18,0.78)]"
                      >
                        <p className="px-11 py-6 text-sm font-medium leading-7 text-white/74">
                          {item.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
