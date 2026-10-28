// Import employee data
import { employees } from "./Emp.js";

// Import utility functions
import {
    displayEmployees,
    filterByDepartment,
    findEmployeeById,
    sortBySalaryAscending,
    sortBySalaryDescending,
    calculateTotalSalary,
    calculateAverageSalary,
    findHighestSalary,
    findLowestSalary,
    updateEmployeeSalary
} from "./EmpUtils.js";

// 1. Display all employees
console.log("===== ALL EMPLOYEES =====");

displayEmployees();


// 2. Filter employees by department
console.log("\n===== IT DEPARTMENT =====");

const itEmployees = filterByDepartment("IT");

displayEmployees(itEmployees);


// 3. Find employee by ID
console.log("\n===== FIND EMPLOYEE =====");

const employee = findEmployeeById(103);

console.log(employee);


// 4. Sort employees by salary - Ascending
console.log("\n===== SALARY ASCENDING =====");

displayEmployees(sortBySalaryAscending());


// 5. Sort employees by salary - Descending
console.log("\n===== SALARY DESCENDING =====");

displayEmployees(sortBySalaryDescending());


// 6. Calculate total salary
console.log("\n===== TOTAL SALARY =====");

console.log(`Total Salary: ₹${calculateTotalSalary()}`);


// 7. Calculate average salary
console.log("\n===== AVERAGE SALARY =====");

console.log(`Average Salary: ₹${calculateAverageSalary()}`);


// 8. Find highest-paid employee
console.log("\n===== HIGHEST SALARY =====");

console.log(findHighestSalary());


// 9. Find lowest-paid employee
console.log("\n===== LOWEST SALARY =====");

console.log(findLowestSalary());


// 10. Update employee salary
console.log("\n===== UPDATE SALARY =====");

const updatedEmployees = updateEmployeeSalary(103, 40000);

displayEmployees(updatedEmployees);