import { useState } from "react";
import Modal from "./Modal";

function ReactPortalHome() {
  const [showModal, setShowModal] = useState(false);

  return (

    <div className="container">

      <h1>React Portal Practice</h1>

      <button onClick={() => setShowModal(true)}> Open Modal </button>

      {showModal && ( <Modal closeModal={() => setShowModal(false)} /> )}

    </div>
    
  );
}

export default ReactPortalHome;