---
sidebar_position: 9
---

# Web View

### Introduction

The Web View is a secure in-app WebView component with domain whitelisting and navigation controls for Native Mobile. It provides domain security to prevent unauthorized navigation, smart URL handling, native navigation, real-time updates, and performance optimization.

**Note**: View type must be "Not Scrollable".

### Features

- Domain security - Whitelist specific domains to prevent unauthorized navigation.
- Smart URL handling - Automatically normalizes URLs and adds protocols when needed.
- Native navigation - Built-in back, forward, reload, and go-to functionality.
- Real-time updates - Publishes current URL state and web messages for integration.
- Performance optimized - Efficient loading states and error handling.

### How to use

1. Drop the Web View element on a non-scrollable view.
2. Set the entry URL and allowed domains via the property editor.
3. Use actions like Go to URL to navigate, or Navigate back/forward for browser-like controls.
4. Access the current page URL through the exposed state for workflow integration.

### Element Fields

- **Entry URL**: The initial URL to load in the Web View.
- **Allowed domains**: Comma-separated list of whitelisted domains for security.

### Exposed States

- **current page url**: The current URL loaded in the Web View.

### Actions

- **Navigate back**: Navigates to the previous page in history.
- **Navigate forward**: Navigates to the next page in history.
- **Reload**: Reloads the current page.
- **Go to url**: Navigates to a specific URL.
