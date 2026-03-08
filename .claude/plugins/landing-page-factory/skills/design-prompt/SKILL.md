---
name: design-prompt
description: This skill should be used when the user wants to generate an ultra-detailed, production-grade prompt for building a website or landing page. Triggers on "generate a design prompt", "create a build prompt", "write a website prompt", "design prompt for", "prompt for building a site", "create implementation prompt", "website build spec", "generate the design spec", "make me a prompt to build", "write the full spec", "detailed prompt for the landing page", "create the design instructions", "write the build instructions", "spec out the site", "full design prompt", or when a creative brief exists and the next step is to produce the exact implementation prompt that build-landing will follow.
---

# Design Prompt Generator

Generate an ultra-detailed, production-grade implementation prompt for building a premium website or landing page. The output is a single, exhaustive prompt specifying every visual and technical detail — ready to be consumed by `build-landing` or `frontend-design`.

## Core Principle

The generated prompt must be **so detailed that no design decisions are left ambiguous**. Every element — from exact font weights to box-shadow values — must be specified. Think of it as a design handoff document that doubles as a build instruction.

## Input

Accept any of these as input:
- A creative brief (output from `analyze-brief`)
- A screenshot or image of a desired design
- A verbal description of the site concept
- A niche + target audience description
- An existing prompt to enhance/upgrade

## Process

### Step 1: Select a Reference Pattern

Before generating, consult the reference files to find the closest matching pattern for the niche. Each reference contains a complete, production-tested prompt.

### Reference Files

Consult these based on the niche/style direction:

- **`references/space-travel-hero.md`** — Cinematic dark hero with liquid glass effects, blur-in text animation, glassmorphic navbar pill, partner bar. Best for: agencies, travel, creative studios, luxury brands.
- **`references/dark-portfolio-loader.md`** — Editorial dark portfolio with loading screen (counter 000→100, rotating words), GSAP animations, glassmorphic cards, technical specs sidebar, feature tag pills. Best for: developer portfolios, personal brands.
- **`references/light-saas-hero.md`** — Light background with flipped video, clean heading with one italic serif word, email input with soft shadow, multi-layered gradient CTA button, social proof badge. Best for: SaaS, productivity tools, B2B.
- **`references/portfolio-gsap-loader.md`** — Next.js dark portfolio with GSAP entrance, cycling roles, gradient accent navbar pill, scroll indicator, background video with vignette. Best for: designer portfolios, creative directors.
- **`references/video-agency-hero.md`** — Full-opacity video background (no overlay), floating white navbar with rounded corners, large serif italic headline, pill-shaped CTA. Best for: video agencies, content studios, influencer services.
- **`references/logistics-brand-hero.md`** — Dark brand-colored landing with clipped-corner buttons (CSS clip-path), full-opacity video, glassmorphic consultation card, compact proportions. Best for: logistics, fintech, enterprise B2B.
- **`references/3d-studio-landing.md`** — Pure black background, multi-column stacked navbar, custom SVG icons, marquee banner with accent color, product video with negative margin overlap, rounded section corners. Best for: 3D studios, product launches, e-commerce.
- **`references/green-tech-hero.md`** — Dark hero with seamless loop fade transition, transparent navbar, bottom-aligned content, bright accent color. Best for: tech startups, website builders, SaaS tools.
- **`references/ai-platform-hero.md`** — Dark hero with offset/shifted video, left-aligned content, split-text word-by-word animation, sparkles badge, solid + translucent CTAs. Best for: AI platforms, automation tools, developer tools.

### Step 2: Establish Foundation

From the input, determine and specify:

1. **Tech Stack**: Default to React + Vite + TypeScript + Tailwind CSS v4 + Motion (framer-motion) + Lucide React icons
2. **Theme Direction**: Dark cinematic, light minimal, glassmorphic, editorial, etc.
3. **Color System**: Define as CSS custom properties (HSL or hex)
4. **Typography System**: Exact Google Fonts with weights and Tailwind config mappings

### Step 3: Define Design Tokens

Specify every token explicitly:

```
Fonts:
- Heading: [Name] ([weights]) → font-heading
- Body: [Name] ([weights]) → font-body
- Mono/accent: [Name] ([weights]) → font-mono (if needed)

Colors (CSS variables):
--background, --foreground, --primary, --primary-foreground,
--muted, --muted-foreground, --accent, --border, --surface

Radius: --radius: [value]
```

### Step 4: Specify Each Section

For EVERY section provide:

1. **Layout**: Exact positioning, dimensions, padding, margin, flex/grid, z-index
2. **Typography**: font-family, font-size (responsive), font-weight, letter-spacing, line-height, text-transform, color/opacity
3. **Visual Effects**: Backgrounds, gradients, backdrop-filter, box-shadow (including inset), borders, glass effects with exact CSS
4. **Interactive States**: Hover effects, transitions, cursor styles
5. **Animation**: Framer Motion initial/animate/transition values, delays, easings, stagger
6. **Responsive**: Mobile-first breakpoints with exact property changes
7. **Content**: Exact text, placeholder copy, Lucide icon names

### Step 5: Video Background Specification

Video backgrounds are a signature element. Always specify:

- Video URL or placeholder description
- HTML attributes: autoPlay, loop, muted, playsInline, preload
- CSS: position, object-fit, z-index
- Overlay: gradient type, colors, opacity
- Poster image: fallback path
- Preload hints for `<head>`
- Mobile treatment: different height or simpler overlay

### Step 6: Include Signature Effects

Select relevant effects from the reference files:

- **Liquid Glass**: Light glassmorphism with gradient border mask (see space-travel-hero.md)
- **Liquid Glass Strong**: Heavy blur for CTAs (see space-travel-hero.md)
- **Blur-in Text**: Word-by-word animation with blur/opacity/y transition (see space-travel-hero.md, ai-platform-hero.md)
- **Loading Screen**: Counter 000→100, rotating words, gradient progress bar (see dark-portfolio-loader.md, portfolio-gsap-loader.md)
- **Gradient Border Ring**: Hover effect with absolute gradient span (see portfolio-gsap-loader.md)
- **Scroll Indicator**: Animated dot on vertical line (see portfolio-gsap-loader.md)
- **Marquee Banner**: Infinite scroll with duplicated content (see 3d-studio-landing.md)
- **Clipped-Corner Buttons**: CSS clip-path geometric cuts (see logistics-brand-hero.md)
- **Seamless Video Loop**: Fade transition using requestAnimationFrame (see green-tech-hero.md)

## Output Format

The output must be a single, self-contained prompt:

```markdown
Build a [theme] [page type] for "[Brand Name]" — [concept].

Tech Stack: React, Vite, TypeScript, Tailwind CSS v4, Motion, Lucide React.

**Fonts & Design Tokens**
[Google Fonts imports, Tailwind config, CSS variables]

**1. [Section Name]**
[Exhaustive layout, typography, effects, animation, responsive specs]

**2. [Section Name]**
[...]

**Key CSS Utilities**
[Custom classes — glass effects, animations, gradients]

**Animation Sequence**
[Choreographed entrance timing]

**Responsive Breakpoints**
[Mobile-first adjustments]

**Z-Index Layering**
[Complete z-index map]
```

## Quality Checklist

Before outputting, verify the prompt includes:

- Exact font names, weights, and Google Fonts import URL
- Complete color system with CSS variable definitions
- Every section has layout specs (positioning, dimensions, padding)
- All text has font-size, weight, color, spacing, line-height
- Video background has URL, attributes, overlay, poster, preload
- Glass/blur effects have complete CSS (including vendor prefixes)
- Animations have initial/animate states, duration, delay, easing
- Hover states for all interactive elements
- Responsive breakpoints (mobile, tablet, desktop)
- Z-index layering documented
- Exact text content (headlines, CTAs, nav links, badges)
- Lucide icon names specified where needed

## Guidelines

- Default to dark, cinematic aesthetics unless niche calls for light
- Always include video background specs — this is the pipeline's signature
- Prefer Instrument Serif (italic) for display text and Inter/Barlow/Geist for body
- Include liquid-glass effects where appropriate for premium feel
- Specify motion/animation as precisely as CSS values
- Keep mobile responsiveness specs concrete: exact font-size changes, padding reductions
- If given a screenshot, translate every visible element into explicit CSS/Tailwind specs
- Read the closest reference file first, then adapt its patterns to the specific niche
