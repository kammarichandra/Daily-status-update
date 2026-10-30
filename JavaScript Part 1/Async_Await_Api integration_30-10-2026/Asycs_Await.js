async function displayMessage() {
    return "Hello JavaScript";
}

console.log(displayMessage());


function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}

async function displayData() {
    console.log("Fetching Data...");

    const result = await getData();

    console.log(result);
}

displayData();

// Async And await together 

function getUser() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 101,
                name: "Chandra",
                role: "Software Developer"
            });
        }, 2000);
    });
}

async function displayUser() {
    const user = await getUser();

    console.log(user);
    console.log(user.name);
    console.log(user.role);
}

displayUser();

// error handling 


function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded Successfully");
        }, 2000);
    });
}

async function displayData() {
    try {
        const result = await getData();

        console.log(result);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Operation Completed");
    }
}

displayData();