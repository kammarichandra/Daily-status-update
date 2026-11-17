function first() {
    console.log("First Function");
    second();
}

function second() {
    console.log("Second Function");
    third();
}

function third() {
    console.log("Third Function");
}

first();

// 1. Test Hoisting with var

console.log(a);

var a = 10;

console.log(a);


// 2. Test Hoisting with let

// console.log(b); // ReferenceError

let b = 20;

console.log(b);


// 3. Test Hoisting with const

// console.log(c); // ReferenceError

const c = 30;

console.log(c);


// 4. Test Function Declaration Hoisting

greet();

function greet() {
    console.log("Hello, Welcome to JavaScript");
}


// 5. Function Declaration vs Function Expression

// Function Declaration
function add(a, b) {
    return a + b;
}

console.log("Function Declaration:", add(10, 20));


// Function Expression
const subtract = function(a, b) {
    return a - b;
};

console.log("Function Expression:", subtract(20, 10));