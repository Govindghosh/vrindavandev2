'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

import { sections } from '@/lib/utils'
import { cn } from '@/lib/utils'

type SectionPosition = {
  id: string
  top: number
}

const mobileSections = sections.filter((section) =>
  ['hero', 'services', 'results', 'founder', 'contact'].includes(section.id)
)

export default function Navbar() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Track scrolling and highlight the current section
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('')
      return
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const entries = sections.map((section) => {
        const element = document.getElementById(section.id)
        if (!element) return null
        return {
          id: section.id,
          top: element.getBoundingClientRect().top,
        }
      })
      const visible = entries
        .filter((e): e is SectionPosition => e !== null)
        .sort((a, b) => Math.abs(a.top) - Math.abs(b.top))[0]
      if (visible?.id) setActiveSection(visible.id)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  // Close mobile menu on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280 && menuOpen) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [menuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (!menuOpen) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[9998] border-b border-white/10 bg-black transition-all duration-300 ease-out',
        isScrolled ? 'shadow-[0_14px_40px_rgba(0,0,0,0.38)]' : 'shadow-none'
      )}
    >
      <div className="mx-auto flex h-[64px] w-full max-w-[1480px] items-center justify-between px-5 lg:px-8 2xl:px-0">
        <Link href="/#hero" className="group inline-flex shrink-0 items-center focus-visible:outline-none">
          <Image
            src="/logoNameMain.webp"
            alt="Digitalcraft Studio Logo"
            width={200}
            height={40}
            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:-translate-y-0.5"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-5 xl:flex">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`/#${section.id}`}
              className={cn(
                'relative whitespace-nowrap text-[15px] font-medium tracking-[-0.01em] text-white/90 transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#ff5b24] after:transition-transform after:duration-200 hover:text-[#ff5b24] hover:after:scale-x-100',
                activeSection === section.id ? 'text-[#ff5b24] after:scale-x-100' : ''
              )}
            >
              {section.label}
            </Link>
          ))}
        </nav>

        {/* Quote button (desktop) */}
        <div className="hidden shrink-0 items-center justify-end xl:flex">
          <Link
            href="/#contact"
            className="inline-flex h-[44px] items-center justify-center rounded-sm border border-white/20 px-6 text-[14px] font-bold tracking-wide text-white transition duration-200 hover:border-[#ff5b24] hover:bg-[#ff5b24] hover:text-white"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile menu toggle and actions */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-black text-white transition hover:border-[#ff5b24] hover:text-[#ff5b24]"
            onClick={() => setMenuOpen((c) => !c)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[9997] overflow-y-auto bg-black px-8 pb-10 pt-24 xl:hidden"
          >
            <div className="flex flex-col gap-6 text-left">
              {mobileSections.map((section, i) => (
                <Link
                  key={section.id}
                  href={`/#${section.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'border-b border-white/10 pb-4 text-2xl font-semibold text-white transition hover:text-[#ff5b24]',
                    activeSection === section.id ? 'text-[#ff5b24]' : ''
                  )}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="block"
                  >
                    {section.label}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
