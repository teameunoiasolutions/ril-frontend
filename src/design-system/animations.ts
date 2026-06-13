/**
 * Motion tokens — calm, editorial transitions. No bounce, elastic, or spring easing.
 */

export const duration = {
  instant: '100ms',
  fast: '200ms',
  medium: '500ms',
  slow: '800ms',
  fadeIn: '600ms',
  fadeUp: '700ms',
  fadeScale: '500ms',
  horizontalReveal: '800ms',
  atmosphericMin: '8000ms',
  atmosphericMax: '20000ms',
} as const

export const easing = {
  standard: 'ease-out',
  inOut: 'ease-in-out',
} as const

export const motionPresets = {
  fadeIn: {
    duration: duration.fadeIn,
    easing: easing.standard,
  },
  fadeUp: {
    duration: duration.fadeUp,
    easing: easing.standard,
    translateY: '20px',
  },
  fadeScale: {
    duration: duration.fadeScale,
    easing: easing.standard,
    scaleFrom: '0.97',
    scaleTo: '1',
  },
  horizontalReveal: {
    duration: duration.horizontalReveal,
    easing: easing.inOut,
  },
  livingAtmosphere: {
    durationMin: duration.atmosphericMin,
    durationMax: duration.atmosphericMax,
    maxTransformPercent: 5,
  },
  parallax: {
    minRate: 0.2,
    maxRate: 0.3,
  },
} as const

export const keyframeNames = {
  btnSpin: 'btn-spin',
  fadeIn: 'fade-in',
  fadeUp: 'fade-up',
} as const

export type DurationToken = keyof typeof duration
export type EasingToken = keyof typeof easing
