import posthog from 'posthog-js';

export function initPostHog() {
  if (typeof window === 'undefined') return;

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return;

  posthog.init(key, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://us.i.posthog.com',
    autocapture: true,
    capture_pageview: false, // We handle this manually with Next.js router
    capture_pageleave: true,
    persistence: 'localStorage+cookie',
    loaded(ph) {
      if (process.env.NODE_ENV === 'development') {
        ph.opt_out_capturing();
      }
    },
  });

  return posthog;
}
