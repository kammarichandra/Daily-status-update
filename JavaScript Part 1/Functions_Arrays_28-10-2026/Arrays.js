let stu = ["chnadra","sekhar","rahul","ramesh","suresh"];

console.log(stu);
console.log(stu.length);

// add the ele at last 

stu.push("sitha");

console.log(stu);

// pop is used to remove the ele at last

stu.pop()
console.log(stu);

// unshift
// add the ele at begging 
stu.unshift("priya")
console.log(stu)

// shift
// remove the ele at begging

stu.shift()
console.log(stu);

// slice
// Array.slice()
let slice = stu.slice(1,4);
console.log(slice)


// splice
// insert 

let splice = stu.splice(1,0,"kcs");
console.log(splice);

// remove 
let remove = stu.splice(1,1);
console.log(remove);

// replace

let replace = stu.splice(1,"rakesh");
console.log(replace);

// contact 
// it is used to combile two arrays

const students1 = ["Ravi", "Kiran", "Suresh"];

const students2 = ["Chandra", "Priya", "Anusha"];

const allStudents = students1.concat(students2);

console.log(allStudents);

// includes 

console.log(stu.includes("kcs"));

// index of
// it will returns the first matching elements 
// if it will not matches means it will return -1

console.log(stu.indexOf("kcs"));
console.log(stu.indexOf("rahul"));
console.log(stu.indexOf("ramesh"));
console.log(stu.indexOf("kjdf"));


console.log("======================");
console.log("Array Methods");
console.log("======================");

let num = [1,2,3,4,5,6,7,8];

let map = num.map(num1 => num1*2);
console.log(map);

// filter 
// it will return a new array which will satisfy the condition

let filter = num.filter(num1 => num1>3);
console.log(filter);

let reduce = num.reduce((sum,num1) => sum+num1,0);
console.log(reduce);

// find 
// it will return first ele which satisfus the condition 

let find = num.find(num1=>num1>4);
console.log(find);

// find index 
// it will return first index which satisfy the condition

let findindex = num.findIndex(num1 => num1>5);
console.log(findindex);

// some 
// it will return true which ele satisfies atleast one ele

let some = num.some(num1 => num1>4);
console.log(some);

// every
// it will return true only when all ele get satisfies the condition 

let every = num.every(num1 => num1>4);
console.log(every);

// sort

let numbers = [50, 10, 40, 20, 30];

let result = numbers.sort((a, b) => a - b);

console.log(result);

// for each 

const numbers1 = [10, 20, 30, 40, 50];

numbers1.forEach(num => {
    console.log(num);
});

