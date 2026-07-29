# Asset pipeline scripts

Copy/adapt these `node -e "..."` one-liners (sharp is already a devDependency in this
repo). Run from the repo root.

## Trim transparent padding from a logo/cutout

```js
const sharp = require('sharp');
(async () => {
  const src = 'legacy/.../logo.png';
  const {data, info} = await sharp(src).ensureAlpha().raw().toBuffer({resolveWithObject: true});
  let minX = 1e9, minY = 1e9, maxX = -1, maxY = -1;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const a = data[(y * info.width + x) * info.channels + 3];
      if (a > 200) { // opaque-pixel threshold; raise/lower per asset
        if (x < minX) minX = x; if (x > maxX) maxX = x;
        if (y < minY) minY = y; if (y > maxY) maxY = y;
      }
    }
  }
  await sharp(src)
    .extract({left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1})
    .png()
    .toFile('public/brand/mark.png');
})();
```

## Rebuild a near-invisible alpha mask (watermark fix)

Legacy overlay PNGs sometimes have alpha maxing out around 10-40/255 — the shape is
present but effectively transparent. Rescale it to full range instead of raising CSS
opacity (which can't recover missing data):

```js
const sharp = require('sharp');
(async () => {
  const src = 'legacy/.../pattern.png';
  const maxA = 13; // measured max alpha in the source — check first!
  const {data, info} = await sharp(src).ensureAlpha().raw().toBuffer({resolveWithObject: true});
  const px = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0, j = 0; i < data.length; i += 4, j += 4) {
    const a = Math.min(255, Math.round(data[i + 3] / maxA * 255));
    px[j] = 255; px[j+1] = 255; px[j+2] = 255; px[j+3] = a; // white glyph, real alpha
  }
  await sharp(px, {raw: {width: info.width, height: info.height, channels: 4}})
    .webp({quality: 90})
    .toFile('public/brand/pattern.webp');
})();
```
After this, a plain low CSS opacity (e.g. `opacity-[0.1]`) on the `<Image>` is enough —
no `mix-blend-screen` needed.

## Soft "cutout" fade at one edge (e.g. bottom of a subject cutout)

Fades alpha smoothly over the last N% of an axis instead of a hard edge:

```js
const sharp = require('sharp');
(async () => {
  const src = 'public/brand/man-mobile.webp';
  const {data, info} = await sharp(src).ensureAlpha().raw().toBuffer({resolveWithObject: true});
  const {width: w, height: h, channels: ch} = info;

  const fadeStart = Math.round(h * 0.85); // fade begins 85% down (last 15% fades)
  const fadeHeight = h - fadeStart;
  const softness = 0.70; // 0 = no fade, 1 = fades fully to transparent at the edge

  const out = Buffer.from(data);
  for (let y = fadeStart; y < h; y++) {
    const t = (y - fadeStart) / fadeHeight;
    const eased = t * t * (3 - 2 * t); // smoothstep, avoids a linear/mechanical look
    const mult = 1 - eased * softness;
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * ch;
      out[i + 3] = Math.round(out[i + 3] * mult);
    }
  }
  await sharp(out, {raw: {width: w, height: h, channels: ch}})
    .webp({quality: 90})
    .toFile('public/brand/man-mobile.webp');
})();
```

Always render a quick preview (composite onto a flat brand-color background and open
with `Read`) before overwriting the real asset — it's easy to pick a `fadeStart` too
high and eat into content that should stay solid (torso/arms, not just the hem).

```js
await sharp({create: {width: w, height: h, channels: 4, background: '#164152'}})
  .composite([{input: 'public/brand/man-mobile-fade-test.webp'}])
  .png()
  .toFile('<scratchpad>/fade-preview.png');
```

## Convert + compress for the web

```js
const sharp = require('sharp');
await sharp('legacy/.../background.png').webp({quality: 82}).toFile('public/brand/gradient.webp');
// oversized mobile source: also downscale
await sharp('legacy/.../phone/background.webp').resize(1080).webp({quality: 80}).toFile('public/brand/gradient-mobile.webp');
```

## Inspect any image's alpha stats before deciding what to do

```js
const sharp = require('sharp');
(async () => {
  const {data, info} = await sharp('path/to/file.png').ensureAlpha().raw().toBuffer({resolveWithObject: true});
  let minA = 255, maxA = 0, opaque = 0;
  for (let i = 0; i < data.length; i += info.channels) {
    const a = data[i + 3];
    if (a < minA) minA = a;
    if (a > maxA) maxA = a;
    if (a > 10) opaque++;
  }
  console.log('size', info.width + 'x' + info.height);
  console.log('alpha range', minA, '-', maxA);
  console.log('coverage', (opaque / (info.width * info.height) * 100).toFixed(1) + '%');
})();
```
