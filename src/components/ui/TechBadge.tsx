import { SiAmazonaws, SiDocker, SiExpress, SiFastapi, SiGithubactions, SiMongodb, SiNginx, SiNextdotjs, SiPostgresql, SiPython, SiReact, SiRedis, SiTypescript, SiVercel, SiNodedotjs } from 'react-icons/si'
import { cn } from '@/lib/utils'

const iconsMap = {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiFastapi,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiAmazonaws,
  SiNginx,
  SiGithubactions,
  SiVercel,
}

const fallbackIcon = SiReact

type TechBadgeProps = {
  name: string
  icon: string
  className?: string
}

export function TechBadge({ name, icon, className }: TechBadgeProps) {
  const Icon = (iconsMap as Record<string, typeof fallbackIcon>)[icon] ?? fallbackIcon

  return (
    <div
      role="listitem"
      aria-label={`${name} skill badge`}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.18)] bg-[rgba(255,255,255,0.04)] px-3 py-2 text-xs font-medium text-white shadow-sm backdrop-blur-sm',
        className
      )}
    >
      <Icon className="h-4 w-4 text-gold-primary" aria-hidden="true" />
      <span>{name}</span>
    </div>
  )
}
