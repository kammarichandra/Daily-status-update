import React, { useMemo } from "react";
import User from "./User";

function App() {

  const user = useMemo(() => {
    return {
      name: "chandra"
    };
  }, []);

  return (
    <div>
      <User user={user} />
    </div>
  );
}

export default App;