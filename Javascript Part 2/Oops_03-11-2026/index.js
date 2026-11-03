// Parent Class
class Employee {

    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    // Common Method
    displayDetails() {
        console.log("Employee ID:", this.id);
        console.log("Employee Name:", this.name);
        console.log("Department:", this.department);
        console.log("Salary:", this.salary);
    }
}

// Developer Child Class
class Developer extends Employee {

    constructor(id, name, department, salary, programmingLanguage) {

        // Call Parent Constructor
        super(id, name, department, salary);

        this.programmingLanguage = programmingLanguage;
    }

    // Override Parent Method
    displayDetails() {
        super.displayDetails();

        console.log("Programming Language:", this.programmingLanguage);
    }
}

// Manager Child Class
class Manager extends Employee {

    constructor(id, name, department, salary, teamSize) {

        // Call Parent Constructor
        super(id, name, department, salary);

        this.teamSize = teamSize;
    }

    // Override Parent Method
    displayDetails() {
        super.displayDetails();

        console.log("Team Size:", this.teamSize);
    }
}

// Create Developer Object
const developer1 = new Developer(101, "Chandra", "IT", 50000, "JavaScript");

// Create Manager Object
const manager1 = new Manager(102, "Sekhar", "IT", 80000, 10);

// Display Developer Details
console.log("Developer Details:");
developer1.displayDetails();

// Display Manager Details
console.log("\nManager Details:");
manager1.displayDetails();

// encapsulation 
// bank account

// BankAccount Class
class BankAccount {

    // Private Property
    #balance;

    // Constructor
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    // Deposit Method
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than zero.");
            return;
        }

        this.#balance += amount;

        console.log("Amount Deposited:", amount);
    }

    // Withdraw Method
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be greater than zero.");
            return;
        }

        if (amount > this.#balance) {
            console.log("Insufficient Balance!");
            return;
        }

        this.#balance -= amount;

        console.log("Amount Withdrawn:", amount);
    }

    // Get Balance Method
    getBalance() {
        return this.#balance;
    }
}

// Create Bank Account Object
const account1 = new BankAccount(10000);

// Deposit Money
account1.deposit(5000);

// Withdraw Money
account1.withdraw(2000);

// Display Balance
console.log("Current Balance:", account1.getBalance());

// Try Direct Access
// console.log(account1.balance);
// Direct access to private property
// console.log(account1.#balance); // SyntaxError

// getters and setters

class User {

    //private property

    #name;

    //constructor
    constructor(name) {
        this.name = name
    }

    // gettters amd setters

    get name() {
        return this.#name;
    }

    // Setter
    set name(newName) {
        if (User.validateName(newName)) {
            this.#name = newName;
        } else {
            console.log("Invalid Name!");
        }
    }

    // Static Method to Validate Name

    static validateName(name) {
        return typeof name === "string" && name.trim().length >= 3;
    }

    // Static Method to Get Company Name
    static getCompanyName() {
        return "TeamSync Solutions";
    }
}

// Create User Objects
const user1 = new User("Chandra");
const user2 = new User("Sekhar");

// Access Name Using Getter
console.log("User 1 Name:", user1.name);
console.log("User 2 Name:", user2.name);

// Update Name Using Setter
user1.name = "Ravi";

// Display Updated Name
console.log("Updated Name:", user1.name);

// Validate Name Using Static Method
console.log(User.validateName("Chandra"));
console.log(User.validateName("AB"));

// Get Company Name Using Static Method
console.log(User.getCompanyName());