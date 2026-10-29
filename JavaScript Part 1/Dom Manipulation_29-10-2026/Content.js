const heading = document.getElementById("heading");
heading.textContent = "welcome to teamsync";


// 2. Update paragraph content dynamically

const description = document.getElementById("description");

description.textContent = "Manage employee information efficiently.";


// 3. Change HTML content using innerHTML

const employeeDetails = document.getElementById("employeeDetails");

employeeDetails.innerHTML = `
    <div class="employee-card">
        <h3>Employee Information</h3>
        <p>Employee ID: EMP101</p>
        <p>Name: Chandra</p>
        <p>Department: Software Development</p>
        <p>Salary: ₹30,000</p>
    </div>
`;


// 4. Display employee details dynamically

const employee = {
    id: 101,
    name: "Chandra",
    department: "Frontend Development",
    salary: 35000
};

function displayEmployee() {
    employeeDetails.innerHTML = `
        <div class="employee-card">
            <h3>${employee.name}</h3>
            <p>Employee ID: ${employee.id}</p>
            <p>Department: ${employee.department}</p>
            <p>Salary: ₹${employee.salary}</p>
        </div>
    `;
}

displayEmployee();


// 5. Update page content when button is clicked

const updateBtn = document.getElementById("updateBtn");

updateBtn.addEventListener("click", function () {

    heading.textContent = "Employee Dashboard";

    description.textContent =
        "Your employee dashboard has been updated.";

});


// 6. Change content based on user input

const nameInput = document.getElementById("nameInput");

const displayBtn = document.getElementById("displayBtn");

const output = document.getElementById("output");

displayBtn.addEventListener("click", function () {

    const employeeName = nameInput.value.trim();

    if (employeeName === "") {
        output.textContent = "Please enter your name.";
    } else {
        output.textContent = `Welcome, ${employeeName}!`;
    }

});