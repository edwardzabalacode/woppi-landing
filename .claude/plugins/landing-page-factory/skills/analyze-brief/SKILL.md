---
name: analyze-brief
description: Use when the user provides a job description, project brief, Upwork posting, client request, or any text describing a website or landing page they need to build. Also triggers on "analyze this brief", "extract the niche", "what kind of landing page", "create a brief from this description", "I got this job posting", "here's a project description", "landing page for [any niche]", "what kind of site should I build from this", "look at this job", "build a page for this client", or any pasted text that describes a website need. Extracts niche, target audience, visual style, color palette, tone, page structure, and copy suggestions to feed into the landing page creation pipeline.
---

# Analyze Brief

Analyze the provided job description, client brief, or project request to extract all information needed to create a landing page. Produce a structured creative brief that feeds into the rest of the landing page factory pipeline.

## Input

Accept any of the following as input:
- Upwork job posting
- Client email or message
- Project description document
- Verbal description of what the client needs
- URL to a competitor or reference site (describe what you see)
- Any freeform text describing a landing page need

## Analysis Process

### Step 1: Extract Core Information

From the input, identify and extract:

1. **Niche/Industry**: What business sector or industry (e.g., SaaS, e-commerce, fitness, real estate, legal)
2. **Business Type**: B2B, B2C, D2C, marketplace, service provider
3. **Product/Service**: What specific product or service is being offered
4. **Target Audience**: Demographics, psychographics, pain points, desires
5. **Unique Value Proposition (UVP)**: What makes this offering different
6. **Call to Action (CTA)**: What action should visitors take (sign up, buy, schedule call, download)
7. **Tone/Voice**: Professional, casual, playful, authoritative, luxurious, minimalist
8. **Budget/Quality Tier**: Infer from context whether this is premium, mid-range, or budget

### Step 2: Generate Visual Direction

Based on the extracted information, propose:

1. **Color Palette**:
   - Primary color (brand anchor)
   - Secondary color (accent/complement)
   - Neutral palette (backgrounds, text)
   - Provide exact hex codes
   - Justify choices based on industry psychology

2. **Typography Direction**:
   - Heading style (serif for luxury/tradition, sans-serif for modern/tech, display for creative)
   - Body text style
   - Suggest specific Google Fonts

3. **Visual Style**:
   - Photography style (lifestyle, product, abstract, architectural)
   - Illustration preferences if applicable
   - Hero section concept (what the hero image should depict)
   - Animation/motion direction (what movement the hero video should show)

4. **Layout Pattern**:
   - Recommended landing page pattern (long-form, split-screen, card-based, etc.)

### Step 3: Generate Page Structure

Produce a section-by-section breakdown:

1. **Hero Section**:
   - Headline (max 8 words)
   - Subheadline (1-2 sentences)
   - CTA button text
   - Hero image/video concept description

2. **Social Proof Section**:
   - Type of proof needed (logos, testimonials, stats, awards)
   - Placeholder content suggestions

3. **Features/Benefits Section**:
   - 3-6 key features or benefits
   - Icon/visual suggestion per feature
   - Short description per feature

4. **How It Works** (if applicable):
   - 3-4 step process
   - Visual per step

5. **Pricing/Offer** (if applicable):
   - Pricing display format
   - Tier structure if mentioned

6. **Final CTA Section**:
   - Closing headline
   - Urgency/scarcity element if appropriate
   - CTA button text

7. **Footer**:
   - Essential links
   - Contact info

### Step 4: Generate Prompt Suggestions

Create initial prompt suggestions for the next pipeline stages:

1. **Hero Image Prompt**: A detailed prompt for Nano Banana image generation describing the hero visual
2. **Hero Animation Prompt**: A prompt for Veo 3.1 describing the desired motion/animation of the hero
3. **Style Reference Description**: Text describing the overall visual style for consistency

## Output Format

Present the brief as a structured document with clear sections using markdown headers. Following this structure keeps the output consistent so downstream skills (prompt-engineer, build-landing) can reliably consume it:

```markdown
# Creative Brief: [Project Name]

## Niche & Audience
- **Industry**: ...
- **Business Type**: ...
- **Target Audience**: ...
- **UVP**: ...

## Visual Direction
- **Color Palette**: Primary: #hex, Secondary: #hex, Neutral: #hex, #hex
- **Typography**: Headings: [Font], Body: [Font]
- **Visual Style**: ...
- **Hero Concept**: ...

## Page Structure
### Hero
- **Headline**: ...
- **Subheadline**: ...
- **CTA**: ...

### [Additional sections...]

## Prompt Suggestions
### Hero Image Prompt
[Detailed prompt for Nano Banana]

### Hero Animation Prompt
[Detailed prompt for Veo 3.1]
```

## Important Guidelines

- Ask clarifying questions if the input is too vague — a weak brief produces weak assets downstream, so getting specifics early saves iteration time
- Default to modern, clean, professional design unless the niche calls for something different
- Consider mobile-first design in all layout recommendations
- Ensure color palette meets WCAG 2.1 AA contrast requirements
- Keep headlines punchy and benefit-focused, not feature-focused
- The hero image prompt should be specific enough for Nano Banana to generate a compelling visual
- The animation prompt should describe camera movement and subtle motion, not radical changes
