import React, { useEffect, useState } from 'react'

function SearchFilter() {
    const [search, setSearch] = useState('');
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

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h2>Search Filter</h2>
            <input
                type="text"
                placeholder="Search by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ marginBottom: '12px', padding: '8px', width: '250px' }}
            />

            <table border="1" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SearchFilter