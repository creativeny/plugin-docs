---
sidebar_position: 14
---

# Chat Thread

### Introduction
Real-time chat experience—built for native mobile.

Effortlessly add modern messaging, file sharing, and beautiful customization to your app in minutes!

### Features
Real time message update.

Light & Dark mode with full customization.

Smart message grouping.

Profile avatars and seamless user distinction.

Effortless file and image uploads and sharing.

Lightning-fast, touch-optimized, and keyboard-aware.

Real-time state publishing and event triggers.

Plug-and-play— easy to setup.

Reliable error handling for smooth conversations.

### How to use
- Drop chat component on a fixed (not scrollable) view
- Pass in message data
- Customize accordingly
- Ready to use!

### Element Fields
- **Data source**: The data source containing the messages
- **Data Type**: The type of data in the source
- **Messages**: The field for message text
- **Avatar**: The field for sender avatar
- **Sender id**: The field for sender ID
- **Message date**: The field for message date
- **Attachments**: The field for message attachments
- **Current user id**: The ID of the current user
- **Header**: The header configuration
- **Recipient name**: The name of the recipient
- **Recipient avatar**: The avatar of the recipient
- **Picture upload**: Enable picture upload
- **File upload**: Enable file upload
- **Upload endpoint**: The endpoint for file uploads
- **Texts**: Text configurations
- **Input Placeholder**: Placeholder text for input
- **Empty State**: Text for empty state
- **Loading**: Text for loading state
- **Color mode**: Light or Dark mode
- **Recipient bubble**: Color for recipient bubbles
- **Recipient text**: Color for recipient text
- **Current user bubble**: Color for current user bubbles
- **Current user text**: Color for current user text
- **Placeholder**: Color for placeholders
- **Send button**: Color for send button

### Exposed States
- **Message**: Exposes the current message text
- **Message id**: Exposes the current message ID
- **Attachments (Base 64)**: Exposes attachments as base64
- **File count**: Exposes the number of files
- **Saved urls**: Exposes the saved upload URLs

### Events
- **Message is sent**: This event fires when a message is sent
- **Menu is clicked**: This event fires when the menu is clicked
- **Message is clicked**: This event fires when a message is clicked
- **Uploads are completed**: This event fires when uploads are completed

[Editor](https://bubble.io/page?id=mobile-plugins&test_plugin=1752755642736x606313421076955100_current&tab=Design&name=chat-bubbles&type=page&elements=bTKYO1) | [Preview](https://mobile-plugins.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=message-options)