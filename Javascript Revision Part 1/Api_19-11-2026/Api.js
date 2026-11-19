fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "GET"
})
    .then(response => response.json())
    .then(data => {
        console.log("User Details:");
        console.log(data);
    })
    .catch(error => console.log("Error:", error));

//post

let post = async () => {

    let response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "Post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            name: "chandra",
            age: 22,
            role: "ase"
        })
    })

    let data = await response.json();

    console.log(data)
}

post();


// put

fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        id: 1,
        name: "Sekhar",
        username: "sekhar123",
        email: "sekhar@gmail.com"
    })
})
    .then(response => response.json())
    .then(data => console.log("Updated User:", data))
    .catch(error => console.log("Error:", error));

// patch

fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        username: "newsekhar123"
    })
})
    .then(response => response.json())
    .then(data => console.log("Username Updated:", data))
    .catch(error => console.log("Error:", error));

// delete

fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "DELETE"
})
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to delete user");
        }
        console.log("User Deleted Successfully");
    })
    .catch(error => console.log("Error:", error));



// try and catch , finally

try {

    let result = 10 / 0;

    console.log(result);

    let name = undefined;

    console.log(name.toUpperCase());

} catch (error) {

    console.log("Error:", error.message);

} finally {

    console.log("Program Completed");

}

// handling errors 

async function getUsers() {

    try {

        let response = await fetch( "https://invalid-example-url.com/users" );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        let data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Network Error:", error.message);

    }

}

getUsers();