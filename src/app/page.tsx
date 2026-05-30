import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Industries from '@/components/sections/Associations'
import Services from '@/components/sections/Services'
import Results from '@/components/sections/Results'
import Software from '@/components/sections/Software'
import Founder from '@/components/sections/Founder'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import { GrainOverlay } from '@/components/ui/GrainOverlay'
import FloatingLeadActions from '@/components/ui/FloatingLeadActions'
import EntryLeadPopup from '@/components/ui/EntryLeadPopup'
import TopBanner from '@/components/ui/TopBanner'
import CookieConsent from '@/components/ui/CookieConsent'

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
