
/* =====================================
   TASK 1: DISPLAY INPUT TEXT IN REAL TIME
===================================== */

const textInput = document.getElementById("textInput");
const liveOutput = document.getElementById("liveOutput");

textInput.addEventListener("input", function () {

    liveOutput.textContent = textInput.value;

});


/* =====================================
   TASK 2: LIVE CHARACTER COUNTER
===================================== */

const messageInput = document.getElementById("messageInput");
const charCount = document.getElementById("charCount");

messageInput.addEventListener("input", function () {

    const characters = messageInput.value.length;

    charCount.textContent = characters;

});


/* =====================================
   TASK 3: DISPLAY SELECTED DROPDOWN VALUE
===================================== */

const departmentSelect   =   document.getElementById("departmentSelect");
const selectedDepartment =   document.getElementById("selectedDepartment");

departmentSelect.addEventListener("change", function () {

    const department = departmentSelect.value;

    if (department === "") {

        selectedDepartment.textContent ="No department selected.";

    } else {

        selectedDepartment.textContent = `Selected Department: ${department}`;

    }

});


/* =====================================
   TASK 4: UPDATE HEADING BASED ON INPUT
===================================== */

const headingInput = document.getElementById("headingInput");

const dynamicHeading = document.getElementById("dynamicHeading");

headingInput.addEventListener("input", function () {

    const headingText = headingInput.value.trim();

    if (headingText === "") {

        dynamicHeading.textContent =
            "Welcome to Employee Portal";

    } else {

        dynamicHeading.textContent = headingText;

    }

});


/* =====================================
   TASK 5: EMPLOYEE DATA
===================================== */

const employees = [
    {
        id: 101,
        name: "Chandra",
        department: "Frontend Development",
        salary: 35000
    },
    {
        id: 102,
        name: "Rahul",
        department: "Backend Development",
        salary: 40000
    },
    {
        id: 103,
        name: "Priya",
        department: "Software Testing",
        salary: 30000
    },
    {
        id: 104,
        name: "Kiran",
        department: "Frontend Development",
        salary: 38000
    },
    {
        id: 105,
        name: "Sneha",
        department: "Human Resources",
        salary: 32000
    }
];


/* =====================================
   TASK 6: DISPLAY EMPLOYEE RECORDS
===================================== */

const employeeList = document.getElementById("employeeList");

const searchInput = document.getElementById("searchInput");

const noResults = document.getElementById("noResults");


// Function to display employees

function displayEmployees(employeeData) {

    // Clear existing employee cards
    employeeList.innerHTML = "";

    // Display message when no employees are found
    noResults.hidden = employeeData.length !== 0;

    employeeData.forEach(function (employee) {

        // Create employee card
        const card = document.createElement("div");

        card.classList.add("employee-card");

        // Create employee heading
        const heading = document.createElement("h3");

        heading.textContent = employee.name;

        // Create employee ID
        const idParagraph = document.createElement("p");

        idParagraph.textContent = `Employee ID: ${employee.id}`;

        // Create department
        const departmentParagraph = document.createElement("p");

        departmentParagraph.textContent =
            `Department: ${employee.department}`;

        // Create salary
        const salaryParagraph = document.createElement("p");

        salaryParagraph.textContent =
            `Salary: ₹${employee.salary}`;

        // Add elements to card
        card.append(
            heading,
            idParagraph,
            departmentParagraph,
            salaryParagraph
        );

        // Add card to employee list
        employeeList.appendChild(card);

    });

}


// Display all employees initially

displayEmployees(employees);
