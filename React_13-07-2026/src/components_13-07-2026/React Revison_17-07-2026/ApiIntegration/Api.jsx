import { useState } from "react";

function Api() {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");

  let API = "https://jsonplaceholder.typicode.com/users";


  // GET
  async function getUsers() {
    setLoading(true);
    setError("");

    try {
      let response = await fetch(API);

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      let result = await response.json();

      setData(result);
    } 
    catch (err) {

      setError(err.message);
    } 
    finally {
      setLoading(false);
    }
  }


  // POST
  async function addUser() {
    setLoading(true);
    setError("");

    try {
      let response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Rahul",
          email: "rahul@gmail.com",
        }),
      });

      let result = await response.json();
      alert("User Added");
      console.log(result);
    } 
    catch (err) {
      setError(err.message);
    } 
    finally {
      setLoading(false);
    }
  }

  // PUT
  async function updateUser() {
    setLoading(true);
    setError("");

    try {
      let response = await fetch(`${API}/1`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 1,
          name: "Anjali",
          email: "anjali@gmail.com",
        }),
      });

      let result = await response.json();
      alert("User Updated");
      console.log(result);
    } 
    catch (err) {
      setError(err.message);
    } 
    finally {
      setLoading(false);
    }
  }

  // PATCH
  async function patchUser() {
    setLoading(true);
    setError("");

    try {
      let response = await fetch(`${API}/1`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Vijay",
        }),
      });

      let result = await response.json();
      alert("User Name Updated");
      console.log(result);
    } 
    
    catch (err) {

      setError(err.message);

    } 
    finally {

      setLoading(false);

    }
  }

  // DELETE

  async function deleteUser() {
    setLoading(true);
    setError("");

    try {
      let response = await fetch(`${API}/1`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("User Deleted");
      }
    } 
    catch (err) {
      setError(err.message);
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>React API Methods Example</h1>

      <button onClick={getUsers}>GET Users</button>{" "}
      <button onClick={addUser}>POST User</button>{" "}
      <button onClick={updateUser}>PUT User</button>{" "}
      <button onClick={patchUser}>PATCH User</button>{" "}
      <button onClick={deleteUser}>DELETE User</button>

      <hr />

      {loading && <h3>Loading...</h3>}

      {error && <h3 style={{ color: "red" }}>{error}</h3>}

      {data.map((user) => (
        
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <hr />
        </div>

      ))}
    </div>
  );
}

export default Api;