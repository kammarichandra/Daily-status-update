import UseFetch from './UseFetch';

function UserList() {
    const { data, loading, error } = UseFetch();

    if (loading) {
        return <h3>Loading users...</h3>;
    }

    if (error) {
        return <h3>Error: {error}</h3>;
    }

    return (
        <div>
            <h2>User List</h2>

            {data.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}

export default UserList;