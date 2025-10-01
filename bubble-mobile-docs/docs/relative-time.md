---
sidebar_position: 31
---

# Relative Time

### Introduction
Converts timestamps into human-readable relative time formats with full language customization. For native mobile.

### Features
Real-time updates - Automatically refreshes at configurable intervals.

Multi-language support - Fully customizable text for any language.

Smart time ranges - Shows seconds, minutes, hours, yesterday, last [day], or dates.

Intelligent pluralization - Automatically handles singular/plural forms.

Flexible suffix control - Toggle "ago" suffix on/off.

### How to use
1. Drop the Relative Time element on the view.
2. Pass in the timestamp to compare.
3. Configure the refresh interval and custom text for time units.
4. Access the Time state for the formatted relative time.

### Element Fields
- **Compare time**: Pass in the date/time the current time 
- **Refresh interval**: The interval for updating the relative time in seconds
- **Suffix**: Whether to show the "ago" suffix
- **Seconds**: Custom text for seconds (e.g., "s")
- **Minutes**: Custom text for minutes (e.g., "m")
- **Hours**: Custom text for hours (e.g., "h")
- **Yesterday**: Custom text for yesterday
- **Last**: Custom text for "last" (e.g., "last")
- **Ago**: Custom text for "ago"
- **Days**: Custom text for days (e.g., "d")

### Exposed States
- **Time**: The formatted relative time string

[Editor](https://bubble.io/page?id=mobile-plugins&test_plugin=1753745727501x588650109008347100_current&tab=Design&name=relative-time&type=page&elements=bTLVc) | [Preview](https://mobile-plugins.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=relative-time)