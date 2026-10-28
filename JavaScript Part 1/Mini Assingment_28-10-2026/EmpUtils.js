// Import employee data
import { employees } from "./Emp.js";

// 1. Display all employees
export const displayEmployees = (employeeList = employees) => {
    employeeList.forEach(({ id, name, department, salary }) => {
        console.log(
            `ID: ${id}, Name: ${name}, Department: ${department}, Salary: ₹${salary}`
        );
    });
};

// 2. Filter employees by department
export const filterByDepartment = (department) => {
    return employees.filter(
        (employee) => employee.department === department
    );
};

// 3. Find employee by ID
export const findEmployeeById = (id) => {
    return employees.find((employee) => employee.id === id);
};

// 4. Sort employees by salary (Ascending)
export const sortBySalaryAscending = () => {
    return [...employees].sort((a, b) => a.salary - b.salary);
};

// 5. Sort employees by salary (Descending)
export const sortBySalaryDescending = () => {
    return [...employees].sort((a, b) => b.salary - a.salary);
};

// 6. Calculate total salary
export const calculateTotalSalary = () => {
    return employees.reduce(
        (total, employee) => total + employee.salary,
        0
    );
};

// 7. Calculate average salary
export const calculateAverageSalary = () => {
    const totalSalary = calculateTotalSalary();

    return employees.length > 0
        ? totalSalary / employees.length
        : 0;
};

// 8. Find highest-paid employee
export const findHighestSalary = () => {
    return employees.reduce((highest, employee) => {
        return employee.salary > highest.salary
            ? employee
            : highest;
    });
};

// 9. Find lowest-paid employee
export const findLowestSalary = () => {
    return employees.reduce((lowest, employee) => {
        return employee.salary < lowest.salary
            ? employee
            : lowest;
    });
};

// 10. Update employee salary using spread operator
export const updateEmployeeSalary = (id, newSalary) => {
    return employees.map((employee) =>
        employee.id === id
            ? { ...employee, salary: newSalary }
            : employee
    );
};