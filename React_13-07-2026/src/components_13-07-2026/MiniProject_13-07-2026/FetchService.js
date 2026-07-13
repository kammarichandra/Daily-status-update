const url = "https://jsonplaceholder.typicode.com/posts";

// GET
export const getPosts = async () => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

// POST
export const createPost = async (data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

// PUT
export const updatePost = async (id, data) => {
  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

// PATCH
export const patchPost = async (id, data) => {
  const response = await fetch(`${url}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

// DELETE
export const deletePost = async (id) => {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });

  return response.ok;
};