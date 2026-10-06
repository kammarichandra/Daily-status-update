import React from 'react'
import Button from './Button';

function Click() {
    let handleclick = ()=>{
        alert("button clicked..!")
    }
  return (
    <div>
        <Button onclick={handleclick}/>
    </div>
  )
}

export default Click