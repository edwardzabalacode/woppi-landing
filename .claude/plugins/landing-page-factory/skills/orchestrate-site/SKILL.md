---
name: orchestrate-site
description: Use when the user wants to run the full landing page creation pipeline end-to-end. Triggers on "create full landing page", "run the full pipeline", "build everything from scratch", "orchestrate site", "full site from brief", "end to end landing page", "run the complete workflow", "create landing page from job description", "factory build", "do everything", "full workflow", "start to finish", "complete project", "build a landing page from this job posting", "just build it all", or when the user provides a job description and expects a complete landing page as the final output. Orchestrates the complete flow from job description analysis through image generation, video animation, and React landing page assembly.
---

# Orchestrate Landing Page - Full Pipeline

Run the complete landing page creation pipeline from a job description to a deployed React landing page with AI-generated hero assets.

## Pipeline Overview

```
Input (Job Description / Brief)
    │
    ▼
┌─────────────────────────────────┐
│  1. ANALYZE BRIEF               │
│  Extract niche, audience,       │
│  colors, structure, copy        │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  2. PROMPT ENGINEER             │
│  Generate optimized prompts     │
│  for image + video generation   │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  3. GENERATE HERO IMAGE         │
│  Choose Nano Banana model:      │
│  • Flash (fast iteration)       │
│  • NB2 (quality + thinking)     │
│  • Pro (production + text)      │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  4. ANIMATE HERO                │
│  Veo 3.1: image → video        │
│  Cinematic motion for hero bg   │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  5. DESIGN PROMPT               │
│  Generate ultra-detailed build  │
│  spec with all design tokens,   │
│  layout, effects, animations    │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  6. BUILD LANDING PAGE          │
│  React.js assembly following    │
│  the design prompt exactly      │
└─────────────────────────────────┘
```

## Execution Steps

### Step 1: Analyze the Brief

Use the **analyze-brief** skill. Provide the job description or project request and extract:
- Niche, audience, UVP
- Color palette with hex codes
- Typography direction
- Page structure and copy
- Initial hero concept

If the user has not provided a brief, ask for one. Accept:
- Upwork job posting (copy-paste)
- Client message or email
- Verbal description
- URL reference

Store the output as the **creative brief** for subsequent steps.

### Step 2: Engineer the Prompts

Use the **prompt-engineer** skill. From the creative brief, generate:
- **Hero image prompt** optimized for the chosen Nano Banana model
- **Hero animation prompt** optimized for Veo 3.1
- **Alternative prompts** for different compositions

Present the prompts to the user for approval or refinement before proceeding.

### Step 3: Generate the Hero Image

Ask the user which model to use:
- **Nano Banana** (`gemini-2.5-flash-image`): Fastest, good for iteration
- **Nano Banana 2** (`gemini-3.1-flash-image-preview`): Higher quality, thinking mode
- **Nano Banana Pro** (`gemini-3-pro-image-preview`): Maximum quality, text rendering

Use the corresponding **generate-hero-nano-banana** / **generate-hero-nano-banana-2** / **generate-hero-nano-banana-pro** skill.

The skill will:
1. Create a Python generation script
2. Execute it to generate the hero image
3. Save to `assets/hero.png`

If the user is not satisfied with the result:
- Adjust the prompt using prompt-engineer
- Try a different Nano Banana model
- Iterate until the hero image is approved

### Step 4: Animate the Hero

Use the **animate-hero** skill. Take the approved hero image and:
1. Create a Python animation script using Veo 3.1
2. Execute it with the animation prompt from Step 2
3. Save to `assets/hero_video.mp4`

Animation options to offer:
- **Subtle push-in**: Most common for landing pages
- **Parallax depth**: Creates 3D depth effect
- **Atmospheric**: Adds living particles and light shifts
- **Product reveal**: Camera orbits around central element

If animation is not desired, skip this step and use the static image.

### Step 5: Generate the Design Prompt

Use the **design-prompt** skill. With the creative brief and generated assets (hero image + video), produce an ultra-detailed implementation prompt that specifies:
1. Exact design tokens (fonts, colors, radius, spacing)
2. Section-by-section layout with precise CSS/Tailwind specs
3. Video background integration with overlay and preload hints
4. Signature effects (liquid glass, blur-in text, gradient borders)
5. Animation choreography with exact timing and easing
6. Responsive breakpoints with concrete property changes
7. Z-index layering map

Present the design prompt to the user for approval. This is the blueprint that `build-landing` will follow exactly.

### Step 6: Build the Landing Page

Use the **build-landing** skill. With the design prompt from Step 5:
1. Create a new React project (Vite + TypeScript + Tailwind CSS v4)
2. Implement every section following the design prompt exactly
3. Integrate the hero video and image assets
4. Apply all design tokens, effects, and animations as specified
5. Ensure responsive behavior matches the spec
6. Make it pixel-perfect to the design prompt

Start the dev server so the user can preview: `npm run dev`

## Interaction Points

The pipeline is **not fully automatic**. Stop and ask for user input at these points:

1. **After Step 1**: "Here's the creative brief I extracted. Does this look right? Any adjustments?"
2. **After Step 2**: "Here are the generated prompts. Want to adjust any before I generate?"
3. **After Step 3**: "Here's the hero image. Happy with it, or should I iterate?"
4. **After Step 4**: "Here's the animated hero video. Approve or re-generate?"
5. **After Step 5**: "Here's the design prompt/spec. Does this match your vision? Any changes before I build?"
6. **After Step 6**: "Landing page is ready. Check it at localhost:5173. Any changes?"

## Quick Start vs. Full Control

### Quick Start Mode
If the user says "just build it" or "full auto":
- Use Nano Banana 2 as default (good balance)
- Use "subtle push-in" as default animation
- Build without stopping for approval
- Present final result for review

### Full Control Mode (Default)
- Stop at each interaction point
- Offer model choices
- Allow prompt iteration
- Present alternatives at each step

## Project Structure After Complete Pipeline

```
project-name/
├── assets/
│   ├── hero.png                    # Generated hero image
│   └── hero_video.mp4              # Generated hero video
├── scripts/
│   ├── generate_hero.py            # Image generation script
│   └── animate_hero.py             # Video generation script
├── landing-page/                   # React project
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── SocialProof.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── CTA.jsx
│   │   │   └── Footer.jsx
│   │   ├── assets/
│   │   │   ├── hero.png
│   │   │   └── hero_video.mp4
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
├── brief.md                        # Creative brief document
└── prompts.md                      # Generated prompts
```

## Error Recovery

If any step fails:
- **API key missing**: Guide user to set `GOOGLE_API_KEY`
- **SDK not installed**: Run `pip install google-genai`
- **Image generation fails**: Try different prompt or model
- **Video generation fails**: Fall back to static image hero
- **React build fails**: Check Node.js version, reinstall dependencies

## Tips for Best Results

1. **Start with a detailed brief**: The more information in the job description, the better the output
2. **Iterate on prompts**: Spend time on Step 2 — good prompts make good images
3. **Use Nano Banana Flash first**: Quick iterations to find the right composition
4. **Then upgrade to Pro**: Once composition is approved, generate final with Pro
5. **Keep animations subtle**: Landing page heroes should be elegant, not flashy
6. **Mobile first**: Always check the landing page on mobile viewport
