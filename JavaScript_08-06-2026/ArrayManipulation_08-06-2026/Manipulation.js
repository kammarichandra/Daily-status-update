//array manipulation

let fruits = ["apple","banana","mango","papaya"];

fruits.length = 0;

console.log(fruits);

// empty array 
let arr =["kcs","chandra","sekhar","rahul"];

arr = [];

console.log(arr);

//using spice 

let arr1 = ["rahul","rameash","suresh"];

arr1.splice(0,fruits.length);

console.log(arr1);

// contact 
// by using this method we can join array two ar more 

let veg = ["brinjal","potato","tomato"];
let fruits1 =["apple","banana","mango","papaya"];

let food = veg.concat(fruits1);

console.log(food);

// by using spread opoerator

let veg1 = ["brinjal","potato","tomato"];
let fruits2 =["apple","banana","mango","papaya"];

let food1 = [...fruits2,...veg1];

console.log(food1);

// student list using contact 

let stu = ["chandra","kcs","chanduu","sekhar"];
let stu1 = ["vara","venu","rahul","ramesh"];

let students = stu.concat(stu1);

console.log(students);

// using spread operator 

let stu2 = ["chandra","kcs","chanduu","sekhar"];
let stu3 = ["vara","venu","rahul","ramesh"];

let allstu = [...stu3,...stu3];

console.log(allstu);

//loops itrations 

// for looop 

let arrr = ["apple","banana","orange"];

for(let i = 0 ; i < arrr.length ; i++){
    console.log(arrr[i]);
}

// for of loop 

let fruits8 = ["banana","apple","mango","kivi"];
for(fru of fruits8 ){
    console.log(fru);
}

//for each loop 

let arr3 = ["apple","banana","orange"];
arr3.forEach(function(fruit){
    console.log(fruit);
})
arr3.forEach(fruit => console.log(fruit));

// caluclating sum of nums 

let nums = [1,2,3,4,5,5];

let sum =0;

//using for loop

for(let i =0;i<nums.length;i++){
    sum += nums[i];

}
console.log("sum :",sum);

//using foor each 

let numbers = [10, 20, 30, 40];
let sum1 = 0;

for (let num of numbers) {
    sum1 += num;
}

console.log("Sum:", sum1);