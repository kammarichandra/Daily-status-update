const employee = {
    name: "Ravi",
    department: "IT"
};

export default employee;

export const employee1 = {
    id: 101,
    name: "Ravi",
    salary: 30000
};

export const calculateBonus = salary => salary * 0.10;

export function getEmployeeDetails(employee1) {
    return `ID: ${employee1.id}, Name: ${employee1.name}, Salary: ₹${employee1.salary}`;
}