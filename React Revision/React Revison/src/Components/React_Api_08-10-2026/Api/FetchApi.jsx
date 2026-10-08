import React, { useEffect, useState } from 'react'

function FetchApi() {
    let [users, setusers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                setusers(data)
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);


    return (
        <div>
            <h1>Fetch Api using then() & catch()</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FetchApi