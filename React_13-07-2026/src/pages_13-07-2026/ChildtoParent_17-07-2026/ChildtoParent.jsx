import ChildtoParent from "../../components_13-07-2026/React Revison_17-07-2026/ComponentCommunication/ChildtoParent";

function App() {

  function receiveData(message) {
    alert(message);
  }

  return (
    <div>
      <h1>Parent Component</h1>

      <ChildtoParent sendData={receiveData} />
    </div>
  );
}

export default App;