import { EmployeeManagement } from "./Emp.js";
import createUser from "./FactoryPattren.js";
import { Subject, Employee } from "./ObserverPattren.js";

// Add Employees
console.log(EmployeeManagement.addEmployee({
    id: 1,
    name: "Chandra",
    department: "IT",
    salary: 30000
}));

console.log(EmployeeManagement.addEmployee({
    id: 2,
    name: "Rahul",
    department: "HR",
    salary: 25000
}));

// Get Employees
console.log("All Employees:");
console.log(EmployeeManagement.getEmployees());

// Update Employee
console.log(EmployeeManagement.updateEmployee(1, {
    salary: 40000
}));

// Get Updated Employees
console.log("After Update:");
console.log(EmployeeManagement.getEmployees());

// Delete Employee
console.log(EmployeeManagement.deleteEmployee(2));

// Get Remaining Employees
console.log("After Delete:");
console.log(EmployeeManagement.getEmployees());


//factory pattren

// Create Admin

const admin = createUser(
    "admin",
    "Chandra",
    "admin@gmail.com"
);

// Create Employee

const employee = createUser(
    "employee",
    "Rahul",
    "rahul@gmail.com"
);

// Create Manager

const manager = createUser(
    "manager",
    "Priya",
    "priya@gmail.com"
);

// Display User Information

console.log("ADMIN DETAILS");
console.log(admin);

console.log("EMPLOYEE DETAILS");
console.log(employee);

console.log("MANAGER DETAILS");
console.log(manager);

// Create Subject
const announcement = new Subject();

// Create Employees
const emp1 = new Employee(
    "Chandra",
    "chandra@gmail.com"
);

const emp2 = new Employee(
    "Rahul",
    "rahul@gmail.com"
);

const emp3 = new Employee(
    "Priya",
    "priya@gmail.com"
);

// Subscribe Employees
console.log(announcement.subscribe(emp1));
console.log(announcement.subscribe(emp2));
console.log(announcement.subscribe(emp3));

// Publish Announcement
announcement.notify(
    "Tomorrow is a company holiday!"
);

// Unsubscribe Rahul
console.log("\nUnsubscribing Rahul...");
console.log(announcement.unsubscribe(emp2));

// Publish Another Announcement
announcement.notify(
    "Monday meeting starts at 10 AM."
);
