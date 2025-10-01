---
sidebar_position: 25
---

# Media Duration

### Introduction
Get duration from any audio or video file URL in seconds!

### Features
Dual Format Output - Provides duration in both seconds and milliseconds as clean whole numbers.

Smart State Management - Publishes duration results to accessible Bubble states for easy workflow integration.

Mobile Optimized - Built specifically for React Native with HTML5 Audio API for maximum compatibility.

Event-Driven Architecture - Triggers custom events for seamless workflow automation.

Robust Error Handling - Gracefully handles invalid URLs, network issues, and unsupported file formats.

### How to use
1. Drop the Media Duration element on the view.
2. Pass in the media URL.
3. Use the Get action to retrieve the duration.
4. Access the published states for the duration values.

### Element Fields
- **Media URL**: The URL of the audio or video file

### Exposed States
- **Duration (Seconds)**: The duration of the media in seconds
- **Duration (Milliseconds)**: The duration of the media in milliseconds
- **Error**: Any error message if retrieval fails

### Actions
- **Get**: Retrieves the duration from the media URL

### Events
- **Is Retrieved**: This event fires when the duration is successfully retrieved
- **Errored**: This event fires when an error occurs during retrieval

[Editor](https://bubble.io/page?id=mobile-plugins&test_plugin=1750164841711x583193346605580300_current&tab=Design&name=duration&type=page&elements=bTJEs) | [Preview](https://mobile-plugins.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=duration)