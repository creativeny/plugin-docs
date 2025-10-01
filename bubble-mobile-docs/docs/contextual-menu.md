---
sidebar_position: 16
---

# Contextual Menu

### Introduction
A Sleek context menu built specifically for Bubble Native. Offering up to six customizable options, allowing custom icons and colors.

### Features
Smart Positioning - Automatically positions the menu to stay within viewport bounds, appearing above or below the trigger element as needed.

Fully Customizable - Add your own text, SVG icons, and colors for each menu option to match your app's design.

Native Performance - Built with React Native for smooth animations and responsive touch interactions.

Easy Integration - Simple setup with Bubble's native workflow system - just configure your options and trigger events.

Flexible Layout - Supports both left and right positioning with intelligent space detection to prevent overflow.

Smooth Animations - Fade-in/out transitions with proper modal overlay for professional user experience.

### How to use
1. Drop Menu element on the view or within a list element.
2. Run the "Show" workflow action to show the menu.
3. Clicking an option fires event.
4. Get icon svg from fonts.google.com/icons. Recommended size 24x24 px

How to Pass in Options

Concatenate Label, SVG, and Color

For instance:
```
Share <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM6 20c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm14 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg> #EA3323
```

### Element Fields
- **Option 1**: The first menu option, formatted as label, SVG icon, and color
- **Option 2**: The second menu option, formatted as label, SVG icon, and color
- **Option 3**: The third menu option, formatted as label, SVG icon, and color
- **Option 4**: The fourth menu option, formatted as label, SVG icon, and color
- **Option 5**: The fifth menu option, formatted as label, SVG icon, and color
- **Option 6**: The sixth menu option, formatted as label, SVG icon, and color
- **Background Color**: The background color of the menu

### Actions
- **Show**: This action shows the menu

### Events
- **Option 1 is Clicked**: This event fires when Option 1 is clicked
- **Option 2 is Clicked**: This event fires when Option 2 is clicked
- **Option 3 is Clicked**: This event fires when Option 3 is clicked
- **Option 4 is Clicked**: This event fires when Option 4 is clicked
- **Option 5 is Clicked**: This event fires when Option 5 is clicked
- **Option 6 is Clicked**: This event fires when Option 6 is clicked

[Editor](https://bubble.io/page?id=mobile-plugins&test_plugin=1750164841711x583193346605580300_current&tab=Design&name=context-menu&type=page&elements=bTJRu) | [Preview](https://mobile-plugins.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=context-menu)