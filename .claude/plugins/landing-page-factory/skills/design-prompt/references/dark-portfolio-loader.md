# Reference: Dark Portfolio with Loading Screen

Pattern: Editorial dark portfolio with animated loading screen, GSAP hero entrance, cycling roles, glassmorphic cards, and technical specs sidebar.

Best for: Developer portfolios, personal brands, creative professionals.

---

Build a React + Vite + TypeScript single-page portfolio with Tailwind CSS v4, Motion (framer-motion), and Lucide React icons. The entire site is black (bg-black) with white text, ultra-premium, editorial, and cinematic. There are 3 views: a Loading Screen, a Hero Section, and a Project Page, all driven by AnimatePresence crossfades.

Fonts & Design Tokens

Import these Google Fonts:

Space Grotesk (300–700) → --font-sans (body text)
Orbitron (400–900) → --font-display (headings, labels)
JetBrains Mono (400–500) → --font-mono (specs, tags, tiny labels)
Instrument Serif (italic) → --font-loader (loading screen words + counter)

Custom colors: --color-brand-orange: #F27D26, --color-bg: #0a0a0a, --color-text: #f5f5f5, --color-muted: #888888, --color-stroke: #1f1f1f. Add a .text-glow utility with text-shadow: 0 0 10px rgba(255,255,255,0.3).

1. Loading Screen

A fixed, fullscreen overlay on bg-bg (#0a0a0a), z-index 9999. Contains 4 elements:

Top-left label: "Portfolio" — text-xs md:text-sm, muted color, uppercase, tracking-[0.3em]. Fades in from y:-20 with 0.1s delay.

Center rotating words: Cycle through "Design" → "Create" → "Inspire" every 900ms using AnimatePresence mode="wait". Each word fades in from y:20, exits to y:-20. Font: font-loader italic, sizes text-4xl md:text-6xl lg:text-7xl, color text-text/80.

Bottom-right counter: Counts from 000 to 100 over 2700ms using requestAnimationFrame. Font: font-loader, sizes text-6xl md:text-8xl lg:text-9xl, tabular-nums, padded to 3 digits.

Bottom progress bar: Full-width, 3px tall. Track: bg-stroke/50. Fill: gradient from-[#89AACC] to-[#4E85BF] with a subtle blue glow (box-shadow: 0 0 8px rgba(137,170,204,0.35)). Scales from scaleX(0) to scaleX(1) synced to the counter.

After reaching 100%, wait 400ms, then call onComplete. The entire screen exits with opacity: 0 over 0.6s with easing [0.4, 0, 0.2, 1].

2. Hero Section (Main View)

Full-screen layout with a looping background video (autoPlay loop muted playsInline, object-cover). The video URL is a cinematic dark/moody reel. On desktop, the video is absolutely positioned filling the viewport. On mobile, it's a 60vh block at the top.

Overlays:

Desktop: radial-gradient vignette — bg-[radial-gradient(ellipse_at_center,transparent_70%,rgba(0,0,0,0.7)_100%)]
Mobile: top-to-bottom gradient — from-black/60 via-transparent to-black

Top-right navigation: A page indicator showing 1/01 in text-xs font-mono tracking-widest, a thin horizontal line (24px on desktop, 16px on mobile) with bg-white/20 and a white quarter-fill, then a "Next Project" button (text-[10px] font-mono tracking-[0.2em] uppercase). The indicator group is hidden on very small screens.

Main content uses a container mx-auto with px-6 md:px-12, min-h-screen md:h-screen, flex column justify-between, in a 12-column grid:

Left column (span 9):

Title: "Viktor-O // \n Modern Architect" — sizes text-[40px] sm:text-[56px] md:text-[72px], leading-[1] md:leading-[0.9], font-medium tracking-tighter uppercase, font-display. Max-width ~max-w-xl. Animates in from x:-20.

Subtitle: "Developed with high-end skills and a pixel-perfect frame for those who don't just browse the web—they build it. Code your dreams...." — text-sm text-white font-light max-w-md leading-relaxed. Fades in with 0.2s delay.

3 icon buttons: Snowflake, Maximize, Zap from Lucide. Each is a 40px circle, border border-white/20, icons 16px in text-white/80. Hover: border-white/60.

Right column (span 3) — pushed down with md:pt-32:

"Technical Specs" label: text-[10px] font-mono tracking-[0.3em] uppercase font-display.

4 spec rows: Stack → React + Node + SQL, Logic → V8 - Runtime Logic, Uptime → 99.9% High-Avail, Scale → Responsive Modern Layout. Each row is flex justify-between items-end with border-b border-white/20 pb-2, labels and values in text-xs. Animates in from y:20 with 0.6s delay.

Bottom section — flex row on desktop, column on mobile:

Product Card (left): Glassmorphic card — bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-4 md:p-6. Contains a 80x80px (md: 96x96) thumbnail from picsum.photos with rounded-2xl, an orange gradient overlay (from-brand-orange/40). Title: "VK-01: React Engine" in text-xs font-mono tracking-widest uppercase font-display. Description: "High-performance builds and a clean stack for speed and stability." in text-[11px]. A "View Project" button: text-[10px] font-mono uppercase tracking-widest border border-white/20 rounded-lg px-4 py-2, hover fills white with black text. Card hover: bg-white/10. Animates from y:40 with 0.8s delay.

Feature Tags (right): A pill-bar container — bg-white/10 backdrop-blur-md rounded-2xl md:rounded-full p-2 border border-white/5. Contains 4 tags: "TS/JS" (filled white bg, black text, rounded-full), "V1", "Full-Stack", "Cloud-Ready" (all outline with border-white/20 rounded-full). All tags: text-[10px] font-mono tracking-widest px-3-4 py-2. Fades in with 1s delay.

3. Project Page (Second View)

Transitions from hero via AnimatePresence mode="wait". Same structure: fullscreen looping different background video with the same overlay treatment (but vignette uses transparent_50% and rgba(0,0,0,0.8) — slightly stronger). Mobile video height: 50vh.

Top-right nav: "← Back Home" button with ArrowLeft icon, same micro-typography as hero nav.

Main content — 12-column grid, pt-12 md:pt-48:

Left column (span 8):

Mega title: "PROJECTY \n ENGINE" — sizes text-[60px] sm:text-[80px] md:text-[120px], leading-[0.85] font-medium tracking-tighter uppercase font-display. Animates from x:-40 with 0.2s delay.

Subtitle: "We create high-performance \n digital architectures." — text-xl md:text-3xl font-light text-white/90.

Right column (span 4):

Description paragraph in text-sm md:text-base text-white/70 font-light leading-relaxed.

"Read More" button: text-[10px] font-mono tracking-[0.3em] uppercase border-b border-white/40 pb-1, hover: border-white.

Bottom section — 12-column grid, items-end:

Left (span 8) — two info blocks side by side:

"01 // CORE ARCHITECTURE" + "Check office in Los Angeles" — each with border-t border-white/20 pt-6, title in text-xs font-mono tracking-[0.2em] uppercase, subtitle in text-[11px] text-white/50 uppercase tracking-widest.

"02 // PERFORMANCE METRICS" + "Our effective SEO Positioning" — same styling, staggered animation (0.6s and 0.7s delays).

Right (span 4) — flex column, items aligned end:

Prev/Next arrows: Two circular buttons (p-2 border border-white/20 rounded-full), using ArrowLeft and ArrowRight from Lucide. Hover: fill white, text black.

Meta text: "25 March 2026 | Project" in text-[10px] font-mono tracking-[0.2em] text-white/40 and "Photographs that attract attention." in text-sm md:text-base font-light italic text-white/80.
