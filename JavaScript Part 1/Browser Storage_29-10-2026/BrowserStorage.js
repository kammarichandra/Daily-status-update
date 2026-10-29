const usernameInput = document.getElementById("username");
const usernameOutput = document.getElementById("usernameOutput");

// Store username
document.getElementById("saveBtn").addEventListener("click", function () {
    localStorage.setItem("username", usernameInput.value);
    alert("Username saved!");
});

// Retrieve username
document.getElementById("getBtn").addEventListener("click", function () {
    const username = localStorage.getItem("username");

    usernameOutput.textContent = username || "No username found";
});

// Update username
document.getElementById("updateBtn").addEventListener("click", function () {
    localStorage.setItem("username", usernameInput.value);
    alert("Username updated!");
});

// Remove specific key
document.getElementById("removeBtn").addEventListener("click", function () {
    localStorage.removeItem("username");
    usernameOutput.textContent = "Username removed";
});

// Clear all Local Storage
document.getElementById("clearBtn").addEventListener("click", function () {
    localStorage.clear();
    usernameOutput.textContent = "Local Storage cleared";
});

// dark mode 
const themeBtn = document.getElementById("themeBtn");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// Toggle theme

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});


// json operations 

let employees = JSON.parse(localStorage.getItem("employees")) || [];

const employeeName = document.getElementById("employeeName");
const employeeSalary = document.getElementById("employeeSalary");
const employeeOutput = document.getElementById("employeeOutput");

// Object to JSON string
const employee = {
    id: 1,
    name: "Rahul",
    salary: 30000
};

const jsonString = JSON.stringify(employee);

console.log(jsonString);

// JSON string to object
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject);


// Add Employee
document.getElementById("addEmployeeBtn").addEventListener("click", function () {
    const newEmployee = {
        id: Date.now(),
        name: employeeName.value,
        salary: Number(employeeSalary.value)
    };

    employees.push(newEmployee);

    saveEmployees();
    displayEmployees();

    employeeName.value = "";
    employeeSalary.value = "";
});


// Store employee array in Local Storage
function saveEmployees() {
    localStorage.setItem("employees", JSON.stringify(employees));
}


// Retrieve and display employees
function displayEmployees() {
    employeeOutput.innerHTML = "";

    employees.forEach(function (employee) {
        const div = document.createElement("div");

        div.className = "employee";

        div.innerHTML = `
            <p>Name: ${employee.name}</p>
            <p>Salary: ₹${employee.salary}</p>

            <button onclick="updateEmployee(${employee.id})">
                Update
            </button>

            <button onclick="deleteEmployee(${employee.id})">
                Delete
            </button>
        `;

        employeeOutput.appendChild(div);
    });
}


// Update Employee
function updateEmployee(id) {
    const newSalary = prompt("Enter new salary:");

    if (newSalary === null || newSalary.trim() === "") {
        return;
    }

    employees = employees.map(function (employee) {
        if (employee.id === id) {
            return {
                ...employee,
                salary: Number(newSalary)
            };
        }

        return employee;
    });

    saveEmployees();
    displayEmployees();
}


// Delete Employee
function deleteEmployee(id) {
    employees = employees.filter(function (employee) {
        return employee.id !== id;
    });

    saveEmployees();
    displayEmployees();
}

// Display saved employees when page loads
displayEmployees();

// session storage 

const loginName = document.getElementById("loginName");
const sessionOutput = document.getElementById("sessionOutput");

// Store login information
document.getElementById("loginBtn").addEventListener("click", function () {

    sessionStorage.setItem("loginUser", loginName.value);

    sessionOutput.textContent = "Login successful!";
});

// Retrieve session data
document.getElementById("getSessionBtn").addEventListener("click", function () {
    
    const user = sessionStorage.getItem("loginUser");

    sessionOutput.textContent = user
        ? "Logged in as: " + user
        : "No session found";
});

// Remove session data during logout
document.getElementById("logoutBtn").addEventListener("click", function () {
    sessionStorage.removeItem("loginUser");

    sessionOutput.textContent = "Logged out successfully";
});