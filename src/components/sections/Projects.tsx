'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TechBadge } from '@/components/ui/TechBadge'

const filters = ['all', 'Web Apps', 'Platforms', 'AI/Automation'] as const

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<typeof filters[number]>('all')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="// 04 - CASE STUDIES"
          title="Our Case Studies"
          description="Explore some of the high-impact digital systems and web portals we have deployed for our clients."
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                activeFilter === filter
                  ? 'border-gold-primary bg-[rgba(212,175,55,0.12)] text-gold-primary'
                  : 'border-[rgba(212,175,55,0.12)] text-text-secondary hover:border-gold-primary hover:text-gold-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            layout
            className="mt-10 grid gap-8 lg:grid-cols-2"
          >
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="section-card group overflow-hidden rounded-3xl p-6"
                aria-label={project.ariaLabel}
              >
                <div className={`rounded-3xl bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} p-6 text-white`}>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-sm uppercase tracking-[0.35em] text-white/75">{project.category}</span>
                    <div className="flex gap-2 text-xs text-white/80">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="transition hover:text-gold-light font-semibold">
                        Visit Website &rarr;
                      </a>
                    </div>
                  </div>
                  <div className="text-7xl font-black text-white/10">{project.id.slice(0, 2).toUpperCase()}</div>
                </div>
                <div className="mt-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm leading-7 text-text-secondary">{project.description}</p>
                  <p className="text-sm italic text-gold-primary">{project.impact}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <TechBadge key={tech} name={tech} icon="SiReact" className="text-xs" />
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
