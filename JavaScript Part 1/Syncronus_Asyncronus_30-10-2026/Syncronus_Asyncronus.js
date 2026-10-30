console.log("Start");

console.log("Task 1");

console.log("Task 2");

console.log("End");

// asyncronus 

console.log("Start");

setTimeout(() => {
    console.log("Async Task");
}, 2000);

console.log("End");

// both combined 

console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

setTimeout(() => {
    console.log("C");
}, 0);

console.log("D");

// callback functions 

function Hai(name, callback) {
    console.log(`hi ${name} welcome to nyb`)
    callback()

}

function Bye() {
    console.log("take care byee....!")
}
Hai("chandra", Bye);

// callback calculations 

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
    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
}

console.log(calculator(10, 5, add));
console.log(calculator(10, 5, subtract));
console.log(calculator(10, 5, multiply));
console.log(calculator(10, 5, divide));

// callback nestig 

function getUser(callback) {
    setTimeout(() => {
        console.log("User data received");

        callback();
    }, 1000);
}

function getProducts(callback) {
    setTimeout(() => {
        console.log("Products received");

        callback();
    }, 1000);
}

function getOrders() {
    setTimeout(() => {
        console.log("Orders received");
    }, 1000);
}

getUser(() => {
    getProducts(() => {
        getOrders();
    });
});

// callback hell

setTimeout(() => {
    console.log("Step 1");

    setTimeout(() => {
        console.log("Step 2");

        setTimeout(() => {
            console.log("Step 3");

            setTimeout(() => {
                console.log("Step 4");
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);

// promise 

const Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise resolved successfully...!")
    }, 2000)
})

Promise.then((result) => {
    console.log(result);
})

const myPromise = new Promise((resolve, reject) => {
    console.log("Promise is Pending...");
});

console.log(myPromise);

// Used then 

const promise1 = new Promise((resolve) => {
    resolve("Login Successful!");
});

promise1.then((result) => {
    console.log(result);
});

promise1.then((res) => {
    console.log(res);
})
promise1.catch((error) => {
    console.log(error)
})
promise1.finally(() => {
    console.log("promise execution flow completted successfully...!");
});

// Promise chainnig 

const promise2 = new Promise((resolve) => {
    resolve(10);
});

promise2.then((result) => {
    console.log(result);

    return result * 2;
})
    .then((result) => {
        console.log(result);

        return result + 5;
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// Promise Methods 
// Promise.all();

const p1 = Promise.resolve("Java");
const p2 = Promise.resolve("JavaScript");
const p3 = Promise.resolve("React");

Promise.all([p1, p2, p3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// Promise.allSettled();
// it will wait for another promise to execute 

Promise.allSettled([p1, p2, p3])
    .then((result) => {
        console.log(result);
    });

// Promise.race();
// it will returns first promise even that can resolve or rejected state

Promise.race([p1, p2, p3])
    .then((result) => {
        console.log(result);
    });

// Promise.any()
// Promise.any() returns the first successfully fulfilled Promise.

Promise.any([p1,p2,p3])
.then((res)=>{
    console.log(res);
})
