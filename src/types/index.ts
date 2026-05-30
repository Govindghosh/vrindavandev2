export type Service = {
  id: string
  title: string
  description: string
  tag: string
  price: string
  bestFor: string
  outcome: string
  includes: string[]
  icon: string
  featured?: boolean
  ariaLabel: string
}

export type Project = {
  id: string
  title: string
  category: 'Web Apps' | 'Platforms' | 'AI/Automation'
  gradientFrom: string
  gradientTo: string
  description: string
  impact: string
  stack: string[]
  liveUrl?: string
  githubUrl?: string
  ariaLabel: string
}

export type ExperienceEntry = {
  id: string
  year: string
  company: string
  role: string
  location: string
  type: string
  highlights: string[]
  current?: boolean
}

export type TechItem = {
  id: string
  name: string
  icon: string
  hue: string
}

export type ContactFormValues = {
  name: string
  email: string
  phone: string
  service: string
  budget: string
  message: string
}
