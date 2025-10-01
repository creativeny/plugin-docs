---
sidebar_position: 24
---

# Timeline Chart

### Introduction

The Timeline Chart is a modern timeline chart component specifically built for native mobile applications. It displays events, tasks, and milestones in an elegant chronological timeline with smooth animations and intuitive navigation.

### Features

- Multiple view modes (Month, Week, Day)
- Light and Dark theme support
- Native mobile optimized with touch gestures
- Real-time current time indicator
- Status badges and color coding
- Event filtering by date ranges
- Timeline visualization with connecting lines
- Touch-friendly event selection
- Customizable event colors and styling
- Rich event details with tags and descriptions
- Smooth view transitions and animations
- Jump to specific dates functionality
- High performance with optimized rendering
- Custom status indicators
- Event grouping by date

### How to use

1. Drop component on the view
2. Pass in task data (make sure to check documentation dropdowns) or refer to editor setup for setup sample.

### Element Fields

- **Data Source**: The data source containing the timeline events.
- **Date**: The field name for the event date in the data source.
- **Title**: The field name for the event title in the data source.
- **Description**: The field name for the event description in the data source.
- **Tags**: The field name for event tags in the data source.
- **Status**: The field name for event status in the data source.
- **Task Color**: The field name for event colors in the data source.
- **Color Mode**: Select between Light or Dark theme.

### Exposed States

- **Selected Task**: The currently selected task data.

### Events

- **Task is Selected**: This event fires when a task is selected.

### Actions

- **Jump to**: Navigates the timeline to a specific date.

[Editor](https://bubble.io/page?id=mobile-plugins&test_plugin=1751853693243x931967637496791000_current&tab=Design&name=timeline&type=page&type_id=timeline&elements=bTJtR) | [Preview](https://mobile-plugins.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=timeline)