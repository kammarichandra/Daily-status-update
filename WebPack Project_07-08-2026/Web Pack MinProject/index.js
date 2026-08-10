import { add, multiply } from "./math.js";

// Variables
let number1 = 10;
let number2 = 5;

// Arrow function
let displayResult = () => {
    return `
Addition: ${add(number1, number2)}
Multiplication: ${multiply(number1, number2)}
`;
};

// Template literal
let result = displayResult();

// Object
let student = {
    name: "Chandra",
    course: "Webpack & Babel"
};

// Spread operator
let updatedStudent = {
    ...student,
    city: "Hyderabad"
};

// Array and map()
let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(number => number * number);

// Console output
console.log(result);
console.log(updatedStudent);
console.log("Squares:", squares);

// Create heading
let heading = document.createElement("h1");
heading.textContent = "Webpack + Babel project ";

// Create paragraph
let paragraph = document.createElement("p");
paragraph.textContent = result;

// Student information
let studentInfo = document.createElement("h3");
studentInfo.textContent =
    `${updatedStudent.name} - ${updatedStudent.course} - ${updatedStudent.city}`;

// Squares list
let squareList = document.createElement("p");
squareList.textContent = `Squares: ${squares.join(", ")}`;

// Add elements to the page
document.body.appendChild(heading);
document.body.appendChild(paragraph);
document.body.appendChild(studentInfo);
document.body.appendChild(squareList);