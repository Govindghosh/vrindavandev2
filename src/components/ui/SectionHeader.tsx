import { ReactNode } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  label: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({ label, title, description, align = 'left', className }: SectionHeaderProps) {
  return (
    <div className={cn('space-y-4', align === 'center' ? 'mx-auto max-w-4xl text-center' : 'max-w-3xl', className)}>
      <SectionLabel label={label} className={align === 'center' ? 'justify-center' : undefined} />
      <h2 className="text-h2 font-black text-white">{title}</h2>
      {description ? (
        <p className={cn('text-body leading-7 text-text-secondary', align === 'center' ? 'mx-auto max-w-3xl' : undefined)}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
