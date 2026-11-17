// 1. Advanced Array Methods

let employees = [
    { id: 1, name: "Chandra", salary: 25000, department: "IT" },
    { id: 2, name: "Rahul", salary: 30000, department: "HR" },
    { id: 3, name: "Kiran", salary: 35000, department: "IT" },
    { id: 4, name: "Arjun", salary: 20000, department: "Sales" }
];

// map() - Extract employee names

let names = employees.map(emp => emp.name);
console.log("Employee Names:", names);

// filter() - Find employees with salary above 25000

let highSalary = employees.filter(emp => emp.salary > 25000);
console.log("High Salary Employees:", highSalary);

// find() - Find employee by ID

let employee = employees.find(emp => emp.id === 2);
console.log("Found Employee:", employee);

// reduce() - Calculate total salary

let totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
console.log("Total Salary:", totalSalary);

// sort() - Sort employees by salary

let sortedEmployees = [...employees].sort((a, b) => a.salary - b.salary);
console.log("Sorted Salaries:", sortedEmployees.map(emp => emp.salary));

// 2. Map and Set Collections


// Map - Store key-value pairs
let studentMap = new Map();

studentMap.set(101, "Chandra");
studentMap.set(102, "Rahul");
studentMap.set(103, "Kiran");

console.log("Map Data:", studentMap);
console.log("Student 101:", studentMap.get(101));
console.log("Map Size:", studentMap.size);

studentMap.delete(102);
console.log("After Delete:", studentMap);


// Set - Store unique values
let numbers = [10, 20, 30, 20, 40, 10, 50];

let uniqueNumbers = new Set(numbers);

console.log("Unique Numbers:", [...uniqueNumbers]);
console.log("Set Size:", uniqueNumbers.size);

uniqueNumbers.add(60);
uniqueNumbers.delete(20);

console.log("Updated Set:", [...uniqueNumbers]);
console.log("Contains 30:", uniqueNumbers.has(30));

