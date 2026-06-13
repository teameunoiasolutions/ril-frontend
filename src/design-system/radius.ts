/**
 * Border radius tokens — minimal editorial corners only.
 */

export const radius = {
  button: '2px',
  card: '4px',
  full: '9999px',
} as const

export type RadiusToken = keyof typeof radius
