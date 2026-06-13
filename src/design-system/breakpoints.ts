/**
 * Breakpoint tokens — Frontend Implementation Specification is authoritative.
 * Mobile: default (<768px) · Tablet: 768–1199px · Desktop: 1200–1439px · Large Desktop: 1440px+
 */

export const breakpointValues = {
  mobileMin: 320,
  tabletMin: 768,
  desktopMin: 1200,
  largeDesktopMin: 1440,
} as const

export const breakpoints = {
  mobile: `(max-width: ${breakpointValues.tabletMin - 1}px)`,
  tablet: `(min-width: ${breakpointValues.tabletMin}px) and (max-width: ${breakpointValues.desktopMin - 1}px)`,
  desktop: `(min-width: ${breakpointValues.desktopMin}px) and (max-width: ${breakpointValues.largeDesktopMin - 1}px)`,
  largeDesktop: `(min-width: ${breakpointValues.largeDesktopMin}px)`,
  tabletUp: `(min-width: ${breakpointValues.tabletMin}px)`,
  desktopUp: `(min-width: ${breakpointValues.desktopMin}px)`,
  largeDesktopUp: `(min-width: ${breakpointValues.largeDesktopMin}px)`,
} as const

export const gridColumns = {
  mobile: 4,
  tablet: 8,
  desktop: 12,
  largeDesktop: 12,
} as const

export const gridGutter = {
  mobile: '16px',
  tablet: '20px',
  desktop: '24px',
  largeDesktop: '24px',
} as const

export type BreakpointName = keyof typeof breakpointValues
