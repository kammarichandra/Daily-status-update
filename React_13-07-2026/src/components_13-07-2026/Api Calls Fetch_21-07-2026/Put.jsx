function Put() {
  async function updatePost() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 1,
          title: "Updated Title",
          body: "Updated Body",
        }),
      }
    );

    const data = await response.json();

    console.log(data);
  }

  return (
    <button onClick={updatePost}>
      Update Post
    </button>
  );
}

export default Put;