# Linear design system

Dark, minimal, technical, precise. Darkness is the substrate, not a theme. Text is crisp white at
tight tracking, weights stay in a low 400 to 590 band, and hairline borders do the work shadows
usually would. One acid-lime accent, used like a flashlight, on the single action of a view.

## Sources

Rebuilt to match `00-main/linear.md` exactly (attached in this project as `uploads/linear.md`). That
file is the authority on every token here. `uploads/GLOBAL-RULES.md` is active on top of it and
governs copy, banned patterns and the accessibility floor.

References named in the spec file, recorded in case you have access:
Refero style `https://styles.refero.design/style/90ce5883-bb24-4466-93f7-801cd617b0d1`, original site
`https://linear.app`. Neither was read while building this system. No codebase, Figma file or brand
asset was attached.

### Where this build departs from linear.md

Three deviations, all from explicit instructions that outrank the reference file:

1. **No supporting accents.** `linear.md` lists Pulse Green, Coral Red, Signal Teal, Iris Violet and
   Lavender as decorative accents. The instruction was a single accent with no blue, purple or
   violet anywhere, so none of the five are defined as tokens or used. Meaning that would have been
   carried by those hues is carried by words in gray badges.
2. **No shadow at all, including inset.** `linear.md` expresses card separation as an inset
   box-shadow and allows "a real shadow stack" on the acid-lime CTA. The instruction was zero
   box-shadow values, so the inset border is a real 1px border and the CTA has no shadow. Grep the
   project for `box-shadow`: the only hits are comments saying it is absent.
3. **Three radii, not five.** `linear.md` mentions 2px small and 4px badges in passing, then states
   that 6 / 12 / 9999 is the entire vocabulary. The instruction agrees, so badges use 6px and 2px
   does not exist.

Substitutions, flagged:

| Needed | Used | Why |
| --- | --- | --- |
| Inter Variable binaries | Inter from Google Fonts, weights capped at 590 | No font files supplied |
| Berkeley Mono | JetBrains Mono, the fallback linear.md names | Not licensed here |
| Line-art icon set | Lucide, single-color, applied as CSS masks so glyphs inherit `currentColor` | No icon assets supplied |
| Logo | The word "Linear" set at 16px / 510 in the nav, 32px on the brand card | **No logo file was provided and none was drawn.** Add `assets/logo.svg` and replace the wordmark |
| Product screenshots | One placeholder capture built from tokens, labeled as placeholder in the page | linear.md is screenshot-first and no captures were supplied |

## CONTENT FUNDAMENTALS

Copy follows GLOBAL-RULES, which is stricter than the reference file.

**Register.** Short declarative sentences, one idea each. Engineer to engineer. The product says what
it does and stops. "Issue tracking that stays out of the way." not "Transform how your team ships".

**Person.** Address the reader as "you". "We" appears only where a human is genuinely speaking, for
example "A person replies, usually within one business day."

**Casing.** Sentence case everywhere: headings, buttons, labels, badges. No Title Case, no all caps.

**Punctuation.** No em dashes anywhere. No semicolons in interface copy. No exclamation marks except
one genuine confirmation per page. Ellipses only for truncation and loading. Hyphens for numeric
ranges.

**Buttons.** Verb plus object: "Start free trial", "Send message", "Ask about an import". Never
"Learn more" twice on a page, never "Get started" as the only call to action.

**Banned words.** The GLOBAL-RULES list is enforced: no seamless, effortless, elevate, unlock,
empower, leverage, robust, curated, journey, ecosystem, solutions, showcase, key, crucial, and the
rest. No rhetorical-question headings. No rule of three for rhythm.

**Honesty.** No invented statistics, testimonials, client logos or ratings. Placeholder content is
labeled as placeholder in the design itself, in plain words: "Placeholder product capture. Replace
with a real screenshot of the issue list."

**Numbers.** Numerals, tabular, slashed zero. IDs and shortcuts in the mono face: `ENG-1042`,
`Cmd` `K`.

**Emoji: never.** Not as icons, not as bullets, not in changelog entries.

## VISUAL FOUNDATIONS

**Color.** A ten-step neutral ladder, named as in the spec: Void `#08090a` canvas, Carbon `#0f1011`
cards and nav, Obsidian `#161718` elevated panels, Graphite `#23252a` borders and dividers, Smoke
`#383b3f` strong hairlines, Ash `#62666d` muted text, Fog `#8a8f98` tertiary text and placeholders,
Mist `#d0d6e0` body text and focus rings, Bone `#e5e5e6` near-white fills, Paper `#ffffff` headings.
One accent, Acid Lime `#e4f222`, on the single primary action per view. Hover and active states are
the same hex at 86% and 74% alpha, so exactly one accent hex exists in the system. All body text sits
in the gray ladder. No chromatic body text, no second action color.

**Semantic feedback color.** Three desaturated hues, added after the first build and used only for
system feedback: Success `#5bb98c`, Warning `#d1a54f`, Danger `#e0736b`. Each is the text-safe
variant, at least 4.5:1 on both Void and Carbon (measured 8.3, 8.7 and 6.5 on Void). The fill variant
is the same hue at 12% alpha with a 32% border, for banners and badges. They never appear on a
primary button, a heading, or a section background, and every use is paired with an icon and a word
(Success, Warning, Error) so the state survives grayscale. The accent stays lime and stays the only
action color.

**Type.** Inter Variable with `cv01`, `ss03` and slashed `zero` on, tabular numerals globally. The
scale is nine roles and nothing between them: Display 72/510/1.0/-0.022em, Hero 64/510/1.0/-0.022em,
Section 48/510/1.0/-0.022em, Subheading 32/400/1.13/-0.022em, Heading 24/400/1.33/-0.012em, Body
emphasis 20/590/1.33/-0.012em, Body 16/400/1.5/-0.010em, Body small 15/400/1.6/-0.011em, Caption
13/400/1.2/-0.010em. Weight ceiling 590. Tight negative tracking at 48px and above is not optional.
Mono is JetBrains Mono, for IDs, shortcuts and technical metadata only, never headings.

**Layout.** 1200px centered container, full-bleed dark backgrounds to the viewport edges. Hero is
left-aligned oversized type followed by a product capture that bleeds slightly past the container.
Sections alternate two-column text-and-panel compositions with full-width showcase bands. No
three-column card grids, no masonry, one focal point per section. Density compact.

**Spacing.** Base unit 4px, single ladder 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96. Element gap 8,
card padding 24, section gap 96, compressing to 64 on mobile. No values off the ladder.

**Shape.** Three radii: 6px controls, inputs, badges and subtle cards; 12px cards and framed
captures; 9999px pills. Never 16px or above on cards.

**Borders and elevation.** Elevation is the surface ladder plus 1px hairlines in Graphite, or Smoke
where a separator needs more contrast. There are no shadows in this system: no drop, no inset, no
glow. Cards are Carbon with a Graphite hairline and 24px padding.

**Backgrounds.** Flat color only. No gradients, no glassmorphism, no blur, no texture, no pattern,
no decorative illustration. The one gradient linear.md permits, behind a floating hero screenshot,
is not used here because the capture sits in a framed card instead.

**Cards.** Showcase card: Carbon, 12px radius, 1px hairline, 24px padding, no outer shadow. Subtle
card: 2% white fill at 6px radius, barely separated from the canvas. Interactive cards raise the
border to Smoke and do not lift, scale or brighten.

**Transparency.** Only three values, all white: 2% for subtle card and input fills, 5% for pill
buttons and badges, 8% for input borders.

**States.** Every interactive element has hover, focus-visible, active, disabled and, where
relevant, loading, all defined in `components/components.css` as real pseudo-class rules. Hover moves
color one step up the ladder, never geometry. Active flattens the fill one step further. Focus is a
2px Mist ring at 2px offset, checked against Void, Carbon, Obsidian and Graphite. Disabled is Ash on
Graphite. Loading shows a hairline spinner, swaps the label to "Working", and sets `aria-busy`.

**Motion.** 120ms for color and border changes, 180ms for entrances with ease-out, 240ms as the upper
bound, ease-in-out for state changes. No scale transforms, no glow, no parallax, no autoplay, nothing
moving more than 2px on hover. `prefers-reduced-motion: reduce` removes every transition and
animation globally.

**Imagery.** Product captures only, inside framed cards with hairline borders. No stock photography,
no lifestyle imagery, no abstract illustration. Customer wordmarks sit in a plain Fog-gray strip with
no card backgrounds, and in this build they are labeled as placeholders.

**Responsive.** Two-column sections stack below 900px with the image after the text. Display type
steps 72 to 48 to 36 with tracking unchanged. The nav collapses to wordmark plus menu button and
keeps the pill CTA. Section gaps compress from 96 to 64.

**Accessibility floor.** Mist and Fog on Void both pass AA at their sizes. Ash is never used below
15px. Body text is 16px, caption 13px only for metadata repeated elsewhere. Black labels on acid
lime. Focus rings never removed, 2px minimum. Color is never the only signal: errors carry the word
"Error", status carries a word, icons sit beside text. Tap targets are at least 44px. Prose links
carry an underline.

## ICONOGRAPHY

- **Set:** Lucide, single-color line art, loaded from the `lucide-static` CDN. This is a flagged
  substitution, since no icon assets were supplied. `linear.md` asks for minimal single-color
  line-art SVGs, which Lucide matches at 1.5px stroke.
- **Technique:** `Icon` renders a span whose `mask-image` is the SVG and whose background is
  `currentColor`. No hand-drawn paths exist in this project. Swap the set by repointing one URL in
  `components/core/Icon.jsx`.
- **Sizes:** 16px default, 20px in section headers. Never above 20.
- **Color:** Fog idle, Mist or Paper on hover. Acid lime never fills an icon, because the accent
  belongs to actions.
- **No icon font, no sprite sheet, no emoji, no unicode pictographs.** The only non-Latin characters
  used are inside `Kbd`, and shortcut names are spelled ("Cmd", "Shift") rather than symbolized.

## CONTRAST AUDIT

Measured with the WCAG 2.x relative luminance formula. Ratios are text color against surface.

| Color | Void #08090a | Carbon #0f1011 | Obsidian #161718 | Graphite #23252a | Permitted use |
| --- | --- | --- | --- | --- | --- |
| Paper #ffffff | 19.9:1 | 19.1:1 | 18.0:1 | 15.3:1 | headings, hero type |
| Bone #e5e5e6 | 15.8:1 | 15.1:1 | 14.3:1 | 12.2:1 | near-white fills, label on white pill |
| Mist #d0d6e0 | 13.6:1 | 13.0:1 | 12.3:1 | 10.5:1 | body text, button text, focus ring |
| Fog #8a8f98 | 6.1:1 | 5.9:1 | 5.5:1 | 4.7:1 | tertiary text, placeholders, icons |
| Ash #62666d | **3.5:1** | **3.3:1** | **3.1:1** | **2.7:1** | fails as body text. Control borders and disabled labels only |
| Steel #6d7076 | 4.0:1 | 3.8:1 | 3.6:1 | 3.1:1 | control borders on Graphite only |
| Acid Lime #e4f222 | 16.2:1 | 15.4:1 | 14.6:1 | 12.4:1 | accent fill. Void text on lime is 15.2:1 |
| Success #5bb98c | 8.3:1 | 8.0:1 | 7.5:1 | 6.4:1 | feedback text and icons |
| Warning #d1a54f | 8.7:1 | 8.4:1 | 7.9:1 | 6.7:1 | feedback text and icons |
| Danger #e0736b | 6.5:1 | 6.2:1 | 5.8:1 | 5.0:1 | feedback text, error borders |
| Smoke #383b3f | 1.8:1 | 1.7:1 | 1.6:1 | 1.4:1 | separator hairline, non-semantic |
| Graphite #23252a | 1.3:1 | 1.2:1 | 1.2:1 | 1.0:1 | default hairline, non-semantic |

**Two failures, both real.**

1. **Ash #62666d on Void is 3.5:1.** It fails the 4.5:1 body floor at every size in this type scale,
   and it also fails the 3:1 large-text allowance below 24px. linear.md permits Ash for text at 15px
   and above, which does not hold up. Ash is therefore restricted to disabled control labels, which
   WCAG exempts, and it is used nowhere else in this project. Everywhere the first build used Ash for
   captions and footnotes, the color is now Fog #8a8f98 at 6.1:1. If you want Ash back as a text
   color, the honest fix is to lighten it to about #7a7f87, which reaches 4.6:1 on Void.
2. **Hairlines are below the 3:1 non-text floor.** Graphite is 1.3:1 and Smoke 1.8:1 against Void.
   This is inherent to the hairline aesthetic and is not fixable without abandoning it. The
   mitigation is that no hairline is the sole carrier of meaning: focus is the 2px Mist ring at
   13.6:1, selected rows carry Paper text, errors carry the word "Error" plus a Danger border at
   5.0:1 or better, and disabled controls change both fill and label.

Everything else passes AA for its role. Caption 13px is used only for metadata repeated elsewhere.

### Component boundaries

A control is found by its fill first and its hairline second. Surface steps in a near-black ladder
are perceptible but numerically small, so the hairline carries the 3:1 non-text load:

**The border is the boundary. The fill step is a secondary cue.** Fill steps in a near-black ladder
are numerically tiny (Carbon on Void 1.05:1, Obsidian on Carbon 1.05:1, Graphite on Obsidian 1.17:1),
so `--field-fill` gives the eye a hint and `--control-edge` carries the measured 3:1.

`--control-edge` is Ash `#62666d`, switching to Steel `#6d7076` when the control sits on Graphite,
via `[data-surface="obsidian"]`. It applies to inputs, selects, textareas, checkboxes, radios, the
search field and the top bar edge.

| Control border | Void #08090a | Carbon #0f1011 | Obsidian #161718 | Graphite #23252a |
| --- | --- | --- | --- | --- |
| Ash #62666d (default) | **3.5:1** | **3.3:1** | **3.1:1** | 2.7:1, not used |
| Steel #6d7076 (on Graphite) | 4.0:1 | 3.8:1 | 3.6:1 | **3.1:1** |

Every pairing a control can actually land in clears 3:1. Hover raises the edge to Fog (6.1:1 on Void),
focus to Mist (13.6:1), error to Danger (6.5:1). Disabled drops to Graphite and is exempt, and the
label changes too.

Graphite and Smoke keep their original job: dividers, row rules, card edges and section separators.
They are not control boundaries and are not expected to reach 3:1.

**The Ash split, stated plainly.** Ash #62666d is 3.5:1 on Void. That is **prohibited as a text
color**, because text needs 4.5:1, and **required as a control border**, because a boundary needs
3:1. Same hex, two rules, driven by two different WCAG thresholds. Ash appears in this system only as
`--control-edge` and on disabled labels, which are exempt.

## RESPONSIVE

Three breakpoints. All behavior lives in `components/components.css`, not in inline styles.

| Range | Container | Section gap | Display / Section heading | Two-column composition |
| --- | --- | --- | --- | --- |
| 1280px and up | 1200px fixed, hero capture bleeds to 1320px | 96px | 72px / 48px | side by side, 64px gap |
| 900 to 1279px | fluid, 24px gutters | 96px | 72px / 48px | side by side, bleed removed so the capture is contained |
| 600 to 899px | fluid, 24px gutters | 64px | 48px / 36px | stacks to one column, text first then panel, 32px gap |
| below 600px | fluid, 16px gutters | 64px | 36px / 32px | stacked, card padding drops to 16px |

Tracking stays at -0.022em at every display size. Subheading steps 32 to 24 below 900px. The top bar
collapses to wordmark plus menu button below 900px and keeps its pill CTA. Product captures switch
from bleed to contained at 12px radius. Every value above is on the spacing ladder.

## Index

### Root
| Path | What |
| --- | --- |
| `styles.css` | The single stylesheet consumers link. Import lines only |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `borders.css`, `motion.css`, `base.css` |
| `components/components.css` | Component classes and all interactive states |
| `guidelines/` | 19 specimen cards, grouped Colors, Type, Spacing, Shape, States, Brand |
| `components/` | React primitives |
| `ui_kits/marketing/` | The marketing surface, three pages |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent skill entry point |

### Components

The spec file defines the inventory. It names Navigation, Buttons, Cards, Inputs and Badges, so those
are what exist:

- **core** — `Button`, `Card`, `Badge`, `Icon`, `Kbd`
- **forms** — `Input`, `Select`
- **navigation** — `TopBar`, `Tabs`, `DropdownMenu`, `Pagination`
- **data** — `DataTable`, `List`
- **feedback** — `Modal`, `Toast`, `Banner`, `EmptyState`, `Skeleton` (with `SkeletonRows`)

**Invented components, and why.** Two, both because the spec requires the capability without naming a
component:

- `Icon` — `linear.md` specifies minimal single-color line-art icons. This is the wrapper that keeps
  them in the gray ladder and inheriting `currentColor`.
- `Kbd` — the typography section reserves the mono face for IDs and keyboard shortcuts, and shortcuts
  appear in the product. This is that chip.
- `Banner` — inline form, table and list feedback. GLOBAL-RULES requires designed error and success
  states, and neither Toast nor EmptyState covers feedback attached to a form.
- `List` — the requested list surface, sharing the state contract of `DataTable` for cases too
  narrow for a table.

`Modal`, `Toast`, `Tabs`, `DropdownMenu`, `DataTable`, `Pagination`, `EmptyState` and `Skeleton` were
added on request. They use existing tokens only, plus the three semantic hues. `Select` was added
later, when the admin screen needed a role field: `linear.md` does not name it, but a form system
with `Input` and no `Select` forces kit-level markup, which is worse.

The loading state GLOBAL-RULES requires is a `loading` prop on `Button` with an internal spinner,
not a separate Spinner component.

Still absent, because `linear.md` does not define them: sidebar navigation (ruled out explicitly),
tooltips, switches, checkboxes, radios and progress bars. Checkbox and radio have token-level styling
in `components.css` (`.ds-check`, `.ds-radio`) but no React component yet.

### States coverage
`DataTable` and `List` take `state="ready | loading | empty | error"` and render skeleton rows or a
designed `EmptyState` in place of content. The contact form has an inline `Banner` for the error
case, a `Banner` success view after submit, and `Button loading` during the request. No browser
default state is left standing.

### UI kit
`ui_kits/marketing/index.html` — Product, Changelog and Contact pages with working navigation, a form
with loading, error and success states, and a placeholder product capture. See its README.


## Changelog, for folding back into linear.md

Same format as the departures section above. Everything here is a change made after the first build.

1. **Semantic feedback color added.** `linear.md` has no danger, success or warning hue, and its
   supporting accents are decorative rather than semantic. Three desaturated hues now exist for
   system feedback only: Success `#5bb98c`, Warning `#d1a54f`, Danger `#e0736b`, each with a 12%
   fill and a 32% border variant. Measured at 8.3, 8.7 and 6.5 to 1 on Void and 8.0, 8.4 and 6.2 on
   Carbon. Restricted to Banner, Toast, Badge, EmptyState and the input error border. Never a CTA,
   never a heading, never a section background, always paired with an icon and a word. The accent
   remains lime and remains the only action color.
2. **Ash #62666d withdrawn as a text color.** `linear.md` permits Ash for text at 15px and above.
   Measured, it is 3.5:1 on Void, which fails AA at every size in this scale. Ash is now used only
   for disabled labels. Former Ash captions are Fog #8a8f98 at 6.1:1. Suggested source fix: lighten
   Ash to about #7a7f87 for a 4.6:1 text-safe variant.
3. **Hairline contrast recorded as a known exception.** Graphite 1.3:1 and Smoke 1.8:1 against Void
   are below the 3:1 non-text floor. Kept, because the hairline aesthetic is the system, with the
   rule that no hairline is the sole carrier of meaning.
4. **Eight components added, plus two inventions.** Modal, Toast, Tabs, DropdownMenu, DataTable,
   Pagination, EmptyState and Skeleton, all built from existing tokens. `Banner` and `List` were
   invented to cover form feedback and the requested list surface. Worth adding to the source file as
   a component inventory, since it currently names only Navigation, Buttons, Cards, Inputs and Badges.
5. **Designed empty, error and success states.** `DataTable` and `List` take a `state` prop covering
   ready, loading, empty and error. The form has inline error and success banners and a loading
   button. The source file does not mention states at all.
6. **Breakpoints written down.** 1280, 900 and 600, with container, section gap, type steps and
   two-column reflow specified at each. `linear.md` describes responsive behavior in prose without
   naming breakpoints; these values match that prose.
7. **Input error styling changed.** The source file only brightens the input border to Mist on focus
   and says nothing about errors. Error state is now a Danger border plus the word "Error" in the
   description, wired through `aria-invalid` and `aria-describedby`.
8. **Control boundaries moved to a dedicated edge color.** `linear.md` gives inputs a 2% white fill
   and an 8% white border, measuring about 1.3:1 against the canvas, which is not findable on a real
   page. Surface stepping alone does not fix it either: Carbon on Void is 1.05:1. Controls now carry
   `--control-edge`, Ash #62666d at 3.5 / 3.3 / 3.1:1 on Void, Carbon and Obsidian, switching to
   Steel #6d7076 at 3.1:1 when the control sits on Graphite. It covers inputs, selects, textareas,
   checkboxes, radios, the search field and the top bar edge, which is now Carbon with an Ash rule.
   `--field-fill` stays as the secondary cue. Graphite and Smoke revert to dividers and card edges
   only. Both changes are worth folding into the source file.
9. **Layout utilities introduced.** `.ds-container`, `.ds-section`, `.ds-split` and the type classes
   carry the responsive rules, so pages no longer hardcode container width or grid columns.
