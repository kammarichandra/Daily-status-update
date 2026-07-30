import ReactDOM from "react-dom";

function Tooltip({ x, y, text }) {

  return ReactDOM.createPortal(

    <div className="tooltip"
      style={{
        top: y + 15,
        left: x + 15
      }}
    >
      {text}
    </div>,
    document.getElementById("potral-root")
  );
}

export default Tooltip;