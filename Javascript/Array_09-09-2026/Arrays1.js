// map
// Creates a new array by changing every element.

let num = [1,2,3,4,5,6,7,8];
let double = num.map(num => num*2);

console.log(double);

// filter()
// Creates a new array containing only elements that satisfy a condition.

let num1 = [2,3,4,5,66,7,6];

let filter = num1.filter(num => num %2 ===0);

console.log(filter);

// reduce()
// Reduces an array to one value.

let arr = [1,2,3,4,5,6,7,8,9];
let sum = arr.reduce((num,sum)=> num+sum , 0);
console.log(sum);

// find()
// Returns the first element that matches a condition.

let arr1 = [12,34,45,67,78,90];

let find = arr1.find(num => num>45);

console.log(find);

// findIndex()
// Returns the index of the first matching element.

let arr2 = [12,34,45,6,77,9];

let index = arr2.findIndex(num => num > 45);

console.log(index);

// some()
// Checks whether at least one element satisfies a condition.

let num2 = [23,34,45,56,67];

let some = num2.some(num => num >34);

console.log(some);

//every()
//Checks whether all elements satisfy a condition.

let num3 = [34,45,67,78,89,80];

let every = num3.every(num => num >10);

console.log(every);

// forEach()
// Runs a function for each element.

let fruits1 = ["Apple", "Banana", "Mango"];

fruits1.forEach((fruit)=>{
    console.log(fruit);
});

// sort()
// Sorts the array.
// For numbers, remember to provide a comparison function.

let a = [98,78,67,56,45,4,];

let sort = a.sort((a,b)=>a-b);
// let sort1 = a.sort((a1,b1)=>b1-a1);
console.log(sort);
// console.log(sort1);


// Flattening Arrays
// Flattening means converting nested arrays into a single-level array

let numbers = [1, 2, [3, 4], [5, 6]];

let result = numbers.flat();

console.log(result);

let numbers1 = [1, [2, [3, [4]]]];

console.log(numbers1.flat(Infinity));

// Removing Duplicate Values
// A very easy way is using Set.

let numbers2 = [1, 2, 2, 3, 4, 4, 5, 5];

let uniqueNumbers = [...new Set(numbers2)];

console.log(uniqueNumbers);


// 1. map()
// Double every number

let numbers4 = [1, 2, 3, 4, 5];

let map = numbers4.map(num => num*2);
console.log(map);
// Expected: [2, 4, 6, 8, 10]



// 2. filter()
// Get only numbers greater than 20

let nums = [10, 25, 15, 40, 30];
let filter1 = nums.filter(num => num%2 ===0);
console.log(filter1); 
// Expected: [25, 40, 30]



// 3. reduce()
// Find the total

let prices = [100, 200, 300, 400];
let reduce = prices.reduce((num,sum)=> sum+num , 0);
console.log(reduce)
// Expected: 1000



// 4. find()
// Find the first number greater than 50

let values = [10, 30, 55, 70, 90];
let find1 = values.find(num => num>50);
console.log(find1);


// 5. findIndex()
// Find the index of the first number greater than 50

let values2 = [10, 30, 55, 70, 90];
let findindex = values2.findIndex(num => num >50);
console.log(findindex)

// 6. some()
// Check if at least one number is negative

let numbers5 = [10, 20, -5, 30];
let some1 = numbers5.some(num => num>20);
console.log(some1)

// 7. every()
// Check if all numbers are positive

let numbers6 = [10, 20, 30, 40];
let every1 = numbers6.every(num => num>10);
console.log(every1) 


// 8. forEach()
// Print every student's name

let students1 = ["Rahul", "Priya", "Arun", "Sneha"];
students1.forEach((stu)=>{
    console.log(stu);
})


// 9. sort()
// Sort from smallest to largest

let marks = [75, 40, 90, 60, 85];
let sort1 = marks.sort((a,b)=> a-b);
console.log(sort1);


// 10. join()
// Convert this array into a sentence

let words = ["JavaScript", "is", "very", "useful"];

let join = words.join(" ");
console.log(join);
// Expected: "JavaScript is very useful"


// 11. flat()
// Flatten this array

let nested = [1, [2, 3], [4, 5], [6, 7]];
let flat = nested.flat();

console.log(flat)
// Expected: [1, 2, 3, 4, 5, 6, 7]

// 12. Remove duplicates

let duplicateNumbers = [1, 2, 2, 3, 3, 4, 5, 5];
let x = [...new Set(duplicateNumbers)];

console.log(x);
// Expected: [1, 2, 3, 4, 5]