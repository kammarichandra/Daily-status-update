
export  const EmployeeManagement = (function () {

    // Private employee array

    let employees = [];

    // Add Employee

    function addEmployee(employee) {
        employees.push(employee);
        return "Employee added successfully!";
    }

    // Get All Employees

    function getEmployees() {
        return [...employees];
    }

    // Update Employee

    function updateEmployee(id, updatedData) {
        const employee = employees.find(emp => emp.id === id);

        if (!employee) {
            return "Employee not found!";
        }

        Object.assign(employee, updatedData);

        return "Employee updated successfully!";
    }

    // Delete Employee

    function deleteEmployee(id) {

        const index = employees.findIndex(emp => emp.id === id);

        if (index === -1) {
            return "Employee not found!";
        }

        employees.splice(index, 1);

        return "Employee deleted successfully!";
    }

    // Return Public Methods

    return { addEmployee, getEmployees, updateEmployee, deleteEmployee };

})();
