console.log("Program Starte d");

console.log("Task 1");

console.log("Task 2");

console.log("Task 3");

console.log("Program Ended");

// asyncronus 

console.log("Program Started");

console.log("Task 1");

setTimeout(() => {
    console.log("Task 2 - Asynchronous Task");
}, 2000);

console.log("Task 3");

console.log("Program Ended");

// combining both 

console.log("A");

setTimeout(() => {
    console.log("B");
}, 3000);

console.log("C");

setTimeout(() => {
    console.log("D");
}, 1000);

console.log("E");

// event loop

console.log("Start");

setTimeout(() => {
    console.log("SetTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

// call stack 

function first() {
    console.log("First Function");
}

function second() {
    console.log("Second Function");
}

first();
second();

// callback queue

console.log("Start");

setTimeout(() => {
    console.log("Callback Queue Task");
}, 1000);

console.log("End");

// Microtask queue

console.log("Start");

Promise.resolve().then(() => {
    console.log("Microtask 1");
});

Promise.resolve().then(() => {
    console.log("Microtask 2");
});

console.log("End");

// combine all exm 

console.log("1 - Start");

setTimeout(() => {
    console.log("2 - SetTimeout 1");
}, 0);

Promise.resolve().then(() => {
    console.log("3 - Promise 1");
});

setTimeout(() => {
    console.log("4 - SetTimeout 2");
}, 0);

Promise.resolve().then(() => {
    console.log("5 - Promise 2");
});

console.log("6 - End");

// callback functions

function greet(name, callback) {
    console.log("Hello " + name);

    callback();
}

function message() {
    console.log("Welcome to JavaScript!");
}

greet("Chandra", message);

function hai(callback,name){
    console.log("hello ",name);
    callback;
}

function bye(){
    console.log("thank you for visiting nyb have a nice day")
}
hai("sekhar",bye)

// calculator using callback

function calculator(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Calling calculator
console.log("Addition:", calculator(20, 10, add));

console.log("Subtraction:", calculator(20, 10, subtract));

console.log("Multiplication:", calculator(20, 10, multiply));

console.log("Division:", calculator(20, 10, divide));

// Nested callback 

function first(callback) {
    console.log("First Task Started");

    callback;
}

function second(callback) {
    console.log("Second Task Started");

    callback;
}

function third() {
    console.log("Third Task Completed");
}

first(() => {
    second(() => {
        third();
    });
});

// nested callback using promise 

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User Details Loaded");

            resolve();
        }, 1000);
    });
}

function getOrders() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Orders Loaded");

            resolve();
        }, 1000);
    });
}

function getPayment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Payment Completed");

            resolve();
        }, 1000);
    });
}

function sendNotification() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Notification Sent");

            resolve();
        }, 1000);
    });
}

// Promise Chaining
getUser()
    .then(() => getOrders())
    .then(() => getPayment())
    .then(() => sendNotification())
    .then(() => {
        console.log("All Tasks Completed");
    })
    .catch((error) => {
        console.log("Error:", error);
    });