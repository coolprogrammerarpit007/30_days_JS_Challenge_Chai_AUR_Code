# 30 Days of JavaScript Challenge

## Day 3: Conditionals, Switch, and Ternary Operator

### Overview

On Day 3, I learned about conditionals in JavaScript, including `if`, `else`, `else if` statements, the `switch` statement, and practiced more with the ternary operator. I also completed several tasks to apply these concepts.

### Tasks

1. **Conditionals**
   - Practiced using `if`, `else`, and `else if` statements to handle different conditions.

2. **Switch Statement**
   - Learned how to use the `switch` statement to handle multiple conditions based on the value of a variable.

3. **Ternary Operator**
   - Applied the ternary operator for concise conditional expressions.

### Code Examples

#### Conditionals

```javascript
let number = 10;

if (number > 0) {
  console.log('The number is positive');
} else if (number < 0) {
  console.log('The number is negative');
} else {
  console.log('The number is zero');
}

// Output: The number is positive

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
  case 7:
    dayName = 'Sunday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName); // Output: Wednesday

let age = 18;
let canVote = age >= 18 ? 'Yes' : 'No';
console.log(canVote); // Output: Yes

let score = 45;
let result = score >= 50 ? 'Pass' : 'Fail';
console.log(result); // Output: Fail

Conclusion
Day 3 focused on understanding and practicing conditionals, the switch statement, and the ternary operator in JavaScript. These concepts are crucial for controlling the flow of the program based on different conditions, and I feel more confident using them.

