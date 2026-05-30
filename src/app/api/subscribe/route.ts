import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

export const dynamic = 'force-dynamic'

type SubscribePayload = {
  name?: string
  phone?: string
  service?: string
}

const requiredFields: Array<keyof SubscribePayload> = ['name', 'phone']

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json().catch(() => null)) as SubscribePayload | null

    if (!payload) {
      return NextResponse.json({ error: 'Invalid subscription data.' }, { status: 400 })
    }

    const data = {
      name: clean(payload.name),
      phone: clean(payload.phone),
      service: clean(payload.service),
    }

    const missingField = requiredFields.find((field) => !data[field])

    if (missingField) {
      return NextResponse.json({ error: `${missingField} is required.` }, { status: 400 })
    }

    const text = [
      'New Welcome Offer / Newsletter Subscription Lead',
      '------------------------------------------------',
      `Name: ${data.name}`,
      `WhatsApp Phone: ${data.phone}`,
      `Selected Service: ${data.service || 'Not specified'}`,
    ].join('\n')

    const html = `
      <h2>New Welcome Offer / Newsletter Subscription Lead</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>WhatsApp Phone:</strong> ${data.phone}</p>
      <p><strong>Selected Service:</strong> ${data.service || 'Not specified'}</p>
    `

    await sendEmail({
      subject: `New Subscriber: ${data.name} (Welcome Offer)`,
      text,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Newsletter subscription failed:', error)
    return NextResponse.json({ error: 'Failed to process subscription.' }, { status: 500 })
  }
}
