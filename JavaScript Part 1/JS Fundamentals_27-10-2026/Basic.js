console.log("hi chandra sekhar");

var name1 = "chandra sekhar";
let age = 23;
const role = "ase";

console.log(name1);
console.log(age);
console.log(role);

// emp details 

const employeeName = "Ravi";
let age1 = 25;
let salary = 35000;
let department = "Development";

console.log("Employee Details : ")
console.log("Employee Name:", employeeName);
console.log("Age:", age1);
console.log("Salary:", salary);
console.log("Department:", department);

// diff b/w variables

// var
var city = "Hyderabad";
var city = "Bangalore";
console.log(city);

// let
let marks = 80;
marks = 90;
console.log(marks);

// const
const company = "TeamSync";
console.log(company);

// Uncommenting this causes an error:
// company = "Google";

// scopes

let company1 = "TeamSync"; // Global scope

function displayEmployee() {

    let employeeName = "Ravi"; // Function scope

    console.log("Company:", company1);
    console.log("Employee:", employeeName);
}

displayEmployee();

console.log(company);

// This is ReferenceError:
// console.log(employeeName);

// block scope using if else

if (true) {

    let message = "Inside if block";
    const number = 100;

    console.log(message);
    console.log(number);
}

console.log(emp);

var emp = "Ravi";

console.log(emp);