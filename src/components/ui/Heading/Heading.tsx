import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

export type HeadingLevel = 'display-xl' | 1 | 2 | 3 | 4
export type HeadingTone = 'default' | 'inverse' | 'muted'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  /** Semantic and visual level. display-xl renders an h1 with hero typography. */
  level: HeadingLevel
  tone?: HeadingTone
}

const typeClasses: Record<HeadingLevel, string> = {
  'display-xl': 'type-display-xl',
  1: 'type-h1',
  2: 'type-h2',
  3: 'type-h3',
  4: 'type-h4',
}

const toneClasses: Record<HeadingTone, string> = {
  default: 'text-text',
  inverse: 'text-text-inverse',
  muted: 'text-text-muted',
}

/**
 * Responsive display and heading typography. Playfair Display for display-xl
 * and h1–h3; Inter for h4 (per 20px Playfair floor rule).
 *
 * @example
 * <Heading level="display-xl" tone="inverse">Sri Lanka. Unhurried.</Heading>
 * <Heading level={2}>Destinations</Heading>
 */
export function Heading({
  children,
  level,
  tone = 'default',
  className,
  ...props
}: HeadingProps) {
  const classes = cn(typeClasses[level], toneClasses[tone], className)

  if (level === 'display-xl' || level === 1) {
    return (
      <h1 className={classes} {...props}>
        {children}
      </h1>
    )
  }

  if (level === 2) {
    return (
      <h2 className={classes} {...props}>
        {children}
      </h2>
    )
  }

  if (level === 3) {
    return (
      <h3 className={classes} {...props}>
        {children}
      </h3>
    )
  }

  return (
    <h4 className={classes} {...props}>
      {children}
    </h4>
  )
}
