import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonTone = 'default' | 'inverse'

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: ReactNode
  variant?: ButtonVariant
  /** Inverse tone for ghost buttons on dark surfaces. */
  tone?: ButtonTone
  isLoading?: boolean
  /** Renders as an anchor when provided. */
  href?: string
  /** Anchor attributes when href is set. */
  anchorProps?: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'href' | 'className'>
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
}

/**
 * Invitation-style CTAs — primary, secondary, and ghost. Never use banned labels
 * (Book Now, Submit, etc.). Supports loading state for form submission only.
 *
 * @example
 * <Button variant="primary">Begin Your Journey</Button>
 * <Button variant="ghost" tone="inverse" href="/journal">Continue reading</Button>
 */
export function Button({
  children,
  variant = 'primary',
  tone = 'default',
  isLoading = false,
  className,
  disabled,
  href,
  anchorProps,
  type = 'button',
  ...buttonProps
}: ButtonProps) {
  const isDisabled = Boolean(disabled) || isLoading
  const classes = cn(
    'btn-base',
    variantClasses[variant],
    tone === 'inverse' && variant === 'ghost' && 'btn-ghost-inverse',
    isDisabled && 'btn-disabled',
    isLoading && variant === 'primary' && 'btn-loading',
    className,
  )

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-disabled={isDisabled || undefined}
        aria-busy={isLoading || undefined}
        tabIndex={isDisabled ? -1 : undefined}
        onClick={
          isDisabled
            ? (event) => event.preventDefault()
            : anchorProps?.onClick
        }
        {...anchorProps}
      >
        {children}
        {isLoading && <span className="sr-only">Loading</span>}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-busy={isLoading || undefined}
      {...buttonProps}
    >
      {children}
      {isLoading && <span className="sr-only">Loading</span>}
    </button>
  )
}
