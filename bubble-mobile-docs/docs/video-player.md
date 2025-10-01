---
sidebar_position: 30
---

# Video Player

### Introduction

The Video Player is a powerful, React Native video player component built specifically for Bubble Mobile Apps. It provides native video playback with high-performance rendering optimized for mobile devices, real-time state management, precise time tracking, and event-driven architecture for custom workflows.

### Features

- Native Video Playback - High-performance video rendering optimized for mobile devices
- Real-time State Management - Live tracking of playback status and current time
- Precise Time Tracking - Current playback position in milliseconds for accurate control
- Event-Driven Architecture - Trigger custom workflows on play/pause events
- Responsive Design - Automatically adapts to container dimensions and aspect ratios
- Customizable Appearance - Configure background colors, border radius, and fit modes

### How to use

1. Place the video player element on the view.
2. Set the video URL and optional poster image via the property editor.
3. Configure playback options like auto play, show controls, muted, loop, and fit mode.
4. Preview the element and interact with playback controls.
5. Use exposed states and events to integrate with Bubble workflows.

### Element Fields

- **Video URL**: The URL of the video file to play.
- **Poster**: The URL of the poster image displayed before playback.
- **Auto Play**: Enable automatic playback when the video loads.
- **Show Controls**: Display native video playback controls.
- **Muted?**: Start the video in muted state.
- **LOOP**: Enable looping of the video.
- **Fit Mode**: How the video fits the container (contain, cover, fill).
- **Border Radius**: The border radius for the video container.

### Exposed States

- **Playing**: Indicates if the video is currently playing (yes/no).
- **Paused**: Indicates if the video is paused (yes/no).
- **Video URL**: The current video URL.
- **Current Time (ms)**: The current playback position in milliseconds.

### Events

- **Played**: This event fires when the video starts playing.
- **Paused**: This event fires when the video is paused.

[Editor](https://bubble.io/page?id=mobile-plugins&test_plugin=1750164841711x583193346605580300_current&tab=Design&name=video-player&type=page&elements=bTJGB) | [Preview](https://mobile-plugins.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=video-player)
