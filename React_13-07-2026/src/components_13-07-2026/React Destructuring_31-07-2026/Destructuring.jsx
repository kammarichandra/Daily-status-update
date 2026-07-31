let student = {

    name: "Chandra",
    age: 21,
    course: "React"
};

console.log(student.name);
console.log(student.age);
console.log(student.course);

// rename variables 

let { name, age, course } = student;

console.log(name);
console.log(age);
console.log(course);

// Array Destructuring 

let fruits = ["Apple", "Mango", "Orange"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

let [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);

//rest operator 

let fruits = ["Apple", "Mango", "Orange", "Banana"];

let [first , ...others] = fruits;

console.log(first);
console.log(others);