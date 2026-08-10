import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(Header),
    React.createElement(Home)
  );
}

export default App;