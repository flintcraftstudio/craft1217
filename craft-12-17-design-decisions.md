# Craft 12-17 — Coming Soon Page Design Decisions

**Client:** Lacey Lee (owner, Moda Organic Salon & Spa)
**Project:** Coming-soon page for Craft 12-17, a new cafe at 5325 NE 4th St, Renton, WA 98059
**Date:** April 2026
**Status:** Design locked, ready for build

---

## Brief

A single-screen, no-scroll coming-soon page whose only job is to capture email addresses for opening news. The aesthetic brief from Lacey: feminine, light, airy, like a cafe.

The cafe sits next door to Lacey's existing salon (Moda Organic Salon & Spa). The salon's clientele is the warmest possible audience for the cafe, so the page acknowledges the connection without being subordinate to it.

---

## Brand Origin

The color palette was pulled from a bouquet of roses. This is the design's organizing metaphor — the page should feel like a bouquet itself: soft petals of color against cream, charcoal as the stems. Restraint is what keeps it from tipping into wedding-invitation or bakery-cute territory.

---

## Color Palette

| Role | Value | Description | Usage |
|---|---|---|---|
| Background | `#F5F2E8` | Warm cream / soft ivory | Page background. Carries ~70% of the visual weight. |
| Anchor | `#373739` | Near-black charcoal, slight cool undertone | All body type, fine rules, input border, address. |
| Lead pink | `#EF5D7A` | True rose | "12·17", "Notify me" CTA, the rose-on-stem icon outline. The hero pink. |
| Soft pink | `#E59C99` | Dusty blush | Petal fills inside the rose icon. Reserved for hover/secondary states in the build. |
| Coral | `#FF7C8B` | Hot coral | The rare petal (~10% of the petal field) and the email-submission success message. Reserved — never used in body type, buttons, or rules. |

**Pink discipline.** Three pinks is a gift, not a license. Each pink has one job in this design. The visual hierarchy of intensity (blush whispers, rose speaks, coral shouts) becomes a functional hierarchy: rose carries the brand, blush supports, coral celebrates.

**Proportion rule.** ~70% cream, ~20% charcoal, ~10% pinks. Pink is jewelry, not paint.

---

## Typography

The build uses two typefaces. Both are free and on Google Fonts.

### Display serif — Fraunces

Used for the wordmark "Craft" and the date "12·17". Fraunces is chosen because it has dramatic optical sizing — at 92px italic it has the high-contrast romance of a fashion-magazine masthead, and the italic is genuinely beautiful, not a slanted upright. Alternatives if Lacey wants to test other directions: *Cormorant Garamond* (more delicate), *DM Serif Display* (chunkier).

- Wordmark "Craft": Fraunces italic, 92px, weight 400, letter-spacing -0.02em, color charcoal
- Date "12·17": Fraunces upright, 24px, weight 400, letter-spacing 0.05em, color rose pink

### Sans-serif — Inter

Used for everything else: eyebrow, paragraph, form, address, corner labels. Inter is chosen for its neutrality and screen legibility at small sizes. The page asks the sans to disappear — its job is to let the serif and the cream breathe.

- Eyebrow "opening soon": Inter, 14px, weight 400, uppercase, letter-spacing 0.32em
- Paragraph copy: Inter, 14px, weight 400, line-height 1.7
- Form input and button: Inter, 14px regular / 12px tracked uppercase
- Address and corner labels: Inter, 11px, letter-spacing 0.18em, uppercase

---

## Layout

A single centered composition that fits the viewport on desktop and stacks naturally on mobile. Reading order top to bottom:

1. **Top-left corner label** — "a sister to moda"
2. **Top-right corner label** — "renton, wa"
3. **Floral mark** — small line-drawn rose icon (32px), rose outline + blush petals
4. **Eyebrow** — "opening soon" (Inter, tracked caps)
5. **Wordmark** — "Craft" (Fraunces italic, 92px, charcoal)
6. **Date treatment** — "— 12·17 —" with hairline rules flanking the rose-pink date
7. **Tagline** — "A neighborhood cafe arriving next door to Moda. Slow coffee, soft mornings, something worth waiting for."
8. **Email form** — single underline-style input + "Notify me →" button
9. **Form helper** — "be the first to know when our doors open"
10. **Footer** — full address, centered

**Symmetry note.** The composition is centered and near-symmetric. Strict perfect symmetry tips a feminine palette into wedding-invitation territory, so the design relies on the *content's* asymmetry (corner labels, the small floral mark above the wordmark, the directional arrow on the CTA) to keep it modern.

---

## Interaction Details

These are the small moves that take the page from static mockup to felt experience.

- **Email input focus state.** On focus, the underline beneath the input switches from charcoal `#373739` to rose pink `#EF5D7A`. This is the page's only color animation and ties the form back to the wordmark visually.
- **CTA hover state.** "Notify me →" shifts from rose pink to dusty blush `#E59C99` on hover. Subtle, but earns the second pink.
- **Submission success state.** After the user submits a valid email, the form replaces itself with a confirmation message in coral `#FF7C8B` — "thank you · we'll write soon." This is coral's only appearance in the type system, which is why it lands.
- **No countdown, no social, no photos.** Deliberate. We don't fake content. The page does one job.

---

## Showstopper: Falling Petals

The page has one signature moment: rose petals falling from above the viewport on first load, then coming to rest as scattered petals on the page. A second, denser burst fires when the visitor submits a valid email. This is the design's *felt difference* — the thing that makes Craft 12-17 memorable rather than just tasteful.

### Intent

Atmosphere, not snow. A welcome moment, not constant ornament. The page should feel *alive on arrival* and *finished at rest* — the bouquet metaphor made literal. Most "falling petals" effects on the web fail by being too dense, too uniform, or too persistent. We avoid those failures by treating this as a *narrative event* (intro → settle → reward on submit), not a permanent decoration.

### Behavioral Model

**First-load fall + ground-rest layer + submission burst.**

1. **Intro fall (0–10 seconds after page load).** Roughly 10 petals are spawned with staggered delays so they cascade down across the full viewport width. Each petal falls, sways, and tumbles independently. After ~10 seconds the active petals finish their fall and no new ambient petals spawn.
2. **Ground-rest layer (always visible).** 5 petals are statically positioned along the lower third of the page — slightly rotated, varied in size, in the same color distribution as the falling petals. They are present from page load and remain throughout. They give the page a "finished bouquet" quality even after the intro fall ends.
3. **Submission burst.** When the visitor submits a valid email, ~18 fast-falling petals spawn over ~1 second with shorter durations (6–10s), higher opacity, and slightly larger scale. This is the page's reward for action. After the burst clears, the page returns to its at-rest state (just the ground layer).

The page is therefore in motion exactly twice: when you arrive and when you convert. The rest of the time, it's still — and the stillness is part of the design.

### Color Distribution

Each petal independently rolls a color at spawn, weighted:

- **~70% Dusty Blush `#E59C99`** — the dominant petal color, sets the soft visual mood
- **~20% Rose `#EF5D7A`** — the lead brand pink, gives occasional saturation
- **~10% Coral `#FF7C8B`** — the rare petal. The visitor will catch one or two during the intro fall and that single moment is what the effect is for. Do not increase coral frequency; rarity is the entire point.

The same 70/20/10 distribution applies to the intro fall, the ground-rest layer, and the submission burst.

### Animation Parameter Ranges

Every petal randomizes within these ranges. Ranges (not fixed values) are mandatory — uniformity is the failure mode.

| Parameter | Range | Notes |
|---|---|---|
| Fall duration | 14–22 seconds | Intro fall only. Submission burst uses 6–10s. |
| Sway period | 4–7 seconds | Horizontal drift, deliberately *not* synced to fall duration |
| Sway amplitude | ±20–50 px | Side-to-side wobble |
| Horizontal drift | ±80 px over fall | Net sideways travel from spawn to settle |
| Rotation | 180–540° total over fall, random direction | Ensures tumble feels organic |
| Start rotation | 0–360° | Random initial orientation |
| Target opacity | 0.45–0.75 | Mid-opacity keeps petals atmospheric, not overlaid |
| Scale | 0.7–1.2× | Size variance for depth |
| Spawn X | 0–100vw | Distributed across full width |
| Color | weighted random (see above) | Independent per petal |

### Layering

Petals live in their own absolutely-positioned layer between the cream background (`z-index: 0`) and the page content (`z-index: 2`). Petals sit at `z-index: 1`. They never appear in front of the wordmark, the date treatment, the form, or the corner labels. The petals are atmosphere; the type is the message.

### Petal Shape

A single asymmetric SVG path used for all petals. The shape is *not* a perfect oval — one curve is fuller than the other to mimic a real curled rose petal. Combined with random rotation and scale, this single asymmetric shape multiplies into apparent variety without ever looking like a generic "particle."

A single faint internal stroke (40–50% opacity of the petal color) adds suggestion of veining.

### Reduced Motion

When `prefers-reduced-motion: reduce` is set, all animation is suppressed. The intro fall does not play; the submission burst does not play. Instead, the ground-rest layer is upgraded from 5 static petals to ~10 static petals scattered throughout the page (still respecting layering — never on top of type). The page retains its "finished bouquet" character but is fully still. The submission success message appears immediately on submit with no motion.

This must be tested with macOS System Settings → Accessibility → Display → Reduce motion (or equivalent on Windows/Linux/iOS/Android) to confirm the fallback is correct, not just present.

### Performance Budget

- **Maximum simultaneous petals on screen:** 30 (the intro fall + ground-rest + a submission burst can overlap briefly; cap is a safety margin).
- **Mobile (< 480px viewport):** Reduce intro fall count from 10 to 6 and submission burst from 18 to 10. The smaller viewport doesn't need the same density to feel populated, and lower-end mobile GPUs benefit.
- **Use `will-change: transform, opacity`** on the petal element. Do not animate non-composited properties (no `top`/`left` keyframes — only `transform` and `opacity`).
- **Clean up burst petals.** Submission-burst petals must `removeChild` themselves after their fall completes. Do not let the DOM accumulate over multiple form submissions.
- **No `requestAnimationFrame` loop.** All motion is CSS keyframes; JavaScript only spawns elements and sets variables. The browser owns the frame loop.

### What This Effect Is Not

- Not constant ambient motion. The page is still by default.
- Not heavy. 10 petals on first load, then 5 at rest. Anything more is snow.
- Not interactive in any other way — petals do not respond to mouse, scroll, or touch. They are atmosphere, not toys.
- Not gradient, not glow, not blur. Flat fills only. Solid color on cream.
- Not a parallax effect. Single layer.

---

## Accessibility

- Color contrast: charcoal `#373739` on cream `#F5F2E8` exceeds WCAG AA at all sizes.
- Rose pink `#EF5D7A` on cream passes WCAG AA at 18px and above (it is used at 24px in the date and 12px tracked uppercase on the CTA — the CTA size is borderline, mitigated by tracked-uppercase weight). For the success-state coral, font size is held at 14px+.
- Every interactive element has a visible focus ring. The input's focus state is the rose-underline shift; the CTA gets a 2px outline offset by 2px in rose pink on `:focus-visible`.
- Form input includes a visible label-equivalent helper line beneath ("be the first to know when our doors open") in addition to placeholder text.
- Petal layer is `aria-hidden="true"` and `pointer-events: none` — invisible to assistive tech and never blocks interaction.
- `prefers-reduced-motion` is honored (see Showstopper section).

---

## What This Design Is Not

- Not a typical coming-soon page with a countdown clock.
- Not a hero-image build — Lacey doesn't have photography yet, and committing to stock would dilute the brand before it has a chance to set.
- Not a "fully launched" preview. No nav, no footer links, no social grid, no menu tease. Holding pattern only.
- Not a literal pink page. The pinks are accents on a cream-led page; the palette pull is a rose bouquet, not a rose-petal flood.
- Not a brand reveal disconnected from Moda. The "sister to moda" tag is intentional and warmest-leads strategy.

---

## Open Questions for Lacey

These don't block the build but should be confirmed before launch.

1. **Is "12-17" a date (December 17), an address fragment, or a brand cipher?** The current design treats it ambiguously — the script "twelve seventeen" hint was rejected in favor of a cleaner typographic hairline-rule treatment. If Lacey wants the date confirmed publicly, we add a small "december 17 · save the date" line under the tagline. If it's deliberately mysterious, we leave it.
2. **The "sister to moda" tag.** Top-left corner. Confirm she wants the existing salon brand surfaced on day one, or strip it and let Craft 12-17 stand alone.
3. **Final wordmark.** The current design uses Fraunces italic as the wordmark. If Lacey eventually commissions a custom logo, the page can swap the type for the logo image. For coming-soon, the type *is* the logo.
4. **Email collection backend.** Where do submissions go? Options: Mailchimp, ConvertKit, Postmark + a small list, or just a database row that emails Lacey on each signup. This is a build-time decision, not a design one.

---

## Build Notes

The build will use the standard stack: Go + templ + htmx + Alpine.js + Tailwind CSS. Single page, single form post, htmx swap on submit for the success state. No JavaScript frameworks needed; Alpine handles the focus-state class toggle if Tailwind's `focus-within:` doesn't reach.

The petal system is plain vanilla JS + CSS keyframes — no library. It lives in a single self-contained module and runs once on `DOMContentLoaded`. The submission-burst hook listens for the htmx `htmx:afterRequest` event on the form (or for the demo, a click handler). No coupling to the form internals beyond that event.

Fonts loaded from Google Fonts: `Fraunces:ital,opsz,wght@0,9..144,400;1,9..144,400` and `Inter:wght@400;500`. Self-hosting is an option later but not necessary for a coming-soon page.

Page weight target: under 100KB total including fonts. The design has no images, so this is easily met.

---

## Handoff Package

Two files form the handoff:

1. **`craft-12-17-design-decisions.md`** — this document. Describes intent, rules, and parameter ranges. The contract.
2. **`craft-12-17-coming-soon.html`** — the static reference implementation, including the working petal system. The acceptance test.

The implementing agent should read the markdown for the *why* and adapt the HTML for the *how*. If the production implementation matches the HTML's felt behavior, it passes. If it follows the markdown but diverges visibly from the HTML, the markdown is unclear and should be updated, not the HTML.

---

*Design locked April 2026. Iteration history: directions A (editorial whisper), B (modern atelier), and C (soft handcrafted) sketched; A selected with eyebrow "opening soon" and falling-petals showstopper added in second pass.*