
import { Employee } from "./employee.js";
import { Task } from "./Task.js";
import { createStorage } from "./Storage.js";

// Storage
const employeeStorage = createStorage("employees");
const taskStorage = createStorage("tasks");

// Application Data
let employees = employeeStorage.get();
let tasks = taskStorage.get();

// HTML Elements
const employeeForm = document.getElementById("employeeForm");
const taskForm = document.getElementById("taskForm");

const employeeList = document.getElementById("employeeList");
const taskList = document.getElementById("taskList");

const employeeSelect = document.getElementById("taskEmployee");

// Reusable Function
function saveData() {
    employeeStorage.save(employees);
    taskStorage.save(tasks);
}

// Display Employees
function displayEmployees(data = employees) {

    employeeList.innerHTML = "";

    data.forEach(emp => {

        const card = document.createElement("div");

        card.className = "employee-card";

        card.innerHTML = `
            <h3>${emp.name}</h3>
            <p>Email: ${emp.email}</p>
            <p>Role: ${emp.role}</p>
            <button class="delete-btn"
                data-id="${emp.id}">Delete</button>
        `;

        employeeList.appendChild(card);
    });

    updateEmployeeSelect();
}

// Update Employee Dropdown
function updateEmployeeSelect() {

    employeeSelect.innerHTML =
        '<option value="">Select Employee</option>';

    employees.forEach(emp => {

        const option = document.createElement("option");

        option.value = emp.id;
        option.textContent = emp.name;

        employeeSelect.appendChild(option);
    });
}

// Add Employee
employeeForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("empName").value;
    const email = document.getElementById("empEmail").value;
    const role = document.getElementById("empRole").value;

    const employee = new Employee(
        Date.now(),
        name,
        email,
        role
    );

    employees.push(employee);

    saveData();
    displayEmployees();

    employeeForm.reset();
});

// Add Task
taskForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("taskName").value;
    const employeeId = Number(employeeSelect.value);

    if (!employeeId) {
        alert("Please select an employee");
        return;
    }

    const task = new Task(
        Date.now(),
        name,
        employeeId
    );

    tasks.push(task);

    saveData();
    displayTasks();

    taskForm.reset();
});

// Display Tasks
function displayTasks() {

    taskList.innerHTML = "";

    const filter = document.getElementById("taskFilter").value;

    const filteredTasks = tasks.filter(task =>
        filter === "All" || task.status === filter
    );

    filteredTasks.forEach(task => {

        const employee = employees.find(
            emp => emp.id === task.employeeId
        );

        const card = document.createElement("div");

        card.className = "task-card";

        card.innerHTML = `
            <h3>${task.name}</h3>
            <p>Employee: ${employee?.name || "Unknown"}</p>
            <p>Status: ${task.status}</p>

            <button class="complete-btn"
                data-action="complete"
                data-id="${task.id}">
                Complete
            </button>

            <button class="delete-btn"
                data-action="delete"
                data-id="${task.id}">
                Delete
            </button>
        `;

        taskList.appendChild(card);
    });
}

// Event Delegation - Employee Delete
employeeList.addEventListener("click", function(e) {

    if (e.target.classList.contains("delete-btn")) {

        const id = Number(e.target.dataset.id);

        employees = employees.filter(emp => emp.id !== id);

        // Remove tasks belonging to deleted employee
        tasks = tasks.filter(task => task.employeeId !== id);

        saveData();
        displayEmployees();
        displayTasks();
    }
});

// Event Delegation - Task Actions
taskList.addEventListener("click", function(e) {

    const id = Number(e.target.dataset.id);
    const action = e.target.dataset.action;

    if (!action) return;

    const task = tasks.find(task => task.id === id);

    if (!task) return;

    if (action === "complete") {
        task.completeTask();
    }

    if (action === "delete") {
        tasks = tasks.filter(task => task.id !== id);
    }

    saveData();
    displayTasks();
});

// Search Employees with Closure
function debounce(callback, delay) {

    let timer;

    return function(...args) {

        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

// Search Function
const searchEmployee = document.getElementById("searchEmployee");

searchEmployee.addEventListener("input", debounce(function() {

    const value = searchEmployee.value.toLowerCase();

    const result = employees.filter(emp =>
        emp.name.toLowerCase().includes(value)
    );

    displayEmployees(result);

}, 300));

// Sort Employees
document.getElementById("sortEmployees")
.addEventListener("click", function() {

    employees.sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    displayEmployees();
});

// Filter Tasks
document.getElementById("taskFilter")
.addEventListener("change", displayTasks);

// API Integration using Async/Await
async function loadAPIEmployees() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        const apiEmployees = data.slice(0, 5).map(user =>
            new Employee(
                Date.now() + user.id,
                user.name,
                user.email,
                "Developer"
            )
        );

        employees.push(...apiEmployees);

        saveData();
        displayEmployees();

    } catch (error) {

        console.error("Error:", error);
        alert("Unable to load employees");

    }
}

document.getElementById("loadApiEmployees")
.addEventListener("click", loadAPIEmployees);

// Initial Display
displayEmployees();
displayTasks();
