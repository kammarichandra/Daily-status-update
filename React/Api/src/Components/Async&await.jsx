import { useState } from "react";
import { fetchPostsAsync } from "../Api_10-07-2026/Async&Await";


function List() {

  let [posts, setPosts] = useState([]);

  let [loading, setLoading] = useState(false);

  let [success, setSuccess] = useState("");

  let [error, setError] = useState("");



  let getPosts = async () => {

    setLoading(true);
    setSuccess("");
    setError("");


    try {

      let data = await fetchPostsAsync();

      setPosts(data.slice(0,10));

      setSuccess("Posts loaded successfully");


    } catch(error) {

      setError(error.message);


    } finally {

      setLoading(false);

    }

  };



  return (

    <div>

      <h1>Async/Await API Call</h1>


      <button onClick={getPosts}>
        Fetch Posts
      </button>



      {
        loading && 
        <h3>Loading...</h3>
      }


      {
        success &&
        <h3 style={{color:"green"}}>
          {success}
        </h3>
      }



      {
        error &&
        <h3 style={{color:"red"}}>
          {error}
        </h3>
      }



      {
        posts.map((post)=>(

          <div key={post.id}>

            <h3>
              {post.title}
            </h3>

            <p>
              {post.body}
            </p>

          </div>

        ))
      }


    </div>

  );

}


export default List;