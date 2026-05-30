import { cn } from '@/lib/utils'

type SectionLabelProps = {
  label: string
  className?: string
}

export function SectionLabel({ label, className }: SectionLabelProps) {
  return <div className={cn('section-label', className)}>{label}</div>
}
