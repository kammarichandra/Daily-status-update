import { getEmployees, saveEmployees } from "./Storage.js";

export function addEmployee(employee) {

    const employees = getEmployees();

    const exists = employees.some(
        emp => emp.empId === employee.empId
    );

    if (exists) {
        throw new Error("Employee ID already exists");
    }

    employees.push(employee);
    saveEmployees(employees);
}

export function updateEmployee(id, updatedEmployee) {

    const employees = getEmployees();

    const duplicate = employees.some(
        emp => emp.empId === updatedEmployee.empId &&
               emp.empId !== id
    );

    if (duplicate) {
        throw new Error("Employee ID already exists");
    }

    const updated = employees.map(emp =>
        emp.empId === id ? updatedEmployee : emp
    );

    saveEmployees(updated);
}

export function deleteEmployee(id) {

    const employees = getEmployees();

    const updated = employees.filter(
        emp => emp.empId !== id
    );

    saveEmployees(updated);
}

export function searchEmployees(keyword) {

    const employees = getEmployees();

    return employees.filter(emp =>
        emp.name.toLowerCase().includes(keyword.toLowerCase()) ||
        emp.empId.toLowerCase().includes(keyword.toLowerCase())
    );
}
