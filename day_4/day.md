# 30 Days of JavaScript Challenge

## Day 4: Loops

### Overview

On Day 4, I learned about different types of loops in JavaScript, including `for`, `while`, `do-while`, nested loops, and how to use `break` and `continue` statements. I also completed several tasks to practice using these loops.

### Tasks

1. **For Loop**
   - Practiced iterating through sequences using the `for` loop.

2. **While Loop**
   - Used the `while` loop to repeat actions as long as a condition is true.

3. **Do-While Loop**
   - Implemented the `do-while` loop to execute a block of code at least once before checking the condition.

4. **Nested Loops**
   - Applied nested loops to work with multi-dimensional arrays or perform repeated actions within loops.

5. **Break and Continue**
   - Utilized the `break` statement to exit a loop prematurely and the `continue` statement to skip the current iteration and proceed to the next.

### Code Examples

#### For Loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Output: 0, 1, 2, 3, 4

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

// Output: 0, 1, 2, 3, 4

let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);

// Output: 0, 1, 2, 3, 4

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}

// Output:
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
// i = 1, j = 1
// i = 1, j = 2
// i = 2, j = 0
// i = 2, j = 1
// i = 2, j = 2

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// Output: 0, 1, 2

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// Output: 0, 1, 2, 4

Conclusion
Day 4 was focused on understanding and practicing different types of loops in JavaScript. These loops are fundamental for iterating over sequences and performing repeated actions, and I feel more confident using them.



