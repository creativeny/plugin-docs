---
sidebar_position: 26
---

# Multi-File Uploader

### Introduction
Multi-File Uploader for Bubble Mobile. Preview files before uploading.

### Features
Multi-file selection - Pick multiple documents, images, and files at once.

Preview files before uploading to bubble database.

Real-time progress - Visual progress bars with percentage tracking for each file.

File type restriction - Control what users are able to upload.

Smart file validation - Automatic file size and type validation with error handling.

Batch operations - Upload all files simultaneously with individual progress tracking.

Configurable limits - Set maximum file count and total size limits with visual feedback.

Customizable styling - Accent colors, button text, and visual indicators.

File management - Remove individual files or clear all with reset button.

Language support - Customize all UI texts to preferred language.

Fast Events triggers and state publishing.

Color Mode - Toggle Light and Dark Mode.

### How to use
1. Drop element on view
2. Add upload endpoint
3. Use the "Select files" action to select files
4. Access to states like, Upload urls, file count etc.

### Element Fields
- **Upload endpoint**: The Bubble API endpoint for uploading files to your database.

  Test:
  ```
  https://app-id.bubbleapps.io/version-test/fileupload
  ```

  Live:
  ```
  https://app-id.bubbleapps.io/version-live/fileupload
  ```

  Replace "app-id" with your actual Bubble app ID.
- **Max size (MB)**: The maximum total size for all files in MB. Example: 10 (limits total to 10MB)
- **Max files**: The maximum number of files that can be selected. Example: 5 (allows up to 5 files)
- **Allowed file types**: Comma-separated list of allowed file extensions. Example: pdf,docx,jpg,png 
- **Language**: The language code for UI text localization. Example: en (English), es (Spanish)
- **Button text**: Custom text for the upload button. Example: "Upload Files"
- **Error text**: Custom text for error messages. Example: "Upload failed - please try again"
- **File count**: Whether to display the file count in the UI. Set to yes/no
- **Total**: Whether to display the total file size in the UI. Set to yes/no
- **Clear**: Custom text for the clear selection button. Example: "Clear All"
- **File restriction**: Enable or disable file type and size restrictions. Set to yes/no
- **Add files button**: Custom text for the add files button. Example: "Add Files"
- **Add photos button**: Custom text for the add photos button. Example: "Add Photos"
- **Color mode**: The theme mode for the uploader. Options: Light or Dark
- **Accent color**: Accent color for buttons and highlights. Example: #FF6B35 (orange)

### Exposed States
- **Selection count**: The number of selected files
- **Uploaded URLS**: The list of uploaded file URLs

### Events
- **Upload is completed**: This event fires when the upload is completed
- **Error occurred**: This event fires when an error occurs

### Actions
- **Select files**: Opens the file selector
- **Pull up selection**: Pulls up the selection sheet
- **Select photos**: Opens the photo selector

[Editor](https://bubble.io/page?id=mobile-plugins&test_plugin=1754405309047x650283945518432300_current&tab=Design&name=multi-file-upload&type=page&elements=bTLjT0) | [Preview](https://mobile-plugins.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=multi-file-upload)