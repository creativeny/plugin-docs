---
sidebar_position: 29
---

# QR Generator

### Introduction
Generate dynamic QR codes with full customization and upload capabilities. For native mobile. (iOS compatibility available soon)

### Features
Dynamic QR Generation - Create QR codes instantly with custom text, URLs, or data.

Full Color Customization - Customize QR & background color and size.

Cloud Upload - Upload generated QR codes to Bubble's file storage.

Real-time Updates - Live preview and instant regeneration on property changes.

SVG Export - High-quality vector output for crisp display at any size.

### How to use
1. Drop QR element on the page.
2. Configure upload endpoint
3. Add destination url Run the "Generate QR" action to generate QR 
4. Run the "Upload" action to upload QR svg image with link accessible on the element state.

### Element Fields
- **Upload Endpoint**: The endpoint for uploading the generated QR code

### Exposed States
- **SVG string**: The SVG string of the generated QR code
- **uploading**: Whether the QR code is being uploaded
- **upload url**: The URL of the uploaded QR code

### Events
- **is generated**: This event fires when the QR code is generated
- **is uploaded**: This event fires when the QR code is uploaded

### Actions
- **Generate**: Generates the QR code
- **Upload**: Uploads the generated QR code

[Editor](https://bubble.io/page?id=mobile-plugins&app_type=mobile&tab=Design&name=qr-gen&type=page&elements=bTMkw) | [Preview](https://mobile-plugins.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=qr-gen)