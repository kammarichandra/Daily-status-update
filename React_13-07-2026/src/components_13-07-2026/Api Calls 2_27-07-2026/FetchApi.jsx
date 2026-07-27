import React, { useEffect, useState } from "react";

function FetchApi() {
  const [posts, setPosts] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  // GET
      let getPosts = async () => {
        try {
          let response = await fetch(url);

          if (!response.ok) {
            throw new Error("Failed to fetch posts");
          }

          let data = await response.json();
          setPosts(data.slice(0, 5));
        } 
        catch (error) {
          console.log(error);
        }
      };

  // POST
  const createPost = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "React Fetch",
          body: "Learning Fetch API",
          userId: 1,
        }),
      });

      const data = await response.json();
      console.log("POST Success:", data);
    } catch (error) {
      console.log(error);
    }
  };

  // PUT
  const updatePost = async () => {
    try {
      const response = await fetch(`${url}/1`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 1,
          title: "Updated Title",
          body: "Updated Body",
          userId: 1,
        }),
      });

      const data = await response.json();
      console.log("PUT Success:", data);
    } catch (error) {
      console.log(error);
    }
  };

  // PATCH
  const patchPost = async () => {
    try {
      const response = await fetch(`${url}/1`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Patched Title",
        }),
      });

      const data = await response.json();
      console.log("PATCH Success:", data);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE
  const deletePost = async () => {
    try {
      const response = await fetch(`${url}/1`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("DELETE Success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Fetch API Example</h2>

      <button onClick={getPosts}>GET</button>{" "}
      <button onClick={createPost}>POST</button>{" "}
      <button onClick={updatePost}>PUT</button>{" "}
      <button onClick={patchPost}>PATCH</button>{" "}
      <button onClick={deletePost}>DELETE</button>

      <hr />

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchApi;