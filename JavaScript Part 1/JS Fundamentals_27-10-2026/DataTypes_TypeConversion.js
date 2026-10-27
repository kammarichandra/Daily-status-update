// Data Types

let name = "Chandra";               // String
let age = 25;                       // Number
let isEmployee = true;              // Boolean
let address;                        // Undefined
let manager = null;                 // Null
let bigNumber = 123456n; // BigInt
let id = Symbol("employeeId");      // Symbol

console.log(name);
console.log(age);
console.log(isEmployee);
console.log(address);
console.log(manager);
console.log(bigNumber);
console.log(id);

// emp obj

const employee = {
    name: "Ravi",
    age: 25,
    salary: 35000,
    role: "Software Developer"
};

console.log(employee);
console.log(employee.name);
console.log(employee.age);
console.log(employee.salary);
console.log(employee.role);

const employees = [
    "Ravi",
    "Sita",
    "Kiran",
    "Priya",
    "Arjun"
];

console.log(employees);
console.log(employees[0]);
console.log(employees[2]);
console.log("Total employees:", employees.length);

// type of operator

let name1 = "Chandra";
let age1 = 25;
let isActive = true;
let salary;
let employee1 = { name: "Ravi" };
let employees1 = ["Ravi", "Sita"];
let emptyValue = null;

console.log(typeof name1);
console.log(typeof age1);
console.log(typeof isActive);
console.log(typeof salary);
console.log(typeof employee1);
console.log(typeof employees1);
console.log(typeof emptyValue);

// String to number

let value = "100";
let result = Number(value);

console.log(result);
console.log(typeof result);
console.log(Number("25.5"));
console.log(Number("hello"));

// type coircen 

console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);