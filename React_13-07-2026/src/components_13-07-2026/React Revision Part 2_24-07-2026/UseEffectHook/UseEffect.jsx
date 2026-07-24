import React, { useEffect } from 'react'

function UseEffect() {
    
    useEffect(() => {
        console.log("component mounted")
    }, []);

    return (
        <div>
            <h1>check the console </h1>
        </div>
    )
}

export default UseEffect;