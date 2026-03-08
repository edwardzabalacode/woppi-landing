---
name: prompt-engineer
description: Use when the user needs to generate optimized prompts for AI image generation (Nano Banana, Nano Banana 2, Nano Banana Pro) or AI video animation (Veo 3.1). Also triggers on "create a prompt for", "optimize this prompt", "write an image prompt", "write a video prompt", "prompt for hero image", "prompt for animation", "improve my generation prompt", "help me with the prompt", "what prompt should I use", "prompt for gemini", "make a better prompt", "prompt for [any model name]", or when the user has a creative brief and needs to generate images or video next. Takes a creative brief or niche description and produces detailed, model-specific prompts.
---

# Prompt Engineer

Generate highly optimized prompts for Google's Nano Banana image generation models and Veo 3.1 video generation model. Each model has different strengths and the prompts should be tailored accordingly.

## Input

Accept any of these:
- A creative brief (output from analyze-brief)
- A niche/industry description
- A rough idea of what the image/video should show
- An existing prompt to optimize
- Reference images or descriptions of desired style

## Prompt Generation by Model

### Nano Banana (gemini-2.5-flash-image) - Speed Optimized

Best for: Quick iterations, concept exploration, high-volume generation.

Prompt strategy:
- Keep prompts concise but descriptive (50-100 words)
- Focus on composition, subject, and mood
- Use clear, direct language
- Avoid overly complex scene descriptions
- Specify aspect ratio context in the prompt itself

Template structure:
```
[Subject/Scene description]. [Composition/framing]. [Lighting]. [Color palette]. [Mood/atmosphere]. [Style reference].
```

Example:
```
A modern SaaS dashboard floating in abstract 3D space with holographic UI elements. Wide angle shot, shallow depth of field. Soft blue ambient lighting with warm accent highlights. Color palette: deep navy #1a1a2e, electric blue #0ea5e9, warm white #f8fafc. Clean, futuristic, professional mood. Minimalist tech illustration style.
```

### Nano Banana 2 (gemini-3.1-flash-image-preview) - Quality + Thinking

Best for: Higher quality outputs, complex scenes, when you need the model to "think" about composition.

Prompt strategy:
- More detailed prompts work better (100-200 words)
- Leverage thinking mode for complex compositions
- Include spatial relationships and layering details
- Can handle multi-element scenes well
- Describe foreground, midground, background separately

Template structure:
```
[Detailed scene description with spatial relationships]. [Foreground elements]. [Background elements]. [Lighting setup with direction and quality]. [Material/texture details]. [Color grading reference]. [Artistic style and influences]. [Technical specifications: resolution feel, sharpness].
```

Example:
```
A luxury real estate hero image showing a modern minimalist mansion perched on a coastal cliff at golden hour. Foreground: infinity pool with glass edge reflecting sunset colors, two elegant loungers with white cushions. Midground: clean architectural lines of the house with floor-to-ceiling windows revealing warm interior lighting. Background: dramatic ocean horizon with scattered clouds catching orange and pink sunset light. Lighting: golden hour sun from the left at 15 degrees above horizon, creating long shadows and warm highlights on white surfaces. Materials: polished concrete, warm wood accents, brushed steel railings. Color grading: warm tones, slight orange shift in highlights, cool blue in shadows. Style: architectural photography by Alen Palander, 85mm lens perspective. Ultra sharp, high dynamic range feel.
```

### Nano Banana Pro (gemini-3-pro-image-preview) - Maximum Quality

Best for: Final production images, text rendering in images, photorealistic quality, grounded/factual content.

Prompt strategy:
- Most detailed prompts (150-300 words)
- Excellent at rendering text correctly - include exact text to render
- Use Google Search grounding for real-world accuracy
- Specify exact typography, branding elements
- Include technical camera/lens specifications
- Describe lighting setups like a photographer would

Template structure:
```
[Comprehensive scene description]. [Exact text to render if any, in quotes]. [Typography specifications]. [Camera: lens, aperture, ISO, angle]. [Lighting: key, fill, rim, practical]. [Material and texture specifications]. [Color science: film stock reference or LUT]. [Post-processing style]. [Brand guidelines if applicable].
```

Example:
```
A premium fintech landing page hero image. Central element: a sleek smartphone displaying a banking app interface with the text "Your Money, Your Rules" in Inter Bold 32pt, white on dark background. The phone floats at a 15-degree angle with a subtle shadow beneath. Surrounding the phone: floating 3D geometric shapes (cubes, spheres, tori) in frosted glass material with subtle gradient reflections. Background: deep gradient from #0f172a (top) to #1e293b (bottom). Camera: 50mm equivalent, f/2.8, straight-on angle slightly elevated. Lighting: large soft key light from upper right creating gentle specular highlights on glass elements, subtle blue rim light from left edge, ambient fill at 30% intensity. Materials: frosted glass with 15% opacity, brushed aluminum phone frame, matte screen. Color science: cool corporate tones, slight teal shift in midtones, clean whites. Style: Apple product photography meets abstract 3D art. Render quality: 4K, ultra-sharp with subtle depth of field on background elements.
```

### Veo 3.1 (veo-3.1-generate-preview) - Video Animation

Best for: Animating hero images, creating cinematic loops, product reveals.

Prompt strategy for hero animations:
- Describe the MOTION, not the scene (the scene comes from the input image)
- Specify camera movement precisely
- Keep motion subtle and elegant for landing page heroes
- Describe timing and speed of movements
- Consider loopability for web use
- Include audio/sound design hints (Veo 3.1 generates audio natively)

Camera movement vocabulary:
- **Slow push in**: Gradual zoom toward subject (builds engagement)
- **Slow pull out**: Gradual zoom away (reveals scope)
- **Slow pan left/right**: Horizontal sweep (explores scene)
- **Parallax drift**: Subtle lateral movement creating depth layers
- **Orbit**: Camera slowly rotates around subject
- **Static with motion**: Camera still, elements in scene move
- **Dolly**: Camera physically moves forward/back
- **Crane up/down**: Vertical camera movement

Template structure:
```
[Camera movement type and speed]. [Element motion descriptions]. [Atmospheric effects]. [Lighting changes if any]. [Timing/pacing]. [Audio atmosphere].
```

Example for hero animation:
```
Slow cinematic push-in toward the central element over 6 seconds. Subtle parallax effect: foreground elements drift slightly faster than background. Gentle particle effects: soft bokeh light orbs float upward slowly. Atmospheric haze drifts from left to right. Lighting remains constant with subtle shimmer on reflective surfaces. Pacing: smooth and hypnotic, no sudden movements. Ambient sound: soft electronic hum with gentle whoosh of air.
```

Example for product reveal:
```
Camera slowly orbits 45 degrees around the product from left to right over 8 seconds. The product catches light at different angles revealing texture and material quality. Subtle depth of field shift from background to product at 2-second mark. Background elements remain softly blurred throughout. No camera shake, ultra-smooth movement. Sound: subtle mechanical precision click at reveal moment, ambient minimal electronic tone.
```

## Output Format

Present prompts in this structure:

```markdown
# Generated Prompts for [Project/Niche]

## Image Generation Prompts

### Nano Banana (Fast - gemini-2.5-flash-image)
**Config**: aspect_ratio="16:9", image_size="1K"
**Prompt**:
> [prompt text]

### Nano Banana 2 (Quality - gemini-3.1-flash-image-preview)
**Config**: aspect_ratio="16:9", image_size="2K"
**Prompt**:
> [prompt text]

### Nano Banana Pro (Premium - gemini-3-pro-image-preview)
**Config**: aspect_ratio="16:9", image_size="2K"
**Prompt**:
> [prompt text]

## Video Animation Prompts

### Hero Animation (Veo 3.1)
**Config**: aspect_ratio="16:9", duration="8", resolution="1080p"
**Prompt**:
> [prompt text]

### Alternative: Product Focus Animation
**Config**: aspect_ratio="16:9", duration="6", resolution="720p"
**Prompt**:
> [prompt text]
```

## Optimization Tips

1. **Avoid negations**: Say what you want, not what you don't want
2. **Be specific with colors**: Use hex codes, not vague color names
3. **Reference real photography**: Mention lens types, lighting setups
4. **Layer your description**: Foreground → midground → background
5. **Specify mood explicitly**: Don't rely on subject matter alone to convey mood
6. **For animations**: Less is more - subtle motion is more professional than dramatic movement
7. **For text in images**: Only use Nano Banana Pro, specify exact text in quotes, include font details
8. **Test with Nano Banana first**: Use the fast model to iterate on composition, then refine with Pro
