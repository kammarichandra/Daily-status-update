import React from 'react'

function UserCard({ user }) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                padding: "15px",
                margin: "10px",
                borderRadius: "8px",
            }}
        >
            <h3>{user.name}</h3>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
            <p>Company: {user.company.name}</p>
        </div>
    )
}

export default UserCard