import axios from 'axios';
import React, { useState } from 'react'

function ErrorHandling() {

    let [user, setuser] = useState(null);
    let [error, seterror] = useState("");

    let getuser = async () => {
        try {

            seterror("");

            let response = await axios.get("https://jsonplaceholder.typicode.com/users/9999");

            setuser(response.data);

        } catch (error) {

            seterror("filled to fetch user")
        }
    }
    return (
        <div>
            <h2>Error Handling</h2>

            <button onClick={getuser}> Get User </button>

            {error && (
                <p style={{ color: "red" }}> {error} </p>
            )}

            {user && ( <p>{user.name}</p> )}
            
        </div>
    )
}

export default ErrorHandling