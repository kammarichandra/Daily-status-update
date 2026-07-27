import React, { useEffect, useState } from "react";

function UseEffect2() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      let data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>

      {posts.slice(0, 5).map((post) => (
        <h4 key={post.id}>{post.title}</h4>
      ))}
    </div>
  );
}

export default UseEffect2;