// typeof Operator
// The typeof operator tells you the data type of a value.

let name = "Rahul";
let age = 25;
let isStudent = true;

console.log(typeof name);      
console.log(typeof age);       
console.log(typeof isStudent);  


let x;
let y = null;
let numbers = [1, 2, 3];
let person = {
    name: "John"
};

console.log(typeof x);        
console.log(typeof y);        
console.log(typeof numbers);  
console.log(typeof person);   



// Variables

var oldVariable = "I am var";

let age2 = 21;

const country = "India";

console.log(oldVariable);
console.log(age);
console.log(country);


// Changing let

age3 = 22;

console.log(age);


// Data Types

let name1 = "Rahul";             // String
let marks = 85;                  // Number
let passed = true;               // Boolean
let result;                      // Undefined
let emptyValue = null;           // Null
let largeNumber = 123456789n;    // BigInt


// Reference Types

let fruits = ["Apple", "Mango", "Banana"];

let student = {
    name: "Rahul",
    age2: 21
};

function greet() {
    console.log("Hello JavaScript!");
}


// typeof

console.log(typeof name);
console.log(typeof marks);
console.log(typeof passed);
console.log(typeof result);
console.log(typeof emptyValue);
console.log(typeof largeNumber);
console.log(typeof fruits);
console.log(typeof student);
console.log(typeof greet);

greet();