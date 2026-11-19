// Call Stack, Callback Queue, and Microtask Queue

function first() {
    console.log("First Function");
}

function second() {
    console.log("Second Function");
}

function third() {
    console.log("Third Function");
}

first();
second();
third();

console.log("Start");

Promise.resolve().then(function () {
    console.log("Promise Microtask");
});

console.log("End");

// microtask queue

console.log("1. Start");

function display() {
    console.log("2. Normal Function");
}

display();

setTimeout(() => {
    console.log("3. setTimeout Callback");
}, 0);

Promise.resolve().then(() => {
    console.log("4. Promise Callback");
});

console.log("5. End");


fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {

        let userList = document.getElementById("userList");

        data.forEach(user => {

            let li = document.createElement("li");

            li.innerText = user.name;

            userList.appendChild(li);

        });

    })
    .catch(error => {
        console.log("Error:", error);
    });

// debouncing 

let timer;

function searchData(value) {

    clearTimeout(timer);

    timer = setTimeout( ()=> {

        console.log("Searching:", value);

    }, 1000);

}

document.getElementById("search").addEventListener("input",  ()=> {

    searchData(this.value);

});

// throtlling

let count = 0;
let allowClick = true;

document.getElementById("clickBtn").addEventListener("click", function() {

    if (!allowClick) {
        return;
    }

    count++;

    document.getElementById("count").innerText = "Count: " + count;

    allowClick = false;

    setTimeout(function() {

        allowClick = true;

    }, 2000);

});

// constructor function

function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
}

let student1 = new Student("Chandra", 22, "Java");
let student2 = new Student("Rahul", 23, "Python");

console.log(student1);
console.log(student2);

function Student1(name, age) {
    this.name = name;
    this.age = age;
}

Student1.prototype.display = function() {
    console.log("Name:", this.name);
    console.log("Age:", this.age);
};

let student3 = new Student1("Chandra", 22);

student1.display();


class Employee {

    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    displayEmployee() {
        console.log("Employee ID:", this.id);
        console.log("Name:", this.name);
        console.log("Department:", this.department);
        console.log("Salary:", this.salary);
    }

}

let emp1 = new Employee(101, "Chandra", "IT", 25000);

emp1.displayEmployee();

// inheretence 

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayPerson() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }

}

class Student5 extends Person {

    displayStudent() {
        console.log("Student Details");
    }

}

let stu = new Student5("Chandra", 22);

stu.displayStudent();
stu.displayPerson();


// shallow copy and deep copy 

let employee = {

    name: "Chandra",

    address: {
        city: "Hyderabad",
        state: "Telangana"
    }

};

let copyEmployee = { ...employee };

// Change nested object

copyEmployee.address.city = "Bangalore";

console.log("Original City:", employee.address.city);

console.log("Copied City:", copyEmployee.address.city);

// deep copy

let employee1 = {

    name: "Chandra",

    address: {
        city: "Hyderabad",
        state: "Telangana"
    }

};

let copyEmployee1 = structuredClone(employee1);

// Change copied object

copyEmployee.address.city = "Bangalore";

console.log("Original City:", employee.address.city);
console.log("Copied City:", copyEmployee.address.city);