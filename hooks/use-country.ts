import { useSyncExternalStore } from 'react';

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function subscribe(callback: () => void) {
  // Re-check on visibility change (e.g. user returns to tab)
  document.addEventListener('visibilitychange', callback);
  return () => document.removeEventListener('visibilitychange', callback);
}

function getSnapshot(): string {
  return getCookie('geo-country') ?? 'US';
}

function getServerSnapshot(): string {
  return 'US';
}

/**
 * Returns the 2-letter ISO country code set by the middleware.
 * Falls back to "US" if cookie is missing (local dev).
 */
export function useCountry(): string {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
