import ReactDOM from "react-dom";

function Modal({ closeModal }) {

  return ReactDOM.createPortal(
    
    <div className="overlay">

      <div className="modal">

        <h2>Welcome</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <button onClick={closeModal}> Close </button>

      </div>
    </div>,

    document.getElementById("potral-root")
  );
}

export default Modal;