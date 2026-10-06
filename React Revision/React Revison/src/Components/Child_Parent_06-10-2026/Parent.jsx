import React from 'react'
import Child from './Child'

function Parent() {

    let getemployee = (name)=>{
        console.log(name)
    }
  return (
    <div>
        <h2>Parent component</h2>
        <Child sendData={getemployee} />
    </div>
  )
}

export default Parent