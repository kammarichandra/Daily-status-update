import React, { useEffect, useState } from 'react'

function Dynamic() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>Dynamic Rendering</h1>
            {users.map((user) => (
                <div className="user-card" key={user.id}>
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                </div>
            ))}
        </div>
    );
}

export default Dynamic