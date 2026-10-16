import React from 'react'

function EmpStatus({ isLoggedin }) {
  return (
    <div>
        <p>{isLoggedin ? 'Active' : 'onLeave'}</p>
    </div>
  )
}

export default EmpStatus