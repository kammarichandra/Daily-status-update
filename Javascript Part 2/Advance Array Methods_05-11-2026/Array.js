
// Employee Management Dataset

const employees = [
    { id: 101, name: "Chandra", department: "IT", salary: 45000 },
    { id: 102, name: "Rahul", department: "HR", salary: 35000 },
    { id: 103, name: "Priya", department: "Finance", salary: 28000 },
    { id: 104, name: "Arjun", department: "IT", salary: 55000 },
    { id: 105, name: "Sneha", department: "HR", salary: 32000 },
];

// 1. map() - Display Employee Names

const employeeNames = employees.map(emp => emp.name);

console.log("Employee Names:");
console.log(employeeNames);


// 2. filter() - Employees with Salary Above 30,000

const highSalaryEmployees = employees.filter(
    emp => emp.salary > 30000
);

console.log("\nEmployees with Salary Above 30000:");
console.log(highSalaryEmployees);


// 3. reduce() - Calculate Total Salary

const totalSalary = employees.reduce(
    (total, emp) => total + emp.salary, 0
);

console.log("\nTotal Employee Salary:");
console.log("₹" + totalSalary);


// 4. find() - Find Employee by ID

const employee = employees.find(
    emp => emp.id === 105
);

console.log("\nEmployee with ID 105:");
console.log(employee);


// 5. some() - Check HR Department Employees

const hasHR = employees.some(
    emp => emp.department === "HR"
);

console.log("\nAny Employee Belongs to HR?");
console.log(hasHR);


// 6. every() - Check All Salaries Above 10,000

const allAbove10000 = employees.every(
    emp => emp.salary > 10000
);

console.log("All Employees Salary Above 10000?");
console.log(allAbove10000);

// flat() & flatMap()


// Employee Dataset with Nested Skills
const employees1 = [
    {
        id: 101,
        name: "Chandra",
        skills: ["Java", "JavaScript", ["React", "HTML"]]
    },
    {
        id: 102,
        name: "Rahul",
        skills: ["Python", "SQL", ["Django", "MySQL"]]
    },
    {
        id: 103,
        name: "Priya",
        skills: ["Java", "Spring Boot", ["PostgreSQL", "Hibernate"]]
    },
    {
        id: 104,
        name: "Arjun",
        skills: ["JavaScript", "CSS", ["React", "Node.js"]]
    }
];


// 1. flat() - Convert Nested Array into Single Array

const nestedArray = [
    ["Java", "Python"],
    ["JavaScript", "React"],
    ["HTML", ["CSS", "Bootstrap"]]
];

const flatArray = nestedArray.flat(2);

console.log("Flat Array:");
console.log(flatArray);


// 2. flatMap() - Extract Employee Skills

const allSkills = employees1.flatMap(emp => emp.skills);

console.log("Employee Skills:");
console.log(allSkills);


// 3. flat() - Remove Unnecessary Nested Levels

const deeplyNestedArray = [
    ["Java", ["Spring Boot"]],
    [["React", "JavaScript"]],
    ["HTML", ["CSS", ["Bootstrap"]]]
];

const singleArray = deeplyNestedArray.flat(Infinity);

console.log("Completely Flattened Array:");
console.log(singleArray);


// 4. flatMap() - Display Employee Names and Skills

const employeeSkills = employees1.flatMap(emp =>
    emp.skills.flat(Infinity).map(skill => ({
        employeeName: emp.name,
        skill: skill
    }))
);

console.log("Employee Name and Skills:");
console.log(employeeSkills);
