# 30 Days of JavaScript Challenge

## Day 2: Operators

### Overview

On Day 2, I learned about different types of operators in JavaScript, including arithmetic, relational, and ternary operators. I also completed several tasks to practice using these operators.

### Tasks

1. **Arithmetic Operators**
   - Practiced using operators such as addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`), modulus (`%`), and increment (`++`) and decrement (`--`).

2. **Relational Operators**
   - Practiced using operators such as equal to (`==`), strict equal to (`===`), not equal to (`!=`), strict not equal to (`!==`), greater than (`>`), less than (`<`), greater than or equal to (`>=`), and less than or equal to (`<=`).

3. **Ternary Operator**
   - Practiced using the ternary operator (`? :`) for conditional expressions.

### Code Examples

#### Arithmetic Operators

```javascript
let a = 10;
let b = 5;

console.log(a + b); // Output: 15
console.log(a - b); // Output: 5
console.log(a * b); // Output: 50
console.log(a / b); // Output: 2
console.log(a % b); // Output: 0

a++;
console.log(a); // Output: 11

b--;
console.log(b); // Output: 4

let age = 20;
let isAdult = age >= 18 ? 'Yes' : 'No';
console.log(isAdult); // Output: Yes

let score = 75;
let grade = score >= 60 ? 'Pass' : 'Fail';
console.log(grade); // Output: Pass

let x = 10;
let y = 5;
let z = '10';

console.log(x == y);  // Output: false
console.log(x == z);  // Output: true
console.log(x === z); // Output: false
console.log(x != y);  // Output: true
console.log(x !== z); // Output: true
console.log(x > y);   // Output: true
console.log(x < y);   // Output: false
console.log(x >= y);  // Output: true
console.log(x <= y);  // Output: false


