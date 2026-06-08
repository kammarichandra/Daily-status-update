let num = [1,2,3,4,5,5,6,7,8];
console.log(num);

// string array 

let str = ["chandra","sekhar","kcs"];
console.log(str);

//boolean array

let flag = [true , false , true];

console.log(flag);

//multi dimensinal array

let arr = [[1,2,3,4],[5,6,7,8],[7,8,9,0]];

console.log(arr);

// array elements using indexes 

let nums = [10,12,3,4,5,55,66];
nums[2] = 88;
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);
console.log(nums[4]);

// one dimensional array

let fruits =["apple","banana","mango","papaya"];

console.log("first fruit : ",fruits[0])
console.log("second fruit : ",fruits[1])

// adding and removing array 


// unshift 
// it is used to add the element from begging og array
let fruits1 = ["banana","mango"];

fruits1.unshift("apple");
console.log(fruits1);

//push
// it is used to add elements from end of the array

let arr1 = [1,2,34,55,6,77,88];
arr1.push(99);
console.log(arr1);

//splice 
// it is used to add the element from any ware of the array 
let num1 = [333,444,666,777,33];
num1.splice(1,2,111)
console.log(num1);

// pop 
//it is used to remove element from last element from array

let arr2 = [44,55,66,77,78];

arr2.pop();
console.log(arr2);

//shift 
//it is used to remove elemenet from begging of array
let str1 = ["hello","chandra","kcs"];
str1.shift();
console.log(str1);


//serch operations 
// length 
// it is used to find length of the array
let fruits2 = ["manago","banana","orange","apple"];
console.log(fruits2.length);

//includes 
//it is used to find wether an array contains that element are not

let fruits3 = ["manago","banana","orange","apple"];

console.log(fruits3.includes("mango"));
console.log(fruits3.includes("banana"));

// index of
// is is used to find index of specified element 

let fruits4 = ["manago","banana","orange","apple"];

console.log(fruits4.indexOf("banana"))
console.log(fruits4.indexOf("orange"))

//last index of 
// it is used to find last accurance of specified element

let fruits5 = ["manago","banana","orange","apple"];

console.log(fruits5.lastIndexOf("orange"));
console.log(fruits5.lastIndexOf("apple"));

//all methods 

let fruits6 = ["Apple", "Banana", "Orange", "Banana"];

console.log("Length:", fruits6.length);
console.log("Includes Banana:", fruits6.includes("Banana"));
console.log("First Banana Index:", fruits6.indexOf("Banana"));
console.log("Last Banana Index:", fruits6.lastIndexOf("Banana"));