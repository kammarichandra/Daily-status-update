
// Employee Constructor Function
function Employee(id, name) {
    this.id = id;
    this.name = name;
}

// Employee Prototype Method
Employee.prototype.displayDetails = function () {
    console.log("Employee ID:", this.id);
    console.log("Employee Name:", this.name);
};

// Manager Constructor Function
function Manager(id, name, department) {

    // Inherit Employee properties
    Employee.call(this, id, name);

    this.department = department;
}

// Inherit Employee prototype methods
Manager.prototype = Object.create(Employee.prototype);

// Restore Manager constructor reference
Manager.prototype.constructor = Manager;

// Manager-specific method
Manager.prototype.manageTeam = function () {
    console.log(this.name, "is managing the", this.department, "team.");
};

// Create Employee Object
const emp1 = new Employee(101, "Chandra");

// Create Manager Object
const manager1 = new Manager(201, "Sekhar", "IT");

// Display Employee Details
emp1.displayDetails();

// Display Manager Details
manager1.displayDetails();

// Manager-specific method
manager1.manageTeam();


// contructor functions 

function Product(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;

    this.displayDetails = () => {
        console.log("Product ID:", this.id);
        console.log("Product Name:", this.name);
        console.log("Product Price:", this.price);
    }

    // update price

    this.updatePrice = (newPrice)=>{
        this.price = newPrice;
        console.log("updared price : ",this.price)
    }
}

// Create Three Product Objects
const product1 = new Product(101, "Laptop", 50000);
const product2 = new Product(102, "Mobile", 25000);
const product3 = new Product(103, "Headphones", 2000);

console.log("Product1 : ")
product1.displayDetails();

console.log("Product2 : ")
product2.displayDetails();

console.log("Product3 : ")
product3.displayDetails();

// update product price : 

console.log("Updated Price : ")
product1.updatePrice(40000);

// classes and objects 

class Emp {
    // constructor

    constructor(id,name,dept,basicsallary,bonus){
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.basicsallary = basicsallary;
        this.bonus = bonus;
    }

    // display emp details

    displayDetails1(){
        console.log("emp id : " , this.id);
        console.log("emp Name : " , this.name);
        console.log("emp dept : " , this.dept);
        console.log("emp basicsallary : " , this.basicsallary);
        console.log("emp bonus : " , this.bonus);
    }

    // calculate sallary 

    calculateSallary(){
        return this.basicsallary + this.bonus
    }
}

// Create Employee Objects
const employee1 = new Employee(101, "Chandra", "IT", 30000, 5000);

const employee2 = new Employee(102, "Sekhar", "HR", 25000, 3000);

const employee3 = new Employee(103, "Ravi", "Finance", 40000, 7000);


// Display Employee 1 Details
console.log("Employee 1 Details:");
employee1.displayDetails();

// Display Employee 2 Details
console.log("\nEmployee 2 Details:");
employee2.displayDetails();

// Display Employee 3 Details
console.log("\nEmployee 3 Details:");
employee3.displayDetails();

// inheritence using extends keyword 

