
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// GET - Fetch users
export async function getUsers() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}

// POST - Add user
export async function addUser(user) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Failed to add user");
  }

  return response.json();
}

// PUT - Update user
export async function updateUser(id, user) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Failed to update user");
  }

  return response.json();
}

// DELETE - Delete user
export async function deleteUser(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete user");
  }

  return true;
}

// Axios - Fetch users
export async function getUsersWithAxios() {
  const response = await axios.get(API_URL);
  return response.data;
}
