---
sidebar_position: 32
---

# Run Javascript

### Introduction
Execute custom JavaScript functions, with the ability to publish results back to Bubble's event and state system.

### Features
Execute Custom JavaScript Functions

Publish Multiple Output Variables (up to 4)

Automatic Array/List Detection & Handling

Real-time Script Execution

Safe Error Handling & Validation

Trigger Events on Success/Error

Dual Output Types: Single Values & Lists

Seamless Bubble Integration

Smart Function Detection & Execution

### How to use
Refer to the instructions and documentation within the demo page for detailed usage.

### Overview
The Run Script Plugin lets you execute JavaScript code and send results back to Bubble. It supports up to four outputs, each of which can be a single value or an array.

### Important Rules (Do not skip)
1. Use the "publish" keyword to output values.
2. All variables must be declared inside a function.
3. The publish statement must appear outside the function.
4. You can publish multiple values by separating them with commas in a single publish statement.
5. Supported data types: strings, numbers, booleans, dates, arrays containing any of these types.
6. Object types are not supported.
7. The JavaScript plugin element must be visible on the view. Do not hide within a hidden container.
8. When using the Run JavaScript action on page load, add a 1000ms delay to prevent errors from premature page load.
9. The plugin element MUST be visible on the editor. To avoid errors, do not hide or place in a hidden container.

### Basic usage
```
function myFunction() {
  const result = "Build Launch 🚀";
}

publish result
// Result: Output 1: "Build Launch 🚀"
```

### Multiple Outputs
⚠️ Output order must correlate with publish order within the code
```
function generateData() {
  const name = "John Doe";
  const age = 25;
  const isActive = true;
  const date = new Date();
}

publish name, age, isActive, date
// Result: Output 1: "John Doe", Output 2: 25, Output 3: true, Output 4: current date
```

### List outputs
List outputs are automatically detected
```
function createList() {
  const numbers = [1, 2, 3, 4, 5];
  const names = ["Alice", "Bob", "Charlie"];
  const scores = [85, 92, 78];
}

publish numbers, names, scores
// Result: List 1: [1, 2, 3, 4, 5], List 2: ["Alice", "Bob", "Charlie"], List 3: [85, 92, 78]
```

### Mixed outputs (Single and List)
List outputs are automatically detected
```
function getUserInfo() {
  const userName = "John Smith";
  const userAge = 28;
  const userHobbies = ["reading", "swimming", "cooking"];
  const userScores = [85, 92, 78, 95];
}

publish userName, userAge, userHobbies, userScores
// Result: Output 1: "John Smith", Output 2: 28, List 3: ["reading", "swimming", "cooking"], List 4: [85, 92, 78, 95]
```

### Element Fields
- **output**: The primary output variable for the script
- **output 1**: The first output variable
- **output 2**: The second output variable
- **output 3**: The third output variable
- **output 4**: The fourth output variable

### Exposed States
- **Output 1**: The first output value from the script
- **Output 2**: The second output value from the script
- **Output 3**: The third output value from the script
- **Output 4**: The fourth output value from the script
- **List 1**: The first list output from the script
- **List 2**: The second list output from the script
- **List 3**: The third list output from the script
- **List 4**: The fourth list output from the script

### Events
- **is executed**: This event fires when the script is executed successfully
- **error occurred**: This event fires when an error occurs during execution

### Actions
- **Run**: Executes the JavaScript script

[Editor](https://bubble.io/page?id=mobile-plugins&test_plugin=1753745727501x588650109008347100_current&tab=Design&name=java-script&type=page&elements=bTLMn) | [Preview](https://mobile-plugins.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=java-script)