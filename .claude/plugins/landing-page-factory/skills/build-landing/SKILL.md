---
name: build-landing
description: Use when the user wants to build a React.js landing page using generated assets (hero image, hero video) from the landing-page-factory pipeline. Triggers on "build landing page", "create the landing page", "build the react page", "assemble landing page", "create react landing", "build the site", "put together the landing page", "create the website", "make the page", "put it all together", "build site with these assets", "now build the page", or when hero assets are ready and the user wants to assemble the final React landing page. Complements the frontend-design skill by adding landing-page-specific structure and AI-generated asset integration.
---

# Build Landing Page

Build a React landing page that integrates AI-generated hero assets from this pipeline. This skill complements `frontend-design` — use that skill's aesthetic guidelines for all visual decisions.

## Setup

If no React project exists:

```bash
npm create vite@latest landing-page -- --template react
cd landing-page
npm install framer-motion react-intersection-observer
```

## Asset Integration

The critical differentiator: integrating the AI-generated hero image and video.

**Video hero background** (when hero video exists):
- Use `<video autoPlay muted loop playsInline poster={heroImage}>`
- Set `object-fit: cover` filling the full viewport
- Overlay with a gradient for text contrast
- Fallback to hero image via `poster` attribute
- For large videos, place in `public/` not `src/assets/`

**Image hero background** (when no video):
- Use as CSS `background-image` with `background-size: cover`
- Add a subtle CSS animation (slow scale from 1.0 to 1.05 over 20s)

## Landing Page Sections

Build these sections using content from the creative brief (output of `analyze-brief`):

1. **Hero**: Full-viewport with video/image background + headline + CTA
2. **Social proof**: Logo bar or stats (animate numbers on scroll)
3. **Features/Benefits**: 3-6 cards with icons
4. **How it works**: Numbered steps (if applicable)
5. **Final CTA**: Full-width colored section
6. **Footer**: Links + contact

Use `framer-motion` with `react-intersection-observer` for scroll-triggered fade-in animations on each section.

## Content Source

All text, colors, fonts, and structure come from the creative brief:
- **Headlines/copy**: From the brief's page structure section
- **Colors**: Use exact hex codes as CSS custom properties in `:root`
- **Fonts**: Import from Google Fonts with `display=swap`
- **CTA text**: From the brief's CTA recommendations

For placeholder content (testimonials, logos), add `{/* TODO: Replace */}` comments.

## Quality Checks

Before finishing, verify:
- Responsive at 375px, 768px, 1024px+
- Hero video plays with image fallback
- Text readable over hero (sufficient contrast)
- No console errors
- `npm run dev` starts successfully

## Important

Aesthetic decisions (typography choices, color harmony, spatial composition, animation style, visual personality) belong in the `frontend-design` skill — it has deep expertise in making interfaces visually distinctive. This skill focuses on landing-page structure and asset integration, so the two complement each other without overlapping.
