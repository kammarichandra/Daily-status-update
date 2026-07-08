import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
  const [message, setMessage] = useState("Hello from Parent");

  function updateMessage(newMessage) {
    setMessage(newMessage);
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Message: {message}</p>

      <Child1 msg={message} updatemsg={updateMessage} />
      <Child2 msg1={message} />
    </div>
  );
}

export default Parent;