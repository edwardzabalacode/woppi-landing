# Reference: Portfolio with GSAP Hero and Loading Screen

Pattern: Next.js dark portfolio with animated loading screen, GSAP entrance, cycling roles, glassmorphic navbar pill with gradient accent, scroll indicator, and background video with vignette.

Best for: Designer portfolios, creative directors, multi-disciplinary professionals.

---

Build a Next.js 14 portfolio landing page with a full-screen hero section and an animated loading screen. The entire site uses a dark theme.

Tech Stack:
Next.js 14 (App Router) + TypeScript
Tailwind CSS v3 with CSS custom properties for theming
GSAP for hero entrance animations
Framer Motion (AnimatePresence, motion) for the loading screen
Google Fonts: Inter (body, variable --font-body) and Instrument Serif (display/headings, variable --font-display, weight 400, italic)

Dark Theme — CSS Variables

Set on [data-theme="dark"] (force dark mode, no toggle):

--bg: #0a0a0a
--surface: #141414
--text: #f5f5f5
--muted: #888888
--accent: #f5f5f5
--stroke: #1f1f1f

Map these in Tailwind config as bg, surface, text, muted, accent, stroke color tokens. Font families: font-display → var(--font-display), font-body → var(--font-body).

Accent Gradient (used everywhere):
linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)
Used for: navbar logo ring, button hover borders, "Say hi" hover ring, loading screen progress bar.

Component 1: Loading Screen

A full-screen loader (fixed inset-0 z-[9999]) with solid bg-bg background. Runs for 2.7 seconds, then fades out with Framer Motion exit={{ opacity: 0 }} over 0.6s.

Layout (3 elements):

Top-left: "Portfolio" — text-xs md:text-sm, text-muted, uppercase, tracking-[0.3em]. Positioned top-8 left-8 md:top-12 md:left-12. Animates in: y: -20 → 0, opacity: 0 → 1, duration 0.6s, delay 0.1s.

Center: Three words rotate in sequence — "Design" → "Create" → "Inspire" — one every 900ms. Styled text-4xl md:text-6xl lg:text-7xl font-display italic text-text/80. Uses AnimatePresence mode="wait", each word enters from y: 20, exits to y: -20, duration 0.4s, easing [0.4, 0, 0.2, 1].

Bottom-right: Counter 000 → 100 over 2.7s using requestAnimationFrame. Styled text-6xl md:text-8xl lg:text-9xl font-display text-text tabular-nums. Positioned bottom-8 right-8 md:bottom-12 md:right-12. Animates in from y: 20.

Progress bar: 3px line at very bottom. Track: bg-stroke/50. Fill: accent gradient (#89AACC → #4E85BF) with glow (box-shadow: 0 0 8px rgba(137, 170, 204, 0.35)). scaleX(0) → scaleX(1) via transform-origin: left.

After counter hits 100, wait 400ms, call onComplete(). Parent toggles isLoading, fades loader out and page in (opacity 0 → 1, 0.5s ease-out).

Component 2: Navbar (inside Hero, fixed)

Floating pill navbar, fixed top-0 left-0 right-0, centered with flex justify-center, z-50.

Pill container: inline-flex, rounded-full, backdrop-blur-md, border border-white/10, bg-surface, px-2 py-2. On scroll past 100px, adds shadow-md shadow-black/10.

Contents (left to right):

Logo — 36x36px circle (w-9 h-9) with accent gradient as 2px ring (p-[2px]). Inside: bg-bg with "JA" in text-[13px] font-display italic tracking-tighter. Hover: gradient rotates, text scales 110%.

Divider — w-px h-5 bg-stroke mx-1 (hidden on mobile)

Nav links: "Home", "Work", "Resume" — text-xs sm:text-sm, rounded-full, px-3 sm:px-4 py-1.5 sm:py-2. Active: text-text bg-stroke/50. Hover: text-text bg-stroke/50.

Divider

"Say hi ↗" button — same pill styling, gradient border ring on hover: span with absolute inset-0 accent gradient, opacity-0 → opacity-100, margin: -2px. Inner span: bg-surface backdrop-blur-md to reveal only gradient edge.

Divider

Component 3: Hero Section

Full viewport height (min-h-screen), flex column, centered content.

Background video layer (absolute inset-0 z-0):
<video> autoPlay muted loop playsInline, with .avif poster as fallback.
Abstract dark fluid/wave animation in deep blue and black tones.
Centered: absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover.
Overlay: absolute inset-0 bg-black/20.
Bottom fade: absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent.

Content (centered, z-10, text-center):

Eyebrow: "COLLECTION '26" — text-xs text-muted uppercase tracking-[0.3em] mb-8. Class blur-in.

Name: "Michael Smith" — text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text mb-6. Class name-reveal.

Role line: A [Role] lives in Chicago. — text-lg md:text-xl lg:text-2xl text-muted mb-10. [Role] cycles "Creative" → "Fullstack" → "Founder" → "Scholar" every 2s, styled font-display italic text-text with animate-fade-in (opacity 0→1, translateY 8px→0, 0.4s ease-out).

Bio: "Designing seamless digital interactions by focusing on the unique nuances which bring systems to life." — text-sm md:text-base text-muted leading-relaxed max-w-md mb-12.

CTA buttons (side by side):
"See Works": px-7 py-3.5 bg-text text-bg text-sm rounded-full. Hover: scale-105, gradient border ring appears, text switches to text-text.
"Reach out...": px-7 py-3.5 bg-bg text-text text-sm rounded-full border-2 border-stroke. Same gradient hover border.

Scroll indicator (bottom center, absolute bottom-8):
"SCROLL" — text-xs text-muted uppercase tracking-[0.2em].
Below: thin line (w-px h-10 bg-stroke) with animated dot: translateY(-100%) → translateY(200%), 1.5s infinite.

GSAP Entrance Animations (Hero):
Timeline (power3.out):
.name-reveal: opacity 0→1, y 50→0, 1.2s, at 0.1s.
.blur-in: opacity 0→1, blur(10px)→blur(0px), y 20→0, 1s, stagger 0.1s, at 0.3s.

Key CSS Animations:

```css
@keyframes scroll-down {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(200%); }
}
.animate-scroll-down { animation: scroll-down 1.5s ease-in-out infinite; }
@keyframes fade-in {
  0% { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
```
