---
name: generate-hero-nano-banana-pro
description: Use when the user wants to generate a premium hero image using Google's Nano Banana Pro model (Gemini 3 Pro Image). Triggers on "generate hero with nano banana pro", "nano banana pro image", "premium hero image", "hero with text rendering", "production quality hero", "generate image with gemini 3 pro", "final hero image", "best quality hero", "hero with text", "final production image", "image with search grounding", "hero with reference images", or when the user needs maximum quality, accurate text in images, or real-world product accuracy. Uses the gemini-3-pro-image-preview model via google-genai SDK. Best for text rendering, photorealism, and production-quality output. Supports Google Search grounding and reference images.
---

# Generate Hero Image with Nano Banana Pro

Google's most capable image model. Best for final production images, text rendering, and photorealism (~20-30 seconds per image). Paid preview model.

## Prerequisites

```bash
pip install google-genai
export GOOGLE_API_KEY=your_key
```

For reference images, also: `pip install Pillow`

## Generate the image

Run the bundled script:

```bash
python ${CLAUDE_SKILL_DIR}/scripts/generate.py "<prompt>" <output_path> [aspect_ratio] [image_size] [--search]
```

**Parameters:**

| Parameter | Values | Default |
|-----------|--------|---------|
| prompt | Image description (required) | - |
| output_path | File path for output | hero.png |
| aspect_ratio | 16:9, 9:16, 1:1, 4:3, 3:2, 4:5, 21:9, and more | 16:9 |
| image_size | 512px, 1K, 2K, 4K | 2K |
| --search | Enable Google Search grounding | off |

**Standard generation:**

```bash
python ${CLAUDE_SKILL_DIR}/scripts/generate.py 'A premium fintech hero. A sleek smartphone displays a banking app with the text "Your Money, Your Rules" in Inter Bold, white on dark. Phone floats at 15 degrees. Surrounding: frosted glass 3D shapes. Background: gradient #0f172a to #1e293b. 50mm lens, f/2.8. Apple product photography style.' assets/hero.png 16:9 2K
```

**With Google Search grounding** (for real-world accuracy):

```bash
python ${CLAUDE_SKILL_DIR}/scripts/generate.py "Hero showing the actual Tesla Model S in a showroom" assets/hero.png 16:9 2K --search
```

**With reference images** (up to 14, for style/subject consistency):

```bash
python ${CLAUDE_SKILL_DIR}/scripts/generate.py "Combine these brand elements into a hero" assets/hero.png --ref brand_logo.png style_ref.png product_photo.png
```

## Key capabilities

- **Text rendering**: Best model for text in images. Put exact text in quotes in the prompt.
- **Google Search grounding**: Uses real-world data for accurate product/brand/location depictions.
- **Reference images**: Up to 14 reference images for style consistency and brand adherence.
- **SynthID watermarks**: All outputs include AI-generated digital watermarks.

## Next steps

Pass the generated image to **animate-hero** or **build-landing** skills.
