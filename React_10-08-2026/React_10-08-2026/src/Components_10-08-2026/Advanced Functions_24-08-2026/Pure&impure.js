//pure functions 

function add(a,b){
    return a+b;
}

console.log(add(20,12));
console.log(multiply(22,12));

function multiply(a,b){
    return a*b;
}

//changing array

let numbers = [1, 2, 3];

function addNumber(arr) {
    arr.push(4);
    return arr;
}

console.log(addNumber(numbers));
console.log(numbers);

// A
function multiply(a, b) {
  return a * b;
}

// B
let count = 0;

function increment() {
  count++;
}

// C
function getRandom() {
  return Math.random();
}

// D
function greet(name) {
  return "Hello " + name;
}

console.log(multiply(12,34));
console.log(getRandom(12.5))
console.log(greet("chandra"))