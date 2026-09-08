// ternary operator 
// this is the easier way to access if else conditions 

let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

let number = 10;

let result1 = number % 2 === 0 ? "Even" : "Odd";

console.log(result);

// loops
// for Loop
// Best when you know how many times you want to repeat.

for(let i=0; i<=5; i++){
    console.log(i);
}

// even 

for(let i=0; i<=20; i++){
    if( i % 2 === 0){
        console.log(i)
    }
};

// while loop 
//syntax : 

// initilization
// while(condition){
// console.log();
// updation
// }

let i =0;

while(i<=5){
    console.log(i);
    i++;
}

let i1 = 10;

while (i1 >= 1) {
    console.log(i1);
    i1--;
}

// do...while
// Similar to while, but it always executes at least once.
//syntax : 
// initilization
// do {
//     console.log(i);
//     // updation
// } while (condition);

let i2 = 10;

do {
    console.log(i);
    i++;
} while (i2 < 5);

// for...in
// Used mainly to loop through object properties/keys.

let obj = {
    name : "chandra",
    age : 23,
    city : "hyd"
}
 
for(key in obj){
    console.log(key , obj[key]);
}

// let arr = [1,2,2,3,4,4,5];

// let a1 = remove().arr[2];

// console.log(a1);


// let a2 = 18;

// if(a2<=20){
// throw new Error("not valid ");
// }

// for of loop 
// Used to loop through values of iterable objects, especially arrays and strings.

let arr = [1,2,3,4];

for(let num of arr){
    console.log(num);
}

let word = "Hello";

for (let letter of word) {
    console.log(letter);
}

// qustions 

let num = 23;

if(num >=0){
    console.log("positive num")
}else if(num <=0){
    console.log("negitive num")
}else{
    console.log("you have entered zero");
}

//2
// vote eligible

let age1 = 20;

if(age1 >= 20){
    console.log("eligible for vote")
}else{
    console.log("not eligible try later")
}

//3
//largest num 

let num1 = 23;
let num2 = 45;

if(num1 === num2){
    console.log("largest num")
}else{
    console.log("short number")
}