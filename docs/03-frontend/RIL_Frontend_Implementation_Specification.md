# Royale Isles Lanka — Frontend Implementation Specification
### Technical Reference. No brand philosophy. For developers and AI coding assistants.

---

## 1. Design Tokens

### Colours

| Token | Hex | Usage % | Usage |
|---|---|---|---|
| `--color-ivory` | `#FBF9F5` | 60% | Page backgrounds, card backgrounds (primary), text on dark hero overlays |
| `--color-green` | `#004225` | 20% | Nav, primary buttons, headings, icon fills, dividers, focus indicators |
| `--color-charcoal` | `#1A1A1A` | 10% | All body text |
| `--color-stone` | `#E8E1D5` | 5% | Secondary card backgrounds, input borders |
| `--color-forest-shadow` | `#0D1F17` | 3% | Hero/cinematic sections only |
| `--color-gold` | `#C5A059` | 2% | Decorative dividers, icon accents, completion checkmarks, nav active underline — never text on dark surfaces |
| `--color-green-hover` | `#1A5C3A` | — | Primary button hover |
| `--color-white` | `#FFFFFF` | — | Text on green/dark surfaces only |
| `--color-metadata` | `rgba(26,26,26,0.6)` | — | Captions, timestamps, attribution (Charcoal 60% opacity) |

### CSS Variables

```css
:root {
  /* Colours */
  --color-ivory: #FBF9F5;
  --color-green: #004225;
  --color-green-hover: #1A5C3A;
  --color-charcoal: #1A1A1A;
  --color-stone: #E8E1D5;
  --color-forest-shadow: #0D1F17;
  --color-gold: #C5A059;
  --color-white: #FFFFFF;
  --color-metadata: rgba(26, 26, 26, 0.6);
  --color-scrim: rgba(13, 31, 23, 0.4); /* Deep Forest Shadow @ 40% */

  /* Fonts */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', -apple-system, sans-serif;

  /* Radius */
  --radius-card: 4px;
  --radius-button: 2px;

  /* Motion */
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-medium: 500ms;
  --duration-slow: 800ms;
  --ease-standard: ease-out;
  --ease-inout: ease-in-out;
}
```

### Usage Rules

- Never use `#000000` or `#FFFFFF` as a page background. Use `--color-charcoal` and `--color-ivory`.
- Never introduce a 7th colour. Greys/metadata use `--color-metadata` (Charcoal @ 60%), not a separate hex value.
- `--color-gold` is never used for text on `--color-green` or `--color-forest-shadow` (contrast 2.9:1 — fails AA).
- `--color-green` must not exceed 20% of any single viewport's visible area. If a section uses Deep Forest Shadow as a full-bleed hero, treat that section as its own 100% allocation — the 60-20-10-5-3-2 ratio applies to the page as a whole, not to that section in isolation.
- Opacity tokens — only these four values are valid:
  - `100%` — primary text/UI
  - `80%` — sub-headlines over dark hero imagery
  - `60%` — metadata/captions/attribution
  - `30–45%` — scrims on Cinematic Immersion sections
- Opacity is never used to simulate a disabled state. Disabled = `--color-stone` background + `--color-metadata` text.

---

## 2. Typography

### Font Families

| Token | Family | Use |
|---|---|---|
| `--font-display` | Playfair Display | H1–H3, hero, pull quotes, logotype |
| `--font-body` | Inter | Body, UI, forms, nav, captions, H4 |

**Hard rule:** `--font-display` must never render below `20px` at any breakpoint, regardless of weight. If a use case would push it below 20px, use `--font-body` at `18px / 600` instead.

### Responsive Sizes

| Element | Desktop (≥1200px) | Tablet (768–1199px) | Mobile (320–767px) |
|---|---|---|---|
| Hero / Display XL | 72px | 56px | 40px |
| H1 | 48px | 40px | 32px |
| H2 | 36px | 32px | 26px |
| H3 | 28px | 24px | 22px |
| H4 | 22px | 22px | 22px |
| Body Large | 18px | 18px | 18px |
| Body | 16px | 16px | 16px |
| Caption | 14px | 14px | 14px |
| Label | 12px | 12px | 12px |
| Pull Quote | 24–32px | 24–32px | 24px |

Body and Caption do not scale down — line length is controlled via container margins (Section 5), preserving the 60–75 character measure.

### Weights

| Token | Family | Weight | Use |
|---|---|---|---|
| `--weight-display-bold` | Playfair Display | 700 | Hero, H1, Display L |
| `--weight-display-semibold` | Playfair Display | 600 | H2, H3, Pull Quote (italic) |
| `--weight-body-regular` | Inter | 400 | Body, Body Large, Caption |
| `--weight-body-medium` | Inter | 500 | Label, nav, button text, H4 |
| `--weight-body-semibold` | Inter | 600 | H4 emphasis |

Never use `font-weight: bold` for mid-paragraph emphasis. Use `<em>` (italic) only.

### Line Heights

| Element | Line Height |
|---|---|
| Hero / Display | 1.1 |
| H1 / H2 / H3 | 1.1–1.2 |
| Pull Quote | 1.4–1.5 |
| Body | 1.7 |
| Body (long-form journal) | 1.8 |
| Caption / Label | 1.5 |

Letter spacing: Label and nav text use `+0.5px` to `+1px`. No other elements use letter-spacing.

---

## 3. Spacing System

### 4px / 8px Scale

```css
:root {
  --space-1: 4px;   /* icon-to-text gaps */
  --space-2: 8px;   /* tight internal padding */
  --space-3: 16px;  /* standard component padding */
  --space-4: 24px;  /* card padding, between-element gaps */
  --space-5: 40px;  /* between related sections */
  --space-6: 64px;  /* between major page sections */
  --space-7: 96px;  /* hero / cinematic padding */
  --space-8: 160px; /* max breathing room, full-bleed only */
}
```

### Container Widths

| Breakpoint | Max width | Outer margin |
|---|---|---|
| Mobile (320–767px) | `100% - 32px` (fluid) | 16px each side |
| Tablet (768–1199px) | `100% - 48px` (fluid) | 40px each side |
| Desktop (1200–1439px) | 1280px, centred | 40px each side (fluid below 1360px) |
| Large Desktop (≥1440px) | 1280px, centred | 80px each side |

### Section Spacing (vertical padding)

| Breakpoint | Section padding |
|---|---|
| Mobile | 60px top/bottom |
| Tablet | 80px top/bottom |
| Desktop / Large Desktop | 120px top/bottom |

Component vertical spacing (between cards, blocks within a section): `--space-5` to `--space-6` (40–80px).

---

## 4. Breakpoints

```css
/* Mobile: default styles, no media query */
/* 320px – 767px */

@media (min-width: 768px) {
  /* Tablet: 768px – 1199px */
}

@media (min-width: 1200px) {
  /* Desktop: 1200px – 1439px */
}

@media (min-width: 1440px) {
  /* Large Desktop: 1440px+ */
}
```

| Name | Range | Grid columns |
|---|---|---|
| Mobile | 320px – 767px | 4 |
| Tablet | 768px – 1199px | 8 |
| Desktop | 1200px – 1439px | 12 |
| Large Desktop | 1440px+ | 12 |

---

## 5. Grid System

### Desktop Grid (≥1200px)

```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  padding-inline: 40px; /* 80px at ≥1440px */
}
@media (min-width: 1440px) {
  .container { padding-inline: 80px; }
}
```

- Columns: 12
- Gutter: 24px
- Outer margin: 40px (1200–1439px), 80px (≥1440px)
- Max content width: 1280px, centred

### Tablet Grid (768–1199px)

```css
.container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
  padding-inline: 40px;
}
```

- Columns: 8
- Gutter: 20px
- Outer margin: 40px

### Mobile Grid (320–767px)

```css
.container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding-inline: 16px;
}
```

- Columns: 4
- Gutter: 16px
- Outer margin: 16px
- Minimum touch target: 44px × 44px

---

## 6. Navigation Specification

### Primary Navigation

5 items maximum + 1 persistent CTA (CTA does not count toward the 5).

| # | Label | Route | Dropdown items (max 7) |
|---|---|---|---|
| 1 | Discover | `/discover` | Discovery Quiz · Mood-Based Discovery · Interactive Map |
| 2 | Destinations | `/destinations` | Hill Country · South Coast · East Coast · Ancient Kingdoms · Wildlife & Nature · Hidden Places |
| 3 | Experiences | `/experiences` | Wellness · Slow Travel · Heritage · Culinary · Rail Journeys · Wildlife |
| 4 | Journal | `/journal` | Stories · Guides · Reflections |
| 5 | About | `/about` | Our Philosophy · Who We Are · Our Approach to Curation · Service Commitments · The Team |
| CTA | Begin Your Journey | `/consultation` | — |

Pages NOT in primary nav: FAQ, Contact, Discovery Guide Request, Privacy Policy, Terms of Service, Cookie Policy, Accessibility Statement — all footer only.

### Dropdown Rules

- Trigger: hover (desktop) + click/Enter (keyboard/touch)
- Open/close: arrow keys move between items, `Escape` closes and returns focus to the trigger
- No mega-menus — single column, max 7 items
- Nav text: Inter, 14px, weight 500, letter-spacing +0.5px
- Active item: gold (`--color-gold`) underline, 1px — decorative only, applies to underline element, not text colour

### Navigation Background States

```css
.nav {
  background: transparent; /* over hero imagery */
  transition: background-color var(--duration-medium) var(--ease-standard);
}
.nav.scrolled,
.nav.secondary-page {
  background: var(--color-green);
  color: var(--color-white);
}
```

### Mobile Navigation

- Full-screen overlay, `--color-ivory` background
- The 5 primary items render as accordions — tap expands dropdown items inline below the label (no nested flyouts)
- Persistent CTA pinned at bottom of overlay
- No sticky nav on mobile — see Section 14 (Footer "Return to top" link) for the long-form-content workaround
- Overlay open/close: Horizontal Reveal transition, 800ms, ease-in-out

---

## 7. Button Specification

### Primary

```css
.btn-primary {
  background: var(--color-green);
  color: var(--color-white);
  font: 500 14px var(--font-body);
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 16px 40px;
  border-radius: var(--radius-button);
  border: none;
  cursor: pointer;
  transition: background-color var(--duration-fast) ease;
}
.btn-primary:hover {
  background: var(--color-green-hover);
}
```

### Secondary

```css
.btn-secondary {
  background: transparent;
  color: var(--color-green);
  border: 1px solid var(--color-green);
  font: 500 14px var(--font-body);
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 16px 40px;
  border-radius: var(--radius-button);
  transition: all var(--duration-fast) ease;
}
.btn-secondary:hover {
  background: var(--color-green);
  color: var(--color-white);
}
```

### Ghost

```css
.btn-ghost {
  background: transparent;
  border: none;
  color: var(--color-green); /* or white, on dark surfaces */
  font: 500 14px var(--font-body);
  padding: 0;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color var(--duration-fast) ease;
}
.btn-ghost:hover {
  border-bottom-color: var(--color-gold);
}
```

### Disabled

```css
.btn-primary:disabled,
.btn-secondary:disabled {
  background: var(--color-stone);
  color: var(--color-metadata);
  border-color: var(--color-stone);
  cursor: not-allowed;
}
```

### Focus

```css
.btn-primary:focus-visible,
.btn-secondary:focus-visible,
.btn-ghost:focus-visible {
  outline: 2px solid var(--color-green);
  outline-offset: 2px;
}
/* On dark backgrounds (hero, footer): */
.on-dark :focus-visible {
  outline: 2px solid var(--color-white);
}
```

Minimum contrast between focus outline and background: 3:1.

### Loading

```css
.btn-primary.is-loading {
  color: transparent;
  pointer-events: none;
}
.btn-primary.is-loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid var(--color-white);
  border-right-color: transparent;
  border-radius: 50%;
  animation: btn-spin var(--duration-slow) linear infinite;
}
@keyframes btn-spin {
  to { transform: rotate(360deg); }
}
```

Note: this is the one permitted exception to "no loading spinners" — it applies only to in-button loading states for form submission, never page-level loading.

### Banned Button Labels

`Book Now`, `Buy`, `Purchase`, `Click Here`, `Submit`, `Send`.

---

## 8. Form Specification

### General

- Label position: always above field, visible (never placeholder-only)
- Label: Inter 14px / 500, `--color-charcoal`
- Field height: 48px (inputs, selects), min-height 120px (textarea)
- Field padding: 12px 16px
- Field border-radius: `var(--radius-button)` (2px)
- Field background: `--color-ivory`
- Field font: Inter 16px / 400

### Inputs

```css
.input {
  height: 48px;
  padding: 12px 16px;
  background: var(--color-ivory);
  border: 1px solid var(--color-stone);
  border-radius: var(--radius-button);
  font: 400 16px var(--font-body);
  color: var(--color-charcoal);
}
.input::placeholder {
  color: var(--color-metadata);
}
.input:focus-visible {
  border: 2px solid var(--color-green);
  outline: none;
}
```

### Textareas

```css
.textarea {
  min-height: 120px;
  padding: 12px 16px;
  background: var(--color-ivory);
  border: 1px solid var(--color-stone);
  border-radius: var(--radius-button);
  font: 400 16px var(--font-body);
  line-height: 1.7;
  resize: vertical;
}
.textarea:focus-visible {
  border: 2px solid var(--color-green);
  outline: none;
}
```

### Selects

```css
.select {
  height: 48px;
  padding: 12px 16px;
  background: var(--color-ivory);
  border: 1px solid var(--color-stone);
  border-radius: var(--radius-button);
  font: 400 16px var(--font-body);
  appearance: none;
  background-image: url('chevron-down.svg'); /* --color-green fill */
  background-repeat: no-repeat;
  background-position: right 16px center;
}
.select:focus-visible {
  border: 2px solid var(--color-green);
  outline: none;
}
```

### Radio Buttons

```css
.radio {
  width: 20px;
  height: 20px;
  border: 1px solid var(--color-stone);
  border-radius: 50%;
  background: var(--color-ivory);
}
.radio:checked {
  border: 1px solid var(--color-green);
  background: var(--color-green);
  box-shadow: inset 0 0 0 4px var(--color-ivory);
}
.radio:focus-visible {
  outline: 2px solid var(--color-green);
  outline-offset: 2px;
}
```

### Checkboxes

```css
.checkbox {
  width: 20px;
  height: 20px;
  border: 1px solid var(--color-stone);
  border-radius: 2px;
  background: var(--color-ivory);
}
.checkbox:checked {
  background: var(--color-green);
  border-color: var(--color-green);
  /* checkmark icon: white, centered, 12px */
}
.checkbox:focus-visible {
  outline: 2px solid var(--color-green);
  outline-offset: 2px;
}
```

### Validation States

| State | Border | Indicator | Notes |
|---|---|---|---|
| Default | 1px `--color-stone` | none | — |
| Focus | 2px `--color-green` | none | — |
| Complete / Valid | 1px `--color-stone` (unchanged) | Gold checkmark icon, right-aligned in field | `--color-gold`, 16px |
| Error | 2px `--color-charcoal` | Icon (exclamation), right-aligned | No red exists in this palette by design. Error is communicated via border weight + icon + copy, never colour alone |

Error message: appears below field, Inter 14px, `--color-charcoal`, calm tone ("Something didn't quite work there. No need to start again.")

Validation timing: real-time (on blur or on valid input), not only on submit.

### Progress Indicators (multi-step forms)

```css
.progress-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-stone);
}
.progress-dot.is-active,
.progress-dot.is-complete {
  background: var(--color-green);
}
```

No percentage bars. No "Step X of Y" text.

---

## 9. Card Components

### Destination Card

**Layout**
```css
.card-destination {
  aspect-ratio: 1 / 1; /* or 4 / 3 */
  position: relative;
  border-radius: var(--radius-card);
  overflow: hidden;
}
.card-destination img {
  width: 100%; height: 100%; object-fit: cover;
}
.card-destination .location {
  position: absolute;
  bottom: 16px; left: 16px;
  font: italic 600 24px var(--font-display);
  color: var(--color-white);
}
.card-destination .descriptor {
  position: absolute;
  bottom: 16px; left: 16px;
  transform: translateY(28px);
  font: 400 14px var(--font-body);
  color: var(--color-white);
  opacity: 0.8;
}
```
No price, no rating, no star count — ever.

**Hover State**
```css
.card-destination:hover img {
  filter: brightness(1.05) saturate(1.05);
  transition: filter var(--duration-medium) ease;
}
```
No scale/zoom on hover.

**Focus State**
```css
.card-destination a:focus-visible {
  outline: 2px solid var(--color-green);
  outline-offset: 4px;
}
```

**Responsive Behaviour**

| Breakpoint | Columns | Card width |
|---|---|---|
| Mobile | 1 per row | 100% |
| Tablet | 2 per row | `calc(50% - 10px)` |
| Desktop | 3 per row | `span 4` of 12 |

---

### Experience Card

**Layout**
```css
.card-experience {
  aspect-ratio: 3 / 4;
  display: flex;
  flex-direction: column;
}
.card-experience img {
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: var(--radius-card);
}
.card-experience .category {
  font: 500 12px var(--font-body);
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-green);
  margin-top: var(--space-3);
}
.card-experience .title {
  font: 600 20px var(--font-display);
  color: var(--color-charcoal);
}
.card-experience .hook {
  font: italic 400 15px var(--font-body);
  color: var(--color-charcoal);
}
```

**Hover State**
```css
.card-experience:hover img {
  filter: brightness(1.05) saturate(1.05);
  transition: filter var(--duration-medium) ease;
}
```
No zoom.

**Focus State**
Same as Destination Card — 2px green outline, 4px offset.

**Responsive Behaviour**

| Breakpoint | Columns |
|---|---|
| Mobile | 1 per row |
| Tablet | 2 per row |
| Desktop | 3 per row (`span 4`) |

---

### Journal / Story Card

**Layout**
```css
.card-journal {
  display: flex;
  flex-direction: column;
}
.card-journal img {
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: var(--radius-card);
}
.card-journal .title {
  font: 600 28px var(--font-display); /* H3 */
  color: var(--color-charcoal);
  margin-top: var(--space-3);
}
.card-journal .excerpt {
  font: 400 16px var(--font-body);
  line-height: 1.7;
  color: var(--color-charcoal);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-journal .meta {
  font: 400 13px var(--font-body);
  color: var(--color-metadata);
}
```

**Hover State**
```css
.card-journal:hover img {
  filter: brightness(1.05) saturate(1.05);
  transition: filter var(--duration-medium) ease;
}
```
No zoom.

**Focus State**
Same as above — 2px green outline, 4px offset, applied to the card's wrapping link.

**Responsive Behaviour**

| Breakpoint | Columns |
|---|---|
| Mobile | 1 per row, full width |
| Tablet | 2 per row |
| Desktop | 3 per row (`span 4`), or 1 full-width "editorial spread" treatment on homepage |

---

### Testimonial Card

**Layout**
```css
.card-testimonial {
  background: var(--color-stone);
  padding: var(--space-4);
  border-radius: var(--radius-card);
}
.card-testimonial .quote-mark {
  font: 700 48px var(--font-display);
  color: var(--color-gold);
}
.card-testimonial .quote {
  font: italic 600 20px var(--font-display);
  line-height: 1.5;
  color: var(--color-charcoal);
}
.card-testimonial .attribution {
  font: 400 14px var(--font-body);
  color: var(--color-metadata); /* Charcoal @ 60% — replaces #888888 */
}
```

**Hover State**
None — testimonial cards are not interactive elements.

**Focus State**
N/A unless the card itself links elsewhere (e.g., to a full story) — if so, apply standard 2px green outline.

**Responsive Behaviour**

| Breakpoint | Layout |
|---|---|
| Mobile | Full width, stacked |
| Tablet | Full width or 2-column if part of a grid |
| Desktop | Fits within editorial layout — typically 1 of 2-3 in a row, or full-width single feature |

---

## 10. Living Photography Specification

### File Types

| Method | Format | Fallback |
|---|---|---|
| Layered image animation (preferred) | WebP/PNG layers + CSS | Static composed image |
| Animated WebP | `.webp` (animated) | Static `.jpg`/`.webp` poster |
| Looping video (restricted use) | `.webm` / `.mp4`, muted, no audio track | Static poster `.jpg`/`.webp` |

### Allowed Motion

- Opacity shifts on a single layer
- Transform (translate/scale) under 5%
- Subtle filter changes (e.g., brightness drift)
- Pre-rendered ambient motion: mist, steam, water, flame, leaves, light

### Disallowed Motion

- Drone/aerial footage
- Visible camera movement (pan, zoom, tracking)
- People, vehicles, or crowds in motion
- Audio
- Parallax as primary hero motion (parallax reserved for editorial image scroll sections, 20–30% scroll rate max)

### Animation Duration

- Loop length: 8,000ms – 20,000ms
- Must be seamless — no visible cut/restart point
- First-paint: static poster image, animation begins after load

### Performance Rules

| Asset type | Max size | Min dimensions | Format |
|---|---|---|---|
| Hero / Cinematic | 800KB | 2400×1600px | WebP (primary), JPEG fallback |
| Editorial cards | 300KB | 1200×800px | WebP |
| Portrait cards | 300KB | 800×1200px | WebP |
| Square thumbnails | 150KB | 600×600px | WebP |

- Colour profile: sRGB only
- Compression: ~85% JPEG-equivalent quality
- `prefers-reduced-motion: reduce` → animation/video replaced by static poster, no transform/parallax

```css
@media (prefers-reduced-motion: reduce) {
  .living-photo { animation: none; }
  .living-photo video { display: none; }
  .living-photo .poster { display: block; }
  .parallax { transform: none !important; }
}
```

---

## 11. Motion System

### Durations

```css
:root {
  --duration-instant: 100ms;  /* hover colour, focus appearance */
  --duration-fast: 200ms;     /* button/icon state changes */
  --duration-medium: 500ms;   /* component entrance, nav changes */
  --duration-slow: 800ms;     /* page section reveals, hero entrance */
  /* Atmospheric: 8000-20000ms — see Section 10 */
}
```

### Easing

```css
:root {
  --ease-standard: ease-out;  /* fade in, fade up */
  --ease-inout: ease-in-out;  /* horizontal reveal, nav overlay */
}
```

No bounce, elastic, or spring easing — ever.

### Scroll Animations

```css
/* Fade In — sections entering viewport */
.fade-in {
  opacity: 0;
  transition: opacity 600ms var(--ease-standard);
}
.fade-in.is-visible { opacity: 1; }

/* Fade Up — cards, text blocks */
.fade-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 700ms var(--ease-standard), transform 700ms var(--ease-standard);
}
.fade-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

Implement via `IntersectionObserver`. Trigger once per element — animations never repeat on re-scroll, except atmospheric loops (Section 10).

### Hover Animations

```css
/* Fade Scale — modals/dialogs only */
.modal {
  transform: scale(0.97);
  opacity: 0;
  transition: transform 500ms var(--ease-standard), opacity 500ms var(--ease-standard);
}
.modal.is-open {
  transform: scale(1);
  opacity: 1;
}
```

| Animation | Duration | Use |
|---|---|---|
| Fade In | 600ms | Section/hero reveal |
| Fade Up | 700ms | Cards, text on scroll |
| Fade Scale | 500ms | Modal/dialog open |
| Horizontal Reveal | 800ms | Nav overlay, full-screen panels |
| Image Parallax | scroll-linked, 20–30% rate | Editorial image sections only |

### Never

- Auto-playing cinematic video as hero
- Transitions faster than 200ms on content blocks
- Loading spinners for page-level loading (skeleton states instead — button-level spinner is the one exception, Section 7)
- Animations that repeat on every scroll pass
- Parallax > 30% scroll rate

---

## 12. Accessibility Requirements

### WCAG 2.1 AA — Baseline

All pages must pass WCAG 2.1 AA before launch. AAA is the target where feasible (the colour system already exceeds AAA for primary text pairings — see contrast table below).

### Focus States

```css
:focus-visible {
  outline: 2px solid var(--color-green);
  outline-offset: 2px;
}
.on-dark :focus-visible {
  outline: 2px solid var(--color-white);
}
```

- Minimum 3:1 contrast between outline and background
- Focus is never removed (`outline: none` without replacement is forbidden)
- Modals trap focus while open; focus returns to trigger element on close

### Keyboard Navigation

- All interactive elements operable via keyboard
- Tab order follows visual/logical reading order
- Skip-to-content link: first focusable element on every page, visually hidden until focused
- Dropdown menus: arrow keys move between items, `Escape` closes
- **Interactive map**: every region also exists as a focusable, labelled list item — not map-only
- **Journey builder**: every drag action has a button equivalent (`Add`, `Remove`, `Move Up`, `Move Down`), with `aria-live="polite"` announcing reorder changes

### Contrast Rules

| Pairing | Ratio | Level |
|---|---|---|
| Charcoal on Ivory | 12.6:1 | AAA |
| Green on Ivory | 9.8:1 | AAA |
| White on Green | 9.8:1 | AAA |
| Charcoal on Stone | 10.4:1 | AAA |
| White on Forest Shadow | 18.1:1 | AAA |
| Gold on Green | 2.9:1 | Fails AA — decorative only, never text |
| Charcoal @ 60% on Ivory | ≥4.5:1 | AA (verify per use) |

- Body text minimum: 4.5:1
- Large text (≥24px or ≥18.66px bold) minimum: 3:1
- Touch targets: minimum 44×44px
- All images: descriptive alt text; decorative images use `alt=""`
- Heading hierarchy: sequential, H1 → H3, no skipped levels
- `prefers-reduced-motion` respected everywhere (Sections 10/11)

---

## 13. Performance Targets

### Core Web Vitals

| Metric | Target | Notes |
|---|---|---|
| **LCP** (Largest Contentful Paint) | < 2.5s | Hero image/poster must be preloaded, not the animation/video |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Reserve aspect-ratio space for all images before load |
| **INP** (Interaction to Next Paint) | < 200ms | Applies to nav, dropdowns, form interactions |
| **FCP** (First Contentful Paint) | < 1.8s | — |

### Image Sizes (recap from Section 10)

| Type | Max size | Format |
|---|---|---|
| Hero/Cinematic | 800KB | WebP + JPEG fallback |
| Editorial cards | 300KB | WebP |
| Portrait cards | 300KB | WebP |
| Square thumbnails | 150KB | WebP |

### Page Weight Budgets

| Page type | Total weight target (excl. fonts) |
|---|---|
| Homepage | < 2.5MB |
| Destination/Experience page | < 2MB |
| Journal article | < 1.5MB (1 hero + max 3 inline images) |

### Implementation Requirements

- All images: `srcset` + `sizes` for responsive serving; lazy-load below the fold
- Fonts: preload Playfair Display and Inter critical weights; `font-display: swap`
- No render-blocking scripts in `<head>`
- Living photography animation/video loads after first paint, never blocks LCP

---

## 14. Page Templates

### Homepage

1. Nav (transparent over hero)
2. Hero — living photograph, 1 headline (≤10 words), 1 sub-headline, 1 CTA
3. Philosophy statement — 2–3 sentences, Playfair italic
4. Traveller Discovery entry — interactive prompt or editorial gateway
5. Featured Experiences — 3 Experience Cards max
6. Journal excerpt — 1 article, full editorial spread (not a card)
7. "Why Royale Isles Lanka" — 3 statements, no icons/bullets
8. Destination gateway — visual region selector, 6 max
9. Consultation invitation — softest CTA, optional WhatsApp link
10. Footer

Rules: no carousel, no pricing, no testimonial sliders/star ratings, no "popular/best sellers," no newsletter popup, no countdown/urgency, no partner logo wall.

### Destination Page

1. Nav
2. Editorial Spread hero (60–70vh image + headline)
3. Opening Hook — 1 sentence
4. Character — 1–2 paragraphs
5. The Moment — 1 paragraph
6. For You If — 3–4 lines
7. What to Know — practical info
8. Recommended Experiences (Experience Cards, max 3)
9. Featured Accommodation
10. Related Journal articles (2–3, Journal Cards)
11. Soft consultation invitation
12. Footer

Rules: no star ratings, no comparative pricing, max 3 consecutive paragraphs before a visual break.

### Experience Page

1. Nav
2. Hero (Editorial Spread or Intimate Two-Column)
3. Description — sensory, specific
4. Linked destinations
5. Linked journal content
6. Contextual consultation invitation (specific to experience type)
7. Footer

### Journal Article

1. Nav
2. Hero image (16:9, full-bleed or Editorial Spread)
3. Title (H1, Playfair)
4. Body — 800–1,500 words, max 3 inline images, max 3 consecutive paragraphs before visual break
5. Pull quote every 600–800 words (selected from article text, never invented)
6. Single-sentence consultation invitation at close (where appropriate)
7. Related articles (2–3, Journal Cards)
8. Footer ("Return to top" link addresses no-sticky-nav-on-mobile)

Rules: no "Top 10" list format. Narrative only.

### Consultation Page

1. Nav
2. Editorial header — Playfair italic question framing
3. Inquiry form:
   - Open text fields: journey vision, timing, companions
   - Preferred contact method (radio)
   - Submit label: "Begin the Conversation" / "Share Your Vision" / "Let's Talk" — never "Submit"
4. WhatsApp alternative ("Continue on WhatsApp") — static link, Ghost styling
5. What to expect — response time commitment
6. Footer

Rules: no progress percentage, dot indicators only if multi-step. No automated itinerary response.

---

## 15. Development Rules

### Do

- Use editorial layouts: Editorial Spread, Intimate Two-Column, Full Bleed Stillness, Cinematic Immersion
- Use generous whitespace — minimum section padding per breakpoint (Section 3)
- Use asymmetry in layout (e.g., 7/5 column splits, not just 6/6)
- Use storytelling structure: Opening → Middle → Closing on every content page
- Use the 4-question photography approval test before any image ships (feeling first / depth / Sri Lankan specificity / register match)
- Use real content lengths during development — this system breaks with short/lorem-ipsum text in editorial layouts

### Do Not

- Do not use glassmorphism (blurred/translucent panel effects)
- Do not use neon gradients or saturated colour gradients
- Do not use dashboard patterns (stat cards, KPI tiles, sidebar nav with icons)
- Do not use booking-site patterns (price-first cards, star ratings, "X people viewing this," availability calendars on discovery pages)
- Do not use generic SaaS conventions (hamburger + search icon combo on desktop, sticky CTA bars, exit-intent popups, cookie banners with anything but the most privacy-preserving default pre-selected)
- Do not use urgency messaging in any UI string: no countdowns, no "X left," no "limited time," no "X people booked this today"
- Do not use stock photography
- Do not use drop shadows on cards — cards are distinguished by background colour only (Ivory vs Stone)
- Do not introduce a 7th colour, a 3rd typeface, or a spacing value outside the scale in Section 3
