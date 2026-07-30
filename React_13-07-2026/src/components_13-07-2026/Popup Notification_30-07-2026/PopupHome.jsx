import React, { useState } from 'react'
import Popup from './Popup'
import "./Popup.css";

function PopupHome() {

    let [show, setShow] = useState(false);

    let handleClick = () => {

        setShow(true);

        setTimeout(() => {
            setShow(false);
        }, 3000);
    };

    return (

        <div className="container">

            <h1>Popup Example</h1>

            <button onClick={handleClick}> Show Popup </button>

            {show && ( <Popup message="Data Saved Successfully!" /> )}

        </div>
    )
}

export default PopupHome