import axios from 'axios';
import React, { useState } from 'react'

function QueryParams() {

    let [posts, setposts] = useState([]);

    let getposts = async () => {

        let response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
                params: {
                    userId: 2,
                    _limit: 5,
                }
            }
        )
        setposts(response.data);
    }
    return (
        <div>
            <h2>Query Parameters</h2>

            <button onClick={getposts}> Get Posts </button>

            {posts.map((post) => (
                <div key={post.id}>
                    <h4>{post.title}</h4>
                </div>
            ))}
        </div>
    )
}

export default QueryParams