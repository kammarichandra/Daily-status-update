import Header from "./Components_08-07-2026/ReactFegment";
import UserList from "./Components_08-07-2026/Userlist";
import Footer from "./Components_08-07-2026/footer";
import JsFunctions from "./JavascriptFunctions_08-07-2026/JsFunctions";
import RenderingVariables from "./JavascriptFunctions_08-07-2026/RenderingVariables";
import User, { Counter } from "./States&Props_08-07-2026/User";
import Parent from "./ComponentComunication/Parent";

function App() {
  const userData = {
    name: "chandra",
    age: 25,
    role: "ASE",
  };

  return (
    <>
      <Header />
      <UserList />
      <JsFunctions />
      <RenderingVariables />

      <div>
        <h1>State and props Example</h1>
        <User
          name={userData.name}
          age={userData.age}
          role={userData.role}
        />
        <Counter />
      </div>

      <div>
        <h2>Component Communication Example</h2>
        <Parent />
      </div>

      <Footer />
    </>
  );
}

export default App;