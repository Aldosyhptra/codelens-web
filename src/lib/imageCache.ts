// Image cache utility for caching image sources client-side.
// Uses an in-memory Map with TTL (time-to-live) to avoid re-fetching images.

const CACHE_TTL = 5 * 60 * 1000; // 5 minutes
const imageCache = new Map<string, { src: string; timestamp: number }>();

/**
 * Get a cached image source if it exists and hasn't expired.
 * Returns null if not found or expired.
 */
export function getCachedImageSrc(src: string): string | null {
  const entry = imageCache.get(src);
  if (!entry) return null;

  const age = Date.now() - entry.timestamp;
  if (age < CACHE_TTL) {
    return entry.src;
  }

  // Cache expired, remove it
  imageCache.delete(src);
  return null;
}

/**
 * Add an image source to the cache with the current timestamp.
 */
export function setCachedImage(src: string): void {
  imageCache.set(src, { src, timestamp: Date.now() });
}

/**
 * Get the current cache TTL in milliseconds.
 */
export function getCacheTTL(): number {
  return CACHE_TTL;
}

/**
 * Clear the entire image cache. Useful on logout or session reset.
 */
export function clearImageCache(): void {
  imageCache.clear();
}

/**
 * Preload a list of critical images on app start.
 * Creates Image objects and caches their sources.
 */
export function preloadImages(srcs: string[]): void {
  srcs.forEach((src) => {
    if (typeof window !== "undefined") {
      const img = new Image();
      img.src = src;
      setCachedImage(src);
    }
  });
}
