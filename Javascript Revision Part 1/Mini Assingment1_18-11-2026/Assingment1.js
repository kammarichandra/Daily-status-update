// Get HTML Elements

const employeeForm =
    document.getElementById("employeeForm");

const employeeTable =
    document.getElementById("employeeTable");

const searchInput =
    document.getElementById("searchInput");

const filterDepartment =
    document.getElementById("filterDepartment");

const sortSelect =
    document.getElementById("sortSelect");

// Load employees from Local Storage

let employees =
    JSON.parse(localStorage.getItem("employees")) || [];

let editId = null;


// Save Employee Data

function saveData() {

    localStorage.setItem(
        "employees",
        JSON.stringify(employees)
    );

}


// Calculate Salary

function calculateSalary(basicSalary) {

    const hra = basicSalary * 0.20;

    const allowance = basicSalary * 0.10;

    const deduction = basicSalary * 0.05;

    const netSalary =
        basicSalary + hra + allowance - deduction;

    return {
        hra,
        allowance,
        deduction,
        netSalary
    };

}


// Add or Update Employee

employeeForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const id = document.getElementById("empId").value.trim();

    const name = document.getElementById("empName").value.trim();

    const email = document.getElementById("empEmail").value.trim();

    const department =
        document.getElementById("department").value;

    const designation =
        document.getElementById("designation").value.trim();

    const salary = Number(
        document.getElementById("salary").value
    );

    if (!id || !name || !email || !department ||
        !designation || !Number.isFinite(salary) || salary <= 0) {

        alert("Please enter valid employee details.");
        return;

    }

    // Prevent duplicate employee IDs

    const duplicate = employees.some(emp =>
        emp.id.toLowerCase() === id.toLowerCase() &&
        emp.id !== editId
    );

    if (duplicate) {

        alert("Employee ID already exists!");
        return;

    }

    const employee = {
        id,
        name,
        email,
        department,
        designation,
        salary
    };

    if (editId !== null) {

        employees = employees.map(emp =>
            emp.id === editId ? employee : emp
        );

    } else {

        employees.push(employee);

    }

    saveData();

    resetForm();

    displayEmployees();

});


// Reset Form

function resetForm() {

    employeeForm.reset();

    editId = null;

    document.getElementById("empId").disabled = false;

    document.getElementById("formTitle").textContent =
        "Add Employee";

    document.getElementById("saveBtn").textContent =
        "Add Employee";

}


// Display Employees

function displayEmployees() {

    employeeTable.innerHTML = "";

    const searchText =
        searchInput.value.toLowerCase().trim();

    const department =
        filterDepartment.value;

    let filteredEmployees = employees.filter(emp => {

        const matchesSearch =
            emp.name.toLowerCase().includes(searchText) ||
            emp.id.toLowerCase().includes(searchText);

        const matchesDepartment =
            department === "all" ||
            emp.department === department;

        return matchesSearch && matchesDepartment;

    });


    // Sorting

    const sortValue = sortSelect.value;

    if (sortValue === "name") {

        filteredEmployees.sort((a, b) =>
            a.name.localeCompare(b.name)
        );

    } else if (sortValue === "salaryHigh") {

        filteredEmployees.sort((a, b) =>
            b.salary - a.salary
        );

    } else if (sortValue === "salaryLow") {

        filteredEmployees.sort((a, b) =>
            a.salary - b.salary
        );

    }


    // Create Table Rows

    filteredEmployees.forEach(emp => {

        const salary = calculateSalary(emp.salary);

        const row = document.createElement("tr");

        const values = [
            emp.id,
            emp.name,
            emp.email,
            emp.department,
            emp.designation,
            formatCurrency(emp.salary),
            formatCurrency(salary.netSalary)
        ];

        values.forEach(value => {

            const cell = document.createElement("td");

            cell.textContent = value;

            row.appendChild(cell);

        });


        // Edit Button

        const actionCell = document.createElement("td");

        const editButton = document.createElement("button");

        editButton.textContent = "Edit";

        editButton.className = "edit-btn";

        editButton.addEventListener("click", () => {
            editEmployee(emp.id);
        });


        // Delete Button

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.className = "delete-btn";

        deleteButton.addEventListener("click", () => {
            deleteEmployee(emp.id);
        });

        actionCell.append(editButton, deleteButton);

        row.appendChild(actionCell);

        employeeTable.appendChild(row);

    });


    document.getElementById("emptyMessage").style.display =
        filteredEmployees.length === 0 ? "block" : "none";


    updateSummary();

    groupByDepartment();

}


// Edit Employee

function editEmployee(id) {

    const emp = employees.find(emp => emp.id === id);

    if (!emp) return;

    document.getElementById("empId").value = emp.id;

    document.getElementById("empName").value = emp.name;

    document.getElementById("empEmail").value = emp.email;

    document.getElementById("department").value =
        emp.department;

    document.getElementById("designation").value =
        emp.designation;

    document.getElementById("salary").value = emp.salary;

    editId = id;

    document.getElementById("empId").disabled = true;

    document.getElementById("formTitle").textContent =
        "Edit Employee";

    document.getElementById("saveBtn").textContent =
        "Update Employee";

    window.scrollTo({ top: 0, behavior: "smooth" });

}


// Delete Employee

function deleteEmployee(id) {

    if (confirm("Are you sure you want to delete this employee?")) {

        employees = employees.filter(emp => emp.id !== id);

        if (editId === id) {
            resetForm();
        }

        saveData();

        displayEmployees();

    }

}


// Update Summary

function updateSummary() {

    const total = employees.length;

    const totalPayroll = employees.reduce(
        (sum, emp) =>
            sum + calculateSalary(emp.salary).netSalary,
        0
    );

    const average = total > 0
        ? totalPayroll / total
        : 0;

    document.getElementById("totalEmployees").textContent =
        total;

    document.getElementById("totalPayroll").textContent =
        formatCurrency(totalPayroll);

    document.getElementById("averageSalary").textContent =
        formatCurrency(average);

}


// Department-wise Grouping

function groupByDepartment() {

    const groups = employees.reduce((result, emp) => {

        if (!result[emp.department]) {
            result[emp.department] = [];
        }

        result[emp.department].push(emp);

        return result;

    }, {});

    const container =
        document.getElementById("departmentGroups");

    container.innerHTML = "";

    Object.entries(groups).forEach(([department, members]) => {

        const div = document.createElement("div");

        div.className = "department";

        const heading = document.createElement("h3");

        heading.textContent =
            department + " (" + members.length + " Employees)";

        const names = document.createElement("p");

        names.textContent = members
            .map(emp => emp.name)
            .join(", ");

        div.append(heading, names);

        container.appendChild(div);

    });

    if (employees.length === 0) {

        container.textContent = "No department data available.";

    }

}


// Format Currency

function formatCurrency(amount) {

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2
    }).format(amount);

}


// Search Event

searchInput.addEventListener("input", displayEmployees);


// Filter Event

filterDepartment.addEventListener("change", displayEmployees);


// Sort Event

sortSelect.addEventListener("change", displayEmployees);


// Initial Display

displayEmployees();
