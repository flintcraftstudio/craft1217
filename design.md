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
| Coral | `#FF7C8B` | Hot coral | Held back. Reserved for the email-submission success state only. |

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
- **Submission success state.** After the user submits a valid email, the form replaces itself with a confirmation message in coral `#FF7C8B` — "thank you · we'll write soon." This is coral's only appearance on the page, which is why it lands.
- **No countdown, no social, no photos.** Deliberate. We don't fake content. The page does one job.

---

## Accessibility

- Color contrast: charcoal `#373739` on cream `#F5F2E8` exceeds WCAG AA at all sizes.
- Rose pink `#EF5D7A` on cream passes WCAG AA at 18px and above (it is used at 24px in the date and 12px tracked uppercase on the CTA — the CTA size is borderline, mitigated by tracked-uppercase weight). For the success-state coral, font size is held at 14px+.
- Every interactive element has a visible focus ring. The input's focus state is the rose-underline shift; the CTA gets a 2px outline offset by 2px in rose pink on `:focus-visible`.
- Form input includes a visible label-equivalent helper line beneath ("be the first to know when our doors open") in addition to placeholder text.

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

Fonts loaded from Google Fonts: `Fraunces:ital,opsz,wght@0,9..144,400;1,9..144,400` and `Inter:wght@400;500`. Self-hosting is an option later but not necessary for a coming-soon page.

Page weight target: under 100KB total including fonts. The design has no images, so this is easily met.

---

*Design locked April 2026. Iteration history: directions A (editorial whisper), B (modern atelier), and C (soft handcrafted) sketched; A selected with eyebrow change ("opening soon") for build.*