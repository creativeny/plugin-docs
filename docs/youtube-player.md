---
sidebar_position: 35
---

# Youtube Player

### Introduction

The Youtube Player is an advanced YouTube player with comprehensive controls and YouTube Shorts support for native mobile. It supports universal playback for regular videos and Shorts, smart controls, cross-platform compatibility, real-time state management, performance optimization, action-ready controls, and developer-friendly integration.

### Features

- Universal playback - Supports regular YouTube videos and YouTube Shorts with optimized display.
- Smart controls - Play/pause toggle, stop, mute/unmute with real-time state tracking.
- Cross-platform - Works seamlessly on web and mobile with consistent behavior.
- State management - Real-time play states (Playing, Paused, Buffering, Ready, Ended) published to Bubble.
- Performance optimized - Efficient WebView implementation with YouTube IFrame API integration.
- Action-ready - Built-in control actions for play/pause toggle, stop, and mute functions.
- Developer friendly - Direct access to player methods and state properties for custom workflows.

### How to use

1. Drop the Youtube Player element on the page
2. Pass in video link
3. Configure accordingly

### Element Fields

- **Video Link**: The YouTube video URL or ID to play.
- **Auto Play**: Enable automatic playback on load.
- **Mute**: Start the player in muted state.
- **Enable Controls**: Display YouTube player controls.
- **Enable Subtitle**: Enable subtitle display.

### Exposed States

- **mute**: The mute state of the player (yes/no).
- **current time (secs)**: The current playback time in seconds.
- **playback state**: The current playback state (Playing, Paused, Buffering, Ready, Ended).

### Events

- **is ready to play**: This event fires when the player is ready to play.

### Actions

- **Play/Pause**: Toggles play/pause of the video.
- **Mute/Unmute**: Toggles the mute state.
- **Stop**: Stops the video playback.


[Editor](https://bubble.io/page?id=mobile-plugins&test_plugin=1756436554340x668226163446906900_current&tab=Design&name=youtube&type=page&elements=bTMZs0) | [Preview](https://mobile-plugins.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=youtube)
