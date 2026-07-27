const URL = "https://jsonplaceholder.typicode.com/users";

export const getEmployees = async () => {
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  return response.json();
};