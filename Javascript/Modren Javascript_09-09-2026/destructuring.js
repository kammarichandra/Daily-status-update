//obj destrucuring

let student = {
    name: "Rahul",
    age: 21,
    course: "JavaScript"
};

let { name, age, course } = student;

console.log(name);
console.log(age);    
console.log(course); 

// array 
let colors = ["Red", "Green", "Blue"];

let [first, second, third] = colors;

console.log(first);  
console.log(second); 
console.log(third); 

// spread operator 
// spread operator will expands the value 

let fruits = ["Apple", "Banana"];

let allFruits = [...fruits, "Mango", "Orange"];

console.log(allFruits);

// copy array

let num = [1,2,3,4,5,6,7];

let copy = [...num];
console.log(copy);

// combining array 

let a = [1, 2, 3];
let b = [4, 5, 6];

let combined = [...a, ...b];

console.log(combined);

// with objects 
let person = {
    name: "Rahul",
    age: 25
};

let updatedPerson = {
    ...person,
    city: "Hyderabad"
};

console.log(updatedPerson);

// rest operator 
// The rest operator collects multiple values into an array.

function add(...numbers) {
    console.log(numbers);
}

add(10, 20, 30, 40);

// using reduce 
function add1(...numbers) {
   
    return numbers.reduce((num,sum)=> {
        sum + num ,0
    })
}

console.log(add(10, 20, 30, 40))

// rest with destructuring 
let numbers2= [1,2,3,4,5,6,7,8,9]

let[first1,second1,...rest] = numbers2;

console.log(first1);
console.log(second1);
console.log(...rest);

// Optional Chaining ?.
// Used to safely access properties or methods when a value might be null or undefined.
const user = {
  name: "Rahul",
  address: {
    city: "Hyderabad"
  }
};

console.log(user.address?.city); 
console.log(user.contact?.phone); 

// . Nullish Coalescing ??
// Used to provide a default value only when the left side is null or undefined.

const username = null;

console.log(username ?? "Guest");

const count = 0;

console.log(count || 10); 
console.log(count ?? 10); 