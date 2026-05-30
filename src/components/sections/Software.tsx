import Link from 'next/link'
import { Bot, LayoutDashboard, LineChart, Workflow } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const softwareTypes = [
  {
    title: 'CRM Systems',
    text: 'Lead stages, follow-ups, booking notes, and customer history in one simple dashboard.',
    icon: LayoutDashboard,
  },
  {
    title: 'AI Tools',
    text: 'Auto replies, enquiry sorting, content drafts, and support flows trained around your business.',
    icon: Bot,
  },
  {
    title: 'Workflow Automation',
    text: 'Connect forms, WhatsApp, Sheets, email alerts, invoices, and reporting without manual copying.',
    icon: Workflow,
  },
  {
    title: 'Business Dashboards',
    text: 'Track leads, campaigns, revenue signals, and team actions in a dashboard built for daily use.',
    icon: LineChart,
  },
]

export default function Software() {
  return (
    <section id="software" className="section text-white">
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-top"
        style={{ backgroundImage: 'url(/images/vrindavan_new_bg.png)', opacity: 0.06 }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,0,0.08),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(212,175,55,0.09),_transparent_25%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <div>
            <SectionHeader
              label="// 05 - SOFTWARE"
              title="Custom Software & AI"
              description="When off-the-shelf tools feel messy, we build lean systems around how your team already works."
            />
            <Link
              href="/#contact"
              className="btn btn-primary mt-8 inline-flex items-center justify-center text-sm font-semibold"
            >
              Discuss a Software Build
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {softwareTypes.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="section-card rounded-2xl p-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] text-gold-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
