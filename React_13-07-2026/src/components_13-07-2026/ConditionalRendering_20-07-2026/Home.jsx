import React from "react";
import Conditional from "./Conditonal";
import Ternary from "./Ternary";
import Logical from "./Logical";
import SwitchCase from "./SwitchCase";

function Home() {
  return (
    <div className="container">
      <h1>Conditional Rendering in React</h1>

      <hr />
      <h3>1. If-Else</h3>
      <Conditional isLoggedIn={true} />

      <hr />
      <h3>2. Ternary Operator</h3>
      <Ternary isLoggedIn={false} />

      <hr />
      <h3>3. Logical && Operator</h3>
      <Logical hasMessages={true} />

      <hr />
      <h3>4. Switch Case</h3>
      <SwitchCase role="admin" />
    </div>
  );
}

export default Home;