import Counter from "./LocalStatevsGlobalState_09-07-2026/counter";
import Navbar from "./LocalStatevsGlobalState_09-07-2026/Navbar";
import Profile from "./LocalStatevsGlobalState_09-07-2026/profile";
import AppProvider from "./Contrext_09-07-2026/Appcontext";

function App() {

  return (

    <AppProvider>

      <div style={{ textAlign: "center" }}>

        <h1>
          Local State vs Global State
        </h1>

        <Counter />

        <hr />

        <Navbar />

        <Profile />

      </div>

    </AppProvider>

  );

}

export default App;