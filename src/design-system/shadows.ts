/**
 * Shadow tokens — cards use background colour distinction only (Ivory vs Stone).
 * No drop shadows on cards per design system. This module documents intentional absence
 * and defines focus-ring treatments where elevation is not used.
 */

export const shadows = {
  none: 'none',
} as const

export const focusRing = {
  width: '2px',
  offset: '2px',
  minContrastRatio: 3,
} as const

export type ShadowToken = keyof typeof shadows
