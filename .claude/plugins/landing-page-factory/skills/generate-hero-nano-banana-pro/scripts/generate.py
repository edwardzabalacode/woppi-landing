#!/usr/bin/env python3
"""Generate a premium hero image using Nano Banana Pro (Gemini 3 Pro Image).

Best for: text rendering, photorealism, production quality.
Supports Google Search grounding and reference images.

Usage:
    python generate.py "prompt text" [output_path] [aspect_ratio] [image_size]
    python generate.py "prompt text" output.png 16:9 2K --search

Requires:
    pip install google-genai
    export GOOGLE_API_KEY=your_key
"""

import os
import sys
from pathlib import Path

try:
    from google import genai
    from google.genai import types
except ImportError:
    print("ERROR: google-genai SDK not installed. Run: pip install google-genai")
    sys.exit(1)


def generate_hero(
    prompt: str,
    output_path: str = "hero.png",
    aspect_ratio: str = "16:9",
    image_size: str = "2K",
    use_search_grounding: bool = False,
):
    """Generate a premium hero image using Nano Banana Pro (Gemini 3 Pro Image)."""

    api_key = os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        print("ERROR: GOOGLE_API_KEY environment variable not set.")
        print("Get your key at: https://aistudio.google.com/apikey")
        print("Then run: export GOOGLE_API_KEY=your_key")
        sys.exit(1)

    client = genai.Client(api_key=api_key)

    print(f"Model: gemini-3-pro-image-preview (Nano Banana Pro)")
    print(f"Config: aspect_ratio={aspect_ratio}, image_size={image_size}")
    if use_search_grounding:
        print("Google Search grounding: ON")
    print(f"Prompt: {prompt[:100]}{'...' if len(prompt) > 100 else ''}")
    print("Generating (this model is slower but highest quality)...")

    config_params = {
        "response_modalities": ["IMAGE"],
        "image_config": types.ImageConfig(
            aspect_ratio=aspect_ratio,
            image_size=image_size,
        ),
    }

    if use_search_grounding:
        config_params["tools"] = [{"google_search": {}}]

    response = client.models.generate_content(
        model="gemini-3-pro-image-preview",
        contents=prompt,
        config=types.GenerateContentConfig(**config_params),
    )

    for part in response.parts:
        if image := part.as_image():
            output = Path(output_path)
            output.parent.mkdir(parents=True, exist_ok=True)
            image.save(str(output))
            print(f"Hero image saved to: {output}")
            return str(output)

    print("ERROR: No image was generated. The prompt may have triggered safety filters.")
    print("Try adjusting your prompt to be more specific or less ambiguous.")
    sys.exit(1)


def generate_hero_with_references(
    prompt: str,
    reference_paths: list,
    output_path: str = "hero.png",
    aspect_ratio: str = "16:9",
    image_size: str = "2K",
):
    """Generate a hero image using reference images for style/subject consistency.

    Up to 14 reference images supported.
    """
    try:
        from PIL import Image
    except ImportError:
        print("ERROR: Pillow not installed. Run: pip install Pillow")
        sys.exit(1)

    api_key = os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        print("ERROR: GOOGLE_API_KEY environment variable not set.")
        sys.exit(1)

    client = genai.Client(api_key=api_key)

    contents = [prompt]
    for ref_path in reference_paths[:14]:
        contents.append(Image.open(ref_path))

    print(f"Model: gemini-3-pro-image-preview (Nano Banana Pro)")
    print(f"References: {len(reference_paths)} images")
    print("Generating...")

    response = client.models.generate_content(
        model="gemini-3-pro-image-preview",
        contents=contents,
        config=types.GenerateContentConfig(
            response_modalities=["TEXT", "IMAGE"],
            image_config=types.ImageConfig(
                aspect_ratio=aspect_ratio,
                image_size=image_size,
            ),
        ),
    )

    for part in response.parts:
        if part.text:
            print(f"Model notes: {part.text}")
        elif image := part.as_image():
            output = Path(output_path)
            output.parent.mkdir(parents=True, exist_ok=True)
            image.save(str(output))
            print(f"Hero image saved to: {output}")
            return str(output)

    print("ERROR: No image was generated.")
    sys.exit(1)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python generate.py <prompt> [output_path] [aspect_ratio] [image_size] [--search]")
        print("       python generate.py <prompt> [output_path] --ref image1.png image2.png")
        sys.exit(1)

    use_search = "--search" in sys.argv
    use_refs = "--ref" in sys.argv

    if use_refs:
        ref_idx = sys.argv.index("--ref")
        refs = sys.argv[ref_idx + 1:]
        positional = sys.argv[1:ref_idx]
        prompt = positional[0]
        output = positional[1] if len(positional) > 1 else "hero.png"
        ratio = positional[2] if len(positional) > 2 else "16:9"
        size = positional[3] if len(positional) > 3 else "2K"
        generate_hero_with_references(prompt, refs, output, ratio, size)
    else:
        positional = [a for a in sys.argv[1:] if not a.startswith("--")]
        prompt = positional[0]
        output = positional[1] if len(positional) > 1 else "hero.png"
        ratio = positional[2] if len(positional) > 2 else "16:9"
        size = positional[3] if len(positional) > 3 else "2K"
        generate_hero(prompt, output, ratio, size, use_search)
