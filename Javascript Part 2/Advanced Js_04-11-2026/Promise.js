const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Promise Resolved Successfully!");
    }, 2000);

});

myPromise.then((result) => {
    console.log(result);
})
    .catch((error) => {
        console.log(error)
    })

const checkAge = new Promise((resolve, reject) => {

    let age = 22;

    if (age >= 18) {
        resolve("You are eligible to vote");
    } else {
        reject("You are not eligible to vote");
    }

});

checkAge
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Failed:", error);
    })
    .finally(() => {
        console.log("process is completed")
    })


// promise chaining 

// Step 1: Validate Login
function login(username, password) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (username === "admin" && password === "12345") {

                resolve("Login Successful!");

            } else {

                reject("Invalid Username or Password");

            }

        }, 1000);

    });

}

// Step 2: Fetch User Details
function getUserDetails() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                id: 101,
                name: "Chandra",
                role: "Admin",
                email: "chandra@gmail.com"
            });

        }, 1000);

    });

}

// Step 3: Execute Promise Chain
login("admin", "12345")

    .then((message) => {

        console.log(message);
        return getUserDetails();

    })

    .then((user) => {

        console.log("User Details:");
        console.log(user);

    })

    .catch((error) => {

        console.log("Error:", error);

    })

    .finally(() => {

        console.log("Login Process Completed");

    });

// Promise Methods 
const promise1 = Promise.resolve("User Data Loaded");

const promise2 = Promise.reject("Product API Failed");

const promise3 = Promise.resolve("Order Data Loaded");

Promise.allSettled([
    promise1,
    promise2,
    promise3
])

    .then((results) => {

        console.log(results);

    });

//Promise.all();

Promise.all([promise1,promise2,promise3])
.then((res)=>{
    console.log(res)
})

//Promise.race()

Promise.race([promise1,promise2,promise3])
.then((res)=>{
    console.log(res);
})

// Promise.any()

Promise.any([promise1,promise2,promise3])
.then((res)=>{
    console.log(res);
})
