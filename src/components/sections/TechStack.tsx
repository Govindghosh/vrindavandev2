'use client'

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { SiAmazonaws, SiDocker, SiExpress, SiFastapi, SiGithubactions, SiMongodb, SiNginx, SiNextdotjs, SiPostgresql, SiPython, SiReact, SiRedis, SiTypescript, SiVercel } from 'react-icons/si'
import { techStack } from '@/data/tech'
import { SectionLabel } from '@/components/ui/SectionLabel'

const agencyPillars = [
  { title: 'Web Development', desc: 'Sleek, responsive Next.js websites built to convert visitors into local customers.' },
  { title: 'Local SEO & Maps', desc: 'Dominate Vrindavan & Mathura search results for Google Map searches.' },
  { title: 'Meta & Google Ads', desc: 'Target local tourists, pilgrims, and high-value buyers using smart funnels.' },
  { title: 'CRM & Automation', desc: 'Save hours daily with automated WhatsApp chat pipelines and calendar setups.' },
]

const iconMap: Record<string, IconType> = {
  React: SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiExpress,
  TypeScript: SiTypescript,
  Python: SiPython,
  FastAPI: SiFastapi,
  Express: SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  Docker: SiDocker,
  AWS: SiAmazonaws,
  Nginx: SiNginx,
  'GitHub Actions': SiGithubactions,
  Vercel: SiVercel,
}

export default function TechStack() {
  return (
    <section id="tech" className="section">
      <div className="mx-auto max-w-7xl">
        <SectionLabel label="// 04 - TECHNOLOGY & STACK" />
        <div className="space-y-4">
          <h2 className="text-h2 font-black text-white">Our Technology Stack</h2>
          <p className="max-w-3xl text-body text-text-secondary">
            We use cutting-edge frameworks, tools, and advertising systems to power high-converting marketing campaigns and fast website systems.
          </p>
        </div>

        <div className="mt-10 space-y-6 overflow-hidden rounded-3xl border border-[rgba(212,175,55,0.14)] bg-[rgba(255,255,255,0.03)] p-4 text-white shadow-card backdrop-blur-xl">
          <div className="overflow-hidden rounded-3xl bg-[rgba(255,255,255,0.12)] py-6">
            <div className="marquee-track flex gap-4 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.25em]">
              {techStack.concat(techStack).map((tech, index) => {
                const Icon = iconMap[tech.name] || SiReact
                return (
                  <span key={`left-${tech.id}-${index}`} className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.15)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-gold-primary">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {tech.name}
                  </span>
                )
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-[rgba(255,255,255,0.12)] py-6">
            <div className="marquee-track-reverse flex gap-4 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.25em]">
              {techStack.concat(techStack).map((tech, index) => {
                const Icon = iconMap[tech.name] || SiReact
                return (
                  <span key={`right-${tech.id}-${index}`} className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.15)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-gold-primary">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {tech.name}
                  </span>
                )
              })}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {agencyPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass rounded-3xl p-5 border border-[rgba(212,175,55,0.08)] bg-[rgba(255,255,255,0.02)]"
              >
                <h3 className="font-semibold text-white text-base">{pillar.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
