---
name: animate-hero
description: Use when the user wants to animate a hero image into a video using Google's Veo 3.1 model. Triggers on "animate hero", "create hero video", "animate this image", "image to video", "hero animation", "veo video", "generate video from image", "animate landing page hero", "create hero motion", "make it move", "add motion to the hero", "turn this image into video", "video from this image", "add animation", or when the user has a hero image and wants cinematic motion for a landing page. Uses veo-3.1-generate-preview via google-genai SDK. Supports image-to-video, first+last frame interpolation, and reference images.
---

# Animate Hero with Veo 3.1

Transform a hero image into a cinematic video. Generation takes 60-180 seconds. Veo 3.1 generates synchronized audio natively.

## Prerequisites

```bash
pip install google-genai Pillow
export GOOGLE_API_KEY=your_key
```

## Mode 1: Image-to-Video (most common)

Animates a single hero image. The image becomes the starting frame.

```bash
python ${CLAUDE_SKILL_DIR}/scripts/animate.py <image_path> "<motion_prompt>" [output_path] [aspect_ratio] [duration] [resolution]
```

| Parameter | Values | Default |
|-----------|--------|---------|
| image_path | Path to hero image (required) | - |
| motion_prompt | Description of desired motion (required) | - |
| output_path | Where to save video | hero_video.mp4 |
| aspect_ratio | 16:9, 9:16 | 16:9 |
| duration | 4, 6, 8 (seconds) | 8 |
| resolution | 720p, 1080p, 4k | 1080p |

```bash
python ${CLAUDE_SKILL_DIR}/scripts/animate.py assets/hero.png "Slow cinematic push-in, subtle parallax effect, soft bokeh particles floating upward. Smooth hypnotic movement. Ambient electronic hum." assets/hero_video.mp4 16:9 8 1080p
```

## Mode 2: First + Last Frame interpolation

Creates a video transitioning between two images. Great for reveals.

```bash
python ${CLAUDE_SKILL_DIR}/scripts/animate.py --frames <first_image> <last_image> "<prompt>" [output_path] [duration] [resolution]
```

```bash
python ${CLAUDE_SKILL_DIR}/scripts/animate.py --frames hero_start.png hero_end.png "Smooth cinematic transition revealing the product" hero_video.mp4 6 1080p
```

## Mode 3: Reference images

Uses up to 3 reference images for character/style consistency without using them as frames.

```bash
python ${CLAUDE_SKILL_DIR}/scripts/animate.py --refs ref1.png ref2.png "The character walks through a garden" hero_video.mp4 16:9 8 1080p
```

## Animation prompt tips for landing page heroes

**Subtle push-in** (most common):
> Slow cinematic push-in over 8 seconds. Subtle parallax: foreground drifts faster than background. Soft bokeh particles float upward. Ultra-smooth, hypnotic. Ambient electronic hum.

**Parallax depth**:
> Subtle parallax drift: foreground moves right, background moves left over 8 seconds. Soft focus transition from edges to center. Gentle atmospheric haze.

**Atmospheric/mood**:
> Static camera with living atmosphere: gentle light rays shift, subtle shadows lengthen, soft particles float. Warm to cool color shift over 8 seconds. Soft ambient soundscape.

**Product reveal**:
> Camera slowly orbits 30 degrees around the product over 8 seconds. Light catches different surfaces revealing texture. Background stays blurred. Subtle ambient tone.

## Next steps

Pass the generated video to **build-landing** skill to embed as the hero background.
