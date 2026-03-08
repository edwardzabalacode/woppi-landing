#!/usr/bin/env python3
"""Animate a hero image into video using Veo 3.1.

Modes:
    Image-to-Video: Animate a single image (most common)
    First+Last Frame: Interpolate between two images
    Reference Images: Use up to 3 reference images for consistency

Usage:
    python animate.py <image_path> "motion prompt" [output_path] [aspect_ratio] [duration] [resolution]
    python animate.py --frames <first> <last> "prompt" [output_path] [duration] [resolution]
    python animate.py --refs <ref1> <ref2> "prompt" [output_path] [aspect_ratio] [duration] [resolution]

Examples:
    python animate.py hero.png "Slow cinematic push-in, subtle parallax" hero_video.mp4
    python animate.py hero.png "Gentle camera drift" video.mp4 16:9 8 1080p
    python animate.py --frames start.png end.png "Smooth transition" video.mp4

Requires:
    pip install google-genai Pillow
    export GOOGLE_API_KEY=your_key
"""

import os
import sys
import time
from pathlib import Path

try:
    from google import genai
    from google.genai import types
except ImportError:
    print("ERROR: google-genai SDK not installed. Run: pip install google-genai")
    sys.exit(1)

try:
    from PIL import Image
except ImportError:
    print("ERROR: Pillow not installed. Run: pip install Pillow")
    sys.exit(1)


def animate_hero(
    image_path: str,
    prompt: str,
    output_path: str = "hero_video.mp4",
    aspect_ratio: str = "16:9",
    duration: str = "8",
    resolution: str = "1080p",
):
    """Animate a hero image into a video using Veo 3.1."""

    api_key = os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        print("ERROR: GOOGLE_API_KEY environment variable not set.")
        print("Get your key at: https://aistudio.google.com/apikey")
        print("Then run: export GOOGLE_API_KEY=your_key")
        sys.exit(1)

    if not Path(image_path).exists():
        print(f"ERROR: Image not found: {image_path}")
        sys.exit(1)

    client = genai.Client(api_key=api_key)
    hero_image = Image.open(image_path)

    print(f"Model: veo-3.1-generate-preview (Veo 3.1)")
    print(f"Input: {image_path}")
    print(f"Config: aspect_ratio={aspect_ratio}, duration={duration}s, resolution={resolution}")
    print(f"Prompt: {prompt[:100]}{'...' if len(prompt) > 100 else ''}")
    print("Generating video (this takes 60-180 seconds)...")

    operation = client.models.generate_videos(
        model="veo-3.1-generate-preview",
        prompt=prompt,
        image=hero_image,
        config=types.GenerateVideosConfig(
            aspect_ratio=aspect_ratio,
            duration_seconds=duration,
            resolution=resolution,
        ),
    )

    elapsed = 0
    while not operation.done:
        time.sleep(10)
        elapsed += 10
        operation = client.operations.get(operation)
        print(f"  Generating... ({elapsed}s elapsed)")

    if operation.response and operation.response.generated_videos:
        video = operation.response.generated_videos[0]
        client.files.download(file=video.video)
        output = Path(output_path)
        output.parent.mkdir(parents=True, exist_ok=True)
        video.video.save(str(output))
        print(f"Hero video saved to: {output}")
        return str(output)

    print("ERROR: Video generation failed. Try a different prompt or image.")
    sys.exit(1)


def animate_with_frames(
    first_frame_path: str,
    last_frame_path: str,
    prompt: str,
    output_path: str = "hero_video.mp4",
    duration: str = "6",
    resolution: str = "1080p",
):
    """Generate a video interpolating between first and last frames."""

    api_key = os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        print("ERROR: GOOGLE_API_KEY environment variable not set.")
        sys.exit(1)

    for p in (first_frame_path, last_frame_path):
        if not Path(p).exists():
            print(f"ERROR: Image not found: {p}")
            sys.exit(1)

    client = genai.Client(api_key=api_key)
    first_image = Image.open(first_frame_path)
    last_image = Image.open(last_frame_path)

    print(f"Mode: First + Last frame interpolation")
    print(f"First: {first_frame_path}")
    print(f"Last: {last_frame_path}")
    print("Generating video (60-180 seconds)...")

    operation = client.models.generate_videos(
        model="veo-3.1-generate-preview",
        prompt=prompt,
        image=first_image,
        config=types.GenerateVideosConfig(
            last_frame=last_image,
            duration_seconds=duration,
            resolution=resolution,
        ),
    )

    elapsed = 0
    while not operation.done:
        time.sleep(10)
        elapsed += 10
        operation = client.operations.get(operation)
        print(f"  Generating... ({elapsed}s elapsed)")

    if operation.response and operation.response.generated_videos:
        video = operation.response.generated_videos[0]
        client.files.download(file=video.video)
        output = Path(output_path)
        output.parent.mkdir(parents=True, exist_ok=True)
        video.video.save(str(output))
        print(f"Hero video saved to: {output}")
        return str(output)

    print("ERROR: Video generation failed.")
    sys.exit(1)


def animate_with_references(
    prompt: str,
    reference_paths: list,
    output_path: str = "hero_video.mp4",
    aspect_ratio: str = "16:9",
    duration: str = "8",
    resolution: str = "1080p",
):
    """Generate a video using reference images for character/style consistency (max 3)."""

    api_key = os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        print("ERROR: GOOGLE_API_KEY environment variable not set.")
        sys.exit(1)

    client = genai.Client(api_key=api_key)

    references = []
    for ref_path in reference_paths[:3]:
        if not Path(ref_path).exists():
            print(f"ERROR: Reference image not found: {ref_path}")
            sys.exit(1)
        ref_image = Image.open(ref_path)
        references.append(
            types.VideoGenerationReferenceImage(
                image=ref_image,
                reference_type="asset",
            )
        )

    print(f"Mode: Reference images ({len(references)} refs)")
    print("Generating video (60-180 seconds)...")

    operation = client.models.generate_videos(
        model="veo-3.1-generate-preview",
        prompt=prompt,
        config=types.GenerateVideosConfig(
            reference_images=references,
            aspect_ratio=aspect_ratio,
            duration_seconds=duration,
            resolution=resolution,
        ),
    )

    elapsed = 0
    while not operation.done:
        time.sleep(10)
        elapsed += 10
        operation = client.operations.get(operation)
        print(f"  Generating... ({elapsed}s elapsed)")

    if operation.response and operation.response.generated_videos:
        video = operation.response.generated_videos[0]
        client.files.download(file=video.video)
        output = Path(output_path)
        output.parent.mkdir(parents=True, exist_ok=True)
        video.video.save(str(output))
        print(f"Hero video saved to: {output}")
        return str(output)

    print("ERROR: Video generation failed.")
    sys.exit(1)


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)

    if sys.argv[1] == "--frames":
        first = sys.argv[2]
        last = sys.argv[3]
        prompt = sys.argv[4]
        output = sys.argv[5] if len(sys.argv) > 5 else "hero_video.mp4"
        dur = sys.argv[6] if len(sys.argv) > 6 else "6"
        res = sys.argv[7] if len(sys.argv) > 7 else "1080p"
        animate_with_frames(first, last, prompt, output, dur, res)
    elif sys.argv[1] == "--refs":
        # Collect ref images until we hit a non-file argument
        refs = []
        i = 2
        while i < len(sys.argv) and Path(sys.argv[i]).exists():
            refs.append(sys.argv[i])
            i += 1
        prompt = sys.argv[i] if i < len(sys.argv) else ""
        output = sys.argv[i + 1] if i + 1 < len(sys.argv) else "hero_video.mp4"
        ratio = sys.argv[i + 2] if i + 2 < len(sys.argv) else "16:9"
        dur = sys.argv[i + 3] if i + 3 < len(sys.argv) else "8"
        res = sys.argv[i + 4] if i + 4 < len(sys.argv) else "1080p"
        animate_with_references(prompt, refs, output, ratio, dur, res)
    else:
        image = sys.argv[1]
        prompt = sys.argv[2]
        output = sys.argv[3] if len(sys.argv) > 3 else "hero_video.mp4"
        ratio = sys.argv[4] if len(sys.argv) > 4 else "16:9"
        dur = sys.argv[5] if len(sys.argv) > 5 else "8"
        res = sys.argv[6] if len(sys.argv) > 6 else "1080p"
        animate_hero(image, prompt, output, ratio, dur, res)
