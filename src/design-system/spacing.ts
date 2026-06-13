/**
 * Spacing tokens — 4px / 8px base scale.
 */

export const space = {
  1: '4px',
  2: '8px',
  3: '16px',
  4: '24px',
  5: '40px',
  6: '64px',
  7: '96px',
  8: '160px',
} as const

export const container = {
  maxWidth: '1280px',
  margin: {
    mobile: '16px',
    tablet: '40px',
    desktop: '40px',
    largeDesktop: '80px',
  },
} as const

export const sectionPadding = {
  mobile: '60px',
  tablet: '80px',
  desktop: '120px',
  largeDesktop: '120px',
} as const

export const componentSpacing = {
  min: space[5],
  max: space[6],
} as const

export const touchTarget = {
  minSize: '44px',
} as const

export type SpaceToken = keyof typeof space
