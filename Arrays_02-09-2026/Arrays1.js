// find index 
// it will find the inex and it will 
let num2 = [1,2,3,23,33,4,5]
let index = num2.findIndex(num => num === 23);

console.log(index);

// some

let n = [23,45,34,21];

let result = n.some(num => num > 45);

console.log(result);

// some and every
// some will apply only when given condition get true 
// every will apply for enter array form given array 

let some = n.some(num => num > 23);
let every = n.every(num => num > 10);

console.log(some);
console.log(every);

// sort 
// it will sort an array from the array and create aplabit array 

let fruits1 = ["Mango", "Apple", "Orange", "Banana"];

fruits1.sort();

console.log(fruits1);

let num3 = [12,34,56,687,78,78]

let sn = num3.sort((a,b)=>a-b);
let sn1 = num3.sort((b,a)=> b-a);
console.log(sn);
console.log(sn1); 

// removing duplicate ele 
// it will remove the duplicate ele and create a new array 

let num4 =[1,2,2,3,4,4,5,5,5,6,788,99,99];

let unique = [...new Set(num4)];

console.log(unique);

console.log("======================================")
let numbers5 = [10, 25, 10, 40, 55, 25, 70, 40];

// 1. Find the index of 55 using findIndex()

let fi = numbers5.findIndex(num => num === 40);
console.log(fi);

// 2. Check if at least one number is greater than 60 using some()

let some1 = numbers5.some(num => num > 25);
console.log(some1);

// 3. Check if every number is greater than 5 using every()

let every1 = numbers5.every(num => num >= 10);
console.log(every1);

// 4. Sort the numbers in ascending order

let Ao1 = numbers5.sort((a,b)=> a-b);
console.log(Ao1)

// 5. Remove duplicate numbers

let Ao =[...new Set(numbers5)];
console.log(Ao);