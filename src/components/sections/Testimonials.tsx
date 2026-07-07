'use client'

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { SectionHeader } from '@/components/ui/SectionHeader'

const testimonials = [
  {
    quote: 'Their CRM and automation system saved hours of manual work every week.',
    name: 'Akash',
    designation: 'Business Owner',
    src: '/images/client/boy.webp',
  },
  {
    quote: 'Professional website and excellent support. We started getting quality WhatsApp leads.',
    name: 'Nilima Gupta',
    designation: 'Restaurant Owner',
    src: '/images/client/female resturent.webp',
  },
  {
    quote: 'Within 3 months our Google Maps ranking improved and enquiries increased significantly.',
    name: 'Anant Upadhaya',
    designation: 'Hotel Owner',
    src: '/images/client/hotel.webp',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,0,0.08),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(212,175,55,0.09),_transparent_25%)]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="// 01 - TESTIMONIALS"
          title="What Our Clients Say"
        />

        <AnimatedTestimonials testimonials={testimonials} autoplay className="mt-12" />
      </div>
    </section>
  )
}
