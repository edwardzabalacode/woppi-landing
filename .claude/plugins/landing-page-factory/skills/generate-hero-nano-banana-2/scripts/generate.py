#!/usr/bin/env python3
"""Generate a hero image using Nano Banana 2 (Gemini 3.1 Flash Image).

Supports thinking mode for complex compositions.

Usage:
    python generate.py "prompt text" [output_path] [aspect_ratio] [image_size]
    python generate.py "prompt text" output.png 16:9 2K --thinking
    python generate.py "prompt text" output.png 16:9 2K --thinking --thinking-level High

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
    thinking: bool = False,
    thinking_level: str = "Medium",
):
    """Generate a hero image using Nano Banana 2 (Gemini 3.1 Flash Image)."""

    api_key = os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        print("ERROR: GOOGLE_API_KEY environment variable not set.")
        print("Get your key at: https://aistudio.google.com/apikey")
        print("Then run: export GOOGLE_API_KEY=your_key")
        sys.exit(1)

    client = genai.Client(api_key=api_key)

    print(f"Model: gemini-3.1-flash-image-preview (Nano Banana 2)")
    print(f"Config: aspect_ratio={aspect_ratio}, image_size={image_size}")
    if thinking:
        print(f"Thinking mode: ON (level={thinking_level})")
    print(f"Prompt: {prompt[:100]}{'...' if len(prompt) > 100 else ''}")
    print("Generating...")

    config_params = {
        "response_modalities": ["IMAGE"],
        "image_config": types.ImageConfig(
            aspect_ratio=aspect_ratio,
            image_size=image_size,
        ),
    }

    if thinking:
        config_params["thinking_config"] = types.ThinkingConfig(
            thinking_level=thinking_level,
            include_thoughts=True,
        )

    response = client.models.generate_content(
        model="gemini-3.1-flash-image-preview",
        contents=prompt,
        config=types.GenerateContentConfig(**config_params),
    )

    for part in response.parts:
        if hasattr(part, "thought") and part.thought:
            print(f"Model thinking: {part.text}")

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
        print("Usage: python generate.py <prompt> [output_path] [aspect_ratio] [image_size] [--thinking] [--thinking-level High]")
        sys.exit(1)

    use_thinking = "--thinking" in sys.argv
    thinking_lvl = "Medium"
    if "--thinking-level" in sys.argv:
        idx = sys.argv.index("--thinking-level")
        if idx + 1 < len(sys.argv):
            thinking_lvl = sys.argv[idx + 1]

    # Filter out flags for positional args
    positional = [a for a in sys.argv[1:] if not a.startswith("--") and a not in ("Low", "Medium", "High")]

    prompt = positional[0]
    output = positional[1] if len(positional) > 1 else "hero.png"
    ratio = positional[2] if len(positional) > 2 else "16:9"
    size = positional[3] if len(positional) > 3 else "2K"

    generate_hero(prompt, output, ratio, size, use_thinking, thinking_lvl)
