//join
//it will converts an array into a string by combining all elements 

let fruits = ["apple","mango","banana","orange"];

console.log(fruits.join());

//custom separators 

console.log(fruits.join(" | "));


//crating a file path

let folders = ["home","user","documents","resume.pdf"];

let path = folders.join("/")

console.log(path);

// crating a sentence

let words = ["javascript","is","very","easy"];

console.log(words.join(" "));

//sort 
//it converts values to string and sort

let fruits1 = ["apple","mango","banana","orange"] 

fruits1.sort();

console.log(fruits1);

//num sort

let num =[4,6,23,5,2];

num.sort();

console.log(num);

// assending 

num.sort((a,b)=>a-b);

console.log(num);

// desending 

num.sort((a,b)=>b-a);

console.log(num);

// sort by age 

const users = [
  { name: "chandra", age: 30 },
  { name: "sekhar", age: 25 },
  { name: "kcs", age: 35 }
];

users.sort((a, b) => a.age - b.age);

console.log(users); 

