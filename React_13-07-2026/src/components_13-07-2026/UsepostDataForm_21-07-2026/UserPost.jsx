import { useEffect, useState } from "react";


function UserPost() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, postsRes] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/users"),
          fetch("https://jsonplaceholder.typicode.com/posts"),
        ]);

        const usersData = await usersRes.json();
        const postsData = await postsRes.json();

        setUsers(usersData);
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="app">
      <h1>Users & Posts</h1>

      <div className="cards">
        {users.map((user) => {
          const userPosts = posts
            .filter((post) => post.userId === user.id)
            .slice(0, 3);

          return (
            <div className="card" key={user.id}>
              <h2>{user.name}</h2>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Company:</strong> {user.company.name}
              </p>

              <h3>Posts</h3>

              {userPosts.map((post) => (
                <div className="post" key={post.id}>
                  <h4>{post.title}</h4>
                  <p>{post.body}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserPost;