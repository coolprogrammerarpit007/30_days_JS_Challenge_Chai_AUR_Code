# 30 Days of JavaScript Challenge

## Day 9: Document Object Model (DOM)

### Overview

On Day 9, I learned about the Document Object Model (DOM) in JavaScript. The DOM is an essential concept for web development, as it represents the structure of a webpage and allows us to manipulate the HTML and CSS dynamically. I completed several tasks to practice using DOM methods and properties.

### Tasks

1. **Selecting Elements**
   - Practiced selecting elements using methods like `getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector`, and `querySelectorAll`.

2. **Manipulating Elements**
   - Learned how to manipulate element properties, attributes, and styles.

3. **Creating and Removing Elements**
   - Practiced creating new elements, adding them to the DOM, and removing existing elements.

4. **Event Handling**
   - Implemented event listeners to handle user interactions like clicks, input, and form submissions.

### Code Examples

#### Selecting Elements

```javascript
// Selecting an element by ID
const title = document.getElementById('title');
console.log(title);

// Selecting elements by class name
const items = document.getElementsByClassName('item');
console.log(items);

// Selecting elements by tag name
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

// Selecting the first matching element
const firstItem = document.querySelector('.item');
console.log(firstItem);

// Selecting all matching elements
const allItems = document.querySelectorAll('.item');
console.log(allItems);


const title = document.getElementById('title');

// Changing the text content
title.textContent = 'New Title';

// Changing the HTML content
title.innerHTML = '<em>New Title</em>';

// Changing styles
title.style.color = 'blue';
title.style.fontSize = '24px';

// Changing attributes
title.setAttribute('data-custom', 'customValue');
console.log(title.getAttribute('data-custom'));

// Creating a new element
const newItem = document.createElement('li');
newItem.textContent = 'New Item';

// Adding the new element to the DOM
const list = document.getElementById('list');
list.appendChild(newItem);

// Removing an existing element
const oldItem = document.getElementById('oldItem');
oldItem.remove();

const button = document.getElementById('button');

// Adding a click event listener
button.addEventListener('click', () => {
  alert('Button was clicked!');
});

// Handling input events
const input = document.getElementById('input');
input.addEventListener('input', (event) => {
  console.log('Input value:', event.target.value);
});

// Handling form submission
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submitted!');
});

Conclusion
Day 9 focused on understanding and practicing working with the DOM in JavaScript. The DOM is a powerful API for manipulating the structure and content of web pages, and I feel more confident selecting, manipulating, creating, and handling events with DOM elements.