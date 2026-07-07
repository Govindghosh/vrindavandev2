import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black px-5 py-12 text-sm text-neutral-400 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-4">
          <Link href="/#hero">
            <Image
              src="/logoNameMain.webp"
              alt="Digitalcraft Studio Logo"
              width={180}
              height={36}
              className="h-8 w-auto object-contain transition-opacity hover:opacity-80"
            />
          </Link>
          <p className="max-w-xs leading-relaxed text-neutral-500">
            Building digital empires from the holy city.
          </p>
          <p className="text-neutral-500">
            Phone:{' '}
            <Link
              href="tel:+917906630435"
              className="text-neutral-300 transition-colors hover:text-[#c9a84c]"
            >
              +91 79066 30435
            </Link>
          </p>
        </div>

        <nav className="flex flex-col gap-3 text-sm lg:items-end">
          <span className="mb-1 text-xs font-semibold uppercase tracking-widest text-neutral-600">
            Quick Links
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/#services" className="text-neutral-400 transition-colors hover:text-[#c9a84c]">Services</Link>
            <Link href="/#results" className="text-neutral-400 transition-colors hover:text-[#c9a84c]">Results</Link>
            <Link href="/#founder" className="text-neutral-400 transition-colors hover:text-[#c9a84c]">Founder</Link>
            <Link href="/#faq" className="text-neutral-400 transition-colors hover:text-[#c9a84c]">FAQ</Link>
            <Link href="/#contact" className="text-neutral-400 transition-colors hover:text-[#c9a84c]">Contact</Link>
          </div>
        </nav>
      </div>

      <div className="mt-10 border-t border-white/[0.06] pt-6 text-xs text-neutral-600">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:justify-between">
          <span>Copyright 2026 Digitalcraft Studio. All rights reserved.</span>
          <span>Made with care in Vrindavan, India</span>
        </div>
      </div>
    </footer>
  )
}
