import axios from "axios";

function AxiosDelete() {
  async function deletePost() {
    await axios.delete(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    alert("Deleted Successfully");
  }

  return (
    <button onClick={deletePost}>
      Delete
    </button>
  );
}

export default AxiosDelete;