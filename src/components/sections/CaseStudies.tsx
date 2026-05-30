import React from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';

// Placeholder case studies – replace with real content and images in /public/casestudies/*
const caseStudies = [
  {
    category: 'Local Business Growth',
    title: 'Hotel Boost',
    subtitle: 'Increased bookings by 3x',
    description: 'A boutique hotel saw a surge in direct bookings after a targeted SEO and ad campaign.',
    image: '/casestudies/hotel.png',
  },
  {
    category: 'Software & Platforms',
    title: 'Visitor Management System',
    subtitle: 'Streamlined operations',
    description: 'A custom SaaS platform helped a temple manage visitor flow and donations efficiently.',
    image: '/casestudies/visitor.png',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-gray-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          label="// 07 - CASE STUDIES"
          title="Results-Driven Success Stories"
          description="Real projects that showcase our expertise across local growth and software solutions."
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <div key={i} className="rounded-xl bg-gray-800 p-6 shadow-lg">
              <div className="mb-4 h-48 overflow-hidden rounded-md">
                <Image src={cs.image} alt={cs.title} width={600} height={400} className="object-cover" priority={true} />
              </div>
              <p className="text-sm font-medium text-gold-primary">{cs.category}</p>
              <h3 className="mt-2 text-xl font-semibold">{cs.title}</h3>
              <p className="mt-1 text-sm text-gray-400">{cs.subtitle}</p>
              <p className="mt-2 text-sm text-gray-300">{cs.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
