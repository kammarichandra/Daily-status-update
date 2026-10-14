const firstNames = [
  "Rahul", "Priya", "Arun", "Sneha", "Kiran",
  "Divya", "Vikram", "Anjali", "Ravi", "Meena",
];

const departments = [
  "IT", "HR", "Finance", "Marketing", "Operations",
];

const employees = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  name: `${firstNames[i % firstNames.length]} ${i + 1}`,
  email: `employee${i + 1}@teamsync.com`,
  department: departments[i % departments.length],
  salary: 25000 + ((i * 1379) % 75000),
  status: i % 4 === 0 ? "Inactive" : "Active",
}));

export default employees;