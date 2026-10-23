import manifest from '@/data/images.json';

// Look up a processed image by key (see scripts/process-images.mjs).
export function getImage(key) {
  const img = manifest[key];
  if (!img) throw new Error(`Unknown image "${key}". Run npm run images or check the key.`);
  return img;
}

export function hasImage(key) {
  return Boolean(manifest[key]);
}

// Key for an original WordPress upload URL, matching keyFromFilename() in the pipeline.
export function keyFromUrl(url) {
  const name = decodeURIComponent(url.split('?')[0].split('/').pop() || '');
  return name
    .replace(/\.[a-z0-9]+$/i, '')
    .replace(/-\d{2,4}x\d{2,4}$/, '')
    .replace(/^@/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function largestSrc(key) {
  return getImage(key).srcs.at(-1).src;
}
