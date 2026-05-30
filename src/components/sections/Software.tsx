import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import Link from 'next/link';

export default function Software() {
  return (
    <section id="software" className="section text-white">
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-top"
        style={{ backgroundImage: 'url(/images/vrindavan_new_bg.png)', opacity: 0.06 }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,0,0.08),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(212,175,55,0.09),_transparent_25%)]" />

      <div className="mx-auto max-w-5xl px-5 text-center">
        <SectionHeader
          label="// 05 - SOFTWARE"
          title="Custom Software & AI Solutions"
          description="Beyond websites and marketing, we build CRM systems, SaaS platforms, automation tools, and AI‑powered solutions tailored to your workflow."
        />
        <p className="mt-6 text-lg text-[var(--text-secondary)]">
          Elevate your business with bespoke software that integrates seamlessly with your operations.
        </p>
        <Link
          href="/#contact"
          className="mt-8 inline-block rounded-full bg-gold-primary px-8 py-3 text-sm font-semibold text-black hover:bg-gold-600"
        >
          Book a Free Software Consultation
        </Link>
      </div>
    </section>
  );
}
