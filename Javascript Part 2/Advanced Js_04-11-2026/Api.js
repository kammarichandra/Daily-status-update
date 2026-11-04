const userList = document.getElementById("userList");
const search = document.getElementById("search");
const status = document.getElementById("status");

let usersData = [];

async function getUsers() {

    try {

        status.innerText = "Loading...";
        userList.innerHTML = "";

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("API request failed");
        }

        usersData = await response.json();

        if (!Array.isArray(usersData) || usersData.length === 0) {
            status.innerText = "No users available";
            return;
        }

        status.innerText = "";
        displayUsers(usersData);

    } catch (error) {

        status.innerText = "Error: " + error.message;

    }
}

function displayUsers(users) {

    userList.innerHTML = "";

    if (users.length === 0) {
        userList.innerHTML = "<p>No matching users found</p>";
        return;
    }

    users.forEach(user => {

        userList.innerHTML += `
            <div class="user">
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
            </div>
        `;

    });
}

search.addEventListener("input", () => {

    const value = search.value.toLowerCase();

    const filteredUsers = usersData.filter(user =>

        user.name.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value)

    );

    displayUsers(filteredUsers);

});

getUsers();