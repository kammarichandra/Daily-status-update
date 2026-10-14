const firstNames = [
  "Rahul", "Priya", "Arun", "Sneha", "Kiran",
  "Divya", "Vikram", "Anjali", "Ravi", "Meena",
];

const departments = [
  "IT", "HR", "Finance", "Marketing", "Operations",
];

const employees = Array.from({ length: 10000 }, (_, index) => ({
  id: index + 1,
  name: `${firstNames[index % firstNames.length]} ${index + 1}`,
  email: `employee${index + 1}@teamsync.com`,
  department: departments[index % departments.length],
  salary: 25000 + ((index * 1379) % 75000),
  status: index % 4 === 0 ? "Inactive" : "Active",
}));

export default employees;