import React, { useEffect, useState } from "react";

import {
  getPosts,
  createPost,
  updatePost,
  patchPost,
  deletePost,
} from "./FetchService";

const Users = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);

      const data = await getPosts();

      setPosts(data.slice(0, 5));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePost = async () => {
    const result = await createPost({
      title: "React",
      body: "Learning API",
      userId: 1,
    });

    console.log(result);
  };

  const handlePut = async () => {
    const result = await updatePost(1, {
      title: "Updated",
      body: "PUT Request",
      userId: 1,
    });

    console.log(result);
  };

  const handlePatch = async () => {
    const result = await patchPost(1, {
      title: "Patched Title",
    });

    console.log(result);
  };

  const handleDelete = async () => {
    await deletePost(1);
    alert("Deleted Successfully");
  };

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>Posts</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))}

      <button onClick={handlePost}>POST</button>

      <button onClick={handlePut}>PUT</button>

      <button onClick={handlePatch}>PATCH</button>

      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
};

export default Users;