// 1. Fetch API
// The Fetch API is used to communicate with a server/API and get or send data.

// fetch("url");

// 2. GET Request
// A GET request is used to retrieve data from an API.

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            console.log("user name :",user.name);
            console.log("email :" , user.email);
        });
    })
    .catch(error => {
        console.log("Error:", error);
    });


// post 

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "heloo",
        body: "my first post",
        userid: 1
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Api response handling 
// an api response is usally converted into json format 

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        if (!response.ok) {
            throw new Error("something went wrong ");
        }
        return response.json();
    })
    .then(data => {
        console.log("name :", data.name);
        console.log("email :", data.email)
    })
    .catch(error => {
        console.log("error : ", error.message)
    })

// promise 
// A Promise represents a value that will be available now, later, or never.
// It has three states:
// Pending → still working
// Fulfilled → successful
// Rejected → failed

const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Task completed!");
    } else {
        reject("Task failed!");
    }
});

promise.then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

//Async/await
//these are the cleaner way to work with the promise 
// How it works
// async → makes a function return a Promise.
// await → waits for a Promise to finish.
// response.json() → converts the API response into JavaScript data.

async function getusers() {
    
    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    let data = await response.json();

    console.log(data);
}

getusers();

// error handling 
// When working with APIs, things can go wrong:
// Internet connection fails
// API URL is wrong
// Server returns an error
// Data is not what you expected

async function getuser() {

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!response.ok){
            throw new Error("api request failed")
        }

        let data = await response.json();

        console.log(data);

    } catch (error) {
        console.log("error :",error.message);
    }
    
}

getuser();