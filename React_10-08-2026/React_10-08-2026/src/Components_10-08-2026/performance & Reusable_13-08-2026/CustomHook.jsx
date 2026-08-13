import React, { useState } from 'react'

function CustomHook(initialvalue = 0) {

    const [count, setCount] = useState(initialvalue);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(initialvalue);

    return {
        count,
        increment,
        decrement,
        reset,
    }

}

export default CustomHook