import ReactDOM from "react-dom";

function Model({ children, close }) {
  return ReactDOM.createPortal(
    <div className="overlay" onClick={close}>
      <div
        className="model"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,

    document.getElementById("potral-root")
  );
}

export default Model;