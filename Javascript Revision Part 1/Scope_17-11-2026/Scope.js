// Global Scope
let company = "ABC Technologies";

function employeeDetails() {
    // Function Scope
    let employeeName = "Chandra";

    if (true) {
        // Block Scope
        let salary = 30000;

        console.log(company);
        console.log(employeeName);
        console.log(salary);
    }

    console.log(employeeName);
}

employeeDetails();
console.log(company);


// 1. Create a Global Variable and Access It Inside a Function

let globalName = "Chandra";

function displayName() {
    console.log("Inside Function:", globalName);
}

displayName();

console.log("Outside Function:", globalName);


// 2. Create a Function Variable and Access It Outside

function employeeDetails() {
    let employeeName = "Rahul";

    console.log("Inside Function:", employeeName);
}

employeeDetails();

//  This will cause a ReferenceError
// console.log("Outside Function:", employeeName); 


// 3. Declare var, let, const Inside an If Block

if (true) {
    var a = 10;
    let b = 20;
    const c = 30;

    console.log("Inside Block - var:", a);
    console.log("Inside Block - let:", b);
    console.log("Inside Block - const:", c);
}

console.log("Outside Block - var:", a);

// These two lines cause ReferenceError
// console.log("Outside Block - let:", b);
// console.log("Outside Block - const:", c);


// 4. Function Scope vs Block Scope

function scopeExample() {
    var x = 100;

    if (true) {
        var y = 200;
        let z = 300;
        const w = 400;

        console.log("Inside Block:", x, y, z, w);
    }

    console.log("Inside Function:", x);
    console.log("Inside Function - var:", y);

    // z and w cannot be accessed here
}

scopeExample();

// Hoisting 

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