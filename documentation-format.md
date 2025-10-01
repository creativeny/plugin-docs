Here is the general format/order for each each plugin documentation

- Introduction
- Features
- How to use
- Element Fields
- Actions
- Exposed states
- Actions
- Events
- Editor link
- Preview link

Rules
- Do not use code arctifacts, i will supply code for your general understandiung of the code context, state and properties extractions alone
- The language must be simple and explanatory
- Sectionalize each section cleaerly
- Do not include emojis
- I will suplly images if necessary do not add images
- Editor and Preview links will be clickable hyperlinks
- For Element Fields, Exposed States, Actions, and Events, make the text before the ":" bold
Sample documentation

# Introduction
Lightning-fast Mobile QR code Scanner! 
Effortlessly scan any QR code on the go with unmatched speed and accuracy.

Built specifically for Bubble mobile, it launches instantly, processes codes in real time, and delivers results without lag.

Whether you’re checking event tickets, accessing websites, making payments, or unlocking app features, this scanner is optimized to work seamlessly in any environment.

# Features
📷 Camera Integration - Access device camera for instant QR code scanning with proper permissions.

⚡ Real-time Detection - Continuous monitoring detects QR codes immediately upon scanning.

🔄 State Publishing - Automatically publishes scanned data for easy workflow integration.

🛡️ Error Handling - Robust error handling ensures reliable performance in all conditions.

# How to use
1. Drop QR element on the view
2. Preview, preferably on mobile
3. Initialize using "start" action and give camera permission
4. Point and align scanner frame with a valid QR code
5. QR data is published real time to the plugin "scanned data" state
6. Use the "Scanned" event to take preferred action  

# Element Fields
- Audio source: Pass in the audio url
- Background Color: Pass in the background color
- Show Controls: Check to show controllers
etc...

# Exposed States 
- Playing: Exposes the playing states. It published a yes/no value
- Current time: Exposes the current time of the media being played in seconds
- No repeat: Exposes the repeat  state of the media. It published a yes/no value
- Current speed: Exposes the current speed value in 1, 1.5, 1.75, 2
etc...

# Actions
- Start: Initiates and and starts the qr scannier operatiopn
- Reset: Resets the scanner and clears existing value
-  Stop: It stops the QR scanner operation
etc...

# Events
- Scanned: This event fires when QR is scanned successfully
- Paused: This event fires when Audio is paused

e.g. [Editor](https://editor-link.com)  |  [Preview](https://preview-link.com)