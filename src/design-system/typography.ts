/**
 * Typography tokens — Playfair Display (display) + Inter (body/UI).
 * Playfair must never render below 20px at any breakpoint.
 */

export const fontFamilies = {
  display: "'Playfair Display', Georgia, serif",
  body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
} as const

export const fontWeights = {
  displayBold: 700,
  displaySemibold: 600,
  bodyRegular: 400,
  bodyMedium: 500,
  bodySemibold: 600,
} as const

export const playfairMinSizePx = 20

/** Responsive type scale — Implementation Spec breakpoints. */
export const typeScale = {
  displayXl: {
    mobile: '40px',
    tablet: '56px',
    desktop: '72px',
    largeDesktop: '72px',
    family: fontFamilies.display,
    weight: fontWeights.displayBold,
    lineHeight: '1.1',
  },
  h1: {
    mobile: '32px',
    tablet: '40px',
    desktop: '48px',
    largeDesktop: '48px',
    family: fontFamilies.display,
    weight: fontWeights.displayBold,
    lineHeight: '1.1',
  },
  h2: {
    mobile: '26px',
    tablet: '32px',
    desktop: '36px',
    largeDesktop: '36px',
    family: fontFamilies.display,
    weight: fontWeights.displaySemibold,
    lineHeight: '1.2',
  },
  h3: {
    mobile: '22px',
    tablet: '24px',
    desktop: '28px',
    largeDesktop: '28px',
    family: fontFamilies.display,
    weight: fontWeights.displaySemibold,
    lineHeight: '1.2',
  },
  h4: {
    mobile: '22px',
    tablet: '22px',
    desktop: '22px',
    largeDesktop: '22px',
    family: fontFamilies.body,
    weight: fontWeights.bodySemibold,
    lineHeight: '1.2',
  },
  bodyLarge: {
    mobile: '18px',
    tablet: '18px',
    desktop: '18px',
    largeDesktop: '18px',
    family: fontFamilies.body,
    weight: fontWeights.bodyRegular,
    lineHeight: '1.7',
  },
  body: {
    mobile: '16px',
    tablet: '16px',
    desktop: '16px',
    largeDesktop: '16px',
    family: fontFamilies.body,
    weight: fontWeights.bodyRegular,
    lineHeight: '1.7',
  },
  bodyJournal: {
    mobile: '16px',
    tablet: '16px',
    desktop: '16px',
    largeDesktop: '16px',
    family: fontFamilies.body,
    weight: fontWeights.bodyRegular,
    lineHeight: '1.8',
  },
  caption: {
    mobile: '14px',
    tablet: '14px',
    desktop: '14px',
    largeDesktop: '14px',
    family: fontFamilies.body,
    weight: fontWeights.bodyRegular,
    lineHeight: '1.5',
  },
  label: {
    mobile: '12px',
    tablet: '12px',
    desktop: '12px',
    largeDesktop: '12px',
    family: fontFamilies.body,
    weight: fontWeights.bodyMedium,
    lineHeight: '1.5',
    letterSpacing: '1px',
    textTransform: 'uppercase' as const,
  },
  nav: {
    mobile: '14px',
    tablet: '14px',
    desktop: '14px',
    largeDesktop: '14px',
    family: fontFamilies.body,
    weight: fontWeights.bodyMedium,
    lineHeight: '1.5',
    letterSpacing: '0.5px',
  },
  pullQuote: {
    mobile: '24px',
    tablet: '24px',
    desktop: '32px',
    largeDesktop: '32px',
    family: fontFamilies.display,
    weight: fontWeights.displaySemibold,
    lineHeight: '1.5',
    fontStyle: 'italic' as const,
  },
  button: {
    mobile: '14px',
    tablet: '14px',
    desktop: '14px',
    largeDesktop: '14px',
    family: fontFamilies.body,
    weight: fontWeights.bodyMedium,
    lineHeight: '1.5',
    letterSpacing: '1px',
    textTransform: 'uppercase' as const,
  },
} as const

export const measure = {
  minChars: 60,
  maxChars: 75,
  maxWidth: '45rem',
} as const

export type TypeScaleName = keyof typeof typeScale
