import React from 'react'
import { useState, useEffect } from 'react'


function Get() {

    let [users, setusers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setusers(data));
    }, []);
    return (
        <div>
            <h2>Fetch GET</h2>

            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}

export default Get;