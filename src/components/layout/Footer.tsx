import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[rgba(10,11,18,0.85)] px-5 py-10 text-sm text-text-secondary sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-transparent.png"
              alt="VrindavanDev Logo"
              width={44}
              height={44}
              className="h-11 w-11 object-contain drop-shadow-[0_0_10px_rgba(0,167,181,0.4)]"
            />
            <span className="font-semibold text-white">VrindavanDev</span>
          </div>
          <p className="text-text-secondary">
            Building digital empires from the holy city.
          </p>
          <p className="text-text-secondary">
            Phone: <Link href="tel:+917906630435" className="hover:text-gold-primary">+91 79066 30435</Link>
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
            <Link href="/#services" className="hover:text-gold-primary">Services</Link>
            <Link href="/#results" className="hover:text-gold-primary">Results</Link>
            <Link href="/#founder" className="hover:text-gold-primary">Founder</Link>
            <Link href="/#faq" className="hover:text-gold-primary">FAQ</Link>
            <Link href="/#contact" className="hover:text-gold-primary">Contact</Link>
          </div>
          <div className="flex items-center gap-4 border-t border-white/5 pt-4 sm:border-t-0 sm:pt-0">
            <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-gold-primary transition duration-200" aria-label="Facebook">
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-gold-primary transition duration-200" aria-label="Instagram">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-gold-primary transition duration-200" aria-label="LinkedIn">
              <FaLinkedinIn className="h-5 w-5" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-gold-primary transition duration-200" aria-label="X">
              <FaXTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-[rgba(212,175,55,0.08)] pt-6 text-sm text-text-secondary">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 lg:flex-row lg:justify-between">
          <span>Copyright 2026 VrindavanDev - All rights reserved</span>
          <span>Made with care in Vrindavan, India</span>
        </div>
      </div>
    </footer>
  )
}
