export const PI = 3.14;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

function getUser() {
    return {
        id: 101,
        name: "Chandra",
        role: "Software Developer"
    };
}

export default getUser;

export const employees = [
    {
        id: 101,
        name: "Chandra",
        department: "IT",
        salary: 30000
    },
    {
        id: 102,
        name: "Rahul",
        department: "HR",
        salary: 25000
    },
    {
        id: 103,
        name: "Priya",
        department: "Finance",
        salary: 35000
    }
];

export function validateSalary(salary) {

    if (salary <= 0) {
        throw new Error("Salary must be greater than zero");
    }

    return "Valid Salary";
}

try {
    console.log(validateSalary(30000));

} catch (error) {
    console.log("Validation Error:", error.message);
}