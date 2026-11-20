
export function validateEmployee(employee) {

    if (!employee.empId || !employee.name ||
        !employee.email || !employee.phone ||
        !employee.department || !employee.designation) {
        return "Please fill all required fields";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(employee.email)) {
        return "Enter a valid email address";
    }

    if (!/^\d{10}$/.test(employee.phone)) {
        return "Phone number must contain 10 digits";
    }

    if (employee.salary <= 0) {
        return "Salary must be greater than zero";
    }

    if (!employee.joiningDate) {
        return "Please select joining date";
    }

    return null;
}