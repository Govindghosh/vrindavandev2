import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const emailJsSettings = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '',
}

export const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'associations', label: 'Associations' },
  { id: 'services', label: 'Services' },
  { id: 'results', label: 'Results' },
  { id: 'software', label: 'Software' },
  { id: 'founder', label: 'Founder' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]
