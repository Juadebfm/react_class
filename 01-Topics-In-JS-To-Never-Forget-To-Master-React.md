# JavaScript Fundamentals for React - Teaching Notes

## Table of Contents

1. [Variables and Data Types](#variables-and-data-types)
2. [Functions](#functions)
3. [Arrays and Array Methods](#arrays-and-array-methods)
4. [Objects and Object Methods](#objects-and-object-methods)
5. [Destructuring](#destructuring)
6. [Template Literals](#template-literals)
7. [Conditional Statements](#conditional-statements)
8. [ES6+ Features](#es6-features)
9. [Asynchronous JavaScript](#asynchronous-javascript)
10. [Modules (Import/Export)](#modules-importexport)
11. [DOM Manipulation Basics](#dom-manipulation-basics)

---

## Variables and Data Types

### What You Need to Know:

- `let`, `const`, and `var` (focus on `let` and `const`)
- Primitive types: string, number, boolean, null, undefined
- Reference types: objects, arrays

### Examples:

```javascript
// Variables
const name = "John"; // String - can't be reassigned
let age = 25; // Number - can be reassigned
let isStudent = true; // Boolean

// Arrays
const hobbies = ["reading", "coding", "gaming"];

// Objects
const person = {
  name: "John",
  age: 25,
  isStudent: true,
};
```

### Why This Matters in React:

- React components use `const` for component declaration (i.e when writing arrow functions)
- State values can be any data type (We will discuss this better)
- Props are passed as objects (Remember props ? From class ?)

---

## Functions

### What You Need to Know:

- Function declarations vs function expressions
- Arrow functions (essential for React)
- Parameters and return values
- Function scope

### Examples:

```javascript
// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow Function (preferred in React)
const greet = (name) => {
  return `Hello, ${name}!`;
};

// Short arrow function
const greet = (name) => `Hello, ${name}!`;

// Function with multiple parameters
const add = (a, b) => a + b;
```

### Why This Matters in React:

- React components are functions
- Event handlers are functions
- Hooks use functions
- Most React code uses arrow functions

---

## Arrays and Array Methods

### What You Need to Know:

- Creating and accessing arrays
- `map()` - transforms each element (CRITICAL for React)
- `filter()` - creates new array with filtered elements (Hard but useful, learn it)
- `find()` - finds first matching element
- `forEach()` - executes function for each element
- `push()`, `pop()`, `shift()`, `unshift()` (Remember this in class?)

### Examples:

```javascript
const numbers = [1, 2, 3, 4, 5];

// map() - transforms each element (MOST IMPORTANT)
const doubled = numbers.map((num) => num * 2);
// Result: [2, 4, 6, 8, 10]

// filter() - creates new array with filtered elements
const evenNumbers = numbers.filter((num) => num % 2 === 0);
// Result: [2, 4]

// find() - finds first matching element
const found = numbers.find((num) => num > 3);
// Result: 4

// Working with objects
const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
];

const userNames = users.map((user) => user.name);
// Result: ["John", "Jane"]
```

### Why This Matters in React:

- `map()` is used to render lists of components
- `filter()` is used to conditionally show items
- Arrays are commonly used in state management (We will discuss this properly later)

---

## Objects and Object Methods

### What You Need to Know:

- Creating objects
- Accessing object properties (dot notation, sometimes we use bracket location so it's good if you learn that)
- Adding/modifying properties (Just as we did in vanilla javascript DOM)
- Object methods
- `Object.keys()`, `Object.values()`, `Object.entries()`

### Examples:

```javascript
// Creating objects
const user = {
  name: "John",
  age: 25,
  email: "john@email.com",
  greet: function () {
    return `Hello, I'm ${this.name}`;
  },
};

// Accessing properties
console.log(user.name); // "John"
console.log(user["name"]); // "John" (This is what bracket notation looks like)

// Adding/modifying properties
user.city = "New York";
user.age = 26;

// Object methods
const keys = Object.keys(user); // ["name", "age", "email", "greet", "city"]
const values = Object.values(user); // ["John", 26, "john@email.com", function, "New York"]
```

### Why This Matters in React:

- Props are passed as objects (We said this in class, props are like parameters, only that they're passed as objects in react)
- State is often an object
- Event objects contain useful information
- Component configuration uses objects

---

## "Destructuring"

### What You Need to Know:

- Array destructuring
- Object destructuring
- Default values

### Examples:

```javascript
// Array Destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
// first = "red", second = "green", third = "blue"

// Object Destructuring (VERY IMPORTANT for React)
const user = { name: "John", age: 25, city: "New York" };
const { name, age } = user;
// name = "John", age = 25

// Destructuring with default values
const { name, age, country = "USA" } = user;

// Destructuring function parameters (This was raised by emmanuel in class, but as i said, just see props as objects and that should be fine, at least for now)
const greet = ({ name, age }) => {
  return `Hello ${name}, you are ${age} years old`;
};

// Remember above is how we use and create resuable components
```

### Why This Matters in React:

- Destructuring props in components
- Destructuring state values
- Destructuring imported modules
- Cleaner, more readable code

---

## Template Literals

### What You Need to Know:

- Using backticks instead of quotes
- Embedding expressions with `${}`
- Multi-line strings

### Examples:

```javascript
const name = "John";
const age = 25;

// Template literals
const greeting = `Hello, my name is ${name} and I am ${age} years old`;

// Multi-line strings
const multiLine = `
  This is a
  multi-line
  string
`;

// Expressions in template literals
const result = `The sum of 5 and 3 is ${5 + 3}`;
```

### Why This Matters in React:

- Dynamic content in JSX
- Conditional class names
- API URLs with dynamic parameters
- Cleaner string concatenation

---

## Conditional Statements

### What You Need to Know:

- `if/else` statements (we saw the example usage in the testimonials component)
- Ternary operator (critical for React)
- Logical operators (`&&`, `||`)
- Truthy and falsy values

### Examples:

```javascript
const age = 25;

// If/else
if (!dataPresent) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Ternary operator (VERY IMPORTANT for React)
const status = age >= 18 ? "Adult" : "Minor";

// Logical AND (&&) for conditional rendering
const showWelcome = true;
showWelcome && console.log("Welcome!");

// Logical OR (||) for default values
const username = user.name || "Guest";
```

### Why This Matters in React:

- Conditional rendering in JSX
- Ternary operators are used extensively
- Logical operators for showing/hiding elements
- Default props and values

---

## ES6+ Features

### What You Need to Know:

- Spread operator (`...`)
- Rest parameters
- Default parameters
- Classes (basic understanding)
- Modules

### Examples:

```javascript
// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { name: "John" };
const obj2 = { ...obj1, age: 25 }; // { name: "John", age: 25 }

// Rest parameters
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

// Default parameters
const greet = (name = "Guest") => {
  return `Hello, ${name}!`;
};

// Classes (basic)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }
}
```

### Why This Matters in React:

- Spread operator for state updates
- Spreading props to components
- Default props in components
- Rest parameters for flexible components

---

## Asynchronous JavaScript

### What You Need to Know:

- Promises
- `async/await`
- `fetch()` API
- Error handling with try/catch

### Examples:

```javascript
// Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000);
  });
};

// Using promises
fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Async/await (preferred)
const getData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

// Using the async function
const handleClick = async () => {
  const data = await getData();
  console.log(data);
};
```

### Why This Matters in React:

- Fetching data from APIs
- Using useEffect for side effects
- Handling loading states
- Error handling in components

---

## Modules (Import/Export)

### What You Need to Know:

- Default exports and imports
- Named exports and imports
- Importing multiple items
- Alias imports

### Examples:

```javascript
// Default export (utils.js)
const formatDate = (date) => {
  return date.toLocaleDateString();
};
export default formatDate;

// Named exports (helpers.js)
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;

// Importing (in another file)
import formatDate from "./utils.js"; // Default import
import { add, subtract } from "./helpers.js"; // Named imports
import { multiply as mult } from "./helpers.js"; // Alias import
import * as helpers from "./helpers.js"; // Import all
```

### Why This Matters in React:

- Importing React and components
- Exporting custom components
- Organizing code into modules
- Using third-party libraries

---

## DOM Manipulation Basics

### What You Need to Know:

- Selecting elements
- Modifying content and attributes
- Event listeners
- Creating and removing elements

### Examples:

```javascript
// Selecting elements
const button = document.getElementById("myButton");
const items = document.querySelectorAll(".item");

// Modifying content
button.textContent = "Click me!";
button.innerHTML = "<span>Click me!</span>";

// Modifying attributes
button.setAttribute("disabled", true);
button.classList.add("active");

// Event listeners
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// Creating elements
const newDiv = document.createElement("div");
newDiv.textContent = "New element";
document.body.appendChild(newDiv);
```

### Why This Matters in React:

- Understanding what React does automatically
- Appreciating React's virtual DOM
- Understanding events in React
- Knowing when you might need direct DOM access

---

## Next Steps

Once you're comfortable with these JavaScript concepts, you'll be ready to dive into React fundamentals. These skills form the foundation for understanding:

- How React components work
- How to handle props and state
- How to work with events
- How to fetch and display data
- How to build interactive UIs

Remember: You don't need to master every concept perfectly before starting React, but having a solid understanding of these fundamentals will make learning React much smoother!
