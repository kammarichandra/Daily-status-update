import React from 'react'

function EmpStatus() {
    let isLoggedin = false

  return (
    <div>
        <p>{isLoggedin ? "active" : "onLeave"}</p>
    </div>
  )
}

export default EmpStatus