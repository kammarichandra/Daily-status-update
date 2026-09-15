// Problem 1 — Calculator

function add(a, b) {
    return a + b
}
console.log(add(12, 45));

function mul(a, b) {
    return a * b
}
console.log(mul(12, 45));


function sub(a, b) {
    return a - b
}
console.log(sub(12, 45));

function div(a, b) {
    return a / b
}
console.log(div(12, 45));


// Problem 2 — Arrow Functions
let squ = (num) => num * num;
console.log(squ(23))

// Problem 3 — Callback

function processpayment(amount, callback) {
    console.log("amount  :", amount)
    callback();
};
function paymment() {
    console.log("payment done...!")
}
processpayment(10000, paymment);

// Problem 4 — Higher-Order Function

function calculate(num1, num2, operation) {
    return operation(num1, num2)
};

let num1 = (a, b) => a + b
let num2 = (a, b) => a * b;

console.log(calculate(10, 20, num1));
console.log(calculate(12, 45, num2));


// Problem 5 — Rest Parameters
// Create:
// findLargest(10, 50, 30, 90, 20)

function findlargest(...numbers) {
    let largest = 0;

    for (let value of numbers) {
        if (value > largest) {
            largest = value
        }
    }
    return largest;
}

console.log(findlargest(10, 50, 30, 90, 20));

// Problem 6 — Default Parameters
// Create:
// createEmployee(name, department = "IT");

function createEmployee(name, dept = "it") {
    console.log(`welcome to nyb ${name} your dept is ${dept} `);
}
createEmployee("chandra");

// Problem 7 — Scope
// Create an example containing:
// Global variable
// Function variable
// Block variable
// Nested function

// global scope 

const emp = "kcs";
let emp1 = "kcr"
var emp2 = "kyc"
function getemp() {
    console.log(emp);
    console.log(emp1);
    console.log(emp2);
}
getemp();

// function scope 

function getuser() {
    let user = "ramesh";
    var user1 = "suresh";
    const user2 = "rahul";
    console.log(user);
    console.log(user1);
    console.log(user2);
}
// console.log(user); // let canot accssed outside 
// console.log(user1); // var canot accessed outside 
// console.log(user2);
getuser();

// block scope 
// var,let are block scope 

if(true){
    let a = "a"
    var b = "b"
    
    console.log(a);
    console.log(b);
  
}

// nested function 

function outer(){
    console.log("outer fun");
    function inner(){
        console.log("inner fun")
    }
    inner();
}
outer();

// Problem 8 — Hoisting : 
// Write examples showing the different behavior of:
// var
// let
// const

// console.log(car)
// let car = "honda";

// console.log(car1)
// var car1 = "suzuki";

// console.log(car2)
// const car2 = "tayota";

// Problem 9 — IIFE
// Create an IIFE that displays:

(function(){
    console.log("Employee Management System Started")
})();

// Problem 10 — Closure
// Create a bankAccount() function:

function bankaccount(){

    let Balance = 0;

    function deposit(amount){

        Balance += amount;
        console.log(`deposited : ${amount}`);
    }

    function withdrawal(amount){
        if(amount <= Balance){
            Balance -= amount
            console.log(`withdrawl : ${amount}`);
        }else{
            console.log("insufficent balance")
        }
    }

    function getbalance(){
        console.log(`currrent balance is : ${Balance}`)
        return Balance
    }

    return {deposit , withdrawal , getbalance}
}

let account =  bankaccount();

account.deposit(13428);
account.withdrawal(10000);
account.getbalance();