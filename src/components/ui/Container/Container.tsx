import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * Centred responsive grid container (4 / 8 / 12 columns) with spec-compliant
 * margins and gutters. Use inside Section to constrain editorial content width.
 *
 * @example
 * <Section>
 *   <Container>
 *     <Heading level={1}>Page title</Heading>
 *   </Container>
 * </Section>
 */
export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto grid w-full max-w-[var(--container-max-width)]',
        'grid-cols-4 gap-[var(--grid-gutter-mobile)] px-[var(--container-margin-mobile)]',
        'md:grid-cols-8 md:gap-[var(--grid-gutter-tablet)] md:px-[var(--container-margin-tablet)]',
        'lg:grid-cols-12 lg:gap-[var(--grid-gutter-desktop)] lg:px-[var(--container-margin-desktop)]',
        'min-[1440px]:px-[var(--container-margin-large)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
