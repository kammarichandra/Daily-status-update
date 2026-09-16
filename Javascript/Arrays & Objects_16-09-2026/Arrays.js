let arr = [1,2,3,4,5,6,7];

console.log(arr);
console.log(arr[1]);

// adding and removing 
console.log("adding and removing :")
// push : add the ele at end 
let arr1 = [1,2,3,4,5,6,7];
arr1.push(23);
console.log(arr1);
// pop : remove the ele at end 
arr1.pop();
console.log(arr1);
// ushift():add the ele at begging
arr1.unshift(12);
console.log(arr1);
// shift() : remove the ele at begging 
arr1.shift();
console.log(arr1);

// searchin an array 

console.log("searching an array : ");

let fruits = ["apple","banana","mango","orange"];
// includes()
console.log(fruits.includes("banana"));
// indexof()
console.log(fruits.indexOf("mango"));

// array iteraton

console.log("array iteration : ");

let num = [12,34,45,667,78,89,9];
console.log("for loop : ")
for(let i=0;i<=num.length;i++){
    console.log(num[i]);
}
console.log("for of loop :")
for(number of num){
    console.log(number);
}
console.log("for each loop : ")
num.forEach((number)=>{
    console.log(number);
})
// array methods
console.log("array methods : ");

let arr2 = [12,34,45,67,78,89,90];

// map
let squ = arr2.map((num)=>num*2);
console.log(squ);

// filter

let filter = arr2.filter((num)=>num %2 === 0 );
console.log(filter);

// reduce 

let reduce = arr2.reduce((num,sum)=>num+sum ,0);
console.log(reduce);

// find 

let find =  arr2.find((num)=> num>34);
console.log(find)

// find index 

let findindex = arr2.findIndex((num)=>num>20);

console.log(findindex);

//some

let some = arr2.some((num)=>num>20);

console.log(some);

// every

let every = arr2.every((num)=>num>20);
console.log(every);

// sort 

let sort = arr2.sort((a,b)=>b-a);
console.log(sort);

// join 

let join = fruits.join("_");
console.log(join);

// flat 

let arr3 = [1,3,[34,56],[23,57]];

let flat = arr3.flat();
console.log(flat);

// set

let num1 = [1,2,3,3,3,46,6,6,7,8,9,9];
let rr  = [...new Set(num1)];
console.log(rr)

// highest and lowest value 

console.log("highest and lowest value : ");
// using math.max

let numbers = [10, 50, 30, 90, 20];
let highest = Math.max(...numbers);
console.log(highest); 

// using reduce 

let high = numbers.reduce((max,num)=>{
    return num > max ? num : max
});

console.log(high);

// lowest value 

let lowest = Math.min(...numbers);

console.log(lowest);

// highest and lowest without builtin methods

let numbers1 = [40, 10, 80, 30, 60];

let highest1 = numbers[0];
let lowest1 = numbers[0];

for (let i = 1; i < numbers1.length; i++) {

    if (numbers1[i] > highest1) {
        highest1 = numbers1[i];
    }

    if (numbers1[i] < lowest1) {
        lowest1 = numbers1[i];
    }
}

console.log("Highest:", highest1);
console.log("Lowest:", lowest1);