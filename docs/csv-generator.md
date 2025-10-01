---
sidebar_position: 18
---

# CSV Generator

### Introduction
Transform Bubble data into downloadable CSV files with full customization and real-time state management. For native mobile.

### Features
Dynamic Column Filtering - Specify exact columns to include using comma-separated headers, with automatic header detection for dynamic data.

Custom File Naming - Set custom CSV file names with automatic .csv extension handling and timestamp fallbacks.

One-Click Upload - Seamlessly upload generated CSV files to Bubble endpoints with progress tracking and error handling.

JSON Input Support - Alternative data input via JSON strings with automatic parsing and header extraction.

Real-Time State Management - Live updates for generation status, upload progress, and data metrics.

Workflow Integration - Full Bubble workflow support with events for success/error handling and state-based conditions.

### How to use
1. Drop the CSV plugin element on the view (must be visible)

2. Pass in column headers and intended data ready to be exported as CSV (IMPORTANT: JSON keys must match with your data field names (Case sensitive). Please refer to the editor setup for data input example)

Example JSON Input (with column headers: name,age,city):

```json
[
  {"name": "John", "age": 30, "city": "New York"},
  {"name": "Jane", "age": 25, "city": "Los Angeles"}
]
```

Generated CSV Output:

```csv
name,age,city
John,30,New York
Jane,25,Los Angeles
```

3. Use the Generate action to generate CSV file

4. Use the Upload action to upload to bubble storage

### Element Fields
- **Upload Endpoint**: The endpoint for uploading the CSV file
- **File Name**: The name of the generated CSV file
- **Column Headers**: The headers for the CSV columns
- **JSON Input**: Alternative JSON data input

### Exposed States
- **File name**: The name of the generated file
- **Generating**: Whether the CSV is being generated
- **Upload url**: The URL where the file is uploaded
- **Upload error**: Any error during upload
- **Uploading**: Whether the file is being uploaded
- **Column count**: Number of columns in the CSV
- **Row count**: Number of rows in the CSV
- **Raw JSON output**: The raw JSON output

### Actions
- **Generate**: Generates the CSV file
- **Upload**: Uploads the CSV to the endpoint
- **Clear**: Clears the generated data

### Events
- **Is generated**: This event fires when the CSV is generated
- **Threw error**: This event fires when an error occurs

[Editor](https://bubble.io/page?id=mobile-plugins&test_plugin=1756328906830x410289644522438660_current&tab=Design&name=csv-generator&type=page&elements=bTMQx1) | [Preview](https://mobile-plugins.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=csv-generator)