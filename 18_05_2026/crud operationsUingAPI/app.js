let API_URL = "https://jsonplaceholder.typicode.com/users";

let userlist = document.getElementById("userlist");
let userform = document.getElementById("userform");
let searchpoint = document.getElementById("searchpoint");
let status = document.getElementById("status");

let users = [];


// STATUS MESSAGE

function showStatus(message, classname = "") {

    status.textContent = message;
    status.className = classname;

    setTimeout(() => {
        status.textContent = "";
    }, 3000);
}


// FETCH USERS

async function fetchUsers() {

    try {

        showStatus("loading users...", "loading");

        let response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("failed to fetch users");
        }

        users = await response.json();

        renderUsers(users);

        showStatus("users loaded successfully", "success");

    }
    catch (error) {

        showStatus(error.message, "error");
    }
}


// RENDER USERS

function renderUsers(data) {

    userlist.innerHTML = `
    
    <table border="1" width="100%" cellpadding="10">

        <thead>

            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>

        </thead>

        <tbody id="tablebody"></tbody>

    </table>
    `;

    let tablebody = document.getElementById("tablebody");

    data.forEach(user => {

        let div = document.createElement("tr");

        div.innerHTML = `
        
            <td>${user.name}</td>

            <td>${user.email}</td>

            <td>

                <button class="edit-btn" onclick="editUser(${user.id})">
                    Edit
                </button>

                <button class="delete-btn" onclick="deleteUser(${user.id})">
                    Delete
                </button>

            </td>
        `;

        tablebody.appendChild(div);
    });
}

// ADD USER

userform.addEventListener("submit", async (e) => {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let newuser = {
        name,
        email
    };

    try {

        showStatus("Adding user...", "loading");

        let response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(newuser)
        });

        if (!response.ok) {
            throw new Error("failed to add user");
        }

        let addeduser = await response.json();

        users.unshift({
            ...addeduser,
            id: Date.now()
        });

        renderUsers(users);

        userform.reset();

        showStatus("user added successfully", "success");

    }
    catch (error) {

        showStatus(error.message, "error");
    }
});


// DELETE USER

async function deleteUser(id) {

    let confirmDelete = confirm("Delete this user?");

    if (!confirmDelete) return;

    try {

        showStatus("Deleting user...", "loading");

        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Delete failed");
        }

        users = users.filter(user => user.id !== id);

        renderUsers(users);

        showStatus("User deleted", "success");

    }
    catch (error) {

        showStatus(error.message, "error");
    }
}


// EDIT USER

async function editUser(id) {

    let user = users.find(user => user.id === id);

    let newName = prompt("Edit name", user.name);

    if (!newName) return;

    try {

        showStatus("Updating user...", "loading");

        const response = await fetch(`${API_URL}/${id}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                ...user,
                name: newName
            })
        });

        if (!response.ok) {
            throw new Error("Update failed");
        }

        let updatedUser = await response.json();

        users = users.map(user =>
            user.id === id ? updatedUser : user
        );

        renderUsers(users);

        showStatus("User updated", "success");

    }
    catch (error) {

        showStatus(error.message, "error");
    }
}


// SEARCH USERS

searchpoint.addEventListener("input", (e) => {

    let  value = e.target.value.toLowerCase();

    let  filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(value)
    );

    renderUsers(filteredUsers);
});


// // REFRESH USERS EVERY 30 SECONDS

// setInterval(() => {

//     console.log("Refreshing data...");

//     fetchUsers();

// }, 60000);


// INITIAL LOAD

fetchUsers();
