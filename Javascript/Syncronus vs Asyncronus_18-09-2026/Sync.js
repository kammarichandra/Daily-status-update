// Synchronous
// Code executes one line at a time, and the next line waits until the previous one finishes.

console.log("Start");

console.log("Processing");

console.log("End");

// Asynchronous
// Some operations can be started and JavaScript can continue executing other code without waiting.

console.log("start");
setTimeout(() => {
    console.log("processing...")
}, 1000);
console.log("end");

// Call Stack
// The Call Stack keeps track of functions currently being executed.

function first() {
    console.log("first fun executed");
}
function second() {
    console.log("second fun executed");
}

first();
second();

// Web APIs
// Web APIs are provided by the browser and handle asynchronous operations.
// Examples:
// setTimeout()
// setInterval()
// fetch()
// DOM APIs
// localStorage


// Callback Queue : 
// When an asynchronous callback becomes ready, it can wait in the Callback Queue.
// i have given 0ms even it doesnot execute it immedietly 
setTimeout(() => {
    console.log("hellooo")
}, 0);

console.log("hai")

// microtask queue
// promise will use the microtask queue

console.log("start");

setTimeout(() => {
    console.log("timer")
}, 0);
Promise.resolve().then(() => {
    console.log("promise");
});

console.log("end");

// Event Loop
// The Event Loop coordinates:
// Call Stack
//      ↓
// Web APIs
//      ↓
// Microtask Queue
//      ↓
// Callback/Task Queue
//      ↓
// Event Loop

// Execution order :
// 1 → synchronous
// Timer registered
// Promise callback registered as microtask
// 4 → synchronous
// Promise microtask executes
// Timer callback executes


console.log("1");
setTimeout(() => {
    console.log("2");
}, 0);
Promise.resolve().then(() => {
    console.log("3");
})
console.log("4");

// settimeout()

setTimeout(() => {
    console.log("hello by setTimeout()")
}, 2000);

// setInterval()
// Executes a function repeatedly.

let count = 0;

let id = setInterval(() => {
    console.log(count);
    count++;

    if (count >= 5) {
        clearInterval(id);
    }
}, 2000)

// Promise
// A Promise represents the eventual result of an asynchronous operation.

let promise = new Promise((resolve, rejecte) => {
    let success = true;

    if (success) {
        resolve("operation done");
    } else {
        rejecte("operation fail");
    }
});
console.log(promise);

// then , catch , finally 

Promise.resolve("success")
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("opration completed ")
    })

// Promise Chaining
// One Promise can pass its result to another .then().

Promise.resolve(10)
    .then((num) => {
        return num * 5
    })
    .then((num) => {
        return num + 5
    })
    .then((result) => {
        console.log(result);
    })

function login() {
    return Promise.resolve("user logedin")
}
function getprofile() {
    return Promise.resolve("profile loaded");
}
function getorders() {
    return Promise.resolve("orders recived...")
}
login()
    .then((result) => {
        console.log(result);
        return getprofile();
    })
    .then((result) => {
        console.log(result)
        return getorders();
    })
    .then((result) => {
        console.log(result);
    })

// Promise Combinators
// There are four important Promise combinator methods:

// | Method                 | Resolves when          | Rejects when                                     |
// | ---------------------- | ---------------------- | ------------------------------------------------ |
// | `Promise.all()`        | All succeed            | Any one fails                                    |
// | `Promise.race()`       | First Promise settles  | First Promise rejects                            |
// | `Promise.allSettled()` | All finish             | Generally never rejects because of input outcome |
// | `Promise.any()`        | First Promise fulfills | All reject                                       |


let p1 = Promise.resolve("Users");
let p2 = Promise.reject("Products");
let p3 = Promise.resolve("Orders");

Promise.all([p1, p2, p3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

Promise.race([p1, p2, p3])
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
Promise.allSettled([p1, p2, p3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
Promise.any([p1, p2, p3])
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    });

// Async/Await
// async/await provides a cleaner way to work with Promises.

// async function displaydata() {
//     let data = await getdata();

//     console.log(data)
// }
// displaydata()

// error handling 

async function getdata() {

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        let data = await response.json();

        console.log(data)
    } catch (error) {
        console.log(error);
    }


}
getdata()

// Fetch API
// fetch() is used to make HTTP requests.
// Basic syntax:
// fetch(url)

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json)
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    })

// getusers

async function getusers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users")

        if(!response.ok){
            console.log("failed to fetch the details...")
        }

        let users = await response.json();

        console.log(users);

    } catch (error) {
        console.log(error);
    }
}
getusers();

// post 
async function getpost(){
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users",{
            method : "post",

            headers : {
                "application-type" : "application/json"
            },
            body : JSON.stringify({
                name : "chandra",
                age : 23
            })
        });

        let data = await response.json();

        console.log(data);

    } catch (error) {
        console.log(error)
    }
}
getpost();

// put 

async function updateuser() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1",{
            method : "put",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                name : "chandra",
                age : 24
            })
        });

        let  data = await response.json();

        console.log(data);

    } catch (error) {
        console.log(error)
    }
}
updateuser();

// patch

async function updateEmail() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: "newemail@gmail.com"
            })
        }
    );

    const data = await response.json();

    console.log(data);
}

updateEmail();

// delete

async function deleteUser() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                method: "DELETE"
            }
        );

        if (!response.ok) {
            throw new Error("Delete failed");
        }

        console.log("User deleted successfully");

    } catch (error) {

        console.log(error.message);

    }
}

deleteUser();


console.log("start");

setTimeout(()=>{
    console.log("timmer..")
},0);

console.log("end")