import React, { useState } from "react";

import Signup from "../../components_13-07-2026/Loginpage_20-07-2026/Signup";
import LoginForm from "../../components_13-07-2026/Loginpage_20-07-2026/LoginLogout";
import Profile from "../../components_13-07-2026/Loginpage_20-07-2026/Profile";

function App() {
  let [page, setPage] = useState("signup");
  let [user, setUser] = useState(null);

  return (
    <div>
      {page === "signup" && (
        <Signup setPage={setPage} />
      )}

      {page === "login" && (
        <LoginForm 
          setPage={setPage}
          setUser={setUser}
        />
      )}

      {page === "profile" && (
        <Profile user={user} />
      )}
    </div>
  );
}

export default App;