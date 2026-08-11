let Api = "https://jsonplaceholder.typicode.com/users";

export async function getEmployees() {

  let response = await fetch(Api);

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  let data = await response.json();

  // Convert API users into employee data
  return data.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    department: getDepartment(user.id),
    company: user.company.name,
  }));
}

function getDepartment(id) {
    
  let departments = [
    "IT",
    "HR",
    "Finance",
    "Marketing",
    "Sales",
  ];

  return departments[(id - 1) % departments.length];
}