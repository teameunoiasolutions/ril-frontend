import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

export type SectionTone = 'default' | 'secondary' | 'atmospheric'
export type SectionPadding = 'default' | 'compact' | 'cinematic'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  /** Surface treatment — atmospheric is for hero/cinematic sections only. */
  tone?: SectionTone
  /** Vertical padding scale. Cinematic uses hero spacing (96px). */
  padding?: SectionPadding
  /** Adds on-dark focus ring context for child interactive elements. */
  onDark?: boolean
}

const toneClasses: Record<SectionTone, string> = {
  default: 'bg-surface text-text',
  secondary: 'bg-surface-secondary text-text',
  atmospheric: 'bg-surface-atmospheric text-text-inverse',
}

const paddingClasses: Record<SectionPadding, string> = {
  default:
    'py-[var(--section-padding-mobile)] md:py-[var(--section-padding-tablet)] lg:py-[var(--section-padding-desktop)]',
  compact: 'py-[var(--space-5)] md:py-[var(--space-6)]',
  cinematic: 'py-[var(--space-7)]',
}

/**
 * Vertical rhythm wrapper applying section padding per breakpoint.
 * Compose with Container for horizontal grid constraint.
 *
 * @example
 * <Section tone="secondary">
 *   <Container>...</Container>
 * </Section>
 */
export function Section({
  children,
  tone = 'default',
  padding = 'default',
  onDark = false,
  className,
  ...props
}: SectionProps) {
  const isOnDark = onDark || tone === 'atmospheric'

  return (
    <section
      className={cn(
        toneClasses[tone],
        paddingClasses[padding],
        isOnDark && 'on-dark',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}
