let fruits = ["apple","banana","mango","guva"];

console.log(fruits);

// accessing an array

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[1]);

fruits[1] = "rasmali";

console.log(fruits);


// chasing an element 

let student = ["chandra","sekhar","rahul","ramesh","suresh"];

console.log(student[3]);
console.log(student[0]);


student[3] = "asha";
student[0] = "jsp";

console.log(student);

// ex

let num = [1,2,3,4,5,6,7,8,9];

console.log(num[0]);
console.log(num[8]);
console.log(num[3]);

num[3] = 23;

console.log(num);

// map

let num1 = [1,2,3,4,5,6];

let double = num1.map(num => num*2);

console.log(num1);
console.log(double);

let even = num1.filter(num => num %2 === 0);

console.log(even)

let nun2 = [1,22,33,44,55,66,77];

// reduce 

let total = nun2.reduce((sum,num)=>sum + num ,0);
console.log(nun2);
console.log(total);

// find

let arr = [12,34,45,56,67,78,879];

let res = arr.find(num => num > 20);

console.log(res);

// problems

let a = [12,34,4,567,78,];

let res1 = a.map(num => num*2);

console.log(res1);

// filter

let b = [20, 55, 30, 80, 90, 40];

let res2 = b.filter(num => num % 2 === 0);

console.log(res2);

// reduce 

let sum = [23,45,56,67,78];

let total1 = sum.reduce((sum,num)=> sum + num , 0);

console.log(total1);

// find 

let sum1 = [23,45,67,79];

let f = sum1.find(num => num > 20);

console.log(f);

