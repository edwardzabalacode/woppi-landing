---
name: generate-hero-nano-banana-2
description: Use when the user wants to generate a hero image using Google's Nano Banana 2 model (Gemini 3.1 Flash Image). Triggers on "generate hero with nano banana 2", "nano banana 2 image", "high quality hero image", "hero image with thinking", "generate image with gemini 3.1 flash", "better quality hero", "higher quality image", "better hero", "generate with thinking mode", or when the user needs a complex multi-element scene with better spatial composition. Uses the gemini-3.1-flash-image-preview model via google-genai SDK. Supports thinking mode for complex compositions.
---

# Generate Hero Image with Nano Banana 2

Higher quality than standard Nano Banana with thinking mode support (~15-20 seconds per image).

## Prerequisites

```bash
pip install google-genai
export GOOGLE_API_KEY=your_key
```

## Generate the image

Run the bundled script:

```bash
python ${CLAUDE_SKILL_DIR}/scripts/generate.py "<prompt>" <output_path> [aspect_ratio] [image_size] [--thinking] [--thinking-level High]
```

**Parameters:**

| Parameter | Values | Default |
|-----------|--------|---------|
| prompt | Image description (required) | - |
| output_path | File path for output | hero.png |
| aspect_ratio | 16:9, 9:16, 1:1, 4:3, 3:2, 4:5, 5:4, 21:9 | 16:9 |
| image_size | 512px, 1K, 2K, 4K | 2K |
| --thinking | Enable thinking mode | off |
| --thinking-level | Low, Medium, High | Medium |

**Standard generation:**

```bash
python ${CLAUDE_SKILL_DIR}/scripts/generate.py "A luxury real estate hero showing a modern mansion on a coastal cliff at golden hour. Foreground: infinity pool. Background: ocean horizon with sunset clouds. Style: architectural photography, 85mm lens." assets/hero.png 16:9 2K
```

**With thinking mode** (for complex multi-element scenes):

```bash
python ${CLAUDE_SKILL_DIR}/scripts/generate.py "Complex scene with multiple elements requiring careful spatial arrangement" assets/hero.png 16:9 2K --thinking --thinking-level High
```

## When to use thinking mode

Enable when:
- The scene has 3+ distinct elements needing spatial arrangement
- You need precise foreground/midground/background relationships
- The prompt describes complex lighting setups
- You want the model to optimize the composition itself

## Next steps

Pass the generated image to **animate-hero** or **build-landing** skills.
