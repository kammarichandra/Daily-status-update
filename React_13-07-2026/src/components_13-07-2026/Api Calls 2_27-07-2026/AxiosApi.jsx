import { useEffect, useState } from "react";
import axios from "axios";

function AxiosApi() {
    let [posts, setPosts] = useState([]);

    let url = "https://jsonplaceholder.typicode.com/posts";

    // GET
    let getPosts = async () => {
        try {
            let response = await axios.get(url);
            setPosts(response.data.slice(0, 5));
        } catch (error) {
            console.log(error);
        }
    };

    // POST
    let createPost = async () => {
        try {
            let response = await axios.post(url, {
                title: "React Axios",
                body: "Learning Axios",
                userId: 1,
            });

            console.log("POST:", response.data);
        }
         catch (error) {
            console.log(error);
        }
    };

    // PUT
    let updatePost = async () => {
        try {
            let response = await axios.put(`${url}/1`, {
                id: 1,
                title: "Updated Title",
                body: "Updated Body",
                userId: 1,
            });

            console.log("PUT:", response.data);
        } 
        catch (error) {
            console.log(error);
        }
    };

    // PATCH
    let patchPost = async () => {
        try {
            let response = await axios.patch(`${url}/1`, {
                title: "Patched Title",
            });

            console.log("PATCH:", response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // DELETE
    let deletePost = async () => {
        try {
            await axios.delete(`${url}/1`);
            console.log("DELETE Successful");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <h2>Axios Example</h2>

            <button onClick={getPosts}>GET</button>
            <button onClick={createPost}>POST</button>
            <button onClick={updatePost}>PUT</button>
            <button onClick={patchPost}>PATCH</button>
            <button onClick={deletePost}>DELETE</button>

            <hr />

            {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
        </div>
    );
}

export default AxiosApi;