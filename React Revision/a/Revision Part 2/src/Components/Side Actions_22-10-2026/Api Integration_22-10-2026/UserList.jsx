import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';

function UserList() {
    let [users, setusers] = useState([])
    let [loading, setloading] = useState(true);
    let [error, seterror] = useState("");

    useEffect(() => {
        let fetchusers = async () => {
            try {
                setloading(true);
                seterror("")

                let response = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!response.ok) {
                    throw new Error("Failed to fetch users.")
                }

                let data = await response.json();

                setusers(data)
            } catch (error) {
                seterror(error.message)
            } finally {
                setloading(false)
            }
        }
        fetchusers()
    }, [])

    if (loading) {
        return <h2>Loading users...</h2>;
    }
    if (error) {
        return <h2>Error: {error}</h2>;
    }

    if (users.length === 0) {
        return <h2>No users found.</h2>;
    }
    return (
        <div style={{ padding: "20px" }}>
            <h1>User Management</h1>
            <p>Total Users: {users.length}</p>

            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    )
}

export default UserList