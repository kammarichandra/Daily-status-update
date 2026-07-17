import UserContext from "../../components_13-07-2026/React Revison_17-07-2026/StateManagment/UserContext";
import ContextApi from "../../components_13-07-2026/React Revison_17-07-2026/StateManagment/ContextApi";
function App() {
  return (
    <UserContext.Provider value="chandra">
      <ContextApi />
    </UserContext.Provider>
  );
}

export default App;