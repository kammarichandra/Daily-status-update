import React, { useState } from "react";

function UserForm() {
  const [user, setUser] = useState({
    name: "",
    age: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>User Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={user.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="age"
        placeholder="Enter Age"
        value={user.age}
        onChange={handleChange}
      />

      <h3>Name: {user.name}</h3>
      <h3>Age: {user.age}</h3>
    </div>
  );
}

export default UserForm;