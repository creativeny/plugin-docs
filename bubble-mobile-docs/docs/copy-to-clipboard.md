---
sidebar_position: 17
---

# Copy to Clipboard

### Introduction
Effortlessly Copy and Paste Text to Device Native Clipboard on Mobile Apps!

### Features
Native clipboard integration for seamless text copying.

Simple workflow actions for copy and clear operations.

Real-time state publishing of copied text.

Error handling with dedicated events.

### How to use
1. Drop Clipboard element on the view or within repeating container elements.
2. Run the copy workflow action.

Text is copied to device native clipboard and element's state.

### Exposed States
- **Copied text**: The text that was copied to the clipboard

### Actions
- **Copy to**: Copies the provided text to the clipboard
- **Clear**: Clears the clipboard content

### Events
- **Text is copied to**: This event fires when text is successfully copied
- **Error occurred**: This event fires when an error occurs during copy

[Preview](https://mobile-plugins.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=clipboard)