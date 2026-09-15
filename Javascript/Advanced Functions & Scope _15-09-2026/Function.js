
function hai(){
    console.log("hello chandra sekhar");
}
hai();

function add(a, b) {
  return a + b;
}

console.log(add(10, 20)); 

function mul(a,b){
    return a*b
}
console.log(mul(12,35));

function dived(a,b){
    return a/b
}
console.log(dived(23,45));

function square(number) {
  return number * number;
}

console.log(square(6));


// function expression 

let ab = function (){
    console.log("welcome to atp");
}
ab();

const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(5, 4));

let isEven = function(){

    if(isEven % 2===0){
        console.log( "is even num")
    }else{
        console.log( "not an even num")
    }
}
console.log(isEven(22));

// named functions 

let calculate = function addNumbers(a, b) {
  return a + b;
};

console.log(calculate(10, 5));

let calculate1 = function subNumbers(a, b) {
  return a - b;
};

console.log(calculate1(10, 5));

// Arrow Function
// A shorter way to write functions.

let add1 = (a, b) => {
  return a + b;
};
console.log(add1(12,34))

let square1 =  n => n*n;

console.log(square1(23))

// callback function 
// a fun which is passed as an argument to the another function 

function hai1(name , callback){

    console.log(name + "welcome to nyb");
    callback();
}

function sayhello(){
    console.log("welcome to atp")
}
hai("chandra",sayhello());

function calculate2(a,b,operation){
    return operation(a,b);
}

let add2 = (a,b) => a+b;

let res = calculate2(12,43,add2);

console.log(res);

// Higher-Order Function
// A function that accepts another function as an argument OR returns a function.

function calculate3(a,b,operation){
    return operation(a,b);
}

let add3 = (a,b)=> a+b;
let sub = (a,b)=> a-b;
let mul1 = (a,b)=> a*b;
let div = (a,b)=> a/b;

console.log(calculate3(10,23,add3));
console.log(calculate3(10,23,sub));
console.log(calculate3(10,23,mul1));
console.log(calculate3(10,23,div));

// Scope in JavaScript
// Scope determines where a variable can be accessed.
// global scope 

let name = "Chandra";

function greet() {
  console.log(name);
}

greet();

// function scope 

//  var message = "Hello";
function test() {

  var message = "Hello";
  console.log(message);
  
}

test();


// Default and Rest Parameters
// Default Parameter
// If no value is provided, the default value is used.

function def(name = "guest"){
    console.log("welcome to atp " + name);
}
def("chandra");
def();

// Rest Parameter
// Rest parameters collect multiple values into an array.

function rest(...numbers){
    let sum = 0;

    for(let number of numbers ){
        sum += number
    }
    return sum;
    }
console.log(rest(12,34))
console.log(rest(12,34,23,45,576,78,789))

function calculatesallary(basic , ...bonus){

    let totalbounces = bonus.reduce((num,bonus)=> num + bonus , 0 );
    
    return basic + totalbounces;
}
console.log(calculatesallary(13928,13928,13928,10000,13928));

// Arguments Object
// The arguments object contains the arguments passed to a normal function.

function showarguments(){
    console.log(arguments);
    console.log("num of arguments : ",arguments.length);
};
showarguments("a","b","c","d","e","f","g","h","i","j");

function total(){
    let sum = 0;

    for(let value of arguments){
        sum += value;
    }
    return sum;
};
console.log(total(12,34,45,56,768,78))

let total1 = (...numbers)=>{
    return numbers.reduce((sum , num)=> sum + num , 0);
};

console.log(total1(12,35,56,678))

// scope 
// function scope 

const company = "TeamSync";

console.log(company)
function showCompany() {

  console.log(company);
}

showCompany();
console.log(company);

// block scope 
// let and var are block scope 

if (true) {
  let age = 25;
  var name1 = "Chandra";

  console.log(age);
  console.log(name1);
}

// console.log(age); // age is accessed outside of the block when i used var
// console.log(name1) // but name is not accessed 

// Lexical Scope
// Inner functions can access variables from their outer functions.

function outer(){
    let msg = "hello..!"

    function inner(){
        console.log(msg)
    }
    inner();
};
outer();

// Hoisting + var, let, const


// console.log(name2);// Cannot access 'name2' before initialization

// let name2 = "chandra"

// let name3 = "kcs";
// console.log(name3);

// console.log(age);
// var age = 25;

// console.log(city);

// const city = "Tirupati";

// IIFE
// IIFE = Immediately Invoked Function Expression
// The function runs immediately after it is created.

(function () {
  console.log("IIFE executed");
})();

// with parameters 

(function (name) {
  console.log("Welcome " + name);
})("Chandra");


(function () {
  const appName = "Employee Management System";

  console.log(appName);
})();

// arrow
(() => {
  console.log("Arrow IIFE executed");
})();


// Closure
// A closure happens when an inner function remembers variables
// from its outer function even after the outer function has finished.

function outer1(){
    let message = "hai"

    function inner1(){
        console.log(message)
    }
    return inner1
}
outer1();

function createcounter(){
    let count = 0

     function updated(){
        count ++;
        return count
    }
    return updated
}

let counter = createcounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());