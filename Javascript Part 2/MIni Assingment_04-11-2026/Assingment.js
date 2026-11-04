const API_URL = "https://jsonplaceholder.typicode.com/users";

const searchInput = document.getElementById("searchInput");
const userList = document.getElementById("userList");
const status = document.getElementById("status");
const userCount = document.getElementById("userCount");

let usersData = [];
let debounceTimer;

// 1. Fetch Users from API
async function fetchUsers() {

    try {

        status.textContent = "Loading users...";
        userList.innerHTML = "";
        searchInput.disabled = true;

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        usersData = await response.json();

        if (!Array.isArray(usersData) || usersData.length === 0) {
            status.textContent = "No users available";
            userCount.textContent = "Total users: 0";
            return;
        }

        status.textContent = "";
        searchInput.disabled = false;

        displayUsers(usersData);

    } catch (error) {

        status.textContent = "Error: " + error.message;

        userCount.textContent = "";

    }
}


// 2. Display Users
function displayUsers(users) {

    userList.innerHTML = "";

    if (users.length === 0) {

        status.textContent = "No matching users found";

        userCount.textContent = "Total users: 0";

        return;
    }

    status.textContent = "";

    userCount.textContent =
        `Total users found: ${users.length}`;

    users.forEach(user => {

        const card = document.createElement("div");

        card.className = "user-card";

        const name = document.createElement("h3");
        name.textContent = user.name;

        const email = document.createElement("p");
        email.textContent = "Email: " + user.email;

        const username = document.createElement("p");
        username.textContent = "Username: " + user.username;

        card.append(name, email, username);

        userList.appendChild(card);

    });

}


// 3. Search Users
function searchUsers(value) {

    const filteredUsers = usersData.filter(user => {

        return (
            user.name.toLowerCase().includes(value) ||
            user.email.toLowerCase().includes(value)
        );

    });

    displayUsers(filteredUsers);

}


// 4. Debouncing
searchInput.addEventListener("input", function() {

    clearTimeout(debounceTimer);

    const searchValue = this.value.toLowerCase().trim();

    status.textContent = "Searching...";

    debounceTimer = setTimeout(() => {

        searchUsers(searchValue);

    }, 500);

});


// 5. Load API Data
fetchUsers();