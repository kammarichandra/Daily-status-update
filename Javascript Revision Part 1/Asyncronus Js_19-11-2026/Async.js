
// syncronus and asyncronus 

console.log("Hello");
console.log("Welcome to JavaScript");
console.log("Good Morning");

console.log("Program Started");

setTimeout(function () {
    console.log("Message after 2 seconds");
}, 2000);

console.log("Program Ended");

// setInterval

let count = 1;

let timer = setInterval(function () {
    console.log("Hello JavaScript " + count);

    count++;

    if (count > 5) {
        clearInterval(timer);
    }

}, 1000);

// callback functions and callback hell

function Hai(callback) {
    console.log("hi wellcome to atp");

    callback()
}

function bye() {

    console.log("byee take care...!")

}
Hai(bye)

// using callback calculator

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

console.log("Addition:", calculator(10, 5, add));
console.log("Subtraction:", calculator(10, 5, subtract));
console.log("Multiplication:", calculator(10, 5, multiply));

// display msg

function display(callback) {
    setTimeout(() => {
        console.log("wellcome to js");
        callback();
    }, 2000)
}

function completed() {
    console.log("your task is completed ")
}

display(completed);


// callback hell

function firstTask(callback) {
    setTimeout(function () {
        console.log("First Task Completed");

        callback();
    }, 1000);
}

function secondTask(callback) {
    setTimeout(function () {
        console.log("Second Task Completed");

        callback();
    }, 1000);
}

function thirdTask(callback) {
    setTimeout(function () {
        console.log("Third Task Completed");

        callback();
    }, 1000);
}

firstTask(() => {
    secondTask(() => {
        thirdTask(() => {
            console.log("All Tasks Completed");
        });
    });
});

// promises and promise chainning

let promise = new Promise((resolve, rejected) => {
    resolve("promise successfully completed")
})

promise.then((res) => {
    console.log(res);
})

let promise1 = new Promise((resolve, rejected) => {
    rejected("promise failed")
})

promise1.then((res) => {
    console.log(res);
})

let age = 20;

let checkAge = new Promise(function (resolve, reject) {

    if (age >= 18) {
        resolve("You are eligible to vote");
    } else {
        reject("You are not eligible to vote");
    }

});

checkAge
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => {
        console.log("completed");
    })

// Promise chainnig

let myPromise = new Promise(function (resolve, reject) {
    resolve(10);
});

myPromise
    .then(function (result) {
        console.log("First Result:", result);
        return result + 10;
    })
    .then(function (result) {
        console.log("Second Result:", result);
        return result + 10;
    })
    .then(function (result) {
        console.log("Third Result:", result);
    })
    .catch(function (error) {
        console.log(error);
    });

// async and await 

async function displayMessage() {
    return "Welcome to JavaScript Async/Await";
}

displayMessage().then( (result)=> {

    console.log(result);

});

let getusers = async()=>{

    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    let data = response.json();

    console.log(data);
}

getusers()

// handlling errors 

async function getData() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        let data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Error:", error.message);

    }

}

getData();