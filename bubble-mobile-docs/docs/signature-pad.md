---
sidebar_position: 25
---

# Signature Pad

### Introduction

The Signature Pad is a professional and customizable signature capture tool designed for Bubble Mobile. It provides a native mobile experience with smooth, responsive touch input, allowing users to draw signatures in real-time. The pad supports full customization of pen, background, and border styles with live preview. It features smooth curve interpolation, precise dot placement, and professional editing tools including undo, redo, and clear. Signatures are exported as high-quality SVG ready for backend storage, with optimized performance and memory management.

### Features

- Native mobile experience with smooth, responsive touch input
- Fully customizable pen, background, and border styles with live preview
- Real-time signature capture with smooth curve interpolation and precise dot placement
- Professional editing features with undo, redo, and clear functionality
- Exports high-quality SVG signatures ready for backend storage
- Production-ready with optimized performance and memory management

### How to use

1. Place signature pad on the view
2. Customize accordingly via the property editor
3. Preview, write signature and access the image (Base 64 svg string) in the "Signature" state

### Element Fields

- **Pen Color**: The color of the pen used for drawing the signature.
- **Border Color**: The color of the border around the signature pad.
- **Background Color**: The background color of the signature pad.
- **Border Radius**: The radius for the rounded corners of the border.
- **Pen Thickness**: The thickness of the pen stroke.

### Exposed States

- **Signature**: Provides the captured signature as a Base64 encoded SVG string.

### Actions

- **Clear**: Clears the current signature.
- **Undo**: Undoes the last drawing action.
- **Redo**: Redoes the last undone action.

### Events

- None

[Editor](https://bubble.io/page?id=mobile-plugins&test_plugin=1750164841711x583193346605580300_current&tab=Design&name=signature-pad&type=page&elements=bTJjJ) | [Preview](https://mobile-plugins.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=signature-pad)