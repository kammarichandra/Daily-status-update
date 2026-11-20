
import { getEmployees } from "./Storage.js";

export function updateDashboard() {

    const employees = getEmployees();

    const active = employees.filter(
        emp => emp.status === "Active"
    ).length;

    const inactive = employees.filter(
        emp => emp.status === "Inactive"
    ).length;

    const departments = new Set(
        employees.map(emp => emp.department)
    );

    document.getElementById("totalCount").textContent = employees.length;

    document.getElementById("activeCount").textContent = active;

    document.getElementById("inactiveCount").textContent = inactive;

    document.getElementById("departmentCount").textContent = departments.size;
}
