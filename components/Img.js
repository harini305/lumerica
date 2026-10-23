import { getImage } from '@/lib/images';

// Responsive image from the pre-sized WebP set. No Next.js image optimisation
// is involved (images.unoptimized), so this renders a plain <img> with srcset.
// Pass alt="" for decorative images.
export default function Img({ src, alt, sizes = '100vw', priority = false, className, style, position }) {
  const img = getImage(src);
  const srcSet = img.srcs.map((s) => `${s.src} ${s.w}w`).join(', ');
  const fallback = img.srcs[Math.min(1, img.srcs.length - 1)].src;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={fallback}
      srcSet={srcSet}
      sizes={sizes}
      width={img.w}
      height={img.h}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      className={className}
      style={position ? { objectPosition: position, ...style } : style}
    />
  );
}
