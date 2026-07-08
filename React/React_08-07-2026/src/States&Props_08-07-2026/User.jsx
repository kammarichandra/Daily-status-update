import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>Counter Using State</h2>
      <h3>Count: {count}</h3>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

function User(props) {
  return (
    <div>
      <h2>User details</h2>
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Role : {props.role}</p>
    </div>
  );
}

export { Counter };
export default User;