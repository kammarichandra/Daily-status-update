// loops
// for loop
// while loop
// do while loop
// for of loop
// for in loop
// infinit loop

// for loop 

for(let i=1 ; i<=5 ; i++){

    console.log(i);
}

// sum of nums

let sum = 0;

for(let i = 1 ; i<=10 ; i++){
    sum +=i;
}
console.log(sum);

// while loop 

let i = 1;

while(i<=5){
    console.log(i)
    i++;
}

let count = 5;

while(count>0)
{
    console.log(count)
    count--;
}

// do while loop 

let i1 = 1;

do{
    console.log(i);
    i++;
}while(i<=5);

// checking password

let password ;

do{
    password = "admin";
    console.log("checking password..")
}while(password !=="admin");

console.log("Access granted");

// for in loop 

let student = {
   name :"chandra",
   age :29,
   role :"A"  
};
for(let key in student){
    console.log(key,student[key])
}

let arr = [1,2,3,4,5];

for(let index in arr){
    console.log(index)
}

// for of 

let arr1 = [10,12,3,4,44,55];

for(let value of arr1){
    console.log(value)
}

// infinite loops 

// let i3 = 0;

// while(i3<=5){
//     console.log(i)
// }