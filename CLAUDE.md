# CLAUDE.md

Standing rules for this folder. They apply to every session, not just the first build.

## The project

Portfolio site for Mathias Sætersdal, interaction designer in Bergen. His specialty is accessibility and WCAG, which he taught as a student assistant. The site is the proof of that claim, so an accessibility failure here is worse than an ugly page.

`BUILD.md` holds the original build spec and the design reasoning. Read it when a change touches the design direction.

## Technical rules

- Vanilla HTML, CSS and JavaScript. No framework, no bundler, no build step, no npm, no backend. Install nothing.
- Every path relative. The folder must work locally, at a repo root, and in a subdirectory, unchanged.
- No third-party requests. No analytics, no trackers, no CDN, no Google Fonts. Everything the site loads is a file in this folder.
- WCAG 2.2 AA is the floor.
- Bilingual. Norwegian at the root, English under `/en/`. One directory per language. `lang` correct per document.
- Works on a phone. Zooms to 400% at 320px wide without horizontal scroll.

## Design rules

- The signature is the travelling keyboard focus indicator. Do not weaken it, do not hide it, do not let a redesign quietly remove it.
- Everything else stays quiet. One column, generous margins, hierarchy from type and space rather than boxes and borders.
- Seven motion moments only: the focus ring transit, the hero stagger on load, the scroll reveal on cards, card hover, the collapsing hero on scroll, the pointer-tracked stroke on cards and buttons, and the pointer-tracked fill on cards. Do not add an eighth.
- `prefers-reduced-motion: reduce` disables all seven, checked in CSS and in `matchMedia`.
- Colors are tokens in `css/main.css`, each commented with its measured contrast ratio. Never hardcode a hex outside the token block.
- Do not use Bricolage Grotesque, Atkinson Hyperlegible or JetBrains Mono. Those belong to his other site.

## Writing rules

Every word on the site, both languages.

- No em-dashes.
- No clichés. Not "brenner for", not "passionate about", not "problem solver".
- Concrete examples instead of trait claims. Not "detail-oriented", but what he checked and what he found.
- Short active sentences. No stacked clauses.
- No superlatives.
- Sentence case headings.
- Say what a project is before saying why it matters.
- Never invent experience, users, clients, metrics or results. If a fact is not in the repo, in `BUILD.md`, or given by him in this session, ask instead of writing it.

Norwegian is bokmål and must read as written by a Norwegian, not translated. Where a sentence only works in one language, write a different sentence.

## Content rules

- Adding a project means one object in `data/projects.json` and one duplicated case study file. Nothing else. If a change would break that, say so before making it.
- `status: "draft"` keeps a project off the front page.
- Every image gets alt text written by him, not generated. Leave a marked placeholder rather than inventing one.
- `TODO-EMAIL@example.com` is the contact address until he decides on the real one. Never write `mathsae@ntnu.no`.

## How to work here

- Check your own output. Run `python3 -m http.server` and look at it rather than assuming.
- Commit after each working change with a real message.
- One decision at a time. Do not present five options when one is obviously right.
- Say what you could not verify rather than filling the gap.
