
// API URL
const API_URL = "https://jsonplaceholder.typicode.com/users";


// 1. GET - Retrieve Records

async function getUsers() {

    try {

        let response = await fetch(API_URL);
        let data = await response.json();

        console.log("1. GET - Users:", data);

    } catch (error) {
        console.log("Error:", error.message);
    }
}


// 2. POST - Create a New Record
async function createUser() {
    try {
        let user = {
            name: "Chandra",
            email: "chandra@gmail.com",
            username: "chandra123"
        };

        let response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        let data = await response.json();

        console.log("2. POST - Created:", data);

    } catch (error) {
        console.log("Error:", error.message);
    }
}


// 3. PUT - Update Complete Record
async function updateUser() {
    try {
        let user = {
            id: 1,
            name: "Chandra Sekhar",
            email: "chandra@gmail.com",
            username: "chandra123"
        };

        let response = await fetch(`${API_URL}/1`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        let data = await response.json();

        console.log("3. PUT - Updated:", data);

    } catch (error) {
        console.log("Error:", error.message);
    }
}


// 4. PATCH - Update Specific Fields
async function patchUser() {
    try {
        let user = {
            name: "Updated Chandra"
        };

        let response = await fetch(`${API_URL}/1`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        let data = await response.json();

        console.log("4. PATCH - Updated:", data);

    } catch (error) {
        console.log("Error:", error.message);
    }
}


// 5. DELETE - Delete a Record
async function deleteUser() {
    try {
        let response = await fetch(`${API_URL}/1`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Failed to delete user");
        }

        console.log("5. DELETE - User deleted successfully");

    } catch (error) {
        console.log("Error:", error.message);
    }
}

// Calling All Functions

getUsers();
createUser();
updateUser();
patchUser();
deleteUser();
