---
sidebar_position: 34
---

# Slider Input

### Introduction

The Slider Input is a premium, interactive slider component designed specifically for Bubble's mobile apps. It enables the creation of beautiful regular or range selection interfaces with smooth animations and complete customization control.

This component supports dual modes for simple or range selection, allowing users to adjust values intuitively on mobile devices. It is optimized for React Native with smooth touch interactions and provides precise control over appearance and behavior.

### Features

- Dual Mode Support - Switch between Simple and Range modes.
- Full Customization - Control track colors, thumb colors, sizes, and dimensions.
- Mobile Optimized - Built specifically for React Native with smooth touch interactions.
- Smooth Animations - Fade-in tooltips and scaling effects for premium user experience.
- Step Control - Set custom movement increments for precise value selection.
- State and Events - Accurate state publishing and event triggers.

### How to use

1. Place the slider input element on the view.
2. Customize the fields via the property editor, such as setting min/max values, mode, and colors.
3. Preview the element, preferably on mobile, and interact by dragging the handle.
4. Access the current value through the exposed states when the slider is adjusted.
5. Use the "Value is updated" event to trigger actions on changes.

### Element Fields

- **Min Value**: The minimum value that the slider can be set to.
- **Max Value**: The maximum value that the slider can be set to.
- **Step**: The increment by which the slider value changes.
- **Initial Value**: The starting value for the slider in simple mode.
- **Initial Value Min**: The starting minimum value for the slider in range mode.
- **Initial Value Max**: The starting maximum value for the slider in range mode.
- **Mode**: Select between Simple or Range mode for the slider.
- **Height**: The height of the slider track.
- **Handle Size**: The size of the thumb handle.
- **Background Color**: The color of the inactive track background.
- **Active Fill Color**: The color of the active portion of the track.
- **Handle Color**: The color of the thumb handle.
- **Value Popover**: Enable or disable the display of value tooltips.

### Exposed States

- **Current Value Simple**: The current value in simple mode.
- **Current Value Range**: The current range values (min and max) in range mode.

### Actions

- None

### Events

- **Value is updated**: This event fires when the slider value changes.

[Editor](https://bubble.io/page?id=mobile-plugins&tab=Design&name=slider-input&type=page) | [Preview](https://mobile-plugins.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=slider-input)