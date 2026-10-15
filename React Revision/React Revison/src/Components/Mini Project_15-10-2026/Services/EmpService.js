const employees = [
  { id: 1, name: "Ravi", email: "ravi@gmail.com", department: "IT" },
  { id: 2, name: "Priya", email: "priya@gmail.com", department: "HR" },
];

export function getEmployees() {
  return Promise.resolve(employees);
}