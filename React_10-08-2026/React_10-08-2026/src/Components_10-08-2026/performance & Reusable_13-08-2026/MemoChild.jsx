import React from "react";

let MemoChild = React.memo(function Child({ name }) {
  console.log("Child rendered");

  return <h3>Hello, {name}</h3>;
});

export default MemoChild;