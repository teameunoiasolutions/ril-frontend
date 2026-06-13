import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

export type TextVariant =
  | 'body-large'
  | 'body'
  | 'body-journal'
  | 'caption'
  | 'label'
  | 'nav'
  | 'pull-quote'

export type TextTone = 'default' | 'inverse' | 'muted' | 'secondary-on-dark' | 'primary'

export interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  variant?: TextVariant
  tone?: TextTone
  /** Constrains line length to 60–75 characters for readable body copy. */
  measure?: boolean
  /** Override the rendered element. Defaults to p, or blockquote for pull-quote. */
  as?: 'p' | 'span' | 'div' | 'blockquote' | 'cite' | 'figcaption'
}

const variantClasses: Record<TextVariant, string> = {
  'body-large': 'type-body-large',
  body: 'type-body',
  'body-journal': 'type-body-journal',
  caption: 'type-caption',
  label: 'type-label',
  nav: 'type-nav',
  'pull-quote': 'type-pull-quote',
}

const toneClasses: Record<TextTone, string> = {
  default: 'text-text',
  inverse: 'text-text-inverse',
  muted: 'text-text-muted',
  'secondary-on-dark': 'text-text-secondary-on-dark',
  primary: 'text-primary',
}

const defaultElements: Record<TextVariant, NonNullable<TextProps['as']>> = {
  'body-large': 'p',
  body: 'p',
  'body-journal': 'p',
  caption: 'p',
  label: 'span',
  nav: 'span',
  'pull-quote': 'blockquote',
}

/**
 * Body, caption, label, and editorial text styles. Use measure on long-form
 * paragraphs to preserve the 60–75 character line length.
 *
 * @example
 * <Text variant="body" measure>Editorial paragraph...</Text>
 * <Text variant="caption" tone="muted">Published March 2026</Text>
 */
export function Text({
  children,
  variant = 'body',
  tone = 'default',
  measure = false,
  as,
  className,
  ...props
}: TextProps) {
  const classes = cn(
    variantClasses[variant],
    toneClasses[tone],
    measure && 'max-w-[var(--measure-max-width)]',
    className,
  )

  const element = as ?? defaultElements[variant]

  if (element === 'blockquote') {
    return (
      <blockquote className={classes} {...props}>
        {children}
      </blockquote>
    )
  }

  if (element === 'span') {
    return (
      <span className={classes} {...props}>
        {children}
      </span>
    )
  }

  if (element === 'div') {
    return (
      <div className={classes} {...props}>
        {children}
      </div>
    )
  }

  if (element === 'cite') {
    return (
      <cite className={classes} {...props}>
        {children}
      </cite>
    )
  }

  if (element === 'figcaption') {
    return (
      <figcaption className={classes} {...props}>
        {children}
      </figcaption>
    )
  }

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}
