---
sidebar_position: 10
---

# Audio Player

### Introduction
Audio Player component for native mobile with Shuffle, Repeat, Speed control, Seek and more.

This component provides a comprehensive audio player optimized for mobile environments, supporting multiple tracks, playback controls, and seamless integration with Bubble workflows.

### Features
Auto-play and background mode - Start instantly and optionally hide the entire UI for background audio.

Shuffle and navigation - Non-repeating shuffle plus next/previous track controls.

Smart repeat - Cycle off, playlist, or current track.

Speed control - Toggle playback rate between 1x, 1.25x, 1.5x, 1.75x, 2x.

Flexible UI - Show/hide controls or entire UI.

Bubble integration - Actions (toggle_play, toggle_mute, restart_track, next, prev, speed_toggle) and events (played, paused, ended).

Live states - playing, current_time, total_time, track_index, shuffle, mute, current_speed.

### How to use
1. Drop the Audio player element on the page
2. Pass in audio URL list
3. Configure other settings accordingly

### Element Fields
- **Audio source**: Pass in the list of audio URLs separated by commas
- **Background color**: Pass in the background color
- **Accent color**: Pass in the accent color for controls
- **Border radius**: Pass in the border radius value
- **Show controls**: Check to show playback controls
- **Show UI**: Check to show the entire user interface
- **Auto play**: Check to start playback automatically
- **Playback Speed**: Pass in the initial playback speed (1, 1.25, 1.5, 1.75, 2)

### Exposed States
- **Playing**: Exposes whether the audio is currently playing. It publishes a yes/no value
- **Current time**: Exposes the current playback time in seconds
- **Total time**: Exposes the total duration of the track in seconds
- **No repeat**: Exposes if repeat is off. It publishes a yes/no value
- **Repeating this**: Exposes if repeat is set to current track. It publishes a yes/no value
- **Repeating playlist**: Exposes if repeat is set to playlist. It publishes a yes/no value
- **Shuffling**: Exposes the shuffle state. It publishes a yes/no value
- **Current index**: Exposes the current track index starting from 1
- **Mute**: Exposes the mute state. It publishes a yes/no value
- **Current speed**: Exposes the current playback speed value (1, 1.25, 1.5, 1.75, 2)

### Actions
- **Play/Pause**: Toggles between playing and pausing the audio
- **Mute/Unmute**: Toggles the mute state of the audio
- **Restart track**: Restarts the current track from the beginning
- **Next track**: Switches to the next track in the playlist
- **Previous track**: Switches to the previous track in the playlist
- **Toggle speed**: Cycles through available playback speeds
- **Jump to**: Seeks to a specific time in seconds

### Events
- **Played**: This event fires when audio starts playing
- **Paused**: This event fires when audio is paused
- **Track has ended**: This event fires when the current track ends

[Editor](https://bubble.io/page?id=mobile-plugins&test_plugin=1754981832325x923752818633605100_current&tab=Design&name=audio-player&type=page&elements=bTLwn) | [Preview](https://mobile-plugins.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=audio-player)