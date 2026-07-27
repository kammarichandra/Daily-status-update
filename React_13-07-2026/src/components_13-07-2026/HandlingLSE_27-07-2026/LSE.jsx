import React, { useEffect, useState } from "react";

function LSE() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setSuccess("Data fetched successfully");
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  return (
    <div>
      <h2 style={{ color: "green" }}>{success}</h2>
      <p>Total Users: {users.length}</p>
    </div>
  );
}

export default LSE;