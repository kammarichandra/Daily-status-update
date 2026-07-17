const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchEmp = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};