import ReactDOM from "react-dom";
// import EmployeeList from "./EmployeeList";
function Modal({ closeModal }) {

    return ReactDOM.createPortal(

        <div className="modal">

            <div className="modal-box">

                <h2>Employee Details</h2>
                {/* <EmployeeList/> */}
                <button onClick={closeModal}>Close</button>

            </div>

        </div>,
        document.getElementById("modal-root")
    );
}

export default Modal;