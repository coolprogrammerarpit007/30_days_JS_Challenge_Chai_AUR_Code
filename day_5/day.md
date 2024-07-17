# 30 Days of JavaScript Challenge

## Day 5: Functions

### Overview

On Day 5, I learned about functions in JavaScript, including function declarations, function expressions, arrow functions, parameters, default parameters, and higher-order functions. I also completed several tasks to practice using these concepts.

### Tasks

1. **Function Declarations**
   - Learned how to declare functions using the `function` keyword.

2. **Function Expressions**
   - Practiced creating functions as expressions and assigning them to variables.

3. **Arrow Functions**
   - Implemented concise functions using arrow function syntax.

4. **Parameters and Default Parameters**
   - Used parameters to pass values to functions and set default values for parameters.

5. **Higher-Order Functions**
   - Applied higher-order functions that take other functions as arguments or return functions as results.

### Code Examples

#### Function Declarations

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Output: Hello, Alice!

const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet('Bob')); // Output: Hello, Bob!

const greet = (name) => `Hello, ${name}!`;

console.log(greet('Charlie')); // Output: Hello, Charlie!

function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

console.log(greet());       // Output: Hello, Guest!
console.log(greet('Dave')); // Output: Hello, Dave!


// Function that takes another function as an argument
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);
// Output: 0, 1, 2

// Function that returns another function
function createGreeting(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeting('Hello');
console.log(sayHello('Eve')); // Output: Hello, Eve!
