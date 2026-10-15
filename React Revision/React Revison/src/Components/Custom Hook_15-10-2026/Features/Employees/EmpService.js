const API_URL =
  "https://jsonplaceholder.typicode.com/users";

export async function getEmployees(signal) {
  const response = await fetch(API_URL, { signal });

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  const users = await response.json();

  return users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.company?.bs || "Employee",
    status: "Active",
  }));
}