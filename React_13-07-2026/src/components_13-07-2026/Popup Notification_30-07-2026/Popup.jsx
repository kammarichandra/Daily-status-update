import React from 'react'
import ReactDOM from "react-dom";

function Popup({message}) {

  return ReactDOM.createPortal(

    <div className='popup'> {message} </div>,

    document.getElementById("potral-root")

  );
}

export default Popup 