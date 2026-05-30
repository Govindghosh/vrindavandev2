import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

export const dynamic = 'force-dynamic'

type ContactPayload = {
  name?: string
  email?: string
  phone?: string
  service?: string
  budget?: string
  message?: string
}

const requiredFields: Array<keyof ContactPayload> = ['name', 'email', 'phone', 'message']

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json().catch(() => null)) as ContactPayload | null

    if (!payload) {
      return NextResponse.json({ error: 'Invalid form data.' }, { status: 400 })
    }

    const data = {
      name: clean(payload.name),
      email: clean(payload.email),
      phone: clean(payload.phone),
      service: clean(payload.service),
      budget: clean(payload.budget),
      message: clean(payload.message),
    }

    const missingField = requiredFields.find((field) => !data[field])

    if (missingField) {
      return NextResponse.json({ error: `${missingField} is required.` }, { status: 400 })
    }

    const text = [
      'New Contact Form Submission',
      '---------------------------',
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service: ${data.service || 'Not specified'}`,
      `Budget: ${data.budget || 'Not specified'}`,
      `Message: ${data.message}`,
    ].join('\n')

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Service:</strong> ${data.service || 'Not specified'}</p>
      <p><strong>Budget:</strong> ${data.budget || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${data.message}</p>
    `

    await sendEmail({
      subject: `New Lead: ${data.name} (${data.service || 'General Inquiry'})`,
      text,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form submission failed:', error)
    return NextResponse.json({ error: 'Failed to send submission email.' }, { status: 500 })
  }
}
