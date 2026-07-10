import { useState, useEffect } from "react";

import { getPosts, createPost, updatePost, patchPost, deletePost } from "../Api_10-07-2026/PostApi";

function Postlist() {

    let [posts, setPosts] = useState([]);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("")

    //get

    let fetchAllPosts = async () => {
        setLoading(true);
        setError("");

        try {
            let data = await getPosts();
            setPosts(data.slice(0, 10));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllPosts();
    }, []);


    // post
  let handleCreate = async () => {
    try {
      let newPost = await createPost({
        title: "Learning Fetch API",
        body: "React CRUD Example",
        userId: 1,
      });

      setPosts([newPost, ...posts]);
      alert("Post Created");
    }
     catch (err) {
      alert(err.message);
    }
  };

  //put

    let handleUpdate = async () => {
    try {
      let updated = await updatePost(1, {
        id: 1,
        title: "Updated Title",
        body: "Updated Body",
        userId: 1,
      });

      console.log(updated);
      alert("PUT Successful");
    } catch (err) {
      alert(err.message);
    }
  };

  //patch

  let handlePatch = async () => {
    try {
      let patched = await patchPost(1, {
        title: "Patched Title",
      });

      console.log(patched);
      alert("PATCH Successful");
    } catch (err) {
      alert(err.message);
    }
  };

   // delete

  let handleDelete = async () => {
    try {
      await deletePost(1);
      alert("Post Deleted");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container">
      <h1>React Fetch API CRUD</h1>

      <div className="buttons">
        <button onClick={fetchAllPosts}>GET</button>
        <button onClick={handleCreate}>POST</button>
        <button onClick={handleUpdate}>PUT</button>
        <button onClick={handlePatch}>PATCH</button>
        <button onClick={handleDelete}>DELETE</button>
      </div>

      {loading && <h2>Loading...</h2>}

      {error && <h2>{error}</h2>}

      {posts.map((post) => (
        <div className="card" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Postlist