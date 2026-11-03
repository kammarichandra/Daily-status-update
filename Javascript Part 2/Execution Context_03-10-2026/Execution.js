function first() {
    console.log("First");

    second();
}

function second() {
    console.log("Second");

    third();
}

function third() {
    console.log("Third");
}

first();

// scopes
// global scope

let company = "TeamSync";

function displayCompany() {
    console.log(company);
}

displayCompany();

// function scope

function test() {
    var message = "Hello JavaScript";

    console.log(message);
}

test();

// console.log(message); // ReferenceError

// block scope

{
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(c); // 30

// console.log(a); // ReferenceError
// console.log(b); // ReferenceError

// hoisting 

console.log(a);

var a = 10;

var a;

console.log(a);

a = 10;

// function hoisting 

display();

function display() {
    console.log("Hello");
}

// comibing all

console.log(a);
var a = 10;

// console.log(b);
let b = 20;

hello();

function hello() {
    console.log("Hello");
}

// lexical scope and scope chain

const company1 = "TeamSync";

function outer() {

    const department = "IT";

    function inner() {

        const employee = "Chandra";

        console.log(employee);
        console.log(department);
        console.log(company1);
    }

    inner();
}

outer();

// closures 
// data privacy using closure

function bankAccount() {
    let balance = 1000;

    return {
        deposit(amount) {
            balance += amount;

            console.log("Balance:", balance);
        },

        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;

                console.log("Balance:", balance);
            } else {
                console.log("Insufficient balance");
            }
        },

        getBalance() {
            return balance;
        }
    };
}

const account = bankAccount();

account.deposit(500);
account.withdraw(200);

console.log(account.getBalance());

// counter 

function outer() {
    let count = 0;

    function inner() {
        count++;

        console.log(count);
    }

    return inner;
}

const counter = outer();

counter();
counter();
counter();

// this keyword 

const employee = {
    name: "Chandra",

    display() {
        console.log(this.name);
    }
};

employee.display();

const employee1 = {

    name: "Chandra",

    display: () => {
        console.log(this.name);
    }
};

employee1.display();

// call(),bind(),apply()

const emp = {
    name: "Chandra",
    department: "IT"
};

function displayDetails(city, country) {
    console.log(
        this.name,
        this.department,
        city,
        country
    );
}

// call()

displayDetails.call( emp, "Hyderabad", "India");

//apply

displayDetails.apply(emp, ["Hyderabad", "India"]);

// bind

const newFunction = displayDetails.bind( emp, "Hyderabad", "India");

newFunction();