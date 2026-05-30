'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import { sections } from '@/lib/utils'
import { cn } from '@/lib/utils'

type SectionPosition = {
  id: string
  top: number
}

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
      <div className="mx-auto flex h-[74px] w-full max-w-[1480px] items-center justify-between px-5 lg:px-8 2xl:px-0">
        <Link href="/#hero" className="group inline-flex min-w-[180px] items-center gap-3 focus-visible:outline-none">
          <Image
            src="/logo-transparent.png"
            alt="VrindavanDev Logo"
            width={56}
            height={56}
            className="h-12 w-12 object-contain transition-transform duration-300 group-hover:-translate-y-0.5 drop-shadow-[0_0_12px_rgba(0,167,181,0.5)]"
            priority
          />
          <span className="hidden max-w-[112px] text-[11px] font-bold uppercase leading-[1.05] tracking-[0.14em] text-white lg:block">
            vrindavandev
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-8 xl:flex">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`/#${section.id}`}
              className={cn(
                'relative whitespace-nowrap text-[18px] font-medium tracking-[-0.01em] text-white transition-colors duration-200 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#ff5b24] after:transition-transform after:duration-200 hover:text-[#ff5b24] hover:after:scale-x-100',
                activeSection === section.id ? 'text-[#ff5b24] after:scale-x-100' : ''
              )}
            >
              {section.label}
            </Link>
          ))}
        </nav>

        {/* Quote button (desktop) */}
        <div className="hidden min-w-[180px] items-center justify-end xl:flex">
          <Link
            href="/#contact"
            className="inline-flex min-h-[64px] items-center justify-center border border-white/20 px-7 text-[17px] font-bold text-white transition duration-200 hover:border-[#ff5b24] hover:bg-[#ff5b24] hover:text-white"
          >
            {'Get a Quote ->'}
          </Link>
        </div>

        {/* Mobile menu toggle and actions */}
        <div className="flex items-center gap-2 xl:hidden">
          <a
            href="tel:+917906630435"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-black text-gold-primary transition hover:border-[#ff5b24] hover:text-[#ff5b24]"
            aria-label="Call VrindavanDev"
          >
            <Phone className="h-5 w-5" />
          </a>
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
              {sections.map((section, i) => (
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
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex min-h-[58px] items-center justify-center border border-white/20 px-6 text-base font-bold text-white transition hover:border-[#ff5b24] hover:bg-[#ff5b24]"
              >
                {'Get a Quote ->'}
              </Link>
              
              <div className="mt-8 flex items-center justify-center gap-6 border-t border-white/10 pt-8">
                <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-[#ff5b24] transition duration-200" aria-label="Facebook">
                  <FaFacebookF className="h-6 w-6" />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-[#ff5b24] transition duration-200" aria-label="Instagram">
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-[#ff5b24] transition duration-200" aria-label="LinkedIn">
                  <FaLinkedinIn className="h-6 w-6" />
                </a>
                <a href="https://x.com/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-[#ff5b24] transition duration-200" aria-label="X">
                  <FaXTwitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
