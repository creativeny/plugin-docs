---
sidebar_position: 22
---

# Dropdown

### Introduction
Single/Multi Select with Search feature. Native Dropdown

### Features
Multi purpose: Use as a multiselect or regular dropdown.

Customizable Styling: Tailor the appearance of your dropdowns with style variables for colors, border radii, and more, ensuring seamless uniformity with your brand language.

Dynamic Data Handling: Efficiently load and manage large datasets with built-in support for dynamic data sources, ensuring your dropdowns are always up-to-date.

Fuzzy Search: Enhance user experience with integrated fuzzy search capabilities, allowing users to quickly find options even in extensive lists.

Multi-Select Support: Allow users to select multiple options with ease, complete with visual feedback and state management.

Accessibility: Designed with accessibility in mind, ensuring all users can interact with your dropdowns effectively on all devices.

Event Handling: Built-in event triggers for selection changes, enabling seamless integration with your application's logic.

### Use Cases
E-commerce Platforms: Enhance product filtering and selection processes with intuitive dropdowns.

Data-Driven Applications: Manage complex data sets with ease, providing users with a streamlined selection experience.

Content Management Systems: Improve content categorization and tagging with flexible dropdown options.

### How to use
Drop on the page and configure relevant fields.

Note: Currently there's no support for Autobinding. Escalated to bubble and will be implemented upon its availability. Details: https://cutt.ly/idea-board

### Element Fields
- **Data**: The data for the dropdown
- **Mode**: The selection mode (Single or Multi)
- **Data Type**: The type of data
- **Data Source**: The source of the data
- **Caption**: The caption field for display
- **Initial Options (Single)**: Initial selection for single mode
- **Initial Options (Multi)**: Initial selections for multi mode
- **Customization**: Customization options
- **Placeholder**: The placeholder text
- **Dropdown Type**: The type of dropdown (Sheet or Classic)
- **Enable Search**: Enable search functionality
- **Disable Selection**: Disable selection
- **Border Radius**: The border radius
- **Border Thickness**: The border thickness
- **Max Selection**: Maximum number of selections
- **Checkbox Color**: Color for checkboxes
- **Border Color**: Border color
- **Background Color**: Background color
- **Bottom Sheet Color**: Color for bottom sheet
- **Placeholder Color**: Placeholder text color
- **Language**: The language
- **Max Selection Text**: Text for max selection reached
- **Search Placeholder**: Placeholder for search
- **Clear Selection Text**: Text for clear selection

### Exposed States
- **Selected Item**: The selected item for single mode
- **Selected Items (List)**: The list of selected items for multi mode
- **Search is focused**: Whether the search input is focused
- **Dropdown is focused**: Whether the dropdown is focused

### Actions
- **Clear**: Clears the current selection

### Events
- **Is updated**: This event fires when the selection is updated
- **Search is focused**: This event fires when the search is focused
- **Is focused**: This event fires when the dropdown is focused

[Editor](https://bubble.io/page?id=mobile-plugins&test_plugin=1750164841711x583193346605580300_current&tab=Design&name=dropdown&type=page&elements=bTIyb) | [Preview](https://mobile-plugins.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=dropdown)