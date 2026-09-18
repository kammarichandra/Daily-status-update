
class Employee {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const emp = new Employee("chandra", 23, "male");
console.log(emp);

// Creating methods
class Students {
    constructor(name, id, subject, marks) {
        this.name = name;
        this.id = id;
        this.subject = subject;
        this.marks = marks;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Subject: ${this.subject}`);
        console.log(`Marks: ${this.marks}`);
    }
}

const student = new Students("chandra", 12, "javascript", 45);
student.displayDetails();

// Updating properties
class Employee1 {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

const employee2 = new Employee1("Ravi", 30000);

console.log(employee2.salary);

employee2.salary = 45000;

console.log(employee2.salary);

// Extends and super
class EmployeeDetails {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    displayEmployee() {
        console.log(`Name: ${this.name}`);
        console.log(`Salary: ₹${this.salary}`);
    }
}

class Developer extends EmployeeDetails {
    constructor(name, salary, language) {
        super(name, salary);
        this.language = language;
    }

    displayDeveloper() {
        this.displayEmployee();
        console.log(`Language: ${this.language}`);
    }
}

const developer = new Developer("Ravi", 40000, "Java");
developer.displayDeveloper();

// Inheritance
class Student {
    constructor(name, id, age) {
        this.name = name;
        this.id = id;
        this.age = age;
    }

    getDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Age: ${this.age}`);
    }
}

class People extends Student {
    constructor(name, id, age, school) {
        super(name, id, age);
        this.school = school;
    }

    showPeopleDetails() {
        this.getDetails();
        console.log(`School name: ${this.school}`);
    }
}

const people = new People("chandra", 101, 23, "St. Joseph School");

people.showPeopleDetails();

// Prototype example

function Employee5(name, salary) {
    this.name = name;
    this.salary = salary;
}

Employee5.prototype.display = function () {
    console.log(`${this.name} earns ₹${this.salary}`);
};

let employee5 = new Employee5("Ravi", 40000);
let employee6 = new Employee5("Priya", 50000);

employee5.display();
employee6.display();

