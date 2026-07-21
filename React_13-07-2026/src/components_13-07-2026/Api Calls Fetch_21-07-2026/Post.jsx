import { useState } from "react";

function Post() {
  let [title, setTitle] = useState("");

  async function createPost() {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
        }),
      }
    );

    let data = await response.json();

    console.log(data);
  }

  return (
    <div>
      <h2>Fetch POST</h2>

      <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={createPost}>Submit</button>
    </div>
  );
}

export default Post;