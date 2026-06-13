# Royale Isles Lanka — Design System Addendum
### Development-Readiness Sections (Insert into existing document)

This addendum contains eight new or expanded sections. Each is tagged with its exact insertion point in the existing document, and notes whether it *replaces*, *expands*, or *adds to* existing content. No philosophy, voice, principles, or strategic framing has been altered — only structural, technical, and component-level ambiguity has been resolved.

---

## 1. Primary Navigation Structure

**Insert at:** Replaces the bullet list under **5.4 Navigation** (page 17).

### 5.4 Navigation

The navigation is transparent over hero images and transitions to British Racing Green on scroll or on secondary pages.

**Primary Navigation — 5 items maximum**

| # | Label | Dropdown contents (max 7) |
|---|---|---|
| 1 | **Discover** | Begin the Discovery Quiz · Browse by Mood · Explore the Island (Interactive Map) |
| 2 | **Destinations** | Hill Country · South Coast · East Coast · Ancient Kingdoms · Wildlife & Nature · Hidden Places |
| 3 | **Experiences** | Wellness · Slow Travel · Heritage · Culinary · Rail Journeys · Wildlife |
| 4 | **Journal** | Stories · Guides · Reflections |
| 5 | **About** | Our Philosophy · Who We Are · Our Approach to Curation · Service Commitments · The Team |

**Persistent CTA** (sits outside the 5-item count, far right of nav): *"Begin Your Journey"* → Consultation. Ghost/Minimal styling over hero imagery, Secondary CTA styling once the nav transitions to British Racing Green on scroll.

**Where everything else lives:**
- **Journal** earns a primary slot — it's the editorial heart of the brand and signals depth on first visit.
- **FAQ** and **Contact** are utility pages, footer only — accessed when needed, not part of the discovery arc.
- **Discovery Guide Request** lives in the footer's Discovery & Consultation group, and is contextually offered as a soft secondary link from Destination and Experience pages ("Request a curated guide to this region").
- **Consultation** is reachable three ways at all times: the persistent CTA, the footer, and the contextual soft invitations already mapped in 13.2.

**Rules (unchanged):**
- Dropdowns only, maximum 7 items per dropdown — no mega-menus
- Navigation text: Inter 14px / 500 weight / letter-spacing +0.5px
- Active state: Satin Brass Gold underline, 1px (decorative, non-text — does not carry the 2.9:1 contrast restriction)
- Mobile: full-screen overlay; the five primary items become tap-to-expand accordions (dropdown items appear inline beneath their parent label, not as nested flyouts). The persistent CTA is pinned at the base of the overlay.

---

## 2. Responsive Typography Scale

**Insert at:** New subsection **4.3.1 Responsive Type Scale**, immediately after **4.3 Type Scale**. Also resolves a contradiction in **4.4 Typographic Rules** — see note below.

### 4.3.1 Responsive Type Scale

| Element | Desktop (1440px+) | Tablet (768–1199px) | Mobile (320–767px) | Typeface / Weight | Line height |
|---|---|---|---|---|---|
| Hero (Display XL) | 72px | 56px | 40px | Playfair Display, Bold | 1.1 |
| H1 | 48px | 40px | 32px | Playfair Display, 700 | 1.1 |
| H2 | 36px | 32px | 26px | Playfair Display, 600 | 1.2 |
| H3 | 28px | 24px | 22px | Playfair Display, 600 | 1.2 |
| Body | 16px | 16px | 16px | Inter, 400 | 1.7 |
| Caption | 14px | 14px | 14px | Inter, 400 | 1.5 |

Body and Caption sizes do not reduce on smaller viewports — line length is controlled instead through the grid's outer margins (5.1), keeping the 60–75 character measure intact at every breakpoint. Body Large (18px), Label (12px), and Pull Quote (24–32px) remain constant across breakpoints; their sizes were never large enough to require scaling.

**Amendment to 4.4 Typographic Rules:**
The earlier note in 4.1 ("Minimum size: 20px regular weight, 18px bold") is superseded by a single rule:

> **Playfair Display must never render below 20px, at any breakpoint, regardless of weight.**

At 22px, mobile H3 sits just above this floor with room to spare. If any future component would push a Playfair Display element below 20px, substitute Inter at 18px/600 instead — never reduce Playfair below the floor.

---

## 3. Living Photography — Technical Implementation Standard

**Insert at:** New subsection **8.1.1**, immediately after **8.1 The Living Photography Standard**. Includes a clarifying cross-reference to **8.5 Never Use**.

### 8.1.1 Technical Implementation Standard

Living photography must be built using one of the following three methods, in order of preference:

**1. Layered Image Animation (preferred)**
A static photograph separated into 2–4 depth layers (e.g., sky/mist, midground, foreground). CSS keyframe animations apply subtle opacity shifts, transforms under 5% (translate/scale), or filter changes to a single layer at a time. This is the lightest-weight option, the easiest to make seamless, and trivially satisfies `prefers-reduced-motion` — the animation simply stops and the composed image remains as a still photograph.

**2. Animated WebP**
A pre-rendered 8–20 second loop exported as animated WebP, with a static JPEG poster as fallback for unsupported browsers and as the reduced-motion replacement. Use for organic motion that layered CSS can't convincingly produce — steam dispersal, candle flicker, fine mist texture.

**3. Muted, Looping, No-Audio Video** — permitted only when *all* of the following hold:
- Under 800KB, matching the hero technical spec in 7.4
- Subject is environment-only: mist, water, leaves, steam, flame, light — never people, vehicles, or crowds
- Static camera, no pans, zooms, or tracking movement of any kind
- Seamlessly looped with no visible cut point
- A static poster frame is set as the first-paint image and as the `prefers-reduced-motion` replacement

**Disallowed, regardless of format:**
- Drone or aerial footage
- Any footage with visible camera movement
- People, vehicles, or crowds in motion
- Audio of any kind
- Loops shorter than 8 seconds or longer than 20 seconds
- Any animation a first-time viewer would describe as *"a video is playing"* rather than *"this photograph feels alive"*
- Parallax as the primary hero motion (parallax remains reserved for editorial image sections per 8.2)

**Clarifying 8.5:** The existing prohibition on "auto-playing full video as a primary hero element" targets cinematic or documentary-style footage — b-roll, drone work, anything with people or camera movement. It does not prohibit a muted, looping, environment-only clip meeting the four criteria above. If there is any doubt about whether a candidate asset qualifies, default to Method 1 (Layered Image Animation) instead of video.

---

## 4. The AI Travel Companion

**Insert at:** New subsection **9.7**, after **9.6 Authenticity Over Performance** (end of Section 09). Add a one-line cross-reference in Stage 2 and Stage 7 of Section 11, and in 17.2.

### 9.7 The AI Travel Companion

**Purpose**
The companion exists to help a traveller go deeper into something they're curious about — a destination, an experience, a question about Sri Lanka — in their own time, without needing to fill out a form or wait for a reply. It is research and orientation. It is never sales, booking, or a substitute for the consultation.

**Placement**
Never a floating chat bubble. Never opens itself. Never displays an unread badge, notification dot, or "Hi, need help?" prompt — any of these would contradict Principle III (Trust Before Conversion) and the homepage rule against unprompted live chat (18.3). Instead, it lives as a quiet, named, static entry point: a Ghost/Minimal link such as *"Ask About This Place"* on Destination and Experience pages, and a dedicated panel reachable from the **Discover** navigation item. It opens only on deliberate click or tap, closes easily, and does not reopen on its own.

**Personality**
Speaks in the platform's existing voice (Section 15), drawing specifically on the **Trusted Guide** and **Attentive Concierge** personalities. It identifies itself honestly at first use — *"I'm the Royale Isles Lanka travel companion. I can help you explore, and our team is here whenever you're ready to talk."* It never implies it is a person.

**Relationship to Consultation**
Assists pre-consultation research only. Per 9.3, it cannot generate personalised recommendations, proposals, prices, or availability — those remain human work. Every conversation includes a visible, low-pressure path to Consultation, *offered* rather than pushed, consistent with "every interaction invites, none directs" (Principle III).

**Relationship to Traveller Discovery**
Complements, but does not replace, the Discovery Quiz and Mood-Based Discovery. Where a traveller's archetype is already known, the companion can use that context ("since you're drawn to stillness…"). All responses draw only from the platform's own curated content — never generic or speculative travel advice.

**Human Handoff Principles**
Any request touching pricing, availability, dates, or personal recommendations triggers an explicit handoff offer rather than an attempted answer. The companion never says "I've booked…" or "I've checked availability…" — only a human consultant can make those statements.

**Error States**
Follow the existing microcopy register (6.4). For out-of-scope requests: *"That's something our team can help with properly — would you like me to pass this along?"* Never a generic "I don't understand."

**Privacy**
No conversation is attributed to a traveller's identity unless they proceed to Consultation — at which point it may inform the consultant's first reply, with the traveller's awareness. Conversations are never used for retargeting, advertising, or behavioural profiling, consistent with 9.5. The companion's AI nature is disclosed at first use, with no dark patterns suggesting otherwise.

---

## 5. Footer Architecture

**Insert at:** New section **5.5 Footer**, immediately after the expanded 5.4 Navigation. Also adds one new row to the sitemap in **13.1**.

### 5.5 Footer

**Layout:** Full-width band, British Racing Green background with Ivory/White text (9.8:1, WCAG AAA per 3.3). Section padding follows the 96px hero/cinematic value from the spacing scale (5.2). Four columns on desktop, collapsing to a single stacked column on mobile — no accordions, the footer is short enough to scroll.

| Column | Contents |
|---|---|
| **Brand** | Wordmark (Playfair Display) and a single sentence drawn from the Five Pillars or Design North Star (Playfair italic). No CTA — this column closes the page on the same emotional register it opened with. |
| **Explore** | Destinations · Experiences · Journal · Discover · About (mirrors primary nav for secondary access and SEO) |
| **Discovery & Consultation** | Discovery Guide Request · Consultation · WhatsApp · FAQ · Contact |
| **Legal & Trust** | Privacy Policy · Terms of Service · Cookie Policy · Accessibility Statement |

Below the four columns: a 1px Satin Brass Gold divider (decorative use, per 3.1), then a final row containing the copyright line (Caption, 14px), an optional social link (see below), and a *"Return to top"* text link.

**The "Return to top" link directly addresses the "no sticky navigation on mobile" rule (5.4):** long-form Journal content (800–1,500 words) otherwise leaves mobile readers with no path back to navigation without a long manual scroll. A single, quiet text link at the foot of every page resolves this without introducing a sticky element.

**Social links policy:** Optional, minimal, and limited to one or two platforms the brand can maintain with the same editorial care as the rest of the site (consistent with 9.6, Authenticity Over Performance). If included: text links, no icon badges, no follower counts, no embedded feeds. An absent social presence says nothing. A neglected one contradicts "Attention as a Gift" (Principle VII) — when in doubt, omit.

**Sitemap addition to 13.1:**
> **Legal** — Privacy Policy · Terms of Service · Cookie Policy · Accessibility Statement. Footer-only. Inter typography throughout; no editorial styling required.

---

## 6. Accessibility — Complex Component Clarifications

**Insert at:** New subsection **14.3 Complex Component Accessibility**, after **14.2 Implementation Checklist**.

### 14.3 Complex Component Accessibility

**Interactive Discovery Map (Stage 4)**
The illustrated map is a supplementary visualisation, not the sole way to browse regions. Every region reachable via the map must also exist as a focusable, keyboard-navigable list — present in the page at all times (not hidden behind a toggle), positioned beside or below the map. Where the map itself is interactive, each region is a real focusable element (button or link) with a descriptive label — for example, *"Hill Country — tea estates and highland villages"* — never an unlabelled clickable SVG path.

**Journey Builder (Stage 6)**
Whatever the primary interaction (drag-and-drop or selection-based, per Section 11), every drag-based action must have an equivalent button: *Add to Journey · Remove · Move Up / Move Down*. This is not a separate "accessible mode" — it is the same interface for everyone, since button-based reordering also benefits anyone on an imprecise touchscreen. Reordering announces the change via an `aria-live="polite"` region — for example, *"Ella moved to position 2 of 4."*

**Keyboard Navigation, General**
All dropdown menus (5.4) open, close, and move between items via arrow keys and Escape, not hover alone. Modal and dialog components — form confirmations, the AI Travel Companion panel (9.7) — trap focus while open and return it to the triggering element on close. The skip-to-content link is the first focusable element on every page, visually hidden until focused.

---

## 7. Colour System — Neutral Tones, Opacity, and Metadata

**Insert at:** New subsection **3.5 Neutral Tones, Opacity, and Metadata**, after **3.4 Colour Rules**. Also amends the Testimonial Card specification in **6.3**.

### 3.5 Neutral Tones, Opacity, and Metadata

The palette remains six colours (3.1). No seventh colour is introduced. Two areas of prior ambiguity — grey metadata text and partial-opacity overlays — are resolved as tonal variations of the existing palette.

**Metadata and secondary text** (replaces the `#888888` reference in the Testimonial Card spec, 6.3, and applies anywhere "quieter" text is needed — captions, timestamps, bylines, attributions):

> **Charcoal Black at 60% opacity**, over Warm Ivory Silk or Soft Stone.

This produces a soft, warm grey consistent with the palette's tonal logic, rather than a cold unrelated grey. At 60% opacity over Warm Ivory Silk, Charcoal Black meets the 4.5:1 minimum for body-sized text. If a component places this tone over Soft Stone instead, re-verify — the lighter background reduces the effective ratio.

**Approved opacity tokens — use only these four:**

| Opacity | Use |
|---|---|
| 100% | Primary text, primary UI elements |
| 80% | Sub-headlines and secondary text over dark hero imagery (as already specified for the homepage sub-headline, 18.1) |
| 60% | Metadata, captions, timestamps, attributions — the replacement for `#888888` above |
| 30–45% | Scrim overlays on Cinematic Immersion sections (as already specified in 5.3) |

Opacity is never used to simulate a disabled interactive state. Disabled buttons and fields use a Soft Stone background with Charcoal Black at 60% — a deliberate combination, verified for contrast — rather than a faded copy of the active state.

**Amendment to 6.3:** Testimonial Card attribution: *Inter 14px, Charcoal Black at 60% opacity* (replaces `#888888`).

---

## 8. WhatsApp and the Consultation Channel

**Insert at:** New subsection **6.5 WhatsApp and the Consultation Channel**, after **6.4 Microcopy Reference**. Cross-referenced from 5.5 (Footer) and 18.2 (Homepage Consultation Invitation).

### 6.5 WhatsApp and the Consultation Channel

WhatsApp is **not** a floating, persistent, or auto-opening element anywhere on the platform. Even a quiet floating bubble reads as "available to interrupt you at any moment," which contradicts Trust Before Conversion (Principle III) and the explicit rule against unprompted live chat (18.3).

Instead, WhatsApp exists as a deliberately placed, **static link** in exactly three locations:

1. The **Consultation page**, alongside the inquiry form, as an alternative channel — Ghost/Minimal styling, label *"Continue on WhatsApp."*
2. The **homepage's Consultation Invitation** (18.2, item 12) — the softest CTA on the page may read *"When you're ready to talk, we're here — by WhatsApp or by message."*
3. The **footer's Discovery & Consultation column** (5.5).

It carries no badge, no unread indicator, no animation, and no slide-in entrance. The traveller always initiates: tapping the link opens WhatsApp with the platform's existing opening message (6.4 — *"Hello, and welcome. We're glad you reached out. Tell us what's on your mind."*) pre-filled as an editable draft, never sent automatically.

This keeps WhatsApp available — many travellers prefer it — without the platform ever feeling like it's waiting, watching, or interrupting.

---

### Summary of Insertion Points

| Addendum Section | Insert Location | Type |
|---|---|---|
| 1. Navigation | Replaces bullet list in 5.4 | Replacement |
| 2. Responsive Type Scale | New 4.3.1; amends 4.4 | Addition + amendment |
| 3. Living Photography Tech Spec | New 8.1.1; clarifies 8.5 | Addition + clarification |
| 4. AI Travel Companion | New 9.7; cross-ref 11 & 17.2 | Addition |
| 5. Footer | New 5.5; adds row to 13.1 | Addition |
| 6. Complex Component Accessibility | New 14.3 | Addition |
| 7. Colour Neutrals/Opacity | New 3.5; amends 6.3 | Addition + amendment |
| 8. WhatsApp | New 6.5; cross-ref 5.5 & 18.2 | Addition |
