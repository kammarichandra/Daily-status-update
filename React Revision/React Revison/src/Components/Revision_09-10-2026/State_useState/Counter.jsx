import React, { useEffect, useState } from 'react'

function Counter() {

    let [count, setcount] = useState(0)

    useEffect(() => {
        console.log("button clikked..")
    }, [count])

    let isLoggedin = true

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => setcount(count + 1)}>inc</button>
            <button onClick={() => setcount(count - 1)}>dec</button>
            <button onClick={() => setcount(0)}>reset</button>

            <h2>Conditional Rendering</h2>
            {isLoggedin ? (<p>active...</p>) : (<p>on leave</p>)}

        </div>
    )
}

export default Counter;
