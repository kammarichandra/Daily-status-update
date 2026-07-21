function Delete() {
  async function deletePost() {
    await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "DELETE",
      }
    );

    alert("Deleted Successfully");
  }

  return (
    <button onClick={deletePost}>
      Delete Post
    </button>
  );
}

export default Delete;