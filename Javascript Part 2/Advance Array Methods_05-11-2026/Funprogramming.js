
// Functional Programming Calculator

// Addition
function addition(a, b) {
    return a + b;
}

// Subtraction
function subtraction(a, b) {
    return a - b;
}

// Multiplication
function multiplication(a, b) {
    return a * b;
}

// Division

function division(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// Calculator function

function calculator(a, b, operation) {
    return operation(a, b);
}


console.log("Addition:", calculator(20, 10, addition));

console.log("Subtraction:", calculator(20, 10, subtraction));

console.log("Multiplication:", calculator(20, 10, multiplication));

console.log("Division:", calculator(20, 10, division));

console.log("Division by Zero:", calculator(20, 0, division));


// pure and impure functions


// Pure Function

function calculateSalary(employee, bonus) {

    const finalSalary = employee.salary + bonus;

    return finalSalary;
}

// Employee Object
const employee = {
    id: 101,
    name: "Chandra",
    salary: 30000
};

// Function Calls
const salary1 = calculateSalary(employee, 5000);

const salary2 = calculateSalary(employee, 10000);

console.log("Original Salary:", employee.salary);

console.log("Salary After 5000 Bonus:", salary1);

console.log("Salary After 10000 Bonus:", salary2);

console.log("Original Employee Object:", employee);

// immutability

// Student Object

const student = {
    id: 101,
    name: "Chandra",
    age: 23,
    department: "Robotics"
};

console.log("Original Student:", student);


// Requirement 1: Add a new property without modifying original object

const studentWithEmail = {
    ...student,
    email: "chandra@gmail.com"
};

console.log("Student with Email :", studentWithEmail);

console.log("Original Student:", student);


// Requirement 2: Update student details using spread operator

const updatedStudent = {
    ...student,
    name: "Kumar",
    age: 24
};

console.log("Updated Student:", updatedStudent);

console.log("Original Student:", student);

// Requirement 3: Copy an array without modifying original array

const subjects = ["Java", "JavaScript", "React", "MySQL"];

const copiedSubjects = [...subjects];

console.log("Original Array:", subjects);

console.log("Copied Array:", copiedSubjects);


// Add a new subject to copied array

copiedSubjects.push("Spring Boot");

console.log("After Adding New Subject:");

console.log("Original Array:", subjects);

console.log("Copied Array:", copiedSubjects);


// Higher-Order Function

function calculate(a, b, operation) {
    return operation(a, b);
}


// Addition Function
function addition(a, b) {
    return a + b;
}


// Subtraction Function
function subtraction(a, b) {
    return a - b;
}


// Multiplication Function
function multiplication(a, b) {
    return a * b;
}


// Division Function
function division(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
}


// Calling calculate() with different functions

console.log("Addition:", calculate(20, 10, addition));

console.log("Subtraction:", calculate(20, 10, subtraction));

console.log("Multiplication:", calculate(20, 10, multiplication));

console.log("Division:", calculate(20, 10, division));

console.log("Division by Zero:", calculate(20, 12, division));
