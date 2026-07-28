import React from 'react'
import Usecounter from './Usecounter'
function CustomHookHome() {
    let {count , increment} = Usecounter();
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={increment}>inc</button>
    </div>
  )
}

export default CustomHookHome;