import React from 'react'
import Button from './Button'
function EmpActons() {
  return (
     <div>
      <Button onClick={() => alert("Employee added!")}>
        Add Employee
      </Button>

      <Button variant="danger">
        Delete
      </Button>

      <Button variant="secondary" disabled>
        Disabled
      </Button>
    </div>
  )
}

export default EmpActons