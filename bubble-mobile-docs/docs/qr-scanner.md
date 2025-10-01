---
sidebar_position: 2
---

# QR Scanner

### Introduction
Lightning-fast Mobile QR code Scanner!
Effortlessly scan any QR code on the go with unmatched speed and accuracy.

Built specifically for Bubble mobile, it launches instantly, processes codes in real time, and delivers results without lag.

Whether you’re checking event tickets, accessing websites, making payments, or unlocking app features, this scanner is optimized to work seamlessly in any environment.

### Features
Camera Integration - Access device camera for instant QR code scanning with proper permissions.

Real-time Detection - Continuous monitoring detects QR codes immediately upon scanning.

State Publishing - Automatically publishes scanned data for easy workflow integration.

Error Handling - Robust error handling ensures reliable performance in all conditions.

### How to use
1. Drop QR element on the view
2. Preview, preferably on mobile
3. Initialize using "start" action and give camera permission
4. Point and align scanner frame with a valid QR code
5. QR data is published real time to the plugin "scanned data" state
6. Use the "Scanned" event to take preferred action  

### Element Fields
No configurable fields for the QR Scanner element.

### Exposed States
- **Scanned data**: The data extracted from the scanned QR code, published in real time.

### Actions
- **Start**: Initiates and starts the QR scanner operation
- **Reset**: Resets the scanner and clears existing scanned data
- **Stop**: Stops the QR scanner operation

### Events
- **Scanned**: This event fires when a QR code is scanned successfully

[Editor](https://bubble.io/page?id=mobile-plugins&test_plugin=1757170932786x416710606214397950_current&tab=Design&name=qr-scan&type=page&elements=bTMpi0) | [Preview](https://mobile-plugins.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=qr-scan)