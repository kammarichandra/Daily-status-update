let studentName = "Ravi";
let marks = [85, 78, 92, 67, 88];

let total = 0;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}

let average = total / marks.length;
let grade;

if (marks.some(mark => mark < 0 || mark > 100)) {
    console.log("Invalid marks");
} else {
    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 35) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    console.log("Student:", studentName);
    console.log("Total:", total);
    console.log("Average:", average);
    console.log("Grade:", grade);
}

//sallary caluclation 

let employeeName = "Chandra";
let salary = 30000;
let experience = 4;
let bonus = 0;

if (experience >= 5) {
    bonus = salary * 0.20;
} else if (experience >= 3) {
    bonus = salary * 0.10;
} else if (experience >= 1) {
    bonus = salary * 0.05;
}

let totalSalary = salary + bonus;

console.log("Employee:", employeeName);
console.log("Basic Salary:", salary);
console.log("Bonus:", bonus);
console.log("Total Salary:", totalSalary);



let a = 20;
let b = 5;
let operator = "*";

switch (operator) {
    case "+":
        console.log("Result:", a + b);
        break;

    case "-":
        console.log("Result:", a - b);
        break;

    case "*":
        console.log("Result:", a * b);
        break;

    case "/":
        if (b !== 0) {
            console.log("Result:", a / b);
        } else {
            console.log("Cannot divide by zero");
        }
        break;

    default:
        console.log("Invalid operator");
}

const employee = {
    name: "Ravi",
    age: 25,
    employeeId: "EMP101",
    training: {
        completed: true
    }
};

// Default name using ??
const name = employee.name ?? "Guest Employee";

// Safely access nested properties using ?.
const trainingCompleted =
    employee.training?.completed ?? false;

// Eligibility conditions
const eligible =
    employee.age >= 18 &&
    Boolean(employee.employeeId) &&
    trainingCompleted;

console.log("Employee:", name);
console.log("Training completed:", trainingCompleted);

console.log(
    eligible
        ? "Employee is eligible"
        : "Employee is not eligible"
);