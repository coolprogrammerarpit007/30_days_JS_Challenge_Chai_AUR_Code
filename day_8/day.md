# 30 Days of JavaScript Challenge

## Day 8: ES6 Features

### Overview

On Day 8, I learned about various ES6 features, including template literals, array and object destructuring, the spread and rest operators, default parameters, and enhanced object literals. I completed several tasks to practice using these new features.

### Tasks

1. **Template Literals**
   - Practiced using template literals for string interpolation.

2. **Array and Object Destructuring**
   - Learned how to extract values from arrays and objects using destructuring syntax.

3. **Spread and Rest Operators**
   - Used the spread operator to expand arrays and objects and the rest operator to handle function parameters.

4. **Default Parameters**
   - Set default values for function parameters.

5. **Enhanced Object Literals**
   - Created objects using the enhanced object literal syntax.

### Code Examples

#### Template Literals

```javascript
const name = 'Alice';
const age = 25;

const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting);
// Output: Hello, my name is Alice and I am 25 years old.

// Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// Object Destructuring
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

const { firstName, age } = person;

console.log(firstName); // Output: John
console.log(age); // Output: 30

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Rest Operator
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Output: 6

function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!
console.log(greet('Bob')); // Output: Hello, Bob!

const name = 'Alice';
const age = 25;

const person = {
  name,
  age,
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
};

console.log(person.greet());
// Output: Hello, my name is Alice and I am 
