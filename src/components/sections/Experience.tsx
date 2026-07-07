'use client'

import { motion } from 'framer-motion'
import { experience } from '@/data/experience'
import { SectionLabel } from '@/components/ui/SectionLabel'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="mx-auto max-w-7xl">
        <SectionLabel label="// 05 - MILESTONES" />
        <div className="space-y-4">
          <h2 className="text-h2 font-black text-white">Our journey & milestones</h2>
          <p className="max-w-3xl text-body text-text-secondary">
            Key achievements, software builds, and client successes that define the growth of Digitalcraft Studio.
          </p>
        </div>

        <div className="relative mt-12 space-y-10 lg:mt-16">
          <span className="absolute left-5 top-0 hidden h-full w-[2px] bg-gold-primary/20 lg:block" />
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="relative lg:ml-14 lg:pl-10"
            >
              <span className="absolute left-[-13px] top-2 hidden h-6 w-6 rounded-full bg-gold-primary ring-4 ring-[rgba(212,175,55,0.12)] lg:block" />
              <div className="glass rounded-3xl border-[rgba(212,175,55,0.12)] p-6 shadow-card">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan">{item.year}</p>
                    <h3 className="mt-2 text-2xl font-bold text-white">{item.company}</h3>
                    <p className="mt-2 text-sm text-text-secondary">{item.role}</p>
                  </div>
                  <div className="rounded-full border border-[rgba(212,175,55,0.18)] bg-[rgba(255,255,255,0.04)] px-4 py-2 text-xs text-gold-primary">
                    {item.current ? 'Current' : item.type}
                  </div>
                </div>
                <div className="mt-5 space-y-2 text-sm text-text-secondary">
                  {item.highlights.map((highlight) => (
                    <p key={highlight}>- {highlight}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
