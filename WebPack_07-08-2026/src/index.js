import { add, sub, add1, multiply1 } from "./math.js";
import { message } from "./message.js";
import "./style.css";
import "./profile.css";
import { Student } from "./student.js";


// Display message from module
console.log(message);


// Basic functions
console.log("Addition:", add(10, 20));
console.log("Subtraction:", sub(10, 20));


// Create heading element
let heading = document.createElement("h1");

heading.className = "title";
heading.textContent = "Webpack + Babel Practice";


// Create paragraph element
let para = document.createElement("p");

para.className = "description";
para.textContent = "CSS Loader, Babel Loader and Webpack Plugins working together";


// Create profile card
let card = document.createElement("div");

card.className = "card";

card.innerHTML = `
    <h2>Kammari Chandra Sekhar</h2>
    <p>Frontend Developer</p>
    <p>Learning Webpack, Babel and Loaders</p>
`;


// Add elements to webpage
document.body.appendChild(heading);
document.body.appendChild(para);
document.body.appendChild(card);


// Variables
let number1 = 10;
let number2 = 5;


// Template literal
let resultMessage = `
Addition: ${add(number1, number2)}
Multiplication: ${multiply1(number1, number2)}
`;


// Student class object
let student = new Student("Chandra", 22);


// Array methods
let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(num => num * num);


// Spread operator
let updatedNumbers = [...numbers, 6, 7];


// Console output
console.log(resultMessage);

console.log(student.introduce());

console.log("Add using arrow function:", add1(5, 5));

console.log("Squares:", squares);

console.log("Updated Array:", updatedNumbers);