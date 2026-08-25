# Archive manifest

Backup of the Linear design system, taken as a copy of the project as it stands. Nothing in the
archive was rewritten for the backup. This file is the only addition.

**114 files**, excluding this manifest. Counts by area: 8 tokens, 1 global stylesheet, 1 component
stylesheet, 60 component files, 19 guideline cards, 5 marketing kit files, 5 admin kit files,
2 source documents, 3 generated files, 4 root files, 2 preview assets.

Note on two filenames you asked for: this system has no `tokens.css` and no `guidelines.css`.
Tokens live as eight files under `tokens/`, and the guidelines are 19 standalone HTML specimen
cards. `styles.css` is the entry point that imports the whole stylesheet closure.

## Stylesheets, 10 files

| File | Holds |
| --- | --- |
| `styles.css` | Entry point. Import lines only, in load order |
| `tokens/fonts.css` | Inter and JetBrains Mono webfont import |
| `tokens/colors.css` | Neutral ladder, acid lime, semantic hues, translucent whites, `--field-fill` and `--control-edge` scopes |
| `tokens/typography.css` | Font families, feature settings, weight band, the nine type roles |
| `tokens/spacing.css` | 4 to 96 ladder, container, section gap, control padding, tap target |
| `tokens/radius.css` | 6, 12, 9999 |
| `tokens/borders.css` | Hairline definitions and focus ring width |
| `tokens/motion.css` | Durations, easings, reduced motion override |
| `tokens/base.css` | Element resets, heading scale, link and focus defaults |
| `components/components.css` | Component classes, all interactive states, layout utilities, breakpoints |

## Components, 60 files

Each component is `Name.jsx`, `Name.d.ts` and `Name.prompt.md`. One `@dsCard` HTML per directory.

| Directory | Components | Card |
| --- | --- | --- |
| `components/core/` | Button, Card, Badge, Icon, Kbd | `core.card.html` |
| `components/forms/` | Input, Select | `forms.card.html` |
| `components/navigation/` | TopBar, Tabs, DropdownMenu, Pagination | `navigation.card.html` |
| `components/data/` | DataTable, List | `data.card.html` |
| `components/feedback/` | Modal, Toast, Banner, EmptyState, Skeleton | `feedback.card.html` |

## Guidelines, 19 files

`guidelines/` specimen cards: colors-ladder-dark, colors-ladder-light, colors-accent,
colors-transparency, colors-semantic, colors-semantic-fills, type-display, type-headings, type-body,
type-weights, type-features, type-mono, space-ladder, space-layout, responsive, shape-radius,
shape-hairlines, state-interactive, state-focus, state-input, contrast-audit, brand-wordmark,
brand-motion.

## UI kits, 10 files

| File | Holds |
| --- | --- |
| `ui_kits/workspace-admin/index.html` | Live team members screen, top bar plus AdminScreen |
| `ui_kits/workspace-admin/states.html` | Four frames: empty, loading, error, invitations |
| `ui_kits/workspace-admin/AdminScreen.jsx` | Tabs, search, filter, sortable table, pagination, invite modal, row menu, remove confirmation, toast, table skeleton |
| `ui_kits/workspace-admin/data.js` | 12 members, 2 pending invitations |
| `ui_kits/workspace-admin/README.md` | What the screen does and its design-system notes |
| `ui_kits/marketing/index.html` | Marketing site shell, routes Product, Changelog, Contact |
| `ui_kits/marketing/Home.jsx` | Hero, wordmark strip, keystroke section, cycles band, importer section, closing CTA |
| `ui_kits/marketing/Pages.jsx` | Changelog, Contact form with states, site footer |
| `ui_kits/marketing/ProductShot.jsx` | Placeholder product capture in a flush card |
| `ui_kits/marketing/README.md` | Kit notes and honesty notes |

## Documents, 4 files

| File | Holds |
| --- | --- |
| `readme.md` | Sources, departures from linear.md, content fundamentals, visual foundations, iconography, contrast audit, component boundaries, responsive, index, and the nine-item changelog for folding back into the source file |
| `SKILL.md` | Agent skill entry point |
| `uploads/linear.md` | The source specification, as supplied |
| `uploads/GLOBAL-RULES.md` | The constraint layer, as supplied |

## Generated and preview, 5 files

`_ds_bundle.js`, `_ds_manifest.json` and `_adherence.oxlintrc.json` are rebuilt automatically from
the sources, so they can be discarded and regenerated. `thumbnail.html` is the homepage tile and
`.thumbnail` is its capture.

## Rebuilding from this archive

Open any HTML file directly. Each one links `styles.css` by relative path and loads
`_ds_bundle.js`. If the bundle is missing, the sources under `components/` are the truth and the
bundle regenerates from them.
