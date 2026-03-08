#!/usr/bin/env python3
"""Generate a hero image using Nano Banana (Gemini 2.5 Flash Image).

Usage:
    python generate.py "prompt text" [output_path] [aspect_ratio] [image_size]

Examples:
    python generate.py "A modern tech hero image" assets/hero.png
    python generate.py "A sunset landscape" hero.png 16:9 2K

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
    image_size: str = "1K",
):
    """Generate a hero image using Nano Banana (Gemini 2.5 Flash Image)."""

    api_key = os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        print("ERROR: GOOGLE_API_KEY environment variable not set.")
        print("Get your key at: https://aistudio.google.com/apikey")
        print("Then run: export GOOGLE_API_KEY=your_key")
        sys.exit(1)

    client = genai.Client(api_key=api_key)

    print(f"Model: gemini-2.5-flash-image (Nano Banana)")
    print(f"Config: aspect_ratio={aspect_ratio}, image_size={image_size}")
    print(f"Prompt: {prompt[:100]}{'...' if len(prompt) > 100 else ''}")
    print("Generating...")

    response = client.models.generate_content(
        model="gemini-2.5-flash-image",
        contents=prompt,
        config=types.GenerateContentConfig(
            response_modalities=["IMAGE"],
            image_config=types.ImageConfig(
                aspect_ratio=aspect_ratio,
                image_size=image_size,
            ),
        ),
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


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python generate.py <prompt> [output_path] [aspect_ratio] [image_size]")
        print("  prompt:       Image description (required)")
        print("  output_path:  Where to save (default: hero.png)")
        print("  aspect_ratio: 16:9, 9:16, 1:1, 4:3, 3:2, 21:9 (default: 16:9)")
        print("  image_size:   512px, 1K, 2K (default: 1K)")
        sys.exit(1)

    prompt = sys.argv[1]
    output = sys.argv[2] if len(sys.argv) > 2 else "hero.png"
    ratio = sys.argv[3] if len(sys.argv) > 3 else "16:9"
    size = sys.argv[4] if len(sys.argv) > 4 else "1K"

    generate_hero(prompt, output, ratio, size)
