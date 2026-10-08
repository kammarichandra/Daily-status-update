import React, { useEffect, useState } from 'react'

function Async_await() {
    let [users, setusers] = useState([]);

    useEffect(() => {
        let fetchusers = async () => {
            try {
                let response = await fetch("https://jsonplaceholder.typicode.com/users")

                let data = await response.json();

                setusers(data);

            } catch (error) {
                console.log(error)
            }
        };
        fetchusers();
    }, []);

    return (
        <div>
            <h1>Async_await</h1>
            
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

export default Async_await