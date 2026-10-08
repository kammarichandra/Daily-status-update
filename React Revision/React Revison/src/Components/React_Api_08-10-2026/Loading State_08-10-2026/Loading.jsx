import React, { useEffect, useState } from 'react'

function Loading() {
    const [loading, setLoading] = useState(false);
    const [error, seterror] = useState("")
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {

            setLoading(true);
            seterror("");

            try {

                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                const data = await response.json();

                setUsers(data);
                
            } catch (error) {
                seterror(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Loading state</h1>
            {loading && <p>Loading users...</p>}
            {error && <p>{error}</p>}

            {!loading && users.length > 0 && (
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
            )}

            {!loading && users.length === 0 && <p>No users found.</p>}
        </div>
    );
}

export default Loading