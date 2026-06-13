/**
 * Colour tokens — six-colour palette only. No seventh colour.
 * Primitives hold canonical hex/rgba values. Semantics map primitives for component use.
 */

export const primitiveColors = {
  ivory: '#FBF9F5',
  green: '#004225',
  greenHover: '#1A5C3A',
  charcoal: '#1A1A1A',
  stone: '#E8E1D5',
  forestShadow: '#0D1F17',
  gold: '#C5A059',
  white: '#FFFFFF',
} as const

export const opacityTokens = {
  full: 1,
  secondaryOnDark: 0.8,
  metadata: 0.6,
  scrimMin: 0.3,
  scrimMax: 0.45,
} as const

export const derivedColors = {
  metadata: 'rgba(26, 26, 26, 0.6)',
  scrim: 'rgba(13, 31, 23, 0.4)',
  charcoalOnDarkSecondary: 'rgba(255, 255, 255, 0.8)',
} as const

/** Semantic tokens — components must consume these, not primitives directly. */
export const semanticColors = {
  primary: primitiveColors.green,
  primaryHover: primitiveColors.greenHover,
  surface: primitiveColors.ivory,
  surfaceSecondary: primitiveColors.stone,
  surfaceAtmospheric: primitiveColors.forestShadow,
  text: primitiveColors.charcoal,
  textMuted: derivedColors.metadata,
  textInverse: primitiveColors.white,
  textSecondaryOnDark: derivedColors.charcoalOnDarkSecondary,
  accent: primitiveColors.gold,
  border: primitiveColors.stone,
  borderFocus: primitiveColors.green,
  focus: primitiveColors.green,
  focusInverse: primitiveColors.white,
  scrim: derivedColors.scrim,
  disabledBackground: primitiveColors.stone,
  disabledText: derivedColors.metadata,
} as const

export const cssVariableNames = {
  primitive: {
    ivory: '--color-ivory',
    green: '--color-green',
    greenHover: '--color-green-hover',
    charcoal: '--color-charcoal',
    stone: '--color-stone',
    forestShadow: '--color-forest-shadow',
    gold: '--color-gold',
    white: '--color-white',
    metadata: '--color-metadata',
    scrim: '--color-scrim',
  },
  semantic: {
    primary: '--color-primary',
    primaryHover: '--color-primary-hover',
    surface: '--color-surface',
    surfaceSecondary: '--color-surface-secondary',
    surfaceAtmospheric: '--color-surface-atmospheric',
    text: '--color-text',
    textMuted: '--color-text-muted',
    textInverse: '--color-text-inverse',
    textSecondaryOnDark: '--color-text-secondary-on-dark',
    accent: '--color-accent',
    border: '--color-border',
    focus: '--color-focus',
    focusInverse: '--color-focus-inverse',
    scrim: '--color-scrim',
    disabledBackground: '--color-disabled-background',
    disabledText: '--color-disabled-text',
  },
} as const

export type PrimitiveColorName = keyof typeof primitiveColors
export type SemanticColorName = keyof typeof semanticColors
