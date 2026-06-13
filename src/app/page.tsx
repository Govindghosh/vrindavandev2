import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Industries from '@/components/sections/Associations'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import { GrainOverlay } from '@/components/ui/GrainOverlay'
import TopBanner from '@/components/ui/TopBanner'

// Dynamically import below-the-fold components (SSR enabled for SEO)
const Results = dynamic(() => import('@/components/sections/Results'))
const Software = dynamic(() => import('@/components/sections/Software'))
const Founder = dynamic(() => import('@/components/sections/Founder'))
const FAQ = dynamic(() => import('@/components/sections/FAQ'))
const Contact = dynamic(() => import('@/components/sections/Contact'))
const Footer = dynamic(() => import('@/components/layout/Footer'))

// Dynamically import client-only overlay widgets
const EntryLeadPopup = dynamic(() => import('@/components/ui/EntryLeadPopup'), { ssr: false })
const CookieConsent = dynamic(() => import('@/components/ui/CookieConsent'), { ssr: false })
const FloatingLeadActions = dynamic(() => import('@/components/ui/FloatingLeadActions'), { ssr: false })

export default function HomePage() {
  return (
    <main className="relative overflow-hidden text-white">
      <GrainOverlay />
      <EntryLeadPopup />
      <CookieConsent />
      <TopBanner />
      <Navbar />
      <FloatingLeadActions />
      <div className="pt-24">
        <Hero />
        <Testimonials />
        <Industries />
        <Services />
        <Results />
        <Software />
        <Founder />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
