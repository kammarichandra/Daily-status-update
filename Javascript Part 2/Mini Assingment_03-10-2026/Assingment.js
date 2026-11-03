
// Parent Class: Employee

class Employee {

    #salary;

    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.#salary = salary;
    }

    // Getter
    get salary() {
        return this.#salary;
    }

    // Setter
    set salary(newSalary) {
        if (newSalary > 0) {
            this.#salary = newSalary;
        } else {
            console.log("Salary must be greater than zero.");
        }
    }

    // Display Employee Details
    displayDetails() {
        console.log("Employee ID:", this.id);
        console.log("Employee Name:", this.name);
        console.log("Department:", this.department);
        console.log("Salary:", this.calculateSalary());
    }

    // Calculate Salary
    calculateSalary() {
        return this.#salary;
    }

    // Static Method
    static validateName(name) {
        return typeof name === "string" &&
               name.trim().length >= 3;
    }
}


// =====================================
// Child Class: Developer
// =====================================

class Developer extends Employee {

    constructor(id, name, department, salary, programmingLanguage, bonus) {

        super(id, name, department, salary);

        this.programmingLanguage = programmingLanguage;
        this.bonus = bonus;
    }

    // Method Overriding
    calculateSalary() {
        return this.salary + this.bonus;
    }

    displayDetails() {
        super.displayDetails();

        console.log("Role: Developer");
        console.log("Programming Language:", this.programmingLanguage);
        console.log("Bonus:", this.bonus);
    }
}


// =====================================
// Child Class: Manager
// =====================================

class Manager extends Employee {

    constructor(id, name, department, salary, teamSize, bonus) {

        super(id, name, department, salary);

        this.teamSize = teamSize;
        this.bonus = bonus;
    }

    // Method Overriding
    calculateSalary() {
        return this.salary + this.bonus;
    }

    displayDetails() {
        super.displayDetails();

        console.log("Role: Manager");
        console.log("Team Size:", this.teamSize);
        console.log("Bonus:", this.bonus);
    }
}


// =====================================
// Employee Management Class
// =====================================

class EmployeeManagement {

    constructor() {
        this.employees = [];
    }

    // Add Employee
    addEmployee(employee) {
        const existingEmployee = this.searchEmployee(employee.id);

        if (existingEmployee) {
            console.log("Employee ID already exists.");
            return;
        }

        this.employees.push(employee);

        console.log("Employee Added Successfully!");
    }

    // Display All Employees
    displayEmployees() {
        if (this.employees.length === 0) {
            console.log("No Employees Found.");
            return;
        }

        this.employees.forEach(employee => {
            console.log("----------------------");
            employee.displayDetails();
        });
    }

    // Search Employee
    searchEmployee(id) {
        return this.employees.find(employee => employee.id === id);
    }

    // Remove Employee
    removeEmployee(id) {
        const index = this.employees.findIndex(
            employee => employee.id === id
        );

        if (index === -1) {
            console.log("Employee Not Found.");
            return;
        }

        this.employees.splice(index, 1);

        console.log("Employee Removed Successfully!");
    }

    // Update Employee Salary
    updateSalary(id, newSalary) {
        const employee = this.searchEmployee(id);

        if (!employee) {
            console.log("Employee Not Found.");
            return;
        }

        employee.salary = newSalary;

        console.log("Salary Updated Successfully!");
    }
}


// Main Program

// Create Management Object
const management = new EmployeeManagement();

// Create Employee Objects
const employee1 = new Employee( 101, "Chandra", "IT", 30000);

const developer1 = new Developer( 102, "Sekhar", "Development", 50000, "JavaScript", 10000);

const manager1 = new Manager( 103, "Ravi", "IT", 80000, 10, 20000);

// Add Employees
management.addEmployee(employee1);
management.addEmployee(developer1);
management.addEmployee(manager1);


// Display Employees
console.log("\nAll Employees:");

management.displayEmployees();


// Search Employee
console.log("\nSearching Employee:");

const employee = management.searchEmployee(102);

if (employee) {
    employee.displayDetails();
}


// Update Salary
console.log("\nUpdating Salary:");

management.updateSalary(101, 40000);


// Display Updated Employee
console.log("\nUpdated Employee:");

management.searchEmployee(101).displayDetails();


// Remove Employee
console.log("\nRemoving Employee:");

management.removeEmployee(103);


// Display Employees After Removal
console.log("\nEmployees After Removal:");

management.displayEmployees();