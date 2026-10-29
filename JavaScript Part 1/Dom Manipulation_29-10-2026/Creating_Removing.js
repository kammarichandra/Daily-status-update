let studentInput = document.getElementById("studentInput");
let addStudentBtn = document.getElementById("addStudentBtn");
let studentList  = document.getElementById("studentList");

addStudentBtn.addEventListener("click",()=>{

    let studentName = studentInput.value.trim();

    if(studentInput === ""){
        alert("please enter the name");
        return
    }

    let li = document.createElement("li")

    li.textContent = studentName;

    studentList.appendChild(li);


})

/* =====================================
   TASK 2: CREATE EMPLOYEE CARDS
===================================== */

const employeeName = document.getElementById("employeeName");
const employeeDepartment = document.getElementById("employeeDepartment");
const addEmployeeBtn = document.getElementById("addEmployeeBtn");
const employeeContainer = document.getElementById("employeeContainer");

let employeeId = 1;

addEmployeeBtn.addEventListener("click", function () {

    const name = employeeName.value.trim();
    const department = employeeDepartment.value.trim();

    if (name === "" || department === "") {
        alert("Please enter employee name and department");
        return;
    }

    // Create employee card
    const employeeCard = document.createElement("div");

    employeeCard.className = "employee-card";

    // Create employee heading
    const heading = document.createElement("h3");

    heading.textContent = name;

    // Create employee ID
    const idParagraph = document.createElement("p");

    idParagraph.textContent = `Employee ID: EMP${employeeId}`;

    // Create department paragraph
    const departmentParagraph = document.createElement("p");

    departmentParagraph.textContent = `Department: ${department}`;

    // Create delete button
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.className = "delete-btn";

    // Remove employee card when clicked
    deleteBtn.addEventListener("click", function () {

        employeeCard.remove();

    });

    // Add elements using append()
    employeeCard.append(
        heading,
        idParagraph,
        departmentParagraph,
        deleteBtn
    );

    // Add employee card to container
    employeeContainer.appendChild(employeeCard);

    // Increment employee ID
    employeeId++;

    // Clear input fields
    employeeName.value = "";
    employeeDepartment.value = "";

});