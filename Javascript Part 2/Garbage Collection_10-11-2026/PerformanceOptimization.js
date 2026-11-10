
const employeeList =
    document.getElementById("employeeList");

const resultCount =
    document.getElementById("resultCount");

function displayEmployees(data) {

    console.time("DOM Rendering");

    const fragment = document.createDocumentFragment();

    data.forEach(employee => {

        const div = document.createElement("div");

        div.className = "employee";

        div.textContent = `${employee.id} - ${employee.name} - ${employee.department}`;

        fragment.appendChild(div);

    });

    // Update DOM in one operation
    
    employeeList.replaceChildren(fragment);

    resultCount.textContent = `Total Employees: ${data.length}`;

    console.timeEnd("DOM Rendering");
}

displayEmployees(employees);
