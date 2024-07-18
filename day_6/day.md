# 30 Days of JavaScript Challenge

## Day 6: Arrays and Array Methods

### Overview

On Day 6, I learned about arrays in JavaScript and various array methods for manipulating and iterating through arrays. I also completed several tasks to practice using these array methods.

### Tasks

1. **Creating Arrays**
   - Learned how to create arrays using array literals and the `Array` constructor.

2. **Accessing Array Elements**
   - Practiced accessing and modifying array elements using index notation.

3. **Array Methods**
   - Explored common array methods such as `push`, `pop`, `shift`, `unshift`, `concat`, `slice`, `splice`, `forEach`, `map`, `filter`, `reduce`, and `find`.

### Code Examples

#### Creating Arrays

```javascript
// Array literal
let fruits = ['Apple', 'Banana', 'Cherry'];

// Using Array constructor
let numbers = new Array(1, 2, 3, 4, 5);

console.log(fruits);  // Output: ['Apple', 'Banana', 'Cherry']
console.log(numbers); // Output: [1, 2, 3, 4, 5]

let colors = ['Red', 'Green', 'Blue'];

console.log(colors[0]); // Output: Red
console.log(colors[2]); // Output: Blue

colors[1] = 'Yellow';
console.log(colors);    // Output: ['Red', 'Yellow', 'Blue']

let numbers = [1, 2, 3, 4, 5];

// Adding elements
numbers.push(6);     // Adds 6 to the end
numbers.unshift(0);  // Adds 0 to the beginning

console.log(numbers); // Output: [0, 1, 2, 3, 4, 5, 6]

// Removing elements
numbers.pop();       // Removes 6 from the end
numbers.shift();     // Removes 0 from the beginning

console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Iterating with forEach
numbers.forEach(num => {
  console.log(num);
});

// Output:
// 1
// 2
// 3
// 4
// 5

// Mapping array elements
let doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Filtering array elements
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Reducing array elements
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15

// Finding an element
let found = numbers.find(num => num > 3);
console.log(found); // Output: 4

Conclusion
Day 6 focused on understanding arrays in JavaScript and various array methods for manipulation and iteration. Arrays are versatile and fundamental for storing collections of data, and I feel more confident using array literals, accessing elements, and applying array methods to solve tasks.