// Creating and Accessing Arrays
// An array stores multiple values in a single variable.

// Creating an array
let fruits = ["Apple", "Banana", "Mango", "Orange"];

// Accessing elements
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango

// Change an element
fruits[1] = "Grapes";

console.log(fruits);

// adding and removing eleme
// push() → adds to the end
// unshift() → adds to the beginning
// pop() → removes from the end
// shift() → removes from the beginning

let num = [1,2,4,5,7,8];

// add
console.log("Adding : ")
num.push(9);
num.unshift(10);
console.log(num);

// remove
console.log("removing : ") 
num.pop();
num.shift();

console.log(num);

// Searching Elements
// You can search for elements using includes(), indexOf(), and find().

let fruits1 = ["apple","banana","mango","guva"];

console.log("serching items :");
console.log(fruits1.includes("mango"));
console.log(fruits1.includes("apple"));

console.log("using indexof : ");
console.log(fruits1.indexOf("banana"));
console.log(fruits1.indexOf("grapes"));

// Looping Through Arrays
// The most common way is using a for loop or for...of.

let items = ["mobile", "tv", "ac", "earbuds"];

// Using for loop
console.log("using forloop : ")
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}

// Using for...of
console.log("using for of : ")
for (let item of items) {
    console.log(item);
}


// 1. Create an array of 5 numbers

let numbers = [10, 20, 30, 40, 50];

// 2. Print the first and last element

console.log(numbers[0]);
console.log(numbers[4]);

// 3. Add 60 to the end
console.log(numbers.push(60));

// 4. Add 5 to the beginning

console.log(numbers.unshift(5));

// 5. Remove the last element

console.log(numbers.pop());

// 6. Check if 30 exists in the array

console.log(numbers.includes(30));

// 7. Find the index of 40

console.log(numbers.indexOf(40));

// 8. Print every element using a loop

for(let i=0 ; i<=numbers.length; i++){
    console.log(i);
}

// // varname.map(num => num*2);

// let num2 = [1,2,4,5,6,7];

