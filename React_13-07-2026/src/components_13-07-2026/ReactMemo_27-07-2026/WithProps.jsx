import React, { useState } from "react";

let User = React.memo(({ name }) => {
  console.log("User Rendered");

  return <h2>Hello {name}</h2>;
});


function WithProps() {

  let [name, setName] = useState("chandra");

  return (
    <div>

      <User name={name}/>

      <button onClick={() => setName("kcs")}> Change Name  </button>

    </div>
  );
}

export default WithProps;