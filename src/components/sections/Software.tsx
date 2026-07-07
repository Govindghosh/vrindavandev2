import Link from 'next/link'
import { Bot, CheckCircle2, LayoutDashboard, LineChart, MessageCircle, Workflow } from 'lucide-react'
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

          <div className="space-y-5">
            <div className="section-card overflow-hidden rounded-2xl p-4">
              <div className="rounded-xl border border-white/10 bg-[rgba(255,255,255,0.04)]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-primary">WhatsApp CRM</p>
                    <h3 className="mt-1 text-lg font-bold text-white">Lead Dashboard Mockup</h3>
                  </div>
                  <span className="rounded-full bg-[#25D366]/15 px-3 py-1 text-xs font-bold text-[#25D366]">Live Leads</span>
                </div>

                <div className="grid gap-3 p-4 sm:grid-cols-[0.85fr_1.15fr]">
                  <div className="space-y-3">
                    {['New enquiry', 'Follow-up due', 'Booking confirmed'].map((status, index) => (
                      <div key={status} className="rounded-xl border border-white/10 bg-black/20 p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-white">{status}</span>
                          <CheckCircle2 className="h-4 w-4 text-[#25D366]" />
                        </div>
                        <p className="mt-1 text-xs text-text-secondary">{index + 4} active leads</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-[#25D366]/20 bg-[#25D366]/10 p-4">
                    <div className="flex items-center gap-2 text-[#25D366]">
                      <MessageCircle className="h-5 w-5" />
                      <span className="text-sm font-bold">Auto WhatsApp Reply</span>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="max-w-[86%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm text-black">
                        Namaste, thanks for your enquiry. Please share your date and requirement.
                      </div>
                      <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-[#25D366] px-4 py-3 text-sm font-semibold text-black">
                        Send rates and availability
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
      </div>
    </section>
  )
}
