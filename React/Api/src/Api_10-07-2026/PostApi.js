const API_URL = "https://jsonplaceholder.typicode.com/posts";

// get
export const getPosts = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
  }

  return response.json();
};


//post

export const createPost = async (post) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  if (!response.ok) {
    throw new Error(`Failed to create post: ${response.status} ${response.statusText}`);
  }

  return response.json();
};


//put

export const updatePost = async (id, post) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  if (!response.ok) {
    throw new Error(`Failed to update post: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

//patch

export const patchPost = async (id, post) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  if (!response.ok) {
    throw new Error(`Failed to patch post: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

//delete

export const deletePost = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Failed to delete post: ${response.status} ${response.statusText}`);
  }

  return true;
};