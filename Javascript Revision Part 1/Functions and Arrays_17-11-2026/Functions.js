function add(a, b) {
    return a + b;
}

console.log(add(10, 20));

// fun expression

const subtract = function(a, b) {
    return a - b;
};

console.log(subtract(20, 10));

// arrow functions

const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(10, 5));

// even or odd 

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
}

checkEvenOdd(10);
checkEvenOdd(15);

// factorial

function factorial(num) {
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }

    return fact;
}

console.log("Factorial:", factorial(5));

// Arrays 

let employees = ["Rahul", "Kiran", "Suresh", "Arun"];

// Add element
employees.push("Ravi");

// Remove last element
employees.pop();

// Add element at beginning
employees.unshift("Chandra");

// Remove first element
employees.shift();

// Display array
console.log(employees);

// Access elements
console.log(employees[0]);

// Array length
console.log(employees.length);


// Array Problems 

// Original Array
let numbers = [10, 25, 5, 40, 15, 30, 10, 25];

console.log("Original Array:", numbers);


// 1. Find the Largest Number
let largest = Math.max(...numbers);

console.log("Largest Number:", largest);


// 2. Find the Smallest Number
let smallest = Math.min(...numbers);

console.log("Smallest Number:", smallest);


// 3. Find the Sum of Array Elements
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

console.log("Sum of Elements:", sum);


// 4. Reverse an Array
let reversedArray = [...numbers].reverse();

console.log("Reversed Array:", reversedArray);


// 5. Remove Duplicate Elements
let uniqueArray = [...new Set(numbers)];

console.log("Array Without Duplicates:", uniqueArray);


// 6. Sort Numbers in Ascending Order
let sortedArray = [...numbers].sort((a, b) => a - b);

console.log("Ascending Order:", sortedArray);


// 7. Find Even and Odd Numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);

let oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log("Even Numbers:", evenNumbers);

console.log("Odd Numbers:", oddNumbers);