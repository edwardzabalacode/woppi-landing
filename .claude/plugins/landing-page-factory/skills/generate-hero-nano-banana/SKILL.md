---
name: generate-hero-nano-banana
description: Use when the user wants to generate a hero image using Google's Nano Banana model (Gemini 2.5 Flash Image). Triggers on "generate hero image", "create hero with nano banana", "nano banana image", "fast hero image", "quick hero generation", "generate image with gemini flash", "generate an image", "create image for landing page", "image with gemini", "quick image", "test this prompt with an image", or when the user wants fast image iteration. Generates images with the gemini-2.5-flash-image model via google-genai SDK. Optimized for speed and iteration.
---

# Generate Hero Image with Nano Banana

The fastest Nano Banana model. Use for quick iterations and concept exploration (~10 seconds per image).

## Prerequisites

Install the SDK and set the API key:

```bash
pip install google-genai
export GOOGLE_API_KEY=your_key
```

Get an API key at: https://aistudio.google.com/apikey

## Generate the image

Run the bundled script:

```bash
python ${CLAUDE_SKILL_DIR}/scripts/generate.py "<prompt>" <output_path> [aspect_ratio] [image_size]
```

**Parameters:**

| Parameter | Values | Default |
|-----------|--------|---------|
| prompt | Image description (required) | - |
| output_path | File path for output | hero.png |
| aspect_ratio | 16:9, 9:16, 1:1, 4:3, 3:2, 21:9 | 16:9 |
| image_size | 512px, 1K, 2K | 1K |

**Example:**

```bash
python ${CLAUDE_SKILL_DIR}/scripts/generate.py "A modern SaaS dashboard floating in abstract 3D space. Wide angle, soft blue ambient lighting, clean minimalist style. Color palette: #1a1a2e, #0ea5e9, #f8fafc." assets/hero.png 16:9 1K
```

## When to use this model vs others

- **Nano Banana** (this): Fastest. Use for quick iterations, testing prompts, exploring compositions.
- **Nano Banana 2**: Better quality, thinking mode. Use for complex multi-element scenes.
- **Nano Banana Pro**: Maximum quality, text rendering. Use for final production images.

## Next steps

Pass the generated image to:
1. **animate-hero** skill to create a video animation
2. **build-landing** skill to embed in the React landing page
