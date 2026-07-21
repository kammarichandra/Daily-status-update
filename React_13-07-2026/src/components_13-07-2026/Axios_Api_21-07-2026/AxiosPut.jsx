import axios from "axios";

function AxiosPut() {
  async function updatePost() {
    let response = await axios.put(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        title: "Updated Title",
        body: "Updated Body",
      }
    );

    console.log(response.data);
  }

  return (
    <button onClick={updatePost}>
      Update
    </button>
  );
}

export default AxiosPut;