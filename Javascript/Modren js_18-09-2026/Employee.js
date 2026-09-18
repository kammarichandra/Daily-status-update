export const employee = {
    name: "Ravi",
    salary: 40000
};

export function displayEmployee() {
    console.log(employee.name); 
}

const employee1 = {
    name: "Ravi",
    salary: 40000
};

export default employee1;


// Map 
// Map stores key-value pairs.
// Unlike normal objects, Map can use different types of values as keys.

export let emp = new Map();
emp.set(101,"ravi")
emp.set(102,"ravi")
emp.set(103,"ravi")
emp.set(104,"ravi")
emp.set(105,"ravi")
emp.set(106,"ravi")
emp.set(107,"ravi")
emp.set(108,"ravi")


export let salaries = new Map();

salaries.set("Ravi", 35000);
salaries.set("Priya", 45000);
salaries.set("Arun", 50000);

// set 
// it is used to store the unique values 

let numbers = new Set();

numbers.add(10);
numbers.add(20);
numbers.add(10);
numbers.add(30);

console.log(numbers);

// WeakMap
// WeakMap stores key-value pairs, but its keys must be objects.

let weakMap = new WeakMap();

let employee3 = {
    name: "Ravi",
    age : 23,
    gen : "male"
};

weakMap.set(employee3, "emp data");
console.log(weakMap.get(employee3));

let weakset = new WeakSet();

let emp1 = {
    name : "ramesh",
    role : "ase"
}

let emp2 = {
    name : "suresh",
    role : "tl"
}

weakset.add(emp1);
weakset.add(emp2);

console.log(weakset.has(emp1));
// console.log(weakset.get());

// Map
//  ↓
// Key → Value

// Set
//  ↓
// Unique values

// WeakMap
//  ↓
// Object → Value

// WeakSet
//  ↓
// Unique objects