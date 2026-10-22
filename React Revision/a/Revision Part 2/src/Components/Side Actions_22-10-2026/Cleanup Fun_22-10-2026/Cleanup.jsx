import React, { useState } from 'react'
import WindowResize from './WindowResize';
import Timer from './Timer';

function Cleanup() {
    let [showTimer, setShowTimer] = useState(true);
    let [showResize, setShowResize] = useState(true);

    return (
        <div>
            <h1>React Cleanup Functions</h1>

            <button onClick={() => setShowTimer(!showTimer)}>
                {showTimer ? "Unmount Timer" : "Mount Timer"}
            </button>

            {showTimer && <Timer />}

            <hr />

            <button onClick={() => setShowResize(!showResize)}>
                {showResize ? "Unmount Resize" : "Mount Resize"}
            </button>

            {showResize && <WindowResize />}
        </div>
    )
}

export default Cleanup