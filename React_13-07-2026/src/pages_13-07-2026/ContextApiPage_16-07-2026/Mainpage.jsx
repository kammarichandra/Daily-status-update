import Home from "../../components_13-07-2026/ContextApi_16-07-2026/Home";
import { UserProvider } from "../../components_13-07-2026/ContextApi_16-07-2026/UserContext";

function Mainpage() {
  return (
    <UserProvider>
      <div>
        <h1>Main Page</h1>
        <Home />
      </div>
    </UserProvider>
  );
}

export default Mainpage;