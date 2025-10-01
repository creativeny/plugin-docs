---
sidebar_position: 11
---

# Audio Recorder

### Introduction
Capture, Pause/Resume, Playback, and Upload Audio with seamless native mobile performance.

This component enables high-quality audio recording on mobile devices, supporting pause/resume, playback of recordings, and direct upload to Bubble for easy integration.

### Features
High-quality AAC recording - Start, pause, resume, stop, and save/upload to Bubble with ease.

Live duration - Publishes elapsed seconds while recording.

Built-in playback - Play/pause the last recording.

Permission-aware - Safely requests and tracks microphone access.

### How to use
1. Drop Recorder element on the page, must be visible
2. Configure the endpoint field
3. Start recording with Start action
4. Finish recording with the Stop action
5. Playback with the Playback action
6. Save to Bubble with Save action

### Element Fields
- **Endpoint**: Pass in the upload endpoint URL for saving recordings
- **File name**: Pass in the desired filename for the recording
- **Max duration (Secs)**: Pass in the maximum recording duration in seconds
- **Make this file private**: Check to make the uploaded file private
- **Attach to**: Pass in the thing to attach the file to if private

### Exposed States
- **Permission granted**: Exposes whether microphone permission is granted. It publishes a yes/no value
- **Is recording**: Exposes whether recording is active. It publishes a yes/no value
- **Active duration**: Exposes the current recording duration in seconds
- **Playback playing**: Exposes whether playback is active. It publishes a yes/no value
- **Uploaded url**: Exposes the URL of the uploaded recording
- **File size (kb)**: Exposes the file size in kilobytes
- **Saving**: Exposes whether the file is being uploaded. It publishes a yes/no value
- **Playback duration (Secs)**: Exposes the playback duration in seconds
- **Max duration (Secs)**: Exposes the maximum allowed recording duration in seconds

### Actions
- **Start/Pause**: Starts a new recording or pauses the current one
- **Cancel**: Cancels the current recording session
- **Stop**: Stops the recording and finalizes it
- **Playback/pause**: Starts or pauses playback of the last recording
- **Save**: Uploads the recording to the configured endpoint

### Events
- **Is saved**: This event fires when the recording is successfully uploaded
- **Is stopped**: This event fires when recording is stopped

[Editor](https://bubble.io/page?id=mobile-plugins&test_plugin=1753717825228x334478947406315500_current&tab=Design&name=rec-player&type=page&elements=bTLpN) | [Preview](https://mobile-plugins.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=rec-player)