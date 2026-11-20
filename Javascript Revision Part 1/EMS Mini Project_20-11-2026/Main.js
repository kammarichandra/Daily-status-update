
import { getEmployees } from "./Storage.js";

import { addEmployee, updateEmployee, deleteEmployee} from "./Employee.js";

import { validateEmployee } from "./Validation.js";
import { updateDashboard } from "./Dashboard.js";
import { fetchEmployees } from "./Api.js";

const form = document.getElementById("employeeForm");
const table = document.getElementById("employeeTable");

const searchInput = document.getElementById("searchInput");
const departmentFilter = document.getElementById("departmentFilter");
const statusFilter = document.getElementById("statusFilter");
const sortBy = document.getElementById("sortBy");

const message = document.getElementById("message");

// Display employees

function displayEmployees() {

    let employees = getEmployees();

    const keyword = searchInput.value.toLowerCase();
    const department = departmentFilter.value;
    const status = statusFilter.value;

    // Search
    
    employees = employees.filter(emp =>
        emp.name.toLowerCase().includes(keyword) ||
        emp.empId.toLowerCase().includes(keyword)
    );

    // Department filter
    if (department) {
        employees = employees.filter(
            emp => emp.department === department
        );
    }

    // Status filter
    if (status) {
        employees = employees.filter(
            emp => emp.status === status
        );
    }

    // Sorting
    if (sortBy.value) {
        const key = sortBy.value;

        employees.sort((a, b) => {
            if (key === "salary") {
                return Number(a.salary) - Number(b.salary);
            }

            return String(a[key]).localeCompare(String(b[key]));
        });
    }

    table.innerHTML = "";

    employees.forEach(emp => {

        const row = document.createElement("tr");

        const values = [
            emp.empId,
            emp.name,
            emp.email,
            emp.department,
            emp.designation,
            `₹${emp.salary}`,
            emp.status
        ];

        values.forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        const actionCell = document.createElement("td");

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.dataset.action = "edit";
        editBtn.dataset.id = emp.empId;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.dataset.action = "delete";
        deleteBtn.dataset.id = emp.empId;

        actionCell.append(editBtn, deleteBtn);
        row.appendChild(actionCell);

        table.appendChild(row);
    });

    updateDashboard();
}

// Form submission
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const id = document.getElementById("editId").value;

    const employee = {
        empId: document.getElementById("empId").value.trim(),
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        department: document.getElementById("department").value,
        designation: document.getElementById("designation").value.trim(),
        salary: Number(document.getElementById("salary").value),
        joiningDate: document.getElementById("joiningDate").value,
        status: document.getElementById("status").value
    };

    const error = validateEmployee(employee);

    if (error) {
        message.textContent = error;
        return;
    }

    try {

        if (id) {
            updateEmployee(id, employee);
            message.textContent = "Employee updated successfully!";
        } else {
            addEmployee(employee);
            message.textContent = "Employee added successfully!";
        }

        form.reset();
        document.getElementById("editId").value = "";

        displayEmployees();

    } catch (error) {
        message.textContent = error.message;
    }
});

// Edit and delete using event delegation

table.addEventListener("click", function(event) {

    const button = event.target.closest("button");

    if (!button) return;

    const id = button.dataset.id;
    const action = button.dataset.action;

    const employee = getEmployees().find(
        emp => emp.empId === id
    );

    if (action === "edit" && employee) {

        document.getElementById("editId").value = id;

        Object.keys(employee).forEach(key => {
            const input = document.getElementById(key);

            if (input) {
                input.value = employee[key];
            }
        });

        document.getElementById("submitBtn").textContent =
            "Update Employee";
    }

    if (action === "delete") {

        if (confirm("Are you sure you want to delete this employee?")) {
            deleteEmployee(id);
            message.textContent = "Employee deleted successfully!";
            displayEmployees();
        }
    }
});

// Search, filter and sort
[searchInput, departmentFilter, statusFilter, sortBy]
    .forEach(element => {
        element.addEventListener("input", displayEmployees);
        element.addEventListener("change", displayEmployees);
    });

// Reset form
document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("editId").value = "";
    document.getElementById("submitBtn").textContent = "Save Employee";
    message.textContent = "";
});

// API integration
document.getElementById("apiBtn").addEventListener("click", async () => {

    const loading = document.getElementById("loading");

    try {
        loading.textContent = "Loading employees...";

        const apiEmployees = await fetchEmployees();

        const existing = getEmployees();
        const existingIds = new Set(existing.map(emp => emp.empId));

        const newEmployees = apiEmployees.filter(
            emp => !existingIds.has(emp.empId)
        );

        const { saveEmployees } = await import("./Storage.js");

        saveEmployees([...existing, ...newEmployees]);

        loading.textContent = `${newEmployees.length} employees imported successfully!`;

        displayEmployees();

    } catch (error) {
        loading.textContent = error.message;
    }
});

// Initial loading
displayEmployees();
