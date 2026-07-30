import { useState } from "react";
import Model from "./Model";

function Register({ close }) {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setmessage] = useState("");

  function handlechange(e) {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handlesubmit(e) {
    e.preventDefault();

    if (!user.name || !user.email || !user.password) {
      setmessage("Please fill all fields");
      return;
    }

    setmessage("Employee created successfully!");
  }

  function handlefocus() {
    console.log("Input focused");
  }

  function handleblur() {
    console.log("Input lost focus");
  }

  return (
    <Model close={close}>
      <h2>Create Employee</h2>

      <form onSubmit={handlesubmit}>
        <label>Name :</label>
        <br />
        <br />

        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={user.name}
          onChange={handlechange}
          onFocus={handlefocus}
          onBlur={handleblur}
        />

        <br />
        <br />

        <label>Email :</label>
        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={user.email}
          onChange={handlechange}
          onFocus={handlefocus}
          onBlur={handleblur}
        />

        <br />
        <br />

        <label>Password :</label>
        <br />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={user.password}
          onChange={handlechange}
          onFocus={handlefocus}
          onBlur={handleblur}
        />

        <br />
        <br />

        <button type="submit">
          Create
        </button>

        <button
          type="button"
          onClick={close}
        >
          Cancel
        </button>
      </form>

      <h3>{message}</h3>
    </Model>
  );
}

export default Register;