import useFetch from "../Hooks/UseFetch";

function PostList() {
  const {
    data: posts,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts</h2>

      {posts?.slice(0, 10).map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
