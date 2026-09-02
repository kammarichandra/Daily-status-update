
// map 

let numbers = [2, 4, 6, 8, 10];

let res = numbers.map(num => num *2);

console.log(res);

// filter 

let numbers1 = [10, 15, 20, 25, 30, 35];

let res1 = numbers1.filter(num => num % 2  === 0);

console.log(res1);

// reduce 

let numbers2 = [10, 20, 30, 40];

let total = numbers2.reduce((sum,num)=> sum + num ,0 );

console.log(total);

// find

let numbers3 = [5, 12, 18, 25, 30];

let fi = numbers3.find(num => num > 25);

console.log(fi);

// findindex

let  fruits = ["Apple", "Banana", "Mango", "Orange"];

let res2 = fruits.findIndex(num => num === "Mango");

console.log(res2);

// some 

let numbers4 = [10, 20, 30, 45, 50];

let res3 = numbers4.some(num => num > 40);

console.log(res3);

// every 

let numbers6 = [10, 20, 30, 40];

let res4 = numbers6.every(num => num > 5);

console.log(res4);

// sort 

let numbers7 = [50, 10, 80, 20, 5];

let sort = numbers.sort((a,b)=> a-b);

console.log(sort);

// removing duplicates

let numbers8 = [10, 20, 10, 30, 20, 40, 30];

let rd = [...new Set(numbers8)];

console.log(rd);


// medium

let prices = [100, 200, 300, 400];

let dicount1 = prices.map( price => price*1.10)

console.log(dicount1);

// filter

let ages = [12, 18, 25, 15, 30, 10, 22];

let aged = ages.filter(num => num >=18 )

console.log(aged)

// reduce 

let prices1 = [100, 250, 50, 300];

let total2 = prices1.reduce((sum,num)=> sum + num , 0);

console.log(total2);

// find 

let students = [
  { name: "Rahul", marks: 75 },
  { name: "Priya", marks: 45 },
  { name: "Arun", marks: 85 },
  { name: "Sneha", marks: 60 }
];

let marks = students.find(students => students.marks > 80);

console.log(marks);

// find index 

let findindex = students.findIndex(students => students === "Priya");

console.log(findindex);

// some

let some = students.some(students => students.marks <= 40);

console.log(some);

// every 

let every = students.every( students => students.marks > 40);

console.log(every);

// sort 

let num = [45, 12, 89, 34, 7, 100, 23];

let sort1 = num.sort((a,b)=> b-a);

console.log(sort1)

// removeing duplicates 

let names = [
  "Rahul",
  "Priya",
  "Rahul",
  "Arun",
  "Priya",
  "Sneha"
];

let rd1 = [...new Set(names)];

console.log(names);

// let num1 = [1,3,4]
// num1.find()

// names.findIndex(names => )