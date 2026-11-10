
let age = 25;
let name = "Chandra";

// Object
let employee = {
    id: 101,
    name: "Chandra",
    salary: 30000
};

console.log(age);
console.log(name);
console.log(employee);



let employees1 = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Chandra" },
    { id: 4, name: "Arun" },
    { id: 5, name: "Kiran" }
];

// Object references
let emp1 = employees1[0];
let emp2 = emp1;

console.log(emp1 === emp2); // true

// Remove one reference

emp1 = null;

console.log(emp2); 

// Object still accessible
// Remove remaining references

emp2 = null;

// Clear employee array

employees1 = [];

// Objects can now become eligible
// for garbage collection if no other
// references exist.

console.log(employees1);


// event deligation


let employees = [
    { id: 1, name: "Chandra", department: "IT" },
    { id: 2, name: "Rahul", department: "HR" },
    { id: 3, name: "Priya", department: "Finance" },
    { id: 4, name: "Arun", department: "Development" }
];

const employeeList = document.getElementById("employeeList");

// Display employees dynamically
function displayEmployees() {

    employeeList.innerHTML = "";

    employees.forEach(employee => {

        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${employee.name}</h3>
            <p>${employee.department}</p>
            <button data-id="${employee.id}">
                Delete
            </button>
            <hr>
        `;

        employeeList.appendChild(div);
    });
}

// Only ONE event listener on parent
employeeList.addEventListener("click", function(event) {

    // Check whether Delete button was clicked
    if (event.target.matches("button[data-id]")) {

        const employeeId = Number(event.target.dataset.id);

        // Remove selected employee
        employees = employees.filter(
            employee => employee.id !== employeeId
        );

        console.log("Deleted Employee ID:", employeeId);

        displayEmployees();
    }
});

// Initial display
displayEmployees();

// event propogation

const parent = document.getElementById("parent");
const child = document.getElementById("child");
const grandchild = document.getElementById("grandchild");

parent.addEventListener("click", function() {
    console.log("Parent clicked");
});

child.addEventListener("click", function() {
    console.log("Child clicked");
});

grandchild.addEventListener("click", function() {
    console.log("Grandchild clicked");
});
