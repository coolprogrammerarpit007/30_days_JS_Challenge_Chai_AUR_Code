Day 7: Mastering Objects in JavaScript
Understanding Objects
Objects in JavaScript are fundamental data structures that store collections of key-value pairs. These key-value pairs, often referred to as properties, can hold various data types, including strings, numbers, booleans, arrays, and even other objects.

Essential Methods
for...in loop: Iterates over the enumerable properties of an object.
JavaScript
const person = { name: 'Alice', age: 30 };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
Use code with caution.

Object.keys(): Returns an array of an object's own enumerable property names.
JavaScript
const keys = Object.keys(person); // ['name', 'age']
Use code with caution.

Object.values(): Returns an array of an object's own enumerable property values.
JavaScript
const values = Object.values(person); // ['Alice', 30]
Use code with caution.

this keyword: Refers to the current object within a method.
Challenges
Challenge 1: Creating and Accessing Objects
Create an object representing a book with properties like title, author, and publicationYear. Access and log these properties.

Challenge 2: Iterating with for...in
Use a for...in loop to iterate over the book object and log each key-value pair.

Challenge 3: Using Object.keys() and Object.values()
Get an array of keys and values from the book object using Object.keys() and Object.values().

Challenge 4: Working with Arrays of Objects
Create an array of objects representing products with properties like name, price, and quantity. Calculate the total value of all products.

Challenge 5: Understanding this
Create an object representing a person with a method called greet that logs a greeting using the person's name.

Additional Exercises
Create a function that takes an object and returns a new object with the keys and values reversed.
Implement a deep clone function for objects.
Create a function to check if two objects are equal.
Tips
Use descriptive property names.
Consider using object destructuring for concise syntax.
Explore nested objects for complex data structures.