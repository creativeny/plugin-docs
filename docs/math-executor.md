---
sidebar_position: 33
---

# Math Executor

### Introduction
Calculate Simple and Complex dynamic math expressions and get the result as number and text.

This component provides advanced mathematical calculation capabilities for mobile environments, supporting arithmetic operations, BODMAS order of operations, trigonometry, logarithms, and complex expressions with seamless Bubble integration.

### Features
**Advanced calculations** - Supports arithmetic, BODMAS, trigonometry, logarithms, and complex expressions.

**Dual outputs** - Returns both numeric and text formats.

**Smart events** - Triggers "calculated" on success and "error" on failures caused by invalid input expressions.

### How to use
1. Drop the Math Executor element on the page
2. Set the math expression in the "Math Expression" field
3. Use the "Calculate" action to execute the calculation
4. Access results through exposed states or listen to events

### Element Fields
- **Math Expression**: The mathematical expression to be calculated (e.g., "2 + 3 * 4", "sin(45)", "log(10)")

### Exposed States
- **result number**: The calculated result as a number
- **result text**: The calculated result as a text string

### Actions
- **Calculate**: Executes the mathematical expression and updates the result states

### Events
- **calculated**: This event fires when the calculation is successful
- **error**: This event fires when an error occurs due to invalid input expressions

### Supported Operations
The Math Executor supports a wide range of mathematical operations:

**Basic Arithmetic:**
- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Division: `/`
- Exponentiation: `**` or `^`
- Modulo: `%`

**Order of Operations (BODMAS):**
- Parentheses: `()`
- Exponents: `**`
- Multiplication and Division: `*`, `/`
- Addition and Subtraction: `+`, `-`

**Mathematical Functions:**
- Trigonometric: `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`
- Logarithmic: `log()`, `log10()`, `ln()`
- Power: `pow()`, `sqrt()`
- Rounding: `round()`, `floor()`, `ceil()`
- Absolute: `abs()`
- Random: `random()`

**Constants:**
- Pi: `Math.PI` or `PI`
- Euler's number: `Math.E` or `E`

### Example Expressions
```
2 + 3 * 4                    // Result: 14
(2 + 3) * 4                  // Result: 20
sin(Math.PI / 2)             // Result: 1
log(10)                      // Result: 2.302585092994046
sqrt(16)                     // Result: 4
pow(2, 3)                    // Result: 8
round(3.7)                   // Result: 4
```

### Error Handling
The component includes built-in error handling for:
- Empty or null expressions
- Invalid characters (HTML tags, semicolons, braces)
- Mathematical errors (division by zero, invalid functions)
- Syntax errors in expressions



### Security Features
- Input validation to prevent malicious code execution
- Character filtering to block potentially dangerous inputs
- Safe evaluation using controlled JavaScript execution

[Editor](https://bubble.io/page?id=mobile-plugins&test_plugin=1759581391156x130513735923269630_current&tab=Design&name=math-expression&type=page&elements=bTMmt) | [Preview](https://mobile-plugins.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=math-expression)
