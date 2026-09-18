// Destructuring 
// Destructuring allows you to extract values from arrays or objects easily.

const employee = {
    name1: "Ravi",
    age: 25,
    salary: 35000
};

const { name1, age, salary } = employee;

console.log(name1);
console.log(age);
console.log(salary);

let employee1 = {
    name: "Ravi",
    salary: 35000
};

let { name: employeeName, salary: employeeSalary } = employee1;

console.log(employeeName);
console.log(employeeSalary);

// array destructuring 

let arr = [1,2,3,4,5,6,7,7,8,9];

let [first,second,third, , fifth] = arr;

console.log(first);
console.log(second);
console.log(third);
// console.log(fourth);
// skip values 
console.log(fifth);

// Spread Operator ...
// Spread expands an array or object.

let numbers1 = [10, 20, 30];
let numbers2 = [...numbers1, 40, 50];
console.log(numbers2);

// combining arrays 

let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Java", "MySQL"];
let skills = [...frontend, ...backend];
console.log(skills);


// Rest Operator ...
// The same ... syntax is called rest when collecting multiple values.

function calculate(...numbers){

    let total = 0;

    for(number of numbers){
        total += number
    }
    return total;
}

console.log(calculate(1,2,3,4,5,6,7,8,9,9))

function employeeInfo(name, ...skills) {

    console.log("Name:", name);
    console.log("Skills:", skills);

}

employeeInfo("Ravi", "Java", "SQL", "JavaScript", "React");

// template litrals 

let name2 = "chandra";
let age1 = 23

console.log(`heloo my name is ${name2} iam ${age1} years old`);

// Optional Chaining ?.
// Optional chaining prevents errors when accessing properties that may not exist.

let emp = {
    name : "chandra",
    age : 23
};

console.log(emp.name);
console.log(emp?.city);
// console.log(emp.city1);

let employee2 = {
    name: "Ravi",
    address: {
        city: "Bangalore"
    }
};

console.log(employee2.address?.city);
console.log(employee2.address?.state);

// Nullish Coalescing ??
// ?? provides a default value when the left side is:
// null
// undefined

let username  = null;
console.log(username ?? "guest");
