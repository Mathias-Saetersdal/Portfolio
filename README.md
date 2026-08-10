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

## Favicon

`img/icon.svg` is the site's keyboard focus ring, reduced to one shape:
a filled rounded square with a centred rounded square outline in the
same stroke width as the real focus indicator. Colours are the
`--ground` and `--signal` tokens from `css/main.css`, hard coded as hex
since a favicon has no inherited colour context. It has its own
`prefers-color-scheme: dark` media query and swaps the same way the
site does. Contrast between background and stroke is 8.49:1 in light
mode and 8.12:1 in dark mode, both measured in the SVG's own comment
and far past the 3:1 non-text floor.

Two PNGs are generated from it, both committed since there is no build
step to make them on the fly:

- `img/icon-32.png`, a plain 32×32 raster of `img/icon.svg`.
- `img/apple-touch-icon.png`, 180×180. iOS ignores alpha and applies
  its own corner mask, so this variant uses a full-bleed square
  background (no rounded corners baked in, no transparency) and about
  10% more padding around the ring than the SVG has, so the ring does
  not sit too close to whatever mask iOS applies. It is fixed to the
  light palette; touch icons have no theme context to switch on.

To regenerate after an edit to `img/icon.svg`:

```
sips -s format png img/icon.svg --out img/icon-32.png
```

For the apple touch icon, `sips` will not add padding or flatten
corners on its own, so build a small variant first (values below match
the current mark; recompute if the ring geometry changes):

```
cat > /tmp/icon-apple-source.svg <<'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect x="0" y="0" width="32" height="32" fill="#e9ebe7"/>
  <rect x="5.8" y="5.8" width="20.4" height="20.4" rx="3"
        stroke-width="5" fill="none" stroke="#4a2e8c"/>
</svg>
EOF
sips -s format png -z 180 180 /tmp/icon-apple-source.svg \
  --out img/apple-touch-icon.png
```

Verify afterwards that both PNGs are the right pixel size
(`sips -g pixelWidth -g pixelHeight img/icon-32.png`) and that the
touch icon has no transparent pixels.

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
