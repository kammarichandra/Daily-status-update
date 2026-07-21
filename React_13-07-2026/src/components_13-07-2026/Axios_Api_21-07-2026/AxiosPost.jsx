import axios from "axios";
import { useState } from "react";

function AxiosPost() {
  let [title, setTitle] = useState("");

  async function createPost() {
    let response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title,
      }
    );

    console.log(response.data);
  }

  return (
    <div>
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />

      <button onClick={createPost}> Submit </button>
    </div>
  );
}

export default AxiosPost;