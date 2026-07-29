# Portfolio, Mathias Sætersdal

Vanilla HTML, CSS and JavaScript. No framework, no build step, no npm,
no backend, no third-party requests. Norwegian at the root, English
under `en/`. WCAG 2.2 AA is the floor.

## Run locally

```
python3 -m http.server
```

Then open http://localhost:8000. A server is needed because the project
list is fetched from `data/projects.json`; opened straight from
`file://` the pages explain this instead of rendering the list.

## Add a project

1. Open `new-project.html` on the local server. Fill the form, press
   "Lag JSON", copy the object.
2. Paste it into the `projects` array in `data/projects.json`.
3. Keep `"status": "draft"` until the project is ready. Drafts never
   render on the front page. Set `"published"` to go live.

That is the whole workflow. Nothing else changes.

## Add a case study

1. Copy `work/_template.html` to `work/<id>.html`.
2. Copy `en/work/_template.html` to `en/work/<id>.html`.
3. Replace every `TODO-TITLE`/`TODO-TITTEL` and `TODO-ID` in both files.
4. Fill the six sections. Cut a section rather than pad it.

## Fonts

The recommended faces are not in the repo yet. The site runs on
deliberate system stacks until they are.

1. Download **Familjen Grotesk** and **Literata** from Google Fonts
   (fonts.google.com, "Download family"). Both are under the SIL Open
   Font License.
2. Put these files in `fonts/`:
   - `FamiljenGrotesk[wght].ttf`
   - `Literata[opsz,wght].ttf`
   - `Literata-Italic[opsz,wght].ttf`
3. Uncomment the `@font-face` blocks at the top of `css/main.css`.

## Deliberately unfinished, waiting on Mathias

- The contact address is `TODO-EMAIL@example.com` everywhere until the
  real one is decided.
- No images exist. Project entries render as pure type on purpose. All
  alt text is written by Mathias, never generated.
- The color case study (`work/color.html`) is a marked draft: every
  section names what is missing. Its project stays `"draft"`.
- The Secret Library case study has two sections cut (what it looks
  like, what I would change) and HTML comments marking what only
  Mathias can supply.
- `about.html` has comments marking the teaching details and a future
  CV link.
- The font files, see above.
