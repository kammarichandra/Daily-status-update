import ChildtoChild1 from "../../components_13-07-2026/React Revison_17-07-2026/ComponentCommunication/ChildtoChild";
import ChildtoChild2 from "../../components_13-07-2026/React Revison_17-07-2026/ComponentCommunication/Childtochild1";
import { useState } from "react";
function App() {

  const [name, setName] = useState("");

  return (
    <div>
      <ChildtoChild1 sendName={setName} />
      <ChildtoChild2 name={name} />
    </div>
  );
}

export default App;