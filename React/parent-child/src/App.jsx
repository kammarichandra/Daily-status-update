import { useState } from "react";
import Header from "./Parent-child_08-07-2026/header";
import Sidebar from "./Parent-child_08-07-2026/sidebar";
import Content from "./Parent-child_08-07-2026/content";
import Footer from "./Parent-child_08-07-2026/footer";
import StudentCard from "./Props&states_08-07-2026/StudentCard";
import ChildButton from "./Child-parent_08-07-2026/ChildtoParentbutton";
import ChildForm from "./Child-parent_08-07-2026/ChildtoParentform";
import Child1 from "./Child-Child_08-07-2026/child1";
import Child2 from "./Child-Child_08-07-2026/child2";

function App() {
  let [count, setCount] = useState(0);
  let [message, setMessage] = useState("No message received");
  let [studentName, setStudentName] = useState("");

  function receiveMessage(data) {
    setMessage(data);
  }

  function receiveName(name) {
    setStudentName(name);
  }

  return (
    <div>
      <h1>Parent to child communication</h1>
      <Header />
      <Sidebar />
      <Content />
      <Footer />

      <h1>Child to child communication </h1>
      <div style={{ padding: "20px" }}>
        <Child1 sendmsg={receiveMessage} />
        <Child2 message={message} />
      </div>

      <div className="container" style={{ padding: "20px" }}>
        <h1>Child to Parent Communication</h1>

        <h2>Message:</h2>
        <p>{message}</p>

        <h1>Props and states</h1>
        <h2>Student Name:</h2>
        <p>{studentName}</p>

        <ChildButton sendmsg={receiveMessage} />
        <ChildForm sendName={receiveName} />
      </div>

      <div style={{ padding: "20px" }}>
        <h2>Counter Example</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <StudentCard name="Chandra" course="React" age="20" />
    </div>
  );
}

export default App;