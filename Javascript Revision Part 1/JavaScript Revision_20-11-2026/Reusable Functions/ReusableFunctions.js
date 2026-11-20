
// Sample employee records
let employees = [
    { id: 1, name: "Chandra", department: "IT", salary: 30000 },
    { id: 2, name: "Rahul", department: "HR", salary: 25000 },
    { id: 3, name: "Priya", department: "IT", salary: 40000 },
    { id: 4, name: "Arjun", department: "Sales", salary: 35000 }
];


// 1. Form Validation
function validateForm(name, email, password) {

    if (name === "" || email === "" || password === "") {

        return "All fields are required";
    }

    if (!email.includes("@")) {

        return "Invalid email address";

    }

    if (password.length < 6) {

        return "Password must contain at least 6 characters";

    }

    return "Form submitted successfully";
}

console.log("1. Validation:", validateForm( "Chandra", "chandra@gmail.com", "123456"));


// 2. Searching Records

function searchRecords(records, searchName) {

    return records.filter(employee =>
        employee.name.toLowerCase().includes(searchName.toLowerCase())
    );
}

console.log("2. Search:", searchRecords(employees, "chandra"));


// 3. Filtering Records

function filterRecords(records, department) {
    return records.filter(employee =>
        employee.department === department
    );
}

console.log("3. Filter:", filterRecords(employees, "IT"));


// 4. Sorting Records
function sortRecords(records) {
    return [...records].sort((a, b) => a.salary - b.salary);
}

console.log("4. Sort:", sortRecords(employees));


// 5. Calculating Totals
function calculateTotal(records) {
    return records.reduce((total, employee) =>
        total + employee.salary, 0
    );
}

console.log("5. Total Salary:", calculateTotal(employees));


// 6. Displaying Error Messages

function displayError(message) {
    console.error("Error:", message);
}

displayError("Something went wrong");


// 7. Fetching API Data

async function fetchAPIData() {
    try {
        let response = await fetch( "https://jsonplaceholder.typicode.com/users" );

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        let data = await response.json();

        console.log("7. API Data:", data);

    } catch (error) {
        displayError(error.message);
    }
}

fetchAPIData();
