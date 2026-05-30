import { SectionHeader } from '@/components/ui/SectionHeader'

export default function Founder() {
  return (
    <section id="founder" className="section text-white">
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-top"
        style={{ backgroundImage: 'url(/images/vrindavan_new_bg.png)', opacity: 0.06 }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,0,0.08),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(212,175,55,0.09),_transparent_25%)]" />

      <div className="mx-auto max-w-5xl px-5">
        <SectionHeader
          label="// 06 - FOUNDER"
          title="Meet the Founder"
          description="Local business growth needs practical execution, clear tracking, and fast follow-up."
        />
        <div className="mt-10 flex flex-col items-center gap-8 md:flex-row md:items-center">
          <div className="h-48 w-48 overflow-hidden rounded-full border border-[rgba(212,175,55,0.22)] bg-[rgba(255,255,255,0.04)] shadow-lift">
            <img src="/images/client/founder.jpg" alt="Kanchan, founder of VrindavanDev" className="h-full w-full object-cover object-center" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-2xl font-bold text-white">Kanchan</h3>
            <p className="max-w-prose text-[var(--text-secondary)]">
              Kanchan leads VrindavanDev with a focus on websites, Google Maps visibility, Meta ads, WhatsApp lead systems, and practical automation for local businesses. The work is built around one goal: helping shops, hotels, restaurants, service providers, and growing teams turn online attention into real enquiries. Every project is planned with mobile-first design, simple reporting, and follow-up systems that local teams can actually use.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
