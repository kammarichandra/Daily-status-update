import { useEffect, useState } from "react";

function Comments() {
  let [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data.slice(0, 15)));
  }, []);

  return (
    <div>
      <h2>Comments</h2>

      {comments.map((comment) => (
        <div key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Comments;