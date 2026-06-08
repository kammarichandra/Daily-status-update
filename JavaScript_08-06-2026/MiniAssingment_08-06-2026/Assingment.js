// Array creaction

let arr =[1,2,3,4,5,6,7,8];
console.log(arr);

// multidimensinal array

let arr1 = [[1,2,3,5],
            [3,4,5,6],
            [4,6,7,8]]
console.log(arr1);

// adding and removing array

let num = [1,2,3,4,5];
num.unshift(7)// add the array bignning of array
num.splice(2,0,44);// adding specific element 

console.log(num);

//remove array
num.pop()//remove ele from last
num.splice(1,1);//remove specific ele

console.log(num);

// serching ele 
console.log("length of array : ",num.length)
console.log("contains nums :",num.includes(5));
console.log("index of num 3",num.indexOf(5));
console.log("last index of :", num.lastIndexOf(5));

//combinig arrays 

let veg = ["brinjal","tomato","carrot","chilly"];
let fruits = ["apple","mango","orange","kivi"];
// using contact
let allitems = veg.concat(fruits);

console.log(allitems);

// using spread operator

let allitems1 = [...veg , ...fruits];
console.log(allitems1);

// array iteration 

let fruits1 = ["apple","mango","orange","kivi"];

//for loop 

for(let i=0; i<fruits1.length; i++){

    console.log(fruits1[i]);
}

// for of 

for(fruit of fruits1){
    console.log(fruit);
}

//for each

fruits1.forEach((fruits1,index)=>{
    console.log(index + ":" + fruits1)
})