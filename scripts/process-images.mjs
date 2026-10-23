// One-off image pipeline: reads the original downloaded assets in
// docs/source-audit/assets (never modified) and writes resized WebP
// derivatives to public/images plus a manifest at data/images.json.
//
//   node scripts/process-images.mjs           process every source image
//   node scripts/process-images.mjs --prune   delete outputs no source file references
//   node scripts/process-images.mjs --prune-unused <usage.json>
//                                     delete variants browsers never select (usage.json
//                                     lists the /images/ paths recorded on every route
//                                     across screen sizes) and drop them from the manifest
//   node scripts/process-images.mjs --reencode   re-encode the manifest's variants from the originals

import { readdir, readFile, writeFile, mkdir, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const srcDir = path.join(root, 'docs/source-audit/assets/images');
const outDir = path.join(root, 'public/images');
const manifestPath = path.join(root, 'data/images.json');
const manifestCsv = path.join(root, 'docs/source-audit/04-assets-manifest.csv');

const WIDTHS = [480, 960, 1600];
const QUALITY = 72;
// Slower encoder settings: a few percent smaller at the same visual quality.
const WEBP = { quality: QUALITY, effort: 6, smartSubsample: true };

// Original file for each key, from the downloaded Phase 1 assets.
async function originals() {
  const map = {};
  for (const f of (await readdir(srcDir)).filter((n) => /\.(jpe?g|png)$/i.test(n))) map[keyFromFilename(f)] ??= path.join(srcDir, f);
  return map;
}

async function pruneUnused(usagePath) {
  const { used, og = [] } = JSON.parse(await readFile(usagePath, 'utf8'));
  const keep = new Set([...used, ...og]);
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  let files = 0, bytes = 0, keys = 0;
  for (const [key, img] of Object.entries(manifest)) {
    const kept = [];
    for (const v of img.srcs) {
      if (keep.has(v.src)) { kept.push(v); continue; }
      const file = path.join(root, 'public', v.src);
      bytes += (await stat(file).catch(() => ({ size: 0 }))).size;
      await rm(file, { force: true });
      files++;
    }
    if (kept.length) img.srcs = kept;
    else { delete manifest[key]; keys++; }
  }
  await writeFile(manifestPath, JSON.stringify(manifest, null, 1));
  console.log(`removed ${files} unused variants (${(bytes / 1e6).toFixed(1)} MB), ${keys} images with no used variant`);
}

async function reencode() {
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  const src = await originals();
  let before = 0, after = 0;
  for (const [key, img] of Object.entries(manifest)) {
    for (const v of img.srcs) {
      const out = path.join(root, 'public', v.src);
      before += (await stat(out)).size;
      const buf = await sharp(src[key]).rotate().resize({ width: v.w }).webp(WEBP).toBuffer();
      const old = await readFile(out);
      // Keep whichever encode is smaller.
      if (buf.length < old.length) await writeFile(out, buf);
      after += Math.min(buf.length, old.length);
    }
  }
  console.log(`re-encoded: ${(before / 1e6).toFixed(1)} MB -> ${(after / 1e6).toFixed(1)} MB`);
}

// "Lumeria-Maria-_-Abz-01376-2048x1368.jpg" -> "lumeria-maria-abz-01376"
export function keyFromFilename(name) {
  return name
    .replace(/\.[a-z0-9]+$/i, '')
    .replace(/-\d{2,4}x\d{2,4}$/, '')
    .replace(/^@/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function parseCsv(text) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
    else if (c !== '\r') field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const [head, ...body] = rows;
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ''])));
}

async function prune() {
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  const sources = [];
  for (const dir of ['app', 'components', 'data', 'lib']) {
    const walk = async (d) => {
      for (const e of await readdir(d, { withFileTypes: true })) {
        const p = path.join(d, e.name);
        if (e.isDirectory()) await walk(p);
        else if (/\.(js|jsx|json)$/.test(e.name) && p !== manifestPath) sources.push(await readFile(p, 'utf8'));
      }
    };
    await walk(path.join(root, dir)).catch(() => {});
  }
  // Event bodies reference original upload URLs; map them to keys as lib/images does.
  const eventContent = await readFile(path.join(root, 'data/event-content.json'), 'utf8');
  const eventKeys = [...eventContent.matchAll(/https:\/\/lumeriayoga\.com\/wp-content\/uploads\/[^"]+?\.(?:jpe?g|png)/gi)].map(
    (m) => `'${keyFromFilename(decodeURIComponent(m[0].split('/').pop()))}'`,
  );
  const haystack = [...sources, ...eventKeys].join('\n');
  let removed = 0;
  for (const key of Object.keys(manifest)) {
    if (haystack.includes(`'${key}'`) || haystack.includes(`"${key}"`)) continue;
    for (const v of manifest[key].srcs) await rm(path.join(root, 'public', v.src), { force: true });
    delete manifest[key];
    removed++;
  }
  await writeFile(manifestPath, JSON.stringify(manifest, null, 1));
  console.log(`pruned ${removed} unused images, ${Object.keys(manifest).length} kept`);
}

async function main() {
  const flag = process.argv.indexOf('--prune-unused');
  if (flag !== -1) return pruneUnused(process.argv[flag + 1]);
  if (process.argv.includes('--reencode')) return reencode();
  if (process.argv.includes('--prune')) return prune();
  await mkdir(outDir, { recursive: true });
  await mkdir(path.dirname(manifestPath), { recursive: true });

  // Alt text from the WordPress media library, where it exists.
  const alts = {};
  for (const r of parseCsv(await readFile(manifestCsv, 'utf8'))) {
    if (r.local_path && r.alt_text) alts[keyFromFilename(path.basename(r.local_path))] = r.alt_text;
  }

  const files = (await readdir(srcDir)).filter((f) => /\.(jpe?g|png)$/i.test(f));
  const manifest = {};
  let bytesIn = 0, bytesOut = 0;
  for (const file of files) {
    const key = keyFromFilename(file);
    if (manifest[key]) continue; // a second size variant of the same original
    const input = path.join(srcDir, file);
    bytesIn += (await stat(input)).size;
    const meta = await sharp(input).metadata();
    // EXIF orientations 5-8 are rotated by 90 degrees once .rotate() applies them.
    const [width, height] = meta.orientation >= 5 ? [meta.height, meta.width] : [meta.width, meta.height];
    const targets = WIDTHS.filter((w) => w < width);
    if (!targets.length || width - targets.at(-1) > 200) targets.push(Math.min(width, 2048));
    const srcs = [];
    for (const w of targets) {
      const out = `images/${key}-${w}.webp`;
      const info = await sharp(input).rotate().resize({ width: w }).webp(WEBP).toFile(path.join(root, 'public', out));
      bytesOut += info.size;
      srcs.push({ w, src: `/${out}` });
    }
    manifest[key] = { w: width, h: height, srcs, ...(alts[key] ? { alt: alts[key] } : {}) };
  }
  await writeFile(manifestPath, JSON.stringify(manifest, null, 1));
  console.log(`${Object.keys(manifest).length} images: ${(bytesIn / 1e6).toFixed(1)} MB in -> ${(bytesOut / 1e6).toFixed(1)} MB of derivatives`);
}

main().catch((e) => { console.error(e); process.exit(1); });
