import React, { useEffect, useState } from 'react'

function Api() {

    let [users, setusers] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setusers(data))

    }, []);

    return (

        <div>
            <h2>Users</h2>

            {users.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
            
        </div>

    )
}

export default Api