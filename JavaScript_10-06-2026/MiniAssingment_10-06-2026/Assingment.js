// array porations 

let fruits = ["apple","banana","orange","watermilon"];

// adding elements 
//push and unshift

fruits.push("apple");

//pop

fruits.unshift("dragon");

//removing ele
//pop and shift

fruits.pop()//last
fruits.shift()//begging

//accessing ele 
console.log(fruits[0]);
console.log(fruits.length);

// splice and slice

let nums =[1,2,34,5,6,7];

console.log(nums.slice(1,4));
console.log(nums.splice(1,2,44));

console.log(nums);

// arrays serching 

let num = [10,12,23,34,45,45,56];
//includes

console.log(num.includes("45"));

//index of 
console.log(num.indexOf(56));

//find 

let res = num.find(num => num>10);

console.log(res);

//find index

let index = num.findIndex(num => num > 45);

console.log(index);

// some
console.log(num.some(num => num>45));

// every
console.log(num.every(num => num >5));

//array transformation method

//map

let nums1 = [12,23,45,56,67,78,89];

let doubled = nums1.map(num => num*2);

console.log(doubled);
console.log(nums1);

//filter 

let even = nums1.filter(num => num %2===0);
console.log(even);

//reduce

let sum = nums1.reduce((acc,curr)=>acc+curr,0);
console.log(sum);

//flat

let nested = [1,2,[3],[5,6]];

console.log(nested.flat(3));

//array iterations 

//for each 

let colors =["red","blue","yellow","orange"];

colors.forEach(color =>{
    console.log(color);
});

//for of 

for(let color of colors){
    console.log(color);
}

//for loop 

for(let i = 0;i<colors.length;i++){
    console.log(colors[i]);
}

// sorting 

//built in sort 

let nums2 = [5,7,3,6,1];

// //asending 

nums2.sort((a,b)=>a-b);

console.log(nums2);

// desending 
nums2.sort((a,b)=> b-a);

console.log(nums2);

// // // // without using sort 
let nums3=[2,3,6,4,5,8]

// for(let i =0; i<nums.length-1;i++){
//     for(let j = 0;j<nums.length-1;j++){
//         if(nums[j]>nums[j+1]){
//             let temp = nums[j];

//             nums[j] = nums[j+1];
//             nums[j+1] = temp;
//         }
//     }
// }
// console.log(nums)
for (let i = 0; i < nums3.length - 1; i++) {
    for (let j = 0; j < nums3.length - 1 - i; j++) {
        if (nums3[j] > nums3[j + 1]) {
            let temp = nums3[j];

            nums3[j] = nums3[j + 1];
            nums3[j + 1] = temp;
        }
    }
}

console.log(nums3);

//object manipulation

// //manipulating obj

let emp ={
    empname : "chandra",
    emprole : "ase",
    sal : 23333,
    dept : "it"
};

//adding 
emp.city = "atp";

//updating 
emp.sal = 20000;

//deleting 

delete emp.emprole;

console.log(emp);

console.log("hello")