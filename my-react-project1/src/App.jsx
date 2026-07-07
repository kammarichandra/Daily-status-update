import "./App.css";
import FunctionalComponent from "./Componentes_07-07-2026/FunctionalComponents";
import ClassComponent from "./Componentes_07-07-2026/ClassComponent";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <h1>React Components</h1>

      <div>
        <h1>Student Information</h1>

        <p>Name: John Doe</p>

        <p>Course: React JS</p>

        <button>Submit</button>
      </div>
    </Fragment>



  );
}

export default App;
