---
sidebar_position: 12
---

# Calendar

### Introduction
Full Calendar (Mobile) is built for Native Bubble Mobile.

This modern calendar solution offers seamless calendar event management and date navigation with a native feel.

# Features
Three view modes: Month, Week, and Day views with smooth transitions.

Intuitive swipe navigation between dates and views.

Responsive design that adapts to any screen size.

Customizable color schemes with Light and Dark mode support (Color picker element inclusive).

Multi-language support (English, French, Spanish).

Real-time event updates and dynamic data binding.

Advanced event visualization with multi-day event support.

Current time indicator in week and day views.

Jump-to-date functionality with multiple navigation methods.

### How to use
1. Drop the Calendar element on the page
2. Configure the Event Data Source with your events
3. Set the Title, Start Date, End Date, and other fields as needed
4. Use the Jump to action to navigate to specific dates
5. Handle the Event is Clicked and Date is Clicked events for interactions
6. Customize colors, view modes, and language settings via fields

### Element Fields
- **Event Data Source**: The data source containing the list of events
- **Title**: The field name for the event title in the data source
- **Start Date**: The field name for the event start date in the data source
- **End Date**: The field name for the event end date in the data source
- **Disabled Dates**: The list of dates to disable or block
- **Event Color**: The field name for event colors in the data source
- **All Day**: The field name for all-day event flag in the data source
- **Accent Color**: The primary accent color for the calendar
- **Color Mode**: The color scheme, Light or Dark
- **Monday Starts Week**: Whether weeks start on Monday
- **Month Names**: Comma-separated list of month names for multi-language support
- **Day Names**: Comma-separated list of day names for multi-language support
- **View Labels**: Comma-separated labels for Month, Week, Day views

### Exposed States
- **Selected Event**: Exposes the data of the clicked event
- **Selected Date**: Exposes the clicked date
- **Current View Date**: Exposes the first date of the current view
- **Is Loading**: Exposes whether the calendar is loading data

### Actions
- **Jump to**: Navigates the calendar to a specific date
- **Date picker**: Opens the date picker modal for navigation

### Events
- **Event is Clicked**: This event fires when an event is clicked
- **Date is Clicked**: This event fires when a date is clicked

[Editor](https://bubble.io/page?id=mobile-plugins&test_plugin=1750164841711x583193346605580300_current&tab=Design&name=calendar&type=page&elements=bTJUn0) | [Preview](https://mobile-plugins.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=calendar)