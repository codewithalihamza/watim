---
name: legacy-redesign
description: Rebuild a section of this Next.js site from source art in legacy/ (PSD exports, comps, logos) — extracting a palette, converting/cropping assets, layering backgrounds, and verifying on both desktop and mobile. Use when asked to redesign, restyle, or match a page/section to files in the legacy/ folder.
---

# Legacy redesign workflow

This repo's `legacy/` folder holds old PSD exports and design comps (skyline photos,
gradients, watermarks, logos) that new sections should visually match. This skill is
the checklist for turning those exports into a working Tailwind/Next section without
burning turns on the traps below.

## 1. Inventory before building

- `Glob` / `Read` every file under `legacy/**` relevant to the section. Read the image
  files directly — don't guess content from filenames.
- Note which files are desktop vs `phone/` (mobile) variants; they are usually
  different crops/comps, not the same asset scaled.

## 2. Sample the real palette — don't eyeball it

Use `sharp` (already a devDependency here) to read exact pixel colors from a composite
export rather than guessing hex values:

```js
const sharp = require('sharp');
const {data, info} = await sharp('legacy/.../with background.jpg').raw().toBuffer({resolveWithObject: true});
const px = (xf, yf) => {
  const x = Math.round(xf * (info.width - 1)), y = Math.round(yf * (info.height - 1));
  const p = (y * info.width + x) * info.channels;
  return '#' + [data[p], data[p+1], data[p+2]].map(v => v.toString(16).padStart(2, '0')).join('');
};
```
Sample several named points (corners, center, glow area) and use those as CSS custom
properties in `globals.css`. Register any new spacing/color tokens in the `@theme
inline` block so Tailwind utility classes (`max-w-shell`, `bg-field-dark`, etc.)
actually generate — a token only in `:root` without a matching `@theme inline` entry
silently produces an empty utility rule.

## 3. Check alpha before trusting a "transparent" asset

Legacy watermark/overlay PNGs in this repo have shipped with **near-zero max alpha**
(e.g. 13/255) — the shape is there but invisible at any CSS opacity. Before wiring up
an overlay, measure it:

```js
const {data, info} = await sharp(src).ensureAlpha().raw().toBuffer({resolveWithObject: true});
let maxA = 0;
for (let i = 0; i < data.length; i += info.channels) maxA = Math.max(maxA, data[i+3]);
console.log('maxAlpha', maxA);
```
If `maxAlpha` is low, rebuild the mask by rescaling alpha to full range (see the
pattern-rebuild snippet in `references/asset-pipeline.md`) rather than cranking CSS
opacity/blend-mode, which cannot fix missing pixel data.

## 4. Asset pipeline (crop, trim, convert)

Standard moves, all via `sharp` (see `references/asset-pipeline.md` for full scripts):
- **Trim transparent padding**: `sharp(src).trim({threshold: 1})` — but note faint
  outline strokes count as content; if the trimmed box looks too big, check per-pixel
  alpha (`>200`) instead of relying on `.trim()`'s heuristic.
- **Convert to webp**: `sharp(src).webp({quality: 82-90}).toFile(out)` — cuts PNG/JPG
  size by 10-20x for hero backgrounds.
- **Resize oversized mobile assets**: `sharp(src).resize(1080).webp({quality: 80})`.
- Put finished assets under `public/brand/` (or similar), never serve straight out of
  `legacy/`.

## 5. Layer order matches the PSD

Recreate the composite as stacked absolutely-positioned layers in a `*Background.tsx`
component, bottom to top: flat field color → photo/skyline → gradient bloom → live CSS
radial gradient (for a "breathing" effect the static PSD can't have) → watermark →
vignette. Use separate desktop/mobile `<Image>` pairs (`hidden sm:block` /
`sm:hidden`) rather than one asset stretched with CSS — the two source comps are
different crops.

## 6. Grid/flex overflow guard

When a hero splits into image + copy columns, always add `min-w-0` to flex/grid
children and `grid-cols-[minmax(0,1fr)]` (not bare `1fr`) — without it, intrinsic
content width (long headline, `max-w-lg` paragraph) silently widens the track past the
viewport on mobile. This is easy to misdiagnose as a screenshot bug (see below).

## 7. Verification loop — avoid the stale-server trap

**Always fully restart the dev/prod server after CSS/component changes before
screenshotting.** A `next dev` process left running from a previous turn serves stale
`.next` CSS bundles that silently omit new Tailwind classes — this looks exactly like
a layout bug (content appears shifted/overflowing) and wastes many turns misdiagnosing
grid/flex issues that don't exist. Sequence:

```bash
taskkill //F //IM node.exe 2>/dev/null   # Windows; kill ALL node first
rm -rf .next
npx next build                            # or `next dev -p <port>` in background
```
Then poll `curl -s -o /dev/null -w "%{http_code}" http://localhost:<port>/` until 200,
and only then screenshot.

**Screenshot with headless Chrome** (no puppeteer needed if Chrome is installed):
```bash
"/c/Program Files/Google/Chrome/Application/chrome.exe" \
  --headless --disable-gpu --hide-scrollbars \
  --window-size=1440,900 --screenshot=<out.png> \
  --virtual-time-budget=9000 http://localhost:<port>/
```
**Known quirk**: this headless invocation on Windows often floors the effective
viewport around ~500px even when a smaller `--window-size` is requested, and the
result is scaled to the requested output size. Don't conclude "mobile is overflowing"
from a downscaled screenshot alone — instrument the page (temporary client component
logging `document.documentElement.clientWidth` vs `scrollWidth`) to confirm real
overflow before changing layout code. `scrollWidth === clientWidth` means no overflow;
what you're seeing is a rendering/scaling artifact.

Always check both a small width (~500px, the practical floor for this tool) and
desktop (~1440px), and compare against the legacy comp images side by side.

## 8. Build check

Finish with `npx next build` — confirms no type errors and that Tailwind actually
generated the classes you're relying on (grep the emitted CSS chunk under
`.next/static/chunks/*.css` for a class name if something looks like it isn't
applying).
