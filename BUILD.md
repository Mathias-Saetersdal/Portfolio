# Portfolio site

Build a portfolio site in this folder. Every file listed under "Files" must exist and work when you are done.

## Who it is for

Mathias Sætersdal, interaction designer in Bergen. Master's in interaction design from NTNU, bachelor's in digital culture from UiB. Newly graduated. His specialty is accessibility and WCAG, which he taught as a student assistant. He writes his own frontend.

The reader is a design lead or recruiter at a Norwegian agency, on a laptop, giving it under three minutes before deciding whether to open the CV. They are checking three things: can he think, can he show his work, can he finish something.

Two projects now. Six later, without restructuring.

## Hard constraints

- Vanilla HTML, CSS and JavaScript. No framework, no bundler, no build step, no npm, no backend. Install nothing.
- Every path relative. The folder must work opened over `python3 -m http.server`, pushed to a repo root, and pushed to a subdirectory, with no path changes.
- No analytics, no trackers, no third-party requests, no cookie banner. That includes Google Fonts. Everything the site loads is a file in this folder.
- WCAG 2.2 AA is the floor. This site is the proof of the skill it claims, so an accessibility failure is worse than an ugly page.
- Bilingual. Norwegian at the root, English under `/en/`. One directory per language. No JavaScript language toggle, because `lang` has to be correct per document.
- Works on a phone.

## The signature

The one thing this site is remembered by is keyboard focus.

Most sites hide the focus indicator. This one makes it the loudest, most considered element on the page. A thick, high-contrast indicator that physically travels between targets: when focus moves, a single shared element animates from the previous element's box to the new one with a short overshoot, rather than disappearing and reappearing.

That is the thesis rendered as visual identity. It is the correct signature for this person and it is a moving part that earns its attention.

How to build it:

- One absolutely positioned element, `id="focus-ring"`, once in the DOM, `aria-hidden="true"`, `pointer-events: none`.
- Driven by a `focusin` listener on `document`. Read `getBoundingClientRect()` on the target, animate transform and size to it. Use `transform` and `opacity`, not `top`/`left` layout animation.
- Only for `:focus-visible`, not mouse clicks. Check `el.matches(':focus-visible')` and hide the ring when false.
- Never remove the native fallback. Every interactive element also gets a real CSS `:focus-visible` outline, so if JavaScript fails the site is still fully usable and still passes 2.4.7.
- Hide on blur with nothing focused, on resize, and on scroll if the ring would lag.
- On the front page, a small dismissible line: "Trykk Tab" / "Press Tab". Dismissed state in `localStorage`. A hint, not a modal, and not ahead of the real content in the tab order.

## Everything else is quiet

Spend the boldness there and nowhere else. One column, generous margins, a measure of roughly 65 to 70 characters, hierarchy carried by type size and space rather than boxes and borders.

The site next to this one is his other project, The Secret Library, which is loud: a force-directed graph, a skill tree, a page-turning book. Do not compete with it. The contrast between the two is itself an argument that he works in more than one register.

## Palette

Do not use any of these. They are the current defaults and read as templated:

- warm cream background, serif display, terracotta accent
- near-black with a single acid-green or vermilion accent
- broadsheet layout, hairline rules, zero border radius

Pick a palette and commit. Two starting points, or propose a third and justify it:

**A. Ink and signal.** Deep desaturated blue-black surface near `#0E1116`, cool off-white text near `#E6E8EC`, one saturated signal color used only for the focus ring and links, one muted secondary for metadata. The focus ring is the brightest thing on the page, which is the point.

**B. Two hues, no neutral accent.** A pale cool ground, not cream, closer to `#E9EBE7`, a deep hue for text, and a genuinely different second hue for the focus ring and links, both 7:1 or better against the ground. Riskier, more memorable, and it connects to his color project.

Define 5 to 6 named CSS custom properties at the top of `main.css`, each with a comment giving its measured contrast ratio against its background. Support `prefers-color-scheme` for light and dark.

## Type

Do not use Bricolage Grotesque, Atkinson Hyperlegible or JetBrains Mono. Those are The Secret Library's fonts and reusing them makes "different" read as "the same site with fewer features."

Pick a display face and a body face that are not the pair you would reach for by default, both under the SIL Open Font License so they can be self-hosted.

You cannot download font files, so:

1. Ship a stack that works immediately from system fonts and looks deliberate, with real tracking, weight and size choices, not browser defaults.
2. Write the `@font-face` blocks for your chosen faces, commented out, pointing at `fonts/`, with a comment naming the exact files to download and where from.
3. Name your recommendation in `README.md`.

Set a type scale of five or six steps as tokens. State the ratio in a comment.

## Motion

Four moments. No more. Extra animation is what makes a site read as machine-made.

1. The focus ring transit. Around 180ms, slight overshoot.
2. Page load. The hero's lines reveal in a short stagger, once, on load only.
3. Project cards on scroll. `IntersectionObserver`, fade and short rise, once per element, `unobserve` after firing.
4. Card hover and focus. One property changing, not four. Same visual state for both.

Under `prefers-reduced-motion: reduce`, the ring jumps instead of travelling, the hero renders already revealed, cards render already visible, hover is an instant state change. Check it with `matchMedia` in JavaScript as well as in CSS, because the ring and the observers are script-driven.

## Files

```
portfolio/
  index.html                 lang="nb" — hero, project list, contact
  about.html                 lang="nb"
  work/secret-library.html
  work/color.html
  work/_template.html        duplicate this to add a case study
  en/index.html              lang="en"
  en/about.html
  en/work/secret-library.html
  en/work/color.html
  en/work/_template.html
  data/projects.json         the only file edited to add a project
  css/main.css               tokens, type scale, layout, both color schemes
  js/projects.js             reads projects.json, renders the list
  js/focus-ring.js           the signature
  js/motion.js               hero stagger and scroll reveals
  new-project.html           form that outputs a valid JSON object
  js/new-project.js
  fonts/.gitkeep
  img/.gitkeep
  README.md
```

## Data

`data/projects.json`. Every user-facing string is an object keyed by language.

```json
{
  "projects": [
    {
      "id": "secret-library",
      "title": { "nb": "Det hemmelige biblioteket", "en": "The Secret Library" },
      "year": 2026,
      "role": { "nb": "Design og utvikling, alene", "en": "Design and build, solo" },
      "summary": { "nb": "...", "en": "..." },
      "tags": ["accessibility", "information architecture", "frontend"],
      "thumb": "img/secret-library.png",
      "alt": { "nb": "...", "en": "..." },
      "href": "work/secret-library.html",
      "live": "https://mathias-saetersdal.github.io",
      "repo": "https://github.com/Mathias-Saetersdal/Mathias-Saetersdal.github.io",
      "status": "published"
    }
  ]
}
```

Renderer rules:

- Language comes from `document.documentElement.lang`. Do not pass it around manually.
- `status: "draft"` means the project does not render. That is the whole editorial workflow.
- `href` stays relative to the page reading it, so `/en/index.html` resolves `work/secret-library.html` inside `/en/` with no rewriting.
- A missing `thumb` renders a typographic placeholder card, not a broken image icon. He has no screenshots yet, so this is the normal case at first and it has to look intentional.
- If the fetch fails, show a real error in the page, in the right language. Not an empty section and not a console-only failure.
- Opening `index.html` from `file://` must degrade with a readable message rather than a blank page, since `fetch` will fail there.

## Case study structure

Six sections, same order, every time. Consistency reads as judgment.

1. What it is. Two sentences, then an image.
2. The brief. What was asked for, by whom, under what constraint.
3. What I did. Decisions in order. Each one: the problem, the options, the choice, the reason.
4. What it looks like. Images with captions that say something the image cannot.
5. What I would change. Two or three specific things.
6. Facts. Role, dates, tools, collaborators, what shipped.

600 to 900 words. If a section has nothing real in it, cut the section rather than pad it.

## Secret Library case study: verified facts, use these

- A personal knowledge library for design work. One JSON file rendered as five views: a categorized card shelf, a force-directed graph, a skill tree, a paged book, and a sortable index table. Vanilla JS, no build step, no backend. 26 commits.
- One data file, five renderers. Adding an entry means appending one object. Sidebar, counts, filters, tag suggestions and the graph are all derived at load.
- The `tended` field. `added` is when an entry was written, `tended` is when it was last revisited and confirmed still true. Deliberately never backfilled, so a missing `tended` is honest rather than an oversight.
- The `weight` field, hand-set 1 to 5. A measure of how much he actually uses an entry, not of quality. Drives the shelf's default sort, with presence of a body, status and connection count as tiebreakers.
- Links are directed and backlinks derived at load. Wiring in a new entry means listing ids in its own `links`; older entries are never edited. Mutual links are deduplicated.
- The index view is also the small-screen fallback for the graph and tree below 767px, and the swap does not change `?view=`, so a link shared from a phone still opens the graph on a wider screen later.
- Status never rests on color alone. Seedling is a dashed outline, growing a half-toned fill, evergreen a filled node. The four highlight marks each have a distinct glyph as well as a color.
- Under `prefers-reduced-motion` the graph renders already settled, the book page swaps without rotating, the tree glow stops. Physics pause when the tab is hidden or the graph is off-screen.
- The data file is validated on every load. Duplicate ids, broken links, illegal enums and bad dates print as a `console.table`, and `?dev` adds a visible banner.

Leave an HTML comment at each place needing something only he can supply: what he built wrong first and rebuilt, which view nearly got cut, how long it took. Invent none of it.

## Color project case study

A university course project, graded A, presented at a color convention in Taiwan. That is every fact that exists.

Build the page with the full six-section structure and fill every section with a clearly marked placeholder naming what is missing. Do not invent a brief, a method, a finding, a convention name, a year or a collaborator. The page must be obviously unfinished and never accidentally publishable. Set its `status` to `"draft"` in `projects.json`.

## Writing rules

Both languages, every word on the site.

- No em-dashes.
- No clichés. Not "brenner for", not "passionate about", not "problem solver".
- Concrete examples instead of trait claims. Not "detail-oriented", but what he checked and what he found.
- Short active sentences. No stacked clauses.
- No superlatives.
- Sentence case headings.
- Say what a project is before saying why it matters.
- Never invent experience, users, clients, metrics or results.

The Norwegian is bokmål and must read as written by a Norwegian, not translated from English. Where a sentence only works in one language, write a different sentence rather than a stiff translation.

Contact email: use `TODO-EMAIL@example.com` and mark it clearly. His student address expires and the replacement is undecided. Do not put `mathsae@ntnu.no` anywhere.

## Adding a project later

Three things must be true, and `README.md` documents all three.

1. `new-project.html` is a local form producing a valid JSON object for `projects.json`. Both languages side by side, validates required fields and the `status` enum, warns on a duplicate `id`, outputs formatted JSON with a copy button. No backend, no writing to disk.
2. `work/_template.html` and `en/work/_template.html` are the six-section skeleton with head, nav, language toggle and footer already correct. Adding a case study is duplicate, rename, fill in.
3. `status: "draft"` hides a project until it is ready.

## Language toggle

Every page links to its exact counterpart, not to the front page. `index.html` to `en/index.html`, `work/color.html` to `en/work/color.html`. Every head gets `rel="alternate"` `hreflang` for `nb`, `en` and `x-default`. The toggle's accessible name is in the target language, and `lang` is set on the toggle itself so a screen reader pronounces "English" and "Norsk" correctly.

## Acceptance checklist

Verify each before saying you are finished, and say which ones you actually tested and how.

- Every interactive element reachable by Tab in visible order, each showing a visible indicator, no keyboard trap. The site is fully usable with `js/focus-ring.js` deleted.
- Skip link that works, first in tab order, visible on focus.
- One `h1` per page. Heading levels never skip.
- Real landmarks: `header`, `nav`, `main`, `footer`. `main` has `id="main"`.
- Every image has alt text. Decorative images have `alt=""`.
- No meaning carried by color alone.
- Text contrast at least 4.5:1, UI and focus indicator contrast at least 3:1. State measured ratios in CSS comments.
- Focus indicator meets 2.4.11: at least a 2px perimeter, not obscured.
- `prefers-reduced-motion` removes the ring transit, hero stagger and scroll reveals, in both CSS and `matchMedia`.
- Every page has correct `lang`, a unique `title` and a meta description.
- Zooms to 400% at 320px wide with no horizontal scroll and nothing clipped.
- No third-party requests. Confirm in the network panel.
- `projects.json` renders correctly with one project, with three, and with zero.

## How to work

Run `python3 -m http.server` and check your own output rather than assuming it works. Take screenshots if you can.

Commit after each working file with a real message.

In `README.md`: how to run locally, how to add a project, how to add a case study, which fonts to download and from where, and a short list of what is deliberately unfinished and waiting on him.
