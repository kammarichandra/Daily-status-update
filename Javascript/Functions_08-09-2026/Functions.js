// Function Declaration
// A function declaration is the traditional way to create a function

function a(){
    console.log("fun declered")
}
a();

function add() {
    return 10 + 20;
}

let result = add();

console.log(result); 

function mul(a,b){
    return a*b
}
mul(12,34)

// Function Expression
// A function can be stored inside a variable.

let b = function () {
    console.log("Hello!");
};

b();

// let add = function (a, b) {
//     return a + b;
// };

console.log(add(10, 20));


// Function Declaration
// function add(a, b) {
//     return a + b;
// }

// Function Expression
// let add = function (a, b) {
//     return a + b;
// };

// arrow functions 
// it will provides a shorter syntax
//()=>{
// }

let add2 = (a, b) => {
    return a + b;
};

let add3 = (a, b) => a + b;

console.log(add3(10, 20)); 

let squ = (a,b)=>{
    return a*b
}
console.log(squ(12,34))

let even = (even)=>{
    if(even % 2 === 0){
        console.log("even num")
    }
}
even(4);

// Parameters and Arguments
// Parameter → variable defined when creating the function.
// Argument → actual value passed when calling the function.

function greet(name) {  
    console.log("Hello " + name);
}

greet("Rahul"); 

function introduce(name, age) {
    console.log("My name is " + name);
    console.log("I am " + age + " years old");
}

introduce("chandra sekhar ", 25);

// Default Parameters
// You can give a parameter a default value.

function stu(name = "guest "){
    console.log("hello " + name);
}
stu("chandra ");
stu();


function add4(a, b = 10) {
    return a + b;
}

console.log(add4(5)); 
console.log(add4(5, 20)); 

// Rest Parameters
// Rest parameters allow a function to accept any number of argument

function n(...numbers) {
    console.log(numbers);
}

n(10, 20, 30, 40,12,4,5,6,8,9,0);

function sum(...numbers1){

    let sum1 = 0

    for(let num  of numbers1){
        sum1 += num
    }
    return sum1
        
}
console.log(sum(1,3,4,5,6,7,76,78,7,6))


// Arguments Object
// The arguments object contains the arguments passed to a regular function.
// you can accsess invalid arguments also 
// you can check lenght of an arguments
// for arrow functions use args 

let test2 = (...args) => {
    console.log(args);
};
test2(1,2,3,4,5,6)

test(10, 20, 30);

function test() {
    console.log(arguments);
}

test(10, 20, 30);

function test1() {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
}

test1(10, 20, 30,33);

// recursive function 
// A recursive function is a function that calls itself. 

function countdown(n) {
    if (n === 0) {
        return;
    }

    console.log(n);

    countdown(n - 1);
}

countdown(5);

function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5)); 

// Callback Functions
// A callback is a function that is passed to another function as an argument.

function greetWithCallback(name, callback) {
    console.log("Hello " + name);

    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greetWithCallback("Rahul", sayBye);