import React, { useEffect, useRef, useState } from 'react'

function UseEffectExm() {
    let [count, setcount] = useState(0);
    let rendercount = useRef(0);

    rendercount.current += 1;

    useEffect(() => {
        console.log("this will run after every render")
    })

    // 2. Runs only after the initial mount
    useEffect(() => {
        console.log("Component mounted for the first time");

        return () => {
            console.log("Component is unmounting");
        };
    }, []);

    // 3. Runs after the initial mount and whenever count changes
    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            
            <h2>useEffect Fundamentals</h2>

            <h3>Welcome to React!</h3>
            <p>Learn useEffect and component lifecycle.</p>

            <hr />

            <h3>State Management</h3>
            <p>Count: {count}</p>

            <button onClick={() => setcount(count + 1)}> Increment </button>

            <button onClick={() => setcount(count - 1)} style={{ marginLeft: "10px" }} > Decrement </button>

            <hr />

            <h3>Render Information</h3>
            <p>Component render count: {rendercount.current}</p>

            <p>Open the browser console (F12) to see effects.</p>
        </div>
    )
}

export default UseEffectExm